# Como Testar e Publicar o Site Val Pinheiro Nails

Este guia explica como testar o site localmente e como publicá-lo na internet.

## Testando o Site Localmente

### Método 1: Abrir o Arquivo Diretamente

A maneira mais simples de testar o site localmente é abrir o arquivo `index.html` diretamente no seu navegador:

1. Navegue até a pasta do projeto no seu explorador de arquivos
2. Clique duas vezes no arquivo `index.html`
3. O site será aberto no seu navegador padrão

### Método 2: Usando um Servidor Local

Para testar funcionalidades mais avançadas (como formulários), é recomendado usar um servidor local:

#### Usando Visual Studio Code + Live Server

1. Instale o [Visual Studio Code](https://code.visualstudio.com/)
2. Instale a extensão "Live Server" do Visual Studio Code
3. Abra a pasta do projeto no VS Code
4. Clique com o botão direito no arquivo `index.html`
5. Selecione "Open with Live Server"
6. O site abrirá automaticamente no seu navegador

#### Usando Python (alternativa)

1. Abra o terminal ou prompt de comando
2. Navegue até a pasta do projeto
3. Execute o comando:
   - Python 3: `python -m http.server`
   - Python 2: `python -m SimpleHTTPServer`
4. Abra seu navegador e acesse `http://localhost:8000`

#### Usando Node.js (alternativa)

1. Instale o [Node.js](https://nodejs.org/)
2. Instale o pacote `http-server` globalmente: `npm install -g http-server`
3. Navegue até a pasta do projeto no terminal
4. Execute o comando: `http-server`
5. Acesse `http://localhost:8080` no seu navegador

## Preparando para Publicação

Antes de publicar o site, complete estas etapas:

### 1. Adicione Todas as Imagens

Certifique-se de que todas as imagens necessárias estão na pasta `public/images/`:

- hero-bg.jpg
- esmaltacao.jpg
- alongamento.jpg
- blindagem.jpg
- pedicure.jpg

### 2. Personalize as Informações

- Atualize todas as informações de contato no arquivo `index.html`
- Personalize os textos dos serviços conforme necessário
- Modifique cores e estilos no arquivo `assets/styles/style.css` se desejar

### 3. Configure o Formulário de Contato

Implemente uma das soluções mencionadas no arquivo `PERSONALIZACAO.md` para fazer o formulário funcionar.

### 4. Teste em Diferentes Dispositivos e Navegadores

- Abra o site em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- Teste em dispositivos móveis ou use as ferramentas de desenvolvedor do navegador para emular dispositivos móveis
- Verifique se todas as funcionalidades estão operando corretamente

### 5. Otimize para SEO (Opcional)

- Adicione uma meta descrição no `<head>` do arquivo `index.html`:

```html
<meta
  name="description"
  content="Val Pinheiro Nails - Serviços especializados em unhas com qualidade e garantia. Esmaltação em gel, blindagem, alongamento e spa dos pés."
/>
```

- Adicione meta tags para redes sociais:

```html
<meta
  property="og:title"
  content="Val Pinheiro Nails - Cuidados com suas unhas"
/>
<meta
  property="og:description"
  content="Serviços especializados em unhas com qualidade e garantia. Esmaltação em gel, blindagem, alongamento e spa dos pés."
/>
<meta property="og:image" content="URL_DA_SUA_IMAGEM_PARA_REDES_SOCIAIS" />
<meta property="og:url" content="URL_DO_SEU_SITE" />
```

## Publicando o Site

### Opção 1: GitHub Pages (Gratuito)

1. Crie uma conta no [GitHub](https://github.com/)
2. Crie um novo repositório
3. Faça upload de todos os arquivos do site para o repositório
4. Vá para "Settings" > "Pages"
5. Em "Source", selecione "main" e salve
6. Seu site estará disponível em `https://seunome.github.io/nome-do-repositorio`

### Opção 2: Netlify (Gratuito)

1. Crie uma conta no [Netlify](https://www.netlify.com/)
2. Na página inicial do Netlify, clique em "Add new site" > "Import an existing project"
3. Conecte sua conta GitHub ou arraste e solte a pasta do projeto
4. Seu site será publicado automaticamente com um URL gerado (ex: `https://nome-aleatorio.netlify.app`)
5. Você pode configurar um domínio personalizado nas configurações

### Opção 3: Hospedagem Paga

Para um site profissional, considere:

1. Adquirir um domínio personalizado (ex: `www.valpinheironails.com.br`)
2. Contratar um serviço de hospedagem como:

   - [Hostinger](https://www.hostinger.com.br/)
   - [Hostgator](https://www.hostgator.com.br/)
   - [Locaweb](https://www.locaweb.com.br/)

3. Faça upload dos arquivos para o servidor usando FTP ou o painel de controle da hospedagem

## Problemas Comuns e Soluções

### Imagens não aparecem

- Verifique se os nomes dos arquivos correspondem exatamente aos utilizados no HTML
- Confirme se as imagens estão na pasta correta (`public/images/`)
- Verifique se os caminhos das imagens estão corretos (pode ser necessário ajustar dependendo da hospedagem)

### Formulário não funciona

- Se estiver usando Formspree ou similar, verifique se configurou a URL corretamente
- Teste o formulário em um servidor local ou após a publicação (não funcionará abrindo o arquivo HTML diretamente)

### Problemas de responsividade

- Use as ferramentas de desenvolvedor do navegador (F12) para testar diferentes tamanhos de tela
- Ajuste o CSS conforme necessário para corrigir problemas em dispositivos específicos

## Manutenção do Site

Para manter o site atualizado:

1. Atualize regularmente as informações de contato e serviços
2. Renove as imagens periodicamente para manter o site atualizado
3. Considere adicionar um blog ou seção de promoções para conteúdo dinâmico
4. Implemente análises (Google Analytics) para acompanhar o desempenho do site
