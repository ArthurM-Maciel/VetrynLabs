# 🔧 Troubleshooting - Solução de Problemas

## ❌ Projeto não está abrindo

### Problema: Porta 5173 já está em uso

**Sintoma:**
```
Error: listen EPERM: operation not permitted ::1:5173
```

**Solução 1: Finalizar processo na porta**
```bash
# Encontrar o processo
lsof -ti:5173

# Finalizar o processo (substitua PID pelo número encontrado)
kill -9 PID

# Ou finalizar diretamente:
kill -9 $(lsof -ti:5173)
```

**Solução 2: Usar outra porta**
```bash
npm run dev -- --port 3000
```

**Solução 3: Limpar cache e reinstalar**
```bash
# Parar todos os processos Node
pkill -f node

# Limpar cache
rm -rf node_modules
rm -rf .vite
rm package-lock.json

# Reinstalar
npm install

# Tentar novamente
npm run dev
```

### Problema: Erro no jsconfig.json

**Sintoma:**
```
Valor inválido para '--ignoreDeprecations'
```

**Solução:**
Já corrigido! O arquivo `jsconfig.json` foi atualizado removendo a linha problemática.

### Problema: Erros de importação

**Sintoma:**
```
Cannot find module '@/components/...'
```

**Solução:**
1. Verifique se o arquivo `vite.config.js` tem o alias configurado:
```javascript
alias: {
  '@': path.resolve(__dirname, './src'),
}
```

2. Verifique se o `jsconfig.json` está correto:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

3. Reinicie o servidor:
```bash
npm run dev
```

### Problema: Dependências faltando

**Sintoma:**
```
Module not found: Can't resolve '...'
```

**Solução:**
```bash
npm install
```

### Problema: Erro de build

**Sintoma:**
```
Build failed with errors
```

**Solução:**
```bash
# Limpar tudo
rm -rf node_modules
rm -rf dist
rm package-lock.json

# Reinstalar
npm install

# Tentar build
npm run build
```

## 🌐 Problemas no Navegador

### Página em branco

1. **Abra o Console do Navegador** (F12)
2. **Verifique erros** no console
3. **Verifique a aba Network** para ver se há arquivos não carregando

### Erro 404

- Verifique se está acessando `http://localhost:5173`
- Verifique se o servidor está rodando

### Estilos não aparecem

- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
- Verifique se o Tailwind está configurado corretamente

## 📧 Problemas com Formulário

### Formulário não envia

1. Verifique se o Form ID está configurado em `src/components/Contact.jsx`
2. Verifique o console do navegador para erros
3. Verifique se o Formspree está ativo

### Email não chega

1. Verifique a caixa de spam
2. Verifique as configurações no dashboard do Formspree
3. Verifique se o limite de 50 emails/mês não foi excedido

## 🔄 Comandos Úteis

```bash
# Ver processos Node rodando
ps aux | grep node

# Finalizar todos os processos Node
pkill -f node

# Verificar porta em uso
lsof -i :5173

# Limpar cache do npm
npm cache clean --force

# Verificar versão do Node
node --version

# Verificar versão do npm
npm --version
```

## ✅ Checklist de Verificação

Antes de reportar um problema, verifique:

- [ ] Node.js 18+ instalado
- [ ] Dependências instaladas (`npm install`)
- [ ] Porta 5173 livre
- [ ] Nenhum erro no console do navegador
- [ ] Arquivo `vite.config.js` existe
- [ ] Arquivo `jsconfig.json` existe e está correto
- [ ] Todos os componentes estão sendo importados corretamente

## 🆘 Ainda com problemas?

1. **Limpe tudo e reinstale:**
```bash
rm -rf node_modules
rm -rf dist
rm -rf .vite
rm package-lock.json
npm install
npm run dev
```

2. **Verifique os logs:**
```bash
npm run dev 2>&1 | tee dev.log
```

3. **Entre em contato:**
- Email: vetrynlabs@gmail.com
- WhatsApp: https://wa.me/5554984364122



