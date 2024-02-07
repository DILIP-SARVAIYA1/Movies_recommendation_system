import OpenAI from "openai";
import { openAiKey } from "./constants";

const openai = new OpenAI({
  apiKey: openAiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
