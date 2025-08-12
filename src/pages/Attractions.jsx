import React from 'react';

const items = [
  {
    title: "Waterloo Park",
    img: "/images/attraction-park.jpg",
    blurb: "A central green space with trails, playgrounds, and seasonal events. Perfect for a casual walk or picnic."
  },
  {
    title: "St. Jacobs Farmers' Market",
    img: "/images/attraction-market.jpg",
    blurb: "One of Canada's largest year-round markets with local produce, crafts, and baked goods."
  },
  {
    title: "Holiday Inn Express & Suites",
    img: "/images/attraction-perimeter.jpg",
    blurb: "A modern hotel with comfortable rooms, free breakfast, and a pool. Conveniently located near attractions."
  }
];

export default function Attractions() {
  return (
    <section className="container">
      <h1>Top Attractions</h1>
      <div className="cards">
        {items.map((it) => (
          <article key={it.title} className="card" aria-label={it.title}>
            <img src={it.img} alt={it.title} />
            <div className="card-body">
              <h2>{it.title}</h2>
              <p>{it.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
