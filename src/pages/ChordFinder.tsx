import { ChordOptionsType } from "@/types/chords";
import { chordFinderAlgorithm } from "@/utils/chordUtils";
import { allNotes, GIT_SHA, isKeyFlatOrSharp, songKeyQualityOptions } from "@/utils/constants";
import { useEffect, useState } from "react";

import { Flame, Music, Music2 } from 'lucide-react';
import ChordSection from "../components/ChordSection";

const ChordFinder = () => {
    const [chordOptions, setChordOptions] = useState<ChordOptionsType | null>(null);
    const [displayKey, setDisplayKey] = useState<string>('C Major');
    const [songKey, setSongKey] = useState<string>('C');
    const [melodyNote, setMelodyNote] = useState<string>('E');
    const [melodyInterval, setMelodyInterval] = useState<string>('1');
    const [songKeyAccidental, setSongKeyAccidental] = useState<'b' | '#' | ''>('');

    const [openItem, setOpenItem] = useState<{ section: string, idx: number } | null>(null);

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

    const handleToggle = (section: string, idx: number) => {
        if (openItem && openItem.section === section && openItem.idx === idx) {
            setOpenItem(null);
        } else {
            setOpenItem({ section, idx });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 dark:bg-gradient-to-br dark:from-blue-950 dark:via-gray-900 dark:to-purple-950 dark:text-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Music className="w-10 h-10 text-blue-600 dark:text-blue-300" />
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Chord Finder</h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Discover the chords for your melody</p>
                    <p className="text-gray-600 dark:text-gray-300">e.g. if you're playing a song in C Major, and the melody's note is E, the chords listed below are your options!</p>
                </div>

                {/* Controls */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Song Key Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                                Song Key
                            </label>
                            <select 
                                value={displayKey} 
                                onChange={(e) => setDisplayKey(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                            >
                                {
                                    allNotes.map(note => note[0] === note[1] ? note[0] : `${note[0]}/${note[1]}`).map(note => (
                                        songKeyQualityOptions.map(quality => (
                                            <option key={`${note} ${quality}`} value={`${note} ${quality}`}>{note} {quality}</option>
                                        ))
                                    ))
                                }
                            </select>
                        </div>

                        {/* Melody Note Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 dark:text-gray-200">
                                Melody Note
                            </label>
                            <select 
                                value={melodyNote} 
                                onChange={(e) => setMelodyNote(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 font-medium cursor-pointer hover:border-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                            >
                                {allNotes.map((note: string[]) => {
                                    const flatOrSharpIndex = songKeyAccidental === '#' ? 0 : 1;
                                    return (
                                        <option key={note[flatOrSharpIndex]} value={note[flatOrSharpIndex]}>{note[flatOrSharpIndex]}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>

                    {/* Melody Interval Display */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 dark:bg-blue-950 dark:border-blue-900">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">Melody Interval:</span>
                            <span className="text-lg font-bold text-blue-600 dark:text-blue-300">{melodyInterval}</span>
                        </div>
                    </div>
                </div>

                {/* Chord Options */}
                {chordOptions && (
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <ChordSection
                            title="Standard"
                            chords={chordOptions.standard}
                            bgColor="bg-blue-50 dark:bg-blue-950"
                            icon={<Music2 className="dark:text-blue-300" />}
                            openIdx={openItem?.section === 'Standard' ? openItem.idx : null}
                            onToggle={idx => handleToggle('Standard', idx)}
                        />
                        <ChordSection
                            title="Funky"
                            chords={chordOptions.funky}
                            bgColor="bg-purple-50 dark:bg-purple-950"
                            icon={<Music className="dark:text-purple-300" />}
                            openIdx={openItem?.section === 'Funky' ? openItem.idx : null}
                            onToggle={idx => handleToggle('Funky', idx)}
                        />
                        <ChordSection
                            title="Super Funky"
                            chords={chordOptions.superFunky}
                            bgColor="bg-pink-50 dark:bg-pink-950"
                            icon={<Flame className="dark:text-pink-300" />}
                            openIdx={openItem?.section === 'Super Funky' ? openItem.idx : null}
                            onToggle={idx => handleToggle('Super Funky', idx)}
                        />
                    </div>
                )}

                {/* Footer */}
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Version {GIT_SHA}</p>
                </div>
            </div>
        </div>
    );
}

export default ChordFinder;