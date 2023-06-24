import { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const loginCheck = async () => {
    const data = {email: email, password: password}

    const response = await fetch('/api/findUser', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      alert(result.message); // Data saved successfully.
      router.push("/memoList")
    } else {
      const result = await response.json();
      alert(result.message); 
    }
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
