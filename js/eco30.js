const eco30Challenges = [
  {
    title: "Evite utilizar plásticos descartáveis.",
    info: "O plástico descartável leva centenas de anos para se decompor e causa sérios danos ao meio ambiente, principalmente aos oceanos e à vida marinha.",
  },
  {
    title: "Leve sua própria garrafa de água reutilizável.",
    info: "Reduzir o uso de garrafas plásticas diminui o volume de resíduos e incentiva hábitos mais conscientes no dia a dia.",
  },
  {
    title: "Apague as luzes ao sair de um cômodo.",
    info: "Pequenas atitudes com energia geram economia e ajudam a reduzir impactos ambientais a longo prazo.",
  },
  {
    title: "Separe corretamente o lixo reciclável.",
    info: "A separação correta facilita a reciclagem e evita que materiais reaproveitáveis sejam descartados de forma inadequada.",
  },
  {
    title: "Tome um banho 5 minutos mais curto.",
    info: "Reduzir o tempo de banho ajuda a economizar água e energia ao mesmo tempo.",
  },
  {
    title: "Evite imprimir algo desnecessário hoje.",
    info: "Menos papel significa menos desperdício de recursos naturais e menos resíduos.",
  },
  {
    title: "Desligue aparelhos da tomada quando não estiver usando.",
    info: "Mesmo em stand-by, muitos aparelhos continuam consumindo energia.",
  },
  {
    title: "Reutilize uma sacola em vez de pegar outra.",
    info: "Sacolas reutilizáveis reduzem bastante o descarte de materiais plásticos no cotidiano.",
  },
  {
    title: "Escolha ir a pé em um trajeto curto.",
    info: "Caminhar reduz emissões e ainda traz benefícios para a sua saúde.",
  },
  {
    title: "Evite desperdício de comida nas refeições.",
    info: "Planejar melhor as porções ajuda a reduzir lixo orgânico e aproveita melhor os alimentos.",
  },
  {
    title: "Use os dois lados de uma folha.",
    info: "Essa prática simples prolonga o uso do papel e reduz consumo desnecessário.",
  },
  {
    title: "Separe uma roupa para doar.",
    info: "Doar prolonga a vida útil de peças e incentiva o consumo mais consciente.",
  },
  {
    title: "Descarte pilhas e baterias no local correto.",
    info: "O descarte correto evita contaminação do solo e da água por materiais tóxicos.",
  },
  {
    title: "Prefira alimentos com menos embalagens.",
    info: "Menos embalagens significam menos resíduos e menor impacto ambiental.",
  },
  {
    title: "Abra a janela antes de ligar ventilador ou ar-condicionado.",
    info: "A ventilação natural pode reduzir o uso de energia em vários momentos do dia.",
  },
  {
    title: "Aproveite melhor a luz natural hoje.",
    info: "Usar a iluminação natural reduz consumo elétrico e deixa o ambiente mais agradável.",
  },
  {
    title: "Evite jogar óleo de cozinha no ralo.",
    info: "O descarte inadequado do óleo pode contaminar grandes volumes de água.",
  },
  {
    title: "Reaproveite um pote ou embalagem em casa.",
    info: "Reutilizar embalagens ajuda a diminuir o descarte e prolonga a utilidade dos materiais.",
  },
  {
    title: "Organize um pequeno ponto de reciclagem em casa.",
    info: "Facilitar a separação dos resíduos aumenta as chances de reciclagem correta.",
  },
  {
    title: "Use menos papel-toalha ou guardanapos descartáveis.",
    info: "Trocar descartáveis por opções reutilizáveis reduz resíduos no dia a dia.",
  },
  {
    title: "Verifique se há vazamentos de água em casa.",
    info: "Pequenos vazamentos podem causar grande desperdício ao longo do tempo.",
  },
  {
    title: "Dê preferência a produtos locais.",
    info: "Consumir localmente pode reduzir impactos de transporte e fortalecer pequenos produtores.",
  },
  {
    title: "Descarte corretamente eletrônicos antigos.",
    info: "O lixo eletrônico precisa de tratamento especial para evitar danos ambientais.",
  },
  {
    title: "Evite abrir a geladeira sem necessidade.",
    info: "Abrir a geladeira muitas vezes ao dia aumenta o consumo de energia.",
  },
  {
    title: "Reutilize água para uma tarefa simples.",
    info: "Quando feito com cuidado, o reaproveitamento pode ajudar em limpezas e regas.",
  },
  {
    title: "Prefira caneca ou copo reutilizável.",
    info: "Trocar descartáveis por itens duráveis reduz bastante a geração de resíduos.",
  },
  {
    title: "Separe tampinhas ou materiais pequenos para reciclagem.",
    info: "Pequenas separações também fazem diferença quando viram hábito.",
  },
  {
    title: "Doe ou compartilhe um objeto que não usa mais.",
    info: "Repassar um item útil evita descarte precoce e incentiva o reaproveitamento.",
  },
  {
    title: "Converse com alguém sobre uma atitude sustentável.",
    info: "Compartilhar boas práticas ajuda a multiplicar impactos positivos.",
  },
  {
    title: "Planeje manter um novo hábito sustentável após o Eco30.",
    info: "O objetivo final do desafio é transformar pequenas ações em hábitos duradouros.",
  },
];

