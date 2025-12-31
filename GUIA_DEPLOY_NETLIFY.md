# 🚀 Guia de Deploy no Netlify

Este guia vai te ajudar a fazer o deploy do site Vetryn Labs no Netlify corretamente.

## ✅ O que foi configurado

1. ✅ Arquivo `netlify.toml` criado na raiz do projeto
2. ✅ Script `build` já existe no `package.json`
3. ✅ Configuração de redirects para SPA (Single Page Application)

## 📋 Passo a Passo para Deploy

### Opção 1: Deploy via Interface do Netlify (Recomendado)

1. **Acesse o Netlify**: https://app.netlify.com
2. **Faça login** (pode usar GitHub)
3. **Adicione um novo site**:
   - Clique em "Add new site" → "Import an existing project"
   - Conecte seu repositório GitHub (ou GitLab/Bitbucket)
   - Selecione o repositório: `VetrynLabs`

4. **Configurações de Build** (o Netlify deve detectar automaticamente, mas verifique):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: Deixe em branco ou use `18` (o Netlify detecta automaticamente)

5. **Clique em "Deploy site"**

### Opção 2: Deploy via Netlify CLI

1. **Instale o Netlify CLI** (se ainda não tiver):
   ```bash
   npm install -g netlify-cli
   ```

2. **Faça login**:
   ```bash
   netlify login
   ```

3. **Inicialize o site**:
   ```bash
   netlify init
   ```

4. **Faça o deploy**:
   ```bash
   netlify deploy --prod
   ```

## 🔧 Configurações no Netlify

O arquivo `netlify.toml` já está configurado com:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**O que isso faz:**
- `command`: Executa `npm run build` para criar a versão de produção
- `publish`: Publica a pasta `dist` (onde o Vite gera os arquivos)
- `redirects`: Redireciona todas as rotas para `index.html` (necessário para SPAs React)

## ✅ Testar Localmente Antes do Deploy

Antes de fazer o deploy, teste localmente:

```bash
# Instalar dependências (se ainda não fez)
npm ci

# Fazer build de produção
npm run build

# Preview do build (opcional)
npm run preview
```

Isso vai:
1. Criar a pasta `dist/` com os arquivos otimizados
2. Iniciar um servidor local para testar o build de produção

**Verifique:**
- ✅ A pasta `dist/` foi criada
- ✅ O build terminou sem erros
- ✅ O preview funciona corretamente

## 🐛 Problemas Comuns

### ❌ Erro: "Build command failed"

**Solução:**
1. Verifique se todas as dependências estão instaladas:
   ```bash
   npm ci
   ```

2. Teste o build localmente:
   ```bash
   npm run build
   ```

3. Se houver erros, corrija antes de fazer o deploy

### ❌ Erro: "Publish directory not found"

**Solução:**
1. Verifique se o `netlify.toml` está na raiz do projeto
2. Verifique se o `package.json` tem o script `build`
3. Certifique-se de que o build está gerando a pasta `dist/`

### ❌ Site não carrega ou mostra erro 404

**Solução:**
1. Verifique se o `netlify.toml` tem a seção `[[redirects]]`
2. Certifique-se de que o `index.html` está na pasta `dist/`
3. Verifique os logs do Netlify para mais detalhes

### ❌ Variáveis de ambiente não funcionam

**Solução:**
1. No Netlify, vá em **Site settings** → **Environment variables**
2. Adicione as variáveis necessárias
3. Faça um novo deploy

## 📝 Checklist Antes do Deploy

- [ ] Testei o build localmente (`npm run build`)
- [ ] O arquivo `netlify.toml` está na raiz do projeto
- [ ] O `package.json` tem o script `build`
- [ ] O Form ID do Formspree está configurado no `Contact.jsx`
- [ ] O email está configurado no Formspree (`vetrynlabs@gmail.com`)
- [ ] Todas as dependências estão no `package.json`
- [ ] Não há erros no console do navegador
- [ ] O site funciona localmente (`npm run dev`)

## 🎉 Após o Deploy

1. **Acesse seu site**: O Netlify vai fornecer uma URL (ex: `vetryn-labs.netlify.app`)
2. **Teste o formulário de contato**: Preencha e envie uma mensagem de teste
3. **Verifique o email**: Confirme que recebeu o email no `vetrynlabs@gmail.com`
4. **Configure domínio customizado** (opcional): No Netlify, vá em **Domain settings**

## 🔄 Atualizações Futuras

Para atualizar o site após fazer mudanças:

1. **Faça commit e push** para o repositório:
   ```bash
   git add .
   git commit -m "Atualização do site"
   git push
   ```

2. **O Netlify vai fazer deploy automaticamente** (se estiver conectado ao GitHub)

Ou faça deploy manual:
```bash
netlify deploy --prod
```

## 📚 Recursos Úteis

- **Documentação do Netlify**: https://docs.netlify.com
- **Documentação do Vite**: https://vitejs.dev
- **Status do Deploy**: Veja no dashboard do Netlify

---

**Pronto!** Agora seu site deve fazer deploy corretamente no Netlify! 🚀

