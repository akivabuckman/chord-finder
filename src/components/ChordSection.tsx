import { ChordOption } from '../types/chords';

interface ChordSectionProps {
  title: string;
  chords: ChordOption[];
  bgColor?: string;
  icon?: React.ReactNode;
}

const ChordSection: React.FC<ChordSectionProps> = ({ title, chords, bgColor = '', icon }) => (
  <div className={`rounded-lg p-4 shadow ${bgColor}`}>
    <div className="flex items-center mb-2 gap-2">
      {icon}
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2">
      {chords.map((chord, idx) => (
        <li key={chord.chordOption} className="w-full flex items-center justify-between p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
            <span className="font-medium text-gray-900">{chord.chordOption}</span>
            {chord.seventh !== '' && (
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {chord.seventh}
                </span>
            )}
        </li>
      ))}
    </ul>
  </div>
);

export default ChordSection;
