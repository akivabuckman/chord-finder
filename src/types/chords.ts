export interface ChordOptionsType {
    standard: ChordOption[];
    funky: ChordOption[];
    superFunky: ChordOption[];
};

export interface AlgorithmReturnType {
    chordOptions: ChordOptionsType;
    interval: string;
};

export interface ChordOption {
    chordOption: string,
    seventh: string,
    explanation: string
};

export type ChordType = 'standard' | 'funky' | 'superFunky';

export interface RomanChordOptionsType {
    standard: string[];
    funky: string[];
    superFunky: string[];
}