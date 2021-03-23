/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ReportsModule } from './reports.module';

/* Containers */
import * as reportsContainers from './containers';

/* Guards */
import * as reportsGuards from './guards';


/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard - Reports',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/Dashboard',
                },
                {
                    text: 'Reports',
                    active: true,
                },                

            ],
        } as SBRouteData,
        canActivate: [],
        component: reportsContainers.ReportsComponent,
    }
];

@NgModule({
    imports: [ReportsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ReportsRoutingModule {}
