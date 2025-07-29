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
    colorPrimary = 'rgb(33 158 188)'
    colorSecondary = 'rgb(255, 183, 3)'
    bold = false
    italic = false

    carsResource = rxResource({
        loader: () => this.carsService.getCars(),
    })
    sizes = ['Small', 'Normal', 'Large']
    selectedSize: string | undefined = 'Normal'

    reset() {
        this.bold = false
        this.italic = false
        this.selectedSize = 'Normal'
    }
}
