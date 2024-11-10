import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button>
            Login with Gmail
      </button>    
    </form>
  )
} 