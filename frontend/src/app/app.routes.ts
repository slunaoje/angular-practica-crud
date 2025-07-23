import { Routes } from '@angular/router'
import { FrontLayoutComponent } from './front-layout/front-layout.component'
import { HomeComponent } from './home/home.component'
import { TableComponent } from './table/table.component'

export const routes: Routes = [
    {
        path: '',
        component: FrontLayoutComponent,
        data: { breadcrumb: 'Home' },
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'table',
                component: TableComponent,
                data: { breadcrumb: 'Table' },
            },
        ],
    },
]
