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
            onBottomValueChange("")
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
                    id={`${functionName}_top`}
                    placeholder="?"
                    maxLength={1}
                    value={topValue}
                    onChange={onTopInputChange}
                    className="w-4 text-center text-white bg-transparent border-b border-white placeholder-neutral-200"
                />
                <input
                    type="text"
                    id={`${functionName}_bottom`}
                    placeholder="?"
                    maxLength={1}
                    value={bottomValue}
                    onChange={onBottomInputChange}
                    className="w-4 text-center text-white bg-transparent border-t border-white placeholder-neutral-200"
                />
            </span>
        </div>
    )
}

export default TrigonometricFunctionInput
