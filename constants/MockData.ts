import { ImageSourcePropType } from "react-native";

export const IMAGES = {
  welcomeHero: require("../assets/welcome-hero.png"),
  profileAvatar: require("../assets/profile-avatar.png"),
  userAvatar: require("../assets/user-avatar.png"),
  dinoDig: require("../assets/dino-dig.png"),
  splashPad: require("../assets/splash-pad.png"),
  cookingClass: require("../assets/cooking-class.png"),
  puppetShow: require("../assets/puppet-show.png"),
  detailHero: require("../assets/detail-hero.png"),
  detailMap: require("../assets/detail-map.png"),
  mapBackground: require("../assets/map-background.png"),
  museumCard: require("../assets/museum-card.png"),
} as const;

export interface Interest {
  id: string;
  label: string;
  icon: string;
}

export const INTERESTS: Interest[] = [
  { id: "nature", label: "Nature", icon: "forest" },
  { id: "tech", label: "Tech", icon: "smart-toy" },
  { id: "sports", label: "Sports", icon: "sports-soccer" },
  { id: "budget", label: "Budget", icon: "savings" },
  { id: "art", label: "Art", icon: "palette" },
  { id: "edu", label: "Education", icon: "school" },
  { id: "music", label: "Music", icon: "music-note" },
  { id: "outdoors", label: "Outdoors", icon: "nature-people" },
];

export interface CarouselActivity {
  id: string;
  title: string;
  image: ImageSourcePropType;
  rank: number;
  badge: { type: "match" | "trending"; label: string };
  schedule: string;
}

export const TOP_5_ACTIVITIES: CarouselActivity[] = [
  {
    id: "1",
    title: "Dino Dig at Museum",
    image: IMAGES.dinoDig,
    rank: 1,
    badge: { type: "match", label: "98% Match" },
    schedule: "Sat, 10:00 AM",
  },
  {
    id: "2",
    title: "Splash Pad Opening",
    image: IMAGES.splashPad,
    rank: 2,
    badge: { type: "trending", label: "Trending" },
    schedule: "Sun, 11:00 AM",
  },
];

export interface FeedActivity {
  id: string;
  title: string;
  image: ImageSourcePropType;
  provider: string;
  distance: string;
  price: string;
  priceColor: string;
  ageRange?: string;
  locationType?: string;
  memberBadge?: string;
}

export const FEED_ACTIVITIES: FeedActivity[] = [
  {
    id: "3",
    title: "Little Chefs Cooking Class",
    image: IMAGES.cookingClass,
    provider: "Culinary Kids",
    distance: "1.2mi away",
    price: "$25",
    priceColor: "#2b9dee",
    ageRange: "4-8 yrs",
    locationType: "Indoor",
    memberBadge: "10% Off Member",
  },
  {
    id: "4",
    title: "Prospect Park Puppet Show",
    image: IMAGES.puppetShow,
    provider: "The Long Meadow",
    distance: "0.5mi away",
    price: "Free",
    priceColor: "#4ade80",
  },
];

export const DETAIL_ACTIVITY = {
  id: "5",
  title: "Junior Science Exploratorium",
  category: "Museum & Education",
  rating: 4.8,
  reviewCount: 124,
  ageRange: "3-8 yrs",
  price: "$$",
  distance: "1.2 mi",
  image: IMAGES.detailHero,
  mapImage: IMAGES.detailMap,
  address: "123 Discovery Way, Science City, CA 90210",
  description:
    "Ignite your child's curiosity with over 50 hands-on exhibits designed specifically for early learners. From water play stations to giant building blocks, the Junior Science Exploratorium offers a safe and engaging environment for kids to discover the wonders of physics and biology.",
  amenities: ["Stroller Friendly", "Cafe On-site", "Accessible", "Free WiFi"],
  bookPrice: "$15",
  memberSaving: "$5",
};

export const MAP_DATA = {
  searchQuery: "Dinosaur exhibits",
  activePin: {
    title: "Brooklyn Children's Museum",
    icon: "museum",
    rating: 4.8,
    reviewCount: "1.2k",
    status: "Open",
    price: "$$",
    ageRange: "Ages 2-10",
    distance: "8 mins away",
    image: IMAGES.museumCard,
  },
  inactivePin: {
    icon: "park",
  },
};
