import { Component, OnInit } from '@angular/core';
import { ISPPackage } from '../../Model/isppackage';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from '../../Service/package.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  packages:ISPPackage[];
  title = 'Tarangini Limited with Lightning Speed';
  field:string="speed";
  srchValue:string="";
  constructor(private router:Router,private packageService:PackageService
    , private activatedRoute : ActivatedRoute ) { }

  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        let field = params['field'];
        let srchValue = params['srchValue'];

        console.log(field +":"+srchValue);

        if(field && srchValue){
          this.packageService.searchPackages(field,srchValue).subscribe(
            (data) => this.packages=data
          );
        }else{
          this.packageService.getAllPackages().subscribe(
            (data) => this.packages=data
          );
        }
      }
    );
  }

}
