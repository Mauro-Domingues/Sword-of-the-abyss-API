const app = require('../src/app.js')
const cors = require('cors')

const port = normalizaPort(process.env.PORT || '3000')

function normalizaPort(val) {
    const port = parseInt(val, 10)
    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

const corsOptions = {
    origin: `http://localhost:${port}`,
    optionsSuccessStatus: 200,
    methods: "get, getById, getByTag, post, put, delete"
}

app.use(cors(corsOptions))
app.listen(port, function () {
    console.log(`app rodando na porta ${port}`)
})