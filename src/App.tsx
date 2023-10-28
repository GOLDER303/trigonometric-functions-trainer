import { useState } from "react"
import TrigonometricFunctionInput from "./components/TrigonometricFunctionInput"
import triangle1 from "./img/triangle1.svg"

function App() {
    const [sinTopValue, setSinTopValue] = useState("")
    const [sinBottomValue, setSinBottomValue] = useState("")

    const [cosTopValue, setCosTopValue] = useState("")
    const [cosBottomValue, setCosBottomValue] = useState("")

    return (
        <>
            <h1 className="text-3xl">Hello World!</h1>
            <img
                src={triangle1}
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
        </>
    )
}

export default App
