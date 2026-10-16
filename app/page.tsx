import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, Circle, Code2, Eye, LockKeyhole, Menu, Radio, Shield, Terminal, Wallet } from 'lucide-react';

const steps = [
  { number: '01', title: 'Create a wallet', text: 'A local wallet gives your agent an identity it can use to request payments.' },
  { number: '02', title: 'Set boundaries', text: 'Define how much an agent is allowed to spend before it can act.' },
  { number: '03', title: 'Pay privately', text: 'Send a payment without publishing who was paid, the amount, or the reason.' },
];

const docs = [
  { icon: BookOpen, eyebrow: 'START HERE', title: 'Introduction', text: 'What Provous is, who it is for, and the problem it is built to solve.', href: '/docs' },
  { icon: Shield, eyebrow: 'THE BASICS', title: 'Concepts', text: 'Private payments, agent spending, and the ideas behind the project.', href: '/docs/concepts' },
  { icon: Terminal, eyebrow: 'SETUP', title: 'Install & quickstart', text: 'The guide structure is ready. Verified commands will follow the tool contract.', href: '/docs/install' },
  { icon: Eye, eyebrow: 'PRIVACY', title: 'What stays private', text: 'A careful account of the privacy goal and the guarantees still to verify.', href: '/docs/privacy' },
  { icon: Code2, eyebrow: 'REFERENCE', title: 'Command reference', text: 'A source of truth for every flag and output, once the CLI is available.', href: '/docs/commands' },
  { icon: Wallet, eyebrow: 'IN PRACTICE', title: 'Guides & FAQ', text: 'Practical workflows and answers will be added alongside working commands.', href: '/docs/guides' },
];

