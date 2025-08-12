import React from 'react';

export default function About() {
  return (
    <section className="container">
      <h1>About Waterloo</h1>
      <p>
        Waterloo sits at the heart of Canada's innovation corridor and is home to the University of Waterloo
        and Wilfrid Laurier University. The local ecosystem blends research, startups, and community culture.
      </p>
      <p>
        With walkable neighborhoods, year-round events, and nearby Old Order Mennonite country, the area offers
        a unique mix of modern life and rich heritage.
      </p>
      <img src="/images/waterloo-about.jpg" alt="waterloo about illustration" className="hero-img" />
    </section>
  );
}