import { AuthLayout } from "@/components/auth-layout"
import { SignupForm } from "@/components/signup-form"

export function SignupPage() {
  return (
    <AuthLayout variant="signup" subtitle="Create your workspace">
      <SignupForm />
    </AuthLayout>
  )
}
