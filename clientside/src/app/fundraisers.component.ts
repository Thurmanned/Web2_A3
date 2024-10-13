import { Component } from '@angular/core';

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
      <div id="fundraiserDetails" style="display:none;">
        <h2 class="detail-title" id="detailsTitle"></h2>
        <table>
          <tr>
            <th>Detail</th>
            <th>Information</th>
          </tr>
          <tr>
            <td>Fundraiser ID</td>
            <td id="detailsFUNDRAISER_ID"></td>
          </tr>
          <tr>
            <td>Organizer</td>
            <td id="detailsOrganizer"></td>
          </tr>
          <tr>
            <td>Caption</td>
            <td id="detailsCaption"></td>
          </tr>
          <tr>
            <td>Target Funding</td>
            <td id="detailsTargetFunding"></td>
          </tr>
          <tr>
            <td>Current Funding</td>
            <td id="detailsCurrentFunding"></td>
          </tr>
          <tr>
            <td>City</td>
            <td id="detailsCity"></td>
          </tr>
          <tr>
            <td>Category</td>
            <td id="detailsCategory"></td>
          </tr>
        </table>
        <button id="donateButton" onclick="showUnderConstruction()">Donate</button>
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
  title = 'clientside';
}
