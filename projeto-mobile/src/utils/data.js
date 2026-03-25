export const flatListData = [
  { id: '1', title: 'React Native', description: 'Framework para criar apps nativos usando React.' },
  { id: '2', title: 'Expo', description: 'Plataforma para facilitar o desenvolvimento de apps React Native.' },
  { id: '3', title: 'Navegação', description: 'Uso de React Navigation para gerenciar telas.' },
  { id: '4', title: 'Estilização', description: 'Aplicação de estilos modulares e organizados.' },
  { id: '5', title: 'Componentes', description: 'Criação de elementos reutilizáveis na interface.' },
  { id: '6', title: 'Hooks', description: 'Utilização de useState e useEffect para lógica de estado.' },
  { id: '7', title: 'Flexbox', description: 'Sistema de layout para organizar componentes na tela.' },
  { id: '8', title: 'Props', description: 'Passagem de dados entre componentes pais e filhos.' },
  { id: '9', title: 'Eventos', description: 'Manipulação de toques e interações do usuário.' },
  { id: '10', title: 'API', description: 'Consumo de dados externos e integração com serviços.' },
];

export const sectionListData = [
  {
    title: 'Navegação',
    data: [
      { id: 's1', title: 'Stack Navigator', description: 'Navegação em pilha para fluxos lineares.' },
      { id: 's2', title: 'Drawer Navigator', description: 'Menu lateral deslizante para acesso rápido.' },
      { id: 's3', title: 'Tab Navigator', description: 'Abas inferiores ou superiores para troca de contexto.' },
    ],
  },
  {
    title: 'Componentes de Lista',
    data: [
      { id: 's4', title: 'ScrollView', description: 'Container genérico de rolagem para poucos itens.' },
      { id: 's5', title: 'FlatList', description: 'Otimizado para listas longas e dinâmicas.' },
      { id: 's6', title: 'SectionList', description: 'Ideal para listas agrupadas por seções.' },
    ],
  },
  {
    title: 'Estilos e Layout',
    data: [
      { id: 's7', title: 'StyleSheet', description: 'API principal para definição de estilos.' },
      { id: 's8', title: 'Dimensions', description: 'Obtenção de dimensões da tela do dispositivo.' },
      { id: 's9', title: 'Safe Area', description: 'Garante que o conteúdo não seja cortado por entalhes.' },
    ],
  },
];

export const longText = `
  O React Native combina as melhores partes do desenvolvimento nativo com o React, uma biblioteca JavaScript de primeira classe para construir interfaces de usuário.

  Você pode usar o React Native hoje em seus projetos Android e iOS existentes ou pode criar um novo aplicativo do zero.

  O React Native permite que você crie aplicativos verdadeiramente nativos e não compromete a experiência de seus usuários. Ele fornece um conjunto básico de componentes nativos agnósticos de plataforma como View, Text e Image que mapeiam diretamente para os blocos de construção da interface do usuário nativa da plataforma.

  Muitas plataformas, um único framework. Com o React Native, você pode compartilhar código entre plataformas usando o React.

  O desenvolvimento nativo pode ser lento. Com o React Native, você pode iterar na velocidade do desenvolvimento web. O Fast Refresh permite que você veja suas alterações instantaneamente assim que salvar.

  O React Native é um projeto de código aberto, com o apoio do Facebook e de uma comunidade ativa de empresas e indivíduos.
`;
