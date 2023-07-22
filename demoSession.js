const express = require('express');
const app = express();


const port = 3010;
app.listen(port, () => console.log(`this my server listen to ${port}`));