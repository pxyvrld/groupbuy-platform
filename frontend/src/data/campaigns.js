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
    image: CoffeeImg,
    title: "Coffee from Roastery (10kg)",
    price: 30,
    category: "food",
    people: {
      current: 7,
      capacity: 10
    },
    timeLeft: 66734
  },
  {
    id: 2,
    image: YerbaImg,
    title: "Yerba Mate Premium (10kg)",
    price: 50,
    category: "food",
    people: {
      current: 9,
      capacity: 10
    },
    timeLeft: 44109
  },
  {
    id: 3,
    image: HoneyImg,
    title: "Organic Wildflower Honey (5kg)",
    price: 25,
    category: "food",
    people: {
      current: 4,
      capacity: 8
    },
    timeLeft: 103422
  },
  {
    id: 4,
    image: OliveOilImg,
    title: "Extra Virgin Olive Oil (10L)",
    price: 45,
    category: "food",
    people: {
      current: 6,
      capacity: 12
    },
    timeLeft: 88956
  },
  {
    id: 5,
    image: TeaImg,
    title: "Premium Green Tea Collection (5kg)",
    price: 35,
    category: "food",
    people: {
      current: 3,
      capacity: 10
    },
    timeLeft: 72841
  },
  {
    id: 6,
    image: SkincareImg,
    title: "Organic Premium Skincare Set",
    price: 40,
    category: "beauty",
    people: {
      current: 5,
      capacity: 8
    },
    timeLeft: 20722
  },
  {
    id: 7,
    image: HaircareImg,
    title: "Professional Hair Care Bundle",
    price: 55,
    category: "beauty",
    people: {
      current: 8,
      capacity: 15
    },
    timeLeft: 95234
  },
  {
    id: 8,
    image: SoapImg,
    title: "Natural Handmade Soap Set (50pcs)",
    price: 20,
    category: "beauty",
    people: {
      current: 12,
      capacity: 20
    },
    timeLeft: 56789
  },
  {
    id: 9,
    image: HeadphonesImg,
    title: "Wireless Noise-Cancelling Headphones",
    price: 120,
    category: "electronics",
    people: {
      current: 15,
      capacity: 25
    },
    timeLeft: 134567
  },
  {
    id: 10,
    image: KeyboardImg,
    title: "Mechanical Gaming Keyboard RGB",
    price: 85,
    category: "electronics",
    people: {
      current: 10,
      capacity: 20
    },
    timeLeft: 48923
  },
  {
    id: 11,
    image: YogaMatImg,
    title: "Premium Yoga Mat Set with Blocks",
    price: 60,
    category: "sports",
    people: {
      current: 7,
      capacity: 15
    },
    timeLeft: 112456
  },
  {
    id: 12,
    image: ProteinImg,
    title: "Whey Protein Powder Bulk (10kg)",
    price: 95,
    category: "sports",
    people: {
      current: 18,
      capacity: 30
    },
    timeLeft: 67234
  }
]