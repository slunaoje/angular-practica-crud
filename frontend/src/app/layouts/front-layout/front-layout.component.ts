import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BreadcrumbsComponent } from '../../Shared/Components/breadcrumbs/breadcrumbs.component'
import { HeaderComponent } from '../../Shared/Components/header/header.component'

@Component({
    selector: 'app-front-layout',
    imports: [RouterOutlet, BreadcrumbsComponent, HeaderComponent],
    templateUrl: './front-layout.component.html',
    styleUrl: './front-layout.component.css',
})
export class FrontLayoutComponent {}
