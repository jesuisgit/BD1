const perguntas = [
  {
    pergunta: "Quem desenvolveu o modelo de banco de dados relacional?",
    opcoes: ["Peter Chen", "Donald Chamberlin", "Edgar F. Codd", "Raymond Boyce"],
    resposta: 2,
    explicacao: "Edgar F. Codd propôs o modelo relacional, base teórica dos bancos de dados modernos."
  },
  {
    pergunta: "O que são metadados?",
    opcoes: [
      "Dados que não foram utilizados",
      "Dados sobre dados",
      "Dados de redes sociais",
      "Informações irrelevantes"
    ],
    resposta: 1,
    explicacao: "Metadados são dados que descrevem outros dados, como estrutura e significado."
  },
  {
    pergunta: "Qual modelo de banco possui estrutura de árvore?",
    opcoes: ["Relacional", "Hierárquico", "Rede", "Orientado a Objeto"],
    resposta: 1,
    explicacao: "O modelo hierárquico organiza os dados em forma de árvore (pai-filho)."
  },
  {
    pergunta: "O que representa o nível conceitual no Three-schema?",
    opcoes: [
      "Representação física",
      "Visões externas do banco",
      "Abstração lógica dos dados",
      "Implementação em SQL"
    ],
    resposta: 2,
    explicacao: "É onde se define o modelo lógico do banco, independente da tecnologia usada."
  },
  {
    pergunta: "Qual propriedade garante que uma transação completa todas suas ações ou nenhuma?",
    opcoes: ["Consistência", "Atomicidade", "Durabilidade", "Isolamento"],
    resposta: 1,
    explicacao: "Atomicidade garante que a transação é indivisível: ou tudo ocorre, ou nada."
  },
  {
    pergunta: "Qual conceito representa a parte do mundo real que se deseja modelar?",
    opcoes: ["Modelo Físico", "Mini-Mundo", "Transação", "Entidade"],
    resposta: 1,
    explicacao: "Mini-mundo representa o recorte da realidade a ser modelado no banco."
  },
  {
    pergunta: "Quem criou o Modelo Entidade-Relacionamento?",
    opcoes: ["Edgar F. Codd", "Peter Chen", "Donald Chamberlin", "Raymond Boyce"],
    resposta: 1,
    explicacao: "Peter Chen propôs o modelo E-R para modelagem conceitual de dados."
  },
  {
    pergunta: "Qual é a função do modelo lógico em um banco de dados?",
    opcoes: [
      "Criar o código SQL",
      "Organizar fisicamente os dados",
      "Representar as entidades e relacionamentos graficamente",
      "Transformar o modelo conceitual para tabelas e chaves"
    ],
    resposta: 3,
    explicacao: "No modelo lógico, definimos tabelas, chaves primárias e estrangeiras."
  },
  {
    pergunta: "Qual é a definição correta de 'Informação'?",
    opcoes: [
      "Dado irrelevante",
      "Dado ordenado e contextualizado",
      "Registro de backup",
      "Conteúdo metadado"
    ],
    resposta: 1,
    explicacao: "Informação é dado com significado no contexto certo."
  },
  {
    pergunta: "Qual nível da arquitetura de banco de dados representa o armazenamento físico?",
    opcoes: ["Externo", "Conceitual", "Interno", "Relacional"],
    resposta: 2,
    explicacao: "O nível interno lida com como os dados são realmente armazenados."
  },
  {
    pergunta: "A propriedade ACID que garante que os dados não se perdem após um commit é:",
    opcoes: ["Isolamento", "Consistência", "Atomicidade", "Durabilidade"],
    resposta: 3,
    explicacao: "Durabilidade assegura que os dados persistem após uma transação bem-sucedida."
  },
  {
    pergunta: "Qual modelo trata os dados como objetos com métodos e atributos?",
    opcoes: ["Relacional", "Hierárquico", "Orientado a Objeto", "Modelo Lógico"],
    resposta: 2,
    explicacao: "O modelo orientado a objetos trata dados como instâncias de classes com métodos."
  },
  {
    pergunta: "Em qual nível da arquitetura ANSI um usuário tem diferentes visões dos dados?",
    opcoes: ["Interno", "Conceitual", "Físico", "Externo"],
    resposta: 3,
    explicacao: "No nível externo, usuários têm visões personalizadas dos dados."
  },
  {
    pergunta: "O atributo que identifica de forma única uma entidade é chamado de:",
    opcoes: ["Multivalorado", "Chave", "Derivado", "Composto"],
    resposta: 1,
    explicacao: "Uma chave (como CPF) identifica unicamente uma ocorrência de entidade."
  },
  {
    pergunta: "Qual das opções representa um atributo derivado?",
    opcoes: ["ID", "Nome", "Idade calculada pela data de nascimento", "CPF"],
    resposta: 2,
    explicacao: "Idade pode ser derivada a partir da data de nascimento."
  },
  {
    pergunta: "Qual alternativa apresenta somente modelos de banco de dados válidos?",
    opcoes: [
      "Hierárquico, Rede, Orientado a Objeto, Relacional",
      "Procedural, Relacional, Rede",
      "Hierárquico, Procedural, Relacional",
      "Objeto, Visual, Relacional"
    ],
    resposta: 0,
    explicacao: "Esses são os principais modelos aceitos de banco de dados."
  },
  {
    pergunta: "O que representa a especialização em um MER?",
    opcoes: [
      "Um relacionamento ternário",
      "A união de entidades",
      "Entidades-filhas herdando atributos da entidade-pai",
      "A criação de atributos compostos"
    ],
    resposta: 2,
    explicacao: "Especialização cria subclasses a partir de uma entidade genérica."
  },
  {
    pergunta: "A cardinalidade 1:N significa:",
    opcoes: [
      "Uma entidade se relaciona com uma ou nenhuma",
      "Uma entidade se relaciona com várias, e vice-versa",
      "Uma se relaciona com muitas, mas a outra com uma só",
      "Muitas com muitas"
    ],
    resposta: 2,
    explicacao: "1:N indica que um elemento se relaciona com muitos, mas não o contrário."
  },
  {
    pergunta: "Qual propriedade ACID impede que uma transação interfira em outra?",
    opcoes: ["Atomicidade", "Isolamento", "Durabilidade", "Consistência"],
    resposta: 1,
    explicacao: "Isolamento garante que as transações não afetem umas às outras."
  },
  {
    pergunta: "Qual linguagem foi renomeada para SQL?",
    opcoes: ["MER", "SEQUEL", "DBLang", "QBE"],
    resposta: 1,
    explicacao: "A linguagem SEQUEL foi renomeada para SQL."
  }
];

