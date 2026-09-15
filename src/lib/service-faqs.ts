interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo hacerme exámenes de control?",
        "answer": "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get control labs?",
        "answer": "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Qué prueba se usa para revisar la tiroides?",
        "answer": "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What test is used to check the thyroid?",
        "answer": "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Tratan alergias en la piel y respiratorias?",
        "answer": "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón)."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat both skin and respiratory allergies?",
        "answer": "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching)."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Hacen prueba de flu y de COVID el mismo día?",
        "answer": "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you test for flu and COVID the same day?",
        "answer": "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Llenan el formulario de la escuela o el equipo?",
        "answer": "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you fill out the school or team form?",
        "answer": "Yes, bring your school or sports-team form and we complete it during the visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Puedo pedir que me atienda una mujer?",
        "answer": "Sí. Indíquelo en recepción al llegar y organizamos la consulta con personal femenino cuando esté disponible. También puede entrar acompañada si así lo prefiere."
      },
      {
        "question": "¿Puedo hacerme el Papanicolaou si tengo la regla?",
        "answer": "Es mejor esperar a que termine el sangrado, porque la muestra puede salir poco legible. Si tiene una molestia urgente, venga igual: la consulta y el cultivo sí se pueden hacer."
      },
      {
        "question": "¿Cuándo recibo el resultado del Papanicolaou o del cultivo?",
        "answer": "El cultivo y el Papanicolaou se procesan en laboratorio y tardan unos días; le decimos el plazo al tomar la muestra. Si hay infección evidente, el tratamiento empieza el mismo día."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I ask to be seen by a woman?",
        "answer": "Yes. Tell the front desk when you arrive and we arrange the visit with female staff when available. You may also bring a companion into the room if you prefer."
      },
      {
        "question": "Can I get a Pap test while on my period?",
        "answer": "It is better to wait until the bleeding ends, because the sample may be hard to read. If you have an urgent discomfort, come anyway: the consultation and the culture can still be done."
      },
      {
        "question": "When do I get the Pap test or culture result?",
        "answer": "The culture and the Pap test are processed in a laboratory and take a few days; we tell you the turnaround when the sample is taken. If an infection is evident, treatment starts the same day."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Qué tan confiable es la prueba de embarazo?",
        "answer": "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How reliable is the pregnancy test?",
        "answer": "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen?",
        "answer": "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What contraceptive methods do you offer?",
        "answer": "We offer guidance, birth control pills and the injection, and help you choose the right method for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Qué incluye el examen del hombre?",
        "answer": "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the men's exam include?",
        "answer": "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Puedo tomar agua si vengo en ayunas para el análisis?",
        "answer": "Sí. El agua no altera la glucosa ni los lípidos. Evite café, jugos, chicle y comida durante las 8 a 12 horas previas, y tome sus medicamentos como siempre salvo indicación contraria."
      },
      {
        "question": "¿Necesito orden médica para hacerme análisis de sangre?",
        "answer": "No. Puede pedir directamente la prueba o el panel que necesita, o pasar con el médico para que la elija con usted según sus síntomas. En ambos casos conoce el precio antes."
      },
      {
        "question": "¿Me explican el resultado o solo me entregan el papel?",
        "answer": "Se lo explicamos. Revisamos con usted cada valor frente a su rango de referencia y, si algo sale alterado, definimos tratamiento, seguimiento o repetición de la prueba."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I drink water if I come fasting for the test?",
        "answer": "Yes. Water does not affect glucose or lipids. Avoid coffee, juice, gum and food for the 8 to 12 hours before, and take your medications as usual unless told otherwise."
      },
      {
        "question": "Do I need a doctor's order to get blood work?",
        "answer": "No. You can ask directly for the test or panel you need, or see the provider so it is chosen with you based on your symptoms. Either way you know the price beforehand."
      },
      {
        "question": "Do you explain the result or just hand me the paper?",
        "answer": "We explain it. We review each value with you against its reference range and, if anything is abnormal, we define treatment, follow-up or a repeat test."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Puedo hacerme el examen de orina si tengo la regla?",
        "answer": "Sí. Avise en recepción; la muestra se toma con limpieza previa y de la mitad del chorro para que la sangre menstrual no altere el resultado. Si hay duda, se envía urocultivo."
      },
      {
        "question": "¿Cuándo hace falta un urocultivo además del examen de orina?",
        "answer": "Cuando la infección se repite, no mejora con el primer antibiótico, hay embarazo, diabetes o fiebre, o el médico sospecha que llegó al riñón. Identifica la bacteria y el antibiótico adecuado."
      },
      {
        "question": "¿Puedo tomar el antibiótico que me sobró de otra vez?",
        "answer": "No. Puede no ser el correcto para esta bacteria, enmascarar el resultado del cultivo y generar resistencia. Traiga el nombre de lo que tomó antes y el médico decide el tratamiento."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I take the urine test while on my period?",
        "answer": "Yes. Let the front desk know; the sample is collected after cleaning and from midstream so menstrual blood does not alter the result. If in doubt, a urine culture is sent."
      },
      {
        "question": "When is a urine culture needed in addition to the urinalysis?",
        "answer": "When the infection recurs, does not improve with the first antibiotic, there is pregnancy, diabetes or fever, or the provider suspects it reached the kidney. It identifies the bacteria and the right antibiotic."
      },
      {
        "question": "Can I take antibiotics left over from another time?",
        "answer": "No. They may not be right for this bacteria, can mask the culture result and create resistance. Bring the name of what you took before and the provider decides the treatment."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Cómo se toma la muestra de heces?",
        "answer": "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How is the stool sample collected?",
        "answer": "We give you a container and clear instructions to collect the sample at home and bring it to the clinic."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cuánto tarda el resultado del strep test?",
        "answer": "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the strep test take?",
        "answer": "The rapid strep test gives a result in just a few minutes during your visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Tengo que regresar para leer la prueba de TB?",
        "answer": "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to come back to read the TB test?",
        "answer": "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas son confidenciales?",
        "answer": "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the testing confidential?",
        "answer": "Yes, all STD testing is completely confidential and done with respect and without judgment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Entregan documentación para el trabajo?",
        "answer": "Sí, te entregamos la documentación del resultado para tu empleador o trámite."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you provide documentation for work?",
        "answer": "Yes, we give you documentation of the result for your employer or paperwork."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿El electrocardiograma duele?",
        "answer": "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does the EKG hurt?",
        "answer": "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿El ultrasonido tiene radiación?",
        "answer": "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does ultrasound use radiation?",
        "answer": "No, ultrasound uses no radiation, so it's safe even during pregnancy."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿El examen DOT incluye la prueba de drogas?",
        "answer": "No. El análisis de orina del examen DOT busca proteína, sangre y azúcar. La prueba de drogas es un servicio aparte que ordena el empleador; también la ofrecemos en la clínica."
      },
      {
        "question": "¿Puedo pasar el examen DOT si tomo medicamento para la presión?",
        "answer": "Sí, si la presión está controlada. En ese caso el certificado suele emitirse por un año y se revisa en cada renovación. Traiga su medicamento o la lista con dosis."
      },
      {
        "question": "¿Qué hago con el certificado después del examen?",
        "answer": "Guarde el original en el vehículo y entregue una copia al Departamento de Seguridad Pública de Texas (DPS) para mantener su licencia CDL activa. Su empleador puede pedir otra copia."
      }
    ],
    "faqsEn": [
      {
        "question": "Does the DOT physical include a drug test?",
        "answer": "No. The urinalysis in the DOT physical screens for protein, blood and sugar. The drug test is a separate service ordered by the employer; we also offer it at the clinic."
      },
      {
        "question": "Can I pass the DOT physical if I take blood pressure medication?",
        "answer": "Yes, if your pressure is controlled. In that case the certificate is usually issued for one year and rechecked at each renewal. Bring your medication or a list with doses."
      },
      {
        "question": "What do I do with the certificate after the exam?",
        "answer": "Keep the original in the vehicle and submit a copy to the Texas Department of Public Safety (DPS) to keep your CDL active. Your employer may ask for another copy."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Necesito abrir el sobre del I-693?",
        "answer": "Depende de cómo presente el I-485. En papel, el sobre va cerrado. En línea, USCIS indica abrirlo y subir el formulario escaneado. Si se abrió por error, no hay que repetir el examen."
      },
      {
        "question": "¿Qué pasa si no tengo mi cartilla de vacunas?",
        "answer": "Puede hacerse el examen igual. Las vacunas sin registro escrito se consideran no aplicadas y se reponen en la clínica según su edad, lo que puede añadir costo y una visita más."
      },
      {
        "question": "¿Cuánto tiempo vale el examen de inmigración?",
        "answer": "Desde el 11 de junio de 2025, USCIS considera que el I-693 vale en general solo para la solicitud con la que se presenta, y debe ir junto con el I-485. Confirme los plazos con su abogado."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to open the I-693 envelope?",
        "answer": "It depends on how you file the I-485. On paper, the envelope stays sealed. Online, USCIS instructs you to open it and upload the scanned form. If it was opened by mistake, the exam does not need to be repeated."
      },
      {
        "question": "What if I don't have my vaccination record?",
        "answer": "You can still take the exam. Vaccines without a written record count as not given and are replaced at the clinic according to your age, which may add cost and one more visit."
      },
      {
        "question": "How long is the immigration exam valid?",
        "answer": "Since June 11, 2025, USCIS generally treats the I-693 as valid only for the application it is submitted with, and it must be filed together with the I-485. Confirm the timing with your attorney."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Qué vacunas aplican?",
        "answer": "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico; pregúntanos cuál te conviene."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Which vaccines do you give?",
        "answer": "We administer the influenza (flu) vaccine and tetanus toxoid; ask us which one you need."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Puedo recibir un suero vitaminado sin consulta médica?",
        "answer": "No. Antes de aplicarlo el médico revisa su historial, medicamentos, alergias y signos vitales para elegir el suero y la dosis adecuados y descartar condiciones en las que no conviene."
      },
      {
        "question": "¿Cuánto tarda la aplicación del suero?",
        "answer": "Entre 30 y 60 minutos según el volumen indicado. Durante ese tiempo permanece sentado con supervisión del personal y puede retirarse al terminar sin necesidad de acompañante."
      },
      {
        "question": "¿El suero vitaminado cura el cansancio?",
        "answer": "Alivia la deshidratación y repone vitaminas, pero no trata la causa de un cansancio persistente. Si dura semanas, conviene un análisis de sangre para revisar tiroides, anemia, azúcar y B12."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get an IV vitamin drip without a medical consultation?",
        "answer": "No. Before giving it, the provider reviews your history, medications, allergies and vital signs to choose the right drip and dose and rule out conditions where it is not advisable."
      },
      {
        "question": "How long does the infusion take?",
        "answer": "Between 30 and 60 minutes depending on the volume indicated. During that time you remain seated under staff supervision and can leave when it ends without needing a companion."
      },
      {
        "question": "Does an IV vitamin drip cure fatigue?",
        "answer": "It relieves dehydration and replaces vitamins, but it does not treat the cause of persistent fatigue. If it lasts weeks, a blood test to check thyroid, anemia, sugar and B12 is advisable."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Atienden heridas sin cita?",
        "answer": "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat wounds without an appointment?",
        "answer": "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Hacen cambios de vendaje y seguimiento?",
        "answer": "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do dressing changes and follow-up?",
        "answer": "Yes, we clean, treat and change the dressings, and follow up until the wound heals."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué cirugías menores realizan?",
        "answer": "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What minor surgeries do you perform?",
        "answer": "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿El drenaje de un absceso duele?",
        "answer": "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does abscess drainage hurt?",
        "answer": "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cómo tratan la uña encarnada?",
        "answer": "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you treat an ingrown toenail?",
        "answer": "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo surtir mi receta en la clínica?",
        "answer": "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y los domingos de 9 AM a 7 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I fill my prescription at the clinic?",
        "answer": "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM and Sundays from 9 AM to 7 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
