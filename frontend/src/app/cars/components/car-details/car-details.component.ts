import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { rxResource, toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import { MileagePipe } from '../../pipes/mileage.pipe'
import { CarsService } from '../../services/cars.service'

@Component({
    selector: 'app-car-details',
    imports: [DatePipe, CurrencyPipe, DecimalPipe, MileagePipe],
    templateUrl: './car-details.component.html',
    styleUrl: './car-details.component.css',
})
export class CarDetailsComponent {
    route = inject(ActivatedRoute)
    carsService = inject(CarsService)
    id = toSignal(this.route.params.pipe(map(({ id }) => id)))

    carResource = rxResource({
        loader: () => this.carsService.getCarById(this.id()),
    })
}
