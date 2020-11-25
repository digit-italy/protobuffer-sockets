const express = require('express')
const app = express()
var cors = require('cors')
const client = require('./connection');

const port = 3002
const HumanSchema = require('./humans_pb')


app.use(cors())

app.get('/', (req, res) => {
    const data = new HumanSchema.Humans()
    const human = new HumanSchema.Human()
    human.setName("Murad")
    human.setAge(28)

    data.addHumans(human)

    res.send(data.serializeBinary())
})

app.get("/all", (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err) {
            console.log(data)
            res.send({ data: data });
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})