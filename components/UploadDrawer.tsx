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
  Input,
  Button,
  Field,
  NativeSelect,
  Textarea,
  SimpleGrid,
  Separator,
} from "@chakra-ui/react";
import { Post } from "@/app/types";
import { toaster } from "@/components/ui/toaster";

interface UploadDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddPost: (newPost: Omit<Post, "likes" | "commentsCount" | "createdAt">) => void;
}

const TEMPLATE_IMAGES = [
  {
    name: "Chinese Dragon",
    url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&h=600&q=80",
    country: "China",
    category: "Performance",
  },
  {
    name: "Venetian Mask",
    url: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&h=600&q=80",
    country: "Italy",
    category: "Costumes",
  },
  {
    name: "Cajun Spice",
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&h=600&q=80",
    country: "USA",
    category: "Culinary",
  },
  {
    name: "Greek Columns",
    url: "https://images.unsplash.com/photo-1555992336-03a23c7b20eb?auto=format&fit=crop&w=600&h=600&q=80",
    country: "Greece",
    category: "Architecture",
  },
];

const FILTER_PRESETS = [
  { id: "normal", name: "Classic", filterString: "none" },
  { id: "golden", name: "Golden Hour", filterString: "sepia(0.35) saturate(1.6) hue-rotate(-10deg) contrast(1.1)" },
  { id: "vintage", name: "Vintage Sepia", filterString: "sepia(0.8) contrast(0.95) brightness(0.95)" },
  { id: "cyber", name: "Cyberpunk", filterString: "hue-rotate(60deg) saturate(2) contrast(1.3) brightness(1.1)" },
  { id: "nordic", name: "Cold Nordic", filterString: "saturate(0.4) contrast(1.2) hue-rotate(15deg) brightness(0.95)" },
  { id: "bw", name: "Dramatic B&W", filterString: "grayscale(1) contrast(1.5) brightness(0.9)" },
];

