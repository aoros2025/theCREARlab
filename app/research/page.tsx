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

      {/* ===== PAGE HEADER ===== */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {isSpanish ? 'Nuestra Investigación' : 'Our Research'}
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          {isSpanish
            ? 'En el Laboratorio CREAR, exploramos cómo la cultura, la resiliencia, la equidad y las relaciones moldean el bienestar de jóvenes y familias diversas, utilizando enfoques basados en la comunidad y métodos mixtos.'
            : 'At the CREAR Lab, we study how culture, resilience, equity, and relationships shape the well-being of diverse youth and families through community-based and mixed-method approaches.'}
        </p>
      </div>

      {/* ===== CURRENT RESEARCH PROJECTS ===== */}
      <Section
        titleEn="Current Research Projects"
        titleEs="Proyectos de Investigación Actuales"
        isSpanish={isSpanish}
        projects={[
          {
            name: 'MAPI Study',
            subtitle:
              'Community Violence and Adolescent Health in Michoacán, Mexico',
            bioEn:
              'The MAPI Study is a longitudinal project investigating how exposure to community violence affects adolescents’ mental health, educational outcomes, and biological functioning. The study focuses on polyvictimization, school belonging, and anxiety among Mexican adolescents in urban and semi-rural areas of Michoacán.',
            bioEs:
              'El Estudio MAPI es un proyecto longitudinal que investiga cómo la exposición a la violencia comunitaria afecta la salud mental, los resultados educativos y el funcionamiento biológico de los adolescentes. El estudio se enfoca en la polivictimización, el sentido de pertenencia escolar y la ansiedad entre adolescentes mexicanos en áreas urbanas y semi rurales de Michoacán.',
          },
          {
            name: 'Fortaleza Mexicana Study',
            subtitle: 'Families Confronting Violence in Rural Mexico',
            bioEn:
              'Fortaleza Mexicana examines parent-adolescent relationships and family cohesion in communities affected by chronic violence in rural Mexico. Using a mixed-methods design, the study explores how family strengths, cultural values, and emotion regulation promote resilience and positive adjustment.',
            bioEs:
              'Fortaleza Mexicana examina las relaciones entre padres y adolescentes y la cohesión familiar en comunidades afectadas por violencia crónica en zonas rurales de México. Utilizando un diseño de métodos mixtos, el estudio explora cómo las fortalezas familiares, los valores culturales y la regulación emocional promueven la resiliencia y la adaptación positiva.',
          },
          {
            name: 'VENCER Study',
            subtitle:
              'Violence, Equity, and Neurobiological Correlates in Emerging Resilience',
            bioEn:
              'The VENCER Study focuses on college students’ exposure to violence and trauma, examining how protective factors such as social support, belonging, and identity development buffer the effects of adversity. It integrates self-report, physiological, and qualitative measures to understand pathways to resilience.',
            bioEs:
              'El Estudio VENCER se enfoca en la exposición a la violencia y el trauma en estudiantes universitarios, examinando cómo factores protectores como el apoyo social, el sentido de pertenencia y el desarrollo de la identidad amortiguan los efectos de la adversidad. Integra medidas de autoinforme, fisiológicas y cualitativas para comprender las rutas hacia la resiliencia.',
          },
          {
            name: 'FRONTERA Project',
            subtitle:
              'Family Resilience and Outcomes in Neighborhoods of Trauma, Exposure, and Risk for Adolescents',
            bioEn:
              'The FRONTERA Project examines how family and community dynamics influence adolescents’ mental health and academic outcomes in U.S.-Mexico border communities. The study centers on resilience processes and social support in contexts of structural and community-level violence.',
            bioEs:
              'El Proyecto FRONTERA examina cómo las dinámicas familiares y comunitarias influyen en la salud mental y los resultados académicos de los adolescentes en comunidades fronterizas entre EE.UU. y México. El estudio se centra en los procesos de resiliencia y el apoyo social en contextos de violencia estructural y comunitaria.',
          },
          {
            name: 'BRAVE Project',
            subtitle: 'Borderlands Resilience: Adolescent Violence Experiences',
            bioEn:
              'The BRAVE Project is a qualitative study capturing adolescents’ narratives of resilience and coping in the U.S.–Mexico borderlands. Through interviews and participatory approaches, it explores how youth conceptualize safety, belonging, and empowerment amid adversity.',
            bioEs:
              'El Proyecto BRAVE es un estudio cualitativo que recopila narrativas de adolescentes sobre resiliencia y afrontamiento en la frontera entre EE.UU. y México. A través de entrevistas y enfoques participativos, explora cómo los jóvenes conceptualizan la seguridad, el sentido de pertenencia y el empoderamiento frente a la adversidad.',
          },
        ]}
      />

      {/* ===== THEMATIC AREAS ===== */}
      <Section
        titleEn="Thematic Research Areas"
        titleEs="Áreas Temáticas de Investigación"
        isSpanish={isSpanish}
        projects={[
          {
            name: 'Culture & Resilience',
            subtitle: 'Strength-based approaches to mental health',
            bioEn:
              'Our work emphasizes cultural values such as familismo, community connectedness, and collective resilience as protective factors that support mental health and academic success in youth.',
            bioEs:
              'Nuestro trabajo enfatiza valores culturales como el familismo, la conexión comunitaria y la resiliencia colectiva como factores protectores que apoyan la salud mental y el éxito académico de los jóvenes.',
          },
          {
            name: 'Community Violence & Youth Development',
            subtitle: 'Understanding the effects of violence exposure',
            bioEn:
              'We study how exposure to community violence impacts adolescent development across psychological, behavioral, and biological domains, highlighting pathways toward recovery and strength.',
            bioEs:
              'Estudiamos cómo la exposición a la violencia comunitaria afecta el desarrollo adolescente en los ámbitos psicológico, conductual y biológico, destacando las rutas hacia la recuperación y la fortaleza.',
          },
          {
            name: 'Family Dynamics & Mental Health',
            subtitle: 'Parent-adolescent relationships in context',
            bioEn:
              'We examine how family cohesion, parental knowledge, and cultural communication patterns influence emotional well-being and behavioral adjustment in children and adolescents.',
            bioEs:
              'Examinamos cómo la cohesión familiar, el conocimiento parental y los patrones culturales de comunicación influyen en el bienestar emocional y el ajuste conductual de niños y adolescentes.',
          },
          {
            name: 'Equity in Psychological Research',
            subtitle: 'Culturally responsive and inclusive science',
            bioEn:
              'Our research seeks to dismantle systemic inequities in psychology by engaging communities, adapting evidence-based interventions, and amplifying underrepresented voices in mental health research.',
            bioEs:
              'Nuestra investigación busca desmantelar las desigualdades sistémicas en la psicología involucrando a las comunidades, adaptando intervenciones basadas en evidencia y amplificando las voces subrepresentadas en la investigación en salud mental.',
          },
        ]}
      />

      {/* ===== METHODOLOGICAL APPROACHES ===== */}
      <Methodology isSpanish={isSpanish} />
    </div>
  );
}

