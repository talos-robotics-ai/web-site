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
            Traditional automation can&apos;t bend — change the line and you
            rebuild the cell. Humanoids promise flexibility instead, and
            they&apos;re shipping by the thousands. But every one arrives as
            brilliant hardware running nothing that can actually do a
            day&apos;s work.
          </p>
        </Reveal>
        <Reveal className="prob-grid">
          <div className="prob-cell">
            <div className="big">3×</div>
            <div className="cap">More floor space, gone</div>
            <div className="desc">
              A fixed automation cell eats up to three times the footprint of a
              flexible humanoid workstation — and the day your product changes,
              it&apos;s scrap.
            </div>
          </div>
          <div className="prob-cell">
            <div className="big">0</div>
            <div className="cap">Robots that work out of the box</div>
            <div className="desc">
              Pretrained models aren&apos;t plug-and-play. To do real work, a
              robot needs data from your task, your tools, your floor.
              That&apos;s the gap we close.
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
