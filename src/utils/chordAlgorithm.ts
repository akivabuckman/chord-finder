import { allNotes, intervals } from "./constants"

export const chordAlgorithm = (key: string, melodyNote: string) => {

}

export const findNoteDegree = (rootNote: string, note2: string) => {
    const melodyNoteIndex = allNotes.findIndex(notes => notes.includes(note2));
    console.log(melodyNoteIndex)
    const songKeyIndex = allNotes.findIndex(notes => notes.includes(rootNote))
    console.log(songKeyIndex)
    const indexDiff = (melodyNoteIndex - songKeyIndex + 12) % 12;
    console.log(rootNote, note2)
    console.log('melnoteind', melodyNoteIndex)
    console.log('songnoteind', songKeyIndex)
    console.log('in', indexDiff)
    console.log(intervals[indexDiff])
    return intervals[indexDiff]
}