"use client";

import React, { useState } from "react";
import {
  Dialog,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Separator,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FiHeart, FiCamera, FiMapPin, FiCalendar, FiMessageCircle, FiSmile } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Post, Comment } from "@/app/types";
import { toaster } from "@/components/ui/toaster";

interface DetailModalProps {
  post: Post | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  comments: Comment[];
  onAddComment: (postId: string, text: string) => void;
  onToggleLike: (postId: string) => void;
}

export default function DetailModal({
  post,
  isOpen,
  onOpenChange,
  comments,
  onAddComment,
  onToggleLike,
}: DetailModalProps) {
  const [newCommentText, setNewCommentText] = useState("");
  const [showHearts, setShowHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const heartIdRef = useRef(0);

  // Use a ref to increment IDs safely inside the component
  function useRef(initialValue: number) {
    const [ref] = useState({ current: initialValue });
    return ref;
  }

  if (!post) return null;

  const postComments = comments.filter((c) => c.postId === post.id);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toaster.create({
      title: "Color Copied",
      description: `Hex code ${color} copied to clipboard!`,
      type: "success",
    });
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    onAddComment(post.id, newCommentText.trim());
    setNewCommentText("");
  };

  // Perform double tap / click to like with floating heart burst
  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!post.likedByUser) {
      onToggleLike(post.id);
    }
    
    // Add a floating heart at the mouse coordinate
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const id = heartIdRef.current++;
    setShowHearts((prev) => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setShowHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1000);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => onOpenChange(e.open)} size="xl">
      <Dialog.Backdrop bg="rgba(0, 0, 0, 0.85)" backdropFilter="blur(10px)" />
      <Dialog.Positioner>
        <Dialog.Content
          bg="bg.panel"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="2xl"
          border="1px solid"
          borderColor="border.muted"
          maxW={{ base: "95vw", md: "85vw", lg: "950px" }}
          h={{ base: "auto", md: "80vh" }}
          maxH={{ base: "90vh", md: "700px" }}
        >
          <Flex direction={{ base: "column", md: "row" }} h="100%" w="100%">
            
            {/* LEFT SIDE: Image Viewer (Double tap to like) */}
            <Box
              flex={{ base: "none", md: "1.2" }}
              bg="black"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              h={{ base: "300px", md: "100%" }}
              onDoubleClick={handleDoubleClick}
              cursor="pointer"
              userSelect="none"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                maxH="100%"
                maxW="100%"
                objectFit="contain"
              />
              
              {/* Double-tap Heart Burst Overlay */}
              {showHearts.map((heart) => (
                <Box
                  key={heart.id}
                  position="absolute"
                  left={`${heart.x}px`}
                  top={`${heart.y}px`}
                  transform="translate(-50%, -50%) scale(1.5)"
                  animation="heart-burst 0.8s ease-out forwards"
                  pointerEvents="none"
                  color="red.500"
                  zIndex="10"
                >
                  <FaHeart size="64" />
                </Box>
              ))}

              {/* Dynamic styles injected for the heart animation */}
              <style>{`
                @keyframes heart-burst {
                  0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
                  20% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.9; }
                  80% { transform: translate(-50%, -50%) scale(1.0); opacity: 0.8; }
                  100% { transform: translate(-50%, -50%) scale(1.4) translateY(-40px); opacity: 0; }
                }
              `}</style>

              {/* Tag indicator overlay */}
              <Box
                position="absolute"
                bottom="4"
                left="4"
                bg="blackAlpha.700"
                backdropFilter="blur(5px)"
                px="3"
                py="1.5"
                borderRadius="full"
                fontSize="xs"
                color="white"
                fontWeight="semibold"
              >
                {post.category} • {post.country}
              </Box>
            </Box>

            {/* RIGHT SIDE: Information Feed (Scrollable) */}
            <Flex
              flex="1"
              direction="column"
              h="100%"
              maxH={{ base: "none", md: "100%" }}
              bg="bg.panel"
              p="6"
              overflowY="auto"
            >
              {/* Top Bar: Photographer info & Close button */}
              <Flex align="center" justify="space-between" mb="4">
                <HStack gap="3">
                  <Image
                    src={post.photographer.avatarUrl}
                    alt={post.photographer.name}
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    border="1px solid"
                    borderColor="border.muted"
                  />
                  <Box>
                    <Text fontSize="sm" fontWeight="bold">
                      {post.photographer.name}
                    </Text>
                    <Text fontSize="xs" color="fg.muted">
                      @{post.photographer.username}
                    </Text>
                  </Box>
                </HStack>
                <Dialog.CloseTrigger position="relative" top="0" right="0" />
              </Flex>

              <Separator mb="4" />

              {/* Description & Cultural Significance */}
              <VStack align="stretch" gap="4" flex="1" overflowY="auto" pr="1" mb="4">
                <Box>
                  <Heading size="md" mb="2" fontWeight="extrabold">
                    {post.title}
                  </Heading>
                  <Text fontSize="sm" color="fg.info" lineHeight="tall">
                    {post.description}
                  </Text>
                </Box>

                {/* Cultural Significance Block */}
                <Box
                  bg="bg.muted"
                  p="4"
                  borderRadius="xl"
                  borderLeft="4px solid"
                  borderColor="teal.500"
                >
                  <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" color="teal.500" mb="1">
                    📜 Cultural Significance
                  </Text>
                  <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                    {post.culturalSignificance}
                  </Text>
                </Box>

                {/* EXIF Metadata Card */}
                <Box border="1px solid" borderColor="border.muted" borderRadius="xl" p="4">
                  <HStack gap="2" mb="3">
                    <FiCamera color="#319795" />
                    <Text fontSize="xs" fontWeight="bold" color="fg.muted">
                      EXIF DATA & METADATA
                    </Text>
                  </HStack>
                  <Flex wrap="wrap" gap="4">
                    <Box minW="100px" flex="1">
                      <Text fontSize="10px" color="fg.subtle" textTransform="uppercase">Camera</Text>
                      <Text fontSize="xs" fontWeight="semibold">{post.exif.camera}</Text>
                    </Box>
                    <Box minW="100px" flex="1">
                      <Text fontSize="10px" color="fg.subtle" textTransform="uppercase">Lens</Text>
                      <Text fontSize="xs" fontWeight="semibold">{post.exif.lens}</Text>
                    </Box>
                    <Box minW="70px" flex="1">
                      <Text fontSize="10px" color="fg.subtle" textTransform="uppercase">Aperture</Text>
                      <Text fontSize="xs" fontWeight="semibold">{post.exif.aperture}</Text>
                    </Box>
                    <Box minW="70px" flex="1">
                      <Text fontSize="10px" color="fg.subtle" textTransform="uppercase">Shutter</Text>
                      <Text fontSize="xs" fontWeight="semibold">{post.exif.shutterSpeed}</Text>
                    </Box>
                    <Box minW="50px" flex="1">
                      <Text fontSize="10px" color="fg.subtle" textTransform="uppercase">ISO</Text>
                      <Text fontSize="xs" fontWeight="semibold">{post.exif.iso}</Text>
                    </Box>
                    <Box minW="120px" flex="2">
                      <Text fontSize="10px" color="fg.subtle" textTransform="uppercase">Location</Text>
                      <HStack gap="1">
                        <FiMapPin size="10" color="red" />
                        <Text fontSize="xs" fontWeight="semibold">{post.exif.location}</Text>
                      </HStack>
                    </Box>
                  </Flex>
                </Box>

                {/* Color Palette swatch bar */}
                <Box>
                  <Text fontSize="xs" fontWeight="bold" color="fg.muted" mb="2">
                    🎨 EXTRACTED PALETTE (Click to Copy Hex)
                  </Text>
                  <HStack gap="2">
                    {post.palette.map((color) => (
                      <Box
                        key={color}
                        w="100%"
                        h="36px"
                        bg={color}
                        borderRadius="md"
                        cursor="pointer"
                        onClick={() => handleCopyColor(color)}
                        transition="transform 0.2s, box-shadow 0.2s"
                        _hover={{ transform: "scale(1.08)", boxShadow: "md" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        title={color}
                      >
                        <Text
                          fontSize="9px"
                          fontWeight="bold"
                          color={
                            // Simple text contrast fallback
                            parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? "black" : "white"
                          }
                          opacity="0"
                          _hover={{ opacity: 1 }}
                        >
                          Copy
                        </Text>
                      </Box>
                    ))}
                  </HStack>
                </Box>

                {/* Simulated live comment stream */}
                <Box mt="2">
                  <HStack gap="2" mb="3">
                    <FiMessageCircle />
                    <Text fontSize="xs" fontWeight="bold" color="fg.muted">
                      COMMUNITY ACTIVITY ({postComments.length})
                    </Text>
                  </HStack>
                  <VStack align="stretch" gap="3">
                    {postComments.map((comment) => (
                      <Flex key={comment.id} gap="3" align="start">
                        <Image
                          src={comment.avatarUrl}
                          alt={comment.username}
                          w="28px"
                          h="28px"
                          borderRadius="full"
                        />
                        <Box bg="bg.muted" px="3" py="2" borderRadius="xl" flex="1">
                          <Flex align="center" justify="space-between" mb="1">
                            <Text fontSize="xs" fontWeight="bold">
                              {comment.username}
                            </Text>
                            <Text fontSize="10px" color="fg.subtle">
                              {new Date(comment.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </Text>
                          </Flex>
                          <Text fontSize="xs" color="fg.muted">
                            {comment.text}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
              </VStack>

              <Separator mb="3" />

              {/* Bottom Actions: Like / Save / Comment input */}
              <Box>
                <HStack justify="space-between" mb="3">
                  <HStack gap="4">
                    <IconButton
                      aria-label="Like post"
                      variant="ghost"
                      onClick={() => onToggleLike(post.id)}
                      color={post.likedByUser ? "red.500" : "current"}
                      _hover={{ bg: "bg.muted" }}
                    >
                      {post.likedByUser ? <FaHeart size="20" /> : <FiHeart size="20" />}
                    </IconButton>
                    <Text fontSize="xs" fontWeight="bold">
                      {post.likes} likes
                    </Text>
                  </HStack>
                  <Text fontSize="10px" color="fg.subtle">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </Text>
                </HStack>

                <form onSubmit={handlePostComment}>
                  <HStack gap="2">
                    <Input
                      placeholder="Add an insightful comment..."
                      size="sm"
                      borderRadius="full"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                    />
                    <Button
                      type="submit"
                      colorPalette="teal"
                      size="sm"
                      borderRadius="full"
                      px="4"
                      disabled={!newCommentText.trim()}
                    >
                      Post
                    </Button>
                  </HStack>
                </form>
              </Box>

            </Flex>
          </Flex>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
