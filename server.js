const next = require('next')
const http = require('http')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 80;
const cors = require('cors');
const app = next({ dev });
//const app = next({ dir: '.' , dev: false, staticMarkup: false, quiet: false, conf: null, chunk:null, cache: true});
const handle = app.getRequestHandler()
const compression = require('compression');
app.prepare().then(() => {
    const server = express();
    server.use(compression());
    server.use(cors({ origin: true }));
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
        next();
    });
    // running server
    server.get('*', (req, res) => {
        return handle(req, res)
    });
    server.listen(PORT, err => {
        if (err) {
            throw err
        }
        else {
            console.log(`> Ready on http://localhost:${PORT}`)
        }
    })
})