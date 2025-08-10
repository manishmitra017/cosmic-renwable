'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    google: any
  }
}

export const useGooglePlaces = (
  onPlaceSelect: (place: any) => void,
  options: any = {}
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<any>(null)

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