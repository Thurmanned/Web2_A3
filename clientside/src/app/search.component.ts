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

    <!-- banner -->
    <div class="banner-1">
      <div class="container"></div>
    </div>

    <div class="services">
      <div class="container">
        <h2 style="font-size: 40px;">Search for Fundraisers</h2>
        <form id="search-form">
          <div class="form-group">
            <label for="name">Enter an Organizer:</label>
            <input type="text" id="name" name="name" placeholder="Type a Name..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="city">Enter a City:</label>
            <input type="text" id="city" name="city" placeholder="Type a City..." class="form-control" style="width: 100%; height: 50px;">
          </div>
          <div class="form-group">
            <label for="category">Select a Category:</label>
            <select id="category" name="category" class="form-control" style="width: 100%; height: 50px;">
              <option value="">Select a Category</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Animal Welfare">Animal Welfare</option>
              <option value="Community Development">Community Development</option>
            </select>
          </div>
          <div class="form-group">
            <button type="submit" id="search-btn" class="btn">Search</button>
            <button type="button" id="clear-btn" class="btn" onclick="clearForm()">Clear</button>
          </div>
        </form>

        <table id="results-table" class="table mt-3" style="display:none;">
          <thead>
          <tr>
            <th>ID</th>
            <th>Organizer</th>
            <th>City</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <!-- Search results will be added here -->
          </tbody>
        </table>
        <div id="not-found" class="alert alert-danger mt-3" style="display:none;">Not Found</div>
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
export class SearchComponent {
  title = 'clientside';
}
