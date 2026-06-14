export interface Meal {
    description: string
    calories: number
    id: string
    time: number
    type: string
}

export interface AddMeal {
    description: string
    calories: number
    type: string
}