const state = {
  started: false,
  completed: 0,
  maxChallenges: 30,
};

const heroProgressFill = document.getElementById("heroProgressFill");
const joinChallengeButton = document.getElementById("joinChallengeButton");
const completeChallengeButton = document.getElementById(
  "completeChallengeButton",
);
const currentChallengeTitle = document.getElementById("currentChallengeTitle");
const challengeFeedbackBox = document.getElementById("challengeFeedbackBox");
const challengeFeedbackText = document.getElementById("challengeFeedbackText");
const impactCount = document.getElementById("impactCount");
const impactTitle = document.getElementById("impactTitle");
const impactDescription = document.getElementById("impactDescription");
const streakText = document.getElementById("streakText");
const streakBadge = document.getElementById("streakBadge");
const journeyLineFill = document.getElementById("journeyLineFill");
const journeyStepStart = document.getElementById("journeyStepStart");
const journeyStepStartText = document.getElementById("journeyStepStartText");
const journeyStepEnd = document.getElementById("journeyStepEnd");
const calendarGrid = document.getElementById("calendarGrid");
const heroProgress = document.querySelector(".eco30-hero__progress");

function getProgressPercentage() {
  return (state.completed / state.maxChallenges) * 100;
}

function getCurrentChallenge() {
  const index = Math.min(state.completed, eco30Challenges.length - 1);
  return eco30Challenges[index];
}

function updateHero() {
  const progress = getProgressPercentage();

  heroProgressFill.style.width = `${progress}%`;
  heroProgress.setAttribute("aria-valuenow", String(state.completed));

  if (!state.started) {
    joinChallengeButton.textContent = "Participar";
    return;
  }

  if (state.completed >= state.maxChallenges) {
    joinChallengeButton.textContent = "Desafio finalizado";
    return;
  }

  joinChallengeButton.textContent = "Participando";
}

function updateJourney() {
  const hasCompletedAny = state.completed > 0;
  const isFinished = state.completed >= state.maxChallenges;

  journeyLineFill.style.width = hasCompletedAny ? "100%" : "0%";

  journeyStepStart.classList.toggle("journey__step--done", hasCompletedAny);
  journeyStepStart.classList.toggle("journey__step--active", !hasCompletedAny);
  journeyStepStartText.textContent = hasCompletedAny ? "✓" : "1";

  journeyStepEnd.classList.toggle("journey__step--done", isFinished);

  streakBadge.classList.toggle("journey__badge--active", hasCompletedAny);

  if (state.completed === 0) {
    streakText.textContent = "0 dias consecutivos";
    return;
  }

  if (state.completed === 1) {
    streakText.textContent = "1 dia consecutivo";
    return;
  }

  streakText.textContent = `${state.completed} dias consecutivos`;
}

