const express = require('express')
const fs = require("fs")
const PORT = 3000
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  //統一定義DB檔案路徑
  const DB_PATH = "./listdb.json"

  //取得listItems
  server.get("/list", (req, res) => {
    let todolist = {listItems: []}
    //檢查DB檔案是否存在
    if (fs.existsSync(DB_PATH)) {
      todolist = JSON.parse(fs.readFileSync(DB_PATH));
    } else {
      //如果檔案不存在，創建檔案並寫入預設內容
      fs.writeFileSync(DB_PATH, JSON.stringify(todolist))
    }
    return res.json(todolist);
  })

  //存入listItems
  server.post("/list", (req, res) => {
    //檢查request body是否合法
    if(!req.body.listItems)  {
      //
      return res.status(422).json({
        success: false,
        message: "Body must contains listItems"
      })
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(req.body));
    return res.json({"success": true})
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})