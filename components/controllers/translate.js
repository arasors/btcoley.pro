import {turkish,english} from "../data/translate"

export const useTranslate = (word,language = "turkish") => {
    let file = Object(turkish);

    switch (language){
        case "turkish": file = Object(turkish); break;
        case "english": file = Object(english); break;

        default: return;
    }

    if(file[word]){
        return file[word];
    }
    return word;
}