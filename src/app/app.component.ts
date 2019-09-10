import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  lists = [""];
  newLists="";
  pushList = function() {
    if(this.newLists != " "){
      this.lists.push(this.newLists);
      this.newLists = " " ;
    }
  }
  removeList = function(index){
    this.lists.splice(index,1);
  }
}
