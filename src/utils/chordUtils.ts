import { AlgorithmReturnType, ChordOptionsType } from "@/types/chords";
import { notesToIndexes, romanChordToChord } from "./chordTasks";
import { allNotes, intervals, isKeyFlatOrSharp, romanChordOptionsFromInterval } from "./constants"

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
};

export const getChordNotesFromFrets = (root: string, frets: number[], keyFlatOrSharp: 'b' | '#') => {
    const rootIndex = allNotes.findIndex(notes => notes.includes(root));
    console.log(rootIndex)
    const notes = frets.map(fret => allNotes[(rootIndex + fret) % 12][keyFlatOrSharp === '#' ? 0 : 1]);
    console.log(notes)
    return notes;
};

export const chordFinderAlgorithm = (songKey: string, melodyNote: string): AlgorithmReturnType => {
    /*
    'A', 'C#' => {
        standard: ['A', 'C#m', 'D', 'F#m'],
        funky: ['C#', 'F#', 'D#m', 'Bbm']
    }
     */
    const { songKeyIndex, melodyNoteIndex } = notesToIndexes(songKey, melodyNote); // 7, 11
    const indexDiff = (melodyNoteIndex - songKeyIndex + 12) % 12; // 4
    const interval = intervals[indexDiff]; // 'M3'
    const romanChordOptions = romanChordOptionsFromInterval[interval]; // {standard: ['I', 'iii', 'IV', 'vi'], funky: ['III', 'VI', '#iv', '#i']}
    const keyFlatOrSharp = isKeyFlatOrSharp(songKey); // '#' | 'b'
    const chordOptions = {
        standard: romanChordOptions.standard.map(romanChord => romanChordToChord(romanChord, songKey, keyFlatOrSharp)),
        funky: romanChordOptions.funky.map(romanChord => romanChordToChord(romanChord, songKey, keyFlatOrSharp))
    }; // {"standard": ["A","C#m","D","F#m"], "funky": ["C#","F#","D#m","A#m"]}
    console.log(chordOptions)
    return { chordOptions, interval };
};