export default function UploadDrawer({
  isOpen,
  onOpenChange,
  onAddPost,
}: UploadDrawerProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("normal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [culturalSignificance, setCulturalSignificance] = useState("");
  const [category, setCategory] = useState("Art & Craft");
  const [country, setCountry] = useState("");
  
  // EXIF fields
  const [camera, setCamera] = useState("Canon EOS R6");
  const [lens, setLens] = useState("RF 50mm f/1.8");
  const [aperture, setAperture] = useState("f/2.0");
  const [shutterSpeed, setShutterSpeed] = useState("1/125s");
  const [iso, setIso] = useState(100);
  const [location, setLocation] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      if (uploadEvent.target?.result) {
        setImageUrl(uploadEvent.target.result as string);
        toaster.create({
          title: "Image Uploaded",
          description: "Image imported successfully. Choose a filter below!",
          type: "success",
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSelectTemplate = (template: typeof TEMPLATE_IMAGES[0]) => {
    setImageUrl(template.url);
    setCountry(template.country);
    setCategory(template.category);
    setLocation(template.country);
    toaster.create({
      title: "Template Selected",
      description: `Loaded template: ${template.name}`,
      type: "info",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      toaster.create({
        title: "Missing Image",
        description: "Please upload an image or select a template.",
        type: "error",
      });
      return;
    }
    if (!title.trim() || !country.trim() || !description.trim()) {
      toaster.create({
        title: "Missing Details",
        description: "Please fill in the Title, Country, and Description.",
        type: "error",
      });
      return;
    }

    // Combine active filter into a custom final URL or save filter name
    // For simplicity, we pass the filter string along so we can style it in the card!
    const activeFilterObj = FILTER_PRESETS.find((f) => f.id === selectedFilter);
    const activeFilterString = activeFilterObj ? activeFilterObj.filterString : "none";

    // Build the mock post
    onAddPost({
      id: `custom_post_${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      culturalSignificance: culturalSignificance.trim() || "A beautiful celebration of local traditions and heritage.",
      imageUrl,
      category,
      country: country.trim(),
      photographer: {
        name: "Anonymous Explorer",
        username: "curious_traveler",
        avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
      },
      exif: {
        camera,
        lens,
        aperture,
        shutterSpeed,
        iso: Number(iso),
        location: location.trim() || country.trim(),
      },
      // Extract a colorful palette using template colors or a default
      palette: selectedFilter === "bw"
        ? ["#1a1a1a", "#4a4a4a", "#8c8c8c", "#cccccc", "#f5f5f5"]
        : ["#D35400", "#2980B9", "#27AE60", "#F1C40F", "#8E44AD"],
    });

    // Reset fields
    setImageUrl("");
    setSelectedFilter("normal");
    setTitle("");
    setDescription("");
    setCulturalSignificance("");
    setCountry("");
    setLocation("");
    onOpenChange(false);

    toaster.create({
      title: "Post Created",
      description: "Your cultural moment has been added to the feed!",
      type: "success",
    });
  };

  const activeFilterString = FILTER_PRESETS.find((f) => f.id === selectedFilter)?.filterString || "none";

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
              <Heading size="md" fontWeight="extrabold">Share Cultural Moment</Heading>
              <Drawer.CloseTrigger position="relative" top="0" right="0" />
            </Flex>
          </Drawer.Header>
          
          <Drawer.Body flex="1" overflowY="auto" p="6">
            <form onSubmit={handleSubmit}>
              <VStack gap="6" align="stretch">
                
                {/* 1. IMAGE SELECTOR & PREVIEW */}
                <Box>
                  <Text fontSize="xs" fontWeight="bold" color="fg.muted" mb="2">
                    STEP 1: SELECT OR UPLOAD IMAGE
                  </Text>
                  
                  {imageUrl ? (
                    <Box
                      position="relative"
                      borderRadius="xl"
                      overflow="hidden"
                      bg="black"
                      w="100%"
                      h="240px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={imageUrl}
                        alt="Preview"
                        maxH="100%"
                        maxW="100%"
                        objectFit="contain"
                        css={{ filter: activeFilterString }}
                      />
                      <Button
                        position="absolute"
                        top="2"
                        right="2"
                        size="xs"
                        colorPalette="red"
                        onClick={() => setImageUrl("")}
                      >
                        Change Image
                      </Button>
                    </Box>
                  ) : (
                    <VStack
                      border="2px dashed"
                      borderColor="border.muted"
                      borderRadius="xl"
                      p="6"
                      align="center"
                      justify="center"
                      bg="bg.muted"
                      gap="3"
                    >
                      <Text fontSize="sm" color="fg.muted" textAlign="center">
                        Drag & drop file or click below to upload
                      </Text>
                      <Button as="label" cursor="pointer" colorPalette="teal" size="sm">
                        Choose Photo
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleFileUpload}
                        />
                      </Button>
                      
                      <Separator my="2" />
                      <Text fontSize="xs" fontWeight="bold" color="fg.subtle">
                        OR SELECT A CULTURAL TEMPLATE
                      </Text>
                      <HStack gap="2" wrap="wrap" justify="center">
                        {TEMPLATE_IMAGES.map((temp) => (
                          <Button
                            key={temp.name}
                            size="xs"
                            variant="outline"
                            onClick={() => handleSelectTemplate(temp)}
                          >
                            {temp.name}
                          </Button>
                        ))}
                      </HStack>
                    </VStack>
                  )}
                </Box>

                {/* 2. REAL-TIME CSS FILTERS */}
                {imageUrl && (
                  <Box>
                    <Text fontSize="xs" fontWeight="bold" color="fg.muted" mb="2">
                      STEP 2: APPLY VISUAL FILTER (TAP TO SELECT)
                    </Text>
                    <HStack
                      gap="3"
                      overflowX="auto"
                      py="2"
                      scrollbar="none"
                      css={{
                        "&::-webkit-scrollbar": { display: "none" },
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                      }}
                    >
                      {FILTER_PRESETS.map((filter) => (
                        <VStack
                          key={filter.id}
                          minW="80px"
                          cursor="pointer"
                          onClick={() => setSelectedFilter(filter.id)}
                          border="2px solid"
                          borderColor={selectedFilter === filter.id ? "teal.500" : "transparent"}
                          borderRadius="md"
                          p="1"
                          bg={selectedFilter === filter.id ? "bg.muted" : "transparent"}
                          transition="all 0.2s"
                        >
                          <Image
                            src={imageUrl}
                            alt={filter.name}
                            w="70px"
                            h="70px"
                            objectFit="cover"
                            borderRadius="sm"
                            css={{ filter: filter.filterString }}
                          />
                          <Text fontSize="10px" fontWeight="semibold" textAlign="center" color="fg.muted">
                            {filter.name}
                          </Text>
                        </VStack>
                      ))}
                    </HStack>
                  </Box>
                )}

                {/* 3. POST DETAILS */}
                <Box>
                  <Text fontSize="xs" fontWeight="bold" color="fg.muted" mb="3">
                    STEP 3: CORE INFORMATION
                  </Text>
                  <VStack gap="4">
                    <Field.Root>
                      <Field.Label fontSize="xs">Post Title *</Field.Label>
                      <Input
                        placeholder="e.g. Traditional Lanterns Festival"
                        size="sm"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </Field.Root>
                    <HStack w="100%" gap="4">
                      <Field.Root flex="1">
                        <Field.Label fontSize="xs">Country / Culture *</Field.Label>
                        <Input
                          placeholder="e.g. China"
                          size="sm"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          required
                        />
                      </Field.Root>
                      <Field.Root flex="1">
                        <Field.Label fontSize="xs">Category</Field.Label>
                        <NativeSelect.Root size="sm">
                          <NativeSelect.Field
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="Culinary">Culinary</option>
                            <option value="Art & Craft">Art & Craft</option>
                            <option value="Costumes">Costumes</option>
                            <option value="Performance">Performance</option>
                            <option value="Architecture">Architecture</option>
                          </NativeSelect.Field>
                        </NativeSelect.Root>
                      </Field.Root>
                    </HStack>
                    <Field.Root>
                      <Field.Label fontSize="xs">Short Description *</Field.Label>
                      <Textarea
                        placeholder="Explain what is happening in the photo..."
                        size="sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={2}
                        required
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label fontSize="xs">Cultural Significance (Educational)</Field.Label>
                      <Textarea
                        placeholder="What is the deeper history or cultural symbolisms?"
                        size="sm"
                        value={culturalSignificance}
                        onChange={(e) => setCulturalSignificance(e.target.value)}
                        rows={3}
                      />
                    </Field.Root>
                  </VStack>
                </Box>

                {/* 4. OPTIONAL EXIF METADATA */}
                <Box border="1px solid" borderColor="border.muted" borderRadius="xl" p="4">
                  <Text fontSize="xs" fontWeight="bold" color="fg.muted" mb="3">
                    📷 PHOTOGRAPHER EXIF DATA (OPTIONAL)
                  </Text>
                  <VStack gap="3">
                    <HStack w="100%" gap="3">
                      <Field.Root>
                        <Field.Label fontSize="10px">Camera Model</Field.Label>
                        <Input
                          placeholder="Canon EOS R6"
                          size="xs"
                          value={camera}
                          onChange={(e) => setCamera(e.target.value)}
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="10px">Lens Model</Field.Label>
                        <Input
                          placeholder="RF 50mm f/1.8"
                          size="xs"
                          value={lens}
                          onChange={(e) => setLens(e.target.value)}
                        />
                      </Field.Root>
                    </HStack>
                    <HStack w="100%" gap="3">
                      <Field.Root>
                        <Field.Label fontSize="10px">Aperture</Field.Label>
                        <Input
                          placeholder="f/2.0"
                          size="xs"
                          value={aperture}
                          onChange={(e) => setAperture(e.target.value)}
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="10px">Shutter Speed</Field.Label>
                        <Input
                          placeholder="1/125s"
                          size="xs"
                          value={shutterSpeed}
                          onChange={(e) => setShutterSpeed(e.target.value)}
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label fontSize="10px">ISO</Field.Label>
                        <Input
                          placeholder="100"
                          type="number"
                          size="xs"
                          value={iso}
                          onChange={(e) => setIso(Number(e.target.value))}
                        />
                      </Field.Root>
                    </HStack>
                    <Field.Root>
                      <Field.Label fontSize="10px">Photo Location Details</Field.Label>
                      <Input
                        placeholder="e.g. Sichuan Lantern Festival, China"
                        size="xs"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </Field.Root>
                  </VStack>
                </Box>

                <Button type="submit" colorPalette="teal" size="md" w="100%" mt="2">
                  Share to Cultural Wall
                </Button>
              </VStack>
            </form>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
