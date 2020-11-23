const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// importing date file in the local  then destructuring 
const { Date, getDay } = require(path.join(__dirname, '/date.js'))

const app = express()


let items = ['Buy food', 'Cook Food', 'Eat Food'];
let workItems = [];
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static('./public'))

app.get('/', (req, res) => {
    //using the imported date.js file 
    let day = Date()

    res.render('list', { listTitle: day, newListItems: items })

})


app.post('/', (req, res) => {
    let item = req.body.newItem
        //if post request work  
    if (req.body.list === 'Work') {
        workItems.push(item)
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect('/')
    }
})

app.get('/work', (req, res) => {
    res.render('list', { listTitle: 'Work List', newListItems: workItems })
})

app.post('/work', (req, res) => {
    let item = req.body.newItem
    workItems.push(item)
    res.redirect('/work')
})


app.get('/about', (req, res) => {

    res.render('about')
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`);
})