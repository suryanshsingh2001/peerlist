import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  animation?: "scale" | "bounce" | "rotate" | "none";
}

export function AnimatedButton({
  children,
  className,
  animation = "scale",
  ...props
}: AnimatedButtonProps) {
  const animations = {
    scale: {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
    },
    bounce: {
      whileHover: { y: -2 },
      whileTap: { y: 1 },
    },
    rotate: {
      whileHover: { rotate: [0, -5, 5, 0] },
      transition: { duration: 0.5 },
    },
    none: {},
  };

  return (
    <motion.div {...animations[animation]}>
      <Button className={cn("transform-gpu", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}