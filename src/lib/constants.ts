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

