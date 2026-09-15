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
        "question": "¿Puedo llevar aquí el control si ya me diagnosticaron en otro lugar?",
        "answer": "Sí. Traiga sus últimos análisis y la lista de medicamentos con dosis. Revisamos su registro, repetimos las pruebas que hagan falta y continuamos el tratamiento sin empezar de cero."
      },
      {
        "question": "¿Me pueden recetar los medicamentos para la diabetes o la presión?",
        "answer": "Sí. El médico inicia o ajusta el tratamiento según sus análisis y le entrega la receta. Cuando existe la opción, se receta el genérico para que el medicamento le cueste menos en la farmacia."
      },
      {
        "question": "¿Con qué frecuencia necesito análisis si tengo diabetes?",
        "answer": "A1c cada tres meses mientras se ajusta el tratamiento y cada seis cuando está estable; riñón, colesterol y orina una vez al año. La presión se revisa en cada visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I continue my follow-up here if I was diagnosed elsewhere?",
        "answer": "Yes. Bring your latest lab results and your medication list with doses. We review your record, repeat the tests that are needed and continue the treatment without starting over."
      },
      {
        "question": "Can you prescribe my diabetes or blood pressure medications?",
        "answer": "Yes. The provider starts or adjusts treatment based on your lab work and hands you the prescription. When the option exists, the generic is prescribed so the medication costs you less at the pharmacy."
      },
      {
        "question": "How often do I need lab work if I have diabetes?",
        "answer": "A1c every three months while treatment is being adjusted and every six once it is stable; kidney, cholesterol and urine once a year. Blood pressure is checked at every visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Necesito ayuno para la prueba de tiroides?",
        "answer": "No. La TSH y la T4 se pueden tomar a cualquier hora. Si ya toma levotiroxina, tómela como siempre y díganos la dosis; el médico lo tendrá en cuenta al interpretar el resultado."
      },
      {
        "question": "¿Cada cuánto se repite el análisis si tomo medicamento para la tiroides?",
        "answer": "Seis a ocho semanas después de cada cambio de dosis, y cada seis a doce meses cuando la TSH ya está estable. Durante el embarazo los controles son más frecuentes."
      },
      {
        "question": "¿Puedo tratarme aquí si tengo hipertiroidismo o un nódulo?",
        "answer": "Hacemos el diagnóstico y el análisis inicial, y lo referimos a un endocrinólogo para el tratamiento específico. Mientras tanto seguimos su presión, pulso y síntomas en la clínica."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for the thyroid test?",
        "answer": "No. TSH and T4 can be drawn at any time. If you already take levothyroxine, take it as usual and tell us the dose; the provider will consider it when interpreting the result."
      },
      {
        "question": "How often is the test repeated if I take thyroid medication?",
        "answer": "Six to eight weeks after each dose change, and every six to twelve months once TSH is stable. During pregnancy the checks are more frequent."
      },
      {
        "question": "Can I be treated here if I have hyperthyroidism or a nodule?",
        "answer": "We make the diagnosis and run the initial tests, and refer you to an endocrinologist for the specific treatment. Meanwhile we follow your blood pressure, pulse and symptoms at the clinic."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Hacen pruebas de alergia en la clínica?",
        "answer": "Evaluamos los síntomas y los desencadenantes en la consulta y tratamos las alergias comunes. Cuando hacen falta pruebas cutáneas o de sangre específicas, se lo indicamos y lo referimos a un especialista."
      },
      {
        "question": "¿Cómo sé si es alergia o resfriado?",
        "answer": "La alergia no da fiebre, dura semanas, empeora en ciertas temporadas o lugares y suele traer comezón en nariz y ojos. El resfriado dura pocos días y puede acompañarse de fiebre y malestar."
      },
      {
        "question": "¿Puedo tomar antihistamínicos todos los días?",
        "answer": "Los antihistamínicos de segunda generación pueden usarse a diario en temporada, según indicación médica. Si los necesita todo el año, conviene revisar el plan y valorar aerosol nasal o pruebas."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do allergy testing at the clinic?",
        "answer": "We evaluate symptoms and triggers at the visit and treat common allergies. When specific skin or blood tests are needed, we tell you and refer you to a specialist."
      },
      {
        "question": "How do I know if it is an allergy or a cold?",
        "answer": "An allergy causes no fever, lasts weeks, worsens in certain seasons or places and usually brings itchy nose and eyes. A cold lasts a few days and may come with fever and malaise."
      },
      {
        "question": "Can I take antihistamines every day?",
        "answer": "Second-generation antihistamines can be used daily during the season, as directed by the provider. If you need them all year, the plan should be reviewed and a nasal spray or testing considered."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Cuánto tarda el resultado de la prueba de flu o COVID?",
        "answer": "Las pruebas rápidas se procesan en la clínica y el resultado está listo en la misma visita, normalmente en unos 15 minutos, así que sale con el diagnóstico y el tratamiento el mismo día."
      },
      {
        "question": "¿Me dan nota médica para el trabajo o la escuela?",
        "answer": "Sí. Si la evaluación lo justifica, le entregamos una nota con los días de reposo recomendados y, si aplica, la fecha en que puede volver sin contagiar a otros."
      },
      {
        "question": "¿Atienden a niños con fiebre y tos?",
        "answer": "Sí, atendemos a niños y adultos. Los bebés menores de tres meses con fiebre deben ir a emergencias; para el resto, hacemos las pruebas y el tratamiento en la clínica."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the flu or COVID test result take?",
        "answer": "Rapid tests are processed at the clinic and the result is ready in the same visit, usually within about 15 minutes, so you leave with the diagnosis and treatment the same day."
      },
      {
        "question": "Do you give a medical note for work or school?",
        "answer": "Yes. If the evaluation warrants it, we give you a note with the recommended rest days and, when applicable, the date you can return without infecting others."
      },
      {
        "question": "Do you see children with fever and cough?",
        "answer": "Yes, we see children and adults. Babies under three months with fever should go to the emergency room; for everyone else, we run the tests and provide treatment at the clinic."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Tengo que traer el formulario de la escuela o ustedes lo tienen?",
        "answer": "Traiga el formulario de su escuela, liga o del UIL con la parte del padre ya llena. Si no lo tiene, entregamos un certificado general, pero la mayoría de los programas exige su propio formato."
      },
      {
        "question": "¿El niño debe venir acompañado?",
        "answer": "Sí. Los menores deben venir con su padre, madre o tutor legal, que firma el historial y el consentimiento. Traiga su identificación y la cartilla de vacunas del niño."
      },
      {
        "question": "¿Sirve el mismo examen para la escuela y para el deporte?",
        "answer": "En general sí: el examen es el mismo y podemos llenar ambos formularios en la misma visita. El de deportes incluye preguntas adicionales sobre desmayos, dolor de pecho y lesiones."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to bring the school form or do you have it?",
        "answer": "Bring your school's, league's or UIL form with the parent section already filled out. If you do not have it, we provide a general certificate, but most programs require their own format."
      },
      {
        "question": "Does the child need to be accompanied?",
        "answer": "Yes. Minors must come with a parent or legal guardian, who signs the history and consent. Bring your ID and the child's vaccination record."
      },
      {
        "question": "Does the same exam work for school and for sports?",
        "answer": "In general yes: the exam is the same and we can complete both forms in the same visit. The sports form includes additional questions about fainting, chest pain and injuries."
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
        "question": "¿Desde cuándo puedo hacerme la prueba de embarazo?",
        "answer": "La de orina, desde el primer día de retraso de la regla; antes puede dar un falso negativo. La de sangre detecta el embarazo unos días antes del retraso y es la indicada si necesita saberlo pronto."
      },
      {
        "question": "¿Necesito venir en ayunas para la prueba de sangre?",
        "answer": "No. La prueba de hCG en sangre no requiere ayuno y se puede tomar a cualquier hora. Para la de orina conviene la primera orina de la mañana, que está más concentrada."
      },
      {
        "question": "¿Qué pasa después de un resultado positivo?",
        "answer": "Calculamos las semanas, revisamos su salud y sus medicamentos, iniciamos ácido fólico y le explicamos cómo empezar el control prenatal. Si hace falta, hacemos un ultrasonido para confirmar."
      }
    ],
    "faqsEn": [
      {
        "question": "How early can I take the pregnancy test?",
        "answer": "The urine test from the first day of a missed period; earlier it may give a false negative. The blood test detects pregnancy a few days before the missed period and is the right choice if you need to know soon."
      },
      {
        "question": "Do I need to fast for the blood pregnancy test?",
        "answer": "No. The blood hCG test requires no fasting and can be drawn at any time. For the urine test, the first morning urine is best because it is more concentrated."
      },
      {
        "question": "What happens after a positive result?",
        "answer": "We calculate the weeks, review your health and medications, start folic acid and explain how to begin prenatal care. If needed, we do an ultrasound to confirm."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos puedo empezar en la clínica?",
        "answer": "Las pastillas anticonceptivas y la inyección trimestral se inician aquí el mismo día. Para implante o dispositivo intrauterino le damos la orientación y la referencia al centro que los coloca."
      },
      {
        "question": "¿Necesito un Papanicolaou antes de empezar anticonceptivos?",
        "answer": "No es obligatorio para iniciar el método. Sí revisamos presión, peso, historial y, si hay dudas, una prueba de embarazo. El Papanicolaou se programa según su edad y su último resultado."
      },
      {
        "question": "¿Puedo cambiar de método si no me sienta bien?",
        "answer": "Sí. En el control revisamos los efectos secundarios y cambiamos a otra opción sin dejar días sin protección. Traiga el nombre del método actual y la fecha en que lo empezó."
      }
    ],
    "faqsEn": [
      {
        "question": "Which contraceptive methods can I start at the clinic?",
        "answer": "Birth control pills and the quarterly injection are started here the same day. For the implant or an intrauterine device we provide guidance and a referral to the center that places them."
      },
      {
        "question": "Do I need a Pap test before starting contraception?",
        "answer": "It is not required to start a method. We do check blood pressure, weight, history and, if in doubt, a pregnancy test. The Pap test is scheduled according to your age and last result."
      },
      {
        "question": "Can I switch methods if it does not agree with me?",
        "answer": "Yes. At the follow-up we review side effects and switch to another option without leaving unprotected days. Bring the name of your current method and the date you started it."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se hace con anestesia local, así que solo siente el pinchazo inicial y algo de presión. Después puede haber sensibilidad o un moretón durante una o dos semanas, que se controla con analgésico común."
      },
      {
        "question": "¿Pueden retirar un implante que se colocó en otro país?",
        "answer": "Sí, siempre que se pueda palpar bajo la piel. Traiga, si la tiene, la tarjeta con la fecha y el tipo de implante. Si no se palpa, se pide un ultrasonido antes de intentar retirarlo."
      },
      {
        "question": "¿Cuándo puedo quedar embarazada después de retirarlo?",
        "answer": "La fertilidad vuelve en pocas semanas; muchas mujeres ovulan en el primer mes. Si no desea embarazo, empiece otro método el mismo día de la extracción o use preservativo."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It is done with local anesthesia, so you only feel the initial pinch and some pressure. Afterwards there may be tenderness or a bruise for one or two weeks, controlled with a common pain reliever."
      },
      {
        "question": "Can you remove an implant placed in another country?",
        "answer": "Yes, as long as it can be felt under the skin. Bring the card with the date and type of implant if you have it. If it cannot be felt, an ultrasound is ordered before attempting removal."
      },
      {
        "question": "When can I get pregnant after removal?",
        "answer": "Fertility returns within a few weeks; many women ovulate in the first month. If you do not want a pregnancy, start another method the same day as the removal or use condoms."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Necesito ayuno para el chequeo del hombre?",
        "answer": "Solo si quiere incluir glucosa y perfil de lípidos en la misma visita: 8 a 12 horas sin comer, agua permitida. El PSA, el riñón, el hígado y el perfil hormonal no requieren ayuno."
      },
      {
        "question": "¿Un PSA alto significa que tengo cáncer de próstata?",
        "answer": "No necesariamente. El PSA también sube con el crecimiento benigno de la próstata, la infección o el ejercicio reciente. Se repite y se valora con la edad; si persiste alto, se refiere al urólogo."
      },
      {
        "question": "¿Puedo pedir solo una prueba en lugar del chequeo completo?",
        "answer": "Sí. Puede solicitar una prueba concreta, como el PSA o la glucosa, y conocer su precio antes. El médico le dirá si conviene añadir alguna otra según sus síntomas o antecedentes."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for the men's checkup?",
        "answer": "Only if you want glucose and the lipid profile included in the same visit: 8 to 12 hours without food, water allowed. PSA, kidney, liver and the hormone profile do not require fasting."
      },
      {
        "question": "Does a high PSA mean I have prostate cancer?",
        "answer": "Not necessarily. PSA also rises with benign prostate growth, infection or recent exercise. It is repeated and weighed against your age; if it stays high, you are referred to a urologist."
      },
      {
        "question": "Can I ask for a single test instead of the full checkup?",
        "answer": "Yes. You can request a specific test, such as PSA or glucose, and know its price beforehand. The provider will tell you whether adding another one makes sense based on your symptoms or history."
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
        "question": "¿Necesito alguna preparación para el electrocardiograma?",
        "answer": "No. No hace falta ayuno ni suspender medicamentos. Evite cremas o aceites en el pecho ese día, use ropa fácil de quitar y traiga sus estudios previos y la lista de lo que toma."
      },
      {
        "question": "¿Un electrocardiograma normal descarta problemas del corazón?",
        "answer": "No del todo. Registra solo unos segundos en reposo, así que una arritmia intermitente o una obstrucción sin síntomas pueden no verse. Si hay dudas, el médico indica estudios adicionales."
      },
      {
        "question": "¿Sirve el EKG para un examen de trabajo o preoperatorio?",
        "answer": "Sí. Se lo entregamos impreso con la interpretación del médico el mismo día para presentarlo a su empleador, en un examen DOT cuando lo piden o antes de una cirugía."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need any preparation for the electrocardiogram?",
        "answer": "No. No fasting or stopping medications is needed. Avoid lotions or oils on the chest that day, wear clothes that are easy to remove and bring previous studies and a list of what you take."
      },
      {
        "question": "Does a normal EKG rule out heart problems?",
        "answer": "Not entirely. It records only a few seconds at rest, so an intermittent arrhythmia or a blockage without symptoms may not show. If in doubt, the provider orders additional studies."
      },
      {
        "question": "Is the EKG valid for a work or pre-surgery exam?",
        "answer": "Yes. We hand it to you printed with the provider's interpretation the same day to present to your employer, for a DOT physical when required or before surgery."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Necesito orden médica para hacerme un ultrasonido?",
        "answer": "No. Puede venir directamente y el médico de la clínica lo indica tras una consulta breve, o traer la orden de otro médico. En ambos casos conoce el precio antes del estudio."
      },
      {
        "question": "¿Cómo debo prepararme para el ultrasonido abdominal?",
        "answer": "Con ayuno de seis a ocho horas, solo agua, para que la vesícula se vea llena y sin gas intestinal. Tome sus medicamentos como siempre y avise si tiene diabetes para programarlo temprano."
      },
      {
        "question": "¿Me entregan las imágenes y el informe el mismo día?",
        "answer": "Sí. El médico revisa el estudio con usted al terminar y le entrega el informe por escrito. Si algo necesita seguimiento o un estudio especializado, se lo indica en ese momento."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need a doctor's order for an ultrasound?",
        "answer": "No. You can walk in and the clinic provider orders it after a brief consultation, or bring an order from another provider. Either way you know the price before the study."
      },
      {
        "question": "How should I prepare for an abdominal ultrasound?",
        "answer": "Fast six to eight hours, water only, so the gallbladder is full and there is little intestinal gas. Take your medications as usual and tell us if you have diabetes so we schedule it early."
      },
      {
        "question": "Do I get the images and report the same day?",
        "answer": "Yes. The provider reviews the study with you when it ends and hands you the written report. If anything needs follow-up or a specialized study, you are told at that moment."
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
        "question": "¿Cuándo es mejor ponerse la vacuna contra la influenza?",
        "answer": "En septiembre u octubre, antes de que empiece la temporada, porque la protección tarda unas dos semanas en desarrollarse. Si ya avanzó la temporada, vacunarse sigue siendo útil."
      },
      {
        "question": "¿Me pueden vacunar si tengo gripe o fiebre?",
        "answer": "Con fiebre o enfermedad moderada conviene esperar a recuperarse. Con un resfriado leve sin fiebre sí se puede vacunar. El personal lo revisa antes de aplicar la dosis."
      },
      {
        "question": "¿Me dan un comprobante de la vacuna?",
        "answer": "Sí. Le entregamos el registro escrito con vacuna, lote y fecha, válido para el trabajo, la escuela o el examen de inmigración, y lo anotamos en su cartilla si la trae."
      }
    ],
    "faqsEn": [
      {
        "question": "When is the best time to get the flu vaccine?",
        "answer": "In September or October, before the season starts, because protection takes about two weeks to develop. If the season is already underway, getting vaccinated is still worthwhile."
      },
      {
        "question": "Can I get vaccinated if I have a cold or fever?",
        "answer": "With fever or a moderate illness it is better to wait until you recover. With a mild cold and no fever you can be vaccinated. Staff check you before giving the dose."
      },
      {
        "question": "Do I get proof of vaccination?",
        "answer": "Yes. We give you a written record with the vaccine, lot and date, valid for work, school or the immigration exam, and we note it in your vaccination card if you bring it."
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
