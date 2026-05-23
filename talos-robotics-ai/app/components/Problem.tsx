import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">The problem</div>
          <h2>
            The robots are here.
            <br />
            The software isn&apos;t.
          </h2>
          <p>
            Humanoids ship by the thousands — brilliant hardware running
            nothing that can do a day&apos;s work.
          </p>
        </Reveal>
        <Reveal className="prob-grid">
          <div className="prob-cell">
            <div className="big">3×</div>
            <div className="cap">Floor space wasted</div>
            <div className="desc">
              Fixed cells eat 3× the footprint of a humanoid — and the day
              your product changes, they&apos;re scrap.
            </div>
          </div>
          <div className="prob-cell">
            <div className="big">0</div>
            <div className="cap">Robots that work out of the box</div>
            <div className="desc">
              Pretrained models aren&apos;t plug-and-play. Real work needs
              your task, your tools, your floor.
            </div>
          </div>
        </Reveal>
        <Reveal className="ready-row">
          <span className="tag on">Hardware ✓ solved</span>
          <span className="tag off">Software ✗ missing</span>
          <span className="tag off">→ that&apos;s where we come in</span>
        </Reveal>
      </div>
    </section>
  );
}
