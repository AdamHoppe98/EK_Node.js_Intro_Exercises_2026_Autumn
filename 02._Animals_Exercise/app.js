const express = require('express');

const app = express();

const jaguar = {name: "Jaguar", id: 1}
const lion = {name: "Lion", id: 2}
const Elephant = {name: "Elephant", id: 3}

const animals = [
    jaguar, lion, Elephant
]

app.get('/animals', (req, res) => {
    res.send({data: animals});
})

app.get('/animals/:id', (req, res) => {
    const id = Number(req.params.id);
    for (let i = 0; i < animals.length; i++ ){
        if (animals[i].id === id)
            res.send({data: animals[i]})
    }
})

app.listen(8080)