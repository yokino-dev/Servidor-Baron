"use strict";

const express = require('express');
const path = require('path');

function main() {
        const app = express();
        const port = 3000;

        app.use(express.static(path.join(__dirname, "public")));

        app.listen(port, () => {
                console.log(`Servidor estático rodando em http://localhost:${port} !`);
        });
}


main();