"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Image,
  HStack,
  VStack,
  IconButton,
  ClientOnly,
  Skeleton,
  Center,
} from "@chakra-ui/react";
import {
  FiSearch,
  FiGrid,
  FiActivity,
  FiPlus,
  FiUser,
  FiSliders,
} from "react-icons/fi";
import { LuTrello } from "react-icons/lu";
import { INITIAL_POSTS, INITIAL_COMMENTS, STORIES, BADGES } from "./data";
import { Post, Comment, Badge } from "./types";
import StoryRing from "@/components/StoryRing";
import StoryViewer from "@/components/StoryViewer";
import DetailModal from "@/components/DetailModal";
import UploadDrawer from "@/components/UploadDrawer";
import StatsSection from "@/components/StatsSection";
import UserProfile from "@/components/UserProfile";
import GalleryGrid from "@/components/GalleryGrid";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "motion/react"

const CATEGORIES = ["All", "Staff Tournament", "Student Tournament", "Cultural Day", "Talent Explosion", "Road Show", "Bonefire"];
const WORDS = ["MEKAELA AT 30", "CENTRE OF EXCELLENCE", "SOURING NEW HEIGHTS"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
export default function Home() {
  // Core Database States
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [badges, setBadges] = useState<Badge[]>(BADGES);

  // Navigation & Filtering States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [layoutMode, setLayoutMode] = useState<"masonry" | "grid" | "carousel">("masonry");
  const [aspectRatio, setAspectRatio] = useState<"1" | "0.8" | "1.77">("1"); // grid card aspect

  // Modals & Panels visibility
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Gamification tracking states
  const [viewedPostIds, setViewedPostIds] = useState<Set<string>>(new Set());
  const [display, setDisplay] = useState("FRAMER");
  const [wordIdx, setWordIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cycle = () => {
      const nextIdx = (wordIdx + 1) % WORDS.length;
      const target = WORDS[nextIdx];
      let frame = 0;
      const total = 20;
      //@ts-expect-error:fix
      clearInterval(intervalRef.current);
      //@ts-expect-error:fix
      intervalRef.current = setInterval(() => {
        setDisplay(
          target
            .split("")
            .map((ch, i) =>
              frame / total > i / target.length
                ? ch
                : CHARS[Math.floor(Math.random() * CHARS.length)]
            )
            .join("")
        );
        frame++;
        if (frame > total) {
          //@ts-expect-error:fix
          clearInterval(intervalRef.current);
          setDisplay(target);
          setWordIdx(nextIdx);
        }
      }, 40);
    };
    const t = setTimeout(cycle, 1800);
    return () => clearTimeout(t);
  }, [wordIdx]);
  // Handle active stories skipping
  const currentStoryIndex = STORIES.findIndex((s) => s.id === selectedStoryId);
  const handleNextStory = () => {
    if (currentStoryIndex !== -1 && currentStoryIndex < STORIES.length - 1) {
      setSelectedStoryId(STORIES[currentStoryIndex + 1].id);
    } else {
      setSelectedStoryId(null);
    }
  };
  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setSelectedStoryId(STORIES[currentStoryIndex - 1].id);
    }
  };

  // State operations
  const handleToggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const liked = !post.likedByUser;
          return {
            ...post,
            likedByUser: liked,
            likes: liked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );
  };

  const handleToggleSave = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return { ...post, savedByUser: !post.savedByUser };
        }
        return post;
      })
    );
  };

  const handleAddComment = (postId: string, text: string) => {
    const newComment: Comment = {
      id: `comment_${Date.now()}`,
      postId,
      username: "alex_explorer",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
      text,
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => [newComment, ...prev]);

    // Update comment count on post
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return { ...post, commentsCount: post.commentsCount + 1 };
        }
        return post;
      })
    );
  };

  const handleAddPost = (newPostData: Omit<Post, "likes" | "commentsCount" | "createdAt">) => {
    const newPost: Post = {
      ...newPostData,
      likes: 0,
      commentsCount: 0,
      createdAt: new Date().toISOString(),
      likedByUser: false,
      savedByUser: false,
    };
    setPosts((prev) => [newPost, ...prev]);

    // Unlock "Creative Editor" badge instantly on upload
    unlockBadge("badge_4");
  };

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
    setIsDetailOpen(true);

    // Track posts viewed for achievements
    setViewedPostIds((prev) => {
      const next = new Set(prev);
      next.add(post.id);
      return next;
    });
  };

  // Badge Unlocking Logic
  const unlockBadge = (badgeId: string) => {
    setBadges((prev) =>
      prev.map((badge) => {
        if (badge.id === badgeId && !badge.earnedAt) {
          return { ...badge, earnedAt: new Date().toISOString() };
        }
        return badge;
      })
    );
  };

  // Check achievements after state updates
  useEffect(() => {
    // 1. "Culture Historian" - Read 3+ posts
    if (viewedPostIds.size >= 3) {
      unlockBadge("badge_2");
    }

    // 2. "Visual Connoisseur" - Open detail modal and look at EXIF info
    if (viewedPostIds.size >= 1) {
      unlockBadge("badge_3");
    }

    // 3. "Global Explorer" - Like posts from 3+ different countries
    const likedPosts = posts.filter((p) => p.likedByUser);
    const uniqueLikedCountries = new Set(likedPosts.map((p) => p.country.trim().toLowerCase()));
    if (uniqueLikedCountries.size >= 3) {
      unlockBadge("badge_1");
    }
  }, [viewedPostIds, posts]);

  // Filtering Logic
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });
const box = {
    width: 100,
    height: 100,

    borderRadius: 5,
}
  return (
    <Box bg="bg.canvas" minH="100vh" pb="12" transition="background-color 0.2s">
      <Container maxW="6xl" px={{ base: "4", md: "6" }}>

        {/* HEADER SECTION */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          py="6"
          borderBottom="1px solid"
          borderColor="border.muted"
          gap="4"
        > <Center>

     
                    <HStack display={{ base: "flex", md: "none" }}   align="center"  w={{ base: "100%", md: "340px" }} gap="2">
            <Box justifyContent={'center'}      alignItems={'center'} position="relative" w="100%">
              {/* <Input
                placeholder="Search cultures, locations, crafts..."
                size="sm"
                borderRadius="full"
                pl="9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="bg.panel"
                border="1px solid"
                borderColor="border.muted"
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 8px rgba(49, 151, 149, 0.2)" }}
              />
              <Box position="absolute" left="3.5" top="2" color="fg.subtle">
                <FiSearch size="14" />
              </Box> */}
              <motion.div       
                  
                  
              style={box}
                whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }} >        
           <Image
                src={"/images/logo.png"}
                alt={"logo"}
                w={20}
                h={20}
                borderRadius="full"
              />  
                 </motion.div >
      

            </Box>
          </HStack>
             </Center>
          {/* Logo with Glow Gradient */}
          <Box cursor="pointer" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
            <Heading
              size="lg"
              fontWeight="black"
              letterSpacing="tight"
              bgGradient="to-r"
              gradientFrom="orange.400"
              gradientTo="purple.500"
              bgClip="text"
              _hover={{ opacity: 0.9 }}
              textAlign={{ base: "center", md: "left" }}
            >
              MEKAELA ACADEMIES
            </Heading>
            <Text fontSize="10px" fontWeight="bold" letterSpacing="widest" color="fg.muted" textAlign={{ base: "center", md: "left" }}>
              MEKA @ 30 AND CULTURAL DAY
              <div style={{ fontFamily: "monospace", fontSize: 28, fontWeight: 900, color: "#34d399", letterSpacing: "0.12em" }}>
                {display}
              </div>
            </Text>
          </Box>

          {/* Search Input Bar */}
          <HStack display={{ base: "none", md: "flex" }}   w={{ base: "100%", md: "340px" }} gap="2">
            <Box position="relative" w="100%">
              {/* <Input
                placeholder="Search cultures, locations, crafts..."
                size="sm"
                borderRadius="full"
                pl="9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="bg.panel"
                border="1px solid"
                borderColor="border.muted"
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 8px rgba(49, 151, 149, 0.2)" }}
              />
              <Box position="absolute" left="3.5" top="2" color="fg.subtle">
                <FiSearch size="14" />
              </Box> */}
              <motion.div       
                  
                  
              style={box}
                whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }} >        
           <Image
                src={"/images/logo.png"}
                alt={"logo"}
                w={20}
                h={20}
                borderRadius="full"
              />  
                 </motion.div >
      

            </Box>
          </HStack>

          {/* Actions: Add, Profile, Mode toggles */}
          <HStack gap="3" w={{ base: "100%", md: "auto" }} justify={{ base: "center", md: "flex-end" }}>
            {/* <Button
              size="sm"
              colorPalette="teal"
              borderRadius="full"
              onClick={() => setIsUploadOpen(true)}
              px="4"
            >
              <FiPlus /> Share Post
            </Button>
             */}
            {/* Explorer Profile with dynamic notification dot for badges */}
            <Box position="relative">
              {/* <IconButton
                aria-label="Profile dashboard"
                variant="outline"
                size="sm"
                borderRadius="full"
                onClick={() => setIsProfileOpen(true)}
              >
                <FiUser />
              </IconButton> */}
              {/* {badges.some((b) => b.earnedAt && !INITIAL_POSTS[0].likedByUser) && (
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  w="10px"
                  h="10px"
                  bg="teal.500"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="bg.canvas"
                />
              )} */}

            </Box>

            <ClientOnly fallback={<Skeleton boxSize="8" />}>
              <ColorModeButton />
            </ClientOnly>
          </HStack>
        </Flex>

        {/* STORIES SECTION (Categories / Booths) */}
        <Box my="4">
          <StoryRing
            stories={STORIES}
            onSelectStory={(storyId) => setSelectedStoryId(storyId)}
          />
        </Box>

        {/* METRICS & NUMBERS DASHBOARD */}
        <Box my="6">
          <StatsSection posts={posts} />
        </Box>

        {/* MAIN EXHIBITION CONTROLS */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          align={{ base: "stretch", sm: "center" }}
          justify="space-between"
          my="6"
          gap="4"
        >
          {/* Category Tabs */}
          <HStack
            gap="2"
            overflowX="auto"
            py="1"
            scrollbar="none"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                size="xs"
                variant={selectedCategory === cat ? "solid" : "outline"}
                colorPalette={selectedCategory === cat ? "teal" : "gray"}
                borderRadius="full"
                onClick={() => setSelectedCategory(cat)}
                px="3.5"
                fontWeight="bold"
              >
                {cat}
              </Button>
            ))}
          </HStack>

          {/* Layout Configuration Bar */}
          <HStack gap="3" justify={{ base: "space-between", sm: "flex-end" }}>

            {/* Grid Ratio Filters (Visible only in Grid Mode) */}
            {layoutMode === "grid" && (
              <HStack gap="1" bg="bg.panel" p="0.5" borderRadius="lg" border="1px solid" borderColor="border.muted">
                <Button
                  size="2xs"
                  variant={aspectRatio === "1" ? "solid" : "ghost"}
                  colorPalette={aspectRatio === "1" ? "teal" : "gray"}
                  onClick={() => setAspectRatio("1")}
                  fontSize="9px"
                >
                  1:1
                </Button>
                <Button
                  size="2xs"
                  variant={aspectRatio === "0.8" ? "solid" : "ghost"}
                  colorPalette={aspectRatio === "0.8" ? "teal" : "gray"}
                  onClick={() => setAspectRatio("0.8")}
                  fontSize="9px"
                >
                  4:5
                </Button>
                <Button
                  size="2xs"
                  variant={aspectRatio === "1.77" ? "solid" : "ghost"}
                  colorPalette={aspectRatio === "1.77" ? "teal" : "gray"}
                  onClick={() => setAspectRatio("1.77")}
                  fontSize="9px"
                >
                  16:9
                </Button>
              </HStack>
            )}

            {/* Layout Mode Toggles */}
            <HStack gap="1" bg="bg.panel" p="0.5" borderRadius="lg" border="1px solid" borderColor="border.muted">
              <IconButton
                aria-label="Masonry layout"
                size="xs"
                variant={layoutMode === "masonry" ? "solid" : "ghost"}
                colorPalette={layoutMode === "masonry" ? "teal" : "gray"}
                onClick={() => setLayoutMode("masonry")}
                title="Masonry Feed"
              >
                <LuTrello size="13" />
              </IconButton>
              <IconButton
                aria-label="Grid layout"
                size="xs"
                variant={layoutMode === "grid" ? "solid" : "ghost"}
                colorPalette={layoutMode === "grid" ? "teal" : "gray"}
                onClick={() => setLayoutMode("grid")}
                title="Square Grid"
              >
                <FiGrid size="13" />
              </IconButton>
              <IconButton
                aria-label="Spotlight carousel"
                size="xs"
                variant={layoutMode === "carousel" ? "solid" : "ghost"}
                colorPalette={layoutMode === "carousel" ? "teal" : "gray"}
                onClick={() => setLayoutMode("carousel")}
                title="Spotlight Carousel"
              >
                <FiSliders size="13" />
              </IconButton>
            </HStack>
          </HStack>
        </Flex>

        {/* THE MAIN GALLERY GRID ENGINE */}
        <Box mt="4">
          <GalleryGrid
            posts={filteredPosts}
            layoutMode={layoutMode}
            aspectRatio={aspectRatio}
            onSelectPost={handleSelectPost}
            onToggleLike={handleToggleLike}
            onToggleSave={handleToggleSave}
          />
        </Box>

        {/* INTERACTIVE POPUPS, MODALS, DRAWERS */}

        {/* Fullscreen Media Lightbox Modal */}
        <DetailModal
          post={selectedPost}
          isOpen={isDetailOpen}
          onOpenChange={setIsDetailOpen}
          comments={comments}
          onAddComment={handleAddComment}
          onToggleLike={handleToggleLike}
        />

        {/* Post Creation Drawer */}
        <UploadDrawer
          isOpen={isUploadOpen}
          onOpenChange={setIsUploadOpen}
          onAddPost={handleAddPost}
        />

        {/* User Explorer Bio Drawer */}
        <UserProfile
          isOpen={isProfileOpen}
          onOpenChange={setIsProfileOpen}
          posts={posts}
          badges={badges}
          onSelectPost={handleSelectPost}
        />

        {/* Fullscreen Stories Player Overlay */}
        {selectedStoryId && (
          <StoryViewer
            story={STORIES.find((s) => s.id === selectedStoryId) || null}
            onClose={() => setSelectedStoryId(null)}
            onNextStory={handleNextStory}
            onPrevStory={handlePrevStory}
          />
        )}

        {/* Universal Toaster system */}
        <Toaster />

      </Container>
    </Box>
  );
}
