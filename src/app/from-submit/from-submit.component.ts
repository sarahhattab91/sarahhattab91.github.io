import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from-submit',
  templateUrl: './from-submit.component.html',
  styleUrls: ['./from-submit.component.css']
})
export class FromSubmitComponent implements OnInit {
  data;
  constructor(private ts: TestService, private router: Router) {
   this.data = ts.getData();

   if ( typeof this.data === 'undefined' ) {
    router.navigate(['']);

    }
   }

  ngOnInit() {
  }

}
