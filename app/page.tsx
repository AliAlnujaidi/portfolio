import { site, type BuildingProject, type LiveProject, type RoadmapItem } from "@/content/site";

// Stamped at build time, so it's always true for the deployed page.
const deployedOn = new Date().toISOString().slice(0, 10);
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

function LiveCard({ p }: { p: LiveProject }) {
  return (
    <a className="card live" href={p.url} {...external}>
      <span className="pill pill-live"><span className="dot" />live</span>
      <h3>{p.name}</h3>
      <p className="desc grow">{p.desc}</p>
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="card-foot">
        <span className="metric">{p.metric}</span>
        <span className="domain">{p.domain} ↗</span>
      </div>
    </a>
  );
}

function Roadmap({ items }: { items: RoadmapItem[] }) {
  const current = items.findIndex((i) => !i.done);
  return (
    <div className="roadmap">
      <div className="comment">// roadmap</div>
      {items.map((item, i) => {
        const state = item.done ? "done" : i === current ? "current" : "todo";
        const mark = item.done ? "[x]" : i === current ? "[~]" : "[ ]";
        return (
          <div key={item.text} className={`step ${state}`}>
            <span className="mark">{mark}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}

function BuildingCard({ b }: { b: BuildingProject }) {
  return (
    <div className="card building">
      <div className="building-main">
        <div className="building-top">
          <span className="pill pill-wip"><span className="dot" />{b.stage}</span>
          <span className="eta">ETA {b.eta}</span>
          <a className="domain-link" href={b.url} {...external}>{b.domain} ↗</a>
        </div>
        <h3>{b.name}</h3>
        <p className="desc">{b.desc}</p>
        <div className="progress">
          <div className="progress-row"><span>progress</span><span className="pct">{b.pct}%</span></div>
          <div
            className="bar"
            role="progressbar"
            aria-label={`${b.name} progress`}
            aria-valuenow={b.pct}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div style={{ width: `${b.pct}%` }} />
          </div>
        </div>
      </div>
      <Roadmap items={b.roadmap} />
    </div>
  );
}

export default function Page() {
  const stackEntries = Object.entries(site.stack);
  return (
    <div className="page">
      <nav className="nav">
        <div className="nav-in">
          <a href="#top" className="brand"><span>~/</span>{site.handle}</a>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#building">building</a>
            <a href="#timeline">timeline</a>
            <a href="#contact" className="accent">contact →</a>
          </div>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="prompt">
          <span className="green">{site.promptUser}</span><span>:</span><span className="blue">~</span><span>$ whoami</span>
        </div>
        <h1>{site.headline}<span className="period">.</span></h1>
        <p className="lede">{site.lede}</p>
        <div className="cta">
          <a href="#projects" className="btn-primary">./see-projects</a>
          <a href="#contact" className="btn-secondary">say hello</a>
        </div>
        <div className="status">
          <div className="status-item"><span className="pulse" />{site.status}</div>
          <div>{site.live.length} live · {site.building.length} in progress</div>
          <div className="status-item">last deploy {deployedOn}<span className="cursor" /></div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="wrap split">
          <SectionHead eyebrow="01 / about" title="A bit about me" />
          <div className="span2 about">
            {site.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <div className="code">
              <div className="comment">// stack.json</div>
              {stackEntries.map(([key, values], i) => (
                <div key={key}>
                  <span className="key">&quot;{key}&quot;</span>: <span>[{values.map((v) => `"${v}"`).join(", ")}]</span>
                  {i < stackEntries.length - 1 ? "," : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="02 / live" title="Shipped & running" />
            <p>Products in production. Click through and try them.</p>
          </div>
          <div className="live-grid">{site.live.map((p) => <LiveCard key={p.name} p={p} />)}</div>
        </div>
      </section>

      <section id="building" className="section">
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="03 / in progress" title="On the workbench" />
            <p>What I&apos;m building right now, and what&apos;s left before launch.</p>
          </div>
          <div className="building-list">{site.building.map((b) => <BuildingCard key={b.name} b={b} />)}</div>
        </div>
      </section>

      <section id="timeline" className="section">
        <div className="wrap split">
          <SectionHead eyebrow="04 / timeline" title="Where I've been" />
          <div className="span2 timeline">
            {site.timeline.map((e) => (
              <div className="tl-row" key={e.role + e.org}>
                <div className="tl-when">{e.when}</div>
                <div className="tl-body">
                  <div className="tl-role">{e.role} <span>@ {e.org}</span></div>
                  <div className="tl-desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="wrap contact">
          <div className="eyebrow">05 / contact</div>
          <h2 className="contact-h">{site.contact.headline}</h2>
          <a className="email" href={`mailto:${site.contact.email}`}>{site.contact.email} →</a>
          <div className="socials">
            {site.contact.socials.map((s) => <a key={s.label} href={s.url} {...external}>{s.label} ↗</a>)}
          </div>
        </div>
        <footer className="foot">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.footerRight}</span>
        </footer>
      </section>
    </div>
  );
}
