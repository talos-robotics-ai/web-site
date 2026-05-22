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
                <div className="rh">From simulation to real work</div>
                <div className="rd">
                  Tasks proven in simulation move onto real robots running real
                  jobs.
                </div>
              </div>
              <div className="rstep">
                <div className="rh">Robots that learn</div>
                <div className="rd">
                  Every shift feeds data back in, so your robots keep getting
                  sharper.
                </div>
              </div>
              <div className="rstep">
                <div className="rh">A growing skill library</div>
                <div className="rd">
                  Ready-made behaviors you can drop onto a new robot instead of
                  starting from scratch.
                </div>
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
                <div className="rd">
                  Connects to the inventory, planning and tracking tools you
                  already run.
                </div>
              </div>
              <div className="rstep">
                <div className="rh">One dashboard, every robot</div>
                <div className="rd">
                  Manage a whole fleet from a single place, wherever the robots
                  are.
                </div>
              </div>
              <div className="rstep">
                <div className="rh">Private by design</div>
                <div className="rd">
                  Robots improve from shared learning while your data stays
                  yours.
                </div>
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
                <div className="rd">
                  The same software running across lines, buildings and
                  locations.
                </div>
              </div>
              <div className="rstep">
                <div className="rh">Set up in minutes</div>
                <div className="rd">
                  Adding a new robot or task gets faster every release.
                </div>
              </div>
              <div className="rstep">
                <div className="rh">Support that stays</div>
                <div className="rd">
                  Updates and help included for as long as you run with us.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
