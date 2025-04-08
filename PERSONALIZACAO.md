# Guia de Personalização - Val Pinheiro Nails

Este documento contém instruções detalhadas para personalizar o site Val Pinheiro Nails conforme suas necessidades.

## Personalização de Conteúdo

### Informações de Contato

Edite o arquivo `index.html` para atualizar:

1. Telefone de contato: Procure por `(51) 996787206` e substitua pelo seu número
2. E-mail: Procure por `contato@valpinheironails.com.br` e substitua
3. Endereço: Procure por `AV. 25 de julho, 16, Sala 3, Centro, Dois Irmãos` e substitua
4. Link do Instagram: Atualize o link em `<a href="https://www.instagram.com/valpinheironails"`
5. Link do WhatsApp: Atualize o link em `<a href="https://wa.me/5551996787206"`

### Textos dos Serviços

Para alterar as descrições dos serviços, no arquivo `index.html`:

1. Localize a seção `<section id="servicos" class="services">`
2. Modifique os textos dentro das tags `<p>` e os itens das listas `<li>`

## Personalização Visual

### Cores

As cores do site são definidas no arquivo `assets/styles/style.css`:

```css
:root {
  --primary-color: #e44d8e; /* Rosa principal */
  --secondary-color: #993366; /* Rosa escuro */
  --accent-color: #ffccd4; /* Rosa claro */
  --dark-color: #333333; /* Cinza escuro para textos */
  --light-color: #ffffff; /* Branco */
  --gray-color: #f5f5f5; /* Cinza claro para fundos */
  --text-color: #444444; /* Cor do texto padrão */
}
```

Altere estes valores para combinar com sua identidade visual.

### Fontes

O site usa a fonte Montserrat. Para alterá-la:

1. No arquivo `index.html`, localize a linha:

   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
     rel="stylesheet"
   />
   ```

2. Visite [Google Fonts](https://fonts.google.com/) para escolher outra fonte

3. No arquivo `assets/styles/style.css`, atualize a linha:
   ```css
   body {
     font-family: "Montserrat", sans-serif;
     /* Alterar para sua nova fonte */
   }
   ```

## Adicionando Novos Serviços

Para adicionar um novo serviço:

1. Copie um dos blocos de serviço existentes dentro da seção `services`:

```html
<div class="service-card">
  <div class="service-image">
    <img src="public/images/novo-servico.jpg" alt="Nome do Novo Serviço" />
  </div>
  <div class="service-content">
    <h3>Nome do Novo Serviço</h3>
    <p>Descrição do novo serviço...</p>
    <ul>
      <li>Benefício 1</li>
      <li>Benefício 2</li>
      <li>Benefício 3</li>
      <li>Benefício 4</li>
    </ul>
    <a href="#contato" class="btn-secondary">Texto do botão</a>
  </div>
</div>
```

2. Adicione a nova imagem em `public/images/novo-servico.jpg`
3. Atualize o texto no bloco copiado

## Formulário de Contato

Para fazer o formulário funcionar com um serviço de e-mail:

### Usando Formspree (gratuito):

1. Crie uma conta em [Formspree](https://formspree.io/)
2. Crie um novo formulário e obtenha a URL
3. No arquivo `index.html`, localize a tag `<form id="appointment-form">` e altere para:

```html
<form id="appointment-form" action="SUA_URL_FORMSPREE" method="POST"></form>
```

### Usando EmailJS:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure seu serviço de e-mail e template
3. No arquivo `assets/js/script.js`, substitua o trecho do formulário por:

```javascript
if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", this).then(
      function () {
        alert(
          "Agendamento recebido com sucesso! Entraremos em contato em breve."
        );
        appointmentForm.reset();
      },
      function (error) {
        alert(
          "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
        );
        console.log(error);
      }
    );
  });
}
```

4. Adicione o script do EmailJS no `index.html`:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"
></script>
<script type="text/javascript">
  (function () {
    emailjs.init("SEU_USER_ID");
  })();
</script>
```

## Adicionando Google Analytics

Para rastrear visitantes do site:

1. Crie uma conta no [Google Analytics](https://analytics.google.com/)
2. Obtenha seu código de rastreamento
3. Adicione o código antes da tag `</head>` no arquivo `index.html`

## Publicando o Site

Algumas opções para hospedagem:

1. **GitHub Pages** (gratuito)

   - Crie um repositório no GitHub
   - Faça upload dos arquivos
   - Ative o GitHub Pages nas configurações do repositório

2. **Netlify** (gratuito)

   - Crie uma conta em [Netlify](https://www.netlify.com/)
   - Arraste e solte a pasta do site na área de upload
   - Ou conecte com seu repositório Git

3. **Hostinger, GoDaddy ou outros serviços pagos**
   - Adquira um domínio e plano de hospedagem
   - Faça upload dos arquivos via FTP

## Suporte

Se precisar de ajuda adicional para personalizar o site, entre em contato conosco.
