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
            <h3>Multi-modal. Multi-robot.</h3>
            <p>
              Our models are built to be multi-modal — vision, language and
              action — and to extend across any humanoid platform.
            </p>
            <p>
              Bring your own robot or add one later. Every run feeds back in,
              so the system gets sharper the more it works.
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
