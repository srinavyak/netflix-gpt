import OpenAI from 'openai';
import { openAI_key } from '../constants/languageconstants';

const openaikey = new OpenAI({
//   apiKey: process.env[openAI_key], // This is the default and can be omitted
  apiKey: openAI_key,
  dangerouslyAllowBrowser:true
});

export default openaikey;