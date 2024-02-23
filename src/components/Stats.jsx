export default function Stats({ text }) {
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = numberOfCharacters > 280 ? 0 : 280 - numberOfCharacters;
  const facebookCharactersLeft = numberOfCharacters > 2200 ? 0 : 2200 - numberOfCharacters;
  const numberOfWords = text.split(' ').filter((word) => word !== "").length;

  return (
    <section className="stats">
      <Stat number={numberOfWords} heading="Words" />
      <Stat number={numberOfCharacters} heading="Characters" />
      <Stat number={instagramCharactersLeft} heading="Instagram" />
      <Stat number={facebookCharactersLeft} heading="Facebook" />
    </section>
  );
}

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}