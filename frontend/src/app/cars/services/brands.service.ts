import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

const apiUrl = environment.apiUrl

@Injectable({
    providedIn: 'root',
})
export class BrandsService {
    private http = inject(HttpClient)

    getBrands() {
        //GET /brands
        return this.http.get<string[]>(`${apiUrl}/brands`)
    }

    getModelByBrand() {
        //GET /brands/:brandId/models
    }
}
