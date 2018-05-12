import { Component, OnInit } from '@angular/core';

import { Services } from './providers/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  categories = [];
  showCategories = false;
  showSubCategories = false;
  title = 'app';

  constructor(public svc: Services) {

  }

  ngOnInit() {
    this.svc.get('http://ecommercegt.eastus.cloudapp.azure.com:3000/v1/store/getcategoriestest?language_id=1').subscribe(
      (success) => {
        console.log(success);
        this.categories = success;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  subs(catId, subCatID) {
    console.log(catId);
    
    if(catId === subCatID){
      this.showSubCategories = true;
    }
    else{
      this.showSubCategories = false;
    }
  }

}
