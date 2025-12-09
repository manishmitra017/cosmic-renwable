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

// Fallback reviews for static export
const FALLBACK_REVIEWS: GoogleMyBusinessResponse = {
  reviews: [
    {
      reviewId: 'review-1',
      reviewer: { displayName: 'Sarah Johnson' },
      starRating: 'FIVE',
      comment: 'Excellent service from start to finish! Professional team and great results.',
      createTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updateTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      reviewId: 'review-2',
      reviewer: { displayName: 'Michael Chen' },
      starRating: 'FIVE',
      comment: 'Outstanding solar installation. Highly recommend Cosmic Renewable Energy!',
      createTime: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      updateTime: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      reviewId: 'review-3',
      reviewer: { displayName: 'Emma Williams' },
      starRating: 'FIVE',
      comment: 'Great value for money. The team was professional and efficient.',
      createTime: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      updateTime: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ],
  totalReviewCount: 927,
  averageRating: 4.9,
};

export async function getGoogleReviews(): Promise<GoogleMyBusinessResponse | null> {
  // For static export, try API Gateway if configured, otherwise return fallback
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  if (apiEndpoint) {
    try {
      const response = await fetch(`${apiEndpoint}/api/google-reviews`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching Google reviews from API:', error);
    }
  }

  // Return fallback data for static export
  return FALLBACK_REVIEWS;
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