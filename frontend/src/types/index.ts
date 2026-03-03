interface PricingTier {
  min: number
  max: number | null
  pricePerPerson: number
}

interface Pricing {
  currency: string
  basePrice: number
  currentPrice: number
  tiers: PricingTier[]
}

interface Category {
  id: string
  name: string
  icon: string
  color: string
}

interface People {
  current: number
  capacity: number
  minRequired: number
}

interface Organizer {
  id: number
  username: string
  displayName: string
}

export interface Campaign {
  id: number
  title: string
  slug: string
  description: string
  image: string
  category: Category
  pricing: Pricing
  people: People
  deadline: string
  status: string
  organizer: Organizer
  createdAt: string
}