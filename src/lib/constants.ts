import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Corazón y Vida",
  shortName: "Clínica Hispana",
  tagline: "Tu salud es nuestra pasión",
  description: "Clínica médica hispana en Pasadena, TX. Atención profesional 100% en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, laboratorio, exámenes y más.",
  baseUrl: "https://www.clinicahispanacorazonyvida.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "918 W Southmore Ave Suite 180",
  city: "Pasadena",
  state: "TX",
  zip: "77502",
  phone: "+18329305551",
  phoneFormatted: "+1 (832) 930-5551",
  // WhatsApp usa el mismo número de la clínica, en E.164 sin "+" (formato wa.me).
  // No mostrarlo como texto visible en los botones: CallRail swap.js reescribe
  // los números visibles y aquí solo debe intercambiar los enlaces tel:.
  whatsapp: "18329305551",
  email: "chcorazonyvida@gmail.com",
  hours: "Lunes a Sábado: 9:00 AM - 9:00 PM | Domingo: 9:00 AM - 7:00 PM",
  hoursWeekday: "Lunes a Sábado: 9:00 AM - 9:00 PM",
  hoursWeekend: "Domingo: 9:00 AM - 7:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Clinica+Hispana+Corazon+y+Vida&query_place_id=ChIJQz95O_OjQIYRFSccibEMRQ8",
  // Embed SIN API key (output=embed): no depende de Maps Embed API ni de
  // restricción de referrer, así que no devuelve 403 en local ni en producción.
  googleMapsEmbed: "https://www.google.com/maps?q=Clinica+Hispana+Corazon+y+Vida,+918+W+Southmore+Ave+Suite+180,+Pasadena,+TX+77502&output=embed",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJQz95O_OjQIYRFSccibEMRQ8",
  placeId: "ChIJQz95O_OjQIYRFSccibEMRQ8",
  coordinates: {
    lat: 29.6911598,
    lng: -95.2210575,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/clinicahispanacorazonyvida",
  instagram: "https://www.instagram.com/clinicahispanacorazonyvida/",
  youtube: "https://www.youtube.com/channel/UCVpMW6qontrt28zwWGw_vAw",
  // PENDIENTE google: URL de reseñas de Google cuando exista
};

// Google Reviews fallback (datos reales del listado de Google, vía Places API).
// Se usa si la API en vivo no responde. Actualizado: 518 reseñas / 4.9★.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 538,
  averageRating: 4.9,
  placeId: "ChIJQz95O_OjQIYRFSccibEMRQ8",
};

// Dedicated CallRail tracking number for the Conquesting landing only.
// Used in /landing/comparacion-clinicas-pasadena via a route-specific layout.
// PENDIENTE: número CallRail dedicado a la landing. Por ahora usa el principal.
export const CONQUESTING_PHONE = {
  phone: "+18329305551",
  phoneFormatted: "+1 (832) 930-5551",
} as const;

