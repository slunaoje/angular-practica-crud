import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component'

@Component({
    selector: 'app-front-layout',
    imports: [RouterOutlet, BreadcrumbsComponent],
    templateUrl: './front-layout.component.html',
    styleUrl: './front-layout.component.css',
})
export class FrontLayoutComponent {}