function Brand() {
  return <Link className="brand" href="/" aria-label="Provous home"><span className="brand-mark">P</span><span>PROVOUS</span><span className="brand-version">DEVNET NOTES</span></Link>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how">How it works</a><a href="#docs">Documentation</a><a href="https://thezecathon.com/" target="_blank" rel="noreferrer">Zecathon <ArrowUpRight size={13} /></a>
        </nav>
        <div className="header-actions"><Link className="button button-small" href="/docs">Read the docs <ArrowRight size={14} /></Link><details className="mobile-menu"><summary className="menu-button" aria-label="Open navigation"><Menu size={20} /></summary><nav aria-label="Mobile navigation"><a href="#how">How it works</a><a href="#docs">Documentation</a><a href="https://thezecathon.com/" target="_blank" rel="noreferrer">Zecathon <ArrowUpRight size={13}/></a></nav></details></div>
      </header>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> PRIVATE PAYMENT RAILS <span className="eyebrow-divider">/</span> BUILT ON ZCASH</div>
          <h1>A private way<br /><span className="muted-title">for agents</span><br /><span className="accent-title">to pay.</span></h1>
          <p className="hero-description">Provous is a privacy wallet designed for AI agents to make payments without publishing who they paid, how much, or why.</p>
          <div className="hero-ctas"><Link className="button" href="/docs">Explore the docs <ArrowRight size={16} /></Link><Link className="button button-quiet" href="/docs/privacy">Privacy notes <ArrowRight size={14} /></Link></div>
          <div className="hero-footnote"><LockKeyhole size={13} /><span>Hackathon project in active development</span><span className="footnote-sep">·</span><span>Core &amp; Tooling track</span></div>
        </div>
        <div className="hero-visual" aria-label="Provous project status">
          <div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/>
          <div className="privacy-core"><div className="core-shield"><Shield size={34} strokeWidth={1.3} /></div><span className="core-label">PRIVACY IS THE GOAL</span><span className="core-caption">PAYMENTS FOR<br />AUTONOMOUS SOFTWARE</span></div>
          <div className="orbit-chip chip-one"><span className="chip-icon"><Wallet size={14}/></span><span>Agent wallet</span><span className="chip-state">CONCEPT</span></div>
          <div className="orbit-chip chip-two"><span className="chip-icon"><Eye size={14}/></span><span>Payment details</span><span className="chip-state private-state">GOAL</span></div>
          <div className="visual-coordinates">ZCASH <span>·</span> SHIELDED PAYMENTS</div>
          <div className="visual-build"><span className="status-dot"/> DESIGN NOTES <span className="build-divider">/</span> IMPLEMENTATION IN PROGRESS</div>
        </div>
        <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={13}/></div>
      </section>

      <div className="signal-strip"><div className="signal-inner"><div><span className="signal-label">THE PROBLEM</span><span>Agent payments expose the trail.</span></div><span className="signal-cross">✳</span><div><span className="signal-label">THE IDEA</span><span>Give software a private way to pay.</span></div><span className="signal-cross">✳</span><div><span className="signal-label">THE PRINCIPLE</span><span>Privacy without a dashboard.</span></div></div></div>

      <section className="section-wrap problem-section">
        <div className="section-kicker">01 <span>WHY PROVOUS</span></div>
        <div className="problem-grid"><h2>Autonomous agents are becoming economic actors.</h2><div><p>Every public payment can reveal a pattern: what an agent buys, who it works with, and what it is trying to do. That trail may expose more than the transaction itself.</p><p>Provous explores a different default: privacy infrastructure designed for software that acts on its own.</p></div></div>
        <div className="principle-bar"><div className="principle-icon"><LockKeyhole size={17}/></div><div><span className="principle-label">A CLEAR DESIGN GOAL</span><p>Make it possible for an AI agent to pay without putting its counterpart, amount, and intent on public display.</p></div><span className="principle-mark">P<span>.</span></span></div>
      </section>

      <section className="section-wrap demo-section">
        <div className="section-heading"><div><div className="section-kicker">02 <span>SEE THE TOOL</span></div><h2>Built for the terminal.</h2><p>The interface is a command line. The proof should be one, too.</p></div><div className="recording-badge"><span className="record-dot"/> RECORDING <span className="badge-divider">/</span> PENDING FIRST TESTNET BUILD</div></div>
        <div className="terminal-window">
          <div className="terminal-top"><div className="terminal-brand"><span className="terminal-symbol">›_</span><span>PROVOUS</span><span className="terminal-path">/ demo</span></div><div className="terminal-controls"><span/><span/><span/></div></div>
          <div className="terminal-body"><div className="terminal-placeholder-icon"><Radio size={22}/></div><p className="terminal-placeholder-title">A real transaction belongs here.</p><p className="terminal-placeholder-text">This space is reserved for a short recording of the actual CLI on testnet. It will be added when the tool is ready, using test wallets only.</p><div className="terminal-placeholder-footer"><span><Circle size={6} fill="currentColor"/> NO MOCK OUTPUT</span><span className="terminal-footer-line"/><span>RECORDING UNDER 30 SECONDS</span></div></div>
          <div className="terminal-bottom"><span>PROVOUS / TERMINAL PREVIEW</span><span>WAITING FOR CORE BUILD <span className="cursor">▋</span></span></div>
        </div>
        <p className="demo-caption"><span className="caption-dash"/> The live recording will replace this note when the payment flow is confirmed.</p>
      </section>

      <section className="section-wrap how-section" id="how">
        <div className="section-heading"><div><div className="section-kicker">03 <span>THE FLOW</span></div><h2>Three steps. No dashboard.</h2><p>Designed to fit the way autonomous software already works.</p></div><span className="section-aside">A SIMPLE MODEL<br/>FOR PRIVATE PAYMENTS</span></div>
        <div className="steps-grid">{steps.map((step, i) => <article className="step-card" key={step.number}><div className="step-card-top"><span className="step-number">{step.number}</span><span className="step-icon">{i === 0 ? <Wallet size={17}/> : i === 1 ? <Shield size={17}/> : <ArrowRight size={17}/>}</span></div><h3>{step.title}</h3><p>{step.text}</p><div className="step-connector">{i < 2 && <span/>}</div></article>)}</div>
        <p className="accuracy-note"><span className="status-dot"/> This describes the intended flow. Exact setup, commands, and safeguards will be documented against the working tool.</p>
      </section>

      <section className="docs-section" id="docs"><div className="section-wrap docs-wrap"><div className="section-heading"><div><div className="section-kicker">04 <span>THE FIELD GUIDE</span></div><h2>Documentation for builders.</h2><p>Understand the idea today. Follow verified commands as they land.</p></div><Link className="text-link" href="/docs">Open all docs <ArrowRight size={15}/></Link></div><div className="docs-grid">{docs.map(({icon: Icon, eyebrow, title, text, href}, i) => <Link className="doc-card" href={href} key={title}><div className="doc-card-top"><span className="doc-icon"><Icon size={16}/></span><span className="doc-index">0{i+1}</span></div><span className="doc-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{text}</p><span className="doc-arrow"><ArrowUpRight size={15}/></span></Link>)}</div><div className="docs-note"><span className="note-icon"><Check size={15}/></span><p><strong>Accuracy over aspiration.</strong> Commands, outputs, and privacy guarantees are published only after they can be checked against the tool.</p><span className="note-index">DOCS / POLICY 001</span></div></div></section>

      <section className="section-wrap audience-section"><div className="section-heading"><div><div className="section-kicker">05 <span>WHO IT'S FOR</span></div><h2>For people building<br/>software that acts.</h2></div><p className="audience-lede">Privacy infrastructure for agents, and for the people responsible for them.</p></div><div className="audience-grid"><article><span className="audience-number">01</span><Code2 size={19}/><h3>Agent builders</h3><p>Give your agent a way to make payments as part of a real workflow.</p></article><article><span className="audience-number">02</span><Radio size={19}/><h3>Teams running agents</h3><p>Explore payment flows where software can act without exposing every move.</p></article><article><span className="audience-number">03</span><Wallet size={19}/><h3>Privacy-minded users</h3><p>Follow an open experiment in making digital payments less revealing.</p></article></div></section>

      <section className="closing-section"><div className="closing-glow"/><div className="section-wrap closing-inner"><div className="closing-icon"><Shield size={24}/></div><div className="section-kicker">THE NEXT STEP</div><h2>See what private<br/>agent payments could be.</h2><p>Start with the project overview, explore the design, and follow along as the working CLI takes shape.</p><Link className="button" href="/docs">Read the documentation <ArrowRight size={15}/></Link><span className="closing-footnote">NO ACCOUNT NEEDED <span>·</span> NO TRACKING</span></div></section>

      <footer className="site-footer"><div className="footer-main"><Brand/><p>Private payment infrastructure<br/>for autonomous software.</p><div className="footer-links"><Link href="/docs">Documentation</Link><a href="https://thezecathon.com/" target="_blank" rel="noreferrer">Zecathon <ArrowUpRight size={12}/></a></div><div className="footer-license">SOURCE REPO<br/><span>LINK TO BE ADDED</span></div></div><div className="footer-bottom"><span>© 2026 PROVOUS <span className="footer-dot">●</span> BUILT FOR ZECATHON</span><span>NO ANALYTICS. NO TRACKERS.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
