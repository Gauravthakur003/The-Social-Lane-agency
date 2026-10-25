import { ArrowUpRight, Target, Users, Lightbulb } from 'lucide-react'
import SectionTitle from '../components/common/SectionTitle'
import saurabhImage from '../assets/images/saurabh.jpeg'
import sahilImage from '../assets/images/sahil.png'

export default function About() {
  const values = [
    {
      icon: <Target />,
      title: 'Impact First',
      description:
        'Every campaign starts with a clear outcome and a practical execution path.',
    },
    {
      icon: <Users />,
      title: 'People Powered',
      description:
        'Creators, audiences and field teams drive every activation.',
    },
    {
      icon: <Lightbulb />,
      title: 'Built To Execute',
      description:
        'Ideas matter when they can be delivered with consistency and scale.',
    },
  ]

  const founders = [
    {
      name: 'Saurabh',
      role: 'Founder',
      image: saurabhImage,
    },
    {
      name: 'Sahil Trivedi',
      role: 'Founder',
      image: sahilImage,
    },
  ]

  return (
    <div className="inner-page">
      <section className="page-hero">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h1>
            The team behind
            <br />
            <em>the social lane.</em>
          </h1>
          <p>
            A full-service influencer and on-ground marketing team built to
            connect brands with people.
          </p>
        </div>
      </section>

      <section className="section about-layout">
        <div>
          <span className="eyebrow">CONNECT. CREATE. GROW.</span>
          <h2>
            We make brands feel <em>closer.</em>
          </h2>
        </div>

        <div>
          <p className="large-copy">
            The Social Lane brings together creator campaigns, digital
            amplification, content promotions, event activations and
            operational manpower under one roof.
          </p>
          <p>
            We focus on practical execution: the right people, the right
            content, the right distribution and reliable on-ground support.
          </p>
        </div>
      </section>

      <section className="values section">
        {values.map((value) => (
          <div className="value" key={value.title}>
            {value.icon}
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </section>

      <section className="founders-section section">
        <div className="founders-heading">
          <span className="eyebrow">MEET THE FOUNDERS</span>
          <h2>
            The people behind
            <br />
            <em>The Social Lane.</em>
          </h2>
          <p>
            Building connections between brands, creators and communities.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-image-wrap">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="founder-image"
                />
              </div>

              <div className="founder-info">
                <div>
                  <span className="eyebrow">{founder.role}</span>
                  <h3>{founder.name}</h3>
                </div>

                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}