"use client"
import { Button } from "@/components/ui/button"
import { useClerk, useSignIn, useSignUp, useUser } from "@clerk/nextjs"

export function LinkLinearOauth() {
  const { signIn } = useSignIn()
  const clerk = useClerk()

  const onLinkLinearOauth = async () => {
    try {
      await clerk.signOut()
      //@ts-ignore
      await signIn?.create({
        // @ts-ignore
        strategy: OauthStrwtegies.LINEAR,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Button size="lg" variant="default" onClick={onLinkLinearOauth}>
      Authorize Linear
    </Button>
  )
}
