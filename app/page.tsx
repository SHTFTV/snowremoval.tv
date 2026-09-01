import Link from 'next/link';

const cities = ['Vancouver', 'Burnaby', 'Surrey', 'Coquitlam', 'Maple Ridge', 'Chilliwack'];
const equipment = [
  ['Shovelling crews', 'Entrances, walkways, stairs and detailed hand clearing.'],
  ['Snow blowers & sweepers', 'Clean pedestrian areas and finished surfaces efficiently.'],
  ['Plow trucks & ATVs', 'Fast clearing for driveways, lanes and commercial lots.'],
  ['Salters & de-icing', 'Salt, brine and traction control for freeze prevention.'],
  ['Skid steers & loaders', 'High-capacity stacking, relocation and lot clearing.'],
  ['Backhoes & front loaders', 'Heavy snow handling for industrial and large sites.'],
];

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'VideoObject',name:'PlowWow Snow Shovelling Crews',description:'A look at PlowWow snow shovelling crews supporting commercial and strata winter-service operations.',thumbnailUrl:['https://snowremoval.tv/images/plowwow-banner.png'],uploadDate:'2025-12-01T08:00:00-08:00',contentUrl:'https://snowremoval.tv/videos/plowwow-snow-shovelers.mp4',embedUrl:'https://snowremoval.tv/#strata-snow-video'})}} />
    <header className="site-header">
      <Link href="/" className="brand"><span>SNOW</span>REMOVAL.TV</Link>
      <nav aria-label="Main navigation"><Link href="/cities/">Service Areas</Link><Link href="/equipment/">Equipment</Link><Link href="/resources/">Resources</Link><Link href="/contact/">Contact</Link></nav>
      <a className="header-cta" href="tel:+16047611518">Call 604-761-1518</a>
    </header>
    <section className="hero"><div className="hero-shade"/><div className="hero-content">
      <p className="eyebrow">Lower Mainland & Fraser Valley</p><h1>Snow removal resources—and the crews to get it done.</h1>
      <p>Practical local guides for property managers, strata councils and contractors, backed by PlowWow winter service professionals.</p>
      <div className="actions"><Link className="button primary" href="/equipment/">Request equipment or crews</Link><a className="button ghost" href="sms:+16047611518">Text for service</a></div>
      <div className="trust-row"><span>24/7 storm response</span><span>Commercial & strata</span><span>Call or text</span></div>
    </div></section>
    <section className="intro section"><div><p className="eyebrow red">Match the site to the right response</p><h2>From one icy entrance to a full commercial lot.</h2></div><p>Every property needs a different mix of people, equipment and timing. SnowRemoval.tv helps you identify the right response, understand local responsibilities and connect with qualified service through PlowWow.</p></section>
    <section className="equipment section"><div className="section-heading"><p className="eyebrow red">Equipment & labour requests</p><h2>Tell us what the storm requires.</h2><p>Choose the capability you need—or describe the property and let the team recommend the right combination.</p></div>
      <div className="equipment-grid">{equipment.map(([title,copy],i)=><article className="equipment-card" key={title}><span className="number">0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <div className="center"><Link className="button primary" href="/equipment/">Build a service request</Link></div>
    </section>
    <section className="image-band"><figure className="watermarked"><img src="/images/plow-crew.png" alt="PlowWow snow-removal crew preparing equipment in the Lower Mainland"/><span>SNOWREMOVAL.TV × PLOWWOW</span></figure><div><p className="eyebrow">Powered by PlowWow</p><h2>Local operators. Real equipment. Storm-ready planning.</h2><p>SnowRemoval.tv is the information layer. PlowWow is the service connection for commercial, strata and managed properties.</p><a className="button light" href="https://plowwow.com">Visit PlowWow</a></div></section>
    <section className="video-section section" id="strata-snow-video"><div><p className="eyebrow red">Video guide</p><h2>Real crews for detailed snow clearing.</h2><p>See PlowWow snow-shovelling crews in action, then send the property details for equipment and labour planning.</p></div><div className="video-frame"><video controls preload="metadata" poster="/images/plowwow-banner.png"><source src="/videos/plowwow-snow-shovelers.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><span>SNOWREMOVAL.TV × PLOWWOW</span></div></section>
    <section className="locations section"><div className="section-heading"><p className="eyebrow red">Local snow information</p><h2>Service-area guides that answer local questions.</h2></div><div className="city-grid">{cities.map(city=><Link href={`/${city.toLowerCase().replace(' ','-')}/`} key={city}><strong>{city}</strong><span>Snow removal guide →</span></Link>)}</div><div className="center"><Link className="text-link" href="/cities/">View all service areas</Link></div></section>
    <section className="commitment section"><figure className="watermarked"><img src="/images/founder.png" alt="PlowWow snow-removal professional holding a snow shovel"/><span>SNOWREMOVAL.TV × PLOWWOW</span></figure><div><p className="eyebrow red">Founder commitment</p><h2>No invented testimonials. Just a clear promise.</h2><blockquote>“We built this resource to make winter service easier to understand and easier to arrange. We will be direct about capabilities, response conditions and pricing—and we will never publish fabricated customer endorsements.”</blockquote><p className="signature">The SnowRemoval.tv & PlowWow team</p></div></section>
    <section className="cta"><p className="eyebrow">A storm is coming—or already here?</p><h2>Tell us the property, conditions and equipment required.</h2><div className="actions"><a className="button light" href="tel:+16047611518">Call 604-761-1518</a><a className="button outline-light" href="mailto:wow@plowwow.com?subject=Snow%20removal%20service%20request">Email the request</a></div></section>
    <footer><div className="brand"><span>SNOW</span>REMOVAL.TV</div><p>Lower Mainland and Fraser Valley snow-removal information and service connections.</p><div><a href="tel:+16047611518">604-761-1518</a><a href="mailto:wow@plowwow.com">wow@plowwow.com</a><a href="https://plowwow.com">PlowWow.com</a></div><small>© 2026 SnowRemoval.tv. Information is general; verify current municipal requirements.</small></footer>
  </main>;
}
