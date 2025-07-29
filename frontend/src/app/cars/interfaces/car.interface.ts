export interface CarResponse {
    brand: string
    model: string
    id: string
    total: number
    carDetails: CarDetails[]
}

export interface CarDetails {
    availability: boolean
    currency: string
    licensePlate: string
    manufactureYear: number
    mileage: number
    price: number
    registrationDate: Date
}
