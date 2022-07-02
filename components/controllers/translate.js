import {turkish,english} from "../data/translate"

export default function Translate(word,language = "turkish"){
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