# ✅ Checklist de Configuração do Formspree

Use esta checklist para garantir que o email está configurado corretamente!

## 📋 Checklist

### 1. Conta no Formspree
- [ ] Conta criada em https://formspree.io
- [ ] Login realizado com sucesso
- [ ] Dashboard do Formspree está acessível

### 2. Formulário Criado
- [ ] Novo formulário criado no Formspree
- [ ] Formulário tem um nome (ex: "Contato Vetryn Labs")
- [ ] Formulário está ativo/visível no dashboard

### 3. Form ID Copiado
- [ ] Form ID encontrado (é um código alfanumérico, ex: `abc123xyz`)
- [ ] Form ID copiado corretamente (sem `https://` ou `/f/`)
- [ ] Form ID está salvo em algum lugar seguro (notas, etc)

### 4. Código Configurado
- [ ] Arquivo `src/components/Contact.jsx` aberto
- [ ] Linha 30 encontrada com `const FORMPREE_FORM_ID = "YOUR_FORM_ID";`
- [ ] `"YOUR_FORM_ID"` substituído pelo Form ID real
- [ ] Arquivo salvo (Ctrl+S ou Cmd+S)
- [ ] Código não contém mais `"YOUR_FORM_ID"`

### 5. Email de Destino Configurado
- [ ] Settings do formulário acessadas no Formspree
- [ ] Seção "Email Notifications" encontrada
- [ ] Email `vetrynlabs@gmail.com` adicionado
- [ ] Configurações salvas

### 6. Teste Realizado
- [ ] Servidor rodando (`npm run dev`)
- [ ] Site acessado no navegador
- [ ] Seção de contato encontrada
- [ ] Formulário preenchido com dados de teste
- [ ] Mensagem enviada
- [ ] Mensagem de sucesso apareceu (verde)
- [ ] Email recebido no Gmail (verificar também spam!)

## 🔍 Verificação Rápida no Código

Abra o arquivo `src/components/Contact.jsx` e verifique a linha 30:

**❌ ERRADO (não configurado):**
```javascript
const FORMPREE_FORM_ID = "YOUR_FORM_ID";
```

**✅ CORRETO (configurado):**
```javascript
const FORMPREE_FORM_ID = "abc123xyz"; // ou qualquer código alfanumérico
```

## 🚨 Problemas Comuns

### Se você marcou todos os itens mas ainda não funciona:

1. **Verifique o console do navegador** (F12 → Console)
   - Procure por erros em vermelho
   - Anote qualquer mensagem de erro

2. **Verifique o Form ID**
   - Deve ser apenas letras e números (ex: `abc123xyz`)
   - Não deve ter espaços
   - Não deve ter `https://` ou `/f/`

3. **Verifique o email no Formspree**
   - Vá em Settings → Email Notifications
   - Confirme que `vetrynlabs@gmail.com` está lá
   - Verifique se não há erros de digitação

4. **Verifique a pasta de spam**
   - Os emails podem ir para spam na primeira vez
   - Marque como "Não é spam" se encontrar

5. **Verifique o limite**
   - Plano gratuito: 50 envios/mês
   - Verifique no dashboard do Formspree quantos envios foram feitos

## 📞 Precisa de Ajuda?

1. **Leia o guia completo**: `CONFIGURAR_FORMSPREE.md`
2. **Verifique a documentação do Formspree**: https://help.formspree.io
3. **Teste novamente**: Às vezes é só um problema temporário de conexão

---

**Status da Configuração:**
- [ ] ✅ Tudo configurado e funcionando!
- [ ] ⚠️ Ainda com problemas (verifique a seção "Problemas Comuns" acima)

