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
    <div className={cn("flex w-full flex-col gap-5", className)} {...props}>
      <Card className="login-card border-0 bg-transparent py-6 shadow-none ring-0">
        <CardHeader className="space-y-1.5 px-6 pb-2 text-center">
          <CardTitle className="font-heading text-2xl font-semibold tracking-tight">
            Create your account
          </CardTitle>
          <CardDescription className="text-[0.925rem] leading-relaxed text-muted-foreground">
            Sign up with Apple, Google, or your email
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <form>
            <FieldGroup className="gap-5">
              <AuthSocialButtons />

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-transparent *:data-[slot=field-separator-content]:text-xs *:data-[slot=field-separator-content]:uppercase *:data-[slot=field-separator-content]:tracking-wider">
                Or continue with email
              </FieldSeparator>

              <Field className="gap-4">
                <Field className="gap-2">
                  <FieldLabel htmlFor="name" className="text-foreground/90">
                    Full name
                  </FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Alex Morgan"
                    autoComplete="name"
                    className="h-10 bg-input/50 px-3"
                    required
                  />
                </Field>
                <Field className="gap-2">
                  <FieldLabel htmlFor="signup-email" className="text-foreground/90">
                    Email
                  </FieldLabel>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="h-10 bg-input/50 px-3"
                    required
                  />
                </Field>
                <Field className="gap-2">
                  <FieldLabel htmlFor="signup-password" className="text-foreground/90">
                    Password
                  </FieldLabel>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="h-10 bg-input/50 px-3"
                    required
                  />
                </Field>
                <Field className="gap-2">
                  <FieldLabel
                    htmlFor="confirm-password"
                    className="text-foreground/90"
                  >
                    Confirm password
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="h-10 bg-input/50 px-3"
                    required
                  />
                </Field>
              </Field>

              <Field className="gap-3 pt-1">
                <Button
                  type="submit"
                  size="lg"
                  className="btn-login-primary h-10 w-full text-sm font-semibold"
                >
                  Create account
                </Button>
                <FieldDescription className="text-center text-[0.875rem]">
                  Already have an account?{" "}
                  <Link to="/" className="link-accent font-medium">
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <AuthLegalFooter />
    </div>
  )
}
