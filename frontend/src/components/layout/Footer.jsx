import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react'
import logo from "../../assets/images/logof.png";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <img src={logo} className="footer-logo" alt="The Social Lane" />
          {/* <p>Connect. Create. Grow.</p> */}
        </div>
        <div className="footer-contact">
          <span>Ready for your next campaign?</span>
          <Link to="/contact" className="footer-big-link">Let's talk <ArrowUpRight size={24}/></Link>
        </div>
      </div>
      <div className="footer-grid">
        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <h4>Capabilities</h4>
          <span>Influencer Campaigns</span>
          <span>Movie Promotions</span>
          <span>Music & OTT</span>
          <span>Instagram Amplification</span>
          <span>Events & Activations</span>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+917304969230"><Phone size={15}/> +91 73049 69230</a>
          <a href="tel:+917718042131"><Phone size={15}/> +91 77180 42131</a>
          <a href="mailto:info@thesociallane.in"><Mail size={15}/> Info@thesociallane.in</a>
        </div>
        <div>
          <h4>Social</h4>
          <a href="#" aria-label="Instagram"><Instagram size={17}/> Instagram</a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={17}/> LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Social Lane. All rights reserved.</span>
        <span>Connect. Create. Grow.</span>
      </div>
    </footer>
  )
}
