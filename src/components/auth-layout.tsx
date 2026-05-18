import { Link } from "react-router-dom"

type AuthLayoutProps = {
  subtitle: string
  children: React.ReactNode
}

export function AuthLayout({ subtitle, children }: AuthLayoutProps) {
  return (
    <div className="login-shell flex min-h-svh flex-col items-center justify-center px-4 py-10 sm:px-6">
      <div
        className="login-orb login-orb--primary"
        aria-hidden="true"
      />
      <div
        className="login-orb login-orb--secondary"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-[400px] flex-col items-center gap-8">
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
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
            <span className="text-xs text-muted-foreground">{subtitle}</span>
          </span>
        </Link>

        {children}
      </div>
    </div>
  )
}
