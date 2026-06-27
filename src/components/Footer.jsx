import { MapPin, GraduationCap, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-background-deep mt-8 sm:mt-16">
      <div className="container mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Roman Ali Sher</h3>
            <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed mb-4">
              Full Stack Developer specializing in Java, Spring Boot, and React. Building scalable, high-performance web applications.
            </p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-foreground-subtle">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Lahore, Punjab, Pakistan
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> IT Student @ UE (3.64 CGPA)
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Core Stack</h3>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-foreground-muted">
              <li>Java & Spring Boot Architecture</li>
              <li>React & Vite Ecosystem</li>
              <li>Cloud Deployment (Azure, AWS)</li>
              <li>Docker & Microservices</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/RomanAliSher" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs sm:text-sm text-foreground-muted hover:text-accent transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-accent transition-colors" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/roman-ali-a4a688343/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs sm:text-sm text-foreground-muted hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-accent transition-colors" /> LinkedIn
              </a>
              <a href="mailto:rumanali89011@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs sm:text-sm text-foreground-muted hover:text-accent transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-accent transition-colors" /> Email Me
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs text-foreground-subtle">
            © {new Date().getFullYear()} Roman Ali Sher. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] sm:text-xs text-foreground-subtle flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}