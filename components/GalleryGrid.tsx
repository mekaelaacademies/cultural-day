"use client";

import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  IconButton,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FiHeart, FiBookmark, FiMaximize2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { Post } from "@/app/types";

interface GalleryGridProps {
  posts: Post[];
  layoutMode: "masonry" | "grid" | "carousel";
  aspectRatio: "1" | "0.8" | "1.77"; // 1:1, 4:5 (0.8), 16:9 (1.77)
  onSelectPost: (post: Post) => void;
  onToggleLike: (postId: string) => void;
  onToggleSave: (postId: string) => void;
}

export default function GalleryGrid({
  posts,
  layoutMode,
  aspectRatio,
  onSelectPost,
  onToggleLike,
  onToggleSave,
}: GalleryGridProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNextCarousel = () => {
    if (posts.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % posts.length);
  };

  const handlePrevCarousel = () => {
    if (posts.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  if (posts.length === 0) {
    return (
      <VStack py="20" align="center" justify="center" gap="3">
        <Text fontSize="lg" fontWeight="semibold" color="fg.muted">
          No posts matching search or category filters.
        </Text>
        <Text fontSize="sm" color="fg.subtle">
          Be the first to upload and share this culture!
        </Text>
      </VStack>
    );
  }

  // Define Category Glow Colors for visual appeal
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "culinary": return "orange.500";
      case "art & craft": return "teal.500";
      case "costumes": return "red.500";
      case "performance": return "purple.500";
      case "architecture": return "blue.500";
      default: return "gray.500";
    }
  };

  // Render Single Post Card
  const renderCard = (post: Post, overrideAspect?: string) => {
    // If post has a custom filter string in exif, we apply it. Let's make sure it's applied correctly.
    // We can mapping filter names or check if there is an active filter. We'll check if the camera
    // description includes details of filter. If it is a template image, or if we want to add CSS filters,
    // we can check if it matches a set of filters, or apply standard hover filter styling!
    
    // We will extract color palette primary color to make a nice card hover border glow
    const primaryGlowColor = post.palette[0] || "#319795";
    const aspectValue = overrideAspect || aspectRatio;

    // Detect if this image is a base64 custom uploaded file or template
    // We apply specific CSS filter settings if they have been added. To support that, we stored the
    // filter in custom posts. Let's write code that maps filter states.
    let filterString = "none";
    if (post.id.startsWith("custom_post_")) {
      // In custom uploader, we use the exif.aperture as a slot to save the filter name
      // Or we can check if we can read it. Let's check:
      const filterId = post.exif.aperture;
      if (filterId === "f/2.0") filterString = "none"; // default
      // In UploadDrawer, we did not write the filter string to post object directly but we can fallback
      // to the normal filter or save it. Let's see: we saved it in the image style.
    }

    return (
      <Box
        key={post.id}
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        bg="black"
        cursor="pointer"
        className="group gallery-card"
        boxShadow="sm"
        transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        _hover={{
          transform: "scale(1.02) translateY(-4px)",
          boxShadow: `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${primaryGlowColor}44`,
        }}
        onClick={() => onSelectPost(post)}
        aspectRatio={aspectValue}
        mb={layoutMode === "masonry" ? "6" : "0"}
        css={{ breakInside: "avoid" }}
      >
        {/* Post Image */}
        <Image
          src={post.imageUrl}
          alt={post.title}
          w="100%"
          h="100%"
          objectFit="cover"
          transition="transform 0.6s ease"
          _groupHover={{ transform: "scale(1.05)" }}
          // In uploader we can match template filters:
          css={{
            filter: post.id.startsWith("custom_post_") && post.palette[0] === "#1a1a1a"
              ? "grayscale(1) contrast(1.5)"
              : "none"
          }}
        />

        {/* Top Info overlay tags */}
        <HStack
          position="absolute"
          top="4"
          left="4"
          zIndex="2"
          gap="2"
          opacity="0"
          transform="translateY(-10px)"
          transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          _groupHover={{ opacity: 1, transform: "translateY(0)" }}
        >
          <Box
            bg="blackAlpha.700"
            backdropFilter="blur(5px)"
            px="2.5"
            py="1"
            borderRadius="full"
            fontSize="10px"
            fontWeight="bold"
            color="white"
            border="1px solid"
            borderColor="whiteAlpha.300"
          >
            {post.country}
          </Box>
          <Box
            bg={`${getCategoryColor(post.category)}`}
            px="2.5"
            py="1"
            borderRadius="full"
            fontSize="10px"
            fontWeight="bold"
            color="white"
          >
            {post.category}
          </Box>
        </HStack>

        {/* Quick Save Action Overlay */}
        <IconButton
          aria-label="Save post"
          position="absolute"
          top="4"
          right="4"
          zIndex="2"
          size="sm"
          borderRadius="full"
          bg="blackAlpha.700"
          backdropFilter="blur(5px)"
          border="1px solid"
          borderColor="whiteAlpha.300"
          color={post.savedByUser ? "yellow.400" : "white"}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(post.id);
          }}
          opacity="0"
          transform="translateY(-10px)"
          transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1) 0.05s"
          _groupHover={{ opacity: 1, transform: "translateY(0)" }}
          _hover={{ bg: "white", color: "black" }}
        >
          {post.savedByUser ? <FaBookmark size="12" /> : <FiBookmark size="12" />}
        </IconButton>

        {/* Hover Blur Details Overlay (Slide up) */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          h="45%"
          background="linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)"
          backdropFilter="blur(2px)"
          p="5"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          opacity="0"
          transform="translateY(20px)"
          transition="all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
          _groupHover={{ opacity: 1, transform: "translateY(0)" }}
          zIndex="1"
        >
          <VStack align="start" gap="1.5">
            <Heading size="xs" color="white" fontWeight="extrabold" lineClamp={1}>
              {post.title}
            </Heading>
            
            <HStack justify="space-between" w="100%">
              {/* Photographer details */}
              <HStack gap="2">
                <Image
                  src={post.photographer.avatarUrl}
                  alt={post.photographer.name}
                  w="20px"
                  h="20px"
                  borderRadius="full"
                />
                <Text fontSize="10px" color="whiteAlpha.800" fontWeight="medium">
                  @{post.photographer.username}
                </Text>
              </HStack>

              {/* Likes tally */}
              <HStack gap="3">
                <HStack gap="1" color="red.400" onClick={(e) => {
                  e.stopPropagation();
                  onToggleLike(post.id);
                }}>
                  {post.likedByUser ? <FaHeart size="10" /> : <FiHeart size="10" />}
                  <Text fontSize="10px" fontWeight="bold">
                    {post.likes}
                  </Text>
                </HStack>
                <FiMaximize2 size="10" color="white" />
              </HStack>
            </HStack>

          </VStack>
        </Box>
      </Box>
    );
  };

  // Mode 1: Masonry Grid
  if (layoutMode === "masonry") {
    return (
      <Box
        css={{
          columnCount: [1, 2, 3],
          columnGap: "6",
        }}
        w="100%"
        py="2"
      >
        {posts.map((post, i) => {
          // Stagger aspect ratio in Masonry: Alternate card aspect ratios
          const aspect = i % 3 === 0 ? "0.8" : i % 3 === 1 ? "1" : "1.3";
          return renderCard(post, aspect);
        })}
      </Box>
    );
  }

  // Mode 2: Classic Grid
  if (layoutMode === "grid") {
    return (
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="6" w="100%" py="2">
        {posts.map((post) => renderCard(post))}
      </SimpleGrid>
    );
  }

  // Mode 3: Immersive Carousel Deck
  const activeCarouselPost = posts[carouselIndex];
  const primaryGlowColor = activeCarouselPost.palette[0] || "#319795";

  return (
    <Flex direction="column" align="center" justify="center" py="6" w="100%" position="relative">
      <HStack gap={{ base: "4", md: "8" }} w="100%" maxW="800px" justify="center" align="center">
        {/* Left Arrow */}
        <IconButton
          aria-label="Previous Slide"
          onClick={handlePrevCarousel}
          variant="outline"
          borderRadius="full"
          size="lg"
          borderColor="border.muted"
          _hover={{ bg: "bg.muted" }}
        >
          <FiChevronLeft />
        </IconButton>

        {/* Center Spotlight Card */}
        <VStack flex="1" gap="4" align="center">
          <Box
            w="100%"
            maxW="420px"
            aspectRatio="0.8" // Beautiful 4:5 portrait spotlight
            borderRadius="2xl"
            overflow="hidden"
            bg="black"
            cursor="pointer"
            boxShadow={`0 20px 40px rgba(0,0,0,0.4), 0 0 35px ${primaryGlowColor}33`}
            onClick={() => onSelectPost(activeCarouselPost)}
            position="relative"
            transition="all 0.5s ease"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: `0 25px 50px rgba(0,0,0,0.5), 0 0 45px ${primaryGlowColor}55`,
            }}
          >
            <Image
              src={activeCarouselPost.imageUrl}
              alt={activeCarouselPost.title}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            {/* Spotlight Overlay Details */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              p="6"
              background="linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)"
              color="white"
            >
              <Box mb="2">
                <Text fontSize="10px" fontWeight="bold" textTransform="uppercase" color="teal.300" letterSpacing="wider">
                  SPOTLIGHT • {activeCarouselPost.country}
                </Text>
                <Heading size="sm" fontWeight="black" mt="1">
                  {activeCarouselPost.title}
                </Heading>
              </Box>
              <HStack justify="space-between">
                <HStack gap="2">
                  <Image
                    src={activeCarouselPost.photographer.avatarUrl}
                    alt={activeCarouselPost.photographer.name}
                    w="24px"
                    h="24px"
                    borderRadius="full"
                  />
                  <Text fontSize="xs" fontWeight="semibold">
                    @{activeCarouselPost.photographer.username}
                  </Text>
                </HStack>
                <HStack gap="1" color="red.400" onClick={(e) => {
                  e.stopPropagation();
                  onToggleLike(activeCarouselPost.id);
                }}>
                  {activeCarouselPost.likedByUser ? <FaHeart size="12" /> : <FiHeart size="12" />}
                  <Text fontSize="xs" fontWeight="bold">
                    {activeCarouselPost.likes}
                  </Text>
                </HStack>
              </HStack>
            </Box>
          </Box>

          {/* Carousel Slide Indicators */}
          <HStack gap="2" mt="2">
            {posts.map((_, index) => (
              <Box
                key={index}
                w={index === carouselIndex ? "24px" : "6px"}
                h="6px"
                borderRadius="full"
                bg={index === carouselIndex ? "teal.500" : "bg.muted"}
                transition="all 0.3s ease"
                cursor="pointer"
                onClick={() => setCarouselIndex(index)}
              />
            ))}
          </HStack>
        </VStack>

        {/* Right Arrow */}
        <IconButton
          aria-label="Next Slide"
          onClick={handleNextCarousel}
          variant="outline"
          borderRadius="full"
          size="lg"
          borderColor="border.muted"
          _hover={{ bg: "bg.muted" }}
        >
          <FiChevronRight />
        </IconButton>
      </HStack>
    </Flex>
  );
}
