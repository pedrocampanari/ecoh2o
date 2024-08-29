const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/about/', (req, res)=>{
    res.sendFile(__dirname + '/public/html/sobre.html')
});

app.listen(3000, '0.0.0.0', () =>{
    console.log('Server is running on port 3000');
})
