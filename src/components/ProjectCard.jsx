import { motion, AnimatePresence } from "framer-motion";
import {
  IconExternalLink,
  IconCode,
  IconArrowRight,
  IconX,
  IconDeviceDesktop,
  IconShieldCheck,
  IconRobot,
  IconDeviceMobile,
  IconChartBar,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { useState } from "react";

// Ícones para cada tipo de projeto
const projectIcons = {
  "Landing Pages Eficientes": IconDeviceDesktop,
  "Phishing Test & Treinamento": IconShieldCheck,
  "Automação On/Off Boarding": IconRobot,
  "App de Finanças + WhatsApp": IconDeviceMobile,
  "Dashboard Polícia Civil": IconChartBar,
  "Sistema de Locação & Agendamento": IconCalendarEvent,
};

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const ProjectIcon = projectIcons[project.title] || IconCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 via-primary-content/10 to-primary/20">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-primary-content/5 to-primary/10">
            <ProjectIcon className="w-24 h-24 text-primary/40 group-hover:text-primary/60 group-hover:scale-110 transition-all duration-300" />
          </div>
        )}

        {/* Overlay gradient on hover - mais suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Tags overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags?.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-primary backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center gap-4"
        >
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              onClick={(e) => {
                if (project.demoUrl === "#contact") {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-white text-primary-dark font-bold rounded-full flex items-center gap-2 hover:bg-primary-content transition-colors"
            >
              <IconExternalLink className="w-5 h-5" />
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              onClick={(e) => {
                if (project.githubUrl === "#contact") {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-primary-dark transition-all"
            >
              <IconCode className="w-5 h-5 inline mr-2" />
              Ver Código
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech stack */}
        {project.tech && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Learn more link */}
        <button
          onClick={() =>
            project.detailedDescription ? setShowOverlay(true) : null
          }
          className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto hover:text-primary-light focus:outline-none focus:ring-0 bg-transparent border-none p-0 shadow-none"
          style={{ backgroundColor: "transparent", border: "none", padding: 0 }}
        >
          Saiba mais
          <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Overlay com descrição detalhada */}
      <AnimatePresence>
        {showOverlay && project.detailedDescription && (
          <>
            {/* Backdrop - mais claro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowOverlay(false)}
              className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50"
            />

            {/* Overlay Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-2xl sm:w-full z-50 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowOverlay(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fechar"
              >
                <IconX className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="pr-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {project.detailedDescription}
                </p>

                {/* Tech stack */}
                {project.tech && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Tecnologias:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        if (project.demoUrl === "#contact") {
                          e.preventDefault();
                          setShowOverlay(false);
                          setTimeout(() => {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 300);
                        }
                      }}
                      className="flex-1 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <IconExternalLink className="w-5 h-5" />
                      Ver Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      onClick={(e) => {
                        if (project.githubUrl === "#contact") {
                          e.preventDefault();
                          setShowOverlay(false);
                          setTimeout(() => {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 300);
                        }
                      }}
                      className="flex-1 px-6 py-3 bg-gray-100 text-primary-dark font-bold rounded-xl hover:bg-gray-200 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <IconCode className="w-5 h-5" />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
