const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

// app.use(express.static(publicPath)); // to access the page, use localhost:5000/about.html

app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/profile', (_, resp) => {
    const user = {
        "name": "Rudra",
        "email": "abc@gmail.com",
        "mob": 995858035
    }
    resp.render('profile', {user});
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/error.html`);
});

app.listen(5000, 'localhost');