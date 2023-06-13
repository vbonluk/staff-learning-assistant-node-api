import * as NetworkTools from "../Utils/NetworkTools"
import {isWebUrl} from "../Utils/Regex";
import { CheerioAPI, load } from 'cheerio';
const dotenv = require('dotenv');
dotenv.config({path: `.env.local`, override: true});

export async function scrape(url: String, callback?: NetworkTools.ApiCallback) {
    try {
        const urlStr: string = url.toString()
        if(!isWebUrl(urlStr)){
            return
        }

        const resp = await fetch(urlStr);
        const html = await resp.text();
        const $: CheerioAPI = load(html);
        console.log($("title").text());
        return html
    } catch (e) {
        console.log(e)
    }
}

