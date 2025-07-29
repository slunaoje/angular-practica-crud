import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
    name: 'mileagePipe',
})
export class MileagePipe implements PipeTransform {
    transform(value: number): string {
        if (value === 0) {
            return 'mileageNuevo'
        }
        if (value < 100) {
            return 'mileageKm0'
        }

        return 'mileageOcasion'
    }
}
