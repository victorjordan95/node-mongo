const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = '5bc926f52e101e243cc6e731a';

// Remove all Todos
// Todo.findOneAndRemove({}).then((result) => {
//     console.log(result)
// })

Todo.findByIdAndRemove('5bd4b36d867bad56a41c9127').then((todo) => {
    console.log(todo)
})

Todo.findOneAndRemove({_id: '5bd4b36d867bad56a41c9127'}).then((todo) => {
    
})