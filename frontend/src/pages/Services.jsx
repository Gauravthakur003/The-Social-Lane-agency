import { Instagram, Film, Music2, Tv, Users, Megaphone, CalendarDays } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import ServiceCard from '../components/services/ServiceCard'

const services = [
  ['01','Brand Campaigns','HNI & lifestyle brand collaborations across beauty, fashion, F&B and lifestyle.',<SparkleIcon/>],
  ['02','Movie Promotions','Influencer-led promotions, awareness drives, trailer and release campaigns.',<Film size={24}/>],
  ['03','Song & Music','Hookstep, dance challenge, audio/reel and creator-led music campaigns.',<Music2 size={24}/>],
  ['04','OTT & Content','Series reviews, launch campaigns and streaming platform partnerships.',<Tv size={24}/>],
  ['05','Instagram Amplification','Bulk reposting, reel resharing, comments and PR distribution at scale.',<Instagram size={24}/>],
  ['06','Events & Activations','On-ground brand activations, store launches and festival promotions.',<CalendarDays size={24}/>],
  ['07','Operations & Manpower','Event coordinators, promoters, venue teams and field executives.',<Users size={24}/>],
  ['08','Software service','3-D website, apps, saas projects,ai agents and different tech solutions.',<Users size={24}/>],
]

function SparkleIcon(){ return <Megaphone size={24}/> }

export default function Services(){
  return <div className="inner-page">
    <section className="page-hero">
      <div>
        <span className="eyebrow">OUR CAPABILITIES</span>
        <h1>Full-service marketing,<br/><em>built for impact.</em></h1>
        <p>One team covering creators, content, amplification, activations and operations.</p>
      </div>
    </section>
    <section className="section">
      <SectionTitle eyebrow="07 CAPABILITIES" title="Everything your campaign needs." text="From the first creator brief to the final on-ground activation, we bring strategy and execution together."/>
      <div className="services-grid">{services.map(s=><ServiceCard key={s[0]} number={s[0]} title={s[1]} text={s[2]} icon={s[3]}/>)}</div>
    </section>
    <section className="dark-callout">
      <span className="eyebrow light">OUR APPROACH</span>
      <h2>Strategy gets attention.<br/><em>Execution creates impact.</em></h2>
    </section>
  </div>
}
