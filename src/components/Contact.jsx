import { motion, useAnimate } from "framer-motion";
import {
  IconSend,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMapPin,
  IconMail,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconUsers,
  IconUser,
  IconMessage,
  IconSparkles,
  IconLoader2,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";
import { useState } from "react";
import TeamModal from "./TeamModal";
import { SpotlightButton } from "./ui/SpotlightButton";

// ============================================
// ⚙️ CONFIGURAÇÃO DO FORMSPREE (SUPER SIMPLES!)
// ============================================
//
// 📋 PASSO A PASSO RÁPIDO:
// 1. Acesse: https://formspree.io
// 2. Crie uma conta gratuita (pode usar sua conta Google/Gmail)
// 3. Crie um novo formulário
// 4. Copie o "Form ID" que aparece na URL (ex: se a URL é https://formspree.io/f/abc123xyz, copie apenas "abc123xyz")
// 5. Cole abaixo substituindo "YOUR_FORM_ID"
// 6. Configure o email nas Settings do Formspree: vetrynlabs@gmail.com
//
// 📖 GUIA COMPLETO: Veja o arquivo CONFIGURAR_FORMSPREE.md na raiz do projeto
//
// ⚠️ IMPORTANTE: Substitua "YOUR_FORM_ID" pelo seu Form ID real do Formspree!
//    Exemplo: const FORMPREE_FORM_ID = "abc123xyz";
//
const FORMPREE_FORM_ID = "xqeakzrg"; // ✅ Form ID configurado!

// Nota: O formulário usa Formspree para envio de emails.
// Veja CONFIGURAR_FORMSPREE.md para instruções detalhadas passo a passo.

const socialLinks = [
  {
    Icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/vetryn-labs-944a52395/",
    label: "LinkedIn",
  },
  {
    Icon: IconBrandInstagram,
    href: "https://instagram.com/vetrynlabs",
    label: "Instagram",
  },
  {
    Icon: IconMapPin,
    href: "https://share.google/1GO9w9aB4jRWXQ8XB",
    label: "Localização",
  },
  {
    Icon: IconMail,
    href: "mailto:vetrynlabs@gmail.com",
    label: "Email",
  },
  {
    Icon: IconBrandGithub,
    href: "https://github.com/Vetryn-Labs",
    label: "GitHub",
  },
  {
    Icon: IconBrandWhatsapp,
    href: "https://wa.me/5554984364122",
    label: "WhatsApp",
  },
];

// Clip-path constants
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const SocialLinkBox = ({ Icon, href, label }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  const isInternalLink = href.startsWith("#");

  return (
    <a
      href={href}
      target={isInternalLink ? undefined : "_blank"}
      rel={isInternalLink ? undefined : "noopener noreferrer"}
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-full w-full place-content-center transition-all duration-300"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-primary-dark" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-primary text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

const TeamLinkBox = ({ Icon, label, onClick }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-full w-full place-content-center transition-all duration-300 cursor-pointer bg-white border border-primary-dark overflow-hidden"
      style={{ backgroundColor: "white" }}
    >
      {/* Fundo branco garantido */}
      <div className="absolute inset-0 bg-white z-0"></div>

      {/* Ícone inicial - sempre visível no fundo branco */}
      <div className="relative z-10 w-full h-full grid place-content-center pointer-events-none">
        <Icon className="text-xl sm:text-3xl lg:text-4xl text-primary-dark" />
      </div>

      {/* Overlay verde - aparece no hover */}
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-primary z-30 pointer-events-none"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl text-white relative z-40" />
      </div>
    </button>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Verificar se o Form ID está configurado
      if (FORMPREE_FORM_ID === "YOUR_FORM_ID" || !FORMPREE_FORM_ID) {
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
        }, 8000);
        return;
      }

      // Enviar formulário usando Formspree (super simples!)
      const response = await fetch(
        `https://formspree.io/f/${FORMPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _replyto: formData.email, // Para você poder responder diretamente
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Limpar status após 5 segundos
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        // Erro específico do Formspree
        const errorMessage = data.error || "Erro ao enviar formulário";
        console.error("Erro do Formspree:", errorMessage);
        setSubmitStatus("error");

        // Limpar status após 5 segundos
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus("error");

      // Limpar status após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-primary-dark/5"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você a transformar suas ideias em
            realidade. Entre em contato e vamos conversar!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="divide-y divide-primary-dark border border-primary-dark rounded-lg overflow-hidden bg-white flex-1 flex flex-col h-full">
              <div className="grid grid-cols-2 divide-x divide-primary-dark flex-1">
                <SocialLinkBox
                  Icon={socialLinks[0].Icon}
                  href={socialLinks[0].href}
                  label={socialLinks[0].label}
                />
                <SocialLinkBox
                  Icon={socialLinks[1].Icon}
                  href={socialLinks[1].href}
                  label={socialLinks[1].label}
                />
              </div>
              <div className="grid grid-cols-3 divide-x divide-primary-dark flex-1">
                <SocialLinkBox
                  Icon={socialLinks[2].Icon}
                  href={socialLinks[2].href}
                  label={socialLinks[2].label}
                />
                <SocialLinkBox
                  Icon={socialLinks[3].Icon}
                  href={socialLinks[3].href}
                  label={socialLinks[3].label}
                />
                <SocialLinkBox
                  Icon={socialLinks[4].Icon}
                  href={socialLinks[4].href}
                  label={socialLinks[4].label}
                />
              </div>
              <div className="grid grid-cols-2 divide-x divide-primary-dark flex-1">
                <SocialLinkBox
                  Icon={socialLinks[5].Icon}
                  href={socialLinks[5].href}
                  label={socialLinks[5].label}
                />
                <TeamLinkBox
                  Icon={IconUsers}
                  label="Quem Somos"
                  onClick={() => setIsTeamModalOpen(true)}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl">
              {/* Welcome Message */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <IconSparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-primary-dark">
                    Vamos conversar?
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Estamos aqui para ajudar! Não importa o tamanho do seu
                  projeto, queremos ouvir suas ideias. Envie uma mensagem e
                  vamos transformar sua visão em realidade. ✨
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                    >
                      <IconUser className="w-4 h-4 text-primary" />
                      Como podemos te chamar?
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white hover:border-gray-300"
                      placeholder="Seu nome ou apelido"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                    >
                      <IconMail className="w-4 h-4 text-primary" />
                      Seu melhor email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white hover:border-gray-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Sobre o que você quer falar?
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white hover:border-gray-300"
                    placeholder="Ex: Novo projeto, dúvidas, orçamento..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
                  >
                    <IconMessage className="w-4 h-4 text-primary" />
                    Conte-nos tudo! (sem pressão 😊)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none bg-white hover:border-gray-300"
                    placeholder="Fique à vontade para contar sobre seu projeto, ideias, dúvidas ou qualquer coisa que quiser compartilhar conosco. Estamos ansiosos para saber mais!"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                    <IconCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-semibold">
                        Mensagem enviada com sucesso! ✨
                      </p>
                      <p className="text-green-600 text-sm">
                        Entraremos em contato em breve!
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                    <IconAlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-red-800 font-semibold mb-1">
                        Ops! Algo deu errado 😔
                      </p>
                      <div className="text-red-600 text-sm mb-2 space-y-2">
                        {FORMPREE_FORM_ID === "YOUR_FORM_ID" ||
                        !FORMPREE_FORM_ID ? (
                          <>
                            <p className="font-medium">
                              ⚠️ Formspree não está configurado ainda!
                            </p>
                            <div className="bg-red-100 p-3 rounded-lg space-y-2">
                              <p className="font-semibold">
                                Como configurar (5 minutos):
                              </p>
                              <ol className="list-decimal list-inside space-y-1 text-xs">
                                <li>
                                  Acesse{" "}
                                  <a
                                    href="https://formspree.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-medium"
                                  >
                                    formspree.io
                                  </a>{" "}
                                  e crie uma conta (pode usar Google)
                                </li>
                                <li>Crie um novo formulário</li>
                                <li>Copie o Form ID (ex: "abc123xyz")</li>
                                <li>
                                  Abra o arquivo{" "}
                                  <code className="bg-red-200 px-1 rounded">
                                    src/components/Contact.jsx
                                  </code>
                                </li>
                                <li>
                                  Na linha 30, substitua{" "}
                                  <code className="bg-red-200 px-1 rounded">
                                    "YOUR_FORM_ID"
                                  </code>{" "}
                                  pelo seu Form ID
                                </li>
                                <li>
                                  Configure o email nas Settings do Formspree:{" "}
                                  <code className="bg-red-200 px-1 rounded">
                                    vetrynlabs@gmail.com
                                  </code>
                                </li>
                              </ol>
                              <p className="text-xs mt-2">
                                📖 <strong>Guia completo:</strong> Veja o
                                arquivo{" "}
                                <code className="bg-red-200 px-1 rounded">
                                  CONFIGURAR_FORMSPREE.md
                                </code>{" "}
                                na raiz do projeto
                              </p>
                            </div>
                            <a
                              href="mailto:vetrynlabs@gmail.com"
                              className="inline-block text-red-700 text-sm font-medium hover:underline mt-2"
                            >
                              Ou envie um email direto enquanto isso →
                            </a>
                          </>
                        ) : (
                          <>
                            <p>
                              Não foi possível enviar a mensagem. Isso pode
                              acontecer se:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-xs ml-2">
                              <li>O Form ID está incorreto</li>
                              <li>
                                O limite de envios foi excedido (50/mês no plano
                                gratuito)
                              </li>
                              <li>Problema temporário de conexão</li>
                            </ul>
                            <p className="mt-2">
                              Tente novamente ou entre em contato diretamente
                              pelo email{" "}
                              <a
                                href="mailto:vetrynlabs@gmail.com"
                                className="underline font-medium"
                              >
                                vetrynlabs@gmail.com
                              </a>
                              .
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <SpotlightButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <IconLoader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <IconSend className="w-5 h-5" />
                        <span>Fale conosco</span>
                        <span className="text-sm opacity-80">
                          (prometemos responder rápido!)
                        </span>
                      </>
                    )}
                  </div>
                </SpotlightButton>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Team Modal */}
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />
    </section>
  );
}
