"use client";

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Story } from "@/app/types";

interface StoryRingProps {
  stories: Story[];
  onSelectStory: (storyId: string) => void;
}

export default function StoryRing({ stories, onSelectStory }: StoryRingProps) {
  return (
    <Flex
      gap="5"
      overflowX="auto"
      py="4"
      px="2"
      scrollbar="none"
      css={{
        "&::-webkit-scrollbar": { display: "none" },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      }}
    >
      {stories.map((story) => (
        <Flex
          key={story.id}
          direction="column"
          align="center"
          cursor="pointer"
          onClick={() => onSelectStory(story.id)}
          minW="76px"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }}
        >
          {/* Glowing ring wrapper */}
          <Box
            position="relative"
            w="72px"
            h="72px"
            borderRadius="full"
            p="3px"
            background="linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
            boxShadow="0 0 15px rgba(220, 39, 67, 0.4)"
            _before={{
              content: '""',
              position: "absolute",
              top: "-2px",
              left: "-2px",
              right: "-2px",
              bottom: "-2px",
              borderRadius: "full",
              background: "linear-gradient(45deg, #dc2743, #bc1888, #9b59b6, #3498db)",
              zIndex: -1,
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
            _hover={{
              boxShadow: "0 0 25px rgba(220, 39, 67, 0.7)",
              _before: { opacity: 1 },
            }}
          >
            {/* White border spacing inside */}
            <Box
              w="100%"
              h="100%"
              borderRadius="full"
              border="2px solid"
              borderColor="bg.panel"
              bg="bg.panel"
              overflow="hidden"
            >
              <Image
                src={story.coverImage}
                alt={story.title}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            
            {/* Tiny country badge / indicator */}
            <Box
              position="absolute"
              bottom="0"
              right="0"
              bg="red.500"
              w="18px"
              h="18px"
              borderRadius="full"
              border="2px solid"
              borderColor="bg.panel"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="9px"
              fontWeight="bold"
              color="white"
              boxShadow="sm"
            >
              ★
            </Box>
          </Box>
          <Text
            mt="2"
            fontSize="xs"
            fontWeight="semibold"
            color="fg.muted"
            textAlign="center"
            lineClamp={1}
            maxW="72px"
          >
            {story.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
