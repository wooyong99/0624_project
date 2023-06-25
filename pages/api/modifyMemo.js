const fs = require('fs');
const path = require('path');

const updateMemo = (obj) => {
  const filePath = path.join(process.cwd(), 'data.json');

  const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonDataRead);
  data.memos = data.memos.map(item => (item.id === parseInt(obj.id) ? {
    ...item, title:obj.title, body:obj.body, updatedAt: new Date().toISOString()
  }:item))
  console.log(data)
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData);
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("hahaha")
    const data = req.body;
    updateMemo(data);
    res.status(200).json({ message: 'Data saved successfully.' });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
