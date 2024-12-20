const lang={
    en:{
        search:"Search",
        gptsearchPlaceholder:"What would you like to watch?"
    },
    Hindi:{
       search:"खोज" ,
       gptsearchPlaceholder:"आप क्या देखना चाहेंगे?"
    },
    Spanish:{
       search:"buscar" ,
       gptsearchPlaceholder:"¿Qué te gustaría ver?"
    }
}
export default lang;


export const supportedLanguages=[{identifier:"en",name:"English"},{identifier:"Hindi",name:"Hindi"},{identifier:"Spanish",name:"Spanish"}]

export const GAPI_Key=process.env.REACT_APP_GAPI_Key

export const openAI_key=process.env.REACT_APP_openAI_key