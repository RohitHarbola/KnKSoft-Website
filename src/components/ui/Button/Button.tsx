import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-between rounded-full duration-200 font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-primary font-normal text-white hover:bg-primary/90 focus:ring-primary/50 shadow-sm border-border",
        secondary:
          "bg-secondary font-normal text-white hover:bg-secondary/90 focus:ring-secondary/50 rounded-lg border-border",
        outline: "bg-white font-normal text-foreground shadow-sm border-border",
        ghost: "text-primary hover:bg-primary/10",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "text-lg px-[25px] pr-[60px] py-[10px]",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

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
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className=""
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
        {leftIcon && !isLoading && <span className="mr-2">{leftIcon}</span>}
        <span
          className={cn(
            "transition-transform duration-500 group-hover:translate-x-[40px]",
            size === "sm"
              ? "group-hover:translate-x-[20px]"
              : "group-hover:translate-x-[40px]"
          )}
        >
          {children}
        </span>
        <span
          className={cn(
            "rounded-full absolute transition-all duration-500 right-2 group-hover:left-2 flex justify-center items-center shadow-sm",
            variant === "outline"
              ? "bg-primary text-white"
              : "bg-white text-black",
            "visibility-visible animate-slideInRight",
            size === "sm"
              ? "h-[20px] w-[20px] p-[2px]"
              : "h-[40px] w-[40px] p-[10px]"
          )}
        >
          {rightIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
