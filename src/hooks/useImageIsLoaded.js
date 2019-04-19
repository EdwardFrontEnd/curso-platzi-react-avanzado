import { useEffect, useState } from 'react'

export default function useImageIsLoaded ({ src }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(function () {
    const image = new window.Image()
    image.onload = () => setImageLoaded(true)
    image.src = src
  }, [src])

  return imageLoaded
}
