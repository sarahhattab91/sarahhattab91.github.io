import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  json;
  constructor(private route: ActivatedRoute, private NR: Router, private ts: TestService) {
    this.id = route.snapshot.paramMap.get('id');
    this.json = ts.profile(this.id).subscribe(res => {
      this.json = res[0];
    },
    err => { alert('Sorry The Server is under mantaince now pleas try leater');
              this.NR.navigate(['']);
             }
);
  }

  ngOnInit() {
  }

}
