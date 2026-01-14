import { Music, Camera, Heart, Wind, Star, Sun, Smile, Shield, Sparkles } from 'lucide-react';
import { SiteContent } from './types';

export const CONTENT: SiteContent = {
  recipientName: "Lorie",
  heroSubtitle: "",
  heroImage: "/photo_4.jpeg",

  bioText: "Sûrement l'une des personnes les plus authentiques que j'ai connu. Tu es unique et tu ne cherches pas à être vue, mais tu restes en mémoire.",
  bioImage: "/photo_2.jpeg",

  features: [
    {
      title: "Ton Style",
      description: "Toujours au top, sans jamais en faire trop. La classe et l'élégance naturelle.",
      image: "/photo_3.jpeg"
    },
    {
      title: "Ton Énergie",
      description: "Tu ne passes jamais inaperçu même quand tu essayes, parce que tu dégages quelque chose de spécial.",
      image: "/photo_10.jpeg",
      imagePosition: "object-center"
    }
  ],

  passionsImage: "/photo_7.jpeg",
  passions: [
    { icon: Smile, title: "Sa résilience", description: "Toujours prositive peu importe les épreuves." },
    { icon: Shield, title: "Sa loyauté", description: "On peut lui faire confiance les yeux fermés." },
    { icon: Sparkles, title: "Son intelligence", description: "Un esprit toujours vif et curieux." }
  ],

  qualitiesImage: "/photo_6.jpeg",
  qualities: [
    { title: "Solaire", description: "" },
    { title: "Libre", description: "" },
    { title: "Rare", description: "" },
    { title: "Vraie", description: "" }
  ],

  memories: [
    { image: "/photo_7.jpeg", caption: "L'horizon" },
    { image: "/photo_8.jpeg", caption: "Le rire" },
    { image: "/photo_9.jpeg", caption: "L'ombre" },
    { image: "/photo_11.jpeg", caption: "La douceur" },
    { image: "/photo_12.jpeg", caption: "L'instant" }
  ],

  impactText: "Certaines personnes ne disent rien, mais leur présence change tout.",
  impactImage: "/photo_10.jpeg",

  testimonials: [
    {
      name: "Andy",
      message: "J'aurais jamais cru rencontré une personne avec autant de qualités. Tu es une amie précieuse et une source d'inspiration constante de part ton courage, ta loyauté, ta beauté et ta gentillesse. Joyeux anniversaire Darling ! Je te souhaite beaucoup de joie, d'amour, de santé et de réussite.",
      relation: "Ami",
      image: "/andy.jpg"
    },
    {
      name: "Aude",
      message: "En ce jour une reine est née... Non je rigole. Joyeux anniversaire Loriiiiiie. Je te souhaite beaucoup beaucoup de joie. Beaucoup d'amour meuf. Tu mérites de fou. Que cette bougie en plus marque le début d'une multitude d'opportunités.",
      relation: "Amie",
      image: "/aude.jpg"
    },
    {
      name: "Enam",
      message: "Avant de te connaître je ne savais pas que c’était possible d’être adorablement folle. PS: j’aime bien 😉 Merci d’être notre super héroïne préférée. Gotham peut dormir tranquille 😌 À la plus mignonne des boss ladiiiies 👑 Love you Queen ✨",
      relation: "Amie",
      image: "/enam.jpg"
    },
    {
      name: "Sophie",
      message: "Ton sourire illumine nos vies. Joyeux anniversaire !",
      relation: "Cousine",
      image: "/photo_11.jpeg"
    }
  ],

  futureWishes: ["Liberté", "Audace", "Douceur"],
  footerText: "Pour toi."
};