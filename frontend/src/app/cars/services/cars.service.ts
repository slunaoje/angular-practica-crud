import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
import { environment } from '../../../environments/environment'
import { CarResponse } from '../interfaces/car.interface'
import { CarsResponse } from '../interfaces/cars.interface'

const apiUrl = environment.apiUrl

@Injectable({
    providedIn: 'root',
})
export class CarsService {
    private http = inject(HttpClient)

    getCars(): Observable<CarsResponse[]> {
        //GET /cars
        return this.http.get<CarsResponse[]>(`${apiUrl}/cars`)
    }
    getCarById(id: string) {
        //GET /cars/:id
        return this.http
            .get<CarResponse>(`${apiUrl}/cars/${id}`)
            .pipe(tap((resp) => console.log(resp)))
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
