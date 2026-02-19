# 🚀 Vetryn Labs - Landing Page

Landing page moderna e responsiva para a Vetryn Labs, uma software house especializada em desenvolvimento de sistemas web, mobile, automações e soluções digitais.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Componentes](#componentes)
- [Deploy](#deploy)
- [Suporte](#suporte)

## 🎯 Sobre o Projeto

Esta é a landing page oficial da Vetryn Labs, desenvolvida com React e Vite. A página apresenta:

- **Hero Section** com animações 3D minimalistas
- **Sobre Nós** com valores e missão
- **Serviços** oferecidos pela empresa
- **Processo de Trabalho** com showcase interativo
- **Projetos** desenvolvidos
- **Formulário de Contato** integrado com Formspree
- **Footer** com informações de contato

## 🛠 Tecnologias

### Core
- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **Vite 5.4.0** - Build tool e dev server
- **Framer Motion 12.23.24** - Biblioteca de animações

### Estilização
- **Tailwind CSS 4.1.16** - Framework CSS utility-first
- **PostCSS** - Processador CSS
- **Autoprefixer** - Prefixos CSS automáticos

### Componentes UI
- **Tabler Icons** - Ícones SVG
- **React Icons** - Biblioteca de ícones

### 3D e Animações
- **Three.js** - Biblioteca 3D
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers para React Three Fiber

## 📁 Estrutura do Projeto

```
Vetryn/
├── public/
│   ├── images/          # Imagens do time (arthur.jpg, enzo.jpg, lucas.jpg)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx              # Seção "Sobre Nós"
│   │   ├── Contact.jsx            # Formulário de contato
│   │   ├── FloatingPhone.jsx      # Componente de telefone flutuante
│   │   ├── Footer.jsx              # Rodapé
│   │   ├── Hero.jsx                # Seção hero (capa)
│   │   ├── MacbookShowcase.jsx    # Showcase do Macbook
│   │   ├── NavbarDemo.jsx         # Navegação
│   │   ├── Process.jsx            # Processo de trabalho
│   │   ├── ProcessShowcase.jsx    # Showcase do processo no terminal
│   │   ├── ProjectCard.jsx        # Card de projeto
│   │   ├── Projects.jsx           # Seção de projetos
│   │   ├── Services.jsx           # Seção de serviços
│   │   ├── TeamModal.jsx          # Modal do time
│   │   ├── WebsiteBenefits.jsx    # Benefícios
│   │   ├── ui/                    # Componentes UI reutilizáveis
│   │   │   ├── EncryptButton.jsx
│   │   │   ├── macbook-scroll.jsx
│   │   │   ├── resizable-navbar.jsx
│   │   │   ├── scroll-text.jsx
│   │   │   ├── sparkles.jsx
│   │   │   └── SpotlightButton.jsx
│   │   └── utils/
│   │       └── particlePoints.js
│   ├── lib/
│   │   └── utils.js               # Utilitários (cn, etc)
│   ├── styles/
│   │   └── theme.js               # Configurações de tema
│   ├── App.jsx                     # Componente principal
│   ├── App.css
│   ├── index.css                   # Estilos globais
│   └── main.jsx                    # Entry point
├── CONFIGURAR_FORMSPREE.md         # Guia de configuração do email
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ e npm (ou yarn/pnpm)

### Passos

1. **Clone o repositório** (ou copie os arquivos)
```bash
cd "Vetryn Labs Lading page/Vetryn"
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção

## ⚙️ Configuração

### 1. Configurar Formulário de Contato (Formspree)

O formulário de contato está configurado para usar Formspree. Para ativar:

1. Acesse [https://formspree.io](https://formspree.io)
2. Crie uma conta gratuita (pode usar Google/Gmail)
3. Crie um novo formulário
4. Copie o **Form ID** (ex: `xvgkqyzw`)
5. Abra `src/components/Contact.jsx`
6. Na linha 30, substitua:
```javascript
const FORMPREE_FORM_ID = "YOUR_FORM_ID";
```
Por:
```javascript
const FORMPREE_FORM_ID = "seu-form-id-aqui";
```

7. No dashboard do Formspree, configure o email de destino:
   - Vá em **Settings** → **Email Notifications**
   - Adicione: `vetrynlabs@gmail.com`

📖 **Guia completo**: Veja `CONFIGURAR_FORMSPREE.md` para instruções detalhadas.

### 2. Personalizar Conteúdo

#### Informações da Empresa
- **Email**: Edite em `src/components/Contact.jsx` (linha 61)
- **WhatsApp**: Edite em `src/components/Contact.jsx` (linha 47)
- **Redes Sociais**: Edite em `src/components/Contact.jsx` (linhas 43-74)

#### Serviços
Edite `src/components/Services.jsx` para modificar os serviços oferecidos.

#### Projetos
Edite `src/components/Projects.jsx` para adicionar/remover projetos.

#### Time
Edite `src/components/TeamModal.jsx` para atualizar informações do time.

### 3. Cores e Tema

As cores primárias estão definidas em `src/index.css`:

```css
--color-primary: #12462d;          /* Verde escuro */
--color-primary-content: #7addad;  /* Verde claro */
--color-primary-light: #1c6f47;    /* Verde médio */
--color-primary-dark: #081d13;    /* Verde muito escuro */
```

## 🧩 Componentes Principais

### Hero (`src/components/Hero.jsx`)
Seção inicial da página com:
- Título "Vetryn Labs"
- Subtítulo e descrição
- Animações 3D minimalistas (formas geométricas flutuantes)

### Services (`src/components/Services.jsx`)
Lista de serviços oferecidos:
- Sistemas Web
- Aplicativos Mobile
- Automações de Trabalho
- UI/UX Design
- Estruturação e Arquitetura de Escopos
- Phishing Test / Engenharia Social

### Projects (`src/components/Projects.jsx`)
Showcase de projetos:
- Landing Pages Eficientes
- Phishing Test & Treinamento
- Automação On/Off Boarding
- App de Finanças + WhatsApp
- Dashboard Polícia Civil
- Sistema de Locação & Agendamento

### Contact (`src/components/Contact.jsx`)
Formulário de contato com:
- Campos: Nome, Email, Assunto, Mensagem
- Integração com Formspree
- Feedback visual (sucesso/erro)
- Links para redes sociais

