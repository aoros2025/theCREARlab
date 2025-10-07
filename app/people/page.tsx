'use client';
import { useState } from 'react';

export default function ResearchPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto text-gray-800">
      {/* ===== Language Toggle ===== */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsSpanish(!isSpanish)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* ===== LAB PERSONNEL ===== */}
      <Section
        titleEn="Lab Personnel"
        titleEs="Personal del Laboratorio"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Sofia Adame',
            role: 'Project Coordinator',
            bioEn:
              'Sofia Adame is a recent graduate from the University of Pittsburgh with degrees in Psychology and Anthropology, a minor in Gender, Sexuality and Women’s Studies, and a certificate in Global Studies. A Mexican immigrant with international experience, she is dedicated to addressing gender-based violence across Latin America.',
            bioEs:
              'Sofía Adame es una graduada reciente de la Universidad de Pittsburgh, donde obtuvo títulos en Psicología y Antropología, con una especialización en Estudios de Género, Sexualidad y Mujeres y un certificado en Estudios Globales. Es una inmigrante mexicana con experiencia internacional y un compromiso por abordar la violencia de género en América Latina.',
          },
          {
            name: 'Amelia F. Leonard',
            role: 'Administrative Research Assistant',
            bioEn:
              'Amelia Leonard is a senior at the University of Pittsburgh studying Psychology with a minor in Economics. She serves as both administrative and research assistant in the CREAR Lab, contributing to initiatives that support underserved communities.',
            bioEs:
              'Amelia Leonard es una estudiante de último año en la Universidad de Pittsburgh que estudia Psicología con una especialización en Economía. Trabaja como asistente administrativa e investigadora en el CREAR Lab y busca apoyar comunidades desatendidas mediante la investigación y la organización.',
          },
          {
            name: 'Ashley Lopez',
            role: 'Lab Manager',
            bioEn:
              'Ashley Lopez is a recent NYU graduate with a B.A. in Psychology with Honors and an M.A. in Industrial/Organizational Psychology. She is interested in how social support influences academic and workplace outcomes for minoritized communities.',
            bioEs:
              'Ashley López es una graduada reciente de la Universidad de Nueva York, donde obtuvo su licenciatura y maestría en Psicología Industrial/Organizacional. Está interesada en cómo el apoyo social influye en los resultados académicos y laborales de las comunidades minorizadas.',
          },
        ]}
      />

      {/* ===== GRADUATE STUDENT RESEARCHERS ===== */}
      <Section
        titleEn="Graduate Student Researchers"
        titleEs="Estudiantes de Posgrado Investigadores"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Sydni Davila, B.S., B.A.',
            role: 'Graduate Student Researcher',
            bioEn:
              'Sydni Davila is a graduate student at the University of Pittsburgh. Her research focuses on how adverse childhood experiences shape interpersonal difficulties, psychopathology, and brain development. She aims to become a clinical or developmental psychologist working with underrepresented populations.',
            bioEs:
              'Sydni Davila es una estudiante de posgrado en la Universidad de Pittsburgh. Su investigación se centra en cómo las experiencias adversas en la infancia influyen en las dificultades interpersonales, la psicopatología y el desarrollo cerebral. Planea convertirse en psicóloga clínica o del desarrollo trabajando con poblaciones subrepresentadas.',
          },
          {
            name: 'Patrick Quintero, B.A.',
            role: 'Graduate Student Researcher',
            bioEn:
              'Patrick Quintero is a doctoral student in Clinical-Developmental Psychology at the University of Pittsburgh. His research explores how poly-victimization affects adolescent mental health and development, focusing on protective factors like education and social support.',
            bioEs:
              'Patrick Quintero es estudiante de doctorado en Psicología Clínica y del Desarrollo en la Universidad de Pittsburgh. Su trabajo explora cómo la polivictimización afecta la salud mental y el desarrollo de los adolescentes, enfocándose en factores protectores como la educación y el apoyo social.',
          },
        ]}
      />

      {/* ===== GRADUATE STUDENT COLLABORATORS ===== */}
      <Section
        titleEn="Graduate Student Collaborators"
        titleEs="Colaboradores Estudiantiles de Posgrado"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Geraldine Cisneros, B.A.',
            role: 'Graduate Student Collaborator',
            bioEn:
              'Geraldine Cisneros is a first-year Ph.D. student in Developmental Psychology at the University of Pittsburgh. Her work explores how sociocultural contexts shape youth and family mental health experiences, with an emphasis on culturally relevant interventions.',
            bioEs:
              'Geraldine Cisneros es estudiante de primer año de doctorado en Psicología del Desarrollo en la Universidad de Pittsburgh. Su trabajo explora cómo los contextos socioculturales moldean las experiencias de salud mental en jóvenes y familias, con un enfoque en intervenciones culturalmente relevantes.',
          },
          {
            name: 'Dollar Ganu, B.A.',
            role: 'Graduate Student Collaborator',
            bioEn:
              'Dollar Ganu is a master’s student in Marriage and Family Therapy at the University of Oregon. A member of the CREAR Lab, she is interested in how individual and social factors intersect in daily life.',
            bioEs:
              'Dollar Ganu es estudiante de maestría en Terapia Matrimonial y Familiar en la Universidad de Oregon. Forma parte del CREAR Lab y está interesada en cómo los aspectos individuales y sociales se entrelazan en la vida cotidiana.',
          },
          {
            name: 'Angela Martinez, B.S.',
            role: 'Post-Baccalaureate Collaborator',
            bioEn:
              'Angela Martinez is a Hot Metal Bridge Post-Baccalaureate Fellow at the University of Pittsburgh. She is interested in pursuing research and clinical work in health and neuropsychology.',
            bioEs:
              'Angela Martínez es becaria post-bachillerato Hot Metal Bridge en la Universidad de Pittsburgh. Está interesada en la investigación y el trabajo clínico en los campos de la salud y la neuropsicología.',
          },
          {
            name: 'Courtney Medina, B.A.',
            role: 'Graduate Student Collaborator',
            bioEn:
              'Courtney Medina is a Ph.D. student in Developmental Psychology at the University of Pittsburgh. Her research investigates sociocultural influences on romantic and sexual experiences during adolescence, particularly among youth of color and queer youth.',
            bioEs:
              'Courtney Medina es estudiante de doctorado en Psicología del Desarrollo en la Universidad de Pittsburgh. Investiga las influencias socioculturales en las experiencias románticas y sexuales durante la adolescencia, especialmente entre jóvenes de color y jóvenes queer.',
          },
        ]}
      />

      {/* ===== POST-BACCALAUREATE RESEARCHER ===== */}
      <Section
        titleEn="Post-Baccalaureate Researcher"
        titleEs="Investigadores Post-Bachillerato"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Yadira Estrada, B.S., M.S.W.',
            role: 'Post-Baccalaureate Fellow',
            bioEn:
              'Yadira Estrada is a Hot Metal Bridge Post-Baccalaureate Fellow at the University of Pittsburgh. She is interested in examining how adverse childhood experiences impact brain and behavioral development and in understanding risk and protective factors for mental well-being.',
            bioEs:
              'Yadira Estrada es beneficiaria de la Beca Post-Bachillerato Hot Metal Bridge en la Universidad de Pittsburgh. Está interesada en examinar cómo las experiencias adversas en la infancia impactan el desarrollo cerebral y conductual, y en analizar los factores de riesgo y protección para el bienestar mental.',
          },
        ]}
      />

      {/* ===== STUDENT RESEARCH ASSISTANTS ===== */}
      <Section
        titleEn="Student Research Assistants"
        titleEs="Asistentes de Investigación Estudiantiles"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Sophia Chen',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Grace Elena Dupree',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Zainab Kabir',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Brian Kim',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Maeve López',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Maddie McCray',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Isabella Pina',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Nikita Sundaram',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Yakahiris Vazquez',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Fabiola Wah',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Kmaura White',
            role: 'Undergraduate Research Assistant',
            bioEn: '',
            bioEs: '',
          },
        ]}
      />

      {/* ===== INTERNATIONAL RESEARCH ASSISTANTS ===== */}
      <Section
        titleEn="International Research Assistants"
        titleEs="Asistentes de Investigación Internacionales"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Citlali Aguilar Mora',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Alitzel Donají Cruz Angeles',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'María de los Ángeles Morales Olivera',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Mayra Karina Delgado Aguilera',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Karyme Joanna Bello Sereno',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Paulina Michell González Herrera',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Diana Paola Toral Torres',
            role: 'Asistente de Investigación',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Unnati Khanna',
            role: 'International Research Assistant',
            bioEn: '',
            bioEs: '',
          },
        ]}
      />

      {/* ===== CURRENT COLLABORATORS ===== */}
      <Section
        titleEn="Current Collaborators"
        titleEs="Colaboradores Actuales"
        isSpanish={isSpanish}
        members={[
          {
            name: 'Francheska Alers-Rojas, PhD',
            role: 'University of Texas at Austin',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Erika Álvarez Álvarez',
            role: 'Universidad Michoacana de San Nicolás de Hidalgo',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Gabriella Alvarez, PhD',
            role: 'University of Pittsburgh',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Lara Bohórquez',
            role: 'Centro de Derecho de Mujeres',
            bioEn: '',
            bioEs: '',
          },
          {
            name: 'Irmarie Cruz López, PhD',
            role: 'University of Puerto Rico, Mayagüez',
            bioEn: '',
            bioEs: '',
          },
        ]}
      />

      {/* ===== FORMER RESEARCH ASSISTANTS ===== */}
      <Section
        titleEn="Former Research Assistants"
        titleEs="Ex Asistentes de Investigación"
        isSpanish={isSpanish}
        members={[
          { name: 'Stephany Andrade', role: '', bioEn: '', bioEs: '' },
          { name: 'Alexa Carreon', role: '', bioEn: '', bioEs: '' },
          { name: 'Grace Geoffroy', role: '', bioEn: '', bioEs: '' },
          {
            name: 'Ariana Gisele Méndez Torrez',
            role: '',
            bioEn: '',
            bioEs: '',
          },
          { name: 'Natalia Hardy', role: '', bioEn: '', bioEs: '' },
          { name: 'Maria Hernandez-Casanenda', role: '', bioEn: '', bioEs: '' },
          { name: 'Jordan Hudson', role: '', bioEn: '', bioEs: '' },
          { name: 'Mica Siegler', role: '', bioEn: '', bioEs: '' },
        ]}
      />
    </div>
  );
}

/* ===== REUSABLE SECTION COMPONENT ===== */
function Section({
  titleEn,
  titleEs,
  members,
  isSpanish,
}: {
  titleEn: string;
  titleEs: string;
  members: { name: string; role: string; bioEn: string; bioEs: string }[];
  isSpanish: boolean;
}) {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {isSpanish ? titleEs : titleEn}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {members.map((m, i) => (
          <div
            key={i}
            className="relative bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{m.name}</h3>
              <p className="text-primary-500 text-sm italic mb-2">{m.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {(isSpanish ? m.bioEs : m.bioEn).slice(0, 100) || ''}...
              </p>
            </div>

            <div className="absolute inset-0 bg-white bg-opacity-95 rounded-xl p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
              <h4 className="text-xl font-bold mb-2 text-gray-900">{m.name}</h4>
              <p className="text-sm text-gray-700 mb-4 italic">{m.role}</p>
              <p className="text-gray-700 text-sm">
                {isSpanish
                  ? m.bioEs || 'Más información próximamente.'
                  : m.bioEn || 'More information coming soon.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
