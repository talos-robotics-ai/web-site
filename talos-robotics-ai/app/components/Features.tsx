import Reveal from "./Reveal";

export default function Features() {
  return (
    <section style={{ background: "var(--panel)" }} id="features">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">Already working</div>
          <h2>
            This isn&apos;t a pitch.
            <br />
            It runs today.
          </h2>
          <p>
            Everything below is live right now, validated in real time on real
            hardware. No &ldquo;coming soon&rdquo; asterisks.
          </p>
        </Reveal>
        <Reveal className="feat-grid">
          <div className="feat">
            <span className="live-flag">● Live</span>
            <div className="ico">▣</div>
            <div className="ftitle">The brains</div>
            <div className="fdesc">
              An AI layer that turns plain-language commands into robot actions
              and lets the robot navigate by meaning, not coordinates — proven
              in real-time simulation.
            </div>
          </div>
          <div className="feat">
            <span className="live-flag">● Live</span>
            <div className="ico">◉</div>
            <div className="ftitle">The eyes</div>
            <div className="fdesc">
              Stereo vision the robot actually understands — it sees the scene,
              recognizes what matters, and figures out what you meant when you
              said &ldquo;the yellow ball.&rdquo;
            </div>
          </div>
          <div className="feat">
            <span className="live-flag">● Live</span>
            <div className="ico">▤</div>
            <div className="ftitle">The cockpit</div>
            <div className="fdesc">
              A live dashboard showing exactly what the robot sees — camera
              feeds, segmentation, pose, scene boxes — so you&apos;re never
              guessing what it&apos;s about to do.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
