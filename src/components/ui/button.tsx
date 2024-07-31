import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex mt-5 whitespace-nowrap rounded-md text-sm z-15 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-yellow-500 text-white p-5 border border-solid border-yellow-500 rounded",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-yellow-500 rounded text-yellow-500",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        withArrow: ``,
        withArrowWhite: ``,
        tags: 'flex justify-center items-center gap-8 p-3.5 bg-transparent rounded-full border-2 border-white'
      },
      size: {
        default: "py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "w-10",
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
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {
          variant === 'withArrow'
            ?
            <div className="flex p-3 relative items-center font-medium group hover:text-white transition-all">
              <div className="w-[50px] transition-all duration-500 bg-yellow-500 h-[50px] group-hover:w-[calc(100%+6px)] rounded-full absolute -left-1" />
              <div className="flex z-10 items-center">{children}</div>
            </div>
            :
            variant === 'withArrowWhite'
              ?
              <div className="flex text-white p-3 relative items-center group hover:text-black transition-all">
                <div className="w-[50px] h-[50px] transition-all duration-500 bg-yellow-500 group-hover:w-[calc(100%+6px)] rounded-full absolute -left-1" />
                <div className="flex z-10 items-center">{children}</div>
              </div>
              :
              children
        }

      </Comp>
    )
  }
)
Button.displayName = "Button"
export { Button, buttonVariants }