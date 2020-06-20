import express from 'express';

const app = express();


app.get('/', (request, response) => {
    return response.json({ message: 'User, Welcome' });
});



app.listen(3333);