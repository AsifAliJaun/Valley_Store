
import './App.css';

function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
                <h3>Contact</h3>
                <p>Valley Mobile Phone store pvt. Ltd</p>
                <ul className="address">
                    <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Puducherry Technological university Puducherry City.</li>
                    <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:asifalizeyan1234@gmail.com">asifalizeyan1234@gmail.com</a></li>
                    <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i><a href="tel:+91-9103025828">+91 9103025828</a></li>
                </ul>
            </div>
           
           
            <div className="col-md-3 w3_footer_grid">
                <h3>Profile</h3>
                <ul className="info"> 
                    <li><a href="http://localhost:3000">Home</a></li>
                    
                </ul>
                <h4>Follow Us</h4>
                <div className="agileits_social_button">
                    <ul>
                        <li><a href="https://www.facebook.com" className="facebook"> </a></li>
                        <li><a href="https://www.twitter.com/asifalijaun" className="twitter"> </a></li>
                        <li><a href="https://asifalijaun.github.io/asifpersonal" className="google"> </a></li>
                        <li><a href="https://www.pinterest.com" className="pinterest"> </a></li>
                    </ul>
                </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    </div>
    <div className="footer-copy">
        <div className="footer-copy1">
            <div className="footer-copy-pos">
                <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
            </div>
        </div>
        <div className="container">
            <p>&copy; 2022 Valley Mobile Phone Store. All rights reserved | Design by <a href="http://asifalijaun.github.io/asifpersonal">Asif Ali</a></p>
        </div>
    </div>
</div>
  )
}
export default Footer;