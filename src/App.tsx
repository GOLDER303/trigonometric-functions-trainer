import { useEffect, useState } from "react"
import TrigonometricFunctionInput from "./components/TrigonometricFunctionInput"
import answersData from "./data/answers.json"
import triangle1 from "./img/triangle1.svg"
import triangle2 from "./img/triangle2.svg"
import triangle3 from "./img/triangle3.svg"
import { Answers } from "./types/Answers.type"

function App() {
    const answers: Answers = answersData

    const [sinTopValue, setSinTopValue] = useState("")
    const [sinBottomValue, setSinBottomValue] = useState("")

    const [cosTopValue, setCosTopValue] = useState("")
    const [cosBottomValue, setCosBottomValue] = useState("")

    const [imageId, setImageId] = useState(1)

    const triangleImages = [triangle1, triangle2, triangle3]

    useEffect(() => {
        generateRandomImageId()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const generateRandomImageId = () => {
        let randomImageId
        do {
            randomImageId = Math.floor(Math.random() * 3) + 1
        } while (randomImageId === imageId)

        setImageId(randomImageId)
    }

    useEffect(() => {
        setSinTopValue("")
        setSinBottomValue("")
        setCosTopValue("")
        setCosBottomValue("")
    }, [imageId])

    const checkAnswers = () => {
        if (
            sinTopValue === answers[imageId].answers.sin.top &&
            sinBottomValue === answers[imageId].answers.sin.bottom &&
            cosTopValue === answers[imageId].answers.cos.top &&
            cosBottomValue === answers[imageId].answers.cos.bottom
        ) {
            //TODO:
            console.log("success")
            setTimeout(() => {
                generateRandomImageId()
            }, 3000)
        } else {
            //TODO:
            console.log("failure")
        }
    }

    return (
        <>
            <h1 className="text-3xl">Hello World!</h1>
            <img
                src={triangleImages[imageId - 1]}
                alt="triangle"
            />

            <div className="flex gap-10">
                <TrigonometricFunctionInput
                    functionName="sin &alpha;"
                    topValue={sinTopValue}
                    onTopValueChange={setSinTopValue}
                    bottomValue={sinBottomValue}
                    onBottomValueChange={setSinBottomValue}
                />

                <TrigonometricFunctionInput
                    functionName="cos &alpha;"
                    topValue={cosTopValue}
                    onTopValueChange={setCosTopValue}
                    bottomValue={cosBottomValue}
                    onBottomValueChange={setCosBottomValue}
                />
            </div>

            <button onClick={checkAnswers}>Check Answers</button>
        </>
    )
}

export default App
