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
    "dateModified": "2026-09-15",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, presión alta y colesterol en Pasadena, TX: laboratorio en la clínica, metas claras, ajuste de medicamentos y seguimiento en español.",
    "descriptionEn": "Diabetes, high blood pressure and cholesterol care in Pasadena, TX: in-clinic lab, clear targets, medication adjustment and follow-up in Spanish.",
    "longDescription": "La diabetes, la presión alta y el colesterol elevado no duelen, pero dañan el corazón, los riñones, los ojos y los nervios cuando nadie los vigila. En Clínica Hispana Corazón y Vida, en Pasadena, llevamos ese seguimiento en español, con el laboratorio en el mismo lugar y sin cita.\n\n## ¿Qué incluye el control de condiciones crónicas?\n\n- Evaluación inicial con historial, presión, peso y análisis de sangre y orina.\n- Metas personalizadas de glucosa, A1c, presión arterial y colesterol.\n- Inicio o ajuste de medicamentos según los resultados.\n- Plan de alimentación y actividad física realista para su rutina.\n- Revisión de pies, riñón y presión en cada visita, y recordatorio del examen de retina anual.\n- Consultas de seguimiento cada tres a seis meses.\n\n## ¿Qué metas se usan?\n\n- **A1c:** por debajo del 7 % en la mayoría de los adultos con diabetes.\n- **Glucosa en ayunas:** entre 80 y 130 mg/dL.\n- **Presión arterial:** por debajo de 130/80 en la mayoría de los pacientes con diabetes o riesgo cardiovascular.\n- **Colesterol LDL:** por debajo de 100 mg/dL, y más bajo si ya hubo un problema del corazón.\n\nEl médico ajusta estas metas según su edad, otras enfermedades y su tolerancia a los medicamentos.\n\n## ¿Cada cuánto debo venir?\n\nCuando se inicia o cambia un tratamiento, en cuatro a ocho semanas para revisar el efecto. Con la condición estable, cada tres meses si es diabetes con A1c en ajuste y cada seis meses cuando las metas se mantienen. Una vez al año se revisan riñón, colesterol y pies de forma completa.\n\n## ¿Cómo es la visita?\n\n1. Signos vitales y revisión de su registro de glucosa o presión en casa.\n2. Análisis en la clínica: glucosa, A1c, perfil de lípidos, creatinina, orina.\n3. Consulta para interpretar los resultados y ajustar el tratamiento.\n4. Receta, indicaciones por escrito y fecha del siguiente control.\n\nTraiga la lista de medicamentos, su glucómetro o tensiómetro y los resultados de análisis anteriores.\n\n## ¿Cuándo no debo esperar a la siguiente cita?\n\nPresión de 180/120 o más con dolor de cabeza, dolor en el pecho o visión borrosa; glucosa por encima de 300 mg/dL con sed intensa, vómito o respiración agitada; o glucosa por debajo de 70 mg/dL que no sube al comer. En esos casos acuda a emergencias.\n\n## ¿Cuánto cuesta?\n\nLa consulta y cada análisis tienen precio directo, sin seguro, en efectivo o con tarjeta. Pregunte por WhatsApp al (832) 930-5551 antes de venir.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Lea también nuestra [guía para controlar la diabetes](/blog/control-diabetes-houston-guia-pacientes).",
    "longDescriptionEn": "Diabetes, high blood pressure and high cholesterol do not hurt, but they damage the heart, kidneys, eyes and nerves when nobody keeps watch. At Clínica Hispana Corazón y Vida in Pasadena we provide that follow-up in Spanish, with the lab in the same place and no appointment.\n\n## What does chronic condition management include?\n\n- Initial evaluation with history, blood pressure, weight, and blood and urine tests.\n- Personalized targets for glucose, A1c, blood pressure and cholesterol.\n- Starting or adjusting medications based on results.\n- A realistic eating and physical activity plan for your routine.\n- Foot, kidney and blood pressure checks at every visit, plus a reminder for the yearly retina exam.\n- Follow-up visits every three to six months.\n\n## Which targets are used?\n\n- **A1c:** below 7% for most adults with diabetes.\n- **Fasting glucose:** between 80 and 130 mg/dL.\n- **Blood pressure:** below 130/80 for most patients with diabetes or cardiovascular risk.\n- **LDL cholesterol:** below 100 mg/dL, and lower if there has already been a heart problem.\n\nThe provider adjusts these targets according to your age, other conditions and how you tolerate medications.\n\n## How often should I come?\n\nWhen a treatment is started or changed, in four to eight weeks to check the effect. With a stable condition, every three months if diabetes is still being adjusted and every six months once targets hold. Once a year, kidneys, cholesterol and feet are reviewed in full.\n\n## What is the visit like?\n\n1. Vital signs and review of your home glucose or blood pressure log.\n2. In-clinic tests: glucose, A1c, lipid profile, creatinine, urine.\n3. Consultation to interpret results and adjust treatment.\n4. Prescription, written instructions and the date of the next check.\n\nBring your medication list, your glucose meter or blood pressure cuff, and previous lab results.\n\n## When should I not wait for the next visit?\n\nBlood pressure of 180/120 or higher with headache, chest pain or blurred vision; glucose above 300 mg/dL with intense thirst, vomiting or rapid breathing; or glucose below 70 mg/dL that does not rise after eating. In those cases go to the emergency room.\n\n## How much does it cost?\n\nThe visit and each test have a direct price, no insurance, in cash or by card. Ask on WhatsApp at (832) 930-5551 before you come.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Also read our [guide to managing diabetes](/blog/control-diabetes-houston-guia-pacientes).",
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
    "dateModified": "2026-09-15",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Pruebas de tiroides (TSH y T4) y tratamiento en Pasadena, TX: diagnóstico de hipo e hipertiroidismo, inicio de medicamento y controles en español.",
    "descriptionEn": "Thyroid tests (TSH and T4) and treatment in Pasadena, TX: diagnosis of hypothyroidism and hyperthyroidism, medication start and follow-up in Spanish.",
    "longDescription": "La tiroides es una glándula pequeña en el cuello que marca el ritmo de todo el cuerpo. Cuando trabaja de menos aparecen cansancio, aumento de peso y frío; cuando trabaja de más, nerviosismo, palpitaciones y pérdida de peso. En Clínica Hispana Corazón y Vida, en Pasadena, la revisamos con un análisis de sangre y tratamos lo que encontremos, en español y sin cita.\n\n## ¿Qué incluye la atención de tiroides?\n\n- Evaluación de síntomas, historial familiar y medicamentos.\n- Análisis de TSH y T4 libre en la clínica; T3 y anticuerpos cuando el médico lo indica.\n- Diagnóstico de hipotiroidismo o hipertiroidismo.\n- Inicio y ajuste del tratamiento con levotiroxina en el hipotiroidismo.\n- Referencia a especialista cuando hay hipertiroidismo, nódulos o embarazo.\n- Controles periódicos para mantener la dosis correcta.\n\n## ¿Qué síntomas hacen sospechar un problema de tiroides?\n\n- **Tiroides lenta (hipotiroidismo):** cansancio, aumento de peso sin causa, intolerancia al frío, piel seca, caída de cabello, estreñimiento, ánimo bajo, reglas abundantes.\n- **Tiroides acelerada (hipertiroidismo):** pérdida de peso, palpitaciones, temblor, sudoración, ansiedad, insomnio, diarrea.\n- Bulto o crecimiento en el cuello, con o sin dificultad para tragar.\n\n## ¿Cómo se interpreta el análisis?\n\nLa TSH es la primera prueba: la mayoría de los laboratorios usa un rango aproximado de 0.4 a 4.0 mUI/L. Una TSH alta con T4 baja indica hipotiroidismo; una TSH muy baja con T4 alta, hipertiroidismo. Un resultado limítrofe se repite en semanas antes de tratar. No hace falta ayuno.\n\n## ¿Cómo es el tratamiento?\n\nEn el hipotiroidismo se toma levotiroxina en ayunas, todos los días, y se repite la TSH seis a ocho semanas después de cada cambio de dosis. Una vez estable, el control es cada seis a doce meses. En el hipertiroidismo el manejo depende de la causa y se coordina con un endocrinólogo.\n\n## ¿Cómo es la visita?\n\n1. Consulta y exploración del cuello.\n2. Toma de sangre en la clínica.\n3. Resultado explicado con usted y, si corresponde, receta e indicaciones.\n4. Fecha del control para ajustar la dosis.\n\nTraiga análisis anteriores y, si ya toma medicamento para la tiroides, el nombre y la dosis.\n\n## ¿Qué pasa si no se trata?\n\nUn hipotiroidismo sin tratar sube el colesterol, empeora la depresión y, en el embarazo, afecta el desarrollo del bebé. Un hipertiroidismo sin control daña el corazón y los huesos. Con el análisis y el ajuste de dosis a tiempo, la mayoría de los pacientes recupera su energía y su peso habitual.\n\n## ¿Cuánto cuesta?\n\nLa consulta y las pruebas tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM.",
    "longDescriptionEn": "The thyroid is a small gland in the neck that sets the pace for the whole body. When it works too little, fatigue, weight gain and feeling cold appear; when it works too much, nervousness, palpitations and weight loss. At Clínica Hispana Corazón y Vida in Pasadena we check it with a blood test and treat what we find, in Spanish and without an appointment.\n\n## What does thyroid care include?\n\n- Evaluation of symptoms, family history and medications.\n- TSH and free T4 tests at the clinic; T3 and antibodies when the provider indicates them.\n- Diagnosis of hypothyroidism or hyperthyroidism.\n- Starting and adjusting levothyroxine for hypothyroidism.\n- Referral to a specialist for hyperthyroidism, nodules or pregnancy.\n- Periodic checks to keep the right dose.\n\n## Which symptoms suggest a thyroid problem?\n\n- **Slow thyroid (hypothyroidism):** fatigue, unexplained weight gain, cold intolerance, dry skin, hair loss, constipation, low mood, heavy periods.\n- **Overactive thyroid (hyperthyroidism):** weight loss, palpitations, tremor, sweating, anxiety, insomnia, diarrhea.\n- A lump or swelling in the neck, with or without trouble swallowing.\n\n## How is the test interpreted?\n\nTSH is the first test: most laboratories use an approximate range of 0.4 to 4.0 mIU/L. A high TSH with low T4 indicates hypothyroidism; a very low TSH with high T4, hyperthyroidism. A borderline result is repeated in a few weeks before treating. No fasting is needed.\n\n## What is the treatment like?\n\nFor hypothyroidism, levothyroxine is taken on an empty stomach every day, and TSH is repeated six to eight weeks after each dose change. Once stable, the check is every six to twelve months. For hyperthyroidism, management depends on the cause and is coordinated with an endocrinologist.\n\n## What is the visit like?\n\n1. Consultation and neck exam.\n2. Blood draw at the clinic.\n3. Result explained with you and, when appropriate, prescription and instructions.\n4. Date of the follow-up to adjust the dose.\n\nBring previous lab results and, if you already take thyroid medication, its name and dose.\n\n## What if it goes untreated?\n\nUntreated hypothyroidism raises cholesterol, worsens depression and, in pregnancy, affects the baby's development. Uncontrolled hyperthyroidism damages the heart and bones. With timely testing and dose adjustment, most patients regain their energy and usual weight.\n\n## How much does it cost?\n\nThe visit and tests have a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM.",
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
    "dateModified": "2026-09-15",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Atención de alergias en Pasadena, TX: rinitis, congestión, ronchas y comezón. Identificamos desencadenantes, tratamos síntomas y orientamos sobre pruebas.",
    "descriptionEn": "Allergy care in Pasadena, TX: rhinitis, congestion, hives and itching. We identify triggers, treat symptoms and guide you on testing. Walk in.",
    "longDescription": "En el sureste de Houston el polen, la humedad y el moho mantienen las alergias activas casi todo el año. Estornudos, congestión, ojos llorosos o ronchas que van y vienen tienen tratamiento. En Clínica Hispana Corazón y Vida, en Pasadena, evaluamos qué las provoca y las controlamos, en español y sin cita.\n\n## ¿Qué incluye la atención de alergias?\n\n- Evaluación de síntomas, cuándo aparecen y qué los empeora.\n- Exploración de nariz, garganta, oídos, pulmones y piel.\n- Tratamiento de rinitis alérgica: antihistamínicos, aerosoles nasales y lavados con solución salina.\n- Atención de ronchas (urticaria) y dermatitis con comezón.\n- Manejo de alergias que desencadenan tos o silbido en el pecho, con revisión de si hay asma.\n- Orientación sobre pruebas de alergia y referencia al especialista cuando se necesitan.\n- Plan para reducir la exposición en casa y en el trabajo.\n\n## ¿Cuáles son los desencadenantes más comunes en Pasadena?\n\n- Polen de árboles en primavera, de pastos en verano y de ambrosía en otoño.\n- Ácaros del polvo y moho, favorecidos por la humedad.\n- Caspa de mascotas y cucarachas.\n- Alimentos, medicamentos o picaduras en las alergias con ronchas.\n\nUn diario sencillo de síntomas y lugares ayuda a identificarlos en la consulta.\n\n## ¿Cómo es el tratamiento?\n\nSe combina evitar el desencadenante con medicamentos según el síntoma: antihistamínicos que no dan sueño para estornudos y comezón, aerosol nasal con corticoide para la congestión persistente, gotas para los ojos y, en la piel, cremas y antihistamínicos. Cuando los síntomas duran todo el año o no responden, se valora la referencia para pruebas cutáneas o inmunoterapia.\n\n## ¿Cuándo es una emergencia?\n\nHinchazón de labios o lengua, dificultad para respirar, mareo o ronchas que se extienden rápido tras un alimento, un medicamento o una picadura pueden ser anafilaxia. Llame al 911 o acuda a emergencias de inmediato; si tiene autoinyector de epinefrina, úselo.\n\n## ¿Cómo es la visita?\n\n1. Consulta sobre síntomas, temporadas y exposiciones.\n2. Exploración física.\n3. Tratamiento inicial el mismo día e indicaciones por escrito.\n4. Control en dos a cuatro semanas para ajustar.\n\n## ¿Qué puedo hacer en casa?\n\nMantenga cerradas las ventanas en días de mucho polen, use el aire acondicionado con filtro limpio, lave la ropa de cama con agua caliente cada semana, controle la humedad para frenar el moho y dúchese al llegar de la calle en temporada. Estos cambios reducen la dosis de medicamento que necesita.\n\n## ¿Cuánto cuesta?\n\nLa consulta tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM.",
    "longDescriptionEn": "In southeast Houston, pollen, humidity and mold keep allergies active almost all year. Sneezing, congestion, watery eyes or hives that come and go can be treated. At Clínica Hispana Corazón y Vida in Pasadena we evaluate what triggers them and get them under control, in Spanish and without an appointment.\n\n## What does allergy care include?\n\n- Evaluation of symptoms, when they appear and what makes them worse.\n- Examination of nose, throat, ears, lungs and skin.\n- Treatment of allergic rhinitis: antihistamines, nasal sprays and saline rinses.\n- Care for hives (urticaria) and itchy dermatitis.\n- Management of allergies that trigger cough or wheezing, with a check for asthma.\n- Guidance on allergy testing and referral to a specialist when needed.\n- A plan to reduce exposure at home and at work.\n\n## Which triggers are most common in Pasadena?\n\n- Tree pollen in spring, grass pollen in summer and ragweed in fall.\n- Dust mites and mold, favored by humidity.\n- Pet dander and cockroaches.\n- Foods, medications or stings in allergies with hives.\n\nA simple diary of symptoms and places helps identify them at the visit.\n\n## What is the treatment like?\n\nAvoiding the trigger is combined with medication according to the symptom: non-drowsy antihistamines for sneezing and itching, a steroid nasal spray for persistent congestion, eye drops and, for the skin, creams and antihistamines. When symptoms last all year or do not respond, referral for skin testing or immunotherapy is considered.\n\n## When is it an emergency?\n\nSwelling of the lips or tongue, trouble breathing, dizziness or hives spreading fast after a food, medication or sting may be anaphylaxis. Call 911 or go to the emergency room right away; if you have an epinephrine auto-injector, use it.\n\n## What is the visit like?\n\n1. Consultation about symptoms, seasons and exposures.\n2. Physical exam.\n3. Initial treatment the same day and written instructions.\n4. Follow-up in two to four weeks to adjust.\n\n## What can I do at home?\n\nKeep windows closed on high-pollen days, run the air conditioning with a clean filter, wash bedding in hot water every week, control humidity to curb mold, and shower after coming in from outside during the season. These changes reduce the amount of medication you need.\n\n## How much does it cost?\n\nThe visit has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM.",
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
    "dateModified": "2026-09-15",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas rápidas de flu y COVID y atención de gripe, tos, bronquitis y garganta en Pasadena, TX, con diagnóstico y tratamiento el mismo día. Sin cita.",
    "descriptionEn": "Rapid flu and COVID tests and care for colds, cough, bronchitis and sore throat in Pasadena, TX, with same-day diagnosis and treatment. Walk in.",
    "longDescription": "Fiebre, tos, dolor de garganta y cuerpo cortado pueden ser gripe común, influenza, COVID-19, bronquitis o una infección bacteriana, y cada una se maneja distinto. En Clínica Hispana Corazón y Vida, en Pasadena, hacemos las pruebas rápidas y le decimos el mismo día qué tiene y qué tomar, en español y sin cita.\n\n## ¿Qué incluye la atención respiratoria?\n\n- Prueba rápida de influenza A y B.\n- Prueba rápida de COVID-19.\n- Prueba de estreptococo cuando el dolor de garganta lo sugiere.\n- Evaluación de síntomas, auscultación de pulmones y medición de oxígeno.\n- Tratamiento de gripe, tos, bronquitis, sinusitis, faringitis y crisis de asma leve.\n- Antivirales cuando están indicados y antibióticos solo cuando la causa es bacteriana.\n- Nota médica para el trabajo o la escuela si la necesita.\n\n## ¿Cuándo sirve la prueba rápida?\n\nLa influenza se detecta mejor en los primeros tres o cuatro días de síntomas, y los antivirales funcionan sobre todo si empiezan dentro de las primeras 48 horas. El COVID-19 se detecta desde el inicio de los síntomas; en personas con riesgo, el tratamiento antiviral se inicia dentro de los primeros cinco días. Por eso conviene venir pronto y no esperar a \"ver si pasa\".\n\n## ¿Necesito antibiótico?\n\nLa mayoría de los cuadros respiratorios son virales y no mejoran con antibiótico. Sí se indica cuando hay estreptococo confirmado, sinusitis bacteriana, neumonía o una bronquitis que se complica. Tomar antibiótico sin necesidad no acorta la gripe y genera resistencia.\n\n## ¿Cuándo debo acudir a emergencias?\n\nDificultad para respirar, dolor en el pecho, labios azulados, confusión, fiebre que no baja con medicamento durante más de tres días, o en bebés menores de tres meses con fiebre. En esos casos no espere a la clínica.\n\n## ¿Cómo es la visita?\n\n1. Toma de temperatura, oxígeno y signos vitales.\n2. Prueba rápida de flu, COVID o estreptococo según los síntomas.\n3. Exploración de garganta, oídos y pulmones.\n4. Diagnóstico, receta e indicaciones de cuidado y aislamiento cuando aplica.\n\nSi viene con fiebre o tos, avise en recepción para que le entreguen una mascarilla.\n\n## ¿Cómo me cuido en casa?\n\nRepose, beba líquidos, use paracetamol o ibuprofeno para la fiebre según indicación, y evite el humo de cigarro. Con influenza o COVID, quédese en casa hasta que la fiebre desaparezca sin medicamento durante 24 horas y los síntomas mejoren, y use mascarilla cerca de personas vulnerables durante los días siguientes.\n\n## ¿Cuánto cuesta?\n\nLa consulta y cada prueba tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También aplicamos la [vacuna contra la influenza](/services/vacunas) en temporada.",
    "longDescriptionEn": "Fever, cough, sore throat and body aches may be a common cold, influenza, COVID-19, bronchitis or a bacterial infection, and each is managed differently. At Clínica Hispana Corazón y Vida in Pasadena we run the rapid tests and tell you the same day what you have and what to take, in Spanish and without an appointment.\n\n## What does respiratory care include?\n\n- Rapid influenza A and B test.\n- Rapid COVID-19 test.\n- Strep test when the sore throat suggests it.\n- Symptom evaluation, lung auscultation and oxygen measurement.\n- Treatment of colds, cough, bronchitis, sinusitis, pharyngitis and mild asthma flare-ups.\n- Antivirals when indicated and antibiotics only when the cause is bacterial.\n- A medical note for work or school if you need it.\n\n## When is the rapid test useful?\n\nInfluenza is best detected in the first three or four days of symptoms, and antivirals work mainly if started within the first 48 hours. COVID-19 is detected from the onset of symptoms; in people at risk, antiviral treatment starts within the first five days. That is why it pays to come early rather than wait and see.\n\n## Do I need an antibiotic?\n\nMost respiratory illnesses are viral and do not improve with antibiotics. They are indicated for confirmed strep, bacterial sinusitis, pneumonia or bronchitis that becomes complicated. Taking antibiotics unnecessarily does not shorten a cold and creates resistance.\n\n## When should I go to the emergency room?\n\nTrouble breathing, chest pain, bluish lips, confusion, fever that does not come down with medication for more than three days, or fever in babies under three months. In those cases do not wait for the clinic.\n\n## What is the visit like?\n\n1. Temperature, oxygen and vital signs.\n2. Rapid flu, COVID or strep test according to symptoms.\n3. Examination of throat, ears and lungs.\n4. Diagnosis, prescription and care and isolation instructions when they apply.\n\nIf you come with fever or cough, tell the front desk so you are given a mask.\n\n## How do I care for myself at home?\n\nRest, drink fluids, use acetaminophen or ibuprofen for fever as directed, and avoid cigarette smoke. With influenza or COVID, stay home until the fever is gone without medication for 24 hours and symptoms improve, and wear a mask around vulnerable people in the following days.\n\n## How much does it cost?\n\nThe visit and each test have a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. We also give the [flu vaccine](/services/vacunas) in season.",
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
    "dateModified": "2026-09-15",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Físicos escolares y deportivos en Pasadena, TX: examen completo, visión, audición y formularios de la escuela o del UIL llenados el mismo día. Sin cita.",
    "descriptionEn": "School and sports physicals in Pasadena, TX: full exam, vision, hearing and school or UIL forms completed the same day. Walk in, Spanish spoken.",
    "longDescription": "Cada inicio de curso y cada temporada deportiva, las escuelas de Pasadena y el área piden un examen físico firmado por un profesional de salud. En Clínica Hispana Corazón y Vida lo hacemos sin cita, en español, y llenamos el formulario el mismo día para que su hijo no pierda el plazo de inscripción.\n\n## ¿Qué incluye el examen físico escolar o deportivo?\n\n- Historial de salud del niño o joven, con preguntas al padre o tutor.\n- Peso, talla, presión arterial y pulso.\n- Revisión de visión y audición.\n- Exploración de corazón, pulmones, abdomen, columna, articulaciones y hernias.\n- Evaluación de antecedentes que importan en el deporte: desmayos, dolor en el pecho, asma, lesiones previas.\n- Llenado y firma del formulario de la escuela, la liga o el UIL.\n- Recomendaciones y, si falta alguna vacuna, la aplicamos aquí mismo.\n\n## ¿Qué formulario debo traer?\n\nPara deportes escolares en Texas, el formulario de evaluación física de preparticipación del UIL; la escuela o el entrenador lo entregan y la primera parte la llena el padre o tutor antes de la visita. Para inscripción escolar o guardería, el formulario propio de la institución. Si no lo trae, entregamos un certificado general, pero muchos programas exigen su formato.\n\n## ¿Qué más debo traer?\n\n- Cartilla de vacunas del niño.\n- Lentes, si los usa.\n- Lista de medicamentos y alergias.\n- Identificación del padre o tutor, que debe acompañar a los menores.\n\n## ¿Cómo es la visita?\n\n1. El padre o tutor completa el historial en recepción.\n2. Signos vitales, visión y audición.\n3. Examen físico con el médico.\n4. Formulario firmado el mismo día, salvo que se detecte algo que requiera estudios antes de autorizar el deporte.\n\nLa visita suele tomar entre 20 y 30 minutos.\n\n## ¿Qué pasa si se detecta un problema?\n\nUn soplo cardíaco, una presión alta o una lesión sin resolver no siempre impiden el deporte, pero pueden requerir un electrocardiograma, análisis o una revisión adicional antes de firmar. Se lo explicamos y coordinamos lo necesario.\n\n## ¿Cada cuánto se repite?\n\nLa mayoría de las escuelas y ligas de Texas piden el físico deportivo cada año, y el escolar al inscribirse en un nuevo centro o al cambiar de etapa. Si su hijo tuvo una lesión o un diagnóstico nuevo durante el año, conviene una revisión antes de volver a competir aunque el formulario siga vigente.\n\n## ¿Cuánto cuesta?\n\nEl examen tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Las semanas previas al inicio de clases y de temporada son las de mayor demanda.",
    "longDescriptionEn": "Every school year and every sports season, schools in Pasadena and the area require a physical exam signed by a health professional. At Clínica Hispana Corazón y Vida we do it without an appointment, in Spanish, and complete the form the same day so your child does not miss the enrollment deadline.\n\n## What does the school or sports physical include?\n\n- The child's or teen's health history, with questions for the parent or guardian.\n- Weight, height, blood pressure and pulse.\n- Vision and hearing check.\n- Examination of heart, lungs, abdomen, spine, joints and hernias.\n- Evaluation of history that matters in sports: fainting, chest pain, asthma, previous injuries.\n- Completion and signature of the school, league or UIL form.\n- Recommendations and, if a vaccine is missing, we give it right here.\n\n## Which form should I bring?\n\nFor school sports in Texas, the UIL pre-participation physical evaluation form; the school or coach provides it and the parent or guardian fills out the first part before the visit. For school or daycare enrollment, the institution's own form. If you do not bring it, we provide a general certificate, but many programs require their format.\n\n## What else should I bring?\n\n- The child's vaccination record.\n- Glasses, if used.\n- A list of medications and allergies.\n- The parent's or guardian's ID; minors must be accompanied.\n\n## What is the visit like?\n\n1. The parent or guardian completes the history at the front desk.\n2. Vital signs, vision and hearing.\n3. Physical exam with the provider.\n4. Form signed the same day, unless something is found that requires studies before clearing the sport.\n\nThe visit usually takes 20 to 30 minutes.\n\n## What if a problem is found?\n\nA heart murmur, high blood pressure or an unresolved injury does not always rule out sports, but it may require an EKG, lab work or an additional review before signing. We explain it and coordinate what is needed.\n\n## How often is it repeated?\n\nMost Texas schools and leagues require the sports physical every year, and the school physical when enrolling in a new campus or moving to a new stage. If your child had an injury or a new diagnosis during the year, a review before returning to competition is advisable even if the form is still valid.\n\n## How much does it cost?\n\nThe exam has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. The weeks before classes and the season start are the busiest.",
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
    "dateModified": "2026-09-15",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Prueba de embarazo en orina o sangre en Pasadena, TX, con resultado el mismo día, confirmación médica, cálculo de semanas y orientación prenatal. Sin cita.",
    "descriptionEn": "Urine or blood pregnancy test in Pasadena, TX, with a same-day result, medical confirmation, dating of the pregnancy and prenatal guidance. Walk in.",
    "longDescription": "Una prueba de embarazo de farmacia deja dudas cuando la regla se retrasa poco o el resultado es tenue. En Clínica Hispana Corazón y Vida, en Pasadena, hacemos la prueba en orina o en sangre, confirmamos el resultado con el médico y le decimos qué sigue, en español y sin cita.\n\n## ¿Qué incluye la prueba de embarazo?\n\n- Prueba de orina en la clínica, con resultado en minutos.\n- Prueba de sangre cuantitativa (hCG) cuando la de orina es dudosa o el retraso es muy corto.\n- Consulta para confirmar el resultado y calcular las semanas a partir de la última regla.\n- Revisión de presión, peso y medicamentos que convenga suspender o iniciar.\n- Ácido fólico y orientación sobre el control prenatal.\n- [Ultrasonido](/services/ultrasonido) cuando hay que confirmar la ubicación o la edad del embarazo.\n- Si el resultado es negativo, orientación sobre la causa del retraso y sobre anticoncepción si la desea.\n\n## ¿Cuándo es confiable la prueba?\n\nLa prueba de orina detecta el embarazo desde el primer día de retraso de la regla; antes puede dar un falso negativo. La de sangre lo detecta unos días antes y, al ser cuantitativa, permite ver si la hormona sube como se espera. Para la prueba de orina conviene la primera orina de la mañana, más concentrada.\n\n## ¿Qué señales requieren atención urgente?\n\nDolor fuerte en un lado del abdomen, sangrado abundante, mareo intenso o dolor en el hombro con prueba positiva pueden indicar un embarazo fuera del útero. Acuda a emergencias de inmediato.\n\n## ¿Cómo es la visita?\n\n1. Recoge la muestra de orina o se toma la sangre en la clínica.\n2. El médico revisa el resultado con usted en privado.\n3. Si es positivo: cálculo de semanas, revisión general, ácido fólico e indicaciones para el control prenatal.\n4. Si es negativo y la regla no llega: evaluación de la causa y, si hace falta, análisis de tiroides o prolactina.\n\nPuede venir sola o acompañada; la consulta es confidencial.\n\n## ¿Qué pasa con mis medicamentos?\n\nCon un resultado positivo, revise con el médico todo lo que toma: algunos medicamentos para la presión, el acné o el colesterol deben cambiarse, y conviene evitar alcohol, tabaco y remedios sin indicación. Si tiene diabetes o un problema de tiroides, el control se ajusta desde la primera semana para proteger al bebé.\n\n## ¿Cuánto cuesta?\n\nLa prueba tiene precio directo, sin seguro, en efectivo o con tarjeta; la de sangre y el ultrasonido se cobran aparte cuando se necesitan. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Lea también nuestra [guía de salud de la mujer](/blog/salud-mujer-houston-servicios-ginecologia).",
    "longDescriptionEn": "A drugstore pregnancy test leaves doubts when the period is only slightly late or the line is faint. At Clínica Hispana Corazón y Vida in Pasadena we run the test in urine or blood, confirm the result with the provider and tell you what comes next, in Spanish and without an appointment.\n\n## What does the pregnancy test include?\n\n- Urine test at the clinic, with a result in minutes.\n- Quantitative blood test (hCG) when the urine test is unclear or the delay is very short.\n- Consultation to confirm the result and calculate the weeks from the last period.\n- Review of blood pressure, weight and medications that should be stopped or started.\n- Folic acid and guidance on prenatal care.\n- [Ultrasound](/services/ultrasonido) when the location or age of the pregnancy needs confirming.\n- If the result is negative, guidance on the cause of the delay and on contraception if you want it.\n\n## When is the test reliable?\n\nThe urine test detects pregnancy from the first day of a missed period; earlier it can give a false negative. The blood test detects it a few days sooner and, being quantitative, shows whether the hormone rises as expected. For the urine test, the first morning urine is best because it is more concentrated.\n\n## Which signs need urgent attention?\n\nSevere pain on one side of the abdomen, heavy bleeding, intense dizziness or shoulder pain with a positive test may indicate a pregnancy outside the uterus. Go to the emergency room right away.\n\n## What is the visit like?\n\n1. You provide the urine sample or blood is drawn at the clinic.\n2. The provider reviews the result with you in private.\n3. If positive: dating, general review, folic acid and instructions for prenatal care.\n4. If negative and the period does not come: evaluation of the cause and, if needed, thyroid or prolactin tests.\n\nYou may come alone or with someone; the visit is confidential.\n\n## What about my medications?\n\nWith a positive result, review everything you take with the provider: some medications for blood pressure, acne or cholesterol must be changed, and alcohol, tobacco and remedies without indication should be avoided. If you have diabetes or a thyroid problem, the follow-up is adjusted from the first week to protect the baby.\n\n## How much does it cost?\n\nThe test has a direct price, no insurance, in cash or by card; the blood test and ultrasound are charged separately when needed. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Also read our [women's health guide](/blog/salud-mujer-houston-servicios-ginecologia).",
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
    "dateModified": "2026-09-15",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Consulta anticonceptiva en Pasadena, TX: orientación sin juicios, inicio de pastillas o inyección en la clínica y seguimiento de efectos secundarios.",
    "descriptionEn": "Contraception visit in Pasadena, TX: judgment-free guidance, start of pills or the injection at the clinic, follow-up and side effects. Walk in.",
    "longDescription": "Elegir un método anticonceptivo es una decisión personal que merece información clara y sin juicios. En Clínica Hispana Corazón y Vida, en Pasadena, revisamos su salud y sus planes, le explicamos las opciones y podemos iniciar en la clínica la pastilla o la inyección, con seguimiento en español y sin cita.\n\n## ¿Qué incluye la consulta anticonceptiva?\n\n- Historial de salud, presión arterial y peso, para descartar métodos que no convienen.\n- Explicación de las opciones: pastillas, inyección, parche, anillo, implante, dispositivo intrauterino, preservativo y métodos naturales.\n- Inicio en la clínica de las pastillas anticonceptivas o de la inyección trimestral.\n- Orientación y referencia para los métodos de larga duración que se colocan en otro centro.\n- Anticoncepción de emergencia con orientación sobre su uso.\n- Control de seguimiento para revisar efectos secundarios y ajustar el método.\n\n## ¿Qué método me conviene?\n\nDepende de su salud, de si fuma, de su edad, de si tiene hijos o planea tenerlos pronto y de cuánto quiere ocuparse del método cada día. En la consulta comparamos eficacia, frecuencia de uso, efectos sobre la regla y reversibilidad, y la decisión es suya.\n\n## ¿Cuándo empieza a proteger?\n\nLas pastillas iniciadas en los primeros cinco días de la regla protegen desde el primer día; si se empiezan en otro momento, use preservativo durante siete días. La inyección protege desde el primer día si se aplica en los primeros siete días del ciclo. Le explicamos el caso concreto de su método.\n\n## ¿Qué efectos secundarios son normales?\n\nSangrado irregular en los primeros meses, sensibilidad en los senos o cambios de ánimo suelen mejorar con el tiempo. Dolor fuerte en el pecho o en una pierna, dolor de cabeza intenso con visión alterada o dificultad para respirar no son normales: acuda a emergencias.\n\n## ¿Cómo es la visita?\n\n1. Conversación privada sobre sus planes y su historial.\n2. Signos vitales y, si hace falta, prueba de embarazo.\n3. Elección del método e inicio en la clínica cuando es pastilla o inyección.\n4. Fecha de la siguiente inyección o del control.\n\n## ¿Y la anticoncepción de emergencia?\n\nLa pastilla de emergencia funciona mejor cuanto antes se toma, idealmente en las primeras 24 horas y hasta 72 o 120 horas según el tipo. No sustituye a un método regular ni protege de infecciones; si la necesita más de una vez, conviene elegir un método fijo en la consulta.\n\n## ¿Cuánto cuesta?\n\nLa consulta y el método tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También hacemos la [extracción de implantes subdérmicos](/services/extraccion-implantes).",
    "longDescriptionEn": "Choosing a contraceptive method is a personal decision that deserves clear, judgment-free information. At Clínica Hispana Corazón y Vida in Pasadena we review your health and your plans, explain the options and can start the pill or the injection at the clinic, with follow-up in Spanish and no appointment.\n\n## What does the contraception visit include?\n\n- Health history, blood pressure and weight, to rule out methods that are not advisable.\n- Explanation of the options: pills, injection, patch, ring, implant, intrauterine device, condoms and natural methods.\n- Start of birth control pills or the quarterly injection at the clinic.\n- Guidance and referral for long-acting methods placed at another center.\n- Emergency contraception with guidance on its use.\n- Follow-up visit to review side effects and adjust the method.\n\n## Which method is right for me?\n\nIt depends on your health, whether you smoke, your age, whether you have children or plan to soon, and how much you want to deal with the method every day. At the visit we compare effectiveness, frequency of use, effects on your period and reversibility, and the decision is yours.\n\n## When does it start protecting?\n\nPills started within the first five days of the period protect from day one; if started at another time, use condoms for seven days. The injection protects from day one if given within the first seven days of the cycle. We explain the specifics for your method.\n\n## Which side effects are normal?\n\nIrregular bleeding in the first months, breast tenderness or mood changes usually improve over time. Severe chest or leg pain, an intense headache with vision changes or trouble breathing are not normal: go to the emergency room.\n\n## What is the visit like?\n\n1. A private conversation about your plans and history.\n2. Vital signs and, if needed, a pregnancy test.\n3. Choice of method and start at the clinic when it is the pill or the injection.\n4. Date of the next injection or follow-up.\n\n## What about emergency contraception?\n\nThe emergency pill works better the sooner it is taken, ideally within the first 24 hours and up to 72 or 120 hours depending on the type. It does not replace a regular method or protect against infections; if you need it more than once, it is better to choose a regular method at the visit.\n\n## How much does it cost?\n\nThe visit and the method have a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. We also perform [subdermal implant removal](/services/extraccion-implantes).",
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
    "dateModified": "2026-09-15",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implante anticonceptivo en Pasadena, TX: localización, anestesia local, retiro ambulatorio en minutos y cuidados explicados. Sin cita.",
    "descriptionEn": "Contraceptive implant removal in Pasadena, TX: location, local anesthesia, outpatient removal in minutes and aftercare explained. Walk in.",
    "longDescription": "El implante anticonceptivo del brazo dura tres años; después hay que retirarlo, y muchas mujeres lo quieren quitar antes por sangrado irregular, cambios de ánimo o porque desean embarazarse. En Clínica Hispana Corazón y Vida, en Pasadena, lo retiramos con anestesia local en una visita corta, en español y sin cita.\n\n## ¿Qué incluye la extracción del implante?\n\n- Revisión del historial y de la fecha de colocación.\n- Localización del implante por palpación bajo la piel del brazo.\n- Anestesia local en la zona.\n- Incisión pequeña y retiro del implante con instrumental estéril.\n- Vendaje compresivo y cuidados por escrito.\n- Orientación sobre el siguiente método anticonceptivo, si lo desea.\n\n## ¿Cuándo debo retirarlo?\n\n- Al cumplir los tres años desde la colocación.\n- Si desea un embarazo: la fertilidad vuelve en pocas semanas.\n- Si los efectos secundarios no mejoran después de los primeros meses.\n- Si el médico lo indica por una condición nueva de salud.\n\nPuede colocarse otro método el mismo día para no quedar sin protección.\n\n## ¿Cómo es el procedimiento?\n\n1. Se palpa el implante y se marca el sitio.\n2. Se limpia la piel y se aplica anestesia local; siente un pinchazo breve.\n3. Se hace una incisión de pocos milímetros y se extrae el implante.\n4. Se cubre con un vendaje. Todo el procedimiento suele tomar entre 10 y 20 minutos.\n\nSi el implante no se palpa, se indica un ultrasonido para localizarlo antes de intentar retirarlo.\n\n## ¿Qué cuidados necesito después?\n\nMantenga el vendaje compresivo 24 horas y la herida limpia y seca durante unos días. Es normal un moretón o sensibilidad en la zona durante una o dos semanas. Consulte si hay sangrado que no para, pus, fiebre o dolor que aumenta.\n\n## ¿Qué método puedo usar después?\n\nSi quiere seguir con un método de larga duración, le indicamos dónde colocar un implante o dispositivo nuevo. Si prefiere algo que se inicie aquí mismo, la pastilla o la inyección se pueden empezar el día de la extracción, y así no queda ningún día sin protección.\n\n## ¿Puedo retirarlo antes de los tres años?\n\nSí. El implante se puede retirar en cualquier momento por decisión propia, sin necesidad de justificar el motivo. La mayoría de las mujeres que lo retiran antes lo hacen por sangrado irregular persistente o porque cambian sus planes de familia.\n\n## ¿Cuánto cuesta?\n\nLa extracción tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551 antes de venir.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Vea también nuestra consulta de [métodos anticonceptivos](/services/anticonceptivos).",
    "longDescriptionEn": "The contraceptive implant in the arm lasts three years; then it must be removed, and many women want it out sooner because of irregular bleeding, mood changes or a wish to become pregnant. At Clínica Hispana Corazón y Vida in Pasadena we remove it under local anesthesia in a short visit, in Spanish and without an appointment.\n\n## What does implant removal include?\n\n- Review of your history and the placement date.\n- Locating the implant by palpation under the skin of the arm.\n- Local anesthesia in the area.\n- A small incision and removal of the implant with sterile instruments.\n- A pressure dressing and written aftercare.\n- Guidance on your next contraceptive method, if you want one.\n\n## When should I have it removed?\n\n- When three years have passed since placement.\n- If you want to become pregnant: fertility returns within a few weeks.\n- If side effects do not improve after the first months.\n- If the provider indicates it because of a new health condition.\n\nYou can start another method the same day so you are not left unprotected.\n\n## What is the procedure like?\n\n1. The implant is palpated and the site is marked.\n2. The skin is cleaned and local anesthesia is applied; you feel a brief pinch.\n3. An incision of a few millimeters is made and the implant is removed.\n4. A dressing is applied. The whole procedure usually takes 10 to 20 minutes.\n\nIf the implant cannot be felt, an ultrasound is ordered to locate it before attempting removal.\n\n## What aftercare do I need?\n\nKeep the pressure dressing on for 24 hours and the wound clean and dry for a few days. A bruise or tenderness in the area for one or two weeks is normal. Come in if there is bleeding that does not stop, pus, fever or increasing pain.\n\n## Which method can I use afterwards?\n\nIf you want to continue with a long-acting method, we tell you where to have a new implant or device placed. If you prefer something that starts right here, the pill or the injection can begin on the day of removal, so no day is left unprotected.\n\n## How much does it cost?\n\nThe removal has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551 before you come.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. See also our [contraception visit](/services/anticonceptivos).",
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
    "dateModified": "2026-09-15",
    "title": "Salud del Hombre: Chequeo y Examen de PSA",
    "titleEn": "Men's Health: Checkup and PSA Test",
    "shortTitle": "Salud del Hombre",
    "description": "Chequeo de salud del hombre en Pasadena, TX: presión, glucosa, colesterol, examen de PSA y síntomas urinarios, con resultados explicados en español.",
    "descriptionEn": "Men's health checkup in Pasadena, TX: blood pressure, glucose, cholesterol, PSA test and urinary symptoms, with results explained in Spanish.",
    "longDescription": "Muchos hombres de Pasadena pasan años sin una consulta porque \"no sienten nada\". La presión alta, la diabetes, el colesterol y los problemas de próstata avanzan en silencio y se detectan con un chequeo sencillo. En Clínica Hispana Corazón y Vida lo hacemos sin cita y en español, con el laboratorio en el mismo lugar.\n\n## ¿Qué incluye el chequeo del hombre?\n\n- Historial, presión arterial, peso, cintura y pulso.\n- Análisis de sangre: glucosa, A1c, perfil de lípidos, riñón e hígado.\n- Examen de antígeno prostático (PSA) según edad y riesgo.\n- Evaluación de síntomas urinarios: chorro débil, levantarse de noche, urgencia.\n- Perfil hormonal cuando hay cansancio, baja de deseo o cambios de ánimo que lo justifican.\n- Pruebas de infecciones de transmisión sexual si corresponde.\n- Revisión de sueño, estado de ánimo, alcohol y tabaco.\n- Electrocardiograma cuando hay factores de riesgo cardíaco.\n\n## ¿A qué edad conviene empezar?\n\n- **Desde los 20:** presión arterial cada uno o dos años y colesterol cada cuatro a seis años, antes si hay sobrepeso o antecedentes familiares.\n- **Desde los 35 a 40:** glucosa y perfil de lípidos con más frecuencia.\n- **Entre los 55 y 69:** decidir con el médico si conviene el PSA; desde los 40 a 45 si hay antecedentes familiares de cáncer de próstata.\n- **A cualquier edad:** cuando hay síntomas urinarios, dolor testicular, sangre en la orina o cambios de peso sin explicación.\n\n## ¿Qué significa el resultado del PSA?\n\nEl PSA es una proteína de la próstata que sube con el crecimiento benigno, la infección y también con el cáncer. Un valor elevado no confirma cáncer: se repite, se relaciona con la edad y el tamaño de la próstata y, si persiste, se refiere al urólogo. Evite relaciones sexuales y ejercicio intenso en las 48 horas previas al análisis.\n\n## ¿Cómo es la visita?\n\n1. Consulta privada sobre síntomas, hábitos y antecedentes.\n2. Signos vitales y toma de sangre en la clínica.\n3. Resultados explicados con usted, con tratamiento o referencia si hace falta.\n4. Fecha del siguiente control según los hallazgos.\n\nVenga en ayunas de 8 a 12 horas si quiere incluir glucosa y lípidos en la misma visita.\n\n## ¿Cuánto cuesta?\n\nLa consulta y cada prueba tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Lea también nuestra [guía de chequeos preventivos para hombres](/blog/salud-hombre-pasadena-chequeos-preventivos).",
    "longDescriptionEn": "Many men in Pasadena go years without a visit because they \"don't feel anything.\" High blood pressure, diabetes, cholesterol and prostate problems advance silently and are found with a simple checkup. At Clínica Hispana Corazón y Vida we do it without an appointment and in Spanish, with the lab in the same place.\n\n## What does the men's checkup include?\n\n- History, blood pressure, weight, waist and pulse.\n- Blood tests: glucose, A1c, lipid profile, kidney and liver.\n- Prostate-specific antigen (PSA) test according to age and risk.\n- Evaluation of urinary symptoms: weak stream, getting up at night, urgency.\n- Hormone profile when fatigue, low desire or mood changes justify it.\n- Sexually transmitted infection tests when appropriate.\n- Review of sleep, mood, alcohol and tobacco.\n- EKG when there are cardiac risk factors.\n\n## At what age should I start?\n\n- **From 20:** blood pressure every one to two years and cholesterol every four to six years, sooner with excess weight or family history.\n- **From 35 to 40:** glucose and lipid profile more often.\n- **Between 55 and 69:** decide with the provider whether PSA is right for you; from 40 to 45 with a family history of prostate cancer.\n- **At any age:** with urinary symptoms, testicular pain, blood in the urine or unexplained weight changes.\n\n## What does the PSA result mean?\n\nPSA is a prostate protein that rises with benign growth, infection and also with cancer. An elevated value does not confirm cancer: it is repeated, related to age and prostate size and, if it persists, referred to a urologist. Avoid sex and intense exercise in the 48 hours before the test.\n\n## What is the visit like?\n\n1. A private consultation about symptoms, habits and history.\n2. Vital signs and blood draw at the clinic.\n3. Results explained with you, with treatment or referral if needed.\n4. Date of the next check based on the findings.\n\nCome fasting 8 to 12 hours if you want glucose and lipids included in the same visit.\n\n## Which habits weigh the most?\n\nSmoking, alcohol beyond two drinks a day, a waist over 40 inches, less than 150 minutes of physical activity per week and sleeping under six hours raise the risk of heart disease and diabetes more than any single number. At the visit we review them without judgment and set one or two realistic changes.\n\n## How much does it cost?\n\nThe visit and each test have a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Also read our [preventive checkup guide for men](/blog/salud-hombre-pasadena-chequeos-preventivos).",
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
    "dateModified": "2026-09-15",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Examen de heces en Pasadena, TX: parásitos, infecciones intestinales, sangre oculta y análisis general para diarrea o dolor abdominal. Resultados en español.",
    "descriptionEn": "Stool test in Pasadena, TX: parasites, intestinal infections, occult blood and general analysis for diarrhea or abdominal pain. Results explained in Spanish.",
    "longDescription": "Diarrea que dura más de unos días, dolor abdominal con gases, pérdida de peso o un niño que no crece bien pueden tener una causa que solo se ve en un examen de heces. En Clínica Hispana Corazón y Vida, en Pasadena, indicamos la prueba adecuada, procesamos la muestra y le explicamos el resultado en español, sin cita.\n\n## ¿Qué exámenes de heces hacemos?\n\n- **Coproparasitoscópico:** busca parásitos y sus huevos; se recomiendan tres muestras en días distintos para aumentar la detección.\n- **Coprocultivo:** identifica bacterias como salmonela o shigela en diarreas con fiebre o sangre.\n- **Sangre oculta en heces:** detecta sangrado que no se ve, en anemia o como tamizaje de colon.\n- **Análisis general:** consistencia, grasa, moco y leucocitos, que orientan sobre mala absorción o inflamación.\n- Pruebas específicas, como antígeno de giardia o toxina de *Clostridioides difficile*, cuando el médico las indica.\n\n## ¿Cuándo conviene hacerlo?\n\n- Diarrea de más de tres días, o con fiebre, sangre o moco.\n- Dolor abdominal, gases y distensión que se repiten.\n- Pérdida de peso, anemia o cansancio sin explicación.\n- Niños con poco apetito, comezón anal o crecimiento lento.\n- Después de un viaje o de contacto con agua o alimentos contaminados.\n- Cuando lo pide un trámite de trabajo en alimentos o de escuela.\n\n## ¿Cómo recojo la muestra?\n\n1. Recoja las heces en un recipiente limpio y seco, sin que se mezclen con orina ni agua del inodoro.\n2. Pase una porción del tamaño de una nuez al frasco que le entregamos, con la tapa bien cerrada y su nombre.\n3. Entréguela el mismo día; si no puede, guárdela en el refrigerador un máximo de 12 a 24 horas.\n4. Para parásitos, repita el proceso en tres días distintos.\n\nEvite laxantes, antiácidos y antibióticos en los días previos salvo indicación médica; díganos si los toma.\n\n## ¿Qué pasa con el resultado?\n\nEl médico lo revisa con usted y, si hay parásitos o una infección bacteriana, indica el tratamiento el mismo día; en muchos casos conviene tratar también a los convivientes. Si hay sangre oculta, se estudia la causa. Le decimos el plazo de cada prueba al recibir la muestra.\n\n## ¿Cuánto cuesta?\n\nCada prueba tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Vea también nuestros [análisis de sangre](/services/examenes-sangre).",
    "longDescriptionEn": "Diarrhea that lasts more than a few days, abdominal pain with gas, weight loss or a child who is not growing well may have a cause that only a stool test reveals. At Clínica Hispana Corazón y Vida in Pasadena we order the right test, process the sample and explain the result in Spanish, without an appointment.\n\n## Which stool tests do we do?\n\n- **Ova and parasite exam:** looks for parasites and their eggs; three samples on different days are recommended to increase detection.\n- **Stool culture:** identifies bacteria such as salmonella or shigella in diarrhea with fever or blood.\n- **Fecal occult blood:** detects bleeding that cannot be seen, in anemia or as colon screening.\n- **General analysis:** consistency, fat, mucus and white cells, which point to malabsorption or inflammation.\n- Specific tests, such as giardia antigen or *Clostridioides difficile* toxin, when the provider orders them.\n\n## When is it advisable?\n\n- Diarrhea for more than three days, or with fever, blood or mucus.\n- Recurring abdominal pain, gas and bloating.\n- Unexplained weight loss, anemia or fatigue.\n- Children with poor appetite, anal itching or slow growth.\n- After travel or contact with contaminated water or food.\n- When a food-handling job or school process requires it.\n\n## How do I collect the sample?\n\n1. Collect the stool in a clean, dry container, without mixing with urine or toilet water.\n2. Transfer a walnut-sized portion to the jar we give you, with the lid tightly closed and your name on it.\n3. Bring it in the same day; if you cannot, keep it in the refrigerator for a maximum of 12 to 24 hours.\n4. For parasites, repeat the process on three different days.\n\nAvoid laxatives, antacids and antibiotics in the days before unless directed; tell us if you take them.\n\n## What happens with the result?\n\nThe provider reviews it with you and, if there are parasites or a bacterial infection, prescribes treatment the same day; in many cases household members should be treated as well. If there is occult blood, the cause is studied. We tell you the turnaround for each test when we receive the sample.\n\n## How much does it cost?\n\nEach test has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. See also our [blood tests](/services/examenes-sangre).",
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
    "dateModified": "2026-09-15",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba rápida de estreptococo en Pasadena, TX con resultado en minutos y antibiótico el mismo día si es positiva. Niños y adultos, sin cita, en español.",
    "descriptionEn": "Rapid strep test in Pasadena, TX with a result in minutes and antibiotics the same day if positive. Children and adults, walk in, Spanish spoken.",
    "longDescription": "Un dolor de garganta con fiebre y sin tos puede ser faringitis por estreptococo, que necesita antibiótico para evitar complicaciones; la mayoría de los otros dolores de garganta son virales y se curan solos. En Clínica Hispana Corazón y Vida, en Pasadena, la prueba rápida lo aclara en minutos, sin cita y en español.\n\n## ¿Qué incluye la consulta?\n\n- Evaluación de síntomas y exploración de garganta, oídos, ganglios y pulmones.\n- Prueba rápida de estreptococo con hisopado de garganta.\n- Cultivo de garganta cuando la prueba rápida es negativa en niños con síntomas claros.\n- Antibiótico el mismo día si es positiva, e indicaciones para el alivio del dolor.\n- Prueba de flu o COVID si los síntomas lo sugieren.\n- Nota para la escuela o el trabajo con la fecha de regreso.\n\n## ¿Cómo distingo el estreptococo de una gripe?\n\nEl estreptococo suele dar dolor de garganta intenso de inicio brusco, fiebre, ganglios inflamados en el cuello, puntos blancos en las amígdalas y, a veces, dolor de cabeza o de estómago, sin tos ni mocos. La gripe común trae tos, congestión y ronquera. Solo la prueba confirma la causa.\n\n## ¿Cómo es la prueba?\n\n1. Se pasa un hisopo por el fondo de la garganta durante unos segundos; puede dar arcadas breves.\n2. La prueba rápida se procesa en la clínica y el resultado está listo en unos minutos.\n3. Si es positiva, sale con la receta; si es negativa y hay dudas, se envía cultivo.\n\n## ¿Cuándo puedo volver a la escuela o al trabajo?\n\nCon estreptococo, después de 12 a 24 horas de antibiótico y sin fiebre. Tome el tratamiento completo, normalmente diez días, aunque se sienta bien a los dos: así se evitan la fiebre reumática y las recaídas. Cambie el cepillo de dientes a los dos o tres días de iniciar el antibiótico.\n\n## ¿Cuándo acudir a emergencias?\n\nDificultad para tragar saliva o respirar, hinchazón de un lado del cuello, fiebre muy alta que no cede o rigidez de cuello. No espere a la clínica en esos casos.\n\n## ¿Cómo alivio el dolor mientras hace efecto el tratamiento?\n\nLíquidos tibios o fríos según prefiera, paletas de hielo en los niños, gárgaras con agua tibia y sal en mayores de seis años, y paracetamol o ibuprofeno según la edad y el peso. Evite alimentos ácidos o muy calientes y descanse la voz un par de días.\n\n## ¿Cuánto cuesta?\n\nLa consulta y la prueba tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Vea también la atención de [gripe, tos y enfermedades respiratorias](/services/enfermedades-respiratorias).",
    "longDescriptionEn": "A sore throat with fever and no cough may be strep pharyngitis, which needs antibiotics to prevent complications; most other sore throats are viral and go away on their own. At Clínica Hispana Corazón y Vida in Pasadena, the rapid test clears it up in minutes, without an appointment and in Spanish.\n\n## What does the visit include?\n\n- Symptom evaluation and examination of throat, ears, lymph nodes and lungs.\n- Rapid strep test with a throat swab.\n- Throat culture when the rapid test is negative in children with clear symptoms.\n- Antibiotics the same day if positive, and guidance for pain relief.\n- Flu or COVID test if symptoms suggest it.\n- A note for school or work with the return date.\n\n## How do I tell strep from a cold?\n\nStrep usually causes intense sore throat with sudden onset, fever, swollen neck glands, white spots on the tonsils and sometimes headache or stomachache, without cough or runny nose. A common cold brings cough, congestion and hoarseness. Only the test confirms the cause.\n\n## What is the test like?\n\n1. A swab is passed over the back of the throat for a few seconds; it may cause brief gagging.\n2. The rapid test is processed at the clinic and the result is ready in a few minutes.\n3. If positive, you leave with the prescription; if negative and there is doubt, a culture is sent.\n\n## When can I go back to school or work?\n\nWith strep, after 12 to 24 hours of antibiotics and once fever-free. Take the full course, usually ten days, even if you feel well after two: that prevents rheumatic fever and relapses. Replace your toothbrush two or three days after starting the antibiotic.\n\n## When should I go to the emergency room?\n\nDifficulty swallowing saliva or breathing, swelling on one side of the neck, very high fever that does not come down or a stiff neck. Do not wait for the clinic in those cases.\n\n## How do I relieve the pain while the treatment takes effect?\n\nWarm or cold fluids as you prefer, ice pops for children, warm salt-water gargles for those over six, and acetaminophen or ibuprofen according to age and weight. Avoid acidic or very hot foods and rest your voice for a couple of days.\n\n## How much does it cost?\n\nThe visit and the test have a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. See also care for [colds, cough and respiratory illness](/services/enfermedades-respiratorias).",
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
    "dateModified": "2026-09-15",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Prueba de tuberculosis en Pasadena, TX: cutánea PPD con lectura a las 48-72 horas para trabajo y escuela, o de sangre IGRA para inmigración, con documentación.",
    "descriptionEn": "Tuberculosis test in Pasadena, TX: PPD skin test read at 48-72 hours for work and school, or IGRA blood test for immigration, with documentation. Walk in.",
    "longDescription": "Trabajos en salud, guarderías, escuelas y el trámite de inmigración piden una prueba de tuberculosis vigente. En Clínica Hispana Corazón y Vida, en Pasadena, aplicamos la prueba cutánea PPD y la prueba de sangre IGRA, leemos e interpretamos el resultado y le entregamos la documentación, en español y sin cita.\n\n## ¿Qué prueba necesito?\n\n- **Prueba cutánea (PPD o Mantoux):** se inyecta una pequeña cantidad bajo la piel del antebrazo y hay que volver a las 48 a 72 horas para la lectura. Es la habitual para empleo y escuela.\n- **Prueba de sangre (IGRA):** una sola visita, sin lectura posterior; es la que exige USCIS en el [examen de inmigración](/services/examenes-inmigracion) y la indicada si se vacunó con BCG, porque la vacuna puede dar falsos positivos en la prueba cutánea.\n\nSi no está seguro, traiga el formulario de su empleador o escuela y le decimos cuál acepta.\n\n## ¿Cómo es la prueba cutánea?\n\n1. Revisión breve: pruebas previas, vacuna BCG, síntomas y embarazo.\n2. Aplicación en el antebrazo; siente un pinchazo leve.\n3. No se cubra con curita ni se rasque; puede bañarse con normalidad.\n4. Vuelva entre 48 y 72 horas después para la lectura; si pasan más de 72 horas, hay que repetirla.\n5. Se mide la induración en milímetros y se entrega el resultado por escrito.\n\n## ¿Qué significa un resultado positivo?\n\nIndica que ha tenido contacto con la bacteria, no necesariamente que tenga la enfermedad activa. El siguiente paso es una radiografía de tórax y una evaluación de síntomas; la mayoría de los positivos corresponden a infección latente, que se trata con medicamento para que no se active. Le orientamos y coordinamos la referencia si hace falta.\n\n## ¿Cuándo repetir la prueba?\n\nMuchos empleadores la piden cada año o al ingresar. Si ya tuvo una prueba positiva documentada, no debe repetirse la cutánea: en ese caso se presenta la radiografía y la evaluación médica.\n\n## ¿Qué síntomas debo vigilar?\n\nTos que dura más de tres semanas, fiebre baja por las tardes, sudores nocturnos, pérdida de peso o de apetito y cansancio. Con esos síntomas no basta la prueba: se indica una radiografía y una evaluación el mismo día, y conviene usar mascarilla al venir.\n\n## ¿Cuánto cuesta?\n\nCada prueba tiene precio directo, sin seguro, en efectivo o con tarjeta; la lectura de la PPD está incluida. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Planee la aplicación para que la lectura caiga en un día en que pueda volver.",
    "longDescriptionEn": "Health care jobs, daycares, schools and the immigration process require a current tuberculosis test. At Clínica Hispana Corazón y Vida in Pasadena we give the PPD skin test and the IGRA blood test, read and interpret the result and hand you the documentation, in Spanish and without an appointment.\n\n## Which test do I need?\n\n- **Skin test (PPD or Mantoux):** a small amount is injected under the skin of the forearm and you must return in 48 to 72 hours for the reading. It is the usual one for employment and school.\n- **Blood test (IGRA):** a single visit, no later reading; it is the one USCIS requires in the [immigration exam](/services/examenes-inmigracion) and the right choice if you had the BCG vaccine, because the vaccine can cause false positives on the skin test.\n\nIf you are not sure, bring your employer's or school's form and we tell you which one they accept.\n\n## What is the skin test like?\n\n1. A brief review: previous tests, BCG vaccine, symptoms and pregnancy.\n2. Injection in the forearm; you feel a slight pinch.\n3. Do not cover it with a bandage or scratch it; you can bathe normally.\n4. Return 48 to 72 hours later for the reading; if more than 72 hours pass, it must be repeated.\n5. The induration is measured in millimeters and the result is given in writing.\n\n## What does a positive result mean?\n\nIt indicates contact with the bacteria, not necessarily active disease. The next step is a chest X-ray and a symptom evaluation; most positives correspond to latent infection, which is treated with medication so it does not activate. We guide you and coordinate the referral if needed.\n\n## When should the test be repeated?\n\nMany employers require it yearly or at hiring. If you already had a documented positive test, the skin test should not be repeated: in that case you submit the X-ray and the medical evaluation.\n\n## Which symptoms should I watch for?\n\nA cough lasting more than three weeks, low-grade fever in the afternoons, night sweats, weight or appetite loss and fatigue. With those symptoms the test alone is not enough: an X-ray and an evaluation are ordered the same day, and it is best to wear a mask when you come.\n\n## How much does it cost?\n\nEach test has a direct price, no insurance, in cash or by card; the PPD reading is included. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. Plan the application so the reading falls on a day you can return.",
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
    "dateModified": "2026-09-15",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de infecciones de transmisión sexual en Pasadena, TX: VIH, sífilis, gonorrea, clamidia, hepatitis y herpes, confidenciales y con tratamiento. Sin cita.",
    "descriptionEn": "Sexually transmitted infection testing in Pasadena, TX: HIV, syphilis, gonorrhea, chlamydia, hepatitis and herpes, confidential, with treatment. Walk in.",
    "longDescription": "La mayoría de las infecciones de transmisión sexual no dan síntomas al principio y se contagian sin saberlo. Una prueba a tiempo protege su salud y la de su pareja. En Clínica Hispana Corazón y Vida, en Pasadena, las pruebas son confidenciales, sin cita y en español, y el tratamiento empieza en la misma clínica.\n\n## ¿Qué pruebas hacemos?\n\n- VIH (prueba de sangre).\n- Sífilis (prueba de sangre).\n- Gonorrea y clamidia (muestra de orina o hisopado).\n- Tricomonas y vaginosis (cultivo o hisopado).\n- Hepatitis B y C (prueba de sangre).\n- Herpes cuando hay lesiones activas.\n- Panel completo para chequeo de rutina o nueva pareja.\n\n## ¿Cuándo debo hacerme la prueba?\n\n- Después de una relación sin protección o con una pareja nueva.\n- Si tiene flujo, ardor al orinar, llagas, verrugas o dolor pélvico.\n- Si su pareja tiene una infección diagnosticada.\n- Una vez al año si tiene parejas distintas, y en cada embarazo.\n- Antes de dejar de usar preservativo con una pareja estable.\n\nTenga en cuenta el periodo de ventana: el VIH puede tardar de dos a seis semanas en detectarse según la prueba, y la sífilis unas tres a seis semanas. Si la exposición fue reciente, se repite la prueba más adelante.\n\n## ¿Cómo es la visita?\n\n1. Conversación privada sobre síntomas, exposición y parejas; sin juicios.\n2. Toma de sangre, orina o hisopado según las pruebas indicadas.\n3. Exploración física si hay lesiones.\n4. Tratamiento inmediato cuando los síntomas son claros, y resultados de laboratorio en el plazo que le indicamos al tomar la muestra.\n\n## ¿Qué pasa si sale positivo?\n\nGonorrea, clamidia, sífilis y tricomonas se curan con antibióticos; su pareja debe tratarse al mismo tiempo para que no se reinfecten. El herpes y el VIH se controlan con medicamentos; en el caso del VIH lo referimos a un programa de atención especializada en el área de Houston. Le explicamos cómo hablarlo con su pareja y cuándo repetir la prueba.\n\n## ¿Es confidencial?\n\nSí. Sus resultados se manejan bajo las normas de privacidad HIPAA y no se comparten con nadie sin su autorización. Puede pagar en efectivo y venir sin acompañante.\n\n## ¿Cuánto cuesta?\n\nCada prueba y el panel completo tienen precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM.",
    "longDescriptionEn": "Most sexually transmitted infections cause no symptoms at first and spread without anyone knowing. A timely test protects your health and your partner's. At Clínica Hispana Corazón y Vida in Pasadena, tests are confidential, walk-in and in Spanish, and treatment starts at the same clinic.\n\n## Which tests do we run?\n\n- HIV (blood test).\n- Syphilis (blood test).\n- Gonorrhea and chlamydia (urine sample or swab).\n- Trichomonas and vaginosis (culture or swab).\n- Hepatitis B and C (blood test).\n- Herpes when there are active lesions.\n- Full panel for a routine check or a new partner.\n\n## When should I get tested?\n\n- After unprotected sex or with a new partner.\n- If you have discharge, burning when urinating, sores, warts or pelvic pain.\n- If your partner has a diagnosed infection.\n- Once a year if you have different partners, and in every pregnancy.\n- Before stopping condom use with a steady partner.\n\nKeep the window period in mind: HIV can take two to six weeks to be detectable depending on the test, and syphilis about three to six weeks. If the exposure was recent, the test is repeated later.\n\n## What is the visit like?\n\n1. A private conversation about symptoms, exposure and partners; no judgment.\n2. Blood, urine or swab samples according to the tests indicated.\n3. A physical exam if there are lesions.\n4. Immediate treatment when symptoms are clear, and lab results within the turnaround we tell you when the sample is taken.\n\n## What if it is positive?\n\nGonorrhea, chlamydia, syphilis and trichomonas are cured with antibiotics; your partner must be treated at the same time so you do not reinfect each other. Herpes and HIV are controlled with medication; for HIV we refer you to a specialized care program in the Houston area. We explain how to talk about it with your partner and when to repeat the test.\n\n## Is it confidential?\n\nYes. Your results are handled under HIPAA privacy rules and are not shared with anyone without your authorization. You can pay in cash and come without a companion.\n\n## How do I prevent reinfection?\n\nUse condoms with every new partner until both of you have been tested, complete the full treatment before having sex again, and have your partner treated at the same time. The vaccines for hepatitis B and HPV also prevent two of the most common infections; ask about them at the visit.\n\n## How much does it cost?\n\nEach test and the full panel have a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM.",
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
    "dateModified": "2026-09-15",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Prueba de alcohol y drogas para empleo en Pasadena, TX: muestra de orina o aliento, cadena de custodia y documentación del resultado para el empleador. Sin cita.",
    "descriptionEn": "Alcohol and drug testing for employment in Pasadena, TX: urine or breath sample, chain of custody and result documentation for the employer. Walk in.",
    "longDescription": "Antes de contratar, después de un accidente o de forma aleatoria, muchos empleadores de Pasadena piden una prueba de drogas o de alcohol. En Clínica Hispana Corazón y Vida la hacemos sin cita, con el proceso de recolección que exige el empleador y la documentación lista para entregar, todo en español.\n\n## ¿Qué pruebas hacemos?\n\n- Prueba de drogas en orina con paneles de 5, 10 o más sustancias, según lo que pida el empleador.\n- Prueba de alcohol.\n- Recolección con cadena de custodia cuando el formulario del empleador lo requiere.\n- Documentación del resultado para el empleador, la escuela o el trámite.\n\nSi su empleador exige un laboratorio o un formato específico, traiga las instrucciones para seguirlas tal cual.\n\n## ¿Qué debo traer?\n\n- Identificación oficial con foto.\n- El formulario o la orden del empleador, si lo tiene.\n- Lista de medicamentos con receta que toma: algunos dan positivo en el panel y el médico revisor lo tiene en cuenta.\n\nNo conviene beber grandes cantidades de agua antes de la prueba; una orina muy diluida obliga a repetirla.\n\n## ¿Cómo es la visita?\n\n1. Registro con identificación y verificación del formulario.\n2. Recolección de la muestra de orina en un baño preparado, o prueba de aliento para alcohol.\n3. Sellado y etiquetado de la muestra frente a usted cuando hay cadena de custodia.\n4. Entrega de la documentación; si la prueba se procesa en laboratorio externo, le decimos el plazo y a quién se envía el resultado.\n\nLa visita suele tomar entre 15 y 30 minutos.\n\n## ¿Qué pasa si sale positivo?\n\nCon paneles de laboratorio, un resultado positivo se confirma con una segunda prueba más específica antes de informarse. Si toma un medicamento recetado que explica el resultado, tráigalo documentado. En pruebas para el DOT, el proceso lo define el programa del empleador y su médico revisor.\n\n## ¿Es lo mismo que el examen DOT?\n\nNo. El [examen físico DOT](/services/examen-dot) evalúa su salud para manejar; la prueba de drogas es aparte y la ordena la empresa. Muchos conductores hacen los dos en la misma visita.\n\n## ¿Qué sustancias detecta el panel?\n\nEl panel básico de cinco sustancias detecta marihuana, cocaína, anfetaminas, opiáceos y fenciclidina. Los paneles ampliados añaden benzodiacepinas, barbitúricos, metadona, oxicodona y otras. El tiempo en que cada sustancia sigue siendo detectable en orina varía de uno o dos días a varias semanas.\n\n## ¿Cuánto cuesta?\n\nCada prueba tiene precio directo, sin seguro, en efectivo o con tarjeta; el panel y la cadena de custodia cambian el precio. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM.",
    "longDescriptionEn": "Before hiring, after an accident or at random, many employers in Pasadena require a drug or alcohol test. At Clínica Hispana Corazón y Vida we do it without an appointment, with the collection process the employer requires and the documentation ready to hand in, all in Spanish.\n\n## Which tests do we do?\n\n- Urine drug test with 5-, 10- or more-substance panels, according to what the employer requests.\n- Alcohol test.\n- Collection with chain of custody when the employer's form requires it.\n- Result documentation for the employer, school or paperwork.\n\nIf your employer requires a specific laboratory or format, bring the instructions so we follow them exactly.\n\n## What should I bring?\n\n- Official photo ID.\n- The employer's form or order, if you have it.\n- A list of prescription medications you take: some show up on the panel and the reviewing physician takes that into account.\n\nAvoid drinking large amounts of water before the test; very diluted urine means the test has to be repeated.\n\n## What is the visit like?\n\n1. Check-in with ID and verification of the form.\n2. Urine sample collection in a prepared restroom, or a breath test for alcohol.\n3. Sealing and labeling of the sample in front of you when there is chain of custody.\n4. Delivery of the documentation; if the test is processed at an outside laboratory, we tell you the turnaround and who receives the result.\n\nThe visit usually takes 15 to 30 minutes.\n\n## What if it is positive?\n\nWith laboratory panels, a positive result is confirmed with a second, more specific test before it is reported. If you take a prescribed medication that explains the result, bring it documented. For DOT tests, the process is defined by the employer's program and its medical review officer.\n\n## Is it the same as the DOT physical?\n\nNo. The [DOT physical](/services/examen-dot) evaluates your health to drive; the drug test is separate and ordered by the company. Many drivers do both in the same visit.\n\n## Which substances does the panel detect?\n\nThe basic five-substance panel detects marijuana, cocaine, amphetamines, opiates and phencyclidine. Expanded panels add benzodiazepines, barbiturates, methadone, oxycodone and others. How long each substance remains detectable in urine ranges from one or two days to several weeks.\n\n## How much does it cost?\n\nEach test has a direct price, no insurance, in cash or by card; the panel and chain of custody change the price. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM.",
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
    "dateModified": "2026-09-15",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma (EKG) en Pasadena, TX en minutos, sin dolor, interpretado por el médico: ritmo, frecuencia y señales de riesgo. Chequeos y trámites.",
    "descriptionEn": "Electrocardiogram (EKG) in Pasadena, TX in minutes, painless, interpreted by the provider: rhythm, rate and warning signs. For checkups and exams.",
    "longDescription": "El electrocardiograma registra la actividad eléctrica del corazón en unos minutos, sin dolor y sin preparación. En Clínica Hispana Corazón y Vida, en Pasadena, lo hacemos en la misma visita, el médico lo interpreta y le explica el resultado en español, sin cita.\n\n## ¿Para qué sirve el electrocardiograma?\n\n- Detectar arritmias: latidos irregulares, muy rápidos o muy lentos.\n- Buscar señales de un infarto previo o de falta de riego al corazón.\n- Ver crecimiento del corazón por presión alta de años.\n- Completar exámenes de trabajo, deporte, inmigración o previos a una cirugía.\n- Evaluar palpitaciones, mareos, desmayos o dolor en el pecho que ya pasó.\n- Controlar el efecto de algunos medicamentos.\n\n## ¿Cómo es el estudio?\n\n1. Se recuesta y se colocan diez electrodos adhesivos en pecho, brazos y piernas.\n2. El aparato registra durante unos segundos; debe permanecer quieto y respirar normal.\n3. Se retiran los electrodos. Todo toma menos de diez minutos.\n4. El médico interpreta el trazo, lo compara con estudios previos si los trae y le explica el resultado.\n\nNo necesita ayuno. Evite cremas en el pecho ese día y traiga la lista de medicamentos.\n\n## ¿Qué no detecta un EKG?\n\nRegistra el corazón solo durante los segundos del estudio, así que una arritmia que va y viene puede no aparecer, y un EKG normal no descarta un problema de las arterias en reposo. Cuando hay dudas, el médico indica un monitor de 24 horas, una prueba de esfuerzo o un ecocardiograma y lo refiere al cardiólogo.\n\n## ¿Cuándo es una emergencia?\n\nDolor opresivo en el pecho que dura más de unos minutos, que se extiende al brazo o la mandíbula, con sudor frío, falta de aire o desmayo: llame al 911. No venga manejando a la clínica en esa situación.\n\n## ¿Qué significa un resultado alterado?\n\nUn trazo con cambios no siempre indica enfermedad: la posición de los electrodos, el nerviosismo o algunos medicamentos lo modifican. El médico lo interpreta junto con sus síntomas, su presión y sus análisis, y decide si repetirlo, iniciar tratamiento o referirlo al cardiólogo.\n\n## ¿Cuánto cuesta?\n\nEl electrocardiograma tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. Suele combinarse con el [chequeo de salud del hombre](/services/salud-hombre) y el control de [presión y colesterol](/services/condiciones-cronicas).",
    "longDescriptionEn": "The electrocardiogram records the heart's electrical activity in a few minutes, painlessly and with no preparation. At Clínica Hispana Corazón y Vida in Pasadena we do it in the same visit, the provider interprets it and explains the result in Spanish, without an appointment.\n\n## What is the electrocardiogram for?\n\n- Detecting arrhythmias: irregular, very fast or very slow beats.\n- Looking for signs of a previous heart attack or poor blood flow to the heart.\n- Seeing heart enlargement from years of high blood pressure.\n- Completing work, sports, immigration or pre-surgery exams.\n- Evaluating palpitations, dizziness, fainting or chest pain that has already passed.\n- Monitoring the effect of some medications.\n\n## What is the study like?\n\n1. You lie down and ten adhesive electrodes are placed on the chest, arms and legs.\n2. The machine records for a few seconds; you must stay still and breathe normally.\n3. The electrodes are removed. The whole thing takes under ten minutes.\n4. The provider interprets the tracing, compares it with previous studies if you bring them and explains the result.\n\nNo fasting is needed. Avoid lotions on the chest that day and bring your medication list.\n\n## What does an EKG not detect?\n\nIt records the heart only during the seconds of the study, so an arrhythmia that comes and goes may not show, and a normal EKG does not rule out an artery problem at rest. When in doubt, the provider orders a 24-hour monitor, a stress test or an echocardiogram and refers you to a cardiologist.\n\n## When is it an emergency?\n\nPressing chest pain lasting more than a few minutes, spreading to the arm or jaw, with cold sweat, shortness of breath or fainting: call 911. Do not drive yourself to the clinic in that situation.\n\n## What does an abnormal result mean?\n\nA tracing with changes does not always indicate disease: electrode position, nervousness or some medications alter it. The provider interprets it together with your symptoms, blood pressure and lab work, and decides whether to repeat it, start treatment or refer you to a cardiologist.\n\n## How much does it cost?\n\nThe electrocardiogram has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. It is often combined with the [men's health checkup](/services/salud-hombre) and [blood pressure and cholesterol](/services/condiciones-cronicas) follow-up.",
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
    "dateModified": "2026-09-15",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido en Pasadena, TX: abdominal, pélvico, de embarazo, tiroides y tejidos blandos, sin dolor ni radiación, con resultado explicado en español.",
    "descriptionEn": "Ultrasound in Pasadena, TX: abdominal, pelvic, pregnancy, thyroid and soft tissue, painless and radiation-free, with the result explained in Spanish.",
    "longDescription": "El ultrasonido muestra en tiempo real órganos, vasos y tejidos usando ondas de sonido, sin radiación ni dolor. En Clínica Hispana Corazón y Vida, en Pasadena, lo realizamos en la misma visita en que el médico lo indica, y le explicamos lo que se ve en español, sin cita.\n\n## ¿Qué ultrasonidos hacemos?\n\n- **Abdominal:** hígado, vesícula y cálculos, páncreas, bazo, riñones y aorta.\n- **Pélvico:** útero, ovarios y vejiga, por vía abdominal o transvaginal según el caso.\n- **De embarazo:** confirmación, edad gestacional, latido y seguimiento del crecimiento.\n- **Tiroides y cuello:** nódulos y tamaño de la glándula.\n- **Tejidos blandos:** bultos en piel, abscesos, hernias y ganglios.\n- **Renal y de vías urinarias:** cálculos, obstrucción, infecciones repetidas.\n\nSi su caso requiere un estudio especializado, como ecocardiograma o Doppler vascular, se lo indicamos y lo referimos.\n\n## ¿Cómo me preparo?\n\n- **Abdominal:** ayuno de seis a ocho horas para ver bien la vesícula; solo agua.\n- **Pélvico por vía abdominal y de embarazo temprano:** vejiga llena; beba unos cuatro vasos de agua una hora antes y no orine.\n- **Transvaginal:** vejiga vacía.\n- **Tiroides, tejidos blandos y renal:** sin preparación.\n\nTraiga los estudios previos y la orden si viene de otro médico.\n\n## ¿Cómo es el estudio?\n\n1. Se aplica gel sobre la zona y se desliza el transductor; puede sentir presión leve.\n2. El estudio dura entre 15 y 30 minutos según la región.\n3. El médico revisa las imágenes con usted y le entrega el informe.\n4. Si algo requiere seguimiento, se define el siguiente paso el mismo día.\n\n## ¿Cuándo conviene un ultrasonido?\n\nDolor abdominal o pélvico persistente, sangrado irregular, sospecha de cálculos en vesícula o riñón, confirmación de embarazo, bulto en el cuello o en la piel, o control de una condición ya conocida.\n\n## ¿Es seguro durante el embarazo?\n\nSí. El ultrasonido no usa radiación y es el estudio de elección durante el embarazo, tanto para confirmarlo como para seguir el crecimiento del bebé. Se realiza cuando aporta información médica; los ultrasonidos solo de recuerdo, sin indicación, no se recomiendan.\n\n## ¿Quién realiza e interpreta el estudio?\n\nEl ultrasonido lo realiza personal capacitado de la clínica y el médico interpreta las imágenes en la misma visita, relacionándolas con sus síntomas y análisis. Cuando el hallazgo requiere un especialista, le entregamos las imágenes y el informe para llevarlos.\n\n## ¿Cuánto cuesta?\n\nCada tipo de ultrasonido tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551 el estudio que necesita.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM.",
    "longDescriptionEn": "Ultrasound shows organs, vessels and tissues in real time using sound waves, with no radiation or pain. At Clínica Hispana Corazón y Vida in Pasadena we perform it in the same visit the provider orders it, and explain what is seen in Spanish, without an appointment.\n\n## Which ultrasounds do we perform?\n\n- **Abdominal:** liver, gallbladder and stones, pancreas, spleen, kidneys and aorta.\n- **Pelvic:** uterus, ovaries and bladder, through the abdomen or transvaginal depending on the case.\n- **Pregnancy:** confirmation, gestational age, heartbeat and growth follow-up.\n- **Thyroid and neck:** nodules and gland size.\n- **Soft tissue:** skin lumps, abscesses, hernias and lymph nodes.\n- **Kidney and urinary tract:** stones, obstruction, repeated infections.\n\nIf your case requires a specialized study, such as an echocardiogram or vascular Doppler, we tell you and refer you.\n\n## How do I prepare?\n\n- **Abdominal:** fast six to eight hours to see the gallbladder well; water only.\n- **Pelvic through the abdomen and early pregnancy:** full bladder; drink about four glasses of water an hour before and do not urinate.\n- **Transvaginal:** empty bladder.\n- **Thyroid, soft tissue and kidney:** no preparation.\n\nBring previous studies and the order if you come from another provider.\n\n## What is the study like?\n\n1. Gel is applied to the area and the probe is moved over it; you may feel light pressure.\n2. The study takes 15 to 30 minutes depending on the region.\n3. The provider reviews the images with you and hands you the report.\n4. If something needs follow-up, the next step is defined the same day.\n\n## When is an ultrasound advisable?\n\nPersistent abdominal or pelvic pain, irregular bleeding, suspected gallbladder or kidney stones, pregnancy confirmation, a lump in the neck or skin, or monitoring of a known condition.\n\n## Is it safe during pregnancy?\n\nYes. Ultrasound uses no radiation and is the study of choice during pregnancy, both to confirm it and to follow the baby's growth. It is performed when it provides medical information; keepsake-only ultrasounds without indication are not recommended.\n\n## Who performs and interprets the study?\n\nThe ultrasound is performed by trained clinic staff and the provider interprets the images in the same visit, relating them to your symptoms and lab work. When a finding requires a specialist, we hand you the images and the report to take along.\n\n## How much does it cost?\n\nEach type of ultrasound has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551 for the study you need.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM.",
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
    "dateModified": "2026-09-15",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacuna contra la influenza y refuerzo de tétanos (Td o Tdap) en Pasadena, TX, aplicados sin cita por personal médico, con registro para trabajo o escuela.",
    "descriptionEn": "Flu vaccine and tetanus booster (Td or Tdap) in Pasadena, TX, given without an appointment by medical staff, with a record for work or school.",
    "longDescription": "Dos vacunas evitan la mayoría de las visitas por gripe fuerte y por heridas contaminadas: la de influenza cada temporada y el refuerzo de tétanos cada diez años. En Clínica Hispana Corazón y Vida, en Pasadena, las aplicamos sin cita, en español, y le entregamos el registro que necesita para el trabajo, la escuela o un trámite.\n\n## ¿Qué vacunas aplicamos?\n\n- **Influenza (flu):** una dosis cada temporada, desde los seis meses de edad. La temporada en Texas va de octubre a marzo; lo ideal es vacunarse en septiembre u octubre.\n- **Tétanos y difteria (Td) o tétanos, difteria y tos ferina (Tdap):** refuerzo cada diez años, o antes tras una herida sucia si pasaron más de cinco años. La Tdap se recomienda una vez en la adultez y en cada embarazo.\n- Otras vacunas de adultos, como hepatitis o MMR, se aplican dentro del [examen de inmigración](/services/examenes-inmigracion); pregunte disponibilidad para otros casos.\n\n## ¿Quién debe vacunarse contra la influenza?\n\nTodas las personas desde los seis meses, y con más razón mayores de 65 años, embarazadas, personas con diabetes, asma, enfermedades del corazón o del riñón, y quienes cuidan a bebés o a adultos mayores. Es una vacuna inactivada: no causa gripe.\n\n## ¿Cuándo necesito el refuerzo de tétanos?\n\nSi no recuerda su última dosis, si pasaron diez años, o si tiene una herida con tierra, óxido o mordedura y su último refuerzo fue hace más de cinco años. En la clínica revisamos la herida y aplicamos la dosis en la misma visita.\n\n## ¿Cómo es la visita?\n\n1. Revisión breve: alergias, fiebre actual, embarazo y vacunas previas.\n2. Aplicación en el brazo por personal médico.\n3. Observación de unos minutos y entrega del registro escrito.\n4. Recordatorio de la siguiente dosis.\n\nTraiga su cartilla de vacunas si la tiene; si no, empezamos una nueva.\n\n## ¿Qué efectos son normales?\n\nDolor o enrojecimiento en el brazo, cansancio leve o febrícula durante uno o dos días. Una reacción alérgica intensa es muy rara; por eso permanece unos minutos en la clínica después de la aplicación.\n\n## ¿Puedo ponerme las dos vacunas el mismo día?\n\nSí. La vacuna contra la influenza y el refuerzo de tétanos se aplican en la misma visita, en brazos distintos, sin restar eficacia. Durante el embarazo ambas están indicadas: la de influenza en cualquier trimestre y la Tdap entre las semanas 27 y 36 para proteger al bebé.\n\n## ¿Cuánto cuesta?\n\nCada vacuna tiene precio directo, sin seguro, en efectivo o con tarjeta. Confirme por WhatsApp al (832) 930-5551.\n\n## ¿Dónde y cuándo?\n\nSin cita en 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM.",
    "longDescriptionEn": "Two vaccines prevent most visits for severe flu and contaminated wounds: the flu shot every season and the tetanus booster every ten years. At Clínica Hispana Corazón y Vida in Pasadena we give them without an appointment, in Spanish, and hand you the record you need for work, school or paperwork.\n\n## Which vaccines do we give?\n\n- **Influenza (flu):** one dose every season, from six months of age. The season in Texas runs from October to March; the ideal time is September or October.\n- **Tetanus and diphtheria (Td) or tetanus, diphtheria and pertussis (Tdap):** a booster every ten years, or sooner after a dirty wound if more than five years have passed. Tdap is recommended once in adulthood and in every pregnancy.\n- Other adult vaccines, such as hepatitis or MMR, are given as part of the [immigration exam](/services/examenes-inmigracion); ask about availability for other cases.\n\n## Who should get the flu vaccine?\n\nEveryone from six months of age, and especially people over 65, pregnant women, people with diabetes, asthma, heart or kidney disease, and those who care for babies or older adults. It is an inactivated vaccine: it does not cause the flu.\n\n## When do I need the tetanus booster?\n\nIf you do not remember your last dose, if ten years have passed, or if you have a wound with dirt, rust or a bite and your last booster was more than five years ago. At the clinic we check the wound and give the dose in the same visit.\n\n## What is the visit like?\n\n1. A brief review: allergies, current fever, pregnancy and previous vaccines.\n2. Injection in the arm by medical staff.\n3. A few minutes of observation and delivery of the written record.\n4. A reminder for the next dose.\n\nBring your vaccination record if you have it; if not, we start a new one.\n\n## Which effects are normal?\n\nPain or redness in the arm, mild tiredness or a low-grade fever for one or two days. A severe allergic reaction is very rare; that is why you stay a few minutes at the clinic after the shot.\n\n## Can I get both vaccines the same day?\n\nYes. The flu vaccine and the tetanus booster are given in the same visit, in different arms, without reducing effectiveness. During pregnancy both are indicated: the flu shot in any trimester and Tdap between weeks 27 and 36 to protect the baby.\n\n## How much does it cost?\n\nEach vaccine has a direct price, no insurance, in cash or by card. Confirm on WhatsApp at (832) 930-5551.\n\n## Where and when?\n\nWalk in at 918 W Southmore Ave, Suite 180, Pasadena, TX 77502, Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM.",
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

