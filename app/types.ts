export interface ExifData {
  camera: string;
  lens: string;
  aperture: string;
  shutterSpeed: string;
  iso: number;
  location: string;
}

export interface Photographer {
  name: string;
  username: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  culturalSignificance: string;
  imageUrl: string;
  category: string;
  country: string;
  likes: number;
  commentsCount: number;
  photographer: Photographer;
  exif: ExifData;
  palette: string[]; // Array of hex colors, e.g. ["#FF5733", "#C70039"]
  createdAt: string;
  likedByUser?: boolean;
  savedByUser?: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  username: string;
  avatarUrl: string;
  text: string;
  createdAt: string;
}

export interface StorySlide {
  id: string;
  imageUrl: string;
  caption: string;
  description?: string;
}

export interface Story {
  id: string;
  title: string; // E.g. "Maasai Art", "Diwali Festival"
  coverImage: string;
  avatarUrl: string;
  slides: StorySlide[];
}

export interface UserStats {
  postsCount: number;
  savedCount: number;
  likesReceived: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
  color: string;
}
