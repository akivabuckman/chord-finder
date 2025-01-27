import { findNoteDegree } from "@/utils/chordAlgorithm";
import { chordOptions } from "@/utils/constants";
import { useEffect, useState } from "react";

const ChordFinder = () => {
    const [output, setOutput] = useState<string | null>(null)
    const doIt = (songKey: string, melodyNote: string): string => {
        const noteDegree = findNoteDegree(songKey, melodyNote)
        console.log(noteDegree.toString())
        const options = chordOptions[noteDegree.toString()]
        console.log(options)
        return 'k'
    }


    useEffect(() => {
        const thing = doIt('G', 'C')
        // find degree ---- D is the 2


        setOutput(thing)
    })

    return (
        <div>
            <p>{output}</p>
        </div>
    )
}

export default ChordFinder;