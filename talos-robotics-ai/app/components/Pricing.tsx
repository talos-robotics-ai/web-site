import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: "var(--panel)" }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">Getting started</div>
          <h2>
            Start small.
            <br />
            Scale when you&apos;re ready.
          </h2>
          <p>
            Begin with a single task on a single robot, see it work in your own
            environment, then roll it out across the floor. Don&apos;t have a
            robot yet? We can supply one alongside the software.
          </p>
        </Reveal>
        <Reveal className="bm-grid">
          <div className="bm-card">
            <div className="bm-top">
              <div className="bi">✳</div>
              <div>
                <div className="label">Step one</div>
                <div className="stage">Try it</div>
              </div>
            </div>
            <div className="bm-body">
              <ul>
                <li>We set up one real task in your environment</li>
                <li>You see it run before committing further</li>
                <li>A fixed, upfront price with no surprises</li>
              </ul>
            </div>
          </div>
          <div className="bm-card">
            <div className="bm-top">
              <div className="bi">◧</div>
              <div>
                <div className="label">Step two</div>
                <div className="stage">Platform</div>
              </div>
            </div>
            <div className="bm-body">
              <ul>
                <li>Add new tasks without re-engineering</li>
                <li>Manage every robot from one dashboard</li>
                <li>Your robots keep improving with use</li>
              </ul>
            </div>
            <div className="bm-note">
              <b>Simple pricing:</b> an annual software subscription plus usage
              as you grow.
            </div>
          </div>
          <div className="bm-card">
            <div className="bm-top">
              <div className="bi">▮</div>
              <div>
                <div className="label">Step three</div>
                <div className="stage">Full deployment</div>
              </div>
            </div>
            <div className="bm-body">
              <ul>
                <li>Roll out across lines and sites</li>
                <li>Connect to the systems you already use</li>
                <li>Ongoing support and updates included</li>
              </ul>
            </div>
            <div className="bm-note">
              No robots yet? We can include the hardware, so you pay one simple
              subscription for everything.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
