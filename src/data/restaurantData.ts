import { MenuItem, ReviewItem, GalleryPhoto } from '../types';
import interiorImage from '../assets/images/oceans_eight_interior_1789493729447.webp';
import sushiBoatImage from '../assets/images/oceans_sushi_boat_1789493745623.webp';
import kingklipImage from '../assets/images/oceans_kingklip_dish_1789493761329.webp';
import salmonRosesImage from '../assets/images/oceans_salmon_roses_1789493775348.webp';
import prawnSpringRollsImage from '../assets/images/prawn_spring_rolls_1789494232928.webp';
import steamedEdamameImage from '../assets/images/steamed_edamame_1789494246520.webp';

export const RESTAURANT_INFO = {
  name: "Oceans 8 Seafood & Sushi",
  tagline: "Somerset West's Premier Seafood & Handcrafted Sushi Destination",
  town: "Somerset West",
  area: "Helderberg Basin / Strand vicinity, Cape Town",
  address: "Corner of Main Rd & Van Der Byl Straat, Somerset West, Cape Town, 7130",
  phoneDisplay: "084 904 9339",
  phoneRaw: "0849049339",
  phoneIntl: "+27849049339",
  whatsappUrl: "https://wa.me/27849049339?text=Hi%20Oceans%208%20Somerset%20West,%20I%20would%20like%20to%20reserve%20a%20table",
  googleMapsUrl: "https://maps.google.com/?q=Oceans+8+Seafood+%26+Sushi+Somerset+West",
  rating: 4.6,
  reviewCount: "1,092",
  priceRange: "R 200 – R 300 per person",
  accessibility: "Wheelchair Accessible Entrance & Seating",
  hours: {
    tuesdayToSunday: "12:00 – 21:00",
    monday: "Closed (Opens Tuesday at 12:00)",
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // --- SUSHI SPECIALS ---
  {
    id: 's1',
    name: 'Signature Salmon Roses with Real Caviar',
    description: 'Fresh Atlantic salmon slices wrapped around sushi rice and creamy Japanese kewpie mayo, delicately crowned with authentic black caviar and fresh avocado.',
    price: 135,
    category: 'sushi',
    tag: 'Must Try',
    isChefSpecial: true,
    isPopular: true,
    image: salmonRosesImage
  },
  {
    id: 's2',
    name: 'Oceans 8 Grand Sushi Boat (32 pcs)',
    description: 'An impressive wooden boat feast: 4 Salmon Roses with caviar, 8 Rainbow Rolls, 8 Tuna Crunch Rolls, 4 Salmon Nigiri, and 8 Sashimi slices (Salmon & Yellowfin Tuna), served with fresh wasabi and pickled ginger.',
    price: 465,
    category: 'sushi',
    tag: 'Showstopper',
    isPopular: true,
    isChefSpecial: true,
    image: sushiBoatImage
  },
  {
    id: 's3',
    name: 'Sashimi Duo Platter (8 pcs)',
    description: 'Thick, artisanal hand-cut sashimi of fresh Norwegian salmon and yellowfin tuna with lime, radish curls, and Japanese soy.',
    price: 185,
    category: 'sushi',
    tag: 'Fresh Catch',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'Tiger Prawn Crunch Roll (8 pcs)',
    description: 'Crisp tempura prawn and cream cheese inside, flash-fried till golden, drizzled with sweet chili, Japanese mayo, and sliced scallions.',
    price: 135,
    category: 'sushi',
    tag: 'Crispy Favorite',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's5',
    name: 'Rainbow Reloaded Rolls (8 pcs)',
    description: 'Classic salmon California roll draped in sliced avocado and fresh salmon, topped with sweet teriyaki reduction and red tobiko.',
    price: 145,
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 's6',
    name: 'Seared Tuna Tataki with Ponzu',
    description: 'Sesame-crusted yellowfin tuna seared rare, served with citrus ponzu sauce, microgreens, and toasted sesame.',
    price: 155,
    category: 'sushi',
    tag: 'Light & Crisp',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop'
  },

  // --- FRESH SEAFOOD MAINS ---
  {
    id: 'f1',
    name: 'The Popular Prawn Special (Queen Prawns)',
    description: 'Our legendary guest favorite: Huge, juicy queen prawns grilled over high heat, basted in your choice of lemon herb garlic butter or authentic spicy peri-peri. Served with savory yellow rice and chips.',
    price: 235,
    category: 'seafood',
    tag: 'Famous Special',
    isPopular: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'f2',
    name: 'Pan-Grilled Cape Kingklip Fillet',
    description: 'Fresh local Kingklip pan-grilled with sea salt & herbs, served alongside fragrant yellow rice, lemon wedges, and our signature trio of dipping ramekins: lemon butter, garlic sauce, and fresh sliced green chillies.',
    price: 225,
    category: 'seafood',
    tag: 'House Classic',
    isPopular: true,
    isChefSpecial: true,
    image: kingklipImage
  },
  {
    id: 'f3',
    name: 'Tender Falkland Calamari Tubes & Heads',
    description: 'Succulent baby calamari, lightly dusted and flashed either grilled with garlic lemon butter or crispy golden fried, served with our house tartar sauce.',
    price: 175,
    category: 'seafood',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'f4',
    name: 'Fresh Linefish of the Day',
    description: 'Locally caught linefish from the Cape coast, filleted daily, seared with caper-lemon butter, served with roasted seasonal vegetables and potato wedges.',
    price: 195,
    category: 'seafood',
    tag: 'Daily Catch',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop'
  },

  // --- COMBOS & PLATTERS ---
  {
    id: 'p1',
    name: 'Oceans 8 Seafood Feast Platter',
    description: 'Grilled Kingklip fillet, 6 succulent queen prawns, tender calamari tubes, and half-shell mussels in white wine garlic broth. Served with yellow rice and dipping sauces.',
    price: 330,
    category: 'platters',
    tag: 'Ultimate Platter',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p2',
    name: 'Hake & Juicy Prawns Duo',
    description: 'Tender Cape hake fillet (grilled or crispy beer-battered) paired with 5 grilled queen prawns in lemon garlic butter and crispy chips.',
    price: 215,
    category: 'platters',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: 'Calamari & Prawn Combo',
    description: 'A match made in heaven: grilled garlic calamari tubes paired with 6 juicy grilled queen prawns and fragrant rice.',
    price: 230,
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=800&auto=format&fit=crop'
  },

  // --- STARTERS & SIDES ---
  {
    id: 'st1',
    name: 'Crispy Prawn Spring Rolls (3 pcs)',
    description: 'Hand-rolled phyllo stuffed with spiced minced prawn and coriander, served with sweet plum dipping sauce.',
    price: 85,
    category: 'starters',
    isPopular: true,
    image: prawnSpringRollsImage
  },
  {
    id: 'st2',
    name: 'Steamed Edamame with Maldon Salt',
    description: 'Tender green soybeans steamed fresh, tossed with sea salt crystals and Japanese shichimi togarashi.',
    price: 65,
    category: 'starters',
    image: steamedEdamameImage
  },
  {
    id: 'st3',
    name: 'Creamy Seafood & Mussel Chowder',
    description: 'Hearty West Coast chowder brimming with fish, calamari, and black mussels, finished with cream and fresh parsley. Served with toasted ciabatta.',
    price: 95,
    category: 'starters',
    tag: 'Hearty',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop'
  },

  // --- DRINKS & LOCAL WINES ---
  {
    id: 'd1',
    name: 'Helderberg Sauvignon Blanc (Bottle / Glass)',
    description: 'Crisp, mineral-driven local Cape white wine with passionfruit and lime notes. The ideal pairing for fresh kingklip and oysters.',
    price: 220,
    category: 'drinks',
    tag: 'Somerset Favorite',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Stellenbosch Chardonnay (Unwooded)',
    description: 'Bright citrus aromas with peach undertones and balanced natural acidity, pairing perfectly with creamy salmon roses.',
    price: 240,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'd3',
    name: 'Oceans Breeze Signature Cocktail',
    description: 'Artisanal Cape gin infused with cucumber, fresh mint, tonic, and a splash of elderflower liqueur.',
    price: 95,
    category: 'drinks',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Marianne Van Der Merwe',
    rating: 5,
    timeAgo: '2 weeks ago',
    content: 'The Kingklip was fresh, grilled to absolute perfection and the trio of dipping sauces—especially the fresh green chillies and lemon garlic butter—was incredible! The best seafood in Somerset West by far.',
    dishHighlight: 'Cape Kingklip with Savory Rice',
    verified: true
  },
  {
    id: 'r2',
    author: 'Bradley Adams',
    rating: 5,
    timeAgo: 'a month ago',
    content: 'Do NOT miss the prawn special! The prawns are huge, juicy, succulent and basted generously. We also had the sushi boat for the table and the salmon roses with real caviar blew us away.',
    dishHighlight: 'Popular Prawn Special & Salmon Roses',
    verified: true
  },
  {
    id: 'r3',
    author: 'Chantal Du Plessis',
    rating: 5,
    timeAgo: '3 weeks ago',
    content: 'Staff were welcoming and warm. The restaurant was buzzing so I was glad we booked our table beforehand. The sushi quality rivals high-end Cape Town spots at very reasonable prices!',
    dishHighlight: 'Sushi Boat & White Wine',
    verified: true
  },
  {
    id: 'r4',
    author: 'Johan Becker',
    rating: 5,
    timeAgo: 'Just recently',
    content: 'Great wheelchair accessibility at the entrance, welcoming ambiance with lovely textured coastal decor, and fast service. The Falkland calamari melts in your mouth.',
    dishHighlight: 'Tender Falkland Calamari',
    verified: true
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'The Legendary Sushi Boat Platter',
    category: 'Sushi',
    url: sushiBoatImage,
    description: 'An artisanal wooden boat laden with salmon roses, nigiri, fresh sashimi, and crunch rolls.'
  },
  {
    id: 'g2',
    title: 'Pan-Grilled Kingklip & Yellow Savory Rice',
    category: 'Seafood',
    url: kingklipImage,
    description: 'Golden grilled Cape kingklip with house garlic sauce, lemon butter, and crisp chillies.'
  },
  {
    id: 'g3',
    title: 'Warm Coastal Dining Ambiance',
    category: 'Ambiance',
    url: interiorImage,
    description: 'Inviting contemporary dining area with woven fixtures, natural wood, and ocean tones.'
  },
  {
    id: 'g4',
    title: 'Hand-Rolled Salmon Roses with Real Caviar',
    category: 'Sushi',
    url: salmonRosesImage,
    description: 'Delicate salmon ribbons wrapped with Japanese mayo and genuine black caviar pearls.'
  },
  {
    id: 'g5',
    title: 'Juicy Queen Prawns Grilled with Garlic Butter',
    category: 'Seafood',
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop',
    description: 'Our famous special featuring juicy, jumbo queen prawns flame-grilled with herbs.'
  },
  {
    id: 'g6',
    title: 'Fresh Sashimi Salmon & Yellowfin Tuna',
    category: 'Sushi',
    url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000&auto=format&fit=crop',
    description: 'Masterfully sliced ocean-fresh sashimi served chilled with wasabi and pickled ginger.'
  }
];
