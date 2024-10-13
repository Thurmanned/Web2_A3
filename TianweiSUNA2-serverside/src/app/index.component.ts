import { Component } from '@angular/core';
import {ApiService} from "./api.service";

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
    <div class="banner" id="home">
      <div class="container">
        <section class="slider">
          <div class="flexslider">
            <ul class="slides">
              <li>
                <div class="banner-info">
                  <h2>Gather Every Love And Light up the Light of Hope</h2>
                  <p>Thank you for everything you have done!</p>
                  <a class="hvr-shutter-in-horizontal" href="http://www.cpwnews.com/index.html">Learn More</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

    <!-- about -->
    <div class="about">
      <div class="camp">
        <h3>Charitable Action</h3>
        <div class="col-md-4 minist-right">
          <img src="../assets/images/4.jpg" class="img-responsive" alt="">
          <h4>The 2024 World Donation Index is released</h4>
          <p>Indonesia takes first place, Kenya ranks second, and Singapore rises to third place | Ranking 1.</p>
          <a class="hvr-shutter-in-horizontal"
             href="https://www.thepaper.cn/newsDetail_forward_28506635"><strong>More</strong></a>
        </div>
        <div class="col-md-4 minist-right">
          <img src="../assets/images/5.jpg" class="img-responsive" alt="">
          <h4>Join the United Nations Children's Fund</h4>
          <p>Join hands with UNICEF to create a better future for children, let love know no borders, protect childhood,
            and build hope together!</p>
          <a class="hvr-shutter-in-horizontal" href="https://www.unicef.org/zh">More</a>
        </div>
        <div class="col-md-4 minist-right">
          <img src="../assets/images/6.jpg" class="img-responsive" alt="">
          <h4>Love Bean Silver Age Care</h4>
          <p>Three year investment of 50 million yuan, Alibaba's public welfare "Love Bean Silver Age Care" elderly
            service plan launched</p>
          <a class="hvr-shutter-in-horizontal"
             href="https://cn.chinadaily.com.cn/a/202209/21/WS632ad90da310817f312ef2e2.html">More</a>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <div style="height: 40px;"></div> <!-- 添加40px高度的空白 -->

    <h1>Fundraisers</h1>
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
export class IndexComponent {
  fundraisers:any=[]

  constructor(private apiService:ApiService) {
  }

  ngOnInit() {
    this.apiService.getActiveFundraisers("","","")
      .subscribe((result:any) => {
        this.fundraisers=result
      })
  }
}
