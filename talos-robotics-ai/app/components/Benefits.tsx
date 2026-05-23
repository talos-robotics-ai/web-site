import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="sec-kicker">Why teams choose us</div>
          <h2>
            Built to make
            <br />
            robots earn their keep.
          </h2>
        </Reveal>
        <Reveal className="market-flex">
          <div className="market-copy">
            <h3>Works with the robot you have.</h3>
            <p>
              Hardware-agnostic. Bring your own humanoid or add one later — the
              platform stays the same.
            </p>
            <p>
              Every run feeds back in, so your robots get better the more
              they work.
            </p>
          </div>
          <div className="market-copy">
            <h3>No robotics team required.</h3>
            <p>
              We handle perception, planning and safety. Your team sets up and
              runs tasks themselves.
            </p>
            <p>From idea to a robot doing the job — one place.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
