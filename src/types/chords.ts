export interface ChordOptionsType {
    standard: string[];
    funky: string[];
};

export interface AlgorithmReturnType {
    chordOptions: ChordOptionsType;
    interval: string;
};