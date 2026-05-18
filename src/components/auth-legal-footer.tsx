import { FieldDescription } from "@/components/ui/field"

export function AuthLegalFooter() {
  return (
    <FieldDescription className="px-2 text-center text-xs leading-relaxed text-muted-foreground/80">
      By continuing, you agree to our{" "}
      <a href="#" className="link-accent">
        Terms
      </a>{" "}
      and{" "}
      <a href="#" className="link-accent">
        Privacy Policy
      </a>
      .
    </FieldDescription>
  )
}
