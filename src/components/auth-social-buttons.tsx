import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { AppleIcon, GoogleIcon } from "@/components/auth-icons"

export function AuthSocialButtons() {
  return (
    <Field className="grid grid-cols-2 gap-2">
      <Button
        variant="outline"
        type="button"
        size="lg"
        className="btn-social h-11 w-full gap-2.5 font-medium"
      >
        <AppleIcon className="size-[1.125rem]" />
        <span className="sr-only sm:not-sr-only sm:inline">Apple</span>
      </Button>
      <Button
        variant="outline"
        type="button"
        size="lg"
        className="btn-social h-11 w-full gap-2.5 font-medium"
      >
        <GoogleIcon className="size-[1.125rem]" />
        <span className="sr-only sm:not-sr-only sm:inline">Google</span>
      </Button>
    </Field>
  )
}
