import SectionTitle from '../components/common/SectionTitle'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  ['01','Sanfe × Beauty','Brand Campaign','Creator-led beauty campaign across lifestyle creators.'],
  ['02','Baaghi 4','Movie Promotion','Awareness and creator campaigns around the release.'],
  ['03','JioHotstar','OTT & Content','Content review and creator-led amplification.'],
  ['04','Snapdragon × Qualcomm','Activation','300+ IT students mobilized at Croma, Juhu.'],
  ['05','Lollapalooza India','Event Activation','Major music festival activation and manpower support.'],
  ['06','Ganpati & Navratri','Festival Campaign','Influencer-led festival promotions across mandals.'],
]
export default function Portfolio(){
  return <div className="inner-page">
    <section className="page-hero portfolio-hero">
      <div>
        <span className="eyebrow">2026 PORTFOLIO</span>
        <h1>Campaigns that<br/><em>made noise.</em></h1>
        <p>Influencer marketing, on-ground activation and manpower campaigns delivered across India.</p>
      </div>
    </section>
    <section className="section">
      <SectionTitle eyebrow="SELECTED WORK" title="Executed campaigns & capabilities"/>
      <div className="portfolio-grid">
        {projects.map(([n,t,cat,d])=>(
          <article className="project" key={n}>
            <div className={`project-art art-${n}`}></div>
            <div className="project-info">
              <span>{n} — {cat}</span>
              <h3>{t}</h3>
              <p>{d}</p>
              <ArrowUpRight size={18}/>
            </div>
          </article>
        ))}
      </div>
    </section>
    <section className="brand-cloud section">
      <span className="eyebrow">SELECTED BRAND CAMPAIGNS</span>
      <div className="brand-names">Sanfe • Yousta • Havmor • Paper Boat • Bella Vita • Tira • Big Muscle • Lizol • Nykaa • Urban Company • Godrej Locks • Zudio • NewMe • AZORTE • AJIO</div>
    </section>
  </div>
}
