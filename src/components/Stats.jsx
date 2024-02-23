export default function Stats({ text }) {
  const numberOfCharacters = text.length;
  const instagramCharactersLeft = numberOfCharacters > 280 ? 0 : 280 - numberOfCharacters;
  const instagramLimit = instagramCharactersLeft === 0;
  const facebookCharactersLeft = numberOfCharacters > 2200 ? 0 : 2200 - numberOfCharacters;
  const facebookLimit = facebookCharactersLeft === 0;
  const numberOfWords = text.split(' ').filter((word) => word !== "").length;

  return (
    <section className="stats">
      <Stat number={numberOfWords} heading="Words" />
      <Stat number={numberOfCharacters} heading="Characters" />
      <Stat number={instagramCharactersLeft} heading="Instagram" limitReached={instagramLimit} />
      <Stat number={facebookCharactersLeft} heading="Facebook" limitReached={facebookLimit} />
    </section>
  );
}

function Stat({ number, heading, limitReached }) {
  return (
    <section className="stat">
      <span className={`stat__number ${limitReached ? 'stat__number--limit' : ''}`}>{number}</span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}