function carregarQuiz() {
  const form = document.getElementById("quizForm");
  perguntas.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.id = `pergunta-${index}`;
    div.innerHTML = `<p><strong>${index + 1}.</strong> ${q.pergunta}</p>` +
      q.opcoes.map((opcao, i) => 
        `<label><input type="radio" name="q${index}" value="${i}"/> ${opcao}</label><br/>`
      ).join('');
    form.appendChild(div);
  });
}

function corrigir() {
  let acertos = 0;
  perguntas.forEach((q, index) => {
    const marcada = document.querySelector(`input[name=q${index}]:checked`);
    const divPergunta = document.getElementById(`pergunta-${index}`);
    divPergunta.classList.remove("correta", "errada");

    // Remove explicações antigas
    const oldExplicacao = divPergunta.querySelector(".explicacao");
    if (oldExplicacao) oldExplicacao.remove();

    if (marcada) {
      if (parseInt(marcada.value) === q.resposta) {
        acertos++;
        divPergunta.classList.add("correta");
      } else {
        divPergunta.classList.add("errada");
        const explic = document.createElement("div");
        explic.className = "explicacao";
        explic.innerText = `Resposta correta: ${q.opcoes[q.resposta]} — ${q.explicacao}`;
        divPergunta.appendChild(explic);
      }
    } else {
      divPergunta.classList.add("errada");
      const explic = document.createElement("div");
      explic.className = "explicacao";
      explic.innerText = `Você não respondeu. Resposta correta: ${q.opcoes[q.resposta]} — ${q.explicacao}`;
      divPergunta.appendChild(explic);
    }
  });

  document.getElementById("resultado").innerText = `Você acertou ${acertos} de ${perguntas.length} questões.`;
}

carregarQuiz();
