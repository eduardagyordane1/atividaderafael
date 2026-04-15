# Aluguel de Carros - Prática 02

  ## Configuração do Firebase

  Antes de rodar o projeto, configure o arquivo `firebaseConfig.js` com os dados do seu projeto Firebase:

  ```js
  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJECT_ID.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_PROJECT_ID.appspot.com",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
  };
  ```

  Esses dados estão disponíveis no Firebase Console > Configurações do projeto > Seus apps.

  ## Instalação

  ```bash
  npm install
  ```

  ## Executar o projeto

  ```bash
  # Web (recomendado no Codespace)

  # Celular via QR Code (Expo Go)
  npx expo start

  # Android
  npx expo start --android

  # iOS
  npx expo start --ios
  ```

  ## Estrutura do Projeto

  ```
  projeto-mobile/
  ├── App.js                   # Ponto de entrada
  ├── firebaseConfig.js        # Configuração do Firebase
  ├── componentes/             # Telas e navegação (Prática 02)
  │   ├── AppNavigator.js      # Navegação principal
  │   ├── LoginScreen.js       # Tela de login
  │   ├── RegisterScreen.js    # Tela de cadastro
  │   ├── FormScreen.js        # Formulário de aluguel
  │   └── ListScreen.js        # Lista de aluguéis
  └── src/
      ├── components/          # Componentes reutilizáveis
      └── styles/              # Estilos globais
  ```
  