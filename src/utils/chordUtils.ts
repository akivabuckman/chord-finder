import { AlgorithmReturnType, ChordOption, ChordOptionsType, ChordType, RomanChordOptionsType } from "@/types/chords";
import { notesToIndexes, romanChordToChord } from "./chordTasks";
import { allNotes, intervals, isKeyFlatOrSharp, romanChordOptionsFromInterval, romanChords } from "./constants"

export const chordAlgorithm = (key: string, melodyNote: string) => {

}

export const findNoteDegree = (rootNote: string, note2: string) => {
    const melodyNoteIndex = allNotes.findIndex(notes => notes.includes(note2));
    const songKeyIndex = allNotes.findIndex(notes => notes.includes(rootNote))
    const indexDiff = (melodyNoteIndex - songKeyIndex + 12) % 12;
    return intervals[indexDiff]
};

export const getChordNotesFromFrets = (root: string, frets: number[], keyFlatOrSharp: 'b' | '#') => {
    const rootIndex = allNotes.findIndex(notes => notes.includes(root));
    const notes = frets.map(fret => allNotes[(rootIndex + fret) % 12][keyFlatOrSharp === '#' ? 0 : 1]);
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
    const romanChordOptions: RomanChordOptionsType = {
        standard: romanChords.standard.map(romanChord => romanChordOptionsFromInterval[interval].includes(romanChord) ? romanChord : null).filter(romanChord => romanChord !== null),
        funky: romanChords.funky.map(romanChord => romanChordOptionsFromInterval[interval].includes(romanChord) ? romanChord : null).filter(romanChord => romanChord !== null),
        superFunky: romanChords.superFunky.map(romanChord => romanChordOptionsFromInterval[interval].includes(romanChord) ? romanChord : null).filter(romanChord => romanChord !== null)
    };
    const keyFlatOrSharp = isKeyFlatOrSharp(songKey); // '#' | 'b'
    const chordOptions: {standard: ChordOption[], funky: ChordOption[], superFunky: ChordOption[]}  = {
        standard: romanChordToChord(romanChordOptions, songKey, keyFlatOrSharp, 'standard'),
        funky: romanChordToChord(romanChordOptions, songKey, keyFlatOrSharp, 'funky'),
        superFunky: romanChordToChord(romanChordOptions, songKey, keyFlatOrSharp, 'superFunky')
    }; 
    // {
    //     "standard": [
    //         {
    //             "chordOption": "C",
    //             "seventh": "maj7"
    //         },
    //         {
    //             "chordOption": "Em",
    //             "seventh": "7"
    //         },
    //         {
    //             "chordOption": "F",
    //             "seventh": "maj7"
    //         },
    //         {
    //             "chordOption": "Am",
    //             "seventh": "7"
    //         },
    //         {
    //             "chordOption": "E",
    //             "seventh": "7"
    //         }
    //     ],
    //     "funky": [
    //         {
    //             "chordOption": "A",
    //             "seventh": "7"
    //         }
    //     ],
    //     "superFunky": [
    //         {
    //             "chordOption": "F#m",
    //             "seventh": ""
    //         },
    //         {
    //             "chordOption": "C#m",
    //             "seventh": ""
    //         }
    //     ]
    // }
    return { chordOptions, interval };
};