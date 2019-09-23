const next = require('next')
const http = require('http')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 80;
//const app = next({ dev });
const app = next({ dir: '.' , dev: false, staticMarkup: false, quiet: false, conf: null, chunk:null, cache: true});
const handle = app.getRequestHandler()
const compression = require('compression');
app.prepare().then(() => {
    const server = express();
    server.use(compression());
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