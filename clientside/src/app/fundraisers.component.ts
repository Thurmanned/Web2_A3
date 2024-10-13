import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  template: `
    <div class="header-bottom">
      <div class="custom-container">
        <nav class="navbar-custom">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="search.html">Search</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>

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
        <button id="donateButton" routerLink="/donation/{{fundraiser.FUNDRAISER_ID}}" style="margin: 10px 0">Donate</button>

        <h3 class="detail-title">Donations: </h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          <tr *ngFor="let donation of fundraiser.donations">
            <td>{{donation.GIVER}}</td>
            <td>{{donation.DATE|date:'MMM d, y, h:mm:ss'}}</td>
            <td>{{donation.AMOUNT}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="footer" id="contact">
      <div class="container">
        <!-- footer -->
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
                <li><a href="#"><i class="goog"></i> </a></li>
                <li><a href="#"><i class="lin"></i> </a></li>
              </ul>
            </div>
            <div class="col-md-4 contact-left">
              <h3>Phone/Fax</h3>
              <p>Phone : +1234567890 </p>
              <p>Fax : +1234567890 </p>
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
export class FundraisersComponent {
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
}
