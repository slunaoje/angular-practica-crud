import { Routes } from '@angular/router'
import { CarDetailsComponent } from './cars/components/car-details/car-details.component'
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component'
import { HomeComponent } from './Pages/home/home.component'
import { TableComponent } from './Pages/table/table.component'

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
            {
                path: 'cars/:id',
                component: CarDetailsComponent,
                data: { breadcrumb: 'View Car' },
            },
        ],
    },
]