function updateChallengeCard() {
  const challenge = getCurrentChallenge();
  const isFinished = state.completed >= state.maxChallenges;

  if (isFinished) {
    currentChallengeTitle.textContent =
      "Parabéns! Você concluiu o Desafio Eco30.";
    challengeFeedbackText.textContent =
      "Seu compromisso com pequenas ações mostra que mudanças consistentes podem gerar um planeta melhor.";
    challengeFeedbackBox.classList.add("challenge-card__info--success");

    completeChallengeButton.textContent = "30 desafios concluídos";
    completeChallengeButton.classList.add("challenge-card__button--done");
    return;
  }

  currentChallengeTitle.textContent = challenge.title;

  if (state.completed === 0) {
    challengeFeedbackText.textContent = challenge.info;
    challengeFeedbackBox.classList.remove("challenge-card__info--success");
    completeChallengeButton.textContent = "Marcar como concluído";
    completeChallengeButton.classList.remove("challenge-card__button--done");
    return;
  }

  challengeFeedbackText.textContent =
    "Parabéns! Você concluiu um desafio hoje e deu mais um passo para um planeta melhor.";
  challengeFeedbackBox.classList.add("challenge-card__info--success");
  completeChallengeButton.textContent = "Desafio concluído";
  completeChallengeButton.classList.add("challenge-card__button--done");
}

function updateImpactCard() {
  impactCount.textContent = state.completed;

  if (state.completed === 0) {
    impactTitle.textContent = "Você ainda não começou sua jornada sustentável.";
    impactDescription.textContent =
      "Complete seus primeiros desafios e acompanhe seu impacto aqui.";
    return;
  }

  if (state.completed < 10) {
    impactTitle.textContent = `${state.completed} ação sustentável realizada${state.completed > 1 ? "s" : ""}`;
    impactDescription.textContent =
      "Cada pequena atitude reduz desperdícios e fortalece hábitos mais conscientes.";
    return;
  }

  if (state.completed < 20) {
    impactTitle.textContent =
      "Seu novo hábito sustentável está ganhando força.";
    impactDescription.textContent =
      "Sua constância já mostra um impacto positivo no seu cotidiano e no meio ambiente.";
    return;
  }

  if (state.completed < 30) {
    impactTitle.textContent = "Você está muito perto de completar o Eco30.";
    impactDescription.textContent =
      "Seu progresso mostra disciplina, consciência ambiental e evolução real de hábitos.";
    return;
  }

  impactTitle.textContent = "Missão concluída com sucesso.";
  impactDescription.textContent =
    "Você completou os 30 desafios e provou que pequenas ações geram grandes impactos.";
}

function createCalendarDay(content = "", className = "") {
  const day = document.createElement("div");
  day.className = `calendar-card__day ${className}`.trim();
  day.textContent = content;
  return day;
}

function renderCalendar() {
  calendarGrid.innerHTML = "";

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = now.getDate();

  for (let i = 0; i < firstDay; i += 1) {
    calendarGrid.appendChild(
      createCalendarDay("", "calendar-card__day--empty"),
    );
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const dayElement = createCalendarDay(day);

    if (day <= state.completed) {
      dayElement.classList.add("calendar-card__day--done");
    }

    if (day === today) {
      dayElement.classList.add("calendar-card__day--today");
    }

    calendarGrid.appendChild(dayElement);
  }
}

function renderAll() {
  updateHero();
  updateJourney();
  updateChallengeCard();
  updateImpactCard();
  renderCalendar();
}

joinChallengeButton.addEventListener("click", () => {
  state.started = true;
  renderAll();
});

completeChallengeButton.addEventListener("click", () => {
  state.started = true;

  if (state.completed < state.maxChallenges) {
    state.completed += 1;
  }

  renderAll();
});

renderAll();
