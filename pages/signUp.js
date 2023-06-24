import { useState } from "react"
import { useRouter } from "next/router"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const signUp = async () => {
    console.log(email)
    console.log(password)
    if(email === null || email === undefined){
      alert("Enter your email")
      return false
    }
    if(password === null || password === undefined){
      alert("Enter your password")
      return false
    }
    const data = {email: email, password: password}
    const response = await fetch('/api/saveUser', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // Data saved successfully.
      router.push("/memoList")
    } else {
      console.log('Error occurred while saving data.'); 
    }
    router.push("/login")
  } 
  return (
    <main>
      <h1 class="m-5 d-flex justify-content-center">Sign Up Page</h1>
      <br/>
      <input className="form-control" placeholder="email" value={email} onChange={ e => setEmail(e.target.value)}/><br/>
      <input className="form-control" placeholder="password" type="password" value={password} onChange={ e => setPassword(e.target.value)}/><br/>
      <button onClick={signUp} className="btn btn-primary">Login</button>
    </main>
  )
}
