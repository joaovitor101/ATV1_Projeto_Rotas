import { Course, Lesson } from "../types/course";

// Cursos baseados nas funcionalidades do próprio Projeto
// Emojis https://emojipedia.org/ ou https://getemoji.com/
export const COURSES: Course[] = [
  {
    id: "1",
    title: "Onboarding e Navegação",
    description: "Crie telas de boas-vindas e navegação com Expo Router",
    icon: "🚀",
    color: "#9C27B0",
    totalLessons: 4,
  },
  {
    id: "2",
    title: "Componentes Personalizados",
    description: "Desenvolva componentes reutilizáveis Button e Card",
    icon: "🎨",
    color: "#FF5722",
    totalLessons: 3,
  },
  {
    id: "3",
    title: "Perfil e AsyncStorage",
    description: "Implemente sistema de perfil com armazenamento local",
    icon: "👤",
    color: "#4CAF50",
    totalLessons: 5,
  },
  {
    id: "4",
    title: "Sistema de Cursos",
    description: "Construa lista de cursos, lições e questões",
    icon: "📚",
    color: "#2196F3",
    totalLessons: 4,
  },
];

export const LESSONS: Lesson[] = [
  // CURSO 1: Onboarding e Navegação
  {
    id: "1-1",
    courseId: "1",
    title: "Configuração do Expo Router",
    description: "Configure navegação baseada em arquivos",
    order: 1,
    questions: [
      {
        id: "1-1-1",
        question: "Complete o import do Expo Router:",
        code: `import { [BLANK] } from 'expo-router';

export default function App() {
  return <Stack />;
}`,
        options: ["Stack", "Navigator", "Router", "Screen"],
        correctAnswer: 0,
      },
      {
        id: "1-1-2",
        question: "Como navegar para outra tela:",
        code: `import { router } from 'expo-router';

const handlePress = () => {
  router.[BLANK]('/home');
};`,
        options: ["navigate", "push", "go", "redirect"],
        correctAnswer: 1,
      },
      {
        id: "1-1-3",
        question: "Como criar uma rota de tabs:",
        code: `// Estrutura de pastas:
app/
  [BLANK]/
    _layout.tsx
    index.tsx
    profile.tsx`,
        options: ["(tabs)", "[tabs]", "tabs", "{tabs}"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "1-2",
    courseId: "1",
    title: "Tela de Onboarding",
    description: "Crie uma tela de boas-vindas atrativa",
    order: 2,
    questions: [
      {
        id: "1-2-1",
        question: "Complete o componente de texto:",
        code: `import { View, [BLANK] } from 'react-native';

export default function Onboarding() {
  return (
    <View>
      <Text>Bem-vindo!</Text>
    </View>
  );
}`,
        options: ["Label", "Text", "Paragraph", "Title"],
        correctAnswer: 1,
      },
      {
        id: "1-2-2",
        question: "Navegação após onboarding:",
        code: `import { router } from 'expo-router';

const handleStart = () => {
  router.[BLANK]('/(tabs)');
};`,
        options: ["push", "replace", "navigate", "redirect"],
        correctAnswer: 1,
      },
      {
        id: "1-2-3",
        question: "Adicionar botão de ação:",
        code: `import Button from '@/components/Button';

export default function Onboarding() {
  return (
    <View>
      <Text>Bem-vindo!</Text>
      <[BLANK]
        title="Começar"
        onPress={handleStart}
      />
    </View>
  );
}`,
        options: ["TouchableOpacity", "Button", "Pressable", "Link"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "1-3",
    courseId: "1",
    title: "Rotas Dinâmicas",
    description: "Aprenda a criar rotas com parâmetros",
    order: 3,
    questions: [
      {
        id: "1-3-1",
        question: "Nome de arquivo para rota dinâmica:",
        code: `// Para criar rota /courses/:id
app/
  courses/
    [BLANK].tsx`,
        options: ["[id]", "{id}", ":id", "<id>"],
        correctAnswer: 0,
      },
      {
        id: "1-3-2",
        question: "Acessar parâmetro da URL:",
        code: `import { [BLANK] } from 'expo-router';

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  return <View><Text>Curso {id}</Text></View>;
}`,
        options: ["useParams", "useLocalSearchParams", "useRouter", "useRoute"],
        correctAnswer: 1,
      },
      {
        id: "1-3-3",
        question: "Customizar título do header:",
        code: `import { Stack } from 'expo-router';

export default function Screen() {
  return (
    <Stack.[BLANK] options={{ title: 'Detalhes' }} />
  );
}`,
        options: ["Header", "Screen", "Title", "Navigator"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "1-4",
    courseId: "1",
    title: "Tab Navigation",
    description: "Configure navegação por abas",
    order: 4,
    questions: [
      {
        id: "1-4-1",
        question: "Import do Tabs:",
        code: `import { [BLANK] } from 'expo-router';

export default function TabLayout() {
  return <Tabs />;
}`,
        options: ["Tabs", "TabNavigator", "BottomTabs", "TabBar"],
        correctAnswer: 0,
      },
      {
        id: "1-4-2",
        question: "Adicionar ícone na Tab:",
        code: `<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    [BLANK]: ({ color }) => <Icon name="home" color={color} />,
  }}
/>`,
        options: ["icon", "tabBarIcon", "tabIcon", "iconComponent"],
        correctAnswer: 1,
      },
      {
        id: "1-4-3",
        question: "Ocultar Tab em tela específica:",
        code: `<Tabs.Screen
  name="profile/edit"
  options={{
    [BLANK]: 'none',
  }}
/>`,
        options: ["tabBarStyle", "href", "display", "visible"],
        correctAnswer: 1,
      },
    ],
  },

  // CURSO 2: Componentes Personalizados
  {
    id: "2-1",
    courseId: "2",
    title: "Componente Button",
    description: "Crie um botão reutilizável",
    order: 1,
    questions: [
      {
        id: "2-1-1",
        question: "Interface de props do Button:",
        code: `[BLANK] ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}`,
        options: ["type", "interface", "class", "props"],
        correctAnswer: 1,
      },
      {
        id: "2-1-2",
        question: "Destructuring de props:",
        code: `export default function Button([BLANK]) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}`,
        options: [
          "{ title, onPress }: ButtonProps",
          "props: ButtonProps",
          "title, onPress",
          "(title, onPress)",
        ],
        correctAnswer: 0,
      },
      {
        id: "2-1-3",
        question: "Aplicar estilos condicionais:",
        code: `<TouchableOpacity
  style={[
    styles.button,
    disabled && [BLANK]
  ]}
>
  <Text>{title}</Text>
</TouchableOpacity>`,
        options: [
          "styles.disabled",
          "styles.buttonDisabled",
          "disabledStyle",
          "{ opacity: 0.5 }",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "2-2",
    courseId: "2",
    title: "Componente Card",
    description: "Desenvolva um card flexível",
    order: 2,
    questions: [
      {
        id: "2-2-1",
        question: "Tipo para children no React:",
        code: `import { [BLANK] } from 'react';

interface CardProps {
  children: ReactNode;
}`,
        options: ["ReactNode", "React", "ReactElement", "Component"],
        correctAnswer: 0,
      },
      {
        id: "2-2-2",
        question: "Props opcionais com TypeScript:",
        code: `interface CardProps {
  title[BLANK]: string;
  children: ReactNode;
}`,
        options: ["?", "!", ":", "|"],
        correctAnswer: 0,
      },
      {
        id: "2-2-3",
        question: "Renderizar children no componente:",
        code: `export default function Card({ children }: CardProps) {
  return (
    <View style={styles.container}>
      [BLANK]
    </View>
  );
}`,
        options: ["{children}", "<children />", "children", "{props.children}"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "2-3",
    courseId: "2",
    title: "Card Reutilizável Avançado",
    description: "Adicione slots e customização",
    order: 3,
    questions: [
      {
        id: "2-3-1",
        question: "Adicionar slots ao Card:",
        code: `interface CardProps {
  children: ReactNode;
  [BLANK]?: ReactNode;
  rightComponent?: ReactNode;
}`,
        options: ["leftComponent", "leftSlot", "leftContent", "startComponent"],
        correctAnswer: 0,
      },
      {
        id: "2-3-2",
        question: "Renderizar condicional:",
        code: `<View style={styles.content}>
  [BLANK]
  <View style={styles.textContent}>
    {children}
  </View>
  {rightComponent}
</View>`,
        options: [
          "{leftComponent}",
          "{leftComponent && leftComponent}",
          "leftComponent",
          "<leftComponent />",
        ],
        correctAnswer: 0,
      },
      {
        id: "2-3-3",
        question: "Estilo dinâmico com props:",
        code: `<View style={[
  styles.container,
  { [BLANK]: borderColor }
]}>`,
        options: ["borderColor", "color", "border", "borderStyle"],
        correctAnswer: 0,
      },
    ],
  },

  // CURSO 3: Perfil e AsyncStorage
  {
    id: "3-1",
    courseId: "3",
    title: "Interface de Perfil",
    description: "Defina tipos para dados do usuário",
    order: 1,
    questions: [
      {
        id: "3-1-1",
        question: "Complete a interface Profile:",
        code: `export [BLANK] Profile {
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
}`,
        options: ["type", "interface", "class", "const"],
        correctAnswer: 1,
      },
      {
        id: "3-1-2",
        question: "Import do tipo em outro arquivo:",
        code: `import { [BLANK] } from '@/types/profile';

export default function ProfileScreen() {
  const [profile, setProfile] = useState<Profile>();
}`,
        options: ["type Profile", "Profile", "Profile as type", "{ Profile }"],
        correctAnswer: 1,
      },
      {
        id: "3-1-3",
        question: "Estado com tipo opcional:",
        code: `const [profile, setProfile] = useState[BLANK];`,
        options: [
          "<Profile>",
          "<Profile | null>",
          "<Profile?>",
          "<Profile | undefined>",
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "3-2",
    courseId: "3",
    title: "AsyncStorage - Salvamento",
    description: "Persista dados localmente",
    order: 2,
    questions: [
      {
        id: "3-2-1",
        question: "Import do AsyncStorage:",
        code: `import AsyncStorage from '[BLANK]';

const saveProfile = async (profile: Profile) => {
  await AsyncStorage.setItem('profile', JSON.stringify(profile));
};`,
        options: [
          "@react-native-async-storage/async-storage",
          "react-native-async-storage",
          "@expo/async-storage",
          "async-storage",
        ],
        correctAnswer: 0,
      },
      {
        id: "3-2-2",
        question: "Salvar dados no AsyncStorage:",
        code: `const saveProfile = async (profile: Profile) => {
  await AsyncStorage.[BLANK]('profile', JSON.stringify(profile));
};`,
        options: ["save", "setItem", "store", "put"],
        correctAnswer: 1,
      },
      {
        id: "3-2-3",
        question: "Converter objeto para JSON:",
        code: `await AsyncStorage.setItem(
  'profile',
  [BLANK](profile)
);`,
        options: ["JSON.parse", "JSON.stringify", "toString", "serialize"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "3-3",
    courseId: "3",
    title: "AsyncStorage - Leitura",
    description: "Recupere dados armazenados",
    order: 3,
    questions: [
      {
        id: "3-3-1",
        question: "Ler dados do AsyncStorage:",
        code: `const loadProfile = async () => {
  const data = await AsyncStorage.[BLANK]('profile');
  if (data) {
    setProfile(JSON.parse(data));
  }
};`,
        options: ["get", "getItem", "load", "read"],
        correctAnswer: 1,
      },
      {
        id: "3-3-2",
        question: "Converter JSON para objeto:",
        code: `const data = await AsyncStorage.getItem('profile');
if (data) {
  const profile = [BLANK](data);
  setProfile(profile);
}`,
        options: ["JSON.parse", "JSON.stringify", "parse", "fromJSON"],
        correctAnswer: 0,
      },
      {
        id: "3-3-3",
        question: "Carregar dados ao montar componente:",
        code: `[BLANK](() => {
  loadProfile();
}, []);`,
        options: ["useEffect", "useMount", "useCallback", "useMemo"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "3-4",
    courseId: "3",
    title: "Edição de Perfil",
    description: "Implemente formulário de edição",
    order: 4,
    questions: [
      {
        id: "3-4-1",
        question: "Input controlado com estado:",
        code: `<TextInput
  [BLANK]={name}
  onChangeText={setName}
  placeholder="Nome"
/>`,
        options: ["text", "value", "content", "input"],
        correctAnswer: 1,
      },
      {
        id: "3-4-2",
        question: "Input multiline para bio:",
        code: `<TextInput
  value={bio}
  onChangeText={setBio}
  [BLANK]
  numberOfLines={4}
/>`,
        options: ["multiline", "multiple", "textarea", "lines"],
        correctAnswer: 0,
      },
      {
        id: "3-4-3",
        question: "Salvar e navegar de volta:",
        code: `const handleSave = async () => {
  await saveProfile({ name, email, bio });
  router.[BLANK]();
};`,
        options: ["goBack", "back", "pop", "return"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "3-5",
    courseId: "3",
    title: "Service de Armazenamento",
    description: "Organize lógica de persistência",
    order: 5,
    questions: [
      {
        id: "3-5-1",
        question: "Estrutura do service:",
        code: `const PROFILE_KEY = '@merge_skills:profile';

[BLANK] const saveProfile = async (profile: Profile) => {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
};`,
        options: ["function", "export", "const", "async"],
        correctAnswer: 1,
      },
      {
        id: "3-5-2",
        question: "Função para remover perfil:",
        code: `export const deleteProfile = async () => {
  await AsyncStorage.[BLANK](PROFILE_KEY);
};`,
        options: ["delete", "removeItem", "remove", "clear"],
        correctAnswer: 1,
      },
      {
        id: "3-5-3",
        question: "Import do service:",
        code: `import { saveProfile, loadProfile } from '[BLANK]';

export default function EditProfile() {
  // usar funções do service
}`,
        options: [
          "@/services/profileStorage",
          "@/storage/profile",
          "@/utils/storage",
          "@/profile/service",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // CURSO 4: Sistema de Cursos
  {
    id: "4-1",
    courseId: "4",
    title: "Tipos de Cursos e Lições",
    description: "Defina estrutura de dados",
    order: 1,
    questions: [
      {
        id: "4-1-1",
        question: "Interface Course:",
        code: `export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  [BLANK]: string;
  totalLessons: number;
}`,
        options: ["color", "backgroundColor", "theme", "tint"],
        correctAnswer: 0,
      },
      {
        id: "4-1-2",
        question: "Array de questões na Lesson:",
        code: `export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  [BLANK]: Question[];
}`,
        options: ["questions", "items", "content", "data"],
        correctAnswer: 0,
      },
      {
        id: "4-1-3",
        question: "Tipo para resposta correta:",
        code: `export interface Question {
  id: string;
  question: string;
  code: string;
  options: string[];
  correctAnswer: [BLANK];
}`,
        options: ["number", "string", "boolean", "index"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "4-2",
    courseId: "4",
    title: "FlatList de Cursos",
    description: "Renderize lista otimizada",
    order: 2,
    questions: [
      {
        id: "4-2-1",
        question: "Componente de lista:",
        code: `import { [BLANK] } from 'react-native';

export default function Home() {
  return (
    <FlatList
      data={COURSES}
      renderItem={renderCourse}
    />
  );
}`,
        options: ["List", "FlatList", "ListView", "ScrollView"],
        correctAnswer: 1,
      },
      {
        id: "4-2-2",
        question: "Função renderItem:",
        code: `const renderCourse = ({ [BLANK] }: { item: Course }) => (
  <TouchableOpacity onPress={() => handlePress(item)}>
    <Card>{item.title}</Card>
  </TouchableOpacity>
);`,
        options: ["course", "item", "data", "element"],
        correctAnswer: 1,
      },
      {
        id: "4-2-3",
        question: "Key extractor:",
        code: `<FlatList
  data={COURSES}
  renderItem={renderCourse}
  [BLANK]={(item) => item.id}
/>`,
        options: ["key", "keyExtractor", "getKey", "itemKey"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "4-3",
    courseId: "4",
    title: "Filtrar Lições por Curso",
    description: "Use filter e find",
    order: 3,
    questions: [
      {
        id: "4-3-1",
        question: "Buscar curso por ID:",
        code: `const { id } = useLocalSearchParams();
const course = COURSES.[BLANK](c => c.id === id);`,
        options: ["filter", "find", "search", "get"],
        correctAnswer: 1,
      },
      {
        id: "4-3-2",
        question: "Filtrar lições do curso:",
        code: `const courseLessons = LESSONS
  .[BLANK](l => l.courseId === id)
  .sort((a, b) => a.order - b.order);`,
        options: ["find", "filter", "select", "where"],
        correctAnswer: 1,
      },
      {
        id: "4-3-3",
        question: "Ordenar por campo order:",
        code: `const courseLessons = LESSONS
  .filter(l => l.courseId === id)
  .[BLANK]((a, b) => a.order - b.order);`,
        options: ["orderBy", "sort", "sortBy", "order"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "4-4",
    courseId: "4",
    title: "Execução de Questões",
    description: "Implemente lógica de perguntas",
    order: 4,
    questions: [
      {
        id: "4-4-1",
        question: "Estado para questão atual:",
        code: `const [currentQuestionIndex, setCurrentQuestionIndex] = [BLANK](0);`,
        options: ["state", "useState", "createState", "useRef"],
        correctAnswer: 1,
      },
      {
        id: "4-4-2",
        question: "Verificar resposta:",
        code: `const handleCheckAnswer = () => {
  const correct = selectedOption === currentQuestion.[BLANK];
  setIsCorrect(correct);
};`,
        options: ["answer", "correctAnswer", "correct", "solution"],
        correctAnswer: 1,
      },
      {
        id: "4-4-3",
        question: "Dividir código por lacuna:",
        code: `currentQuestion.code.[BLANK]('[BLANK]').map((part, index) => (
  <Text key={index}>{part}</Text>
))`,
        options: ["divide", "split", "separate", "cut"],
        correctAnswer: 1,
      },
    ],
  },
];
