import { allNotes, intervals, romanChordsToMetaData } from "./constants";

export const notesToIndexes = (songKey: string, melodyNote: string) => {
    const songKeyIndex = allNotes.findIndex(notes => notes.includes(songKey));
    const melodyNoteIndex = allNotes.findIndex(notes => notes.includes(melodyNote));
    return { songKeyIndex, melodyNoteIndex };
};

export const romanChordToChord = (romanChord: string, songKey: string, keyFlatOrSharp: 'b' | '#') => {
    const { accidental, degree, quality } = romanChordsToMetaData[romanChord];
    const accidentalDiff = accidental === '#' ? 1 : accidental === 'b' ? -1 : 0;
    const chordRootIntervalIndex = intervals.findIndex(interval => interval === degree) + accidentalDiff;
    const chordRoot = allNotes[(allNotes.findIndex(notes => notes.includes(songKey)) + chordRootIntervalIndex) % 12][keyFlatOrSharp === '#' ? 0 : 1];
    return `${chordRoot}${quality}`;
};