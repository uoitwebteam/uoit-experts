import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Expert } from '../models';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ExpertProfileComponent implements OnInit {

	expert: Expert;

	constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { expert: Expert }) => {
    		this.expert = data.expert
    	});
  }

  backToExperts() {
    const expertId = this.expert ? this.expert.username : null;
    this.router.navigate(['../', { id: expertId }], { relativeTo: this.route });
  }

}
