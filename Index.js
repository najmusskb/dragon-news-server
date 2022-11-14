const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// data gula eikhan theke nibo 
const catagories = require('./Data/Catagories.json');





app.get('/', (req, res) => {
    res.send('basic api setup')
})



app.get('/news-catagories', (req, res) => {
    res.send(catagories)
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})