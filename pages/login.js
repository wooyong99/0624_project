import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginCheck = () => {
    console.log(email);
    console.log(password)
  }
  return (
    <main>
      <h1>Login Page</h1>
      <br/>
      <input placeholder="email" value={email} onChange={ e => setEmail(e.target.value)}/><br/>
      <input placeholder="password" type="password" value={password} onChange={ e => setPassword(e.target.value)}/><br/>
      <button onClick={loginCheck}>Login</button>
    </main>
  )
}
