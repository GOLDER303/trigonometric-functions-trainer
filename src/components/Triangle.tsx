import React from "react"

interface TriangleComponentProps {
    flipX: boolean
    flipY: boolean
    rotation: number
    lettersVariation: number
}

const TriangleComponent: React.FC<TriangleComponentProps> = ({ flipX, flipY, rotation, lettersVariation }) => {
    const lettersVariations = [
        ["a", "b", "c"],
        ["b", "c", "a"],
        ["c", "a", "b"],
        ["b", "a", "c"],
        ["c", "b", "a"],
        ["a", "c", "b"],
    ]

    const getLetter = (letterPlace: 1 | 2 | 3): string => {
        return lettersVariations[lettersVariation][letterPlace - 1]
    }

    const xScale = flipX ? -1 : 1
    const yScale = flipY ? -1 : 1

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="402"
            height="234"
            viewBox="-5 -5 118 74"
            transform={`rotate(${rotation}) scale(${xScale} ${yScale})`}
        >
            <g>
                <path
                    fill="none"
                    stroke="#fff"
                    d="m 7 1 l 101 54 H 7 Z"
                    style={{ stopColor: "#000" }}
                />
                <path
                    fill="none"
                    stroke="#fff"
                    d="M7 17c9 0 11-4 13-9"
                />

                <path
                    fill="none"
                    stroke="#fff"
                    d="M7 37 c 13 1 17 8 18 18 M 85 43 c-2 3-4 5-3 12"
                />

                <circle
                    cx="13.4"
                    cy="48.6"
                    r=".7"
                    fill="#fff"
                    stroke="#fff"
                    stroke-width=".7"
                    style={{ stopColor: "#000" }}
                />
                <text
                    x="2"
                    y="28"
                    fill="#fff"
                    stroke-width=".3"
                    font-family="Calibri"
                    font-size="10.6"
                    text-anchor="middle"
                    dominant-baseline="central"
                    style={{ lineHeight: 1.25 }}
                    transform={`translate(2, 28) scale(${xScale}, ${yScale}) rotate(-${rotation}) translate(-2, -28)`}
                >
                    {getLetter(1)}
                </text>
                <text
                    x="51"
                    y="60"
                    fill="#fff"
                    stroke-width=".3"
                    font-family="Calibri"
                    font-size="10.6"
                    text-anchor="middle"
                    dominant-baseline="central"
                    style={{ lineHeight: 1.25 }}
                    transform={`translate(51, 60) scale(${xScale}, ${yScale}) rotate(-${rotation}) translate(-51, -60)`}
                >
                    {getLetter(2)}
                </text>
                <text
                    x="57"
                    y="20"
                    fill="#fff"
                    stroke-width=".3"
                    font-family="Calibri"
                    font-size="10.6"
                    text-anchor="middle"
                    dominant-baseline="central"
                    style={{ lineHeight: 1.25 }}
                    transform={`translate(57, 20) scale(${xScale}, ${yScale}) rotate(-${rotation}) translate(-57, -20)`}
                >
                    {getLetter(3)}
                </text>
                <text
                    x="88"
                    y="50"
                    fill="#fff"
                    stroke-width=".2"
                    font-family="sans-serif"
                    font-size="7"
                    text-anchor="middle"
                    dominant-baseline="central"
                    style={{ lineHeight: 1.25 }}
                    transform={`translate(88, 50) scale(${xScale}, ${yScale}) rotate(-${rotation}) translate(-88, -50)`}
                >
                    α
                </text>
                <text
                    x="11.5"
                    y="10"
                    fill="#fff"
                    stroke-width=".2"
                    font-family="sans-serif"
                    font-size="7.1"
                    text-anchor="middle"
                    dominant-baseline="central"
                    style={{ lineHeight: 1.25 }}
                    transform={`translate(11.5, 10) scale(${xScale}, ${yScale}) rotate(-${rotation}) translate(-11.5, -10)`}
                >
                    β
                </text>
            </g>
        </svg>
    )
}

export default TriangleComponent
