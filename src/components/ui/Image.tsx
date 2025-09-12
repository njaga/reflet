import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  animate?: boolean;
  delay?: number;
}

const OptimizedImage = ({
  src,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  animate = true,
  delay = 0,
}: ImageProps) => {
  const [imageError, setImageError] = useState(false);

  // Détecter si c'est une image PNG qui pourrait poser problème
  const isPNGImage = src.toLowerCase().includes('.png');
  
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover rounded-lg", className)}
      priority={priority}
      onError={() => {
        console.error(`Erreur de chargement de l'image: ${src}`);
        setImageError(true);
      }}
      onLoad={() => {
        console.log(`Image chargée avec succès: ${src}`);
      }}
      unoptimized={isPNGImage}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );

  // Fallback si l'image ne charge pas
  if (imageError) {
    const fallbackElement = (
      <div 
        className={cn(
          "bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-lg",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-center text-neutral-dark">
          <div className="text-4xl mb-2">🖼️</div>
          <div className="text-sm">Image non disponible</div>
        </div>
      </div>
    );

    if (animate) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay }}
          viewport={{ once: true }}
        >
          {fallbackElement}
        </motion.div>
      );
    }

    return fallbackElement;
  }

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        {imageElement}
      </motion.div>
    );
  }

  return imageElement;
};

export default OptimizedImage;

