import Reveal from "./Reveal";

export default function Lab() {
  return (
    <section id="lab" className="lab-band">
      <div className="wrap">
        <Reveal className="lab-shot">
          <img
            src="/assets/lab.jpg"
            alt="The MADE Competence Center Industry 4.0 floor where we develop and test"
          />
          <span className="badge">
            Our lab — in collaboration with MADE Competence Center 4.0
          </span>
        </Reveal>
      </div>
    </section>
  );
}
