# 📧 Como Configurar o Envio de Emails com Formspree

O Formspree é a forma mais fácil de receber emails do formulário de contato. Você só precisa criar uma conta e copiar um ID!

## 🚀 Passo a Passo Detalhado (5 minutos)

### 📋 Passo 1: Criar conta no Formspree

1. **Acesse o site**: Abra seu navegador e vá para: **https://formspree.io**
2. **Fazer cadastro**:
   - Clique no botão **"Sign Up"** (canto superior direito)
   - Você pode usar sua conta Google/Gmail para facilitar! Clique em **"Sign up with Google"**
   - Ou crie uma conta com email e senha
3. **Confirmar email** (se necessário): Verifique sua caixa de entrada e clique no link de confirmação
4. ✅ **Conta gratuita**: Permite até **50 envios por mês** (suficiente para começar!)

---

### 📝 Passo 2: Criar um novo formulário

1. **Após fazer login**, você verá o dashboard do Formspree
2. Clique no botão grande **"+ New Form"** ou **"Create Form"**
3. **Nome do formulário**: Digite algo como:
   - `Contato Vetryn Labs`
   - `Vetryn Labs Contact Form`
   - Ou qualquer nome que você preferir
4. Clique em **"Create"** ou **"Create Form"**

---

### 🔑 Passo 3: Copiar o Form ID (MUITO IMPORTANTE!)

Após criar o formulário, você verá uma página com informações do seu formulário. Procure por:

**Onde encontrar o Form ID:**

1. **Na URL do navegador**: Você verá algo como:

   ```
   https://formspree.io/f/xvgkqyzw
   ```

   O Form ID é a parte final: `xvgkqyzw`

2. **Na página do formulário**: Procure por um campo ou seção que mostra:

   - `Endpoint: https://formspree.io/f/xvgkqyzw`
   - Ou apenas o ID: `xvgkqyzw`

3. **Copie APENAS a parte final** (o código alfanumérico):
   - ✅ Correto: `xvgkqyzw`
   - ❌ Errado: `https://formspree.io/f/xvgkqyzw`
   - ❌ Errado: `f/xvgkqyzw`

**Exemplo visual:**

```
URL completa: https://formspree.io/f/abc123xyz
                    └───────────────┘
                    Copie apenas isso: abc123xyz
```

---

### 💻 Passo 4: Configurar no código

1. **Abra o arquivo** no seu editor de código:

   ```
   src/components/Contact.jsx
   ```

2. **Encontre a linha 30** (ou procure por `FORMPREE_FORM_ID`):

   ```javascript
   const FORMPREE_FORM_ID = "YOUR_FORM_ID";
   ```

3. **Substitua** `YOUR_FORM_ID` pelo ID que você copiou:

   ```javascript
   const FORMPREE_FORM_ID = "xvgkqyzw"; // Cole seu Form ID aqui
   ```

   **Exemplo real:**

   ```javascript
   const FORMPREE_FORM_ID = "abc123xyz"; // Seu Form ID do Formspree
   ```

4. **Salve o arquivo** (Ctrl+S ou Cmd+S)

---

### 📬 Passo 5: Configurar email de destino

1. **No dashboard do Formspree**, clique no seu formulário
2. Vá na aba **"Settings"** ou **"Configurações"**
3. Procure por **"Email Notifications"** ou **"Notificações por Email"**
4. **Adicione seu email**: Digite `vetrynlabs@gmail.com`
5. **Salve as configurações**: Clique em **"Save"** ou **"Salvar"**

**Dica**: Você pode adicionar múltiplos emails separados por vírgula!

---

## ✅ Passo 6: Testar a Configuração

### Verificar se está configurado:

1. **Abra o arquivo** `src/components/Contact.jsx`
2. **Verifique a linha 30**: Deve estar assim:
   ```javascript
   const FORMPREE_FORM_ID = "seu-id-aqui"; // NÃO deve estar "YOUR_FORM_ID"
   ```

### Testar o envio:

1. **Inicie o servidor** (se ainda não estiver rodando):

   ```bash
   npm run dev
   ```

2. **Acesse o site**: Abra `http://localhost:5173` no navegador

3. **Vá até a seção de contato**: Role até o final da página ou clique em "Contato"

4. **Preencha o formulário** com dados de teste:

   - Nome: Seu nome
   - Email: Seu email
   - Assunto: Teste
   - Mensagem: Esta é uma mensagem de teste

5. **Clique em "Fale conosco"**

6. **Verifique o resultado**:

   - ✅ **Sucesso**: Você verá uma mensagem verde "Mensagem enviada com sucesso!"
   - ❌ **Erro**: Você verá uma mensagem vermelha com instruções

7. **Verifique seu Gmail**:
   - Abra `vetrynlabs@gmail.com`
   - Procure por um email do Formspree
   - **Importante**: Verifique também a pasta de **SPAM/LIXO ELETRÔNICO**

