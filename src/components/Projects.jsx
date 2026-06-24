import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, FolderKanban, Film } from 'lucide-react';
import { Github } from './BrandIcons';

const PROJECTS = [
  {
    title: 'SCOPE',
    description: 'Enterprise employee management SaaS platform. Full-stack architecture deployed to the cloud for high availability and secure data handling.',
    tech: ['React', 'Spring Boot', 'MySQL', 'Azure', 'Vercel'],
    icon: <FolderKanban className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
    link: 'https://scope-employee-management-saas-i8y9-hrc5tw07i-roman18.vercel.app',
    github: 'https://github.com/RomanAliSher/Scope-Employee-Management-SAAS'
  },
  {
    title: 'StickerRiz Ecommerce App',
    description: 'Enterprise E-commerce App made for purchasing Stickers as a part of my course on Udemy.',
    tech: ['React', 'SpringBoot', 'MySQL'],
    icon: <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#8A8F98]" />
    // Notice: No link/github here. The code below will safely hide the icons.
  },
  {
    title: 'Spring Auth',
    description: 'Authentication and authorization module for Spring Boot applications.',
    tech: ['Spring Boot', 'JWT', 'OAuth2'],
    icon: <FolderKanban className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
    github: 'https://github.com/RomanAliSher/SpringBootAuth-Jwt-Based'
  }
];

export default function Projects() {
  return (
    <section className="relative z-10 container mx-auto py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl border-t border-white/[0.06]">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text">
          Featured Work
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-foreground-muted">Recent architectures and productions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      className="group relative rounded-2xl border border-white/[0.06] bg-[#0A0A0C]/50 p-6 sm:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col h-full"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(94, 106, 210, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-2 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            {project.icon}
          </div>
          <div className="flex gap-3">
            {/* Conditional Rendering: Only show icons if the link exists */}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-foreground-muted hover:text-white transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-foreground-muted hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-2 sm:mb-3">{project.title}</h3>
        <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono tracking-wide rounded-full border border-white/10 bg-white/[0.03] text-foreground-subtle">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}