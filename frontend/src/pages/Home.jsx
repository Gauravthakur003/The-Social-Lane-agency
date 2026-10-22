import { Link } from 'react-router-dom'
import { ArrowUpRight, Play, Sparkles, Instagram, Camera, Clapperboard, Music2 } from 'lucide-react'


const brands = ['Sanfe', 'Yousta', 'Havmor', 'Paper Boat', 'Bella Vita', 'Tira', 'Big Muscle', 'Lizol', 'Nykaa', 'Urban Company', 'Godrej Locks', 'Zudio', 'NewMe', 'AZORTE', 'AJIO']

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="mini-pill"><Sparkles size={13}/> Influencer • Digital • On-ground</div>
          <h1>We Connect Brands<br/>with People That<br/><em>Create Impact.</em></h1>
          <p className="hero-text">
            Influencer marketing, digital solutions, creative excellence
            and operational support — all in one.
          </p>
          <div className="hero-actions">
            <Link to="/portfolio" className="primary-btn">View Portfolio <ArrowUpRight size={16}/></Link>
            <Link to="/contact" className="text-btn"><Play size={15} fill="currentColor"/> Start a Campaign</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="visual-grid"></div>
          <div className="floating-stat stat-one"><b>28+</b><span>Campaigns</span></div>
          {/* <div className="floating-stat stat-two"><b>10K+</b><span>Reposts capacity</span></div> */}
          <div className="creative-card card-phone">
            <div className="card-label">SOCIAL</div>
            <div className="phone-screen">
              <Instagram size={32}/>
              <b>CREATE<br/>IMPACT</b>
            </div>
          </div>
          <div className="creative-card card-camera"><Camera size={31}/><span>VISUAL<br/>STORIES</span></div>
          <div className="creative-card card-content"><Clapperboard size={26}/><span>CONTENT<br/>PROMOTION</span></div>
          <div className="creative-card card-music"><Music2 size={25}/><span>MUSIC<br/>CAMPAIGNS</span></div>
        </div>
      </section>

<section className="brand-strip">
  <span className="brand-label">TRUSTED BY BRANDS</span>

  <div className="brand-window">
    <div className="brand-track">
      {brands.map((brand, index) => (
        <b key={index}>{brand}</b>
      ))}
    </div>
  </div>
</section>

      <section className="intro section">
        <div className="intro-left">
          <span className="eyebrow">THE SOCIAL LANE</span>
          <h2>One team.<br/><span>Seven capabilities.</span></h2>
        </div>
        <div className="intro-right">
          <p>From creator-led campaigns to bulk digital amplification and event manpower, we turn ideas into measurable brand moments.</p>
          <Link to="/services" className="outline-btn">Explore Services <ArrowUpRight size={16}/></Link>
        </div>
      </section>

      <section className="capability-band">
        <div className="section compact">
          <span className="eyebrow light">WHAT WE DO</span>
          <div className="capability-grid">
            {[
              ['01','Brand Campaigns','HNI & lifestyle collaborations'],
              ['02','Movie Promotions','Bollywood & regional releases'],
              ['03','Song & Music','Hooksteps, challenges & reels'],
              ['04','OTT & Content','Reviews, launches & partnerships'],
              ['05','Instagram Amplification','Reposts, reshares & PR'],
              ['06','Events & Activations','On-ground execution & manpower'],
            ].map(([n,t,d]) => (
              <Link to="/services" className="capability" key={n}>
                <small>{n}</small><h3>{t}</h3><p>{d}</p><ArrowUpRight size={18}/>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <span className="eyebrow">LET'S CREATE</span>
          <h2>Let's create your<br/><em>next campaign.</em></h2>
          <p>Tell us what you want to achieve. We'll help build the campaign around it.</p>
          <Link to="/contact" className="primary-btn">Connect With Us <ArrowUpRight size={16}/></Link>
        </div>
      </section>
    </>
  )
}
