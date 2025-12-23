# 📚 Documentação Técnica - Vetryn Labs Landing Page

Documentação técnica detalhada sobre a arquitetura e implementação do projeto.

## 🏗 Arquitetura

### Estrutura de Componentes

O projeto segue uma arquitetura baseada em componentes React funcionais com hooks.

```
App.jsx (Root)
├── NavbarDemo (Navegação)
├── Hero (Capa inicial)
├── About (Sobre nós)
├── WebsiteBenefits (Benefícios)
├── Services (Serviços)
├── MacbookShowcase (Showcase do processo)
│   └── ProcessShowcase (Conteúdo do terminal)
├── Process (Processo de trabalho)
├── Projects (Projetos)
│   └── ProjectCard (Card individual)
├── Contact (Contato)
│   ├── TeamModal (Modal do time)
│   └── SpotlightButton (Botão com efeito)
└── Footer (Rodapé)
```

## 🎨 Sistema de Design

### Cores Principais

Definidas em `src/index.css`:

```css
--color-primary: #12462d          /* Verde escuro - cor principal */
--color-primary-content: #7addad /* Verde claro - texto sobre verde */
--color-primary-light: #1c6f47   /* Verde médio - hover states */
--color-primary-dark: #081d13    /* Verde muito escuro - backgrounds */
```

### Tipografia

- **Font Family**: System UI (fallback: Avenir, Helvetica, Arial)
- **Títulos**: Font-bold com tamanhos responsivos
- **Corpo**: Font-light para textos descritivos

### Breakpoints (Tailwind)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎭 Animações

### Framer Motion

O projeto usa Framer Motion para todas as animações:

#### Padrão de Animação de Entrada

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

#### Scroll Animations

```javascript
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
```

### Animações 3D

- **Hero**: Formas geométricas flutuantes com CSS animations
- **Macbook**: Transformações 3D com perspectiva
- **Cards**: Hover effects com scale e translate

## 📦 Componentes UI Reutilizáveis

### SpotlightButton (`src/components/ui/SpotlightButton.jsx`)

Botão com efeito de spotlight que segue o mouse.

**Props:**
- `children`: Conteúdo do botão
- `className`: Classes CSS adicionais

### EncryptButton (`src/components/ui/EncryptButton.jsx`)

Botão com animação de texto "criptografado".

### MacbookScroll (`src/components/ui/macbook-scroll.jsx`)

Componente que renderiza um Macbook 3D com conteúdo scrollável.

**Props:**
- `title`: Título acima do Macbook
- `children`: Conteúdo a ser exibido na tela
- `showGradient`: Mostrar gradiente no rodapé
- `macbookColor`: Cor do Macbook (gray, midnight, silver, etc.)

### ScrollText (`src/components/ui/scroll-text.jsx`)

Texto animado com efeitos de scroll e blur.

**Props:**
- `text`: Texto a ser animado
- `as`: Tag HTML (h1, p, span)
- `direction`: Direção da animação (left, right, up, down)
- `letterAnime`: Animar letra por letra
- `lineAnime`: Animar linha por linha

## 🔧 Utilitários

### `cn()` Function (`src/lib/utils.js`)

Função helper para combinar classes CSS com Tailwind Merge:

```javascript
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

## 📧 Sistema de Email

### Formspree Integration

O formulário de contato usa Formspree para envio de emails sem backend.

**Fluxo:**
1. Usuário preenche formulário
2. Dados são enviados via POST para `https://formspree.io/f/{FORM_ID}`
3. Formspree processa e envia email
4. Email chega no Gmail configurado

**Configuração:**
- Form ID configurado em `src/components/Contact.jsx` (linha 30)
- Email de destino configurado no dashboard do Formspree

## 🎯 Performance

### Otimizações Implementadas

1. **Lazy Loading**: Componentes carregam apenas quando visíveis (`viewport={{ once: true }}`)
2. **Code Splitting**: Vite faz split automático do código
3. **Image Optimization**: Imagens em `public/` são servidas estáticas
4. **CSS Purging**: Tailwind remove CSS não utilizado no build

### Bundle Size

- **Desenvolvimento**: ~2-3MB (com source maps)
- **Produção**: ~200-300KB (gzipped)

## 🔒 Segurança

### Boas Práticas Implementadas

1. **Formspree**: Form ID é público mas seguro (não expõe credenciais)
2. **Input Validation**: Campos obrigatórios no formulário
3. **XSS Protection**: React escapa automaticamente conteúdo
4. **HTTPS**: Recomendado para produção

## 🧪 Testes

### Estrutura Recomendada

```
src/
├── components/
│   └── __tests__/
│       └── Component.test.jsx
```

### Ferramentas Sugeridas

- **Vitest**: Test runner (compatível com Vite)
- **React Testing Library**: Testes de componentes
- **Playwright**: Testes E2E

## 🚀 Deploy

### Variáveis de Ambiente

Nenhuma variável de ambiente necessária (Form ID está no código).

### Build de Produção

```bash
npm run build
```

Arquivos gerados em `dist/`:
- `index.html`
- `assets/index-{hash}.js`
- `assets/index-{hash}.css`

### Otimizações de Build

- **Minificação**: Automática via Vite
- **Tree Shaking**: Remove código não utilizado
- **Asset Optimization**: Imagens e fonts otimizadas

## 📱 Responsividade

### Estratégia Mobile-First

Todos os componentes usam classes Tailwind mobile-first:

```javascript
className="text-4xl md:text-5xl lg:text-6xl"
```

### Breakpoints Customizados

```javascript
// Mobile: < 640px
// Tablet: 640px - 1024px
// Desktop: > 1024px
```

## 🐛 Debugging

### DevTools

- **React DevTools**: Inspecionar componentes
- **Framer Motion DevTools**: Visualizar animações
- **Browser DevTools**: Network, Performance, etc.

### Logs

```javascript
// Console logs para debug
console.log("Debug info:", data);
```

### Erros Comuns

1. **Form ID não configurado**: Erro aparece no formulário
2. **Imagens não encontradas**: Verificar caminhos em `public/`
3. **Animações travando**: Verificar `will-change` e `transform`

## 📈 Métricas

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Monitoramento

Recomendado usar:
- **Google Analytics**
- **Vercel Analytics** (se deploy na Vercel)
- **Sentry** (para erros)

## 🔄 Manutenção

### Atualizar Dependências

```bash
npm outdated
npm update
```

### Adicionar Novo Componente

1. Criar arquivo em `src/components/`
2. Importar em `src/App.jsx`
3. Adicionar no JSX

### Modificar Cores

Editar `src/index.css` (variáveis CSS) ou `tailwind.config.js`

---

**Última atualização**: 2024

