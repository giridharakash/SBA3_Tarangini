import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { ConnectionPageComponent } from './Component/connection-page/connection-page.component';
import { SuccessPageComponent } from './Component/success-page/success-page.component';
const paths : Routes =[
  {path:'homePage',component:HomePageComponent},
  {path:'newUser',component:ConnectionPageComponent},
  {path:'addedUser',component:SuccessPageComponent},
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConnectionPageComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
