
import { ChordOption } from '../types/chords';

interface ChordSectionProps {
  title: string;
  chords: ChordOption[];
  bgColor?: string;
  icon?: React.ReactNode;
  openIdx: number | null;
  onToggle: (idx: number) => void;
}

const ChordSection = ({ title, chords, bgColor = '', icon, openIdx, onToggle }: ChordSectionProps) => {
    return (
        <div className={`rounded-lg p-4 shadow ${bgColor} dark:shadow-lg`}>
            <div className="flex items-center mb-2 gap-2">
                {icon}
                <h3 className="text-lg font-bold dark:text-gray-100">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
                {chords.map((chord, idx) => (
                    <li
                        key={chord.chordOption}
                        className={`w-full flex flex-col cursor-pointer select-none p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border ${openIdx === idx ? 'border-blue-400' : 'border-transparent'} dark:bg-gray-800 dark:border-gray-600`}
                        onClick={() => onToggle(idx)}
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900 dark:text-gray-100">{chord.chordOption}</span>
                            {chord.seventh !== '' && (
                                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full dark:text-gray-200 dark:bg-gray-700">
                                    {chord.seventh}
                                </span>
                            )}
                        </div>
                        {openIdx === idx && chord.explanation && (
                            <div
                                className={`mt-2 text-sm text-gray-700 rounded p-2 dark:text-gray-100 relative overflow-hidden ${bgColor}`}
                                style={{ position: 'relative' }}
                            >
                                <div
                                    className="absolute inset-0 pointer-events-none rounded dark:hidden"
                                    style={{
                                        background: 'rgba(255,255,255,0.22)',
                                        mixBlendMode: 'lighten',
                                    }}
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none rounded hidden dark:block"
                                    style={{
                                        background: 'rgba(255,255,255,0.08)',
                                        mixBlendMode: 'lighten',
                                    }}
                                />
                                <div className="relative z-10">
                                    {chord.explanation}
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChordSection;
