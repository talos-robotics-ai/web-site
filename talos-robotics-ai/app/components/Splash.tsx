import TalosMark from "./TalosMark";

export default function Splash() {
  return (
    <main className="splash">
      <TalosMark className="splash-mark" />
      <h1 className="splash-word">Talos</h1>
      <p className="splash-line">
        What if the way we&rsquo;re <em>teaching robots</em>{" "}
        today is the reason they&rsquo;ll never <em>learn fast enough</em>?
      </p>
    </main>
  );
}
