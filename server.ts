import express, { Express, Request, Response } from 'express'
import * as GPTApi from './Azure/OpenAI/GPTApi'
const bodyParser = require('body-parser');

const app: Express = express()
const port = 3008

// For parsing application/json
app.use(bodyParser.json());

// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

function index() {
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello World!')
    })
}

async function embeddings() {
    app.post('/embeddings', async (req: Request, res: Response) => {
        console.log(req.body)
        const embeddingsJson = await GPTApi.gptEmbeddings(req.body.input)
        res.send(embeddingsJson)
    })
}
async function completions() {
    app.post('/chat/completions', async (req: Request, res: Response) => {
        console.log(req.body)
        const completions = await GPTApi.completions(req.body.prompt)
        res.send(completions)
    })
}

function apiBuilder() {
    index()
    embeddings()
    completions()
}

function serverSetup() {
    apiBuilder()
    app.use(bodyParser.json())
    const server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

serverSetup()
