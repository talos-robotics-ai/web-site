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
          <p>Real production task. Working industrial plant. Not a demo.</p>
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
              <div className="ph">{"✳︎ The task"}</div>
              <div className="pd">
                Real production job, running in a live industrial environment.
              </div>
            </div>
            <div className="pcell2">
              <div className="ph">◧ Done by a robot</div>
              <div className="pd">
                End to end on a humanoid, run entirely by the platform.
              </div>
            </div>
            <div className="pcell2">
              <div className="ph">▮ Getting better</div>
              <div className="pd">
                Real-world use improves reliability the longer it runs.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
