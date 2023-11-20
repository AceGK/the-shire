
export default function Strains() {


  const strains = [
    {
      "name": "Longbottom Leaf",
      "type": "Sativa",
      "lineage": "Southfarthing OG x Hobbiton Haze",
      "description": "A tribute to the rare and valuable leaf from Hobbiton, Longbottom Leaf is a strain celebrated for its uplifting and energizing qualities. Ideal for creative endeavors or social gatherings."
    },
    {
      "name": "Old Toby",
      "type": "Indica",
      "lineage": "Hornblower Diesel x Bree Dream",
      "description": "Named after the finest weed in the Southfarthing, Old Toby is a legendary strain known for its smooth, rich flavor and calming effects. It's perfect for a relaxing evening under the stars or a peaceful afternoon by the river."
    },
    {
      "name": "Southern Star",
      "type": "Hybrid",
      "lineage": "Kingsfoil Kush x Sweet Galenas",
      "description": ""
    },
    {
      "name": "Tookies",
      "type": "Indica",
      "lineage": "Tuckborough Tangie x Belladonna Cookies",
      "description": "Tookies, a blend of Bilbo's Bud and Shire Skunk OG, encapsulates the essence of a Hobbit's day, from elevenses to supper, with its sweet aroma and earthy undertones. This strain promises deep relaxation, evoking the serene tranquility of a leisurely afternoon in the Shire."
    },
    {
      "name": "Bag End Blend",
      "type": "Hybrid",
      "lineage": "White Wizard x Rivendell Runtz",
      "description": ""
    },
    {
      "name": "Brandybuck Blend",
      "type": "Hybrid",
      "lineage": "Brandywine Cheese x Buckland Biscotti",
      "description": "A unique mix honoring the adventurous spirit of the Brandybuck family, this blend is known for its balanced effects, offering a perfect harmony of relaxation and gentle stimulation."
    },
    {
      "name": "Green Dragon",
      "type": "Hybrid",
      "lineage": "Bywater Kush x Smaug's Fire",
      "description": "Named after the famous inn, the Green Dragon strain is for those seeking a truly potent experience. It promises a powerful, euphoric journey, much like a night spent in the bustling hobbit pub."
    },
    {
      "name": "Mirkwood Mist",
      "type": "Hybrid",
      "lineage": "Mirkwood Haze x Misty Moutain Gold",
      "description": "Evoking the mysterious essence of the Mirkwood forest, this strain is known for its deep, earthy aroma and its ability to heighten the senses, perfect for introspective evenings or exploring the outdoors."
    },
    {
      "name": "Gardner’s Gift",
      "type": "Sativa",
      "lineage": "Sam's Sage x Lembas Bread",
      "description": ""
    },
  ]

  return (
    <div>

      {strains.map((strain, id) => (
        <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '1px', padding: '1rem' }}>
          <h3>{strain.name}</h3>
          <div>{strain.type}</div>
          <div>{strain.lineage}</div>
          <p>{strain.description}</p>
        </div>
      ))}
    </div>
  );
}