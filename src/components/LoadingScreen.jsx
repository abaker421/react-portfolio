import {useState, useEffect} from "react"

export const LoadingScreen = ({onComplete}) => {

    const [text, setText] = useState("")
    const fullText ="<Hello World! />"

    useEffect (() => {
        //which letter is being displayed
        let index = 0;
        //shows text from 1st number to current interval
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++

            if (index > fullText.length) {
                clearInterval(interval)
                
                //short pause before ending
                setTimeout(() => {
                    onComplete()
                }, 1000)
            }
        }, 100);
            //avoid memory leaks
        return () => clearInterval(interval)
    }, [onComplete])

    return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

        <div className="mb-4 text-4xl font-mono font-bold">
            {text} <span className="animate-blink ml-1"> | </span>
        </div>
        <div className="w-[200px] h-[2px] pg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                {""}
            </div>
        </div>
    </div>
}