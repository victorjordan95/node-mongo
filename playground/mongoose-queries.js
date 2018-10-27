const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bc926f52e101e243cc6e731a';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

Todo.findById(id).then((todos) => {
    if (!todos) {
        console.log('Todo not found');
    }
    console.log('Todos by Id', todos);
}).catch((e) => console.log(e));