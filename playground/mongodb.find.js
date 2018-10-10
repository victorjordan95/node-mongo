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

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to connect');
    // })

    db.collection('Todos').find({name: 'Victor'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    client.close();
});