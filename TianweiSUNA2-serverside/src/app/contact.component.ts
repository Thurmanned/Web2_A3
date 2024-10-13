import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- 自定义导航栏 -->
    <div class="navbar">
      <a routerLink="/">Home</a>
      <a routerLink="/search">Search</a>
      <a routerLink="/contact">Contact</a>
    </div>

    <!-- 自定义表单 -->
    <div class="banner-1">
      <div class="container"></div>
    </div>
    <div class="contact">
      <div class="custom-container">
        <div class="contact-form">
          <form>
            <div class="form-group">
              <input type="text" placeholder="Name">
              <input type="text" placeholder="Email">
              <input type="text" placeholder="Phone">
            </div>
            <textarea placeholder="Message" required=""></textarea>
            <input type="submit" value="Send">
          </form>
        </div>
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
export class ContactComponent {
  title = 'clientside';
}
