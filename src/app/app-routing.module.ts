import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
const appPoutingModule: Routes = [

    {path: '', component: PortafolioComponent},
    {path: 'item', component: ItemComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', pathMatch:'full', redirectTo: ''},

]



@NgModule({
    imports:[
        RouterModule.forRoot(appPoutingModule, {useHash: true} )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}