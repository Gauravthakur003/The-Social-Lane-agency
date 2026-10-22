import { Mail, Phone, ArrowUpRight } from 'lucide-react'

export default function Contact(){
  return <div className="inner-page">
    <section className="contact-page">
      <div className="contact-copy">
        <span className="eyebrow light">LET'S CONNECT</span>
        <h1>Let's create your<br/><em>next campaign.</em></h1>
        <p>Have a brand, movie, song, event or activation in mind? Tell us what you are building.</p>
        <div className="contact-lines">
          <a href="tel:+917304969230"><Phone size={18}/> +91 73049 69230 <ArrowUpRight size={16}/></a>
          <a href="tel:+917718042131"><Phone size={18}/> +91 77180 42131 <ArrowUpRight size={16}/></a>
          <a href="mailto:hello@thesociallane.in"><Mail size={18}/> hello@thesociallane.in <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
        <label>Name<input placeholder="Your name"/></label>
        <label>Work email<input type="email" placeholder="you@company.com"/></label>
        <label>Company<input placeholder="Company / brand"/></label>
        <label>Tell us about it<textarea rows="5" placeholder="What are you looking to create?"></textarea></label>
        <button className="primary-btn" type="submit">Send Enquiry <ArrowUpRight size={16}/></button>
      </form>
    </section>
  </div>
}
