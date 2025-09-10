import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  border?: boolean;
}

const Card = ({
  children,
  className,
  hover = true,
  gradient = false,
  border = true,
}: CardProps) => {
  const baseClasses = "rounded-xl transition-all duration-300";
  
  const variants = {
    hover: hover ? "hover:shadow-xl hover:-translate-y-1" : "",
    gradient: gradient ? "bg-gradient-to-br from-primary/5 to-secondary/5" : "bg-white",
    border: border ? "border-2 border-secondary/20" : "",
  };

  const classes = cn(
    baseClasses,
    variants.hover,
    variants.gradient,
    variants.border,
    className
  );

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;

