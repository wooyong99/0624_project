import { useState } from "react"
import { useRouter } from "next/router"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const loginCheck = () => {
    console.log(email)
    console.log(password)

    if(email === "wulovesk@naver.com") {
      if(password === "123"){
        alert("login success")
        router.push("/createMemo")
      }else{
        alert("Not Found password")
        return
      }
    }else{
      alert("Not Found email")
      return
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
