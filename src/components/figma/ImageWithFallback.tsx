import React, { useState } from 'react'

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string
  fallbackClassName?: string
}

export function ImageWithFallback({
  src,
  fallbackSrc = '/src/assets/9f3796087ae1fcc5c6d7ac1bf34aa7dff4fb01dc.png',
  fallbackClassName,
  className,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={hasError && fallbackClassName ? `${className} ${fallbackClassName}` : className}
      onError={handleError}
    />
  )
}