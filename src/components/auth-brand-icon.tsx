import { cn } from "@/lib/utils"

type AuthBrandIconProps = {
  variant: "login" | "signup"
  className?: string
}

export function AuthBrandIcon({ variant, className }: AuthBrandIconProps) {
  return (
    <span
      data-auth-variant={variant}
      className={cn("auth-brand-icon flex size-12 items-center justify-center", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L4 8v8l8 5 8-5V8l-8-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 12v8M8 10l4 2 4-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>
    </span>
  )
}