// Fecha del último cambio de contenido de los 29 servicios (git: alineación de
// encabezados y FAQ, 2026-08-02). Un servicio puede llevar su propio dateModified.
export const SERVICES_LAST_MODIFIED = "2026-08-02";

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, hipertensión y dislipidemias en Pasadena, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    "descriptionEn": "Diabetes, hypertension and dyslipidemia management in Pasadena, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    "longDescription": "Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Corazón y Vida diseñamos un plan claro y te acompañamos paso a paso, en español.\n\n**¿Qué incluye?**\n- Evaluación inicial y exámenes de laboratorio\n- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos\n- Ajuste de medicamentos según tu evolución\n- Plan de alimentación y actividad física\n- Educación sobre tu condición en tu idioma\n\n**Por qué es importante el control**\nUna diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Corazón y Vida we design a clear plan and support you every step of the way, in Spanish.\n\n**What's included?**\n- Initial evaluation and lab work\n- Monitoring of glucose, blood pressure, cholesterol and triglycerides\n- Medication adjustment based on your progress\n- Nutrition and physical-activity plan\n- Education about your condition in your language\n\n**Why control matters**\nPoorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes pasadena",
      "doctor diabetes español pasadena",
      "control de presion alta pasadena",
      "colesterol alto tratamiento pasadena"
    ],
    "keywordsEn": [
      "diabetes management pasadena",
      "high blood pressure doctor pasadena",
      "cholesterol management pasadena",
      "chronic disease clinic pasadena"
    ],
    "features": [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos"
    ],
    "featuresEn": [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Pasadena, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Pasadena, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Corazón y Vida evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.\n\n**¿Qué incluye?**\n- Evaluación de síntomas\n- Pruebas de función tiroidea (TSH, T3, T4)\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio y ajuste del tratamiento\n- Seguimiento periódico\n\n**Síntomas frecuentes**\nCansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Corazón y Vida we evaluate your thyroid with lab work and provide the right treatment.\n\n**What's included?**\n- Symptom evaluation\n- Thyroid function tests (TSH, T3, T4)\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Treatment start and adjustment\n- Periodic follow-up\n\n**Common symptoms**\nFatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides pasadena",
      "examen de tiroides pasadena",
      "hipotiroidismo tratamiento pasadena",
      "doctor tiroides español pasadena"
    ],
    "keywordsEn": [
      "thyroid testing pasadena",
      "thyroid doctor pasadena",
      "hypothyroidism treatment pasadena",
      "thyroid clinic pasadena"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Pasadena, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Pasadena, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Corazón y Vida identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y posibles desencadenantes\n- Tratamiento de alergias estacionales y respiratorias\n- Manejo de rinitis, estornudos y congestión\n- Atención de alergias en la piel (ronchas, comezón)\n- Recomendaciones para evitar las crisis\n\n**Cuándo consultar**\nEstornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Corazón y Vida we identify what triggers them and help you control them so you feel well again.\n\n**What's included?**\n- Evaluation of symptoms and possible triggers\n- Treatment of seasonal and respiratory allergies\n- Management of rhinitis, sneezing and congestion\n- Care for skin allergies (hives, itching)\n- Recommendations to avoid flare-ups\n\n**When to seek care**\nFrequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias pasadena",
      "tratamiento de alergias pasadena",
      "doctor de alergias español pasadena",
      "examen de alergias pasadena"
    ],
    "keywordsEn": [
      "allergy treatment pasadena",
      "allergy testing pasadena",
      "allergy doctor pasadena",
      "allergy clinic pasadena"
    ],
    "features": [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español"
    ],
    "featuresEn": [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Pasadena, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Pasadena, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Corazón y Vida hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.\n\n**¿Qué incluye?**\n- Prueba rápida de influenza (flu)\n- Prueba de COVID-19\n- Evaluación de síntomas respiratorios\n- Tratamiento de gripe, tos, bronquitis e infecciones de garganta\n- Indicaciones de recuperación y cuidado\n\n**No dejes que avance**\nSi la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Corazón y Vida we run rapid tests and provide same-day treatment, no appointment needed.\n\n**What's included?**\n- Rapid influenza (flu) test\n- COVID-19 test\n- Respiratory symptom evaluation\n- Treatment of flu, cough, bronchitis and throat infections\n- Recovery and care instructions\n\n**Don't let it progress**\nIf the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid pasadena",
      "prueba de flu pasadena",
      "tratamiento gripe pasadena",
      "enfermedades respiratorias pasadena"
    ],
    "keywordsEn": [
      "covid test pasadena",
      "flu test pasadena",
      "flu treatment pasadena",
      "respiratory illness pasadena"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Pasadena, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Pasadena, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Corazón y Vida lo hacemos de forma rápida y completa, con todos los formularios listos.\n\n**¿Qué incluye?**\n- Examen físico general\n- Revisión de signos vitales (peso, talla, presión)\n- Evaluación de visión y audición\n- Llenado de los formularios requeridos\n- Recomendaciones de salud\n\n**Para la escuela y el deporte**\nCumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana Corazón y Vida we do it quickly and thoroughly, with all the forms ready.\n\n**What's included?**\n- General physical exam\n- Vital-signs check (weight, height, blood pressure)\n- Vision and hearing screening\n- Completion of required forms\n- Health recommendations\n\n**For school and sports**\nMeet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar pasadena",
      "physical para la escuela pasadena",
      "examen deportivo pasadena",
      "chequeo escolar pasadena"
    ],
    "keywordsEn": [
      "school physical pasadena",
      "sports physical pasadena",
      "school physical exam pasadena",
      "kids physical pasadena"
    ],
    "features": [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español"
    ],
    "featuresEn": [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "dateModified": "2026-09-15",
    "title": "Atención Ginecológica: Papanicolaou y Cultivos",
    "titleEn": "Gynecology Care: Pap Smear & Cultures",
    "shortTitle": "Ginecología",
    "description": "Ginecología en español en Pasadena, TX: Papanicolaou, cultivos vaginales, tratamiento de infecciones, pruebas de ITS y orientación anticonceptiva.",
    "descriptionEn": "Gynecology in Spanish in Pasadena, TX: Pap test, vaginal cultures, infection treatment, STI testing and contraceptive guidance. Private, no appointment.",
    "longDescription": "La consulta ginecológica resuelve molestias que muchas mujeres soportan durante meses y detecta a tiempo lo que no da síntomas, como las lesiones del cuello uterino. En Clínica Hispana Corazón y Vida, en Pasadena, la atención es en español, con privacidad, sin cita y con la posibilidad de pedir que la atienda una mujer.\n\n## ¿Qué incluye la consulta ginecológica?\n\n- Historial, presión arterial y peso.\n- Examen pélvico y de mamas.\n- Papanicolaou y, cuando corresponde, prueba de VPH.\n- Cultivos vaginales para identificar hongos, bacterias o tricomonas.\n- Tratamiento de infecciones vaginales e infecciones de transmisión sexual.\n- Orientación sobre anticoncepción, menstruación, fertilidad y menopausia.\n- [Ultrasonido](/services/ultrasonido) cuando hay que ver útero y ovarios.\n\n## ¿Cada cuánto debo hacerme el Papanicolaou?\n\nEntre los 21 y 29 años, cada tres años. Entre los 30 y 65, cada tres años con Papanicolaou o cada cinco con prueba de VPH. Si tuvo un resultado alterado, el médico acorta el intervalo. Evite relaciones, duchas vaginales y óvulos 48 horas antes de la prueba.\n\n## ¿Qué síntomas debo consultar?\n\n- Flujo con mal olor, ardor o comezón que no mejora.\n- Sangrado entre reglas, después de las relaciones o después de la menopausia.\n- Dolor pélvico persistente o dolor con las relaciones.\n- Reglas muy abundantes o ausentes.\n- Bulto, hundimiento o secreción en un seno.\n\nNinguno es normal \"por la edad\"; casi todos tienen tratamiento cuando se revisan a tiempo.\n\n## ¿Cómo es la visita?\n\n1. Conversación privada sobre el motivo y el historial.\n2. Examen físico según el motivo; usted decide el ritmo y puede pedir acompañante.\n3. Toma de muestras en el momento: Papanicolaou, cultivo o pruebas de ITS.\n4. Tratamiento inicial el mismo día cuando el diagnóstico es claro, y fecha para revisar resultados.\n\n## ¿Qué pasa si tengo una infección vaginal?\n\nLas tres causas más frecuentes son la candidiasis (hongos), la vaginosis bacteriana y la tricomoniasis. Se parecen en los síntomas pero se tratan con medicamentos distintos, por eso el cultivo importa. Con el resultado, el tratamiento suele ser en óvulos, crema o pastillas durante pocos días; en la tricomoniasis también debe tratarse la pareja para que no vuelva.\n\n## ¿Cuánto cuesta?\n\nLa consulta y cada prueba tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme el costo por WhatsApp al (832) 930-5551 antes de venir.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Lea también nuestra [guía de salud de la mujer](/blog/salud-mujer-houston-servicios-ginecologia).",
    "longDescriptionEn": "The gynecology visit resolves discomforts many women put up with for months and catches early what causes no symptoms, such as cervical lesions. At Clínica Hispana Corazón y Vida in Pasadena, care is in Spanish, private, without an appointment, and you may ask to be seen by a woman.\n\n## What does the gynecology visit include?\n\n- History, blood pressure and weight.\n- Pelvic and breast exam.\n- Pap test and, when appropriate, HPV test.\n- Vaginal cultures to identify yeast, bacteria or trichomonas.\n- Treatment of vaginal infections and sexually transmitted infections.\n- Guidance on contraception, periods, fertility and menopause.\n- [Ultrasound](/services/ultrasonido) when the uterus and ovaries need to be seen.\n\n## How often should I get a Pap test?\n\nBetween ages 21 and 29, every three years. Between 30 and 65, every three years with a Pap test or every five with an HPV test. If you had an abnormal result, the provider shortens the interval. Avoid intercourse, douching and vaginal products for 48 hours before the test.\n\n## Which symptoms should I get checked?\n\n- Discharge with a bad odor, burning or itching that does not improve.\n- Bleeding between periods, after intercourse or after menopause.\n- Persistent pelvic pain or pain with intercourse.\n- Very heavy or absent periods.\n- A lump, dimpling or discharge in a breast.\n\nNone is normal \"because of age\"; almost all have treatment when checked in time.\n\n## What is the visit like?\n\n1. A private conversation about the reason and your history.\n2. A physical exam according to the reason; you set the pace and may ask for a companion.\n3. Samples taken on the spot: Pap test, culture or STI tests.\n4. Initial treatment the same day when the diagnosis is clear, and a date to review results.\n\n## What if I have a vaginal infection?\n\nThe three most common causes are yeast infection (candidiasis), bacterial vaginosis and trichomoniasis. Their symptoms look alike but they are treated with different medications, which is why the culture matters. With the result, treatment is usually suppositories, cream or pills for a few days; with trichomoniasis the partner must also be treated so it does not come back.\n\n## How much does it cost?\n\nThe visit and each test have a direct price, no insurance, in cash or by card. Confirm the cost on WhatsApp at (832) 930-5551 before you come.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Also read our [women's health guide](/blog/salud-mujer-houston-servicios-ginecologia).",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en pasadena",
      "ginecologo pasadena español",
      "papanicolaou pasadena",
      "cultivo vaginal pasadena",
      "infeccion vaginal tratamiento pasadena"
    ],
    "keywordsEn": [
      "gynecology pasadena",
      "gynecologist pasadena spanish",
      "pap smear pasadena",
      "vaginal culture pasadena",
      "vaginal infection treatment pasadena"
    ],
    "features": [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish"
    ],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Pasadena, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Pasadena, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Corazón y Vida realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo (orina o sangre)\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Corazón y Vida we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Pregnancy test (urine or blood)\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo pasadena",
      "examen de embarazo pasadena",
      "confirmar embarazo pasadena",
      "test de embarazo español pasadena"
    ],
    "keywordsEn": [
      "pregnancy test pasadena",
      "pregnancy confirmation pasadena",
      "confirm pregnancy pasadena",
      "pregnancy testing pasadena"
    ],
    "features": [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Pasadena, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Pasadena, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Corazón y Vida te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana Corazón y Vida we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos pasadena",
      "metodos anticonceptivos pasadena",
      "inyeccion anticonceptiva pasadena",
      "pastillas anticonceptivas pasadena"
    ],
    "keywordsEn": [
      "birth control pasadena",
      "contraception clinic pasadena",
      "birth control shot pasadena",
      "birth control pills pasadena"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Pasadena, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Pasadena, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Corazón y Vida lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Corazón y Vida we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico pasadena",
      "quitar implante del brazo pasadena",
      "retiro de implante anticonceptivo pasadena",
      "remover implante pasadena"
    ],
    "keywordsEn": [
      "subdermal implant removal pasadena",
      "arm implant removal pasadena",
      "contraceptive implant removal pasadena",
      "birth control implant removal pasadena"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Salud del Hombre: Chequeo y Examen de PSA",
    "titleEn": "Men's Health: Checkup and PSA Test",
    "shortTitle": "Salud del Hombre",
    "description": "Chequeo de salud del hombre en Pasadena, TX: examen de PSA, perfil de laboratorio y consulta en español, sin seguro.",
    "descriptionEn": "Men's health checkup in Pasadena, TX: PSA test, lab profile and consultation in Spanish, no insurance needed.",
    "longDescription": "La salud del hombre muchas veces se posterga. En Clínica Hispana Corazón y Vida facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.\n\n**¿Qué incluye?**\n- Examen de antígeno prostático (PSA)\n- Medición del nivel de testosterona\n- Chequeo general y de signos vitales\n- Evaluación de síntomas urinarios o de energía\n- Referencia a especialista si se requiere\n\n**Por qué es importante**\nEl PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Men's health is often postponed. At Clínica Hispana Corazón y Vida we make it easy to get the exams that help catch important changes early, with results explained in Spanish.\n\n**What's included?**\n- Prostate antigen (PSA) test\n- Testosterone level measurement\n- General checkup and vital signs\n- Evaluation of urinary or energy symptoms\n- Referral to a specialist if needed\n\n**Why it matters**\nPSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre pasadena",
      "prueba psa pasadena",
      "examen de prostata pasadena",
      "chequeo de salud del hombre pasadena"
    ],
    "keywordsEn": [
      "mens health pasadena",
      "psa test pasadena",
      "prostate exam pasadena",
      "mens health checkup pasadena"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "dateModified": "2026-09-15",
    "title": "Análisis y Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Laboratorio en Pasadena, TX: biometría, glucosa, colesterol, tiroides, riñón, hígado y orina, con la muestra sin cita y el resultado explicado en español.",
    "descriptionEn": "Lab in Pasadena, TX: blood count, glucose, cholesterol, thyroid, kidney, liver and urine tests, drawn without an appointment and explained in Spanish.",
    "longDescription": "Un análisis de sangre muestra lo que los síntomas tardan meses en revelar: azúcar alta, colesterol, tiroides lenta, anemia o una infección. En Clínica Hispana Corazón y Vida, en Pasadena, tomamos la muestra sin cita y le explicamos el resultado en español, con el precio conocido antes de la extracción.\n\n## ¿Qué análisis hacemos?\n\n- Biometría hemática completa: anemia, infecciones y plaquetas.\n- Química sanguínea: glucosa, creatinina y función del riñón, enzimas del hígado, electrolitos.\n- Perfil de lípidos: colesterol total, LDL, HDL y triglicéridos.\n- Hemoglobina A1c para el control de la diabetes.\n- Tiroides (TSH y T4), vitamina B12 y vitamina D.\n- PSA para la próstata.\n- Examen general de orina y urocultivo.\n- Pruebas de embarazo, de infecciones de transmisión sexual y de tuberculosis (IGRA).\n- Paneles para exámenes de trabajo, escuela, inmigración y DOT.\n\nSi necesita una prueba que no está en la lista, pregunte: muchas se envían a un laboratorio de referencia desde la clínica.\n\n## ¿Tengo que venir en ayunas?\n\nPara glucosa en ayunas, sí: de 8 a 12 horas, solo agua. Para el perfil de lípidos es preferible el ayuno, aunque el médico puede pedirlo sin él. A1c, tiroides, biometría, PSA e infecciones no lo requieren. Tome sus medicamentos como siempre y díganos cuáles usa.\n\n## ¿Cuándo conviene hacerse análisis?\n\n- Chequeo anual, aunque se sienta bien.\n- Cada tres a seis meses si tiene diabetes, presión alta o colesterol.\n- Cansancio persistente, sed, cambios de peso sin causa, fiebre que no cede o infecciones repetidas.\n- Antes de iniciar un tratamiento hormonal, un suero vitaminado o un plan de peso.\n- Cuando lo exige un trámite laboral, escolar o migratorio.\n\n## ¿Cómo es la visita?\n\n1. En recepción indica qué pruebas necesita o el motivo; si no está seguro, el médico las elige con usted.\n2. Se toma la muestra de sangre u orina en la clínica.\n3. Le decimos el plazo de cada prueba: muchas básicas se procesan aquí y están listas rápido; las que van a laboratorio externo tardan algo más.\n4. Revisamos el resultado con usted y, si algo sale fuera de rango, se define el tratamiento o el seguimiento.\n\n## ¿Cómo leo mi resultado?\n\nEl reporte trae su valor junto al rango de referencia. Un valor fuera de rango no es un diagnóstico por sí solo: se interpreta con sus síntomas y su historial, y se repite cuando hace falta. Lea nuestra [guía de análisis de laboratorio](/blog/laboratorio-clinico-houston-analisis-sangre) para los valores más consultados.\n\n## ¿Cuánto cuesta?\n\nCada prueba tiene un precio directo, sin seguro, en efectivo o con tarjeta. Pregunte por WhatsApp al (832) 930-5551 el costo de la prueba o del panel que necesita.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Atendemos a Pasadena, South Houston, Deer Park, Galena Park, Genoa y Red Bluff.",
    "longDescriptionEn": "A blood test shows what symptoms take months to reveal: high sugar, cholesterol, a slow thyroid, anemia or an infection. At Clínica Hispana Corazón y Vida in Pasadena we draw the sample without an appointment and explain the result in Spanish, with the price known before the draw.\n\n## Which tests do we run?\n\n- Complete blood count: anemia, infections and platelets.\n- Blood chemistry: glucose, creatinine and kidney function, liver enzymes, electrolytes.\n- Lipid profile: total cholesterol, LDL, HDL and triglycerides.\n- Hemoglobin A1c for diabetes control.\n- Thyroid (TSH and T4), vitamin B12 and vitamin D.\n- PSA for the prostate.\n- Urinalysis and urine culture.\n- Pregnancy, sexually transmitted infection and tuberculosis (IGRA) tests.\n- Panels for work, school, immigration and DOT exams.\n\nIf you need a test not on the list, ask: many are sent to a reference laboratory from the clinic.\n\n## Do I have to come fasting?\n\nFor fasting glucose, yes: 8 to 12 hours, water only. For the lipid profile fasting is preferred, although your provider may order it without it. A1c, thyroid, blood count, PSA and infection tests do not require it. Take your medications as usual and tell us which ones you use.\n\n## When should I get tested?\n\n- Yearly checkup, even if you feel well.\n- Every three to six months if you have diabetes, high blood pressure or cholesterol.\n- Persistent fatigue, thirst, unexplained weight changes, fever that does not go away or repeated infections.\n- Before starting hormone treatment, an IV vitamin drip or a weight plan.\n- When a work, school or immigration process requires it.\n\n## What is the visit like?\n\n1. At the front desk you tell us which tests you need or the reason; if you are not sure, the provider chooses them with you.\n2. The blood or urine sample is taken at the clinic.\n3. We tell you the turnaround for each test: many basic ones are processed here and are ready quickly; those sent to an outside lab take a bit longer.\n4. We review the result with you and, if something is out of range, treatment or follow-up is defined.\n\n## How do I read my result?\n\nThe report shows your value next to the reference range. An out-of-range value is not a diagnosis by itself: it is interpreted with your symptoms and history, and repeated when needed. Read our [lab testing guide](/blog/laboratorio-clinico-houston-analisis-sangre) for the most consulted values.\n\n## How much does it cost?\n\nEach test has a direct price, no insurance, in cash or by card. Ask on WhatsApp at (832) 930-5551 for the cost of the test or panel you need.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. We serve Pasadena, South Houston, Deer Park, Galena Park, Genoa and Red Bluff.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre pasadena",
      "analisis de sangre pasadena",
      "laboratorio pasadena",
      "laboratorio cerca de mi pasadena"
    ],
    "keywordsEn": [
      "blood test pasadena",
      "blood work pasadena",
      "lab near me pasadena",
      "clinical lab pasadena"
    ],
    "features": [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "dateModified": "2026-09-15",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infección urinaria el mismo día en Pasadena, TX: urianálisis en la clínica, urocultivo si hace falta y antibiótico.",
    "descriptionEn": "Urine test and same-day urinary infection treatment in Pasadena, TX: in-clinic urinalysis, urine culture if needed and antibiotics. Walk in.",
    "longDescription": "Ardor al orinar, ganas constantes de ir al baño y orina turbia son las señales clásicas de una infección urinaria. En Clínica Hispana Corazón y Vida, en Pasadena, hacemos el examen de orina en la clínica y, si hay infección, sale con el tratamiento el mismo día, sin cita y en español.\n\n## ¿Qué incluye la consulta?\n\n- Evaluación de síntomas e historial, incluidas infecciones previas.\n- Examen general de orina (urianálisis) en la clínica.\n- Urocultivo cuando la infección se repite, no mejora o hay factores de riesgo, para saber qué bacteria es y qué antibiótico funciona.\n- Antibiótico indicado por el médico y medidas para aliviar el ardor.\n- Prueba de embarazo si corresponde, porque cambia el tratamiento.\n- Indicaciones para evitar que vuelva.\n\n## ¿Cuáles son los síntomas?\n\n- Ardor o dolor al orinar.\n- Ganas frecuentes y urgentes de orinar, con poca cantidad.\n- Orina turbia, con mal olor o con sangre.\n- Dolor o presión en la parte baja del abdomen.\n\nSi además hay fiebre, escalofríos, náusea o dolor en la espalda baja o el costado, la infección puede haber llegado al riñón: acuda el mismo día o, si es de noche y está muy mal, a emergencias.\n\n## ¿Cómo es la visita?\n\n1. Recoge una muestra de orina en la clínica; conviene que sea de la mitad del chorro.\n2. El urianálisis se procesa en minutos.\n3. El médico revisa el resultado con sus síntomas y decide el tratamiento.\n4. Si se envía urocultivo, se ajusta el antibiótico cuando llega el resultado.\n\n## ¿Cómo evito que regrese?\n\nBeba agua durante el día, no aguante las ganas de orinar, orine después de las relaciones, límpiese de adelante hacia atrás y termine el antibiótico completo aunque se sienta mejor. Si tiene tres o más infecciones al año, conviene estudiar la causa.\n\n## ¿Por qué las mujeres tienen más infecciones urinarias?\n\nLa uretra femenina es corta y está cerca de la vagina y el recto, así que las bacterias llegan con facilidad a la vejiga. El embarazo, la menopausia, la diabetes y algunos anticonceptivos aumentan el riesgo. En los hombres son menos comunes, y cuando aparecen conviene revisar la próstata; en niños y adultos mayores los síntomas pueden ser solo fiebre o confusión.\n\n## ¿Cuánto cuesta?\n\nLa consulta y el examen de orina tienen precio directo, sin seguro, en efectivo o con tarjeta; el urocultivo se cobra aparte cuando hace falta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Atendemos a Pasadena, South Houston, Deer Park, Galena Park, Genoa y Red Bluff.",
    "longDescriptionEn": "Burning when urinating, a constant urge to go and cloudy urine are the classic signs of a urinary tract infection. At Clínica Hispana Corazón y Vida in Pasadena we run the urine test at the clinic and, if there is an infection, you leave with treatment the same day, without an appointment and in Spanish.\n\n## What does the visit include?\n\n- Evaluation of symptoms and history, including previous infections.\n- Urinalysis at the clinic.\n- Urine culture when the infection recurs, does not improve or there are risk factors, to identify the bacteria and the antibiotic that works.\n- Antibiotic prescribed by the provider and measures to relieve the burning.\n- Pregnancy test when appropriate, because it changes the treatment.\n- Guidance to keep it from coming back.\n\n## What are the symptoms?\n\n- Burning or pain when urinating.\n- Frequent, urgent need to urinate, with small amounts.\n- Cloudy, foul-smelling or bloody urine.\n- Pain or pressure in the lower abdomen.\n\nIf there is also fever, chills, nausea or pain in the lower back or side, the infection may have reached the kidney: come in the same day or, if it is night and you feel very ill, go to the emergency room.\n\n## What is the visit like?\n\n1. You collect a urine sample at the clinic; a midstream sample is best.\n2. The urinalysis is processed in minutes.\n3. The provider reviews the result with your symptoms and decides the treatment.\n4. If a culture is sent, the antibiotic is adjusted when the result arrives.\n\n## How do I keep it from coming back?\n\nDrink water during the day, do not hold your urine, urinate after intercourse, wipe front to back and finish the full course of antibiotics even if you feel better. If you have three or more infections a year, the cause should be studied.\n\n## Why do women get more urinary infections?\n\nThe female urethra is short and close to the vagina and rectum, so bacteria reach the bladder easily. Pregnancy, menopause, diabetes and some contraceptives raise the risk. In men they are less common, and when they occur the prostate should be checked; in children and older adults the only symptoms may be fever or confusion.\n\n## How much does it cost?\n\nThe visit and the urine test have a direct price, no insurance, in cash or by card; the urine culture is charged separately when needed. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. We serve Pasadena, South Houston, Deer Park, Galena Park, Genoa and Red Bluff.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina pasadena",
      "infeccion urinaria pasadena",
      "tratamiento infeccion urinaria pasadena",
      "doctor infeccion de orina pasadena"
    ],
    "keywordsEn": [
      "urinalysis pasadena",
      "urinary tract infection pasadena",
      "uti treatment pasadena",
      "uti doctor pasadena"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Pasadena, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Pasadena, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Corazón y Vida realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.\n\n**¿Qué incluye?**\n- Análisis general de heces fecales\n- Detección de parásitos\n- Identificación de infecciones intestinales\n- Evaluación de sangre oculta cuando se requiere\n- Resultados explicados en español\n\n**Cuándo es útil**\nDiarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Corazón y Vida we perform stool tests to find the source and give you the right treatment.\n\n**What's included?**\n- General stool analysis\n- Parasite detection\n- Identification of intestinal infections\n- Occult-blood evaluation when needed\n- Results explained in Spanish\n\n**When it helps**\nPersistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces pasadena",
      "analisis de heces fecales pasadena",
      "examen de parasitos pasadena",
      "laboratorio heces pasadena"
    ],
    "keywordsEn": [
      "stool test pasadena",
      "stool analysis pasadena",
      "parasite test pasadena",
      "stool lab pasadena"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Pasadena, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Pasadena, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Corazón y Vida hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Corazón y Vida we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo pasadena",
      "strep test pasadena",
      "prueba de garganta pasadena",
      "dolor de garganta doctor pasadena"
    ],
    "keywordsEn": [
      "strep test pasadena",
      "rapid strep test pasadena",
      "sore throat test pasadena",
      "strep throat doctor pasadena"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Pasadena, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Pasadena, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Corazón y Vida la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Corazón y Vida we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis pasadena",
      "prueba ppd pasadena",
      "prueba de tb pasadena",
      "tb test español pasadena"
    ],
    "keywordsEn": [
      "tuberculosis test pasadena",
      "ppd test pasadena",
      "tb test pasadena",
      "tb skin test pasadena"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Pasadena, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Pasadena, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Corazón y Vida ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y factores de riesgo\n- Pruebas de las infecciones más comunes\n- Análisis de laboratorio\n- Tratamiento y orientación si el resultado es positivo\n- Total confidencialidad\n\n**Cuándo hacerte la prueba**\nSi tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Taking care of your sexual health is an act of responsibility. At Clínica Hispana Corazón y Vida we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.\n\n**What's included?**\n- Symptom and risk-factor assessment\n- Testing for the most common infections\n- Laboratory analysis\n- Treatment and guidance if the result is positive\n- Complete confidentiality\n\n**When to get tested**\nIf you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std pasadena",
      "examen de transmision sexual pasadena",
      "prueba ets confidencial pasadena",
      "clinica std español pasadena"
    ],
    "keywordsEn": [
      "std testing pasadena",
      "std test near me pasadena",
      "confidential std clinic pasadena",
      "sti testing pasadena"
    ],
    "features": [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español"
    ],
    "featuresEn": [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Pasadena, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Pasadena, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Corazón y Vida la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana Corazón y Vida we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas pasadena",
      "prueba de alcohol y drogas pasadena",
      "drug test pasadena español",
      "examen de drogas para trabajo pasadena"
    ],
    "keywordsEn": [
      "drug test pasadena",
      "alcohol and drug test pasadena",
      "employment drug test pasadena",
      "drug screening pasadena"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Pasadena, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Pasadena, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Corazón y Vida lo realizamos como parte de chequeos y exámenes médicos.\n\n**¿Qué incluye?**\n- Estudio del ritmo y la actividad del corazón\n- Interpretación por personal médico\n- Útil para exámenes de trabajo, deporte o cirugía\n- Resultados explicados en español\n\n**Cuándo se recomienda**\nSi tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Corazón y Vida we perform it as part of checkups and medical exams.\n\n**What's included?**\n- Study of your heart's rhythm and activity\n- Interpretation by medical staff\n- Useful for work, sports or surgery exams\n- Results explained in Spanish\n\n**When it's recommended**\nIf you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma pasadena",
      "ekg pasadena español",
      "examen del corazon pasadena",
      "ecg pasadena"
    ],
    "keywordsEn": [
      "electrocardiogram pasadena",
      "ekg pasadena",
      "heart test pasadena",
      "ecg pasadena spanish"
    ],
    "features": [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español"
    ],
    "featuresEn": [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Pasadena, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Pasadena, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Corazón y Vida contamos con equipo moderno y personal que te explica todo en español.\n\n**¿Qué incluye?**\n- Ultrasonido abdominal (hígado, vesícula, riñones)\n- Ultrasonido pélvico\n- Ultrasonido de embarazo (control y seguimiento)\n- Evaluación de tiroides y tejidos blandos\n\n**Sin radiación y sin dolor**\nA diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Corazón y Vida we have modern equipment and staff who explain everything in Spanish.\n\n**What's included?**\n- Abdominal ultrasound (liver, gallbladder, kidneys)\n- Pelvic ultrasound\n- Pregnancy ultrasound (monitoring and follow-up)\n- Thyroid and soft-tissue evaluation\n\n**No radiation, no pain**\nUnlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido pasadena",
      "ecografia pasadena español",
      "ultrasonido de embarazo pasadena",
      "sonograma pasadena"
    ],
    "keywordsEn": [
      "ultrasound pasadena",
      "sonogram pasadena",
      "pregnancy ultrasound pasadena",
      "abdominal ultrasound pasadena"
    ],
    "features": [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español"
    ],
    "featuresEn": [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "dateModified": "2026-09-15",
    "title": "Examen Físico DOT - Licencia CDL",
    "titleEn": "DOT Physical Exam - CDL License",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT para licencia CDL en Pasadena, TX, con examinador certificado y certificado impreso el mismo día si aprueba. Sin cita, en español.",
    "descriptionEn": "DOT physical for the CDL in Pasadena, TX, with a certified examiner and a printed certificate the same day if you pass. Walk in, Spanish spoken.",
    "longDescription": "El examen físico DOT es la revisión médica que la FMCSA exige a los conductores de vehículos comerciales para obtener o renovar la licencia CDL. En Clínica Hispana Corazón y Vida lo hacemos en Pasadena, sin cita, en español, y si aprueba sale con el certificado médico impreso en la misma visita.\n\n## ¿Qué revisa el examen DOT?\n\n- Historial de salud: enfermedades, cirugías, medicamentos y hábitos.\n- Visión: al menos 20/40 en cada ojo, con o sin lentes, campo visual y distinción de colores.\n- Audición: susurro fuerte a cinco pies o audiometría.\n- Presión arterial y pulso.\n- Análisis de orina para proteína, sangre y azúcar (no es prueba de drogas).\n- Examen físico general: corazón, pulmones, abdomen, columna, extremidades y hernias.\n\n## ¿Cuánto dura el certificado?\n\nCon presión menor de 140/90 y sin condiciones que vigilar, el certificado habitual es de 24 meses. Con presión entre 140-159/90-99 se emite por 12 meses, y con diabetes tratada con insulina por hasta 12 meses, siempre que traiga el formulario MCSA-5870 llenado por su médico tratante. El examinador explica el plazo antes de firmar.\n\n## ¿Qué debo traer?\n\n- Identificación con foto y licencia de conducir.\n- Lentes o audífonos, si los usa.\n- Lista de medicamentos con dosis.\n- Reporte de uso del CPAP de los últimos 90 días, si tiene apnea del sueño.\n- Carta reciente de su cardiólogo, si tiene una condición del corazón.\n- Formulario MCSA-5870, si usa insulina.\n\n## ¿Cómo es la visita en Pasadena?\n\n1. Llena la parte del conductor del formulario en recepción.\n2. Se toman signos vitales, visión, audición y muestra de orina.\n3. El examinador revisa el historial y hace el examen físico.\n4. Si aprueba, recibe el certificado médico (MCSA-5876) impreso; guarde una copia y entregue otra al DPS de Texas.\n\nLa consulta suele tomar entre 30 y 45 minutos cuando trae los documentos completos.\n\n## ¿Qué pasa si mi presión sale alta ese día?\n\nEl examinador puede repetir la medición tras unos minutos de reposo. Si sigue alta, puede emitir un certificado más corto mientras la controla; la presión alta se trata aquí mismo y puede volver a revisarse sin cita.\n\n## ¿Cuánto cuesta y cómo se paga?\n\nEl examen DOT se paga directo, sin seguro, en efectivo o con tarjeta. Confirme el precio del día llamando o por WhatsApp al (832) 930-5551 antes de venir. No hay cargo adicional por atenderse sin cita.\n\n## ¿Dónde y cuándo?\n\nAtendemos por orden de llegada en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Recibimos conductores de Pasadena, South Houston, Deer Park, Galena Park, Genoa y Red Bluff. Lea también nuestra [guía completa del examen DOT](/blog/examen-dot-cdl-camioneros-houston).",
    "longDescriptionEn": "The DOT physical is the medical exam the FMCSA requires of commercial drivers to obtain or renew a CDL. At Clínica Hispana Corazón y Vida we do it in Pasadena, without an appointment, in Spanish, and if you pass you leave with the printed medical certificate in the same visit.\n\n## What does the DOT physical check?\n\n- Health history: illnesses, surgeries, medications and habits.\n- Vision: at least 20/40 in each eye, with or without glasses, field of vision and color recognition.\n- Hearing: forced whisper at five feet or audiometry.\n- Blood pressure and pulse.\n- Urinalysis for protein, blood and sugar (not a drug test).\n- General physical exam: heart, lungs, abdomen, spine, limbs and hernias.\n\n## How long does the certificate last?\n\nWith blood pressure under 140/90 and no conditions to monitor, the usual certificate is 24 months. With pressure between 140-159/90-99 it is issued for 12 months, and with insulin-treated diabetes for up to 12 months, as long as you bring form MCSA-5870 completed by your treating clinician. The examiner explains the length before signing.\n\n## What should I bring?\n\n- Photo ID and driver's license.\n- Glasses or hearing aids, if you use them.\n- A list of medications with doses.\n- CPAP usage report for the last 90 days, if you have sleep apnea.\n- A recent letter from your cardiologist, if you have a heart condition.\n- Form MCSA-5870, if you use insulin.\n\n## What is the visit like in Pasadena?\n\n1. You complete the driver section of the form at the front desk.\n2. Vital signs, vision, hearing and a urine sample are taken.\n3. The examiner reviews your history and performs the physical exam.\n4. If you pass, you receive the printed Medical Examiner's Certificate (MCSA-5876); keep a copy and submit another to Texas DPS.\n\nThe visit usually takes 30 to 45 minutes when you bring complete documents.\n\n## What if my blood pressure is high that day?\n\nThe examiner can repeat the reading after a few minutes of rest. If it stays high, a shorter certificate can be issued while you get it under control; high blood pressure is treated right here and can be rechecked without an appointment.\n\n## How much does it cost and how do I pay?\n\nThe DOT physical is self-pay, no insurance, in cash or by card. Confirm the current price by phone or WhatsApp at (832) 930-5551 before you come. There is no extra charge for walking in.\n\n## Where and when?\n\nWe see drivers in order of arrival at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. We serve drivers from Pasadena, South Houston, Deer Park, Galena Park, Genoa and Red Bluff. Read our [complete DOT physical guide](/blog/examen-dot-cdl-camioneros-houston) as well.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot pasadena",
      "examen fisico dot pasadena español",
      "examen cdl pasadena",
      "dot physical pasadena español"
    ],
    "keywordsEn": [
      "dot physical pasadena",
      "dot exam pasadena",
      "cdl physical pasadena",
      "dot medical exam pasadena"
    ],
    "features": [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español"
    ],
    "featuresEn": [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish"
    ],
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "dateModified": "2026-09-15",
    "title": "Examen Médico de Inmigración I-693",
    "titleEn": "Immigration Medical Exam I-693",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Pasadena, TX: examen físico, pruebas de laboratorio y vacunas según USCIS, con el formulario sellado. En español.",
    "descriptionEn": "I-693 immigration medical exam in Pasadena, TX: physical exam, USCIS-required lab tests and vaccines, with the sealed form. Spanish spoken, no insurance.",
    "longDescription": "El examen médico de inmigración es el formulario I-693 que USCIS pide al solicitar la residencia permanente. En Clínica Hispana Corazón y Vida, en Pasadena, lo realiza un médico designado por USCIS, en español, y usted recibe el formulario completo en sobre sellado más una copia para su archivo.\n\n## ¿Qué incluye el examen I-693?\n\n- Revisión del historial médico y de la cartilla de vacunas.\n- Examen físico completo, con preguntas sobre salud mental y consumo de sustancias.\n- Prueba de sangre para tuberculosis (IGRA) a partir de los dos años; radiografía de tórax si sale positiva.\n- Prueba de sífilis entre los 18 y 44 años y de gonorrea entre los 18 y 24.\n- Aplicación de las vacunas que falten según la edad: MMR, Tdap o Td, polio, hepatitis A y B, varicela, influenza en temporada y otras según las instrucciones del CDC.\n- Llenado del formulario I-693 en su edición vigente y entrega en sobre sellado.\n\nLa vacuna contra el COVID-19 ya no es requisito desde enero de 2025.\n\n## ¿Quién puede firmar el I-693?\n\nSolo un médico con la designación de Civil Surgeon de USCIS. Antes de venir puede comprobar la clínica en el buscador oficial de USCIS. Un examen firmado por un médico sin designación no es válido.\n\n## ¿Qué debo traer?\n\n- Pasaporte o identificación con foto.\n- Cartilla de vacunas, en cualquier idioma.\n- Informes médicos de condiciones crónicas y lista de medicamentos.\n- Su nombre exacto como aparece en la solicitud de inmigración.\n\nSin registro escrito, una vacuna se considera no aplicada y se repone.\n\n## ¿Cómo es la visita?\n\n1. Recepción y revisión de documentos.\n2. Examen físico y toma de muestras de laboratorio.\n3. Aplicación de vacunas pendientes.\n4. Entrega del formulario sellado cuando los resultados están listos; si hace falta una segunda visita por la radiografía o una dosis adicional, se le indica la fecha.\n\nLa primera visita suele durar entre una y dos horas.\n\n## ¿Cómo se entrega a USCIS?\n\nDesde el 2 de diciembre de 2024 el I-693 debe presentarse junto con el formulario I-485. Si presenta en papel, el sobre va cerrado; si presenta en línea, USCIS indica abrirlo y subir el formulario. Desde junio de 2025 el formulario vale, en general, solo para la solicitud con la que se presenta. Coordine la fecha del examen con su abogado.\n\n## ¿Cuánto cuesta?\n\nEl examen se paga directo, sin seguro, en efectivo o con tarjeta; las vacunas y pruebas que necesite se cobran según su caso. Confirme el precio por WhatsApp al (832) 930-5551 antes de venir.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Más detalle en nuestra [guía del examen I-693](/blog/guia-examen-medico-inmigracion-i693-houston).",
    "longDescriptionEn": "The immigration medical exam is Form I-693, which USCIS requires when applying for permanent residence. At Clínica Hispana Corazón y Vida in Pasadena it is performed by a USCIS-designated physician, in Spanish, and you receive the completed form in a sealed envelope plus a copy for your records.\n\n## What does the I-693 exam include?\n\n- Review of medical history and vaccination record.\n- Complete physical exam, with questions about mental health and substance use.\n- Blood test for tuberculosis (IGRA) from age two; chest X-ray if positive.\n- Syphilis test between ages 18 and 44 and gonorrhea test between 18 and 24.\n- Missing vaccines according to age: MMR, Tdap or Td, polio, hepatitis A and B, varicella, influenza in season and others per CDC instructions.\n- Completion of Form I-693 in its current edition and delivery in a sealed envelope.\n\nThe COVID-19 vaccine is no longer required since January 2025.\n\n## Who can sign the I-693?\n\nOnly a physician with the USCIS Civil Surgeon designation. Before coming, you can verify the clinic in the official USCIS locator. An exam signed by a physician without the designation is not valid.\n\n## What should I bring?\n\n- Passport or photo ID.\n- Vaccination record, in any language.\n- Medical reports for chronic conditions and a list of medications.\n- Your name exactly as it appears on your immigration application.\n\nWithout a written record, a vaccine counts as not given and is replaced.\n\n## What is the visit like?\n\n1. Front desk and document review.\n2. Physical exam and lab samples.\n3. Pending vaccines.\n4. Delivery of the sealed form when results are ready; if a second visit is needed for the X-ray or an additional dose, we give you the date.\n\nThe first visit usually takes one to two hours.\n\n## How is it submitted to USCIS?\n\nSince December 2, 2024 the I-693 must be filed together with Form I-485. If you file on paper, the envelope stays sealed; if you file online, USCIS instructs you to open it and upload the form. Since June 2025 the form is generally valid only for the application it is submitted with. Coordinate the exam date with your attorney.\n\n## How much does it cost?\n\nThe exam is self-pay, no insurance, in cash or by card; any vaccines and tests you need are charged according to your case. Confirm the price on WhatsApp at (832) 930-5551 before you come.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. More detail in our [I-693 exam guide](/blog/guia-examen-medico-inmigracion-i693-houston).",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion pasadena",
      "examen medico i-693 pasadena",
      "civil surgeon pasadena español",
      "medico autorizado uscis pasadena"
    ],
    "keywordsEn": [
      "immigration medical exam pasadena",
      "i-693 exam pasadena",
      "civil surgeon pasadena",
      "uscis authorized doctor pasadena"
    ],
    "features": [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish"
    ],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Pasadena, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Pasadena, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Corazón y Vida aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.\n\n**¿Qué incluye?**\n- Vacuna anual contra la influenza (flu)\n- Toxoide tetánico (refuerzo del tétanos)\n- Aplicación por personal médico\n- Orientación sobre cuándo aplicar refuerzos\n- Atención en español\n\n**Por qué vacunarte**\nLa vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Corazón y Vida we administer the influenza vaccine and tetanus toxoid safely and quickly.\n\n**What's included?**\n- Annual influenza (flu) vaccine\n- Tetanus toxoid (tetanus booster)\n- Administered by medical staff\n- Guidance on when boosters are due\n- Care in Spanish\n\n**Why get vaccinated**\nThe flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu pasadena",
      "vacuna contra la influenza pasadena",
      "toxoide tetanico pasadena",
      "vacuna del tetano pasadena"
    ],
    "keywordsEn": [
      "flu shot pasadena",
      "flu vaccine pasadena",
      "tetanus shot pasadena",
      "tdap vaccine pasadena"
    ],
    "features": [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "dateModified": "2026-09-15",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados intravenosos en Pasadena, TX, aplicados por personal médico tras una evaluación breve: hidratación, vitaminas y minerales. Sin cita.",
    "descriptionEn": "IV vitamin drips in Pasadena, TX, given by medical staff after a brief evaluation: hydration, vitamins and minerals. Walk in, Spanish spoken.",
    "longDescription": "Un suero vitaminado lleva líquidos, vitaminas y minerales directamente a la vena, sin pasar por el estómago. En Clínica Hispana Corazón y Vida, en Pasadena, lo aplica personal médico después de una evaluación breve, para que la mezcla y la dosis sean las adecuadas para usted.\n\n## ¿Para qué se usa un suero vitaminado?\n\n- Recuperarse de deshidratación por calor, trabajo físico, vómito o diarrea.\n- Reponer vitaminas cuando el análisis muestra deficiencia, por ejemplo de B12.\n- Apoyar la recuperación después de una gripe o de un periodo de agotamiento.\n- Complementar un plan de nutrición o de energía indicado por el médico.\n\nNo sustituye una alimentación adecuada ni el tratamiento de una enfermedad de fondo. Si el cansancio persiste, primero buscamos la causa con un [análisis de sangre](/services/examenes-sangre).\n\n## ¿Cómo es la visita?\n\n1. Evaluación breve: motivo, historial, medicamentos y alergias; toma de signos vitales.\n2. El médico elige el tipo de suero y la dosis según su caso.\n3. Colocación de la vía y aplicación en un sillón cómodo, con supervisión durante toda la infusión.\n4. Retiro de la vía y recomendaciones para las horas siguientes.\n\nLa aplicación suele durar entre 30 y 60 minutos según el volumen indicado.\n\n## ¿Quién no debe recibir un suero?\n\nPersonas con insuficiencia renal o cardíaca, embarazo sin valoración previa, alergia a algún componente o ciertas condiciones que el médico revisa en la evaluación. Por eso no aplicamos sueros sin consulta previa.\n\n## ¿Qué debo hacer antes y después?\n\nComa algo ligero antes de venir y traiga la lista de sus medicamentos. Después, beba agua, evite alcohol ese día y avise si nota dolor o enrojecimiento en el sitio de la vía.\n\n## ¿Qué tipos de suero hay?\n\nLos más usados son el suero de hidratación simple, que repone líquidos y electrolitos; el suero con vitaminas del complejo B y vitamina C, orientado a energía y recuperación; y las combinaciones con minerales como magnesio o zinc. El médico indica cuál conviene según su evaluación y su análisis, y le explica qué lleva antes de aplicarlo.\n\n## ¿Cuánto cuesta?\n\nEl suero se paga directo, sin seguro, en efectivo o con tarjeta; el precio depende del tipo de suero que el médico indique. Confirme por WhatsApp al (832) 930-5551 antes de venir.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Lea también cuándo conviene la [vitamina B12 en inyección o suero](/blog/vitamina-b12-beneficios-inyecciones-pasadena).",
    "longDescriptionEn": "An IV vitamin drip delivers fluids, vitamins and minerals directly into the vein, bypassing the stomach. At Clínica Hispana Corazón y Vida in Pasadena it is given by medical staff after a brief evaluation, so the mix and the dose are right for you.\n\n## What is an IV vitamin drip used for?\n\n- Recovering from dehydration due to heat, physical work, vomiting or diarrhea.\n- Replacing vitamins when a test shows a deficiency, for example B12.\n- Supporting recovery after the flu or a period of exhaustion.\n- Complementing a nutrition or energy plan indicated by the provider.\n\nIt does not replace a proper diet or the treatment of an underlying illness. If fatigue persists, we first look for the cause with a [blood test](/services/examenes-sangre).\n\n## What is the visit like?\n\n1. Brief evaluation: reason, history, medications and allergies; vital signs.\n2. The provider chooses the type of drip and the dose for your case.\n3. IV placement and infusion in a comfortable chair, supervised throughout.\n4. IV removal and recommendations for the following hours.\n\nThe infusion usually takes 30 to 60 minutes depending on the volume indicated.\n\n## Who should not receive a drip?\n\nPeople with kidney or heart failure, pregnancy without prior evaluation, allergy to any component, or certain conditions the provider reviews during the evaluation. That is why we do not give drips without a prior consultation.\n\n## What should I do before and after?\n\nEat something light before coming and bring your medication list. Afterwards, drink water, avoid alcohol that day and let us know if you notice pain or redness at the IV site.\n\n## Which types of drip are there?\n\nThe most common are the simple hydration drip, which replaces fluids and electrolytes; the drip with B-complex and vitamin C, aimed at energy and recovery; and combinations with minerals such as magnesium or zinc. The provider indicates which one suits you based on your evaluation and lab work, and explains what it contains before giving it.\n\n## How much does it cost?\n\nThe drip is self-pay, no insurance, in cash or by card; the price depends on the type of drip the provider indicates. Confirm on WhatsApp at (832) 930-5551 before you come.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Also read when [vitamin B12 by injection or drip](/blog/vitamina-b12-beneficios-inyecciones-pasadena) makes sense.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados pasadena",
      "terapia iv pasadena",
      "suero de vitaminas pasadena",
      "hidratacion intravenosa pasadena"
    ],
    "keywordsEn": [
      "vitamin iv therapy pasadena",
      "iv drip pasadena",
      "iv hydration pasadena",
      "vitamin drip pasadena"
    ],
    "features": [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Pasadena, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Pasadena, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Corazón y Vida cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Corazón y Vida we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas pasadena",
      "puntos para herida pasadena",
      "cerrar herida pasadena",
      "doctor para cortadas pasadena"
    ],
    "keywordsEn": [
      "wound suturing pasadena",
      "stitches pasadena",
      "laceration repair pasadena",
      "cut treatment pasadena"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Pasadena, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Pasadena, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Corazón y Vida limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Corazón y Vida we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas pasadena",
      "cura de heridas pasadena",
      "cambio de vendaje pasadena",
      "limpieza de herida pasadena"
    ],
    "keywordsEn": [
      "wound care pasadena",
      "wound dressing pasadena",
      "dressing change pasadena",
      "wound cleaning pasadena"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Pasadena, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Pasadena, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Corazón y Vida realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Corazón y Vida we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor pasadena",
      "quitar lunar pasadena",
      "extraccion de quiste pasadena",
      "cirugia ambulatoria pasadena"
    ],
    "keywordsEn": [
      "minor surgery pasadena",
      "mole removal pasadena",
      "cyst removal pasadena",
      "lipoma removal pasadena"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Pasadena, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Pasadena, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Corazón y Vida lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.\n\n**¿Qué incluye?**\n- Evaluación del absceso o infección de piel\n- Drenaje con anestesia local\n- Limpieza y desinfección de la zona\n- Tratamiento de la infección cuando se requiere\n- Indicaciones de cuidado y seguimiento\n\n**No lo dejes pasar**\nUn bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Corazón y Vida we treat it safely to relieve the discomfort and prevent the infection from spreading.\n\n**What's included?**\n- Evaluation of the abscess or skin infection\n- Drainage with local anesthesia\n- Cleaning and disinfection of the area\n- Treatment of the infection when needed\n- Care and follow-up instructions\n\n**Don't let it go**\nA red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso pasadena",
      "drenar absceso pasadena",
      "infeccion de piel pasadena",
      "tratamiento de absceso pasadena"
    ],
    "keywordsEn": [
      "abscess drainage pasadena",
      "drain abscess pasadena",
      "skin infection pasadena",
      "boil treatment pasadena"
    ],
    "features": [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Pasadena, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Pasadena, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Corazón y Vida la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Corazón y Vida we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada pasadena",
      "extraccion de uña encarnada pasadena",
      "tratamiento uña encarnada pasadena",
      "doctor para uña encarnada pasadena"
    ],
    "keywordsEn": [
      "ingrown toenail pasadena",
      "ingrown toenail removal pasadena",
      "ingrown nail treatment pasadena",
      "toenail doctor pasadena"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia dentro de la clínica en Pasadena, TX: medicamentos disponibles al terminar tu consulta, con atención en español.",
    "descriptionEn": "In-clinic pharmacy in Pasadena, TX: medications available right after your visit, with service in Spanish.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana Corazón y Vida puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.\n\n**¿Qué incluye?**\n- Surtido de tu receta justo al terminar la consulta\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n- Resurtido de recetas\n\n**¿Por qué usar nuestra farmacia?**\nTe ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.\n\n**¿Por qué elegir Clínica Hispana Corazón y Vida?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 918 W Southmore Ave Suite 180, Pasadena, TX 77502, con horario de lunes a sábado de 9 AM a 9 PM y domingos de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Pasadena, TX y el área sureste de Houston: South Houston, Deer Park, Galena Park, Genoa, Red Bluff y comunidades cercanas.",
    "longDescriptionEn": "After your visit at Clínica Hispana Corazón y Vida you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.\n\n**What's included?**\n- Your prescription filled right after your visit\n- Brand-name and generic medications\n- Over-the-counter (OTC) medications for colds, pain, allergies and more\n- Staff guidance on how to take your medications\n- Prescription refills\n\n**Why use our pharmacy?**\nYou skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.\n\n**Why choose Clínica Hispana Corazón y Vida?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 918 W Southmore Ave Suite 180, Pasadena, TX 77502, open Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Pasadena, TX and the southeast Houston area: South Houston, Deer Park, Galena Park, Genoa, Red Bluff and nearby communities.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en pasadena",
      "farmacia hispana pasadena",
      "farmacia cerca de mí pasadena",
      "medicamentos en la clinica pasadena"
    ],
    "keywordsEn": [
      "pharmacy pasadena",
      "hispanic pharmacy pasadena",
      "pharmacy near me pasadena",
      "medications at the clinic pasadena"
    ],
    "features": [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish"
    ],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    slug: "control-ginecologico",
    serviceSlug: "ginecologia",
    title: "Control Ginecológico",
    titleEn: "Gynecological Care",
    price: null,
    blurb:
      "Acompañamos cada etapa de tu vida con atención ginecológica especializada, cercana y respetuosa, 100% en español.",
    blurbEn:
      "We support every stage of your life with specialized, caring and respectful gynecological care, 100% in Spanish.",
    includes: ["Balance hormonal", "Consulta ginecológica", "Fertilidad y anticoncepción", "Ultrasonido y Papanicolau"],
    includesEn: ["Hormone balance", "Gynecological consultation", "Fertility and contraception", "Ultrasound and Pap smear"],
    image: "/images/promotions/control-ginecologico.webp",
    alt: "Promoción de control ginecológico en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Gynecological Care promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    highlighted: true,
    order: 1,
  },
  {
    slug: "diabetes-hipertension",
    serviceSlug: "condiciones-cronicas",
    title: "Diabetes e Hipertensión",
    titleEn: "Diabetes & Hypertension",
    price: null,
    blurb:
      "El cansancio excesivo no es normal: podría ser tu presión o tu azúcar. Ven por un perfil de laboratorio hoy mismo, sin cita previa.",
    blurbEn:
      "Excessive fatigue isn't normal — it could be your blood pressure or blood sugar. Come in for a lab panel today, no appointment needed.",
    includes: ["Perfil de laboratorio", "Chequeo de presión y azúcar", "Consultas en español", "Precios accesibles"],
    includesEn: ["Lab panel", "Blood pressure and sugar check", "Care in Spanish", "Affordable pricing"],
    image: "/images/promotions/diabetes-hipertension.webp",
    alt: "Promoción de diabetes e hipertensión en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Diabetes & Hypertension promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    highlighted: true,
    order: 2,
  },
  {
    slug: "menopausia-salud-reproductiva",
    serviceSlug: "ginecologia",
    title: "Menopausia y Salud Reproductiva",
    titleEn: "Menopause & Reproductive Health",
    price: null,
    blurb:
      "Entendemos los cambios de tu cuerpo y te ofrecemos un espacio de confianza para hablar de tus síntomas, 100% en español.",
    blurbEn:
      "We understand the changes in your body and offer a trusted space to talk about your symptoms, 100% in Spanish.",
    includes: ["Evaluación de síntomas", "Espacio de confianza y privacidad", "Consultas 100% en español", "Precios accesibles"],
    includesEn: ["Symptom evaluation", "Private, trusted space", "100% Spanish-speaking care", "Affordable pricing"],
    image: "/images/promotions/menopausia-salud-reproductiva.webp",
    alt: "Promoción de menopausia y salud reproductiva en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Menopause & Reproductive Health promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 3,
  },
  {
    slug: "atencion-sin-seguro",
    serviceSlug: "examenes-sangre",
    title: "Atención Médica Sin Seguro",
    titleEn: "Medical Care Without Insurance",
    price: null,
    blurb:
      "¿Crees que sin seguro no puedes ir al médico? Te atendemos con un modelo de pago directo, transparente y sin facturas sorpresa.",
    blurbEn:
      "Think you can't see a doctor without insurance? We care for you with a transparent direct-pay model and no surprise bills.",
    includes: ["Consultas 100% en español", "Pago directo y transparente", "Sin facturas sorpresa", "Precios accesibles"],
    includesEn: ["100% Spanish-speaking care", "Transparent direct pay", "No surprise bills", "Affordable pricing"],
    image: "/images/promotions/atencion-sin-seguro.webp",
    alt: "Promoción de atención médica sin seguro en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Medical Care Without Insurance promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 4,
  },
  {
    slug: "control-ginecologico-prenatal",
    serviceSlug: "ginecologia",
    title: "Control Ginecológico y Prenatal",
    titleEn: "Gynecological & Prenatal Care",
    price: null,
    blurb:
      "¿Cuánto hace que no te haces un chequeo general? Te sentirás como en casa, hablando tu mismo idioma y con precios accesibles.",
    blurbEn:
      "How long since your last checkup? You'll feel at home, in your own language and with affordable prices.",
    includes: ["Consulta ginecológica", "Control prenatal", "Papanicolau", "Planificación familiar"],
    includesEn: ["Gynecological consultation", "Prenatal care", "Pap smear", "Family planning"],
    image: "/images/promotions/control-ginecologico-prenatal.webp",
    alt: "Promoción de control ginecológico y prenatal en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Gynecological & Prenatal Care promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 5,
  },
  {
    slug: "diabetes-hipertension-sintomas",
    serviceSlug: "condiciones-cronicas",
    title: "Diabetes e Hipertensión: Detección a Tiempo",
    titleEn: "Diabetes & Hypertension: Early Detection",
    price: null,
    blurb:
      "Sed excesiva, fatiga, visión borrosa, mareos o dolor de cabeza pueden ser señales de alerta. Ven por un perfil de laboratorio hoy mismo.",
    blurbEn:
      "Excessive thirst, fatigue, blurred vision, dizziness or headaches can be warning signs. Come in for a lab panel today.",
    includes: ["Perfil de laboratorio", "Detección de diabetes e hipertensión", "Consultas en español", "Precios accesibles"],
    includesEn: ["Lab panel", "Diabetes and hypertension screening", "Care in Spanish", "Affordable pricing"],
    image: "/images/promotions/diabetes-hipertension-sintomas.webp",
    alt: "Promoción de diabetes e hipertensión: detección a tiempo en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Diabetes & Hypertension: Early Detection promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 6,
  },
  {
    slug: "prevencion-cancer-prostata",
    serviceSlug: "salud-hombre",
    title: "Prevención del Cáncer de Próstata",
    titleEn: "Prostate Cancer Prevention",
    price: null,
    blurb:
      "La prevención es la mejor defensa. La detección temprana del cáncer de próstata puede salvar tu vida. Hazte el chequeo.",
    blurbEn:
      "Prevention is the best defense. Early detection of prostate cancer can save your life. Get your checkup.",
    includes: ["Chequeo de próstata", "Detección temprana", "Consultas en español", "Precios accesibles"],
    includesEn: ["Prostate checkup", "Early detection", "Care in Spanish", "Affordable pricing"],
    image: "/images/promotions/prevencion-cancer-prostata.webp",
    alt: "Promoción de prevención del cáncer de próstata en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Prostate Cancer Prevention promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 7,
  },
  {
    slug: "menopausia-info",
    serviceSlug: "ginecologia",
    title: "Menopausia: Hablemos del Tema",
    titleEn: "Menopause: Let's Talk",
    price: null,
    blurb:
      "La menopausia no es un tabú: es una etapa natural, normalmente entre los 45 y 55 años. Hablemos abiertamente y cuida tu salud en español.",
    blurbEn:
      "Menopause isn't taboo — it's a natural stage, usually between ages 45 and 55. Let's talk openly and care for your health in Spanish.",
    includes: ["Orientación sobre la menopausia", "Evaluación de síntomas", "Consultas 100% en español", "Precios accesibles"],
    includesEn: ["Menopause guidance", "Symptom evaluation", "100% Spanish-speaking care", "Affordable pricing"],
    image: "/images/promotions/menopausia-info.webp",
    alt: "Promoción de menopausia: hablemos del tema en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Menopause: Let's Talk promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 8,
  },
  {
    slug: "salud-hombre-energia-nutricion",
    serviceSlug: "salud-hombre",
    title: "Salud del Hombre: Energía y Nutrición",
    titleEn: "Men's Health: Energy & Nutrition",
    price: null,
    blurb:
      "El cansancio excesivo no es normal y tu familia te necesita sano. Chequea tu presión y azúcar con un perfil de laboratorio, sin cita previa.",
    blurbEn:
      "Excessive fatigue isn't normal and your family needs you healthy. Check your blood pressure and sugar with a lab panel, no appointment needed.",
    includes: ["No necesitas cita previa", "Perfil de laboratorio", "Chequeo de presión y azúcar", "Consultas en español"],
    includesEn: ["No appointment needed", "Lab panel", "Blood pressure and sugar check", "Care in Spanish"],
    image: "/images/promotions/salud-hombre-energia-nutricion.webp",
    alt: "Promoción de salud del hombre: energía y nutrición en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Men's Health: Energy & Nutrition promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 9,
  },
  {
    slug: "salud-reproductiva-mujer",
    serviceSlug: "anticonceptivos",
    title: "Salud Reproductiva de la Mujer",
    titleEn: "Women's Reproductive Health",
    price: null,
    blurb:
      "Entendemos los cambios de tu cuerpo y ofrecemos un espacio de confianza para hablar de tus metas reproductivas. No postergues tu sueño de ser mamá.",
    blurbEn:
      "We understand the changes in your body and offer a trusted space to talk about your reproductive goals. Don't put off your dream of becoming a mom.",
    includes: ["No necesitas cita previa", "Perfil de laboratorio", "Chequeo de órganos reproductores", "Consultas en español"],
    includesEn: ["No appointment needed", "Lab panel", "Reproductive organ checkup", "Care in Spanish"],
    image: "/images/promotions/salud-reproductiva-mujer.webp",
    alt: "Promoción de salud reproductiva de la mujer en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Women's Reproductive Health promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    order: 10,
  },
  {
    slug: "salud-masculina",
    serviceSlug: "salud-hombre",
    title: "Salud Masculina",
    titleEn: "Men's Health",
    price: null,
    blurb:
      "Un chequeo a tiempo es señal de fortaleza. Después de los 40, un examen anual puede salvarte la vida. Te atendemos rápido y con calidad, en español.",
    blurbEn:
      "A timely checkup is a sign of strength. After 40, an annual exam can save your life. We see you quickly and with quality, in Spanish.",
    includes: ["Examen anual del hombre", "Atención rápida sin seguro", "Consultas 100% en español", "Precios accesibles"],
    includesEn: ["Annual men's exam", "Fast care, no insurance", "100% Spanish-speaking care", "Affordable pricing"],
    image: "/images/promotions/salud-masculina.webp",
    alt: "Promoción de salud masculina en Clínica Hispana Corazón y Vida, Pasadena TX",
    altEn: "Men's Health promotion at Clínica Hispana Corazón y Vida, Pasadena TX",
    highlighted: true,
    order: 11,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.home", href: "/" },
  { label: "nav.services", href: "/services" },
  { label: "nav.promotions", href: "/promociones" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contacto" },
];

