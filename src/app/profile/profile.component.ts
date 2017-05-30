import { Component, Input, OnInit } from '@angular/core';

import { Expert } from '../models';

@Component({
  selector: 'expert-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	@Input() expert: Expert;

  constructor() { }

  ngOnInit() {
  }

}
