import { Component } from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  template: `
    <!-- 自定义导航栏 -->
    <div class="navbar">
      <a routerLink="/admin">Admin Home</a>
    </div>

    <!-- banner -->
    <div class="banner-1">
      <div class="container"></div>
    </div>

    <div style="height: 40px;"></div> <!-- 添加40px高度的空白 -->

    <h1>Fundraisers</h1>
    <div style="text-align: center;margin-bottom: 20px">
      <button class="admin-btn" routerLink="/create">Create</button>
    </div>
    <table id="fundraiser-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Organizer</th>
        <th>Caption</th>
        <th>Target Funding</th>
        <th>Current Funding</th>
        <th>City</th>
        <th>Category</th>
        <th>Active</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor="let fundraiser of fundraisers">
          <td>{{fundraiser.FUNDRAISER_ID || 'N/A'}}</td>
          <td>{{fundraiser.ORGANIZER || 'N/A'}}</td>
          <td>{{fundraiser.CAPTION || 'N/A'}}</td>
          <td>{{fundraiser.TARGET_FUNDING || 'N/A'}}</td>
          <td>{{fundraiser.CURRENT_FUNDING || 'N/A'}}</td>
          <td>{{fundraiser.CITY || 'N/A'}}</td>
          <td>{{fundraiser.CATEGORY || 'N/A'}}</td>
          <td>{{fundraiser.ACTIVE === 1 ? 'YES' : 'NO'}}</td>
          <td style="min-width: 160px">
            <button class="admin-btn" routerLink="/update/{{fundraiser.FUNDRAISER_ID}}">Update</button>
            <button class="admin-btn" (click)="del(fundraiser)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div style="height: 80px;"></div> <!-- 100px 的空白 -->


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
          <p>Phone : +1234567890 </p>
          <p>Fax : +1234567890 </p>
          <p>Email : <a href="mailto:info@example.com">24274931&#64;scu.com</a></p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  `
})
export class AdminComponent {
  fundraisers:any=[]

  constructor(private apiService:ApiService) {
  }

  del(fundraiser: any) {
    if (confirm("Do you want to delete the fundraiser?")) {
      this.apiService.deleteFundraisers(fundraiser.FUNDRAISER_ID)
        .subscribe(result => {
          alert("Delete Complete!")
          this.apiService.getFundraisers()
            .subscribe((result:any) => {
              this.fundraisers=result
            })
        })
    }
  }

  ngOnInit() {
    this.apiService.getFundraisers()
      .subscribe((result:any) => {
        this.fundraisers=result
      })
  }
}
