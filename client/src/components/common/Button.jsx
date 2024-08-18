import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const Button = React.forwardRef(
  ({ variant, disabled, className, ...props }, ref) => {
    return (
      <div className="w-full max-w-md px-2">
        <button
          ref={ref}
          className={cn(
            buttonVariants({ variant }),
            disabled && "cursor-default",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

const buttonVariants = cva(
  "flex justify-center items-center gap-4 w-full outline-none px-4 py-2 rounded-md text-sm font-medium text-nowrap",
  {
    variants: {
      variant: {
        white: "bg-white text-black",
        black: "bg-main-color text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default Button;