import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TIMELINE = [
  {
    type: 'work',
    role: 'Full Stack Engineer',
    company: 'SelfWork & Projects',
    date: '2023 - Present',
    description: 'Architecting scalable cloud applications, deploying SaaS platforms, and designing precision user interfaces using React and Spring Boot.',
    icon: <Briefcase className="w-4 h-4 text-accent" />
  },
  {
    type: 'work',
    role: 'Software Engineer Intern',
    company: 'DevWeekends',
    date: 'Summer 2022',
    description: 'Learned best practices in software development, gained knowledge in full-stack projects and DSA, and gained experience in agile methodologies.',
    icon: <Briefcase className="w-4 h-4 text-accent" />
  },
  {
    type: 'education',
    role: 'BS Information Technology',
    company: 'University of Education (UE), Lahore',
    date: 'Graduating Soon',
    description: 'Current CGPA: 3.64. Focusing on software architecture, cloud computing, and advanced data structures.',
    icon: <GraduationCap className="w-4 h-4 text-[#8A8F98]" />
  }
];

export default function Experience() {
  return (
    <section className="relative z-10 container mx-auto py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl border-t border-white/[0.06]">
      {/* Scroll Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-transparent bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text">
          Journey
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-foreground-muted">Experience and educational background.</p>
      </motion.div>

      <div className="space-y-12">
        {TIMELINE.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-10 md:pl-0"
          >
            {/* Scroll Animated Timeline Items comment moved here safely */}
            <div className="md:hidden absolute left-5 top-2 bottom-[-48px] w-px bg-white/[0.06]" />
            
            <div className="md:grid md:grid-cols-4 md:gap-12 items-start">
              <div className="hidden md:block col-span-1 text-right mt-1 text-sm font-mono text-foreground-subtle whitespace-nowrap">
                {item.date}
              </div>

              <div className="col-span-3 relative">
                <div className="hidden md:block absolute -left-6 top-2 bottom-[-48px] w-px bg-white/[0.06]" />

                <div className="absolute -left-8 md:-left-9 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-background-base border border-white/[0.1] shadow-[0_0_10px_rgba(94,106,210,0.2)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="md:hidden text-xs font-mono text-accent mb-2">{item.date}</div>
                
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  {item.role}
                </h3>
                <h4 className="text-sm font-medium text-foreground-muted mt-1 mb-4 flex items-center gap-2">
                  {item.icon} {item.company}
                </h4>
                <p className="text-sm text-foreground-subtle leading-relaxed bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}