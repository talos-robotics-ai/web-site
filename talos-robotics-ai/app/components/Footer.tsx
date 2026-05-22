export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="logo">
          <span className="ast" style={{ color: "var(--orange)" }}>
            ✳
          </span>
          TALOS ROBOTICS
        </div>
        <div className="foot-links">
          <a href="#os">How it works</a>
          <a href="#features">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div style={{ color: "var(--grey)" }}>Make it simple.</div>
      </div>
    </footer>
  );
}
