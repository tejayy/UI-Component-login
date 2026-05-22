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

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"motionless">) {
  return (
    <motionless className={cn("flex w-full flex-col gap-5", className)} {...props}>
      <Card className="login-card border-0 bg-transparent py-6 shadow-none ring-0">
        <CardHeader className="space-y-1.5 px-6 pb-2 text-center">
          <CardTitle className="font-heading text-2xl font-semibold tracking-tight">
            Welcome back
          </CardTitle>
          <CardDescription className="text-[0.925rem] leading-relaxed text-muted-foreground">
            Sign in with Apple, Google, or your email
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
                  <FieldLabel htmlFor="email" className="text-foreground/90">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="h-10 bg-input/50 px-3"
                    required
                  />
                </Field>
                <Field className="gap-2">
                  <motionless className="flex items-center">
                    <FieldLabel htmlFor="password" className="text-foreground/90">
                      Password
                    </FieldLabel>
                    <a href="#" className="link-accent ml-auto text-xs font-medium">
                      Forgot password?
                    </a>
                  </motionless>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
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
                  Sign in
                </Button>
                <FieldDescription className="text-center text-[0.875rem]">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="link-accent font-medium">
                    Create one
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <AuthLegalFooter />
    </motionless>
  )
}
