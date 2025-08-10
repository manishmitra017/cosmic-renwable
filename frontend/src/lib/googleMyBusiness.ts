interface GoogleReview {
  reviewId: string
  reviewer: {
    displayName: string
    profilePhotoUrl?: string
  }
  starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE'
  comment?: string
  createTime: string
  updateTime: string
}

interface GoogleMyBusinessResponse {
  reviews: GoogleReview[]
  totalReviewCount: number
  averageRating: number
}

export async function getGoogleReviews(): Promise<GoogleMyBusinessResponse | null> {
  try {
    const response = await fetch('/api/google-reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch reviews')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return null
  }
}

export function convertStarRating(rating: string): number {
  const ratingMap = {
    'ONE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVE': 5
  }
  return ratingMap[rating as keyof typeof ratingMap] || 5
}

export function formatReviewDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`
  return `${Math.ceil(diffDays / 365)} years ago`
}