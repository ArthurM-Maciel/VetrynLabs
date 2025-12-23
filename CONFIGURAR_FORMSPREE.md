# 📧 Como Configurar o Envio de Emails com Formspree

O Formspree é a forma mais fácil de receber emails do formulário de contato. Você só precisa criar uma conta e copiar um ID!

## 🚀 Passo a Passo (5 minutos)

### 1. Criar conta no Formspree
1. Acesse: **https://formspree.io**
2. Clique em **"Sign Up"** (pode usar sua conta Google/Gmail!)
3. A conta gratuita permite até **50 envios por mês**

### 2. Criar um novo formulário
1. Depois de fazer login, clique em **"New Form"**
2. Dê um nome para o formulário (ex: "Contato Vetryn Labs")
3. Clique em **"Create"**

### 3. Copiar o Form ID
1. Você verá uma página com o seu formulário
2. Procure por algo como: `https://formspree.io/f/xvgkqyzw`
3. **Copie apenas a parte final**: `xvgkqyzw` (esse é o seu Form ID!)

### 4. Configurar no código
1. Abra o arquivo: `src/components/Contact.jsx`
2. Procure por esta linha (por volta da linha 30):

```javascript
const FORMPREE_FORM_ID = "YOUR_FORM_ID";
```

3. Substitua `YOUR_FORM_ID` pelo ID que você copiou:

```javascript
const FORMPREE_FORM_ID = "xvgkqyzw"; // Seu Form ID aqui
```

### 5. Configurar email de destino
1. No dashboard do Formspree, vá em **"Settings"** do seu formulário
2. Em **"Email Notifications"**, adicione seu email Gmail: `vetrynlabs@gmail.com`
3. Salve as configurações

## ✅ Testar

1. Inicie o servidor: `npm run dev`
2. Preencha o formulário de contato
3. Envie uma mensagem de teste
4. **Verifique seu Gmail!** Você receberá o email automaticamente! 🎉

## 📬 Como funciona

- Alguém preenche o formulário → Formspree recebe → Você recebe email no Gmail
- **Gratuito**: 50 envios/mês
- **Sem configuração complexa**: Só precisa do Form ID
- **Direto no Gmail**: Os emails chegam direto na sua caixa de entrada

## 🔒 Segurança

- O Form ID pode ficar no código (é público e seguro)
- Formspree tem proteção contra spam
- Você pode configurar whitelist de domínios se quiser

## 💡 Dica

Se você quiser mais de 50 envios/mês, pode fazer upgrade no Formspree ou criar múltiplos formulários gratuitos.

## ❓ Problemas?

- **Não recebe emails**: Verifique a caixa de spam e as configurações de notificação no Formspree
- **Erro ao enviar**: Verifique se o Form ID está correto
- **Limite excedido**: Upgrade para plano pago ou aguarde o próximo mês

---

**Pronto!** Agora quando alguém preencher o formulário, você receberá um email direto no seu Gmail! 🎉

**Tempo total**: Menos de 5 minutos! ⚡
