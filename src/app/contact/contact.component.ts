import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { TestService } from '../test.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  record = new Contact(0, '', '', '', '');


  constructor(private ts: TestService) { }
  onSubmit() {
    this.ts.add_record(this.record);
  }
  ngOnInit() {
  }

}
