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
            One task, one robot, your environment. Then scale. No robot? We
            can supply one.
          </p>
        </Reveal>
        <Reveal className="bm-grid">
          <div className="bm-card">
            <div className="bm-top">
              <div className="bi">{"✳︎"}</div>
              <div>
                <div className="label">Step one</div>
                <div className="stage">Try it</div>
              </div>
            </div>
            <div className="bm-body">
              <ul>
                <li>One real task in your environment</li>
                <li>See it run before committing</li>
                <li>Fixed upfront price</li>
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
                <li>One dashboard for every robot</li>
                <li>Robots keep improving with use</li>
              </ul>
            </div>
            <div className="bm-note">
              <b>Simple pricing:</b> annual subscription plus usage.
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
                <li>Connects to your existing systems</li>
                <li>Support and updates included</li>
              </ul>
            </div>
            <div className="bm-note">
              No robots? We include the hardware in one subscription.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
