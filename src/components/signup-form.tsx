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

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex w-full flex-col gap-5", className)} {...props}>
      <AuthFormCard
        variant="signup"
        badge="Get started"
        title="Create your account"
        description="Start free — connect with Google, Apple, or your work email."
        icon={<AuthBrandIcon variant="signup" />}
      >
        <form className="space-y-5">
          <FieldGroup className="gap-5">
            <AuthSocialButtons />

            <FieldSeparator className="auth-separator *:data-[slot=field-separator-content]:bg-transparent">
              Or sign up with email
            </FieldSeparator>

            <div className="space-y-4">
              <Field className="gap-1.5">
                <FieldLabel htmlFor="name" className="text-[0.8125rem] font-medium">
                  Full name
                </FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Alex Morgan"
                  autoComplete="name"
                  required
                  className={authInputClassName}
                />
              </Field>

              <Field className="gap-1.5">
                <FieldLabel
                  htmlFor="signup-email"
                  className="text-[0.8125rem] font-medium"
                >
                  Email
                </FieldLabel>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className={authInputClassName}
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field className="gap-1.5">
                  <FieldLabel
                    htmlFor="signup-password"
                    className="text-[0.8125rem] font-medium"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    className={authInputClassName}
                  />
                </Field>

                <Field className="gap-1.5">
                  <FieldLabel
                    htmlFor="confirm-password"
                    className="text-[0.8125rem] font-medium"
                  >
                    Confirm
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    required
                    className={authInputClassName}
                  />
                </Field>
              </div>
            </div>

            <div className="space-y-3.5 pt-1">
              <Button
                type="submit"
                size="lg"
                data-auth-variant="signup"
                className={authSubmitClassName}
              >
                Create account
              </Button>

              <FieldDescription className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/" className={authLinkClassName}>
                  Sign in
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
