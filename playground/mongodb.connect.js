// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')
const test = require('assert');

// Connection url
const url = 'mongodb://localhost:27017';

MongoClient.connect(`${url}/TodoApp`, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Create new task',
        completed: false
    }, (err, result)=> {
        if (err) {
            return console.log('Unable to insert todo', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});