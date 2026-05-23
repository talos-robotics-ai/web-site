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
              <li>Hardware-agnostic — works with humanoids from different makers.</li>
              <li>Switch or add hardware later, no lock-in.</li>
              <li>No robot? We can supply one.</li>
            </ul>
          </div>
          <div className="why-card">
            <h4>
              <span className="qm">?</span> Do I need a robotics team?
            </h4>
            <ul>
              <li>No. We handle perception, planning and safety.</li>
              <li>Set up tasks by describing them.</li>
              <li>Test in simulation before anything runs for real.</li>
            </ul>
          </div>
          <div className="why-card">
            <h4>
              <span className="qm">?</span> Is it safe around people?
            </h4>
            <ul>
              <li>Safety trained for your space, not a generic one.</li>
              <li>Every task validated in simulation first.</li>
              <li>Live dashboard shows what the robot is about to do.</li>
              <li>You stay in control — stop or adjust anytime.</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
