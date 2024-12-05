import { GoogleGenerativeAI } from "@google/generative-ai";
import { GAPI_Key } from "../constants/languageconstants";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(GAPI_Key);
export default genAI