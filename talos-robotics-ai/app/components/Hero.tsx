export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-tag">The operating system for humanoid robots</div>
        <h1>
          Put a humanoid
          <br />
          to work in days<span className="ast">✳</span>
        </h1>
        <p className="hero-sub">
          You bought the robot. We make it useful.{" "}
          <b>TalOS turns any humanoid into a working teammate</b> — describe the
          job in plain language, watch it run in simulation, then deploy it on
          your floor. No robotics PhD required.
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
            <div className="l">Works with any humanoid robot</div>
          </div>
          <div className="hstat">
            <div className="n">Plain</div>
            <div className="l">Set up tasks in plain language</div>
          </div>
          <div className="hstat">
            <div className="n">Live</div>
            <div className="l">Test in simulation before you deploy</div>
          </div>
        </div>
      </div>
    </header>
  );
}
