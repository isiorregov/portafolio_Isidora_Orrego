'use client';

import { useState, type FormEvent } from 'react';
import styles from './portfolio-pages.module.css';

const formEndpoint = 'https://formspree.io/f/xaeeredv';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className={styles.contactForm}
      action={formEndpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className={styles.contactFormFields}>
        <label className={styles.contactField}>
          <span className={styles.contactFieldLabel}>Nombre</span>
          <input
            className={styles.contactInput}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Tu nombre"
            required
          />
        </label>

        <label className={styles.contactField}>
          <span className={styles.contactFieldLabel}>Mail</span>
          <input
            className={styles.contactInput}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="tu@email.com"
            required
          />
        </label>

        <label className={`${styles.contactField} ${styles.contactMessageField}`}>
          <span className={styles.contactFieldLabel}>Mensaje</span>
          <textarea
            className={`${styles.contactInput} ${styles.contactTextarea}`}
            name="message"
            placeholder="Cuéntame sobre tu proyecto"
            rows={5}
            required
          />
        </label>
      </div>

      <input
        className={styles.contactHoneypot}
        type="text"
        name="_gotcha"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className={styles.contactFormActions}>
        <p className={styles.contactFormStatus} role="status" aria-live="polite">
          {status === 'sent' && 'Mensaje enviado. Gracias por escribirme.'}
          {status === 'error' && 'No se pudo enviar. Intenta nuevamente o escríbeme por correo.'}
        </p>
        <button className={styles.contactSubmit} type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  );
}
