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
      setModifyTitle(jsonResponse.title)
      setModifyBody(jsonResponse.body)
    }
    return response
  }
  
  const submitUpdate = async () =>{
    const data = {title: modifyTitle, body: modifyBody, id: id, createdAt: modifyMemo.createdAt, updatedAt: modifyMemo.updatedAt}
    const response = await fetch('/api/modifyMemo', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(data),
    });
    console.log(response)
  
    if (response.ok) {
      const result = await response.json();
      console.log(result.message); // Data saved successfully.
      alert("success")
    } else {
      console.log('Error occurred while saving data.'); 
      alert("fail")
    }
    router.push("/memo/"+id)
  }
  return (
    <main>
      <h1 className="m-5 d-flex justify-content-center">Update Memo {modifyMemo.id}</h1>
      <input className="form-control" placeholder="Enter Title" defaultValue={modifyMemo.title} onChange={e => setModifyTitle(e.target.value)}/><br/>
      <textarea className="form-control" placeholder="Enter Body" defaultValue={modifyMemo.body} onChange={e => setModifyBody(e.target.value)} /><br/>
      <button className="btn btn-primary" onClick={submitUpdate}>Update</button>
    </main>
  )
}
export default UpdateMemo