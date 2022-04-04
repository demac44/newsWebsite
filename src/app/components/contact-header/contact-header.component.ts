import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.css']
})
export class ContactHeaderComponent implements OnInit {
  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faGithub = faGithub



  constructor() { }

  ngOnInit(): void {
  }



}
