"use client";

import { useEffect, useState, useRef } from "react";
import { Box, Flex, IconButton, Text, Image, HStack } from "@chakra-ui/react";
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";
import { Story } from "@/app/types";

interface StoryViewerProps {
  story: Story | null;
  onClose: () => void;
  onNextStory?: () => void;
  onPrevStory?: () => void;
}

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function StoryViewer({
  story,
  onClose,
  onNextStory,
  onPrevStory,
}: StoryViewerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const pausedTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!story) return;
    setCurrentSlideIndex(0);
    setProgress(0);
    setIsPaused(false);
  }, [story]);

  useEffect(() => {
    if (!story) return;
    
    // Clear existing intervals
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    if (isPaused) return;

    // Track when slide started
    startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION;

    // Setup visual progress ticker
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
    }, 30);

    // Setup slide completion timer
    timerRef.current = setTimeout(() => {
      handleNextSlide();
    }, SLIDE_DURATION - (progress / 100) * SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [story, currentSlideIndex, isPaused]);

  if (!story) return null;

  const currentSlide = story.slides[currentSlideIndex];

  const handleNextSlide = () => {
    if (currentSlideIndex < story.slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      // End of this story, trigger next story if available, else close
      if (onNextStory) {
        onNextStory();
      } else {
        onClose();
      }
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      // Beginning of story, trigger prev story if available, else close
      if (onPrevStory) {
        onPrevStory();
      } else {
        // Reset slide
        setProgress(0);
      }
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0, 0, 0, 0.95)"
      backdropFilter="blur(20px)"
      zIndex="1500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      userSelect="none"
    >
      {/* Desktop Control - Left Story */}
      {onPrevStory && (
        <IconButton
          aria-label="Previous story"
          variant="ghost"
          color="white"
          onClick={onPrevStory}
          position="absolute"
          left="4"
          display={{ base: "none", md: "inline-flex" }}
          size="lg"
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <FiChevronLeft size="32" />
        </IconButton>
      )}

      {/* Main Container */}
      <Box
        position="relative"
        w={{ base: "100%", md: "420px" }}
        h={{ base: "100%", md: "80vh" }}
        maxH={{ base: "100%", md: "850px" }}
        bg="black"
        borderRadius={{ base: "none", md: "2xl" }}
        boxShadow="2xl"
        overflow="hidden"
        border={{ base: "none", md: "1px solid" }}
        borderColor="whiteAlpha.200"
        display="flex"
        flexDirection="column"
      >
        {/* Interactive screen overlay split (Left/Right Tap) */}
        <Box
          position="absolute"
          top="60px"
          bottom="80px"
          left="0"
          right="0"
          zIndex="1"
          display="flex"
        >
          <Box
            flex="1"
            cursor="pointer"
            onClick={handlePrevSlide}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          />
          <Box
            flex="1"
            cursor="pointer"
            onClick={handleNextSlide}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          />
        </Box>

        {/* Slide Media */}
        <Image
          src={currentSlide?.imageUrl}
          alt={currentSlide.caption}
          w="100%"
          h="100%"
          objectFit="cover"
        />

        {/* Dynamic Dark Gradient Overlays */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          h="120px"
          background="linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)"
          pointerEvents="none"
          zIndex="2"
        />
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          h="200px"
          background="linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)"
          pointerEvents="none"
          zIndex="2"
        />

        {/* Top Controls Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          p="4"
          zIndex="3"
        >
          {/* Progress Indicators */}
          <HStack gap="1" mb="4">
            {story.slides.map((_, index) => (
              <Box
                key={index}
                flex="1"
                h="4px"
                borderRadius="full"
                bg="whiteAlpha.400"
                overflow="hidden"
              >
                <Box
                  h="100%"
                  bg="white"
                  width={
                    index < currentSlideIndex
                      ? "100%"
                      : index === currentSlideIndex
                      ? `${progress}%`
                      : "0%"
                  }
                  transition={index === currentSlideIndex ? "none" : "width 0.1s"}
                />
              </Box>
            ))}
          </HStack>

          {/* User Info Header */}
          <Flex align="center" justify="space-between">
            <HStack gap="3">
              <Image
                src={story.avatarUrl}
                alt={story.title}
                w="36px"
                h="36px"
                borderRadius="full"
                border="2px solid"
                borderColor="white"
              />
              <Box>
                <Text color="white" fontSize="sm" fontWeight="bold">
                  {story.title}
                </Text>
                <Text color="whiteAlpha.700" fontSize="xs">
                  Slide {currentSlideIndex + 1} of {story.slides.length}
                </Text>
              </Box>
            </HStack>

            {/* Play/Pause & Close buttons */}
            <HStack gap="2">
              <IconButton
                aria-label="Pause/Play"
                variant="ghost"
                color="white"
                size="sm"
                onClick={togglePause}
                _hover={{ bg: "whiteAlpha.200" }}
              >
                {isPaused ? <FiPlay /> : <FiPause />}
              </IconButton>
              <IconButton
                aria-label="Close stories"
                variant="ghost"
                color="white"
                size="sm"
                onClick={onClose}
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <FiX size="20" />
              </IconButton>
            </HStack>
          </Flex>
        </Box>

        {/* Bottom Description Overlay */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p="6"
          zIndex="3"
          color="white"
        >
          <Text fontSize="md" fontWeight="bold" mb="2">
            {currentSlide.caption}
          </Text>
          {currentSlide.description && (
            <Text fontSize="sm" color="whiteAlpha.800" fontWeight="normal">
              {currentSlide.description}
            </Text>
          )}
        </Box>
      </Box>

      {/* Desktop Control - Right Story */}
      {onNextStory && (
        <IconButton
          aria-label="Next story"
          variant="ghost"
          color="white"
          onClick={onNextStory}
          position="absolute"
          right="4"
          display={{ base: "none", md: "inline-flex" }}
          size="lg"
          _hover={{ bg: "whiteAlpha.200" }}
        >
          <FiChevronRight size="32" />
        </IconButton>
      )}
    </Box>
  );
}
