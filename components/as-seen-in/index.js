import styles from './styles.module.scss';

const logos = [
  {
      "logo": "/logos/southfarthing-chronicle.svg",
      "name": "The Southfarthing Chronicle"
  },
  {
      "logo": "/logos/the-valinor-voice.svg",
      "name": "The Valinor Voice"
  },
  {
      "logo": "/logos/hobbit-times.svg",
      "name": "Hobbit Times"
  },
  {
      "logo": "/logos/the-gondor-gazette.svg",
      "name": "The Gondor Gazette"
  },
  {
      "logo": "/logos/hobbiton-herald.svg",
      "name": "Hobbiton Herald"
  },
  {
      "logo": "/logos/ent-moot.svg",
      "name": "Ent Moot"
  },
  {
      "logo": "/logos/the-numenor.svg",
      "name": "The Númenor"
  },
  {
      "logo": "/logos/the-orkland-tribune.svg",
      "name": "The Orkland Tribune"
  },
  {
      "logo": "/logos/the-rivendell-reporter.svg",
      "name": "The Rivendell Reporter"
  },
  {
      "logo": "/logos/eye-of-sauron.svg",
      "name": "Eye oof Sauron"
  }
]

function AsSeenIn() {
  return (
      <div>
        <h2>As Seen in</h2>
        <ul className={styles.logos}>

          {logos.map((logo, id) => (
            <li key={id}>
              <img src={logo.logo} alt={logo.name} width="100%" />
              <span>{logo.name}</span>
            </li>
          ))}

          {/* <li>The Rohan Report</li> */}
          {/* <li>The Mordor Monitor</li> */}
          {/* <li>The Middle Earth Times</li> */}
          {/* <li>The Bree Bugle</li> */}
        </ul>
      </div>
  );
}

export default AsSeenIn;