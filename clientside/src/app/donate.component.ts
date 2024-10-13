import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <!-- 自定义导航栏 -->
    <div class="navbar">
      <a routerLink="/">Home</a>
      <a routerLink="/search">Search</a>
      <a routerLink="/contact">Contact</a>
    </div>

    <!-- banner -->
    <div class="banner-1">
      <div class="container">
        <div id="fundraiserDetails">
          <h2 class="detail-title" id="detailsTitle"></h2>
          <table>
            <tr>
              <th>Detail</th>
              <th>Information</th>
            </tr>
            <tr>
              <td>Fundraiser ID</td>
              <td id="detailsFUNDRAISER_ID">{{fundraiser.FUNDRAISER_ID}}</td>
            </tr>
            <tr>
              <td>Organizer</td>
              <td id="detailsOrganizer">{{fundraiser.ORGANIZER}}</td>
            </tr>
            <tr>
              <td>Caption</td>
              <td id="detailsCaption">{{fundraiser.CAPTION}}</td>
            </tr>
            <tr>
              <td>Target Funding</td>
              <td id="detailsTargetFunding">{{fundraiser.TARGET_FUNDING}}</td>
            </tr>
            <tr>
              <td>Current Funding</td>
              <td id="detailsCurrentFunding">{{fundraiser.CURRENT_FUNDING}}</td>
            </tr>
            <tr>
              <td>City</td>
              <td id="detailsCity">{{fundraiser.CITY}}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td id="detailsCategory">{{fundraiser.CATEGORY}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="container">
        <h2 style="font-size: 40px;">Donate for Fundraisers</h2>
        <form id="search-form" (ngSubmit)="donate()">
          <div class="form-group">
            <label for="name">Enter an Organizer:</label>
            <input [(ngModel)]="name" type="text" id="name" name="name" placeholder="Type a Name..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="amount">Amount:</label>
            <input [(ngModel)]="amount" type="text" id="amount" name="amount" placeholder="Type a Amount..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <button type="submit" id="donate-btn" class="btn" style="width: fit-content">Submit my donation</button>
          </div>
        </form>


      </div>
    </div>

    <div class="footer" id="contact">
      <div class="container">
        <div class="footer" id="contact">
          <div class="container">
            <div class="col-md-4 contact-left">
              <h3>Address</h3>
              <address>
                Cross Star University Australia<br>
                Australia<br>
                <abbr title="Phone">P :</abbr> 123456-7890
              </address>
            </div>
            <div class="col-md-4 ftr-gd">
              <h3>Follow Us</h3>
              <ul class="social">
                <li><a href="#"><i></i></a></li>
                <li><a href="#"><i class="facebook"></i></a></li>
                <li><a href="#"><i class="goog"></i></a></li>
                <li><a href="#"><i class="lin"></i></a></li>
              </ul>
            </div>
            <div class="col-md-4 contact-left">
              <h3>Phone/Fax</h3>
              <p>Phone : +1234567890</p>
              <p>Fax : +1234567890</p>
              <p>Email : <a href="mailto:info@example.com">24274931&#64;scu.com</a></p>
            </div>
            <div class="clearfix"></div>
            <div class="copyright">
              <p>Tianwei Sun 24274931</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DonateComponent {
  fundraiser: any = null

  constructor(private apiService:ApiService,private route:ActivatedRoute) {
    route.params.subscribe((params:any) => {
      const fundraiserId = params.id
      if (fundraiserId) {
        this.apiService.getFundraisersById(fundraiserId)
          .subscribe(result=> {
            this.fundraiser = result
          })
      }
    })
  }
  name = ""
  amount = ""

  donate() {
    if (!this.name && !this.amount ) {
      alert('Please Enter at All Donate Criterion (Name, Amount).');
      return;
    }
    if (!/^\b([5-9]|\d{2,})\b$/.test(this.amount) ) {
      alert('Please Enter minimum of donation is 5 AUD');
      return;
    }
    this.apiService.addDonation(this.amount, this.name, this.fundraiser.FUNDRAISER_ID)
      .subscribe(result => {
        alert("Thank you for your donation to " + this.fundraiser.ORGANIZER)
        this.clearForm()
      })
  }
  clearForm() {
    this.name = ""
    this.amount = ""
  }
}
