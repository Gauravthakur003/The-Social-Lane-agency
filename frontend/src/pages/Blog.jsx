import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'

const posts = [
  ['01','Creator Marketing','How creator-led campaigns turn attention into action','A practical look at creator selection, content fit and campaign distribution.'],
  ['02','Instagram','Why amplification needs more than reposts','Building distribution around the right content, timing and audience signals.'],
  ['03','Activations','From idea to on-ground execution','The operational details that make a live brand activation actually work.'],
]

export default function Blog(){
  return <div className="inner-page">
    <section className="page-hero">
      <div><span className="eyebrow">THE LANE NOTES</span><h1>Ideas worth<br/><em>sharing.</em></h1><p>Campaign thinking, creator marketing and execution notes from The Social Lane.</p></div>
    </section>
    <section className="section">
      <SectionTitle eyebrow="LATEST" title="Stories from the lane"/>
      <div className="blog-grid">{posts.map(([n,c,t,d])=><article className="blog-card" key={n}><div className="blog-art"><span>{n}</span></div><div className="blog-meta">{c}</div><h3>{t}</h3><p>{d}</p><a href="#">Read article <ArrowUpRight size={16}/></a></article>)}</div>
    </section>
  </div>
}
