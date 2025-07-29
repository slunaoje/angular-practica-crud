import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { CarResponse } from '../interfaces/car.interface'

const apiUrl = environment.apiUrl

@Injectable({
    providedIn: 'root',
})
export class CarsService {
    private http = inject(HttpClient)

    getCars(): Observable<CarResponse[]> {
        //GET /cars
        return this.http.get<CarResponse[]>(`${apiUrl}/cars`)
    }
    getCarById() {
        //GET /cars/:id
    }
    createCar() {
        // POST /cars
    }
    updateCar() {
        //PUT /cars/:id
    }
    deleteCar() {
        //DELETE /cars/:id
    }
}
