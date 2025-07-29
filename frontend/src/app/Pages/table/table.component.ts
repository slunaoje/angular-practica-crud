import {
    CdkMenu,
    CdkMenuGroup,
    CdkMenuItem,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
    CdkMenuTrigger,
} from '@angular/cdk/menu'
import { Component, inject } from '@angular/core'
import { rxResource } from '@angular/core/rxjs-interop'
import { Router } from '@angular/router'
import { BasicButtonDirective } from '../../basic-button.directive'
import { CarsService } from '../../cars/services/cars.service'

@Component({
    selector: 'app-table',
    imports: [
        BasicButtonDirective,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItemCheckbox,
        CdkMenuGroup,
        CdkMenuItemRadio,
        CdkMenuItem,
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.css',
})
export class TableComponent {
    carsService = inject(CarsService)
    router = inject(Router)
    colorPrimary = 'rgb(33 158 188)'
    colorSecondary = 'rgb(255, 183, 3)'

    carsResource = rxResource({
        loader: () => this.carsService.getCars(),
    })

    see(idCar: string) {
        console.log(idCar)
        this.router.navigate([`/cars/${idCar}`])
    }

    edit() {
        console.log('edit')
    }

    remove() {
        console.log('remove')
    }
}
