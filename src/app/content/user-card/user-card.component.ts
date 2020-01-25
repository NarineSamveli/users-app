import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: UserService) { }
  user: any;
  ngOnInit() {
    // this.activatedRoute.paramMap
    //   .subscribe(params => this.service.getUser(params.get('id'))
    //     .subscribe(user => this.user = user));
    this.activatedRoute.data.subscribe(data => this.user = data.user);
  }

}
