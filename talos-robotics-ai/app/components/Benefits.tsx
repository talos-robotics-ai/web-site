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
              Our software is hardware-agnostic, so you&apos;re never tied to a
              single manufacturer. Bring your own robot or add one later — the
              platform stays the same.
            </p>
            <p>
              Set up a task by describing it, watch it run safely in
              simulation, and only then send it to the floor. Every run feeds
              back in, so your robots get better the more they work.
            </p>
          </div>
          <div className="market-copy">
            <h3>No robotics team required.</h3>
            <p>
              You shouldn&apos;t need a lab full of PhDs to put a robot to
              work. We handle the hard parts — perception, planning, safety —
              so your existing team can set up and run real tasks themselves.
            </p>
            <p>
              From first idea to a robot doing the job, the whole loop lives in
              one place.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
