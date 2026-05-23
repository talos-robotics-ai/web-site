import Reveal from "./Reveal";

export default function Roadmap() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--bg)" }} id="roadmap">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker" style={{ color: "var(--orange-soft)" }}>
            What&apos;s next
          </div>
          <h2 style={{ color: "var(--bg)" }}>
            Always getting
            <br />
            more capable.
          </h2>
        </Reveal>
        <Reveal className="road">
          <div className="ryear">
            <div className="yhead">
              <span className="y">Today</span>
              <span className="t">On the floor</span>
            </div>
            <div className="ybody">
              <div className="rstep">
                <div className="rh">Sim to real</div>
                <div className="rd">Proven tasks move onto real robots.</div>
              </div>
              <div className="rstep">
                <div className="rh">Robots that learn</div>
                <div className="rd">Every shift feeds data back in.</div>
              </div>
              <div className="rstep">
                <div className="rh">Skill library</div>
                <div className="rd">Drop ready-made behaviors onto new robots.</div>
              </div>
            </div>
          </div>
          <div className="ryear">
            <div className="yhead">
              <span className="y">Soon</span>
              <span className="t">Connected</span>
            </div>
            <div className="ybody">
              <div className="rstep">
                <div className="rh">Fits your systems</div>
                <div className="rd">Connects to the tools you already run.</div>
              </div>
              <div className="rstep">
                <div className="rh">One dashboard</div>
                <div className="rd">Manage the whole fleet from one place.</div>
              </div>
              <div className="rstep">
                <div className="rh">Private by design</div>
                <div className="rd">Shared learning. Your data stays yours.</div>
              </div>
            </div>
          </div>
          <div className="ryear">
            <div className="yhead">
              <span className="y">Ahead</span>
              <span className="t">At scale</span>
            </div>
            <div className="ybody">
              <div className="rstep">
                <div className="rh">Any robot, any site</div>
                <div className="rd">One platform across lines and locations.</div>
              </div>
              <div className="rstep">
                <div className="rh">Set up in minutes</div>
                <div className="rd">Adding robots and tasks gets faster.</div>
              </div>
              <div className="rstep">
                <div className="rh">Support that stays</div>
                <div className="rd">Updates and help included.</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
