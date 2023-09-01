const projects = [
    {
        id: 0,
        title: "Catálogo de Filmes",
        description: "A página web apresenta uma coleção de filmes exibidos em uma grade. Os filmes são exibidos em cartões com informações como título, imagem e descrição. Na parte superior ou inferior da grade, existem botões 'Anterior' e 'Próximo' que permitem navegar pelos filmes um por um. Além disso, há um botão 'Aleatório' que direciona o usuário para um filme escolhido aleatoriamente da coleção. Os usuários podem explorar os filmes, visualizar suas informações e escolher aleatoriamente uma opção de entretenimento.",
        image: "./imgs/project1.png",
        linkPage: "https://alvarodavisantos.github.io/mudarfilmes/",
        linkRepository: "https://github.com/alvarodavisantos/mudarfilmes"
    },
    {
        id: 1,
        title: "Cores aleatórias",
        description: "A página web apresenta um botão central que, ao ser clicado, muda o plano de fundo da página para uma cor aleatória. Cada vez que o botão é pressionado, uma nova cor vibrante e variada aparece como plano de fundo. Além disso, a página exibe automaticamente o nome e a descrição da cor escolhida, oferecendo uma experiência interativa e visualmente estimulante para os usuários.",
        image: "./imgs/project2.png",
        linkPage: "https://alvarodavisantos.github.io/mudarcores/",
        linkRepository: "https://github.com/alvarodavisantos/mudarcores"
    },
    {
        id: 2,
        title: "Contador",
        description: "A página web exibe três botões de ação: um para aumentar, outro para diminuir e um terceiro para zerar um contador. Quando o número no contador é positivo, o botão de aumento fica verde; quando o número é zero, o botão de zerar fica preto; e quando o número é negativo, o botão de diminuir fica vermelho. Essa abordagem visual ajuda os usuários a identificar rapidamente o estado do contador e a executar a ação desejada.",
        image: "./imgs/project3.png",
        linkPage: "https://alvarodavisantos.github.io/contador/",
        linkRepository: "https://github.com/alvarodavisantos/contador"
    },
    {
        id: 3,
        title: "Horário de Ônibus",
        description: "Nesta aplicação PHP de gerenciamento de horários de ônibus, os administradores têm acesso a uma tela de login segura. Dentro do sistema, eles podem registrar novos horários de ônibus, incluindo informações como origem, destino, hora de partida e chegada, utilizando o MySQL como banco de dados para armazenar esses dados. Além disso, os administradores têm a flexibilidade de editar os horários existentes conforme necessário.",
        image: "./imgs/project4.gif",
        linkPage: "https://alvarodavisantos.github.io/cadastro-onibus/index.php",
        linkRepository: "https://github.com/alvarodavisantos/cadastro-onibus"
    }
];

numProject = 0;
const imageProject = document.getElementById('imageProject');
const descProject = document.getElementById('descProject');
const titleProject = document.getElementById('titleProject');
const linkPageProject = document.getElementById('linkPageProject');
const linkRepositoryProject = document.getElementById('linkRepositoryProject');
console.log("Valor de imagem: ");
console.log(imageProject);

function changeProject(){
    const item = projects[numProject];
    imageProject.src = item.image;
    descProject.textContent = item.description;
    titleProject.textContent = item.title;
    linkPageProject.href = item.linkPage;
    linkRepositoryProject.href = item.linkRepository;
}

function prevProject() {
    numProject--;
    if(numProject < 0){
        numProject = projects.length-1;
    }
    changeProject();
}

function nextProject() {
    numProject++;
    if(numProject > projects.length-1){
        numProject = 0;
    }
    changeProject();
}
