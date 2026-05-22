import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

type AuthLayoutProps = {
  subtitle: string
  variant?: "login" | "signup"
  children: React.ReactNode
}

export function AuthLayout({
  subtitle,
  variant = "login",
  children,
}: AuthLayoutProps) {
  return (
    <div
      data-auth-page={variant}
      className="login-shell flex min-h-svh flex-col items-center justify-center px-4 py-10 sm:px-6"
    >
      <div className="login-orb login-orb--primary" aria-hidden="true" />
      <div className="login-orb login-orb--secondary" aria-hidden="true" />
      <div className="login-orb login-orb--tertiary" aria-hidden="true" />

      <div
        className={cn(
          "relative z-10 flex w-full flex-col items-center gap-7",
          variant === "signup" ? "max-w-[420px]" : "max-w-[400px]"
        )}
      >
        <Link
          to="/"
          className="group flex items-center gap-3.5 transition-opacity hover:opacity-90"
        >
          <span className="auth-header-logo flex size-11 items-center justify-center rounded-xl text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
              aria-hidden="true"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="font-heading text-lg tracking-tight text-foreground">
              Tejas Inc.
            </span>
            <span className="text-xs text-muted-foreground/90">{subtitle}</span>
          </span>
        </Link>

        {children}
      </div>
    </div>
  )
}
