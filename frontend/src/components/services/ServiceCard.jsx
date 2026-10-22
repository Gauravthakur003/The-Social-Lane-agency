import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({number, title, text, icon}) {
  return (
    <article className="service-card">
      <div className="service-number">{number}</div>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="card-arrow"><ArrowUpRight size={18}/></span>
    </article>
  )
}
