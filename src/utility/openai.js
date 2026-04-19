// import OpenAI from 'openai';
// import { OpenRouter } from "@openrouter/sdk";


// openai.js
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constant";

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",  // ✅ point to openrouter
  dangerouslyAllowBrowser: true
});

export default client;


// import { OPENAI_API_KEY } from "./constant"  

// const client = new OpenAI({
//   apiKey: OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true
// });

// export default openrouter ;
// export default client;