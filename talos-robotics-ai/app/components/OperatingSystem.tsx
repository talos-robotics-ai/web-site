import Reveal from "./Reveal";

export default function OperatingSystem() {
  return (
    <section id="os">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">How it works</div>
          <h2>
            One place to teach,
            <br />
            test, and deploy.
          </h2>
          <p>
            Build a skill or just describe the task. TalOS plans it, runs it
            in simulation, then ships it to the robot.
          </p>
        </Reveal>

        <Reveal className="os-mock">
          <div className="os-bar">
            <div className="left">
              <span style={{ color: "var(--orange)", fontWeight: 800 }}>
                Tal<span style={{ color: "var(--ink)" }}>OS</span>
              </span>
              <span className="crumb">
                Projects / <b>Humanoid</b>
              </span>
            </div>
            <div className="right">
              <span className="pill dot">Saved</span>
              <span className="pill">Docs</span>
              <span className="pill live">▶ Start Training</span>
            </div>
          </div>
          <div className="os-cols">
            <div className="os-col">
              <h4>Flow</h4>
              <div className="csub">Build skills step by step</div>
              <div className="flow-node start">START</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node">
                <b>Detect Object</b>
                <span>Target: yellow ball</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node">
                <b>Move to Target</b>
                <span>Waypoint: near yellow ball</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node">
                <b>Move to Target</b>
                <span>Waypoint: [1.55, 0.0]</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node end">END</div>
            </div>
            <div className="os-col">
              <h4>Chat</h4>
              <div className="csub">Describe a task in plain language</div>
              <div className="chat-msg bot">Chat cleared. How can I help?</div>
              <div className="chat-msg user">
                navigate near the yellow ball without colliding with the table
              </div>
              <div className="chat-msg bot">
                OK. I&apos;ve added steps to detect the yellow ball, move near
                it, and then proceed toward the table.
              </div>
            </div>
            <div className="os-col">
              <h4>Simulation</h4>
              <div className="csub">Live simulation feed</div>
              <div className="sim">
                <img
                  src="/assets/sim.png"
                  alt="Humanoid robot in live simulation approaching a table with objects"
                />
                <span className="live-pill">Live</span>
              </div>
              <div
                style={{ fontSize: 11, color: "#aaa", marginTop: 10 }}
              >
                Live simulation · t = 0.000s
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
