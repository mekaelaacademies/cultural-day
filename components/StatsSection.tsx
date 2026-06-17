"use client";

import { SimpleGrid, Box, Text, Heading, VStack } from "@chakra-ui/react";
import { FiUsers, FiGlobe, FiAward, FiHeart } from "react-icons/fi";
import { Post } from "@/app/types";

interface StatsSectionProps {
  posts: Post[];
}

export default function StatsSection({ posts }: StatsSectionProps) {
  // Count unique countries in current posts dynamically
  const uniqueCountries = new Set(posts.map((p) => p.country.trim().toLowerCase())).size;

  const stats = [
    {
      id: "countries",
      label: "Cultures Represented",
      value: "All",
      icon: <FiGlobe size="22" color="#319795" />,
      glowColor: "rgba(49, 151, 149, 0.2)",
    },
    {
      id: "booths",
      label: "Years of Excellence",
      value: 30,
      icon: <FiAward size="22" color="#d53f8c" />,
      glowColor: "rgba(213, 63, 140, 0.2)",
    },
    {
      id: "visitors",
      label: "Students",
      value: "1K +",
      icon: <FiUsers size="22" color="#3182ce" />,
      glowColor: "rgba(49, 130, 206, 0.2)",
    },
    {
      id: "hearts",
      label: "Schools",
      value: 7,
      icon: <FiHeart size="22" color="#e53e3e" />,
      glowColor: "rgba(229, 62, 62, 0.2)",
    },
  ];

  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} gap="4" w="100%" py="2">
      {stats.map((stat) => (
        <Box
          key={stat.id}
          bg="bg.panel"
          border="1px solid"
          borderColor="border.muted"
          borderRadius="2xl"
          p="5"
          position="relative"
          overflow="hidden"
          boxShadow="sm"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            transform: "translateY(-4px)",
            boxShadow: `0 10px 20px ${stat.glowColor}`,
            borderColor: "border.emphasized",
          }}
        >
          {/* Subtle background glow circle */}
          <Box
            position="absolute"
            top="-10px"
            right="-10px"
            w="60px"
            h="60px"
            borderRadius="full"
            bg={stat.glowColor}
            filter="blur(15px)"
            pointerEvents="none"
          />
          
          <VStack align="start" gap="2">
            <Box p="2.5" borderRadius="xl" bg="bg.muted" display="flex" alignItems="center" justifyContent="center">
              {stat.icon}
            </Box>
            <Box>
              <Heading size="lg" fontWeight="black" letterSpacing="tight" lineHeight="1.1">
                {stat.value}
              </Heading>
              <Text fontSize="xs" fontWeight="semibold" color="fg.muted" mt="1">
                {stat.label}
              </Text>
            </Box>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
