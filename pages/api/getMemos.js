const fs = require('fs');
const path = require('path');

const getMemoList = () => {
  const filePath = path.join(process.cwd(), 'data.json');

  const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonDataRead);
  return data.memos
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    const rs = getMemoList();
    res.status(200).json(rs);
  }else{
    res.status(405).json({ message : "Method not allowed."})
  }

}
