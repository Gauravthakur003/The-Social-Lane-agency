import { ArrowUpRight, Target, Users, Lightbulb } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'

export default function About(){
  return <div className="inner-page">
    <section className="page-hero">
      <div>
        <span className="eyebrow">WHO WE ARE</span>
        <h1>The team behind<br/><em>the social lane.</em></h1>
        <p>A full-service influencer and on-ground marketing team built to connect brands with people.</p>
      </div>
    </section>
    <section className="section about-layout">
      <div>
        <span className="eyebrow">CONNECT. CREATE. GROW.</span>
        <h2>We make brands feel <em>closer.</em></h2>
      </div>
      <div>
        <p className="large-copy">The Social Lane brings together creator campaigns, digital amplification, content promotions, event activations and operational manpower under one roof.</p>
        <p>We focus on practical execution: the right people, the right content, the right distribution and reliable on-ground support.</p>
      </div>
    </section>
    <section className="values section">
      {[
        [<Target/>, 'Impact First','Every campaign starts with a clear outcome and a practical execution path.'],
        [<Users/>, 'People Powered','Creators, audiences and field teams are the engine behind every activation.'],
        [<Lightbulb/>, 'Built To Execute','Ideas are only useful when they can be delivered at scale.'],
      ].map(([i,t,d])=><div className="value" key={t}>{i}<h3>{t}</h3><p>{d}</p></div>)}
    </section>
    <section className="founder-note">
      <div className="founder-monogram">TSL</div>
      <div><span className="eyebrow">BEHIND THE LANE</span><h2>People who understand<br/><em>people.</em></h2><p>Our team combines campaign thinking, creator relationships and on-ground execution to help brands move faster.</p></div>
    </section>
  </div>
}
