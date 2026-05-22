import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">Common questions</div>
          <h2>Good to know.</h2>
        </Reveal>
        <Reveal className="why-grid">
          <div className="why-card">
            <h4>
              <span className="qm">?</span> Does it work with my robot?
            </h4>
            <ul>
              <li>
                The software is hardware-agnostic and works with humanoid
                robots from different makers.
              </li>
              <li>
                You&apos;re never locked to a single manufacturer — add or
                switch hardware later.
              </li>
              <li>
                Don&apos;t have a robot yet? We can supply one alongside the
                software.
              </li>
              <li>Tell us what you&apos;ve got and we&apos;ll confirm compatibility.</li>
            </ul>
          </div>
          <div className="why-card">
            <h4>
              <span className="qm">?</span> Do I need a robotics team?
            </h4>
            <ul>
              <li>No. We handle perception, planning and safety so you don&apos;t have to.</li>
              <li>Tasks are set up by describing them in plain language.</li>
              <li>You test everything in simulation before anything runs for real.</li>
              <li>Your existing team can manage day-to-day with no special training.</li>
            </ul>
          </div>
          <div className="why-card">
            <h4>
              <span className="qm">?</span> Is it safe around people?
            </h4>
            <ul>
              <li>Safety is trained for your specific space, not a generic one.</li>
              <li>Every task is validated in simulation before it touches the floor.</li>
              <li>
                The live dashboard shows exactly what the robot sees and is
                about to do.
              </li>
              <li>You stay in control and can stop or adjust at any time.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
