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

async function createCollection() {

}

createCollection()
