import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { NombresService } from 'src/app/services/nombres.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  login: any = '';
  userData: User = {
    login:               '',
    id:                  0,
    node_id:             '',
    avatar_url:          '',
    gravatar_id:         '',
    url:                 '',
    html_url:            '',
    followers_url:       '',
    following_url:       '',
    gists_url:           '',
    starred_url:         '',
    subscriptions_url:   '',
    organizations_url:   '',
    repos_url:           '',
    events_url:          '',
    received_events_url: '',
    type:                '',
    site_admin:          false,
    name:                '',
    company:             '',
    blog:                '',
    location:            '',
    email:               '',
    hireable:            '',
    bio:                 '',
    twitter_username:    '',
    public_repos:        0,
    public_gists:        0,
    followers:           0,
    following:           0,
    created_at:          new Date,
    updated_at:          new Date,
  };

  constructor(
    private route: ActivatedRoute, 
    private _router: Router,
    private nService: NombresService
  ) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.paramMap.get('login');
    this.nService.getUser(this.login).subscribe(data => {
      this.userData = data;
    })  
  }

  goHome(){
    this._router.navigate(['/']);
  }


}
