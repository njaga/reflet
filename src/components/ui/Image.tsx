import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover rounded-lg", className)}
      priority={priority}
    />
  );

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

