import { useEffect, useState } from "react"
import TriangleComponent from "./components/Triangle"
import TrigonometricFunctionInput from "./components/TrigonometricFunctionInput"
import answersData from "./data/answers.json"
import { Answers } from "./types/Answers.type"

function App() {
    const answers: Answers = answersData

    const [sinTopValue, setSinTopValue] = useState("")
    const [sinBottomValue, setSinBottomValue] = useState("")

    const [cosTopValue, setCosTopValue] = useState("")
    const [cosBottomValue, setCosBottomValue] = useState("")

    const [tgTopValue, setTgTopValue] = useState("")
    const [tgBottomValue, setTgBottomValue] = useState("")

    const [ctgTopValue, setCtgTopValue] = useState("")
    const [ctgBottomValue, setCtgBottomValue] = useState("")

    const [imageId, setImageId] = useState(1)
    const [imageRotation, setImageRotation] = useState(1)
    const [imageXFlip, setImageXFlip] = useState(false)
    const [imageYFlip, setImageYFlip] = useState(false)

    const [revealAnswer, setRevealAnswer] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        randomizeImage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const randomizeImage = () => {
        let randomImageId

        do {
            randomImageId = Math.floor(Math.random() * 6)
        } while (randomImageId === imageId)

        setImageId(randomImageId)

        setImageRotation(Math.floor(Math.random() * 361))
        setImageXFlip(Math.random() < 0.5)
        setImageYFlip(Math.random() < 0.5)
    }

    const resetAnswers = () => {
        setSinTopValue("")
        setSinBottomValue("")
        setCosTopValue("")
        setCosBottomValue("")
        setTgTopValue("")
        setTgBottomValue("")
        setCtgTopValue("")
        setCtgBottomValue("")
    }

    useEffect(() => {
        resetAnswers()
    }, [imageId])

    const checkAnswers = () => {
        if (
            sinTopValue === answers[imageId].answers.sin.top &&
            sinBottomValue === answers[imageId].answers.sin.bottom &&
            cosTopValue === answers[imageId].answers.cos.top &&
            cosBottomValue === answers[imageId].answers.cos.bottom &&
            tgTopValue === answers[imageId].answers.tg.top &&
            tgBottomValue === answers[imageId].answers.tg.bottom &&
            ctgTopValue === answers[imageId].answers.ctg.top &&
            ctgBottomValue === answers[imageId].answers.ctg.bottom
        ) {
            setSuccess(true)
            setTimeout(() => {
                setRevealAnswer(false)
                randomizeImage()
            }, 3000)
        } else {
            setSuccess(false)
            setTimeout(() => {
                setRevealAnswer(false)
                resetAnswers()
            }, 3000)
        }

        setRevealAnswer(true)
    }

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white">
            <header className="relative py-4 text-white text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-40"></div>
                <h1 className="relative text-3xl font-semibold">Trigonometric Functions Trainer</h1>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center">
                <div className="mb-10 px-5 lg:px-0">
                    <TriangleComponent
                        flipY={imageXFlip}
                        flipX={imageYFlip}
                        rotation={imageRotation}
                        lettersVariation={imageId}
                    />
                </div>

                <div className="flex gap-10 text-2xl lg:my-10">
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

                    <TrigonometricFunctionInput
                        functionName="tg &alpha;"
                        topValue={tgTopValue}
                        onTopValueChange={setTgTopValue}
                        bottomValue={tgBottomValue}
                        onBottomValueChange={setTgBottomValue}
                    />

                    <TrigonometricFunctionInput
                        functionName="ctg &alpha;"
                        topValue={ctgTopValue}
                        onTopValueChange={setCtgTopValue}
                        bottomValue={ctgBottomValue}
                        onBottomValueChange={setCtgBottomValue}
                    />
                </div>

                <button
                    onClick={checkAnswers}
                    className="px-6 py-3 mt-6 text-lg text-white bg-pink-600 hover:bg-pink-700 rounded-md"
                >
                    Check Answers
                </button>

                <div className="mt-4 text-lg">
                    <div
                        className={`py-2 px-8 rounded-lg ${
                            revealAnswer ? (success ? "bg-green-500" : "bg-red-500") : "opacity-0"
                        }`}
                    >
                        {success ? "Success!" : "Wrong, try again!"}
                    </div>
                </div>
            </main>

            <footer className="relative py-2 text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-40"></div>
                <p className="relative text-sm text-white">&copy; 2023 Trigonometric Functions Trainer</p>
            </footer>
        </div>
    )
}

export default App
