import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routeConfig = [
    {path: '', component: AdminDashboardComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routeConfig)],
    exports:[RouterModule]
})
export class AdminRoutingModule{

}