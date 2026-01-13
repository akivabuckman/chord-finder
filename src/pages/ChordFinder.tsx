import { ChordOptionsType } from "@/types/chords";
import { chordFinderAlgorithm } from "@/utils/chordUtils";
import { allNotes, GIT_SHA, isKeyFlatOrSharp, songKeyQualityOptions } from "@/utils/constants";
import { useEffect, useState } from "react";

const ChordFinder = () => {
    const [chordOptions, setChordOptions] = useState<ChordOptionsType | null>(null);
    const [displayKey, setDisplayKey] = useState<string>('C Major');
    const [songKey, setSongKey] = useState<string>('C');
    const [melodyNote, setMelodyNote] = useState<string>('E');
    const [melodyInterval, setMelodyInterval] = useState<string>('1');
    const [songKeyAccidental, setSongKeyAccidental] = useState<'b' | '#' | ''>('');

    const calculateChords = (songKey: string, melodyNote: string) => {
        const {chordOptions, interval} = chordFinderAlgorithm(songKey, melodyNote)
        setChordOptions(chordOptions);
        setMelodyInterval(interval);
    };

    useEffect(() => {
        const [note, quality] = displayKey.split(' ');
        const majorSongKey = quality === 'Major' ? note : allNotes[(allNotes.findIndex(notes => notes.includes(note)) + 3) % 12][0];
        setSongKey(majorSongKey);
    }, [displayKey]);
    
    useEffect(() => {
        setSongKeyAccidental(isKeyFlatOrSharp(songKey));
        calculateChords(songKey, melodyNote)
    }, [songKey, melodyNote]);

    return (
        <div>
            <label>Song Key</label>
            <select value={displayKey} onChange={(e) => setDisplayKey(e.target.value)}>
                {
                    allNotes.map(note => note[0] === note[1] ? note[0] : `${note[0]}/${note[1]}`).map(note => (
                        songKeyQualityOptions.map(quality => (
                            <option key={`${note} ${quality}`} value={`${note} ${quality}`}>{note} {quality}</option>
                        ))
                    ))
                }
            </select>

            <label>Melody Note</label>
            <select value={melodyNote} onChange={(e) => setMelodyNote(e.target.value)}>
                {allNotes.map((note: string[]) => {
                    const flatOrSharpIndex = songKeyAccidental === '#' ? 0 : 1;
                    return (
                        <option key={note[flatOrSharpIndex]} value={note[flatOrSharpIndex]}>{note[flatOrSharpIndex]}</option>
                    );
                })}
            </select>
            <h3>Melody Interval:</h3><span>{melodyInterval}</span>
            {
                chordOptions && (
                    <div>
                        <h3>Standard</h3>
                        <ul>
                            {chordOptions.standard.map(chord => {
                                const {chordOption, seventh} = chord;
                                return (
                                    <li key={chordOption}>{chordOption}<span>{seventh !== '' && `(${seventh})`}</span></li>
                                )}
                            )}
                        </ul>
                        <h3>Funky</h3>
                        <ul>
                            {chordOptions.funky.map(chord => {
                                const {chordOption, seventh} = chord;
                                return (
                                    <li key={chordOption}>{chordOption}<span>{seventh !== '' && `(${seventh})`}</span></li>
                                )}
                            )}
                        </ul>
                        <h3>Super Funky</h3>
                        <ul>
                            {chordOptions.superFunky.map(chord => {
                                const {chordOption, seventh} = chord;
                                return (
                                    <li key={chordOption}>{chordOption}<span>{seventh !== '' && `(${seventh})`}</span></li>
                                )}
                            )}
                        </ul>
                    </div>
                )
            }
            <p>version: {GIT_SHA}</p>
        </div>
    )
}

export default ChordFinder;