import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISPPackage } from './Model/isppackage';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from './Service/package.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarangini Limited with Lightning Speed';
  constructor(private router:Router ){
    
  }

}
