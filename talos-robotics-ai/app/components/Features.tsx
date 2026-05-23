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
            Live today on real hardware. No &ldquo;coming soon&rdquo;.
          </p>
        </Reveal>
        <Reveal className="feat-grid">
          <div className="feat">
            <span className="live-flag">● Live</span>
            <div className="ico">▣</div>
            <div className="ftitle">The brains</div>
            <div className="fdesc">
              Plain-language commands become robot actions. Navigation by
              meaning, not coordinates.
            </div>
          </div>
          <div className="feat">
            <span className="live-flag">● Live</span>
            <div className="ico">◉</div>
            <div className="ftitle">The eyes</div>
            <div className="fdesc">
              Stereo vision the robot understands — it knows what you mean
              when you say &ldquo;the yellow ball.&rdquo;
            </div>
          </div>
          <div className="feat">
            <span className="live-flag">● Live</span>
            <div className="ico">▤</div>
            <div className="ftitle">The cockpit</div>
            <div className="fdesc">
              A live dashboard showing what the robot sees and is about to do.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
