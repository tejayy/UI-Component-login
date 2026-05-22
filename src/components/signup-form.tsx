import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { AuthLegalFooter } from "@/components/auth-legal-footer"
import { AuthSocialButtons } from "@/components/auth-social-buttons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6",
        className
      )}
      {...props}
    >
      <Card className="relative overflow-hidden border border-border/50 bg-background/80 shadow-2xl backdrop-blur-xl">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <CardHeader className="relative space-y-3 px-8 pt-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-primary/10 backdrop-blur">
            <span className="text-xl font-bold text-primary">S</span>
          </div>

          <div className="space-y-1">
            <CardTitle className="text-3xl font-bold tracking-tight">
              Create account
            </CardTitle>

            <CardDescription className="text-sm leading-relaxed text-muted-foreground">
              Join us using your social account or email
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="relative px-8 pb-8">
          <form className="space-y-6">
            <FieldGroup className="gap-6">
              <AuthSocialButtons />

              <FieldSeparator className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Or continue with email
              </FieldSeparator>

              <div className="space-y-5">
                <Field className="gap-2">
                  <FieldLabel
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name
                  </FieldLabel>

                  <Input
                    id="name"
                    type="text"
                    placeholder="Alex Morgan"
                    autoComplete="name"
                    required
                    className="
                      h-12 rounded-xl border-border/60
                      bg-background/60 px-4
                      transition-all duration-200
                      focus:border-primary focus:ring-2 focus:ring-primary/20
                    "
                  />
                </Field>

                <Field className="gap-2">
                  <FieldLabel
                    htmlFor="signup-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address
                  </FieldLabel>

                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="
                      h-12 rounded-xl border-border/60
                      bg-background/60 px-4
                      transition-all duration-200
                      focus:border-primary focus:ring-2 focus:ring-primary/20
                    "
                  />
                </Field>

                <Field className="gap-2">
                  <FieldLabel
                    htmlFor="signup-password"
                    className="text-sm font-medium text-foreground"
                  >
                    Password
                  </FieldLabel>

                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    className="
                      h-12 rounded-xl border-border/60
                      bg-background/60 px-4
                      transition-all duration-200
                      focus:border-primary focus:ring-2 focus:ring-primary/20
                    "
                  />
                </Field>

                <Field className="gap-2">
                  <FieldLabel
                    htmlFor="confirm-password"
                    className="text-sm font-medium text-foreground"
                  >
                    Confirm Password
                  </FieldLabel>

                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    className="
                      h-12 rounded-xl border-border/60
                      bg-background/60 px-4
                      transition-all duration-200
                      focus:border-primary focus:ring-2 focus:ring-primary/20
                    "
                  />
                </Field>
              </div>

              <div className="space-y-4 pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="
                    h-12 w-full rounded-xl
                    bg-primary text-sm font-semibold
                    shadow-lg shadow-primary/20
                    transition-all duration-200
                    hover:scale-[1.01]
                    hover:shadow-xl hover:shadow-primary/30
                    active:scale-[0.99]
                  "
                >
                  Create account
                </Button>

                <FieldDescription className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="
                      font-semibold text-primary
                      transition-opacity hover:opacity-80
                    "
                  >
                    Sign in
                  </Link>
                </FieldDescription>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <AuthLegalFooter />
    </div>
  )
}