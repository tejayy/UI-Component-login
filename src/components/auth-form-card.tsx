import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type AuthFormCardProps = {
  variant: "login" | "signup"
  badge: string
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function AuthFormCard({
  variant,
  badge,
  title,
  description,
  icon,
  children,
  className,
}: AuthFormCardProps) {
  return (
    <Card
      data-auth-variant={variant}
      className={cn(
        "auth-card relative overflow-hidden border-0 shadow-none",
        className
      )}
    >
      <div className="auth-card__glow auth-card__glow--a" aria-hidden="true" />
      <div className="auth-card__glow auth-card__glow--b" aria-hidden="true" />
      <div className="auth-card__shine" aria-hidden="true" />

      <CardHeader className="relative space-y-4 px-7 pt-7 text-center sm:px-8 sm:pt-8">
        <span className="auth-badge mx-auto">{badge}</span>

        <div className="auth-icon-ring mx-auto">{icon}</div>

        <div className="space-y-2">
          <CardTitle className="auth-title text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            {title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed text-muted-foreground/90">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="relative px-7 pb-7 sm:px-8 sm:pb-8">
        {children}
      </CardContent>
    </Card>
  )
}

export const authInputClassName =
  "auth-input h-11 rounded-xl border-border/50 bg-background/50 px-4 text-[0.9375rem] shadow-inner shadow-black/5 transition-all duration-200 placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:bg-background/80 focus-visible:ring-[3px] focus-visible:ring-ring/25"

export const authSubmitClassName =
  "auth-submit h-11 w-full rounded-xl border-0 text-sm font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"

export const authLinkClassName =
  "font-medium text-[var(--auth-link)] underline-offset-4 transition-colors hover:text-[var(--auth-link-hover)] hover:underline"