/* ===== SECTION COMPONENT ===== */
function Section({
  titleEn,
  titleEs,
  projects,
  isSpanish,
}: {
  titleEn: string;
  titleEs: string;
  projects: { name: string; subtitle: string; bioEn: string; bioEs: string }[];
  isSpanish: boolean;
}) {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {isSpanish ? titleEs : titleEn}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative bg-white p-8 rounded-xl shadow-lg text-center transition-transform duration-300 hover:scale-105 overflow-hidden"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{p.name}</h3>
              <p className="text-primary-500 text-sm italic mb-2">
                {p.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {(isSpanish ? p.bioEs : p.bioEn).slice(0, 100)}...
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-95 rounded-xl p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-y-auto">
              <h4 className="text-xl font-bold mb-2 text-gray-900">{p.name}</h4>
              <p className="text-sm text-gray-700 mb-4 italic">{p.subtitle}</p>
              <p className="text-gray-700 text-sm">
                {isSpanish ? p.bioEs : p.bioEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== METHODOLOGICAL APPROACHES COMPONENT ===== */
function Methodology({ isSpanish }: { isSpanish: boolean }) {
  return (
    <section className="text-center bg-gray-50 py-16 px-6 rounded-2xl shadow-inner mt-12">
      <h2 className="text-3xl font-bold mb-6">
        {isSpanish ? 'Enfoques Metodológicos' : 'Methodological Approaches'}
      </h2>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg mb-8">
        {isSpanish
          ? 'El laboratorio emplea un enfoque interdisciplinario que combina métodos cuantitativos, cualitativos y participativos. Trabajamos en colaboración con escuelas, familias y comunidades para garantizar que la investigación refleje sus experiencias y fortalezas culturales.'
          : 'Our lab employs an interdisciplinary approach that combines quantitative, qualitative, and participatory methods. We collaborate with schools, families, and communities to ensure that our research reflects their lived experiences and cultural strengths.'}
      </p>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-800 text-base font-medium">
        {[
          isSpanish ? 'Métodos mixtos' : 'Mixed Methods',
          isSpanish ? 'Colaboraciones comunitarias' : 'Community Partnerships',
          isSpanish
            ? 'Estudios internacionales'
            : 'International Collaborations',
          isSpanish
            ? 'Investigación informada en trauma'
            : 'Trauma-Informed Research',
        ].map((item, i) => (
          <li
            key={i}
            className="bg-white rounded-xl py-4 px-6 shadow hover:shadow-md transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
