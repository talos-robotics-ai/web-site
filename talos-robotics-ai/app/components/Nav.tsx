export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="wrap nav-inner">
        <div className="nav-links">
          <a href="#problem">Why</a>
          <a href="#os">How it works</a>
          <a href="#features">Platform</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="logo">
          <span className="ast">{"✳︎"}</span>TALOS ROBOTICS
        </div>
        <a href="#contact" className="nav-cta">
          Get started
        </a>
      </div>
    </nav>
  );
}
