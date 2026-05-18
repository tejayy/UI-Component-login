import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { AppleIcon, GoogleIcon } from "@/components/auth-icons"

export function AuthSocialButtons() {
  return (
    <Field className="grid grid-cols-2 gap-2.5">
      <Button
        variant="outline"
        type="button"
        size="lg"
        className="btn-social h-10 w-full gap-2"
      >
        <AppleIcon className="size-4" />
        <span className="sr-only sm:not-sr-only sm:inline">Apple</span>
      </Button>
      <Button
        variant="outline"
        type="button"
        size="lg"
        className="btn-social h-10 w-full gap-2"
      >
        <GoogleIcon className="size-4" />
        <span className="sr-only sm:not-sr-only sm:inline">Google</span>
      </Button>
    </Field>
  )
}
