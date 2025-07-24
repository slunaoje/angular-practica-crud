import { Component, OnInit, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import {
    Breadcrumb,
    BreadcrumbService,
} from '../../Services/breadcrumb.service'

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css'],
    imports: [RouterLink],
})
export class BreadcrumbsComponent implements OnInit {
    private breadcrumbService = inject(BreadcrumbService)

    breadcrumbs: Breadcrumb[] = []

    ngOnInit(): void {
        this.breadcrumbService.breadcrumbs.subscribe(
            (bc) => (this.breadcrumbs = bc)
        )
    }
}
