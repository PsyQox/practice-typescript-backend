import { DiaryEntry, NewDiaryEntry, NoneSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json' // si no le pones las extensicones busca las de TS "tsx" "ts" "node" "js" "json"

// Se le asigna el tipo y la asersion de tipos , cuando no controlas la creacion de ese objeto hay que indicarle, por ejemplo aca le decimos que diary data hay que tratarlo COMO Array DiaryEntry
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id:number): NoneSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find(d => d.id === id)
    if (entry !== null) {
        const {comment, ...restOfDiary} = entry as DiaryEntry;
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NoneSensitiveInfoDiaryEntry[] => diaries.map(({id,date,weather,visibility})=>{
    return {
        id,
        date,
        weather,
        visibility
    }
})

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id))+1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}


