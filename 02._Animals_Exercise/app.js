const express = require('express');

const app = express();

const jaguar = { name: "Jaguar", id: 1 }
const lion = { name: "Lion", id: 2 }
const Elephant = { name: "Elephant", id: 3 }

const animals = [
    jaguar, lion, Elephant
]

app.get('/animals', (req, res) => {
    res.send({ data: animals });
})

app.get('/animals/:id', (req, res) => {
    const animal = animals.find(e => e.id === Number(req.params.id));

    if (!animal){
        return res.send({data: "no animal have that id"})
    }

    res.send({ data: animal })
})

app.listen(8080)