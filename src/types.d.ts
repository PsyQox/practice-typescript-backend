import { Weather, Visibility } from "./enums"

//interface un contrato que deberia tener un objeto
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}
//Lo que te hace es tomar el DiaryEntry pero solo algunos 
export type NoneSensitiveInfoDiaryEntry = Pick <DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
// export type NoneSensitiveInfoDiaryEntry = Omit <DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit <DiaryEntry, 'id'>

// interface SpecialDiaryEntry extends DiaryEntry{
//     flightNumber: number
// }

// type specialDiaryEntry2 = DiaryEntry & {
//     flightNumber: number
// }