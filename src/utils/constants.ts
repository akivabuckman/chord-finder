import { lazy } from 'react';

export const routeOptions = [
    {
      id: 1,
      path: '/',
      component: lazy(() => import('@/pages/ChordFinder')),
    },
];

export const romanChordOptionsFromInterval: {[key: string]: string[]} = {
  '1': ['IM', 'im', 'bIIM', 'iim', 'IIm',  'iv6','IVM','iv',  'vim', 'bVIM'],
  '2': ['iim', 'IIm','bIIIM','iiim',  'IIIm', 'iv6','Vm', 'vm',   'bVIIM', 'viim','viiom'],
  '3': ['IM', 'iiim', 'IVM', 'vim', 'IIIm', 'VIm', '#iv', '#i'],
  '4': ['iim', 'IVM', 'Vm', 'bVIIM', 'iv', 'vm', 'viiom', 'viim', 'bIIM', 'iv6'],
  '5': ['IM', 'iiim', 'Vm', 'vim', 'VIm', 'vm', 'bVIM', 'bIIIM', 'i'],
  '6': ['vim', 'IVM', 'iim', 'VIm', 'bVIIM', 'viiom', 'IIm', 'viim', 'VIIm'],
  '7': ['IM', 'viiom', 'Vm', 'iiim', 'IIIm', 'IIm', 'viiom', 'viim', '#i', 'bIIm'],
  'b2': ['VIm', 'IIM', '#ivm'],
  'b3': ['i', 'iv', 'bIIIM', 'IIIM', 'bVIM', 'VIIm'],
  'b5': ['VM', 'bVIm', 'VIIm', 'IIm', 'viim'],
  'b6': ['bVIM', 'VIM', 'bVIIm', 'bIIM', 'IIIm', 'iv', 'iv6'],
  'b7': ['bVIIM', 'VIIM', 'Im', 'bIIIM', 'im', 'vm'],
};

export const romanChords: {standard: string[], funky: string[], superFunky: string[]} = {
  standard: ['I', 'IM', 'iim','ii', 'iii', 'III',  'IIIm','iiim', 'IVM',  'IV', 'V', 'Vm', 'vim','vi'],
  funky: [ 'Im','II', 'IIm', 'iv',   'iv6',  'v', 'vm', 'bVI','bVIM', 'VIm','VI', 'bVIIM','bVII','vii', 'viio', 'viim',  'viiom', 'VIIm'],
  superFunky: [ 'i',  'im', '#i','bIIM','bII', 'bIIm', 'IIM','bIII',  'bIIIM', 'IIIM','#iv', '#ivm',  'VM', 'bVIm','VIM', 'bVIIm', 'VII',   'VIIM']
};

