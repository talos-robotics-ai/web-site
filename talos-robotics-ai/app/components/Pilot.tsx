import Reveal from "./Reveal";

export default function Pilot() {
  return (
    <section className="pilot" id="results">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">In the real world</div>
          <h2>
            Already running
            <br />
            on a real factory floor.
          </h2>
          <p>
            Our software is doing a real production task in a working
            industrial plant — not a demo, not a lab.
          </p>
        </Reveal>
        <Reveal>
          <div className="pilot-top">
            <div className="pcell">
              <div className="pk">Setting</div>
              <div className="pv">Factory</div>
            </div>
            <div className="pcell">
              <div className="pk">Industry</div>
              <div className="pv">Manufacturing</div>
            </div>
            <div className="pcell">
              <div className="pk">Status</div>
              <div className="pv">Live</div>
            </div>
          </div>
          <div className="pilot-bot">
            <div className="pcell2">
              <div className="ph">✳ The task</div>
              <div className="pd">
                A real production job, set up and running inside a live
                industrial environment.
              </div>
            </div>
            <div className="pcell2">
              <div className="ph">◧ Done by a robot</div>
              <div className="pd">
                The task runs end to end on a humanoid, handled entirely by the
                platform.
              </div>
            </div>
            <div className="pcell2">
              <div className="ph">▮ Getting better</div>
              <div className="pd">
                Real-world use feeds back in, improving reliability the longer
                it runs.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
