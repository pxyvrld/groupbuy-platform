import CoffeeImg from '../assets/coffee.jpg'
import HaircareImg from '../assets/haircare.webp'
import HeadphonesImg from '../assets/headphones.jpg'
import HoneyImg from '../assets/honey.jpg'
import KeyboardImg from '../assets/keyboard.jpg'
import OliveOilImg from '../assets/oliveoil.webp'
import ProteinImg from '../assets/protein.jpg'
import SkincareImg from '../assets/skincare.webp'
import SoapImg from '../assets/soap.jpg'
import TeaImg from '../assets/tea.jpg'
import YerbaImg from '../assets/yerba.webp'
import YogaMatImg from '../assets/yogamat.jpg'

export const campaigns = [
  {
    id: 1,
    title: "Premium Coffee Beans from Local Roastery",
    slug: "premium-coffee-beans-10kg",
    description: "High-quality Arabica coffee beans from local roastery.  Perfect for coffee lovers who want premium taste at wholesale prices.",
    image: CoffeeImg,
    
    category: {
      id:  "food",
      name: "Food & Drinks",
      icon: "🍔",
      color: "#10B981"
    },
    
    pricing:  {
      currency: "PLN",
      basePrice: 50,
      currentPrice: 30,
      tiers: [
        { min: 1, max: 4, pricePerPerson: 50 },
        { min: 5, max:  9, pricePerPerson: 35 },
        { min: 10, max: null, pricePerPerson: 30 }
      ]
    },
    
    people: {
      current: 7,
      capacity: 10,
      minRequired: 5
    },
    
    deadline: "2026-01-20T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 1,
      username: "pxyvrld",
      displayName: "Hubert"
    },
    
    createdAt: "2026-01-01T10:00:00Z"
  },
  
  {
    id: 2,
    title: "Yerba Mate Premium Organic Blend",
    slug: "yerba-mate-premium-10kg",
    description: "Premium organic yerba mate from Argentina. Energizing, healthy alternative to coffee with group discount.",
    image: YerbaImg,
    
    category: {
      id: "food",
      name: "Food & Drinks",
      icon: "🍔",
      color: "#10B981"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 80,
      currentPrice: 50,
      tiers: [
        { min: 1, max: 4, pricePerPerson: 80 },
        { min: 5, max:  9, pricePerPerson: 60 },
        { min: 10, max: null, pricePerPerson: 50 }
      ]
    },
    
    people: {
      current: 9,
      capacity:  10,
      minRequired:  5
    },
    
    deadline: "2026-01-18T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 1,
      username: "pxyvrld",
      displayName: "Hubert"
    },
    
    createdAt: "2026-01-02T14:30:00Z"
  },
  
  {
    id:  3,
    title: "Organic Wildflower Honey from Local Beekeepers",
    slug: "organic-wildflower-honey-5kg",
    description: "Raw organic wildflower honey from local beekeepers. 100% natural, unprocessed, and packed with nutrients.",
    image: HoneyImg,
    
    category:  {
      id: "food",
      name: "Food & Drinks",
      icon: "🍔",
      color: "#10B981"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 40,
      currentPrice: 25,
      tiers: [
        { min: 1, max: 3, pricePerPerson: 40 },
        { min:  4, max: 7, pricePerPerson: 30 },
        { min:  8, max: null, pricePerPerson: 25 }
      ]
    },
    
    people: {
      current: 4,
      capacity: 8,
      minRequired: 3
    },
    
    deadline: "2026-01-25T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 2,
      username: "anna_k",
      displayName: "Anna Kowalska"
    },
    
    createdAt: "2025-12-28T09:15:00Z"
  },
  
  {
    id:  4,
    title: "Extra Virgin Olive Oil from Greece",
    slug: "extra-virgin-olive-oil-10l",
    description: "Premium extra virgin olive oil imported directly from Greece. Cold-pressed, rich flavor, perfect for cooking and salads.",
    image: OliveOilImg,
    
    category: {
      id:  "food",
      name: "Food & Drinks",
      icon: "🍔",
      color: "#10B981"
    },
    
    pricing:  {
      currency: "PLN",
      basePrice: 70,
      currentPrice: 45,
      tiers: [
        { min: 1, max: 5, pricePerPerson: 70 },
        { min:  6, max: 11, pricePerPerson: 55 },
        { min: 12, max: null, pricePerPerson: 45 }
      ]
    },
    
    people: {
      current: 6,
      capacity:  12,
      minRequired:  5
    },
    
    deadline: "2026-01-22T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 2,
      username: "anna_k",
      displayName: "Anna Kowalska"
    },
    
    createdAt: "2025-12-30T11:00:00Z"
  },
  
  {
    id: 5,
    title: "Premium Green Tea Collection from Japan",
    slug: "premium-green-tea-5kg",
    description: "Authentic Japanese green tea collection including Sencha, Matcha, and Gyokuro.  Sourced directly from Kyoto tea gardens.",
    image: TeaImg,
    
    category: {
      id: "food",
      name: "Food & Drinks",
      icon: "🍔",
      color: "#10B981"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 60,
      currentPrice: 35,
      tiers: [
        { min:  1, max: 4, pricePerPerson: 60 },
        { min:  5, max: 9, pricePerPerson: 45 },
        { min: 10, max: null, pricePerPerson: 35 }
      ]
    },
    
    people: {
      current: 3,
      capacity:  10,
      minRequired:  5
    },
    
    deadline: "2026-01-19T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 3,
      username: "tea_master",
      displayName: "Michał Nowak"
    },
    
    createdAt: "2026-01-03T16:45:00Z"
  },
  
  {
    id: 6,
    title: "Organic Premium Skincare Set with Natural Ingredients",
    slug: "organic-skincare-set",
    description: "Complete organic skincare routine including cleanser, toner, serum, and moisturizer. Made with natural ingredients, cruelty-free.",
    image: SkincareImg,
    
    category: {
      id: "beauty",
      name: "Beauty & Care",
      icon: "💄",
      color: "#EC4899"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 65,
      currentPrice: 40,
      tiers: [
        { min: 1, max: 3, pricePerPerson: 65 },
        { min:  4, max: 7, pricePerPerson: 50 },
        { min:  8, max: null, pricePerPerson: 40 }
      ]
    },
    
    people: {
      current: 5,
      capacity: 8,
      minRequired: 4
    },
    
    deadline: "2026-01-14T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 4,
      username: "beauty_guru",
      displayName: "Kasia Wiśniewska"
    },
    
    createdAt: "2026-01-04T10:20:00Z"
  },
  
  {
    id:  7,
    title: "Professional Hair Care Bundle - Salon Quality",
    slug: "professional-haircare-bundle",
    description:  "Professional-grade hair care products including shampoo, conditioner, hair mask, and styling serum. Salon quality at group prices.",
    image: HaircareImg,
    
    category: {
      id: "beauty",
      name: "Beauty & Care",
      icon: "💄",
      color: "#EC4899"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 90,
      currentPrice: 55,
      tiers: [
        { min: 1, max: 6, pricePerPerson: 90 },
        { min:  7, max: 14, pricePerPerson: 70 },
        { min:  15, max: null, pricePerPerson: 55 }
      ]
    },
    
    people: {
      current: 8,
      capacity: 15,
      minRequired: 6
    },
    
    deadline: "2026-01-23T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 4,
      username: "beauty_guru",
      displayName: "Kasia Wiśniewska"
    },
    
    createdAt: "2025-12-29T13:10:00Z"
  },
  
  {
    id:  8,
    title: "Natural Handmade Soap Set - 50 Bars",
    slug: "natural-handmade-soap-50pcs",
    description: "Handcrafted natural soaps made with organic oils and essential oils. No chemicals, perfect for sensitive skin.  Bulk discount available.",
    image: SoapImg,
    
    category:  {
      id: "beauty",
      name: "Beauty & Care",
      icon: "💄",
      color: "#EC4899"
    },
    
    pricing: {
      currency:  "PLN",
      basePrice: 35,
      currentPrice: 20,
      tiers: [
        { min: 1, max: 8, pricePerPerson: 35 },
        { min:  9, max: 19, pricePerPerson: 25 },
        { min: 20, max: null, pricePerPerson: 20 }
      ]
    },
    
    people: {
      current: 12,
      capacity:  20,
      minRequired:  8
    },
    
    deadline: "2026-01-17T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 5,
      username: "eco_lover",
      displayName: "Zofia Zielińska"
    },
    
    createdAt: "2026-01-01T08:30:00Z"
  },
  
  {
    id: 9,
    title: "Wireless Noise-Cancelling Headphones - Premium Sound",
    slug: "wireless-noise-cancelling-headphones",
    description: "High-end wireless headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Perfect for work and travel.",
    image: HeadphonesImg,
    
    category: {
      id: "electronics",
      name:  "Electronics",
      icon: "💻",
      color: "#3B82F6"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 200,
      currentPrice: 120,
      tiers: [
        { min: 1, max: 9, pricePerPerson: 200 },
        { min:  10, max: 24, pricePerPerson: 150 },
        { min:  25, max: null, pricePerPerson: 120 }
      ]
    },
    
    people: {
      current: 15,
      capacity: 25,
      minRequired: 10
    },
    
    deadline: "2026-01-26T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 1,
      username: "pxyvrld",
      displayName:  "Hubert"
    },
    
    createdAt:  "2025-12-27T15:00:00Z"
  },
  
  {
    id: 10,
    title: "Mechanical Gaming Keyboard RGB - Cherry MX Switches",
    slug: "mechanical-gaming-keyboard-rgb",
    description: "Professional mechanical gaming keyboard with Cherry MX Red switches, RGB backlighting, and programmable macros. Gamer's dream keyboard.",
    image: KeyboardImg,
    
    category: {
      id: "electronics",
      name: "Electronics",
      icon: "💻",
      color: "#3B82F6"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 140,
      currentPrice: 85,
      tiers: [
        { min: 1, max: 8, pricePerPerson: 140 },
        { min:  9, max: 19, pricePerPerson: 110 },
        { min: 20, max: null, pricePerPerson: 85 }
      ]
    },
    
    people: {
      current: 10,
      capacity: 20,
      minRequired: 8
    },
    
    deadline: "2026-01-16T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 6,
      username: "gamer_pro",
      displayName: "Jakub Lewandowski"
    },
    
    createdAt: "2026-01-02T12:00:00Z"
  },
  
  {
    id: 11,
    title: "Premium Yoga Mat Set with Blocks and Strap",
    slug: "premium-yoga-mat-set",
    description: "Complete yoga set including eco-friendly mat, 2 foam blocks, and cotton strap. Non-slip surface, perfect for all yoga styles.",
    image: YogaMatImg,
    
    category: {
      id: "sports",
      name: "Sports & Fitness",
      icon: "⚽",
      color: "#F59E0B"
    },
    
    pricing: {
      currency: "PLN",
      basePrice: 100,
      currentPrice: 60,
      tiers: [
        { min: 1, max: 6, pricePerPerson: 100 },
        { min:  7, max: 14, pricePerPerson: 80 },
        { min: 15, max: null, pricePerPerson: 60 }
      ]
    },
    
    people: {
      current: 7,
      capacity: 15,
      minRequired: 6
    },
    
    deadline: "2026-01-24T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 7,
      username: "yoga_life",
      displayName: "Marta Kamińska"
    },
    
    createdAt: "2025-12-31T09:45:00Z"
  },
  
  {
    id: 12,
    title:  "Whey Protein Powder Bulk - 10kg Premium Quality",
    slug: "whey-protein-powder-10kg",
    description: "Premium whey protein isolate with 90% protein content.  Perfect for muscle building and recovery. Chocolate and vanilla flavors available.",
    image: ProteinImg,
    
    category: {
      id: "sports",
      name: "Sports & Fitness",
      icon: "⚽",
      color:  "#F59E0B"
    },
    
    pricing:  {
      currency: "PLN",
      basePrice: 150,
      currentPrice: 95,
      tiers: [
        { min: 1, max: 12, pricePerPerson: 150 },
        { min:  13, max: 29, pricePerPerson: 120 },
        { min:  30, max: null, pricePerPerson: 95 }
      ]
    },
    
    people: {
      current: 18,
      capacity: 30,
      minRequired: 12
    },
    
    deadline:  "2026-01-21T23:59:59Z",
    status: "active",
    
    organizer: {
      id: 8,
      username: "gym_beast",
      displayName: "Tomasz Wójcik"
    },
    
    createdAt: "2026-01-01T07:00:00Z"
  }
]