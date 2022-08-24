import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  
  title = 'Portfolio';
  @ViewChild('togglebutton')
  toggleBtn!: HTMLAnchorElement;
  @ViewChild('navbarLinks')
  navbarLinks!: HTMLDivElement;

  //const toggleBtn = document.getElementsByClassName('toggle-button')[0]
//const navbarLinks = document.getElementsByClassName('navbar-links')[0]
ngAfterViewInit(){
  this.toggleBtn.addEventListener(
    'click', ()=> {
      this.navbarLinks.classList.toggle('active');}
  )
}

}
