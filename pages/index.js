import { useState } from "react"
import { useRouter } from "next/router"

export default function SignUp() {
  return (
    <main>
      <a href="/signUp">Sign up</a><br/>
      <a href="/login">Login</a><br/>
      <a href="/memoList">Memo List</a><br/>
    </main>
  )
}
