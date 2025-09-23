import express from 'express'

const app = express()

app.get ('/usuario', (req, res) => {
        res.send("Ok, deu bom")

})

app.listen(3000)


