import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export const buttonVariants = cva(
  "eq inline-block whitespace-nowrap  rounded-sm border px-6 py-3 text-center text-lg disabled:cursor-default disabled:border-gray disabled:bg-gray disabled:text-black",
  {
    variants: {
      variant: {
        primary: "bg-green text-light py-4  hover:bg-green/90",
        secondary: "bg-orange text-white   hover:bg-orange/90 ",
        secondary_btn:
          "bg-orange font-semibold text-white rounded-lg   hover:bg-orange/90 ",
        danger: "bg-red text-light  hover:bg-red/90 ",
        outline:
          "bg-transparent text-white border-blue hover:bg-blue hover:text-white",
        lighting:
          "bg-transparent text-light  border-light hover:bg-dark/70 hover:text-white",
        deepLight: "bg-light/70 text-dark border-none  ",
      },
      size: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "auto",
    },
  }
);

const Button = ({
  onClick,
  type,
  disabled,
  children,
  variant,
  size,
  href,
  isLoading,
  ...props
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        isLoading && "flex items-center justify-center gap-2.5"
      )}
    >
      {isLoading && <Loader2 size={20} className='animate-spin' />}
      {children}
    </Link>
  );
};

export default Button;
