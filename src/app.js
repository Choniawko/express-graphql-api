import express from "express"
import graphqlHTTP from "express-graphql"

const app = express()
const PORT = 3000
const schema = {}

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema
    })
)
app.get("/", (req, res) => {
    return res.json({
        status: "ok"
    })
})

app.listen(PORT, () => {
    console.log(`listen port: ${PORT}`)
})
