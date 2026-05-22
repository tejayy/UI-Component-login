import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { AuthBrandIcon } from "@/components/auth-brand-icon"
import {
  AuthFormCard,
  authInputClassName,
  authLinkClassName,
  authSubmitClassName,
} from "@/components/auth-form-card"
import { AuthLegalFooter } from "@/components/auth-legal-footer"
import { AuthSocialButtons } from "@/components/auth-social-buttons"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex w-full flex-col gap-5", className)} {...props}>
      <AuthFormCard
        variant="login"
        badge="Sign in"
        title="Welcome back"
        description="Pick up where you left off — social login or email works."
        icon={<AuthBrandIcon variant="login" />}
      >
        <form className="space-y-5">
          <FieldGroup className="gap-5">
            <AuthSocialButtons />

            <FieldSeparator className="auth-separator *:data-[slot=field-separator-content]:bg-transparent">
              Or continue with email
            </FieldSeparator>

            <div className="space-y-4">
              <Field className="gap-1.5">
                <FieldLabel htmlFor="email" className="text-[0.8125rem] font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className={authInputClassName}
                />
              </Field>

              <Field className="gap-1.5">
                <div className="flex items-center justify-between">
                  <FieldLabel
                    htmlFor="password"
                    className="text-[0.8125rem] font-medium"
                  >
                    Password
                  </FieldLabel>
                  <Link to="/forgot-password" className={authLinkClassName}>
                    Forgot?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className={authInputClassName}
                />
              </Field>
            </div>

            <div className="space-y-3.5 pt-1">
              <Button
                type="submit"
                size="lg"
                data-auth-variant="login"
                className={authSubmitClassName}
              >
                Sign in
              </Button>

              <FieldDescription className="text-center text-sm text-muted-foreground">
                New here?{" "}
                <Link to="/signup" className={authLinkClassName}>
                  Create an account
                </Link>
              </FieldDescription>
            </div>
          </FieldGroup>
        </form>
      </AuthFormCard>

      <AuthLegalFooter />
    </div>
  )
}
