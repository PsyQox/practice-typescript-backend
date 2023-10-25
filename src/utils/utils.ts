import { NewDiaryEntry} from "../types";
import { Visibility, Weather } from "../enums";

const parseComment = (commentFromRequest: any):string =>{
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date")  
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather =>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error("Incorrect or missing weather")
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromReques: any): Visibility=>{
    if (!isString(visibilityFromReques) || !isVisibility(visibilityFromReques)) {
        throw new Error("Incorrect or missing visibility")
    }
    return visibilityFromReques
}

const isWeather = (params: any): boolean => {
    return Object.values(Weather).includes(params)
}

const isString = (string: string): boolean => {
    return typeof string === 'string' 
}

const isDate = (date:string): boolean => {
    return Boolean(Date.parse(date))
}

const isVisibility = (string: any): boolean=>{
    //Object.values devuelve los valores de un objeto en array
    return Object.values(Visibility).includes(string)
}

const  toNewDiaryEntry = (object: any): NewDiaryEntry =>{
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    } 

    return newEntry
}

export default toNewDiaryEntry