import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { BasicButtonDirective } from '../../basic-button.directive'

@Component({
    selector: 'app-home',
    imports: [BasicButtonDirective, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    colorPrimary = 'rgb(33 158 188)'
}
