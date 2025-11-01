// --- PASSO 1: Sua lista de rolês ---
// (Exatamente igual a antes, com ou sem as imagens específicas)
const allPlaces = [
    { nome: "Balsa Bar", tipo: "bares", endereco: "Rua Capitão Salomão, 26 - 4º andar, República", link: "Instagram @balsabar", imagem: "balsa_bar.jpg" },
    { nome: "Bar Cecília Embriagada", tipo: "bares", endereco: "Rua Barão de Tatuí, 115, Santa Cecília", link: "Instagram @ceciliaembriagada" },
    { nome: "Bar dos Arcos", tipo: "bares", endereco: "Praça Ramos de Azevedo, s/n (Subsolo do Theatro Municipal), República", link: "Site Oficial", imagem: "bar_dos_arcos.jpg" },
    { nome: "Bar Trópico", tipo: "bares", endereco: "Rua Major Sertório, 114, República", link: "Instagram @tropico.sp" },
    { nome: "Aska Lamen", tipo: "restaurantes", endereco: "Rua Barão de Iguape, 260, Liberdade", link: "(Não possui site/insta oficial)", imagem: "aska_lamen.jpg" },
    { nome: "Bosco", tipo: "restaurantes", endereco: "Rua João Moura, 976, Pinheiros", link: "Instagram @bosco.sp" },
    { nome: "CCBB", tipo: "cultura", endereco: "Rua Álvares Penteado, 112, Centro Histórico", link: "Site Oficial", imagem: "ccbb.jpg" },
    { nome: "Cine Sala", tipo: "cultura", endereco: "Rua Fradique Coutinho, 361, Pinheiros", link: "Site Oficial" },
    // Endereço "genérico", não deve mostrar o botão do Maps:
    { nome: "Jardim Botânico SP", tipo: "passeios", endereco: "Vila Água Funda", link: "Site Oficial", imagem: "jardim_botanico_sp.jpg" }
    // (Sua lista completa entra aqui)
];


// --- PASSO 2: Pegar os elementos do HTML ---
const spinButton = document.getElementById("spinButton");
const categoryFilter = document.getElementById("categoryFilter");
const loadingText = document.getElementById("loading-text");
const resultCard = document.getElementById("result-card");
const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultAddress = document.getElementById("result-address");
// Pegamos os DOIS botões
const resultLink = document.getElementById("result-link");
const resultMapsLink = document.getElementById("result-maps-link"); // <-- NOVO


// --- PASSO 3: Função Auxiliar para formatar os Links ---
// (Exatamente igual a antes)
function formatLink(linkText, placeName) {
    if (!linkText || linkText.includes("Não possui")) {
        return { href: "#", text: "Não possui link", visible: false };
    }
    if (linkText.startsWith("Instagram @")) {
        const username = linkText.split("@")[1];
        return { href: `https://instagram.com/${username}`, text: "Ver no Instagram", visible: true };
    }
    if (linkText === "Site Oficial" || linkText === "Site da Prefeitura") {
        const query = encodeURIComponent(`${placeName} site oficial`);
        return { href: `https://www.google.com/search?q=${query}`, text: "Buscar Site Oficial", visible: true };
    }
    if (linkText === "Link iFood") {
        const query = encodeURIComponent(`${placeName} ifood`);
        return { href: `https://www.google.com/search?q=${query}`, text: "Buscar no iFood", visible: true };
    }
    if (linkText.startsWith("http")) {
         return { href: linkText, text: "Ver site", visible: true };
    }
    return { href: "#", text: "Link indisponível", visible: false };
}


// --- PASSO 4: Criar a função de sorteio (atualizada) ---
function spinTheWheel() {
    
    // 1. Filtrar a lista (igual a antes)
    const selectedCategory = categoryFilter.value;
    let filteredList;
    if (selectedCategory === "todos") {
        filteredList = allPlaces;
    } else {
        filteredList = allPlaces.filter(place => place.tipo === selectedCategory);
    }
    if (filteredList.length === 0) {
        loadingText.innerText = "Oops! Nenhum item nessa categoria.";
        resultCard.style.display = "none";
        return;
    }

    // 2. Sortear o local (igual a antes)
    const randomIndex = Math.floor(Math.random() * filteredList.length);
    const chosenPlace = filteredList[randomIndex];

    // 3. Animação de Sorteio (igual a antes)
    spinButton.disabled = true;
    resultCard.style.display = "none";
    loadingText.style.display = "block";
    loadingText.innerText = "Sorteando...";
    let shuffleInterval = setInterval(() => {
        const tempIndex = Math.floor(Math.random() * filteredList.length);
        loadingText.innerText = filteredList[tempIndex].nome;
    }, 100);

    // 4. Parar a animação e mostrar o resultado
    setTimeout(() => {
        clearInterval(shuffleInterval);
        
        // 5. Preencher o Card
        
        // Preenche Imagem (com lógica da categoria)
        let imageUrl;
        if (chosenPlace.imagem) {
            imageUrl = `imagens/${chosenPlace.imagem}`;
        } else {
            imageUrl = `imagens/categoria_${chosenPlace.tipo}.jpg`;
        }
        resultImage.src = imageUrl;
        resultImage.alt = `Foto de ${chosenPlace.nome}`;
        resultImage.onerror = () => { resultImage.src = 'imagens/categoria_default.jpg'; };

        // Preenche Nome e Endereço
        resultName.innerText = chosenPlace.nome;
        resultAddress.innerText = chosenPlace.endereco;


        // --- ★★★ NOVIDADE AQUI ★★★ ---
        // LÓGICA DO BOTÃO DO GOOGLE MAPS

        // Verificamos se o endereço existe E se contém uma vírgula (sinal de um endereço específico)
        if (chosenPlace.endereco && chosenPlace.endereco.includes(',')) {
            // Codifica o endereço para ser usado em uma URL
            const mapsQuery = encodeURIComponent(chosenPlace.endereco);
            resultMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
            resultMapsLink.style.display = "inline-block"; // Mostra o botão
        } else {
            // Se não tiver endereço, esconde o botão
            resultMapsLink.style.display = "none";
        }

        // LÓGICA DO BOTÃO SITE/INSTA (igual a antes)
        const linkInfo = formatLink(chosenPlace.link, chosenPlace.nome);
        if (linkInfo.visible) {
            resultLink.href = linkInfo.href;
            resultLink.innerText = linkInfo.text;
            resultLink.style.display = "inline-block";
        } else {
            resultLink.style.display = "none";
        }
        // --- FIM DA NOVIDADE ---


        // 6. Mostrar o Card (igual a antes)
        loadingText.style.display = "none";
        resultCard.style.display = "block";
        spinButton.disabled = false;

    }, 2000); // 2 segundos de animação
}

// --- PASSO 5: Dizer ao botão para "ouvir" o clique ---
spinButton.addEventListener("click", spinTheWheel);