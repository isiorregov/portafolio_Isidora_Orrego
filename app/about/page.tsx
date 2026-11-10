import type { Metadata } from 'next';
import { BASE_PATH } from '@/lib/base-path';
import { PortfolioFrame } from '@/components/portfolio/PortfolioFrame';
import styles from '@/components/portfolio/portfolio-pages.module.css';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Isidora — Portafolio',
};

const principles = [
  {
    number: '01',
    name: 'Observar',
    description: 'Encontrar posibilidades en aquello que puede pasar desapercibido',
  },
  {
    number: '02',
    name: 'Conceptualizar',
    description: 'Partir desde una idea antes de decidir cómo debe verse',
  },
  {
    number: '03',
    name: 'Contrastar',
    description: 'Dejar que lo sobrio conviva con algo inesperado',
  },
  {
    number: '04',
    name: 'Detallar',
    description: 'Entender que una decisión pequeña también puede construir identidad',
  },
  {
    number: '05',
    name: 'Intencionar',
    description: 'No utilizar un recurso visual si no aporta al concepto',
  },
];

const interests = [
  'Dirección de arte',
  'Desarrollo de colecciones',
  'Styling',
  'Branding de moda',
  'Visual merchandising',
  'Producción de moda',
  'Accesorios',
  'Editorial',
  'Fotografía',
  'Contenido audiovisual',
];

const tools = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Canva',
  'Procreate',
  'CapCut',
  'Adobe Lightroom',
  'AutoCAD',
  'Adobe InDesign',
  'Microsoft Excel',
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PortfolioFrame typewriterBrand>
        <main>
          <section className={styles.aboutHero} aria-labelledby="about-title">
            <div className={styles.aboutImageWrap}>
              <img
                className={styles.aboutImage}
                src={`${BASE_PATH}/portfolio/about/isidora-about-trabajando.webp`}
                width="1400"
                height="1865"
                alt="Isidora Orrego trabajando junto a una modelo"
                fetchPriority="high"
              />
            </div>

            <div className={styles.aboutIntro}>
              <h1 className={styles.aboutTitle} id="about-title">
                Isidora Orrego
              </h1>
              <img
                className={styles.aboutPins}
                src={`${BASE_PATH}/portfolio/identity/isidora-alfileres-azules.webp`}
                alt="Isidora Orrego — Mirar distinto"
                width="1774"
                height="887"
                fetchPriority="high"
              />
              <blockquote className={styles.aboutQuote}>
                “Primero ordeno. Después veo dónde romperlo.”
              </blockquote>
            </div>
          </section>

          <section className={styles.aboutStatement} aria-labelledby="about-statement-title">
            <h2 className={styles.sectionIndex} id="about-statement-title">
              Mirar distinto
            </h2>
            <p className={styles.aboutStatementText}>
              Mi proceso creativo suele partir ordenando. Necesito entender lo que tengo frente a
              mí, encontrar relaciones y construir una idea antes de decidir cómo debe verse. Desde
              ahí, me interesa transformar conceptos en decisiones concretas: una materialidad, una
              silueta, un styling, una fotografía o una composición gráfica. Me atrae lo claro y
              cuidado, pero siempre busco ese pequeño gesto que cambia la lectura y le entrega
              carácter al proyecto.
            </p>
          </section>

          <section className={styles.principles} aria-labelledby="principles-title">
            <h2 className={styles.sectionHeading} id="principles-title">
              Mis principios
            </h2>
            <ol className={styles.principleList}>
              {principles.map((principle) => (
                <li className={styles.principleRow} key={principle.number}>
                  <span className={styles.principleNumber} aria-hidden="true">
                    {principle.number}
                  </span>
                  <h3 className={styles.principleName}>{principle.name}</h3>
                  <p className={styles.principleDescription}>{principle.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.capabilities} aria-label="Áreas y herramientas">
            <div className={styles.capabilityBlock}>
              <h2 className={styles.capabilityHeading}>Áreas que me interesan</h2>
              <ul className={styles.plainList}>
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>

            <div className={styles.capabilityBlock}>
              <h2 className={styles.capabilityHeading}>Herramientas que manejo</h2>
              <ul className={styles.plainList}>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </PortfolioFrame>
    </div>
  );
}
