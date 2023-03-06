const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let dataBase = ['greeting card', 'wagon', 'computer', 
'table', 'chair', 'milk', 'sailboat',
'conditioner', 'rusty nail', 'desk' ]

app.get('/api/inventory/:id', (req, res) => {
  let id = req.params.id
  res.status(200).send(dataBase[id])
})

app.get('/api/inventory', (req, res) => {
  let item = req.query.item

  if (item) {
    item = item.toLowerCase()
    let responseArr = []

    for(let i = 0; i < dataBase.length; i++) {
      if (dataBase[i].includes(item)) {
        responseArr.push(dataBase[i])
      }
    }
    res.status(200).send(responseArr)
  } else {
    res.status(200).send(dataBase)
  }
})

app.listen(5050, () => {
  console.log('up on 5050')
})