---

## 📬 Como funciona

```
Usuário preenche formulário
    ↓
Formspree recebe os dados
    ↓
Formspree envia email para vetrynlabs@gmail.com
    ↓
Você recebe o email! 🎉
```

**Características:**

- ✅ **Gratuito**: 50 envios/mês
- ✅ **Sem configuração complexa**: Só precisa do Form ID
- ✅ **Direto no Gmail**: Os emails chegam direto na sua caixa de entrada
- ✅ **Seguro**: Formspree tem proteção contra spam

---

## 🔍 Verificação Rápida

Use esta checklist para garantir que está tudo configurado:

- [ ] Conta criada no Formspree
- [ ] Formulário criado no Formspree
- [ ] Form ID copiado (é um código alfanumérico)
- [ ] Form ID colado no arquivo `Contact.jsx` (linha 30)
- [ ] Email `vetrynlabs@gmail.com` configurado nas notificações do Formspree
- [ ] Teste enviado com sucesso
- [ ] Email recebido no Gmail (verificar spam também!)

---

## ❓ Problemas Comuns e Soluções

### ❌ Erro: "Formspree não está configurado"

**Causa**: O Form ID ainda está como `"YOUR_FORM_ID"`

**Solução**:

1. Abra `src/components/Contact.jsx`
2. Vá na linha 30
3. Substitua `"YOUR_FORM_ID"` pelo seu Form ID real do Formspree
4. Salve o arquivo
5. Recarregue a página no navegador

---

### ❌ Erro: "Erro ao enviar formulário"

**Possíveis causas**:

1. **Form ID incorreto**:

   - Verifique se copiou o ID correto
   - Não deve ter espaços ou caracteres extras
   - Deve ser algo como: `abc123xyz` (sem `https://` ou `/f/`)

2. **Formulário não ativado**:

   - No Formspree, verifique se o formulário está ativo
   - Alguns formulários precisam ser ativados manualmente

3. **Limite excedido**:
   - Conta gratuita: 50 envios/mês
   - Aguarde o próximo mês ou faça upgrade

**Solução**:

1. Verifique o console do navegador (F12) para ver erros detalhados
2. Confirme o Form ID no dashboard do Formspree
3. Teste novamente

---

### 📧 Não recebe emails

**Possíveis causas**:

1. **Email não configurado no Formspree**:

   - Vá em Settings → Email Notifications
   - Adicione `vetrynlabs@gmail.com`
   - Salve

2. **Email na pasta de spam**:

   - Verifique a pasta de SPAM/LIXO ELETRÔNICO no Gmail
   - Marque como "Não é spam" se encontrar

3. **Email incorreto**:
   - Verifique se digitou `vetrynlabs@gmail.com` corretamente
   - Sem espaços ou erros de digitação

**Solução**:

1. Verifique as configurações de email no Formspree
2. Verifique a pasta de spam
3. Teste enviando outro formulário
4. Verifique o dashboard do Formspree - ele mostra quantos envios foram feitos

---

### 🔒 Erro de CORS ou bloqueio

**Causa**: Formspree pode bloquear requisições de localhost em alguns casos

**Solução**:

1. No Formspree, vá em Settings
2. Procure por "Allowed Domains" ou "Domínios Permitidos"
3. Adicione `localhost` ou deixe vazio para permitir todos
4. Salve

---

## 💡 Dicas Úteis

### Mais de 50 envios/mês?

- **Opção 1**: Upgrade para plano pago no Formspree
- **Opção 2**: Criar múltiplos formulários gratuitos (cada um tem 50 envios/mês)
- **Opção 3**: Usar outro serviço como EmailJS ou SendGrid

### Personalizar emails recebidos

No Formspree, você pode:

- Personalizar o assunto do email
- Adicionar campos customizados
- Configurar auto-resposta
- Integrar com outros serviços

### Segurança

- ✅ O Form ID pode ficar no código (é público e seguro)
- ✅ Formspree tem proteção contra spam automática
- ✅ Você pode configurar whitelist de domínios se quiser
- ✅ Rate limiting automático (evita spam)

---

## 🎯 Resumo Rápido

1. **Criar conta**: https://formspree.io (pode usar Google)
2. **Criar formulário**: Clique em "New Form"
3. **Copiar Form ID**: Da URL ou da página (ex: `abc123xyz`)
4. **Colar no código**: `src/components/Contact.jsx` linha 30
5. **Configurar email**: Settings → Email Notifications → `vetrynlabs@gmail.com`
6. **Testar**: Preencher formulário e verificar Gmail

---

**Pronto!** Agora quando alguém preencher o formulário, você receberá um email direto no seu Gmail! 🎉

**Tempo total**: Menos de 5 minutos! ⚡

**Dúvidas?** Verifique a seção "Problemas Comuns" acima ou consulte a documentação do Formspree: https://help.formspree.io
