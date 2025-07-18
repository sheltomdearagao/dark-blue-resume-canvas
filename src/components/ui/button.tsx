import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:btn-active-light dark:active:btn-active-dark focus:btn-focus-ring",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:btn-active-light dark:active:btn-active-dark focus:btn-focus-ring",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:btn-active-light dark:active:btn-active-dark focus:btn-focus-ring",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:btn-active-light dark:active:btn-active-dark focus:btn-focus-ring",
        ghost: "hover:bg-accent hover:text-accent-foreground active:btn-active-light dark:active:btn-active-dark focus:btn-focus-ring",
        link: "text-primary underline-offset-4 hover:underline active:btn-active-light dark:active:btn-active-dark focus:btn-focus-ring",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Ensure event handlers are not affected by theme changes
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Preserve original onClick behavior
      if (props.onClick) {
        props.onClick(event)
      }
    }

    const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
      // Preserve original onFocus behavior
      if (props.onFocus) {
        props.onFocus(event)
      }
    }

    const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
      // Preserve original onBlur behavior
      if (props.onBlur) {
        props.onBlur(event)
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
