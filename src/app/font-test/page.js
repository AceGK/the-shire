'use client';

import styles from './styles.module.scss';

export default function FontTestPage() {
  // Basic Latin uppercase
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Basic Latin lowercase
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

  // Numbers
  const numbers = '0123456789';

  // Basic punctuation
  const basicPunctuation = '.,;:!?\'"-()[]{}…–—·•';

  // Currency & symbols
  const currencySymbols = '$€£¥¢₹₽₩฿₿@#%^&*+=<>/\\|~`';

  // Math symbols
  const mathSymbols = '+-×÷=≠≈≤≥±∞√∑∏∫∂πΩ°';

  // Quotes & apostrophes
  const quotes = '""\'\'‚„‹›«»';

  // Arrows & pointers
  const arrows = '←→↑↓↔↕⇐⇒⇑⇓►▼◄▲▶◀';

  // Stars & decorative
  const decorative = '★☆✦✧✩✪✫✬✭✮✯✰❋✻✼✽✾✿❀❁❂❃❄❅❆❇❈❉❊';

  // Hearts & misc
  const hearts = '♥♡❤❥❣💕❦❧';

  // Musical notes
  const musical = '♩♪♫♬♭♮♯';

  // Bullets & markers
  const bullets = '●○◉◎◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡';

  // Geometric shapes
  const shapes = '■□▪▫▬▭▮▯▰▱▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊○◌◍◎●◐◑';

  // Floral & ornaments
  const ornaments = '❦❧☙❡❢❣❤❥❦❧✁✂✃✄☎✆☏✇✈✉☛☞☟✌✍✎✏✐✑✒';

  // Dingbats
  const dingbats = '✓✔✕✖✗✘✙✚✛✜✝✞✟✠✡✢✣✤✥✧✨✩✪✫✬✭✮✯✰';

  // Crosses & religious
  const crosses = '†‡✝✞✟✠☨☩☪☫☬☭☮☯';

  // Zodiac
  const zodiac = '♈♉♊♋♌♍♎♏♐♑♒♓';

  // Chess & games
  const games = '♔♕♖♗♘♙♚♛♜♝♞♟♠♡♢♣♤♥♦♧';

  // Extended Latin (accented)
  const extendedUpper = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞ';
  const extendedLower = 'àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ';

  // More extended Latin
  const moreExtended = 'ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž';

  // Ligatures (common in display fonts)
  const ligatures = 'ff fi fl ffi ffl ft st ct sp';

  // Fractions
  const fractions = '½⅓⅔¼¾⅛⅜⅝⅞';

  // Superscripts & subscripts
  const superSub = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎';

  // Ampersands (fonts often have decorative versions)
  const ampersands = '&';

  // Common ligature combinations to test
  const ligatureCombos = ['Th', 'Qu', 'ff', 'fi', 'fl', 'ffi', 'ffl', 'ct', 'st', 'sp', 'ft'];

  // OpenType stylistic alternates test words
  const testWords = [
    'The Shire',
    'Hobbiton',
    'Pipe-Weed',
    'Longbottom Leaf',
    'Old Toby',
    'Fellowship',
    'QUALITY',
    'Established 1420',
    'Fine Tobacco',
    'Southfarthing',
  ];

  // Unicode Private Use Area (fonts sometimes put special glyphs here)
  const privateUse = [];
  for (let i = 0xE000; i <= 0xE0FF; i++) {
    privateUse.push(String.fromCodePoint(i));
  }

  const CharacterGrid = ({ title, chars, id }) => (
    <section className={styles.section} id={id}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {chars.split('').map((char, i) => (
          <div key={i} className={styles.charBox}>
            <span className={styles.char}>{char}</span>
            <span className={styles.code}>U+{char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}</span>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Kereru Font Character Test</h1>
        <p>Testing all available characters in the Kereru Bold font</p>
      </header>

      <nav className={styles.nav}>
        <a href="#uppercase">Uppercase</a>
        <a href="#lowercase">Lowercase</a>
        <a href="#numbers">Numbers</a>
        <a href="#punctuation">Punctuation</a>
        <a href="#currency">Currency</a>
        <a href="#math">Math</a>
        <a href="#quotes">Quotes</a>
        <a href="#arrows">Arrows</a>
        <a href="#decorative">Decorative</a>
        <a href="#shapes">Shapes</a>
        <a href="#dingbats">Dingbats</a>
        <a href="#extended">Extended Latin</a>
        <a href="#ligatures">Ligatures</a>
        <a href="#words">Test Words</a>
        <a href="#private">Private Use</a>
        <a href="#sizes">Sizes</a>
      </nav>

      <CharacterGrid title="Uppercase Letters" chars={uppercaseLetters} id="uppercase" />
      <CharacterGrid title="Lowercase Letters" chars={lowercaseLetters} id="lowercase" />
      <CharacterGrid title="Numbers" chars={numbers} id="numbers" />
      <CharacterGrid title="Basic Punctuation" chars={basicPunctuation} id="punctuation" />
      <CharacterGrid title="Currency & Symbols" chars={currencySymbols} id="currency" />
      <CharacterGrid title="Math Symbols" chars={mathSymbols} id="math" />
      <CharacterGrid title="Quotes & Apostrophes" chars={quotes} id="quotes" />
      <CharacterGrid title="Arrows & Pointers" chars={arrows} id="arrows" />
      <CharacterGrid title="Stars & Decorative" chars={decorative} id="decorative" />
      <CharacterGrid title="Hearts & Misc" chars={hearts} id="hearts" />
      <CharacterGrid title="Musical Notes" chars={musical} id="musical" />
      <CharacterGrid title="Bullets & Markers" chars={bullets} id="bullets" />
      <CharacterGrid title="Geometric Shapes" chars={shapes} id="shapes" />
      <CharacterGrid title="Ornaments" chars={ornaments} id="ornaments" />
      <CharacterGrid title="Dingbats" chars={dingbats} id="dingbats" />
      <CharacterGrid title="Crosses & Religious" chars={crosses} id="crosses" />
      <CharacterGrid title="Zodiac" chars={zodiac} id="zodiac" />
      <CharacterGrid title="Games & Chess" chars={games} id="games" />
      <CharacterGrid title="Extended Latin (Uppercase)" chars={extendedUpper} id="extended" />
      <CharacterGrid title="Extended Latin (Lowercase)" chars={extendedLower} id="extended-lower" />
      <CharacterGrid title="More Extended Latin" chars={moreExtended} id="more-extended" />
      <CharacterGrid title="Fractions" chars={fractions} id="fractions" />
      <CharacterGrid title="Superscripts & Subscripts" chars={superSub} id="supersub" />

      <section className={styles.section} id="ligatures">
        <h2>Ligatures & Combinations</h2>
        <p className={styles.note}>Common ligature combinations - check if these render differently than individual letters:</p>
        <div className={styles.ligatureGrid}>
          {ligatureCombos.map((combo, i) => (
            <div key={i} className={styles.ligatureBox}>
              <span className={styles.ligature}>{combo}</span>
              <span className={styles.ligatureLabel}>{combo}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="ampersand">
        <h2>Ampersand Variations</h2>
        <p className={styles.note}>Display fonts often have decorative ampersands:</p>
        <div className={styles.ampersandDisplay}>
          <span className={styles.bigAmpersand}>&amp;</span>
        </div>
      </section>

      <section className={styles.section} id="words">
        <h2>Test Words & Phrases</h2>
        <div className={styles.wordList}>
          {testWords.map((word, i) => (
            <div key={i} className={styles.wordItem}>
              <span className={styles.word}>{word}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="private">
        <h2>Private Use Area (Special Glyphs)</h2>
        <p className={styles.note}>Fonts sometimes include special characters in the Unicode Private Use Area (U+E000 to U+E0FF). If you see actual glyphs instead of boxes, those are custom characters:</p>
        <div className={styles.grid}>
          {privateUse.slice(0, 64).map((char, i) => (
            <div key={i} className={styles.charBox}>
              <span className={styles.char}>{char}</span>
              <span className={styles.code}>U+{(0xE000 + i).toString(16).toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="sizes">
        <h2>Size Comparison</h2>
        <p className={styles.note}>Same text at different sizes:</p>
        <div className={styles.sizeTest}>
          <p style={{ fontSize: '12px' }}>The Shire Supply Co. - 12px</p>
          <p style={{ fontSize: '16px' }}>The Shire Supply Co. - 16px</p>
          <p style={{ fontSize: '24px' }}>The Shire Supply Co. - 24px</p>
          <p style={{ fontSize: '32px' }}>The Shire Supply Co. - 32px</p>
          <p style={{ fontSize: '48px' }}>The Shire Supply Co. - 48px</p>
          <p style={{ fontSize: '64px' }}>The Shire Supply Co. - 64px</p>
          <p style={{ fontSize: '96px' }}>The Shire Supply Co. - 96px</p>
        </div>
      </section>

      <section className={styles.section} id="alphabet-sentence">
        <h2>Pangrams</h2>
        <div className={styles.pangrams}>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <p>Pack my box with five dozen liquor jugs.</p>
          <p>How vexingly quick daft zebras jump!</p>
          <p>The five boxing wizards jump quickly.</p>
          <p>Jackdaws love my big sphinx of quartz.</p>
        </div>
      </section>

      <section className={styles.section} id="input">
        <h2>Type Your Own Text</h2>
        <textarea
          className={styles.textarea}
          placeholder="Type here to test any character..."
          rows={4}
        />
      </section>
    </main>
  );
}
