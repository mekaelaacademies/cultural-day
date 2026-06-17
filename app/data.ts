import { Post, Comment, Story, Badge } from "./types";

export const INITIAL_POSTS: Post[] = [
  {
    id: "post_1",
    title: "Chauan Ceremony in Kyoto",
    description: "Deep mindfulness captured in a traditional Japanese Chanoyu (tea ceremony). The chasen whisk glides across the hand-formed Raku bowl, creating a perfect jade froth.",
    culturalSignificance: "The Japanese tea ceremony (Chanoyu, 'hot water for tea') is a choreographic ritual of preparing and serving Japanese green tea, called Matcha, together with traditional Japanese sweets. It is not just about drinking tea, but about Zen mindfulness, harmony (Wa), respect (Kei), purity (Sei), and tranquility (Jaku). Every movement of the host is precisely designed to focus on the present moment.",
    imageUrl: "/images/students/s1.jpeg",
    category: "Student Tournament",
    country: "Japan",
    likes: 342,
    commentsCount: 3,
    photographer: {
      name: "Kenji Sato",
      username: "kenji_kyoto",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Fujifilm X-T5",
      lens: "XF 35mm f/1.4 R",
      aperture: "f/1.8",
      shutterSpeed: "1/160s",
      iso: 400,
      location: "Kyoto, Japan"
    },
    palette: ["#1E2D24", "#3D5A45", "#7D9D85", "#DCE3DE", "#A89482"],
    createdAt: "2026-06-08T08:00:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_2",
    title: "Glow of Clay Diyas",
    description: "Warm flame of oil lamps lining a colorful Rangoli on the night of Diwali. Celebrating the triumph of inner light over darkness.",
    culturalSignificance: "Diwali, the Festival of Lights, is one of the most prominent festivals in Hinduism, Jainism, and Sikhism. The lighting of clay lamps (diyas) symbolizes the destruction of negative forces like ignorance, anger, and greed, replacing them with wisdom, love, and light. Rangoli—intricate designs made of colored rice flour, sand, or flower petals on the floor—is created at entrances to welcome Lakshmi, the goddess of prosperity and good fortune.",
    imageUrl: "/images/staff/t8.JPG",
    category: "Staff Tournament",
    country: "India",
    likes: 512,
    commentsCount: 4,
    photographer: {
      name: "Priya Sharma",
      username: "priya_captures",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Sony A7 IV",
      lens: "FE 90mm f/2.8 Macro G OSS",
      aperture: "f/2.8",
      shutterSpeed: "1/80s",
      iso: 800,
      location: "Varanasi, India"
    },
    palette: ["#180F16", "#4A1C30", "#C84B31", "#FFD369", "#782A0F"],
    createdAt: "2026-06-07T18:30:00Z",
    likedByUser: true,
    savedByUser: false
  },
  {
    id: "post_3",
    title: "Maasai Beaded Enkipika",
    description: "Close-up of the intricate glass beadwork and vivid crimson shúkà of a Maasai elder. Every bead color holds an ancestral story.",
    culturalSignificance: "For the Maasai people of East Africa, beadwork is a major form of artistic expression and social signaling. The colors of the beads represent vital cultural elements: Red signifies bravery, strength, and unity (symbolized by blood); Blue represents the sky, which brings rain for the cattle; Green symbolizes health, land, and pasture; White represents purity, peace, and health (symbolized by milk); Yellow and Orange represent hospitality and warmth.",
    imageUrl: "/images/students/s2.jpeg",
    category: "Student Tournament",
    country: "Kenya",
    likes: 289,
    commentsCount: 2,
    photographer: {
      name: "David Kiprop",
      username: "kiprop_wild",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Canon EOS R5",
      lens: "RF 85mm f/1.2L USM",
      aperture: "f/2.0",
      shutterSpeed: "1/500s",
      iso: 200,
      location: "Maasai Mara, Kenya"
    },
    palette: ["#0B1B3D", "#C82525", "#F5B041", "#ECF0F1", "#1E824C"],
    createdAt: "2026-06-07T12:00:00Z",
    likedByUser: false,
    savedByUser: true
  },
  {
    id: "post_4",
    title: "Altar of Ofrendas",
    description: "Flickering candles illuminate marigold flowers (cempasúchil) and hand-crafted sugar skulls on a Dia de los Muertos altar.",
    culturalSignificance: "Día de los Muertos (Day of the Dead) is a Mexican holiday where families welcome back the souls of their deceased relatives for a brief reunion. The altar (ofrenda) is decorated with candles to guide spirits home, bright orange marigolds whose scent and color guide souls, sugar skulls representing the sweetness of life and playfulness of death, and the favorite foods of the deceased, celebrating death as a natural phase of life.",
    imageUrl: "/images/staff/t4.JPG",
    category: "Staff Tournament",
    country: "Mexico",
    likes: 476,
    commentsCount: 3,
    photographer: {
      name: "Sofia Rodriguez",
      username: "sofia_mexico",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Nikon Z6 II",
      lens: "Nikkor Z 50mm f/1.8 S",
      aperture: "f/1.8",
      shutterSpeed: "1/100s",
      iso: 1600,
      location: "Oaxaca, Mexico"
    },
    palette: ["#160824", "#FF5E00", "#FF0077", "#FFE600", "#510E8A"],
    createdAt: "2026-06-06T20:15:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_5",
    title: "Shadows of Marrakech",
    description: "Intricate geometric shadows cast by hanging brass lanterns in a cozy Marrakech riad, highlighting Moroccan architectural mastery.",
    culturalSignificance: "Moroccan lanterns (Fanous) are highly detailed metalwork creations, hand-punched by local coppersmiths. In Moroccan architecture and interior design, lighting is used to create texture and mood. The cut-outs form intricate Islamic geometric patterns, transforming ordinary walls into tapestries of light and shadow, reflecting the deep Islamic mathematical traditions of design.",
    imageUrl: "/images/students/s3.jpeg",
    category: "Student Tournament",
    country: "Morocco",
    likes: 421,
    commentsCount: 2,
    photographer: {
      name: "Yassine Alami",
      username: "yassine_marrakec",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Leica Q3",
      lens: "Summilux 28mm f/1.7 ASPH",
      aperture: "f/2.8",
      shutterSpeed: "1/50s",
      iso: 640,
      location: "Marrakech, Morocco"
    },
    palette: ["#2C1A11", "#D35400", "#F39C12", "#D2B4DE", "#563F2E"],
    createdAt: "2026-06-05T15:45:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_6",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t3.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_7",
    title: "Chauan Ceremony in Kyoto",
    description: "Deep mindfulness captured in a traditional Japanese Chanoyu (tea ceremony). The chasen whisk glides across the hand-formed Raku bowl, creating a perfect jade froth.",
    culturalSignificance: "The Japanese tea ceremony (Chanoyu, 'hot water for tea') is a choreographic ritual of preparing and serving Japanese green tea, called Matcha, together with traditional Japanese sweets. It is not just about drinking tea, but about Zen mindfulness, harmony (Wa), respect (Kei), purity (Sei), and tranquility (Jaku). Every movement of the host is precisely designed to focus on the present moment.",
    imageUrl: "/images/students/s4.jpeg",
    category: "Student Tournament",
    country: "Japan",
    likes: 342,
    commentsCount: 3,
    photographer: {
      name: "Kenji Sato",
      username: "kenji_kyoto",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Fujifilm X-T5",
      lens: "XF 35mm f/1.4 R",
      aperture: "f/1.8",
      shutterSpeed: "1/160s",
      iso: 400,
      location: "Kyoto, Japan"
    },
    palette: ["#1E2D24", "#3D5A45", "#7D9D85", "#DCE3DE", "#A89482"],
    createdAt: "2026-06-08T08:00:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_8",
    title: "Glow of Clay Diyas",
    description: "Warm flame of oil lamps lining a colorful Rangoli on the night of Diwali. Celebrating the triumph of inner light over darkness.",
    culturalSignificance: "Diwali, the Festival of Lights, is one of the most prominent festivals in Hinduism, Jainism, and Sikhism. The lighting of clay lamps (diyas) symbolizes the destruction of negative forces like ignorance, anger, and greed, replacing them with wisdom, love, and light. Rangoli—intricate designs made of colored rice flour, sand, or flower petals on the floor—is created at entrances to welcome Lakshmi, the goddess of prosperity and good fortune.",
    imageUrl: "/images/staff/t9.JPG",
    category: "Staff Tournament",
    country: "India",
    likes: 512,
    commentsCount: 4,
    photographer: {
      name: "Priya Sharma",
      username: "priya_captures",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Sony A7 IV",
      lens: "FE 90mm f/2.8 Macro G OSS",
      aperture: "f/2.8",
      shutterSpeed: "1/80s",
      iso: 800,
      location: "Varanasi, India"
    },
    palette: ["#180F16", "#4A1C30", "#C84B31", "#FFD369", "#782A0F"],
    createdAt: "2026-06-07T18:30:00Z",
    likedByUser: true,
    savedByUser: false
  },
  {
    id: "post_9",
    title: "Maasai Beaded Enkipika",
    description: "Close-up of the intricate glass beadwork and vivid crimson shúkà of a Maasai elder. Every bead color holds an ancestral story.",
    culturalSignificance: "For the Maasai people of East Africa, beadwork is a major form of artistic expression and social signaling. The colors of the beads represent vital cultural elements: Red signifies bravery, strength, and unity (symbolized by blood); Blue represents the sky, which brings rain for the cattle; Green symbolizes health, land, and pasture; White represents purity, peace, and health (symbolized by milk); Yellow and Orange represent hospitality and warmth.",
    imageUrl: "/images/students/s5.jpeg",
    category: "Student Tournament",
    country: "Kenya",
    likes: 289,
    commentsCount: 2,
    photographer: {
      name: "David Kiprop",
      username: "kiprop_wild",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Canon EOS R5",
      lens: "RF 85mm f/1.2L USM",
      aperture: "f/2.0",
      shutterSpeed: "1/500s",
      iso: 200,
      location: "Maasai Mara, Kenya"
    },
    palette: ["#0B1B3D", "#C82525", "#F5B041", "#ECF0F1", "#1E824C"],
    createdAt: "2026-06-07T12:00:00Z",
    likedByUser: false,
    savedByUser: true
  },
  {
    id: "post_10",
    title: "Altar of Ofrendas",
    description: "Flickering candles illuminate marigold flowers (cempasúchil) and hand-crafted sugar skulls on a Dia de los Muertos altar.",
    culturalSignificance: "Día de los Muertos (Day of the Dead) is a Mexican holiday where families welcome back the souls of their deceased relatives for a brief reunion. The altar (ofrenda) is decorated with candles to guide spirits home, bright orange marigolds whose scent and color guide souls, sugar skulls representing the sweetness of life and playfulness of death, and the favorite foods of the deceased, celebrating death as a natural phase of life.",
    imageUrl: "/images/staff/t5.JPG",
    category: "Staff Tournament",
    country: "Mexico",
    likes: 476,
    commentsCount: 3,
    photographer: {
      name: "Sofia Rodriguez",
      username: "sofia_mexico",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Nikon Z6 II",
      lens: "Nikkor Z 50mm f/1.8 S",
      aperture: "f/1.8",
      shutterSpeed: "1/100s",
      iso: 1600,
      location: "Oaxaca, Mexico"
    },
    palette: ["#160824", "#FF5E00", "#FF0077", "#FFE600", "#510E8A"],
    createdAt: "2026-06-06T20:15:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_11",
    title: "Shadows of Marrakech",
    description: "Intricate geometric shadows cast by hanging brass lanterns in a cozy Marrakech riad, highlighting Moroccan architectural mastery.",
    culturalSignificance: "Moroccan lanterns (Fanous) are highly detailed metalwork creations, hand-punched by local coppersmiths. In Moroccan architecture and interior design, lighting is used to create texture and mood. The cut-outs form intricate Islamic geometric patterns, transforming ordinary walls into tapestries of light and shadow, reflecting the deep Islamic mathematical traditions of design.",
    imageUrl: "/images/students/s6.jpeg",
    category: "Student Tournament",
    country: "Morocco",
    likes: 421,
    commentsCount: 2,
    photographer: {
      name: "Yassine Alami",
      username: "yassine_marrakec",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Leica Q3",
      lens: "Summilux 28mm f/1.7 ASPH",
      aperture: "f/2.8",
      shutterSpeed: "1/50s",
      iso: 640,
      location: "Marrakech, Morocco"
    },
    palette: ["#2C1A11", "#D35400", "#F39C12", "#D2B4DE", "#563F2E"],
    createdAt: "2026-06-05T15:45:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t7.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
  {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t8.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t9.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t10.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t11.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t12.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t13.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t14.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t15.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t16.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t17.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t18.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t19.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t20.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },  {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t21.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
    {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t22.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
      {
    id: "post_12",
    title: "Mist Over Eilean Donan",
    description: "Eilean Donan Castle standing proudly at the confluence of three sea lochs, shrouded in atmospheric Highlands fog and purple heather.",
    culturalSignificance: "Eilean Donan is a small tidal island in the Western Highlands of Scotland. The castle, first established in the 13th century, was a stronghold of the Clan Mackenzie. It stands as an iconic symbol of Scottish heritage, rugged independence, and Highland history. The moody landscapes, misty lochs, and vibrant heather are deeply woven into Celtic folklore, poetry, and song.",
    imageUrl: "/images/staff/t23.JPG",
    category: "Staff Tournament",
    country: "Scotland",
    likes: 395,
    commentsCount: 2,
    photographer: {
      name: "Fiona MacLeod",
      username: "fiona_scot",
      avatarUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80"
    },
    exif: {
      camera: "Hasselblad X2D",
      lens: "XCD 38mm f/2.5",
      aperture: "f/4.0",
      shutterSpeed: "1/250s",
      iso: 64,
      location: "Dornie, Scotland"
    },
    palette: ["#273746", "#5D6D7E", "#AEB6BF", "#2C3E50", "#512E5F"],
    createdAt: "2026-06-04T09:10:00Z",
    likedByUser: false,
    savedByUser: false
  },
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: "c_1",
    postId: "post_1",
    username: "tea_enthusiast",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    text: "This captures the Zen focus perfectly. I can almost smell the earthiness of the Uji matcha!",
    createdAt: "2026-06-08T08:15:00Z"
  },
  {
    id: "c_2",
    postId: "post_1",
    username: "culture_nerd",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Fascinating description. It really makes you appreciate the patience and craftsmanship that goes into a simple cup of tea.",
    createdAt: "2026-06-08T08:32:00Z"
  },
  {
    id: "c_3",
    postId: "post_1",
    username: "fuji_shooter",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Incredible depth of field with that 35mm f/1.4! Fuji colors are second to none.",
    createdAt: "2026-06-08T09:05:00Z"
  },
  {
    id: "c_4",
    postId: "post_2",
    username: "deepak_kumar",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Sublime! Shubh Deepavali to everyone. The Rangoli is exceptionally detailed.",
    createdAt: "2026-06-07T18:45:00Z"
  },
  {
    id: "c_5",
    postId: "post_2",
    username: "travel_seeker",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Wow, witnessing Diwali in Varanasi is on top of my bucket list. The warmth of this shot is incredible.",
    createdAt: "2026-06-07T19:20:00Z"
  },
  {
    id: "c_6",
    postId: "post_3",
    username: "ethno_design",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    text: "The geometry in Maasai necklaces is so mathematically advanced. Beautiful representation.",
    createdAt: "2026-06-07T13:40:00Z"
  },
  {
    id: "c_7",
    postId: "post_4",
    username: "miguel_oaxaca",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Beautiful ofrenda! Oaxaca smells like copal incense and fresh pan de muerto right now. Viva la vida!",
    createdAt: "2026-06-06T21:00:00Z"
  },
  {
    id: "c_8",
    postId: "post_5",
    username: "interiors_by_h",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    text: "The shadow patterns are stunning. Moroccan craftsmen are unmatched in copperwork.",
    createdAt: "2026-06-05T16:10:00Z"
  },
  {
    id: "c_9",
    postId: "post_6",
    username: "celtic_dreams",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Spent my honeymoon here. In the fog, the castle looks like a scene straight out of a fae myth.",
    createdAt: "2026-06-04T10:30:00Z"
  }
];

export const STORIES: Story[] = [
  {
    id: "story_japan",
    title: "Staff Tournament",
    coverImage: "/images/staff/t8.JPG",
    avatarUrl: "/images/logo.png",
    slides: [
      {
        id: "sj_1",
        imageUrl: "/images/staff/t1.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_2",
        imageUrl: "/images/staff/t2.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_3",
        imageUrl: "/images/staff/t3.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_4",
        imageUrl: "/images/staff/t4.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_5",
        imageUrl: "/images/staff/t5.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_6",
        imageUrl: "/images/staff/t6.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_7",
        imageUrl: "/images/staff/t7.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_8",
        imageUrl: "/images/staff/t8.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_9",
        imageUrl: "/images/staff/t9.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_10",
        imageUrl: "/images/staff/t10.JPG",
        caption: "",
        description: ""
      },
      {
        id: "sj_11",
        imageUrl: "/images/staff/t11.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_12",
        imageUrl: "/images/staff/t12.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_13",
        imageUrl: "/images/staff/t13.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_14",
        imageUrl: "/images/staff/t14.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_15",
        imageUrl: "/images/staff/t15.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_16",
        imageUrl: "/images/staff/t16.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_17",
        imageUrl: "/images/staff/t17.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_18",
        imageUrl: "/images/staff/t18.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_19",
        imageUrl: "/images/staff/t19.JPG",
        caption: "",
        description: ""
      },
            {
        id: "sj_20",
        imageUrl: "/images/staff/t20.JPG",
        caption: "",
        description: ""
      },

                  {
        id: "sj_21",
        imageUrl: "/images/staff/t21.JPG",
        caption: "",
        description: ""
      },

                  {
        id: "sj_22",
        imageUrl: "/images/staff/t22.JPG",
        caption: "",
        description: ""
      },

                  {
        id: "sj_23",
        imageUrl: "/images/staff/t23.JPG",
        caption: "",
        description: ""
      },



      //             {
      //   id: "sj_2",
      //   imageUrl: "/images/staff/t6.JPG",
      //   caption: "",
      //   description: ""
      // }
    ]
  },
  {
    id: "story_india",
    title: "Students Tournament",
    coverImage: "/images/students/s3.jpeg",
    avatarUrl: "/images/logo.png",
    slides: [
      {
        id: "si_1",
        imageUrl: "/images/students/s1.jpeg",
        caption: "Setting up clay diyas around the household. Every flame represents hope.",
        description: "Diyas are filled with ghee or mustard oil. Cotton wicks draw the oil up to feed the flame throughout the night."
      },
      {
        id: "si_2",
        imageUrl: "/images/students/s2.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      },
      {
        id: "si_3",
        imageUrl: "/images/students/s3.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      },
      {
        id: "si_4",
        imageUrl: "/images/students/s4.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      },
      {
        id: "si_5",
        imageUrl: "/images/students/s5.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      },
      {
        id: "si_6",
        imageUrl: "/images/students/s6.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      },
      {
        id: "si_7",
        imageUrl: "/images/students/s7.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      },
      {
        id: "si_8",
        imageUrl: "/images/students/s8.jpeg",
        caption: "Vibrant flower garlands ready for the evening pooja rituals.",
        description: "Marigolds (Genda Phool) signify auspiciousness and are used to decorate doors, temples, and Rangolis."
      }
    ]
  },
  {
    id: "story_kenya",
    title: "Cultural",
    coverImage: "/images/white.jpg",
    avatarUrl: "/images/logo.png",
    slides: [
      {
        id: "sk_1",
        imageUrl: "/images/white.jpg",
        caption: "Gathering for the Adumu dance, the traditional high-jumping dance of Maasai warriors.",
        description: "The Adumu is performed during rites of passage to showcase strength, stamina, and agility to the community."
      }
    ]
  },
  {
    id: "story_mexico",
    title: "Talent Explosion",
    coverImage: "/images/white.jpg",
    avatarUrl: "/images/logo.png",
    slides: [
      {
        id: "sm_1",
        imageUrl: "/images/white.jpg",
        caption: "",
        description: ""
      },

    ]
  },
  {
    id: "story_mexico1",
    title: "Roadshow",
    coverImage: "/images/white.jpg",
    avatarUrl: "/images/logo.png",
    slides: [
      {
        id: "sm_1",
        imageUrl: "/images/white.jpg",
        caption: "",
        description: ""
      },

    ]
  },
  {
    id: "story_mexico2",
    title: "Bonefire",
    coverImage: "/images/white.jpg",
    avatarUrl: "/images/logo.png",
    slides: [
      {
        id: "sm_1",
        imageUrl: "/images/white.jpg",
        caption: "",
        description: ""
      }

    ]
  }
];

export const BADGES: Badge[] = [
  {
    id: "badge_1",
    name: "Global Explorer",
    description: "Viewed posts from at least 5 different countries.",
    icon: "🌍",
    earnedAt: "2026-06-08T10:00:00Z",
    color: "teal"
  },
  {
    id: "badge_2",
    name: "Culture Historian",
    description: "Read the detailed cultural significance of 3+ items.",
    icon: "📜",
    earnedAt: "2026-06-08T10:15:00Z",
    color: "purple"
  },
  {
    id: "badge_3",
    name: "Visual Connoisseur",
    description: "Unlocked the full EXIF breakdown of a photographer's shot.",
    icon: "📷",
    earnedAt: "", // To be unlocked
    color: "pink"
  },
  {
    id: "badge_4",
    name: "Creative Editor",
    description: "Created and customized a new post using CSS filters.",
    icon: "🎨",
    earnedAt: "", // To be unlocked
    color: "orange"
  }
];
