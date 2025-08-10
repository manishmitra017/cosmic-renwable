'use client'

import { useEffect, useRef } from 'react'

interface GooglePlace {
  formatted_address?: string
  geometry?: {
    location: {
      lat: () => number
      lng: () => number
    }
  }
  place_id?: string
}

interface GoogleAutocompleteOptions {
  componentRestrictions?: { country: string }
  fields?: string[]
  types?: string[]
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (
            input: HTMLInputElement,
            options?: GoogleAutocompleteOptions
          ) => {
            addListener: (event: string, callback: () => void) => void
            getPlace: () => GooglePlace
          }
        }
        event: {
          clearInstanceListeners: (instance: unknown) => void
        }
      }
    }
  }
}

export const useGooglePlaces = (
  onPlaceSelect: (place: GooglePlace) => void,
  options: GoogleAutocompleteOptions = {}
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<InstanceType<typeof window.google.maps.places.Autocomplete> | null>(null)

  useEffect(() => {
    if (!inputRef.current) return

    const initAutocomplete = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        const defaultOptions = {
          componentRestrictions: { country: 'AU' },
          fields: ['formatted_address', 'geometry', 'place_id'],
          types: ['address']
        }

        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          { ...defaultOptions, ...options }
        )

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace()
          onPlaceSelect(place)
        })
      }
    }

    if (window.google) {
      initAutocomplete()
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (window.google) {
          initAutocomplete()
          clearInterval(checkGoogleMaps)
        }
      }, 100)

      return () => clearInterval(checkGoogleMaps)
    }

    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [onPlaceSelect, options])

  return inputRef
}