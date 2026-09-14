export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sushi' | 'seafood' | 'platters' | 'starters' | 'drinks';
  tag?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  image?: string;
  spicy?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  content: string;
  dishHighlight?: string;
  verified?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
}

export interface ReservationFormState {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'indoor' | 'terrace' | 'no-preference';
  specialNotes: string;
}
