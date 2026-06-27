import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Layers, Server, Cloud, Wrench, GitBranch } from 'lucide-react';

const SKILLS = [
  { title: 'Frontend', tools: 'React.js, Next.js, Tailwind, JS', icon: <Layers className="w-5 h-5 text-accent" />, span: 'col-span-1 sm:col-span-2 lg:col-span-2' },
  { title: 'Backend', tools: 'Java, Spring, Spring Boot', icon: <Server className="w-5 h-5 text-accent" />, span: 'col-span-1 sm:col-span-2 lg:col-span-2' },
  { title: 'Cloud Infrastructure', tools: 'AWS, Azure, Docker', icon: <Cloud className="w-6 h-6 text-accent mb-2" />, span: 'col-span-1 sm:col-span-2 lg:col-span-4' },
  { title: 'Build Tools', tools: 'Maven, Gradle', icon: <Wrench className="w-5 h-5 text-foreground-muted" />, span: 'col-span-1 sm:col-span-1 lg:col-span-2' },
  { title: 'Version Control', tools: 'Git, GitHub', icon: <GitBranch className="w-5 h-5 text-foreground-muted" />, span: 'col-span-1 sm:col-span-1 lg:col-span-2' },
];

function BentoCard({ title, tools, icon, span, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-end ${span}`}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(94, 106, 210, 0.15), transparent 80%)` }}
      />
      <div className="relative z-10">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-foreground-muted font-mono tracking-wide">{tools}</p>
      </div>
    </motion.div>
  );
}

export default function SkillsBento() {
  return (
    <section className="relative z-10 container mx-auto py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text">
          Technical Arsenal
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
        {SKILLS.map((skill, i) => (
          <BentoCard key={skill.title} {...skill} index={i} />
        ))}
      </div>
    </section>
  );
}