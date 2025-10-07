import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title:
    'CREAR Lab | Culture, Resilience, Equity, and Relationships in Development',
  description:
    'The CREAR Lab studies how culture, community, and relationships promote equity and well-being among diverse youth and families.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'Inter, sans-serif',
          margin: 0,
          background: '#F8F8F8',
          color: '#143F6B',
        }}
      >
        {/* NAVBAR */}
        <header
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 60px',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            zIndex: 100,
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: '20px',
              textDecoration: 'none',
              color: '#143F6B',
              letterSpacing: '1px',
            }}
          >
            CREAR LAB
          </Link>

          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              fontWeight: 600,
            }}
          >
            <NavLink href="/research" label="Research" />
            <NavLink href="/people" label="People" />
            <NavLink href="/community" label="Community" />
            <NavLink href="/opportunities" label="Opportunities" />
            <NavLink href="/publications" label="Publications" />
            <NavLink href="/news" label="News" />
            <NavLink href="/contact" label="Contact" />
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main style={{ paddingTop: '100px' }}>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            background: '#143F6B',
            color: 'white',
            textAlign: 'center',
            padding: '40px 20px',
            marginTop: '60px',
          }}
        >
          <p>
            © {new Date().getFullYear()} CREAR Lab, University of Pittsburgh
          </p>
        </footer>
      </body>
    </html>
  );
}

/* Reusable nav link component */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: 'none',
        color: '#143F6B',
        fontSize: '15px',
        fontWeight: 600,
      }}
    >
      {label}
    </Link>
  );
}
