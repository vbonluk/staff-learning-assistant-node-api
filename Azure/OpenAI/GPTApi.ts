import * as NetworkTools from "../../Utils/NetworkTools"
const dotenv = require('dotenv');
dotenv.config({path: `.env.local`, override: true});

const AzureGPTEndPointEmbeddingModel = process.env.REACT_APP_OPENAI_END_POINT + "/openai/deployments/" + process.env.REACT_APP_OPENAI_DEPLOYMENT
const AzureGPTEndPointChatGPTModel = process.env.REACT_APP_OPENAI_END_POINT + "/openai/deployments/" + process.env.REACT_APP_OPENAI_GPT35_DEPLOYMENT
const AzureAPIKey = process.env.REACT_APP_OPENAI_API_KEY

const systemPrompt = "You are a helpful assistant that accurately answers queries using Paul Graham's essays. Use the text provided to form your answer, but avoid copying word-for-word from the essays. Try to use your own words when possible. Keep your answer under 5 sentences. Be accurate, helpful, concise, and clear."
const prompt = "Use the following passages to provide an answer to the query: "

// https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/reference#embeddings
export async function gptEmbeddings(input: String, callback?: NetworkTools.ApiCallback) {
    try {
        input = input.replace(/\n/g, " ");

        const url = AzureGPTEndPointEmbeddingModel + "/embeddings?api-version=2023-05-15"
        const headers = {
            "Content-Type": "application/json",
            "api-key": AzureAPIKey
        }
        const body = {
            "input": input
        }
        return NetworkTools.ApiPost(url, headers, body, callback)
    } catch (e) {
        console.log(e)
    }
}

// https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/reference#chat-completions
export async function completions(prompt: String, callback?: NetworkTools.ApiCallback) {
    try {
        prompt = prompt.replace(/\n/g, " ");

        const url = AzureGPTEndPointChatGPTModel + "/chat/completions?api-version=2023-05-15"
        const headers = {
            "Content-Type": "application/json",
            "api-key": AzureAPIKey
        }
        const body = {
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 150,
            temperature: 0.0,
            stream: false
        }
        return NetworkTools.ApiPost(url, headers, body, callback)
    } catch (e) {
        console.log(e)
    }
}

