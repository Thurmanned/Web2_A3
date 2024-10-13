import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {ActivatedRoute, Router} from "@angular/router";

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

    <div class="services">
      <div class="container">
        <h2 style="font-size: 40px;">Update the Fundraiser</h2>
        <form id="search-form" (ngSubmit)="update()">
          <div class="form-group">
            <label for="organizer">Enter an Organizer:</label>
            <input [(ngModel)]="organizer" type="text" id="organizer" name="organizer" placeholder="Type a Organizer..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="caption">Enter an Caption:</label>
            <input [(ngModel)]="caption" type="text" id="caption" name="caption" placeholder="Type a Caption..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="target_funding">Enter an Target Funding:</label>
            <input [(ngModel)]="target_funding" type="text" id="target_funding" name="target_funding" placeholder="Type a Target Funding..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="current_funding">Enter an Current Funding:</label>
            <input [(ngModel)]="current_funding" type="text" id="current_funding" name="current_funding" placeholder="Type a Current Funding..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="city">Enter a City:</label>
            <input [(ngModel)]="city" type="text" id="city" name="city" placeholder="Type a City..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="category">Select a Category:</label>
            <select [(ngModel)]="category" id="category" name="category" class="form-control" style="width: 100%; height: 50px;">
              <option value="">Select a Category</option>
              <option value="9">Health</option>
              <option value="10">Education</option>
              <option value="11">Environment</option>
              <option value="12">Animal Welfare</option>
              <option value="13">Community Development</option>
            </select>
          </div>
          <div class="form-group">
            <label for="active">Select a Status:</label>
            <select [(ngModel)]="active" id="active" name="active" class="form-control" style="width: 100%; height: 50px;">
              <option value="">Select a Status</option>
              <option value="1">Active</option>
              <option value="0">Suspend</option>
            </select>
          </div>
          <div class="form-group">
            <button type="submit" id="search-btn" class="btn">Update</button>
            <button type="button" id="clear-btn" class="btn" (click)="clearForm()">Clear</button>
          </div>
        </form>
      </div>
    </div>

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
export class UpdateComponent {
  id:string="";
  organizer:string = "";
  caption:string= "";
  target_funding:string= "";
  current_funding:string= "";
  city:string= "";
  active:string= "";
  category:string= "";

  constructor(private apiService:ApiService,private router: Router,private route:ActivatedRoute) {
    route.params.subscribe((params:any) => {
      const fundraiserId = params.id
      if (fundraiserId) {
        this.apiService.getFundraisersById(fundraiserId)
          .subscribe((result:any)=> {
            this.id = result.FUNDRAISER_ID
            this.organizer = result.ORGANIZER
            this.caption = result.CAPTION
            this.target_funding = result.TARGET_FUNDING
            this.current_funding = result.CURRENT_FUNDING
            this.city = result.CITY
            this.active = result.ACTIVE
            this.category = result.CATEGORY_ID
          })
      }
    })
  }

  update() {
    if (this.organizer === "") {
      alert("Pleaser enter the organizer")
      return
    }
    if (this.caption === "") {
      alert("Pleaser enter the caption")
      return
    }
    if (this.target_funding === "") {
      alert("Pleaser enter the target funding")
      return
    }
    if (!/^\b([1-9]\d*(\.\d+)?|0\.\d*[1-9]\d*)\b$/.test(this.target_funding)) {
      alert("Target funding should be number")
      return
    }
    if (this.current_funding === "") {
      alert("Pleaser enter the current funding")
      return
    }
    if (!/^\b([1-9]\d*(\.\d+)?|0\.\d*[1-9]\d*)\b$/.test(this.current_funding)) {
      alert("Current funding should be number")
      return
    }
    if (this.city === "") {
      alert("Pleaser enter the city")
      return
    }
    if (this.active === "") {
      alert("Pleaser enter the active")
      return
    }
    if (this.category === "") {
      alert("Pleaser enter the category")
      return
    }
    this.apiService.updateFundraiser(this.id, this.organizer,this.caption,this.target_funding,this.current_funding,this.city,this.active,this.category)
      .subscribe(result => {
        alert("Update Complete!")
        this.router.navigate(['/admin'])
      })
  }

  clearForm() {
    this.organizer = "";
    this.caption= "";
    this.target_funding= "";
    this.current_funding= "";
    this.city= "";
    this.active= "";
    this.category= "";
  }

  ngOnInit() {
  }
}
