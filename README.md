# Val Pinheiro Nails - Site Profissional

Este é um site criado para o salão de beleza especializado em unhas Val Pinheiro Nails, baseado no design do site original https://valpinheironails.com.br.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome (para ícones)
- Google Fonts (Montserrat)

## Estrutura do Projeto

```
/
├── index.html
├── assets/
│   ├── styles/
│   │   └── style.css
│   └── js/
│       └── script.js
└── public/
    └── images/
        ├── hero-bg.jpg
        ├── esmaltacao.jpg
        ├── alongamento.jpg
        ├── blindagem.jpg
        └── pedicure.jpg
```

## Imagens

O site utiliza as seguintes imagens que precisam ser substituídas pelas suas próprias imagens:

1. `public/images/hero-bg.jpg` - Imagem de fundo da seção principal (hero)
2. `public/images/esmaltacao.jpg` - Imagem para o serviço de esmaltação em gel
3. `public/images/alongamento.jpg` - Imagem para o serviço de alongamento em gel
4. `public/images/blindagem.jpg` - Imagem para o serviço de blindagem
5. `public/images/pedicure.jpg` - Imagem para o serviço de pedicure e spa dos pés

### Onde encontrar imagens:

Você pode usar imagens gratuitas de bancos de imagens como:

- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Freepik](https://freepik.com)

Para melhores resultados, recomendamos usar imagens de alta qualidade e com proporções semelhantes.

## Como Utilizar

1. Clone ou baixe este repositório para o seu computador
2. Substitua as imagens na pasta `public/images/` pelas suas próprias imagens
3. Personalize as informações de contato no arquivo `index.html`
4. Abra o arquivo `index.html` em um navegador para visualizar o site

## Personalização

### Cores

As cores principais do site são definidas como variáveis CSS no arquivo `assets/styles/style.css`. Você pode modificá-las facilmente:

```css
:root {
  --primary-color: #e44d8e;
  --secondary-color: #993366;
  --accent-color: #ffccd4;
  --dark-color: #333333;
  --light-color: #ffffff;
  --gray-color: #f5f5f5;
  --text-color: #444444;
}
```

### Formulário de Contato

O formulário de contato no site atualmente apenas mostra uma mensagem de sucesso. Para fazê-lo funcionar corretamente, você precisará implementar a lógica de envio no arquivo `assets/js/script.js`.

Sugestões:

- Use um serviço como Formspree, Netlify Forms ou EmailJS
- Implemente um servidor back-end para processar o formulário
- Use Google Forms embutido

## Contato

Se você precisar de ajuda para personalizar ou implementar funcionalidades adicionais, entre em contato conosco.

---

© 2024 - Val Pinheiro Nails - Todos os direitos reservados
