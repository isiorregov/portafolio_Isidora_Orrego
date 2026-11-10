import type { Metadata } from 'next';
import { ContactForm } from '@/components/portfolio/ContactForm';
import { PortfolioFrame } from '@/components/portfolio/PortfolioFrame';
import styles from '@/components/portfolio/portfolio-pages.module.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contacto — Isidora Orrego',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <PortfolioFrame>
        <main className={styles.contactPage}>
          <div className={styles.contactTopline}>
            <p className={styles.contactLabel}>Isidora Orrego</p>
            <p className={styles.contactLocation}>Santiago, Chile</p>
          </div>

          <h1 className={styles.contactTitle}>Contacto</h1>

          <div className={styles.contactContent}>
            <dl className={styles.contactDetails}>
              <div className={styles.contactRow}>
                <dt className={styles.contactLabel}>Correo</dt>
                <dd>
                  <a className={styles.contactLink} href="mailto:isiorregov@gmail.com">
                    isiorregov@gmail.com
                  </a>
                </dd>
              </div>
              <div className={styles.contactRow}>
                <dt className={styles.contactLabel}>Teléfono</dt>
                <dd>
                  <a className={styles.contactLink} href="tel:+56974462678">
                    +56 9 7446 2678
                  </a>
                </dd>
              </div>
              <div className={styles.contactRow}>
                <dt className={styles.contactLabel}>Instagram</dt>
                <dd>
                  <a
                    className={styles.contactLink}
                    href="https://www.instagram.com/iorregov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @iorregov
                  </a>
                </dd>
              </div>
            </dl>

            <section className={styles.contactFormSection} aria-labelledby="contact-form-title">
              <div className={styles.contactFormIntro}>
                <h2 className={styles.contactLabel} id="contact-form-title">
                  Escríbeme
                </h2>
                <p>¿Tienes un proyecto o quieres que trabajemos juntos?</p>
              </div>
              <ContactForm />
            </section>
          </div>
        </main>
      </PortfolioFrame>
    </div>
  );
}
