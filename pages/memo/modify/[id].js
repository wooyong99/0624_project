import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const UpdateMemo = () =>{
  const router = useRouter();
  const { id } = router.query;
  const [modifyMemo, setModifyMemo] = useState({})
  const [modifyTitle, setModifyTitle] = useState("");
  const [modifyBody, setModifyBody] = useState("");
  useEffect(() => {
    if (id) {
      getUpdateMemo()
    }
  }, [id])
  const getUpdateMemo = async () => {
    const response = await fetch(`/api/getMemo?id=${id}`)
    const jsonResponse = await response.json()
    if (jsonResponse.error) {
      alert("Not Found Memo "+id)
      router.push("/memoList")
    }else{
      setModifyMemo(jsonResponse)
    }
    return response
  }
  return (
    <main>
      <h1 className="m-5 d-flex justify-content-center">Update Memo {modifyMemo.id}</h1>
      <input className="form-control" placeholder="Enter Title" defaultValue={modifyMemo.title} onChange={e => setModifyTitle(e.target.value)}/><br/>
      <textarea className="form-control" placeholder="Enter Body" defaultValue={modifyMemo.body} onChange={e => setModifyBody(e.target.value)} /><br/>
      <button className="btn btn-primary">Login</button>
    </main>
  )
}
export default UpdateMemo