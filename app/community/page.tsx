'use client';
import * as React from 'react';

export default function CommunityPage() {
  const programs = [
    {
      title: 'School Partnerships',
      desc: 'CREAR Lab collaborates with local schools to promote culturally responsive education and support youth well-being.',
      img: 'https://thecrearlab.com/assets/community-card.jpg',
    },
    {
      title: 'Family Workshops',
      desc: 'We work alongside parents and caregivers to share tools that strengthen communication, resilience, and connection at home.',
      img: 'https://thecrearlab.com/assets/research-card.jpg',
    },
    {
      title: 'Community Outreach',
      desc: 'Our team hosts events and initiatives that foster cultural awareness, promote equity, and amplify community voices.',
      img: 'https://thecrearlab.com/assets/people-card.jpg',
    },
  ];

  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        color: '#143F6B',
        lineHeight: 1.6,
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: '#F8F8F8',
        paddingTop: '120px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '40px', fontWeight: 800 }}>Community</h1>
      <p
        style={{
          marginTop: '20px',
          fontSize: '18px',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        CREAR Lab is committed to community engagement — partnering with
        schools, families, and local organizations to promote inclusion,
        connection, and resilience.
      </p>

      <div
        style={{
          marginTop: '60px',
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          maxWidth: '1200px',
          marginInline: 'auto',
          padding: '0 24px 100px',
        }}
      >
        {programs.map((p) => (
          <div
            key={p.title}
            style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{p.title}</h3>
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '15px',
                  lineHeight: 1.5,
                }}
              >
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
