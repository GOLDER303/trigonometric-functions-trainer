import { ChangeEvent } from "react"

interface TrigonometricFunctionInputProps {
    functionName: string
    topValue: string
    onTopValueChange: (newValue: string) => void
    bottomValue: string
    onBottomValueChange: (newValue: string) => void
}

const TrigonometricFunctionInput: React.FC<TrigonometricFunctionInputProps> = ({
    functionName,
    topValue,
    onTopValueChange,
    bottomValue,
    onBottomValueChange,
}) => {
    const onTopInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value

        if (!/^[abc]$/.test(inputValue)) {
            event.target.value = ""
            onTopValueChange("")
            return
        }

        onTopValueChange(inputValue)
    }

    const onBottomInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value

        if (!/^[abc]$/.test(inputValue)) {
            event.target.value = ""
            onTopValueChange("")
            return
        }

        onBottomValueChange(inputValue)
    }

    return (
        <div className="flex items-center">
            <span>{functionName} =&nbsp;</span>
            <span className="flex pt-1 flex-col">
                <input
                    type="text"
                    placeholder="?"
                    maxLength={1}
                    value={topValue}
                    onChange={onTopInputChange}
                    className="w-4 text-lg text-center border-b border-black"
                />
                <input
                    type="text"
                    placeholder="?"
                    maxLength={1}
                    value={bottomValue}
                    onChange={onBottomInputChange}
                    className="w-4 text-lg text-center border-t border-black"
                />
            </span>
        </div>
    )
}

export default TrigonometricFunctionInput
