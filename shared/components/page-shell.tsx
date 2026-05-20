import type { CSSProperties } from 'react';

type PageShellProps = {
  badge: string;
  title: string;
  description: string;
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '24px',
  },
  card: {
    width: 'min(720px, 100%)',
    padding: '40px',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.86)',
    boxShadow: '0 24px 80px rgba(23, 32, 51, 0.12)',
    backdropFilter: 'blur(10px)',
  },
  badge: {
    display: 'inline-flex',
    padding: '6px 12px',
    borderRadius: '999px',
    backgroundColor: '#dce9ff',
    color: '#2357b8',
    fontSize: '14px',
    fontWeight: 700,
  },
  title: {
    margin: '20px 0 12px',
    fontSize: 'clamp(32px, 6vw, 52px)',
    lineHeight: 1.05,
    letterSpacing: '-0.04em',
  },
  description: {
    margin: 0,
    fontSize: '18px',
    color: '#4f5f79',
  },
} satisfies Record<string, CSSProperties>;

export function PageShell({ badge, title, description }: PageShellProps) {
  return (
    <section style={styles.wrapper}>
      <div style={styles.card}>
        <span style={styles.badge}>{badge}</span>
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.description}>{description}</p>
      </div>
    </section>
  );
}
