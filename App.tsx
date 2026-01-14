import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Heart, Mail, Star, Sparkles, Crown, Quote } from 'lucide-react';
import { CONTENT } from './constants';
import { MusicPlayer } from './components/MusicPlayer';
import { Section, Reveal } from './components/Section';

function App() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
    const colors = ['#fbbf24', '#f59e0b', '#ffffff'];
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors });
  }, []);



  return (
    <div className={`min-h-screen text-cream transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gold-500 z-50 origin-left" style={{ scaleX }} />

      <MusicPlayer />

      {/* HERO */}
      <Section className="min-h-screen flex items-center justify-center relative overflow-hidden" noPadding>
        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-6 text-center">
          <Reveal delay={0.2}>
            <span className="inline-block py-1 px-4 border border-gold-400/30 rounded-full text-gold-300 text-xs tracking-[0.3em] uppercase mb-8">
              Célébration Spéciale
            </span>
            <h1 className="font-serif text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-600 mb-6 drop-shadow-2xl">
              {CONTENT.recipientName}
            </h1>
            <p className="font-script text-3xl md:text-5xl text-gold-200/80 mb-12">
              Joyeux Anniversaire
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gold-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img
                src={CONTENT.heroImage}
                alt="Hero"
                className="w-64 h-80 md:w-80 md:h-[500px] object-cover rounded-t-[120px] border border-gold-500/20 shadow-2xl relative z-10"
              />
            </div>
          </Reveal>

          {/* <Reveal delay={0.6}>
            <p className="font-sans font-light text-lg text-cream/60 max-w-xl mx-auto mt-12 tracking-wide italic">
              "{CONTENT.heroSubtitle}"
            </p>
          </Reveal> */}

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="mt-12 text-gold-400/40">
            <ArrowDown size={24} />
          </motion.div>
        </div>
      </Section>

      {/* BIO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold-500/20 translate-x-4 translate-y-4"></div>
              <img src={CONTENT.bioImage} alt="Portrait" className="relative w-full h-[600px] object-cover object-top filter brightness-90 shadow-2xl" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2}>
            <div className="glass-card p-8 md:p-12 border-l-2 border-l-gold-500/50">
              <Sparkles className="text-gold-400 mb-6" size={32} />
              <h2 className="font-serif text-4xl md:text-5xl text-gold-100 mb-8">20 ans </h2>
              <p className="font-sans text-cream/70 text-lg leading-relaxed font-light">{CONTENT.bioText}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* JUSTE TOI */}
      <Section>
        <Reveal><h2 className="text-center font-serif text-4xl md:text-6xl text-gold-200 mb-24 uppercase tracking-tighter">Juste Toi</h2></Reveal>
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-500/20 hidden md:block"></div>
          {CONTENT.features.map((feature, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center gap-12 mb-32 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <Reveal direction={index % 2 === 0 ? 'left' : 'right'}>
                  <img src={feature.image} className={`w-full h-80 object-cover ${feature.imagePosition || 'object-top'} rounded-lg border border-white/10`} />
                </Reveal>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 shadow-[0_0_15px_#fbbf24]"></div>
              <div className="w-full md:w-1/2 md:px-12 text-center md:text-left">
                <Reveal delay={0.2}>
                  <h3 className="font-serif text-3xl text-white mb-4 uppercase tracking-widest">{feature.title}</h3>
                  <p className="font-sans font-light text-slate-400 leading-relaxed text-lg">{feature.description}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PASSIONS */}
      <Section className="bg-midnight-950/80">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <img src={CONTENT.passionsImage} className="w-full aspect-square object-cover rounded-full border border-gold-500/20 p-4 opacity-70" />
          </Reveal>
          <div>
            <Reveal direction="right">
              <h2 className="font-serif text-5xl mb-12 text-white">Ce qu'on aime</h2>
              <div className="space-y-8">
                {CONTENT.passions.map((p, i) => (
                  <div key={i} className="glass-card p-6 flex items-center gap-6 group hover:border-gold-500/50 transition-colors">
                    <div className="text-gold-300"><p.icon size={32} strokeWidth={1} /></div>
                    <div>
                      <h3 className="font-serif text-xl text-gold-100">{p.title}</h3>
                      <p className="text-sm text-slate-400 font-light">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* GALERIE */}
      {/* <Section>
        <Reveal><h2 className="font-serif text-4xl text-center mb-16">Galerie de Moments</h2></Reveal>
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide">
          {CONTENT.memories.map((mem, idx) => (
            <div key={idx} className="min-w-[80vw] md:min-w-[450px] snap-center">
              <Reveal delay={idx * 0.2}>
                <div className="relative group overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                  <img src={mem.image} className="w-full h-[450px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                    <p className="font-serif text-2xl text-white italic">"{mem.caption}"</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section> */}

      {/* IMPACT */}
      <Section>
        <div className="glass-card max-w-4xl mx-auto p-12 md:p-20 text-center rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
          <Reveal>
            <Quote className="mx-auto text-gold-500/20 mb-8" size={60} />
            <p className="font-serif text-2xl md:text-4xl text-cream leading-relaxed mb-8 italic">
              {CONTENT.impactText}
            </p>
            <Heart className="mx-auto text-gold-500 fill-current animate-pulse" size={32} />
          </Reveal>
        </div>
      </Section>

      {/* MESSAGES */}
      <Section className="bg-midnight-950/50">
        <Reveal><h2 className="font-serif text-4xl text-center mb-16 text-gold-100">Mots d'Amour</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CONTENT.testimonials.map((msg, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="glass-card p-8 relative group hover:bg-white/5 transition-colors">
                <Quote className="absolute top-6 left-6 text-gold-500/20 group-hover:text-gold-500/40 transition-colors" size={40} />
                <p className="font-sans font-light text-cream/80 text-lg mb-6 relative z-10 pt-8 indented-text">
                  "{msg.message}"
                </p>
                <div className="flex items-center gap-6">
                  {msg.image ? (
                    <img src={msg.image} alt={msg.name} className="w-20 h-20 rounded-full object-cover border-2 border-gold-400 shadow-lg" />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-midnight-950 font-serif font-bold text-3xl shadow-lg">
                      {msg.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-serif text-gold-200">{msg.name}</h4>
                    {msg.relation && <p className="text-xs text-slate-400 uppercase tracking-wider">{msg.relation}</p>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>



      {/* FOOTER */}
      <Section className="text-center pb-20">
        <Reveal>
          <div className="max-w-2xl mx-auto border-t border-white/10 pt-12">
            <h2 className="font-serif text-4xl text-gold-100 mb-12 italic">"{CONTENT.footerText}"</h2>
            <button
              onClick={() => confetti({ particleCount: 150, spread: 80, origin: { y: 0.8 }, colors: ['#fbbf24', '#ffffff'] })}
              className="px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-midnight-950 font-bold uppercase text-sm tracking-widest shadow-lg hover:brightness-110 transition-all rounded-sm"
            >
              Célébrer Élise
            </button>
          </div>
          <div className="mt-24 text-white/10 text-xs uppercase tracking-[0.5em]">L'histoire continue • {new Date().getFullYear()}</div>
        </Reveal>
      </Section>


    </div>
  );
}

export default App;