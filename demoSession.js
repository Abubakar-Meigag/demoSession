const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is a test request for Beko application')
})

const port = 3010;
app.listen(port, () => console.log(`this my server listen to ${port}`));