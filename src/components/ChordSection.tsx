import { ChordOption } from '../types/chords';
import { useState } from 'react';

interface ChordSectionProps {
  title: string;
  chords: ChordOption[];
  bgColor?: string;
  icon?: React.ReactNode;
}



const ChordSection = ({ title, chords, bgColor = '', icon }: ChordSectionProps) => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const handleClick = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <div className={`rounded-lg p-4 shadow ${bgColor}`}>
            <div className="flex items-center mb-2 gap-2">
                {icon}
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
                {chords.map((chord, idx) => (
                    <li
                        key={chord.chordOption}
                        className={`w-full flex flex-col cursor-pointer select-none p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border ${openIdx === idx ? 'border-blue-400' : 'border-transparent'}`}
                        onClick={() => handleClick(idx)}
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">{chord.chordOption}</span>
                            {chord.seventh !== '' && (
                                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                    {chord.seventh}
                                </span>
                            )}
                        </div>
                        {openIdx === idx && chord.explanation && (
                            <div className="mt-2 text-sm text-gray-700 bg-blue-50 rounded p-2 border border-blue-200">
                                {chord.explanation}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChordSection;
