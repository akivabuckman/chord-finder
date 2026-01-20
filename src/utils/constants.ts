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

export const intervals: {numeric: string, text: string}[] = [
  {
    "numeric": '1',
    "text": "Root",
  },
  {
    "numeric": 'b2',
    "text": "Flat 2nd",
  },
  {
    "numeric": '2',
    "text": "2nd",
  },
  {
    "numeric": 'b3',
    "text": "minor 3rd",
  },
  {
    "numeric": '3',
    "text": "major 3rd",
  },
  {
    "numeric": '4',
    "text": "perfect 4th",
  },
  {
    "numeric": 'b5',
    "text": "diminished 5th",
  },
  {
    "numeric": '5',
    "text": "perfect 5th",
  },
  {
    "numeric": 'b6',
    "text": "minor 6th",
  },
  {
    "numeric": '6',
    "text": "major 6th",
  },
  {
    "numeric": 'b7',
    "text": "minor 7th",
  },
  {
    "numeric": '7',
    "text": "major 7th",
  },
];

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

export const romanChordsToMetaData: {[key: string]: {
  accidental: 'b' | '#' | '',
  degree: string,
  quality: '' | 'm' | 'o' | 'm6',
  seventh: '' | 'm7' | 'maj7' | '7',
  explanation: string
  }} = {
  'I': { accidental: '', degree: '1', quality: '', seventh: '', explanation: "The I chord, the 'home'. Contains notes 1, 3, 5" },
  'ii': { accidental: '', degree: '2', quality: 'm', seventh: '', explanation: "The ii chord. A step away from 'home'. Contains the 2, 4, 6" },
  'iii': { accidental: '', degree: '3', quality: 'm', seventh: '', explanation: "The iii chord. Away from 'home' but still familiar. Contains the 3, 5, 7" },
  'IV': { accidental: '', degree: '4', quality: '', seventh: '', explanation: "The IV chord. Takes us away from 'home'" },
  'V': { accidental: '', degree: '5', quality: '', seventh: '', explanation: 'The V chord. Major chord built on the 5th degree, creates tension that resolves to I.' },
  'vi': { accidental: '', degree: '6', quality: 'm', seventh: '', explanation: 'The vi chord. Minor chord built on the 6th degree, relative minor of I.' },
  'viio': { accidental: '', degree: '7', quality: 'o', seventh: '', explanation: 'The vii° chord. Diminished chord built on the 7th degree, leads strongly to I.' },
  'II': { accidental: '', degree: '2', quality: '', seventh: '', explanation: 'The major II chord. Augments the 4th note to add brightness' },
  'iv': { accidental: '', degree: '4', quality: 'm', seventh: '', explanation: 'The minor of the IV chord. Flattens the 6th note to add melancholy' },
  'bVI': { accidental: 'b', degree: '6', quality: '', seventh: '', explanation: "The flat 6's major chord. 'Borrowed' from the minor scale and often leads into bVII and then resolves to the major root" },
  'bII': { accidental: 'b', degree: '2', quality: '', seventh: '', explanation: "I'll add this explanation soon!" },
  'i': { accidental: '', degree: '1', quality: 'm', seventh: '', explanation: "I'll add this explanation soon!" },
  'vii': { accidental: '', degree: '7', quality: 'm', seventh: '', explanation: "I'll add this explanation soon!" },
  'bVII': { accidental: 'b', degree: '7', quality: '', seventh: '', explanation: "I'll add this explanation soon!" },
  'v': { accidental: '', degree: '5', quality: 'm', seventh: '', explanation: "I'll add this explanation soon!" },
  'III': { accidental: '', degree: '3', quality: '', seventh: '', explanation: "I'll add this explanation soon!" },
  'iv6': { accidental: '', degree: '4', quality: 'm6', seventh: '', explanation: "I'll add this explanation soon!" },
  'bIII': { accidental: 'b', degree: '3', quality: '', seventh: '', explanation: "I'll add this explanation soon!" },
  'VI': { accidental: '', degree: '6', quality: '', seventh: '', explanation: "I'll add this explanation soon!" },
  '#iv': { accidental: '#', degree: '4', quality: 'm', seventh: '', explanation: "I'll add this explanation soon!" },
  '#i': { accidental: '#', degree: '1', quality: 'm', seventh: '', explanation: "I'll add this explanation soon!" },
  'VII': { accidental: '', degree: '7', quality: '', seventh: '', explanation: "I'll add this explanation soon!" },
  'IM': { accidental: '', degree: '1', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'iim': { accidental: '', degree: '2', quality: 'm', seventh: '7', explanation: "I'll add this explanation soon!" },
  'iiim': { accidental: '', degree: '3', quality: 'm', seventh: '7', explanation: "I'll add this explanation soon!" },
  'IVM': { accidental: '', degree: '4', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'Vm': { accidental: '', degree: '5', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'vim': { accidental: '', degree: '6', quality: 'm', seventh: '7', explanation: "I'll add this explanation soon!" },
  'IIIm': { accidental: '', degree: '3', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'IIm': { accidental: '', degree: '2', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'bVIM': { accidental: 'b', degree: '6', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'viim': { accidental: '', degree: '7', quality: 'm', seventh: '7', explanation: "I'll add this explanation soon!" },
  'bVIIM': { accidental: 'b', degree: '7', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'viiom': { accidental: '', degree: '7', quality: 'o', seventh: '7', explanation: "I'll add this explanation soon!" },
  'vm': { accidental: '', degree: '5', quality: 'm', seventh: '7', explanation: "I'll add this explanation soon!" },
  'VIm': { accidental: '', degree: '6', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'Im': { accidental: '', degree: '1', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'VIIm': { accidental: '', degree: '7', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'bIIM': { accidental: 'b', degree: '2', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'im': { accidental: '', degree: '1', quality: 'm', seventh: '', explanation: "I'll add this explanation soon!" },
  'bIIIM': { accidental: 'b', degree: '3', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  '#ivm': { accidental: '#', degree: '4', quality: 'm', seventh: '7', explanation: "I'll add this explanation soon!" },
  'bIIm': { accidental: 'b', degree: '2', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'IIM': { accidental: '', degree: '2', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'IIIM': { accidental: '', degree: '3', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'VM': { accidental: '', degree: '5', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'bVIm': { accidental: 'b', degree: '6', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'VIM': { accidental: '', degree: '6', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
  'bVIIm': { accidental: 'b', degree: '7', quality: '', seventh: '7', explanation: "I'll add this explanation soon!" },
  'VIIM': { accidental: '', degree: '7', quality: '', seventh: 'maj7', explanation: "I'll add this explanation soon!" },
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