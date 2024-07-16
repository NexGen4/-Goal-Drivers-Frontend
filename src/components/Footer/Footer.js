import React from 'react';
import './Footier.css';

function Footer ()  {
  return (
    <footer className="footer">
      <div className="footer-container"> {/*This can be used to group and organize other elements within the footer.*/}
        <div className="footer-section"> {/*Used to group and organize specific content within the footer, such as links or text.*/}
          <h3>MetaDew Technologies</h3>
          <p> 21/1 , S De S Jayasinghe Mawatha, Kalubowila,
Dehiwala, Sri Lanka.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us </h3>
          <ul>
            <li>Address :21/1 , S De S Jayasinghe Mawatha, Kalubowila,
Dehiwala, Sri Lanka.</li>
            <li>Phone : 076-78955879</li>
            <li>Phone : 011-74825879</li>
            <li>Email : info@company.com</li> 
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us On</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> facebook {/*This line creates a Facebook icon using the Font library*/}
            <br></br>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li> twitter
            <br></br>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li> insta
            <br></br>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li> linkedIN
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
