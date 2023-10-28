import { AvailableFunctions } from "./AvailableFunctions.type"

export type Answers = {
    [key: number]: {
        answers: {
            [key in AvailableFunctions]: {
                top: string
                bottom: string
            }
        }
    }
}
