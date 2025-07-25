import {
    CdkMenu,
    CdkMenuGroup,
    CdkMenuItem,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
    CdkMenuTrigger,
} from '@angular/cdk/menu'
import { Component } from '@angular/core'
import { BasicButtonDirective } from '../../basic-button.directive'

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
    colorPrimary = 'rgb(33 158 188)'
    colorSecondary = 'rgb(255, 183, 3)'
    bold = false
    italic = false

    sizes = ['Small', 'Normal', 'Large']
    selectedSize: string | undefined = 'Normal'

    reset() {
        this.bold = false
        this.italic = false
        this.selectedSize = 'Normal'
    }
}
