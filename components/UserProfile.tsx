"use client";

import React, { useState } from "react";
import {
  Drawer,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
  Tabs,
  SimpleGrid,
  Input,
  Textarea,
  Separator,
} from "@chakra-ui/react";
import { FiEdit2, FiCheck, FiBookmark, FiGrid, FiAward, FiHeart } from "react-icons/fi";
import { Post, Badge } from "@/app/types";
import { toaster } from "@/components/ui/toaster";

interface UserProfileProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  posts: Post[];
  badges: Badge[];
  onSelectPost: (post: Post) => void;
}

export default function UserProfile({
  isOpen,
  onOpenChange,
  posts,
  badges,
  onSelectPost,
}: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileName, setProfileName] = useState("Alex Mercer");
  const [profileBio, setProfileBio] = useState("Anthropologist and culture researcher. Documenting local festivals, craft traditions, and culinary rituals around the globe. 🌍📷");

  // Filter user posts
  const myPosts = posts.filter(
    (p) =>
      p.photographer.username === "curious_traveler" ||
      p.photographer.username === "alex_mercer"
  );

  // Filter saved posts
  const savedPosts = posts.filter((p) => p.savedByUser);

  const handleSaveBio = () => {
    setIsEditing(false);
    toaster.create({
      title: "Profile Updated",
      description: "Your name and biography have been saved successfully.",
      type: "success",
    });
  };

  const handleSelectBadge = (badge: Badge) => {
    const isEarned = !!badge.earnedAt;
    toaster.create({
      title: badge.name,
      description: `${badge.description} Status: ${
        isEarned
          ? `Earned on ${new Date(badge.earnedAt).toLocaleDateString()}`
          : "Locked. Keep exploring the cultural day gallery to unlock!"
      }`,
      type: isEarned ? "success" : "info",
    });
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={(e) => onOpenChange(e.open)} size="md">
      <Drawer.Backdrop bg="rgba(0, 0, 0, 0.4)" backdropFilter="blur(5px)" />
      <Drawer.Positioner>
        <Drawer.Content
          bg="bg.panel"
          borderLeft="1px solid"
          borderColor="border.muted"
          boxShadow="2xl"
          h="100%"
          display="flex"
          flexDirection="column"
        >
          <Drawer.Header borderBottom="1px solid" borderColor="border.muted" px="6" py="4">
            <Flex align="center" justify="space-between">
              <Heading size="md" fontWeight="extrabold">Explorer Dashboard</Heading>
              <Drawer.CloseTrigger position="relative" top="0" right="0" />
            </Flex>
          </Drawer.Header>

          <Drawer.Body flex="1" overflowY="auto" p="6">
            <VStack gap="6" align="stretch">
              
              {/* Profile Bio Header */}
              <VStack align="center" gap="3" textAlign="center" position="relative">
                <Box position="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=180&h=180&q=80"
                    alt="Alex Mercer Avatar"
                    w="96px"
                    h="96px"
                    borderRadius="full"
                    border="3px solid"
                    borderColor="teal.500"
                    boxShadow="md"
                  />
                  <Box
                    position="absolute"
                    bottom="0"
                    right="0"
                    bg="teal.500"
                    color="white"
                    px="2"
                    py="0.5"
                    borderRadius="full"
                    fontSize="9px"
                    fontWeight="bold"
                    boxShadow="sm"
                  >
                    LVL 3
                  </Box>
                </Box>

                {isEditing ? (
                  <VStack w="100%" gap="2">
                    <Input
                      size="sm"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      fontWeight="bold"
                      textAlign="center"
                    />
                    <Textarea
                      size="sm"
                      rows={3}
                      value={profileBio}
                      onChange={(e) => setProfileBio(e.target.value)}
                    />
                    <Button
                      size="xs"
                      colorPalette="teal"
                      onClick={handleSaveBio}
                    >
                      <FiCheck /> Save Profile
                    </Button>
                  </VStack>
                ) : (
                  <Box w="100%">
                    <Heading size="md" fontWeight="black" display="inline-flex" alignItems="center" gap="2">
                      {profileName}
                      <Button
                        variant="ghost"
                        size="xs"
                        p="1"
                        minW="auto"
                        h="auto"
                        onClick={() => setIsEditing(true)}
                        color="fg.muted"
                        title="Edit profile"
                      >
                        <FiEdit2 size="12" />
                      </Button>
                    </Heading>
                    <Text fontSize="xs" color="fg.subtle" mb="2">
                      @alex_explorer
                    </Text>
                    <Text fontSize="xs" color="fg.muted" lineHeight="tall" maxW="340px" mx="auto">
                      {profileBio}
                    </Text>
                  </Box>
                )}
              </VStack>

              {/* Dynamic Stats Row */}
              <HStack gap="4" justify="center" py="3" borderY="1px solid" borderColor="border.muted">
                <VStack gap="0" flex="1" align="center">
                  <Text fontSize="md" fontWeight="black" color="fg">
                    {myPosts.length}
                  </Text>
                  <Text fontSize="10px" color="fg.subtle" fontWeight="semibold">
                    POSTS SHARED
                  </Text>
                </VStack>
                <Separator orientation="vertical" h="30px" />
                <VStack gap="0" flex="1" align="center">
                  <Text fontSize="md" fontWeight="black" color="fg">
                    {savedPosts.length}
                  </Text>
                  <Text fontSize="10px" color="fg.subtle" fontWeight="semibold">
                    SAVED ITEMS
                  </Text>
                </VStack>
                <Separator orientation="vertical" h="30px" />
                <VStack gap="0" flex="1" align="center">
                  <Text fontSize="md" fontWeight="black" color="fg">
                    {badges.filter((b) => b.earnedAt).length}
                  </Text>
                  <Text fontSize="10px" color="fg.subtle" fontWeight="semibold">
                    BADGES WON
                  </Text>
                </VStack>
              </HStack>

              {/* Content Navigator Tabs */}
              <Tabs.Root defaultValue="posts" variant="line" colorPalette="teal">
                <Tabs.List w="100%" display="flex" justifyContent="space-between" mb="4">
                  <Tabs.Trigger value="posts" flex="1" display="inline-flex" gap="1.5" justifyContent="center">
                    <FiGrid size="14" />
                    Posts
                  </Tabs.Trigger>
                  <Tabs.Trigger value="saved" flex="1" display="inline-flex" gap="1.5" justifyContent="center">
                    <FiBookmark size="14" />
                    Saved
                  </Tabs.Trigger>
                  <Tabs.Trigger value="badges" flex="1" display="inline-flex" gap="1.5" justifyContent="center">
                    <FiAward size="14" />
                    Badges
                  </Tabs.Trigger>
                </Tabs.List>

                {/* Tab 1: User's Uploaded Posts */}
                <Tabs.Content value="posts">
                  {myPosts.length === 0 ? (
                    <VStack py="10" align="center" gap="2">
                      <Text fontSize="xs" color="fg.muted">
                        You haven't uploaded any cultural moments yet.
                      </Text>
                      <Text fontSize="10px" color="fg.subtle">
                        Use the "Share Post" button in the header!
                      </Text>
                    </VStack>
                  ) : (
                    <SimpleGrid columns={3} gap="2">
                      {myPosts.map((post) => (
                        <Box
                          key={post.id}
                          aspectRatio="1"
                          borderRadius="md"
                          overflow="hidden"
                          bg="black"
                          cursor="pointer"
                          onClick={() => {
                            onSelectPost(post);
                            onOpenChange(false);
                          }}
                          transition="opacity 0.2s"
                          _hover={{ opacity: 0.8 }}
                        >
                          <Image src={post.imageUrl} alt={post.title} w="100%" h="100%" objectFit="cover" />
                        </Box>
                      ))}
                    </SimpleGrid>
                  )}
                </Tabs.Content>

                {/* Tab 2: User's Saved Posts */}
                <Tabs.Content value="saved">
                  {savedPosts.length === 0 ? (
                    <VStack py="10" align="center" gap="2">
                      <Text fontSize="xs" color="fg.muted">
                        No saved collections yet.
                      </Text>
                      <Text fontSize="10px" color="fg.subtle">
                        Bookmark cultural posts in the gallery lightbox feed.
                      </Text>
                    </VStack>
                  ) : (
                    <SimpleGrid columns={3} gap="2">
                      {savedPosts.map((post) => (
                        <Box
                          key={post.id}
                          aspectRatio="1"
                          borderRadius="md"
                          overflow="hidden"
                          bg="black"
                          cursor="pointer"
                          onClick={() => {
                            onSelectPost(post);
                            onOpenChange(false);
                          }}
                          transition="opacity 0.2s"
                          _hover={{ opacity: 0.8 }}
                        >
                          <Image src={post.imageUrl} alt={post.title} w="100%" h="100%" objectFit="cover" />
                        </Box>
                      ))}
                    </SimpleGrid>
                  )}
                </Tabs.Content>

                {/* Tab 3: Milestone Badges */}
                <Tabs.Content value="badges">
                  <VStack align="stretch" gap="3">
                    {badges.map((badge) => {
                      const isEarned = !!badge.earnedAt;
                      return (
                        <HStack
                          key={badge.id}
                          border="1px solid"
                          borderColor={isEarned ? "border.muted" : "border.subtle"}
                          borderRadius="xl"
                          p="3"
                          bg={isEarned ? "bg.muted" : "transparent"}
                          opacity={isEarned ? 1 : 0.5}
                          cursor="pointer"
                          onClick={() => handleSelectBadge(badge)}
                          transition="all 0.2s"
                          _hover={{ transform: "scale(1.02)", bg: "bg.muted" }}
                        >
                          <Box
                            fontSize="24px"
                            w="44px"
                            h="44px"
                            borderRadius="full"
                            bg={`${badge.color}.solid`}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="white"
                          >
                            {badge.icon}
                          </Box>
                          <VStack align="start" gap="0" flex="1">
                            <Heading size="xs" fontWeight="bold">
                              {badge.name}
                            </Heading>
                            <Text fontSize="10px" color="fg.muted">
                              {badge.description}
                            </Text>
                          </VStack>
                          {isEarned ? (
                            <Box
                              bg="green.500"
                              color="white"
                              px="2"
                              py="0.5"
                              borderRadius="full"
                              fontSize="9px"
                              fontWeight="bold"
                            >
                              Earned
                            </Box>
                          ) : (
                            <Box
                              bg="gray.500"
                              color="white"
                              px="2"
                              py="0.5"
                              borderRadius="full"
                              fontSize="9px"
                              fontWeight="bold"
                            >
                              Locked
                            </Box>
                          )}
                        </HStack>
                      );
                    })}
                  </VStack>
                </Tabs.Content>
              </Tabs.Root>

            </VStack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
