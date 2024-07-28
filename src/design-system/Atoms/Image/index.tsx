import NextImage from 'next/image';
import React from 'react';
import useToggle from '@/hooks/useToggle';
import { ImageProps } from './interface';

const Image: React.FC<ImageProps> = ({
  width,
  height,
  className = '',
  alt = 'Image', // Default alt text
  src = '/placeholder.png', // Default image src
  isLoading = false,
  onClick,
  style,
  layout = 'responsive',
  objectFit = '',
}) => {
  const [isLoaded, , , turnOn] = useToggle();

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
  };

  return (
    <>
      {isLoading ? (
        <div style={containerStyle}>
          {/* Placeholder for Skeleton component */}
          'Skeleton'
        </div>
      ) : (
        <div
          className={`relative flex justify-center ${className}`}
          style={containerStyle}
        >
          <NextImage
            alt={alt}
            className={className}
            src={src}
            style={style}
            layout={layout}
            objectFit={objectFit}
            {...(layout !== 'fill' && { width, height })}
            {...(objectFit !== 'cover' && { objectFit })}
            onClick={onClick}
            onError={turnOn}
            onLoadingComplete={turnOn}
          />
          {/* {!isLoaded &&
            // Placeholder for SpinnerCard component
            'SpinnerCard'} */}
        </div>
      )}
    </>
  );
};

export default Image;
