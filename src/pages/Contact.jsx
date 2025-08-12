import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    alert('Thanks for your feedback! (Demo form)');
  }

  return (
    <section className="container">
      <h1>Contact</h1>
      <p>Have a suggestion for a place to add? Send us a note.</p>
      <form className="contact-form" onSubmit={onSubmit} aria-label="Contact form">
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="What should we add?" required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
