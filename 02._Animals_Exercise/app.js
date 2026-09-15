const express = require('express');

const app = express();
app.use(express.json())
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
    const animal = animals.find(e => e.id === parseInt(req.params.id));

    if (!animal){
        return res.send({data: "no animal have that id"})
    }
    res.send({ data: animal })
})

app.post('/animals', (req, res) => {
    const newAnimal = { id: animals.length + 1, name: req.body.name }
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
})

app.put('/animals/:id', (req, res) => {
   const providedId = Number(req.params.id);
   const foundIndex = animals.findIndex(item => item.id === providedId);

   if (foundIndex === -1){
    return res.status(404).json({ data: `No animal found by id: ${providedId}` })
   }
   animals.splice(foundIndex, 1);
   const newID = 
   const updatedAnimal = { name: req.body.name, id: animals.length + 1 };

   animals.push(updatedAnimal);
   res.send(updatedAnimal);
});



app.listen(8080)