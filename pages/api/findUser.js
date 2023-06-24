const fs = require('fs');
const path = require('path');

const find = (obj) => {
  const filePath = path.join(process.cwd(), 'data_user.json');

  const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonDataRead);
  for(const user of data){
    if(user.email === obj.email && user.password === obj.password){
      return true
    }
  }
  return false
  
};
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(find(data))
    if(find(data)){
      res.status(200).json({ message: "Login Success" });
    }else{
      res.status(405).json({ message: 'Login Fail.' });  
    }
  } else {
    res.status(405).json({ message: 'Login Fail.' });
  }
}
