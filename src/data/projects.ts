// src/data/projects.ts

export type Project = {
  title: string;
  leaders: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export const exampleProjects: Project[] = [
  {
    title:
      "Towards Decoding Deception: Exploring Neural Correlates of Concealed Information with Noninvasive EEG",
    leaders:
      "Ramana Vinjamuri (UMBC), Jose Contreras-Vidal (UH), Santosh Kottamasu (UH), Krishna Ika (BrainWave Science)",
  },
  {
    title:
      "Mindspring: A Personalized Health Wearable Device for Stress Management in Teens",
    leaders:
      "Lianne Sánchez-Rodríguez, Maxine A. Pacheco-Ramírez, Jose Contreras-Vidal (UH), Roscoe Ferguson (Ferguson Control Systems)",
  },
  {
    title:
      "Longitudinal Electrophysiological Studies of DBS in Patients with Chronic Pain",
    leaders:
      "Bradley Greger (ASU), Zaman Mirzadeh (Barrow Neurological Institute)",
  },
  {
    title: "Neural Surface Interface Technology and Applications",
    leaders:
      "Peter Konrad, Radhey Sharma, B. Rappaport (WVU), J. Contreras-Vidal (UH), Craig Mermel (Precision Neuroscience)",
  },
  {
    title:
      "ProgNEUSTIM: Programmable Instrument for NEUral STImulation and Imaging",
    leaders:
      "L. Pollonini, B. Tamber-Rosenau (UH), S. Madala (Indus Instruments), M. Jaschke (Brain Products GmbH)",
  },
  {
    title:
      "Noninvasive Brain Compliance in Traumatic Brain Injury Patients with Disorders of Consciousness",
    leaders:
      "Michelle LaPlaca, May Wang (Georgia Tech / Emory), Andrew Dennison, Michael Yochelson (Shepherd Center), Carlos Bremer (Brain4Care)",
  },
  {
    title:
      "Using Interpretable AI to Decode Brain Activity During Creative Expression",
    leaders:
      "J. Contreras-Vidal, Annel Pacheco-Ramirez, Aime Aguilar Herrera, Yoshua Lima (UH), Roscoe Ferguson (Ferguson Control Systems)",
  },
];
