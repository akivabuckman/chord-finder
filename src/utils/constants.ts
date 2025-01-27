import { lazy } from 'react';

export const routeOptions = [
    {
      id: 1,
      path: '/',
      component: lazy(() => import('@/pages/ChordFinder')),
    },
];

export const chordOptions: {[key: string]: {standard: string[], funky: string[], superFunky?: string[]}} = {
  '1': {
    standard: ['I', 'ii', 'IV', 'vi'],
    funky: ['II', 'iv', 'bVI', 'bII', 'i'],
    superFunky: []
  },
  '2': {
    standard:['II', 'vii', 'bVII', 'viio', 'v', 'III', ],
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
  // 5: {

  // }
}

export const allNotes = [
  ['C'],
  ['C#', 'Db'],
  ['D'],
  ['D#', 'Eb'],
  ['E'],
  ['F'],
  ['F#', 'Gb'],
  ['G'],
  ['G#', 'Ab'],
  ['A'],
  ['A#', 'Bb'],
  ['B']
];

export const intervals = [
  '1',
  'b2',
  '2',
  'm3',
  'M3',
  '4',
  'b5',
  '5',
  'm6',
  '6',
  'm7',
  '7'
]