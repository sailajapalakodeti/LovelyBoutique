import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classDataTarget = "#sidecollapse";
  classDataTarget2 =".side-collapse-container";  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void{
   this.classDataTarget = ".out";
  

  }

  // $(document).ready(function() {   
  //           var sideslider = $('[data-toggle=collapse-side]');
  //           var sel = sideslider.attr('data-target');
  //           var sel2 = sideslider.attr('data-target-2');
  //           sideslider.click(function(event){
  //               $(sel).toggleClass('in');
  //               $(sel2).toggleClass('out');
  //           });
  //       });

}
