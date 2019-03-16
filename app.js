const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/user', (req, res) => {

    if(!req.body.name) {
        res.status(400)
        res.json({
            "msg": "error while processing request"
        })
    }
    else {
        res.status(200)
        res.json({
            "msg":"successfull request",
        })
    }
})


module.exports = { app };