// Central content configuration for NRK STONES.
// Business owner can update copy, stone categories, gallery items and
// contact details here without touching component code.

export const business = {
  name: 'NRK STONES',
  tagline: 'Natural stone for timeless spaces.',
  city: 'Visakhapatnam',
  region: 'Andhra Pradesh',
  country: 'India',
  address: [
    'Patha Paradesipalem',
    'Visakhapatnam Main Road',
    'Madhurawada',
    'Visakhapatnam',
    'Andhra Pradesh 531163',
    'India',
  ],
  plusCode: 'R9V5+XC Madhurawada, Visakhapatnam',
  hours: 'Open · Closes 7 PM',
  // Placeholders — replace with real values when available.
  phone: '+91 93940 25556', // e.g. "+91 XXXXX XXXXX"
  email: 'pnpk353@gmail.com', // e.g. "hello@nrkstones.com"
  mapsUrl: 'https://maps.app.goo.gl/Swn8Kf81unsk8NDD8?g_st=aw', // Final Google Maps destination URL
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stones', href: '#stones' },
  { label: 'Applications', href: '#applications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export type StoneCategory = {
  id: string
  name: string
  description: string
  image: string
}

export const stoneCollection: StoneCategory[] = [
  {
    id: 'granite',
    name: 'Granite',
    description:
      'Distinctive surfaces for interiors, architecture and high-performance applications.',
    image: '/images/collection-granite.png',
  },
  {
    id: 'natural-stone',
    name: 'Natural Stone',
    description:
      'Raw character and organic movement drawn directly from the earth.',
    image: '/images/collection-natural.png',
  },
  {
    id: 'polished',
    name: 'Polished Surfaces',
    description:
      'Mirror-finished stone with depth, reflection and refined elegance.',
    image: '/images/collection-polished.png',
  },
  {
    id: 'flamed',
    name: 'Flamed / Textured Surfaces',
    description:
      'Tactile, matte finishes with rugged grain for grip and presence.',
    image: '/images/collection-flamed.png',
  },
  {
    id: 'architectural',
    name: 'Architectural Stone',
    description:
      'Cladding, panels and custom formats shaped for building envelopes.',
    image: '/images/collection-architectural.png',
  },
]

export type Application = {
  id: string
  name: string
  image: string
  uses: string[]
}

export const applications: Application[] = [
  {
    id: 'residential',
    name: 'Residential',
    image: '/images/app-residential.png',
    uses: [
      'Kitchen countertops',
      'Flooring',
      'Staircases',
      'Feature walls',
      'Bathrooms',
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    image: '/images/app-commercial.png',
    uses: [
      'Reception areas',
      'Flooring',
      'Facades',
      'Office interiors',
      'Hospitality spaces',
    ],
  },
  {
    id: 'architectural',
    name: 'Architectural',
    image: '/images/app-architectural.png',
    uses: [
      'Exterior surfaces',
      'Landscape elements',
      'Monumental features',
      'Custom stone applications',
    ],
  },
]

export type ValuePoint = {
  title: string
  description: string
}

export const valuePoints: ValuePoint[] = [
  {
    title: 'Natural Character',
    description:
      'Every slab carries its own pattern, mineral movement and character.',
  },
  {
    title: 'Built to Last',
    description:
      'Stone is selected for spaces where durability and timelessness matter.',
  },
  {
    title: 'Design Versatility',
    description:
      'From contemporary interiors to architectural applications, stone adapts to different design languages.',
  },
  {
    title: 'Timeless Appeal',
    description:
      'Natural surfaces continue to complement changing architectural styles.',
  },
]

export type GalleryItem = {
  id: string
  src: string
  title: string
  category: string
  /** Tailwind row-span helper for masonry emphasis */
  span?: 'tall' | 'wide' | 'normal'
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'slabs',
    src: '/images/gallery-slabs.png',
    title: 'Showroom Slabs',
    category: 'Slabs',
    span: 'tall',
  },
  {
    id: 'wall',
    src: '/images/gallery-wall.png',
    title: 'Book-matched Feature Wall',
    category: 'Interiors',
    span: 'wide',
  },
  {
    id: 'tiles',
    src: '/images/gallery-tiles.png',
    title: 'Tile Samples',
    category: 'Tiles',
  },
  {
    id: 'interior',
    src: '/images/gallery-interior.png',
    title: 'Stone Bathroom',
    category: 'Interiors',
    span: 'tall',
  },
  {
    id: 'staircase',
    src: '/images/gallery-staircase.png',
    title: 'Floating Stone Staircase',
    category: 'Architecture',
  },
  {
    id: 'detail',
    src: '/images/gallery-detail.png',
    title: 'Edge Detail',
    category: 'Details',
    span: 'wide',
  },
]

export const stoneHotspots = [
  { id: 'texture', label: 'Texture', x: 22, y: 32 },
  { id: 'mineral', label: 'Mineral Pattern', x: 58, y: 24 },
  { id: 'finish', label: 'Surface Finish', x: 74, y: 62 },
  { id: 'variation', label: 'Natural Variation', x: 38, y: 72 },
]
