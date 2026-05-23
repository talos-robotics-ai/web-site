export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-tag">The operating system for humanoid robots</div>
        <h1>
          Get a humanoid
          <br />
          to work in days<span className="ast">{"✳︎"}</span>
        </h1>
        <p className="hero-sub">
          <b>TalOS turns any humanoid into a working teammate.</b> Describe the
          job, see it run in simulation, deploy on your floor.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-fill">
            Get started
          </a>
          <a href="#os" className="btn btn-line">
            See how it works
          </a>
        </div>
        <div className="hero-stats">
          <div className="hstat">
            <div className="n">Any</div>
            <div className="l">Any humanoid robot</div>
          </div>
          <div className="hstat">
            <div className="n">Plain</div>
            <div className="l">Plain-language setup</div>
          </div>
          <div className="hstat">
            <div className="n">Live</div>
            <div className="l">Test before deploy</div>
          </div>
        </div>
      </div>
    </header>
  );
}
