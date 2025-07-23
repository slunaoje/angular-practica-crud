import { Injectable, inject } from '@angular/core'
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { filter } from 'rxjs/operators'

export interface Breadcrumb {
    label: string
    url: string
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
    private router = inject(Router)

    private breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([])

    constructor() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                const root = this.router.routerState.snapshot.root
                const breadcrumbs = this.buildBreadcrumbs(root)
                this.breadcrumbs$.next(breadcrumbs)
            })
    }

    get breadcrumbs() {
        return this.breadcrumbs$.asObservable()
    }

    private buildBreadcrumbs(
        route: ActivatedRouteSnapshot,
        url = '',
        breadcrumbs: Breadcrumb[] = []
    ): Breadcrumb[] {
        const label = route.data['breadcrumb']
        const routeUrl = route.url.map((segment) => segment.path).join('/')
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url || '/'

        // Incluir el breadcrumb si hay etiqueta
        if (label !== undefined) {
            breadcrumbs.push({ label, url: nextUrl })
        }

        // Continuar con hijos
        if (route.firstChild) {
            return this.buildBreadcrumbs(route.firstChild, nextUrl, breadcrumbs)
        }

        return breadcrumbs
    }
}
