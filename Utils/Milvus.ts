import * as GPTApi from "../Azure/OpenAI/GPTApi";
const Milvus = require('@zilliz/milvus2-sdk-node')
const fs = require('fs')

const milvusClient = new Milvus.MilvusClient('localhost:19530');

const allFields = [
    {
        name: 'id',
        data_type: Milvus.DataType.Int64,
        is_primary_key: true,
        autoID: true,
        description: '',
    },
    {
        name: 'title',
        data_type: Milvus.DataType.VarChar,
        max_length: 1024,
        description: '',
    },
    {
        name: 'url',
        data_type: Milvus.DataType.VarChar,
        max_length: 2083,
        description: '',
    },
    {
        name: 'date',
        data_type: Milvus.DataType.VarChar,
        description: '',
    },
    {
        name: 'content',
        data_type: Milvus.DataType.VarChar,
        max_length: 65535,
        description: '',
    },
    {
        name: 'length',
        data_type: Milvus.DataType.Int64,
        description: '',
    },
    {
        name: 'tokens',
        data_type: Milvus.DataType.Int64,
        description: '',
    },
    {
        name: 'embedding',
        data_type: Milvus.DataType.FloatVector,
        description: '',
        dim: 1536
    },
];

async function generateData() {
    const data = JSON.parse(fs.readFileSync("./src/Static/pg.json", "utf8"));
    // console.log(data)
    const results = [];
    for (const item of data.essays) {

    }
    // const content = item.content.trim()
    // const content = data.essays[0].content.trim()
    // const embeddingsJson = await GPTApi.gptEmbeddings(content)
    // const embedding = embeddingsJson.data[0].embedding;
    // const field = {
    //     title: item.title,
    //     url: item.url,
    //     date: item.date,
    //     content: item.content,
    //     length: item.length,
    //     tokens: item.tokens,
    //     embedding: item.embedding,
    // }
    // results.push(field)
    // console.log(results[0])
}

generateData()
