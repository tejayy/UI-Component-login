import { AuthLayout } from "@/components/auth-layout"
import { LoginForm } from "@/components/login-form"

export function LoginPage() {
  return (
    <AuthLayout variant="login" subtitle="Sign in to your workspace">
      <LoginForm />
    </AuthLayout>
  )
}
