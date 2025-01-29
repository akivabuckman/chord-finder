import { lazy } from 'react';

export const routeOptions = [
    {
      id: 1,
      path: '/',
      component: lazy(() => import('@/pages/ChordFinder')),
    },
];

export const romanChordOptionsFromInterval: {[key: string]: {standard: string[], funky: string[], superFunky?: string[]}} = {
  '1': {
    standard: ['I', 'ii', 'IV', 'vi'],
    funky: ['II', 'iv', 'bVI', 'bII', 'i'],
    superFunky: []
  },
  '2': {
    standard:['ii', 'iii', 'V',],
    funky: ['II', 'vii', 'bVII', 'viio', 'v', 'III', 'iv6', 'bIII']
  },
  '3': {
    standard: ['I', 'iii', 'IV', 'vi'],
    funky: ['III', 'VI', '#iv', '#i']
  },
  '4': {
    standard: ['ii', 'IV', 'V'],
    funky: ['bVII', 'iv', 'v', 'viio', 'vii', 'bII']
  },
  '5': {
    standard: ['I', 'iii', 'V', 'vi'],
    funky: ['VI', 'v', 'bVI', 'bIII', 'i']
  },
  '6': {
    standard: ['vi', 'IV', 'ii'],
    funky: ['VI', 'bVII', 'viio', 'II', 'vii', 'VII']
  },
  '7': {
    standard: ['I', 'viio', 'V', 'iii'],
    funky: ['III', 'II', 'viio', 'vii', '#i', 'bII7']
  }
}

export const allNotes = [
  ['C', 'C'],
  ['C#', 'Db'],
  ['D', 'D'],
  ['D#', 'Eb'],
  ['E', 'E'],
  ['F', 'F'],
  ['F#', 'Gb'],
  ['G', 'G'],
  ['G#', 'Ab'],
  ['A', 'A'],
  ['A#', 'Bb'],
  ['B', 'B']
];

export const intervals = [
  '1',
  'b2',
  '2',
  'b3',
  '3',
  '4',
  'b5',
  '5',
  'b6',
  '6',
  'b7',
  '7'
];

export const chordNotes: {[key: string]: string[]} = {
  'I': ['1', '3', '5', '7'],
  'ii': ['2', '4', '6', '1'],
  'iii': ['3', '5', '7', '2'],
  'IV': ['4', '6', '1', '3'],
  'V': ['5', '7', '2', '4'],
  'vi': ['6', '1', '3', '5'],
  'viio': ['7', '2', '4', '6'],
  'II': ['2', '#4', '6', '1'],
  'iv': ['4', 'b6', '1'],
  'bVI': ['b6', '1', 'b3', '5'],
  'bII': ['b2', '4', 'b6', '1'],
  'i': ['1', 'b3', '5'],
  'vii': ['7', '2', '#4', '6'],
  'bVII': ['b7', '2', '4', '6'],
  'v': ['5', 'b7', '2', '4'],
  'III': ['3', '#5', '7', '2'],
  'iv6': ['4', 'b6', '1', '2'],
  'bIII': ['b3', '5', 'b7', '2'],
  'VI': ['6', '#1', '3', '5'],
  '#iv': ['#4', '6', '#1', '3'],
  '#i': ['#1', '3', '#5', '7'],
  'VII': ['7', '#2', '4', '6'],
};

export const isKeyFlatOrSharp = (root: string): 'b' | '#' => {
  const sharpKeys = ['A', 'B', 'C', 'D', 'E', 'G'];
  return sharpKeys.includes(root) ? '#' : 'b'; 
};

export const degreeToFrets: {[key: string]: number} = {
  '1': 0,
  'b2': 1,
  '#1': 1,
  '2': 2,
  'b3': 3,
  '#2': 3,
  '3': 4,
  '4': 5,
  '#4': 6,
  'b5': 6,
  '5': 7,
  'b6': 8,
  '#5': 8,
  '6': 9,
  'b7': 10,
  '#6': 10,
  '7': 11,
};

export const romanChordsToMetaData: {[key: string]: {accidental: 'b' | '#' | '', degree: string, quality: '' | 'm' | 'o' | 'm6' | '7'}} = {
  'I': { accidental: '', degree: '1', quality: '' },
  'ii': { accidental: '', degree: '2', quality: 'm' },
  'iii': { accidental: '', degree: '3', quality: 'm' },
  'IV': { accidental: '', degree: '4', quality: '' },
  'V': { accidental: '', degree: '5', quality: '' },
  'vi': { accidental: '', degree: '6', quality: 'm' },
  'viio': { accidental: '', degree: '7', quality: 'o' },
  'II': { accidental: '', degree: '2', quality: '' },
  'iv': { accidental: '', degree: '4', quality: 'm' },
  'bVI': { accidental: 'b', degree: '6', quality: '' },
  'bII': { accidental: 'b', degree: '2', quality: '' },
  'i': { accidental: '', degree: '1', quality: 'm' },
  'vii': { accidental: '', degree: '7', quality: 'm' },
  'bVII': { accidental: 'b', degree: '7', quality: '' },
  'v': { accidental: '', degree: '5', quality: 'm' },
  'III': { accidental: '', degree: '3', quality: '' },
  'iv6': { accidental: '', degree: '4', quality: 'm6' },
  'bIII': { accidental: 'b', degree: '3', quality: '' },
  'VI': { accidental: '', degree: '6', quality: '' },
  '#iv': { accidental: '#', degree: '4', quality: 'm' },
  '#i': { accidental: '#', degree: '1', quality: 'm' },
  'VII': { accidental: '', degree: '7', quality: '' },
  'bVII7': { accidental: 'b', degree: '7', quality: '7' }
};

export const chordQualityToNotes = {
  'M': ['1', '3', '5'],
  'm': ['1', 'b3', '5'],
  'o': ['1', 'b3', 'b5'],
  'm6': ['1', 'b3', '5', '6'],
  '7': ['1', '3', '5', 'b7']
};

export const songKeyQualityOptions = ['Major', 'minor']