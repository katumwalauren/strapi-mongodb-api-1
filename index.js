console.log("Lauren this is codespace")

const app = require('./app')

const {PORT} = express.env

app.listen(PORT, () => {
    console.log(`server is running at port:${PORT}`)
})