export const allNotes = [
  ['C', 'C', 'C/C'],
  ['C#', 'Db', 'C#/Db'],
  ['D', 'D', 'D/D'],
  ['D#', 'Eb', 'D#/Eb'],
  ['E', 'E', 'E/E'],
  ['F', 'F', 'F/F'],
  ['F#', 'Gb', 'F#/Gb'],
  ['G', 'G', 'G/G'],
  ['G#', 'Ab', 'G#/Ab'],
  ['A', 'A', 'A/A'],
  ['A#', 'Bb', 'A#/Bb'],
  ['B', 'B', 'B/B']
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

export const romanChordsToMetaData: {[key: string]: {accidental: 'b' | '#' | '', degree: string, quality: '' | 'm' | 'o' | 'm6', seventh: '' | 'm7' | 'maj7' | '7'}} = {
  'I': { accidental: '', degree: '1', quality: '', seventh: '' },
  'ii': { accidental: '', degree: '2', quality: 'm', seventh: '' },
  'iii': { accidental: '', degree: '3', quality: 'm', seventh: '' },
  'IV': { accidental: '', degree: '4', quality: '', seventh: '' },
  'V': { accidental: '', degree: '5', quality: '', seventh: '' },
  'vi': { accidental: '', degree: '6', quality: 'm', seventh: '' },
  'viio': { accidental: '', degree: '7', quality: 'o', seventh: '' },
  'II': { accidental: '', degree: '2', quality: '', seventh: '' },
  'iv': { accidental: '', degree: '4', quality: 'm', seventh: '' },
  'bVI': { accidental: 'b', degree: '6', quality: '', seventh: '' },
  'bII': { accidental: 'b', degree: '2', quality: '', seventh: '' },
  'i': { accidental: '', degree: '1', quality: 'm', seventh: '' },
  'vii': { accidental: '', degree: '7', quality: 'm', seventh: '' },
  'bVII': { accidental: 'b', degree: '7', quality: '', seventh: '' },
  'v': { accidental: '', degree: '5', quality: 'm', seventh: '' },
  'III': { accidental: '', degree: '3', quality: '', seventh: '' },
  'iv6': { accidental: '', degree: '4', quality: 'm6', seventh: '' },
  'bIII': { accidental: 'b', degree: '3', quality: '', seventh: '' },
  'VI': { accidental: '', degree: '6', quality: '', seventh: '' },
  '#iv': { accidental: '#', degree: '4', quality: 'm', seventh: '' },
  '#i': { accidental: '#', degree: '1', quality: 'm', seventh: '' },
  'VII': { accidental: '', degree: '7', quality: '', seventh: '' },
  'IM': { accidental: '', degree: '1', quality: '', seventh: 'maj7' },
  'iim': { accidental: '', degree: '2', quality: 'm', seventh: '7' },
  'iiim': { accidental: '', degree: '3', quality: 'm', seventh: '7' },
  'IVM': { accidental: '', degree: '4', quality: '', seventh: 'maj7' },
  'Vm': { accidental: '', degree: '5', quality: '', seventh: '7' },
  'vim': { accidental: '', degree: '6', quality: 'm', seventh: '7' },
  'IIIm': { accidental: '', degree: '3', quality: '', seventh: '7' },
  'IIm': { accidental: '', degree: '2', quality: '', seventh: '7' },
  'bVIM': { accidental: 'b', degree: '6', quality: '', seventh: 'maj7' },
  'viim': { accidental: '', degree: '7', quality: 'm', seventh: '7' },
  'bVIIM': { accidental: 'b', degree: '7', quality: '', seventh: 'maj7' },
  'viiom': { accidental: '', degree: '7', quality: 'o', seventh: '7' },
  'vm': { accidental: '', degree: '5', quality: 'm', seventh: '7' },
  'VIm': { accidental: '', degree: '6', quality: '', seventh: '7' },
  'Im': { accidental: '', degree: '1', quality: '', seventh: '7' },
  'VIIm': { accidental: '', degree: '7', quality: '', seventh: '7' },
  'bIIM': { accidental: 'b', degree: '2', quality: '', seventh: 'maj7' },
  'im': { accidental: '', degree: '1', quality: 'm', seventh: '' },
  'bIIIM': { accidental: 'b', degree: '3', quality: '', seventh: 'maj7' },
  '#ivm': { accidental: '#', degree: '4', quality: 'm', seventh: '7' },
  'bIIm': { accidental: 'b', degree: '2', quality: '', seventh: '7' },
  'IIM': { accidental: '', degree: '2', quality: '', seventh: 'maj7' },
  'IIIM': { accidental: '', degree: '3', quality: '', seventh: 'maj7' },
  'VM': { accidental: '', degree: '5', quality: '', seventh: 'maj7' },
  'bVIm': { accidental: 'b', degree: '6', quality: '', seventh: '7' },
  'VIM': { accidental: '', degree: '6', quality: '', seventh: 'maj7' },
  'bVIIm': { accidental: 'b', degree: '7', quality: '', seventh: '7' },
  'VIIM': { accidental: '', degree: '7', quality: '', seventh: 'maj7' },
};

export const chordQualityToNotes = {
  'M': ['1', '3', '5'],
  'm': ['1', 'b3', '5'],
  'o': ['1', 'b3', 'b5'],
  'm6': ['1', 'b3', '5', '6'],
  '7': ['1', '3', '5', 'b7']
};

export const songKeyQualityOptions = ['Major', 'minor']

export const GIT_SHA = import.meta.env.VITE_GIT_SHA