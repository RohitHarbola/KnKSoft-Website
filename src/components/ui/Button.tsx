"use client";
// If you are using the Next.js App Router and need client-side interactivity

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // A utility for conditional classNames

/**
 * Using cva() to define base styles + variants for your Button.
 */
const buttonVariants = cva(
  // Base styles for all buttons
  "inline-flex items-center justify-center relative font-medium rounded-md overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      /**
       * variant: Different color themes or styles.
       */
      variant: {
        primary: [
          "bg-primary text-primary-foreground",
          // Optional "shine" overlay on hover
          "before:absolute before:inset-0 before:translate-x-[-100%]",
          "before:bg-white/10 before:transition-transform before:duration-300",
          "hover:before:translate-x-0 hover:shadow-lg",
          "active:scale-95",
          "focus-visible:ring-primary",
        ].join(" "),
        secondary: [
          "bg-secondary text-secondary-foreground",
          "before:absolute before:inset-0 before:translate-x-[-100%]",
          "before:bg-white/5 before:transition-transform before:duration-300",
          "hover:before:translate-x-0 hover:shadow-lg",
          "active:scale-95",
          "focus-visible:ring-secondary",
        ].join(" "),
        outline: [
          "border border-gray-300 dark:border-gray-600 bg-transparent",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "focus-visible:ring-primary",
          "shadow-sm",
        ].join(" "),
        ghost: [
          "bg-transparent text-black dark:text-white",
          "hover:bg-gray-50 dark:hover:bg-gray-800",
          "focus-visible:ring-primary",
        ].join(" "),
        danger: [
          "bg-red-500 text-white hover:bg-red-600",
          "focus-visible:ring-red-500",
          "shadow-sm",
        ].join(" "),
        link: "text-primary underline-offset-4 hover:underline",
      },
      /**
       * size: Controls padding, height, and font-size.
       */
      size: {
        xs: "h-7 px-2.5 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-4 text-sm",
        lg: "h-10 px-5 text-base",
        xl: "h-12 px-6 text-lg",
        icon: "h-9 w-9",
      },
      /**
       * fullWidth: Stretch button to full width if desired.
       */
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    /**
     * defaultVariants: If user doesn't specify a variant or size, we use these.
     */
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

/**
 * ButtonProps extends normal button properties + adds our cva "variant" props,
 * plus optional icons, loading state, and MotionProps for Framer Motion.
 */
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    VariantProps<typeof buttonVariants>,
    MotionProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  children?: React.ReactNode;
}

/**
 * We'll wrap our <button> with Framer Motion's <motion.button>.
 * Using React.forwardRef so the parent can directly reference the DOM element.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      leftIcon,
      rightIcon,
      isLoading,
      children,
      disabled,
      // Framer Motion props
      whileHover,
      whileTap,
      initial,
      animate,
      exit,
      transition,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        // Merge CVA classes + any custom classes
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || isLoading}
        // Default (or custom) Framer Motion animations
        whileHover={whileHover ?? { scale: 1.03 }}
        whileTap={whileTap ?? { scale: 0.97 }}
        transition={
          transition ?? { type: "spring", stiffness: 300, damping: 20 }
        }
        initial={initial}
        animate={animate}
        exit={exit}
        {...props}
      >
        {/* Spinner for loading state */}
        {isLoading && (
          <svg
            className="absolute left-2 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}

        {/* Left icon (only if not loading) */}
        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}

        {/* Main text */}
        <span>{children as React.ReactNode}</span>

        {/* Right icon */}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
