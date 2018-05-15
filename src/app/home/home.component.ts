import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  json;
  constructor(private ts: TestService) {
   ts.data().subscribe(res => {
     this.json = res;
   },
   err => { alert('Sorry The Server is under mantaince now pleas try leater'); });
    }

  ngOnInit() {
  }

}
