/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as reportsComponents from './components';

/* Containers */
import * as reportsContainers from './containers';

/* Guards */
import * as reportsGuards from './guards';

/* Services */
import * as reportsServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...reportsServices.services, ...reportsGuards.guards],
    declarations: [...reportsContainers.containers, ...reportsComponents.components],
    exports: [...reportsContainers.containers, ...reportsComponents.components],
})
export class ReportsModule {}
