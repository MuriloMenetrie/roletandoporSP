const allPlaces = [
    // BARES E NOITE (16 Itens)
    { nome: "Balsa Bar", tipo: "bares", endereco: "Rua Capitão Salomão, 26 - 4º andar, República", link: "Instagram @balsabar" },
    { nome: "Bar Cecília Embriagada", tipo: "bares", endereco: "Rua Barão de Tatuí, 115, Santa Cecília", link: "Instagram @ceciliaembriagada" },
    { nome: "Bar dos Arcos", tipo: "bares", endereco: "Praça Ramos de Azevedo, s/n (Subsolo do Theatro Municipal), República", link: "Site Oficial" },
    { nome: "Bar Trópico", tipo: "bares", endereco: "Rua Major Sertório, 114, República", link: "Instagram @tropico.sp" },
    { nome: "Bário Bar", tipo: "bares", endereco: "Unidade Pinheiros: Rua dos Coropés, 41Unidade Tatuapé: Rua Euclides Pacheco, 880", link: "Site Oficial" },
    { nome: "Caracol Bar", tipo: "bares", endereco: "Rua Boracéa, 160, Barra Funda", link: "Instagram @caracolbar" },
    { nome: "Caso Bar", tipo: "bares", endereco: "Rua Marcos Azevedo, 66, Pinheiros", link: "Instagram @caso.bar" },
    { nome: "Cava Bar", tipo: "bares", endereco: "Rua Batataes, 176, Jardim Paulista", link: "Instagram @cavabarsp" },
    { nome: "Clube Outs", tipo: "bares", endereco: "Rua Augusta, 486, Consolação", link: "Instagram @clubeouts" },
    { nome: "Gula Bar", tipo: "bares", endereco: "Av. Almirante Delamare, 592, Cidade Nova Heliópolis", link: "Site Oficial" },
    { nome: "Lágrima Bar", tipo: "bares", endereco: "Rua Major Sertório, 95, República", link: "Instagram @lagrima.bar" },
    { nome: "Love Cabaret", tipo: "bares", endereco: "Rua Araújo, 232, República", link: "Site Oficial" },
    { nome: "Lote SP", tipo: "bares", endereco: "Rua Padre João Gonçalves, 80, Pinheiros", link: "Instagram @lote.sp" },
    { nome: "Picco", tipo: "bares", endereco: "Rua Lisboa, 294, Pinheiros", link: "Instagram @opicco" },
    { nome: "The Raven Music Bar", tipo: "bares", endereco: "Rua Wisard, 149, Vila Madalena", link: "Instagram @theravenmusicbar" },
    { nome: "Varal Bar", tipo: "bares", endereco: "Rua Artur de Azevedo, 636, Pinheiros", link: "Instagram @varal____" },

    // RESTAURANTES E LANCHES (23 Itens)
    { nome: "Aska Lamen", tipo: "restaurantes", endereco: "Rua Barão de Iguape, 260, Liberdade", link: "(Não possui site/insta oficial)" },
    { nome: "Bosco", tipo: "restaurantes", endereco: "Rua João Moura, 976, Pinheiros", link: "Instagram @bosco.sp" },
    { nome: "Brim", tipo: "restaurantes", endereco: "Av. São Luís, 84, República", link: "Instagram @brim.sp" },
    { nome: "Buona Fatia Pizza Bar", tipo: "restaurantes", endereco: "Rua Conselheiro Carrão, 468, Bela Vista", link: "Instagram @buona.fatia" },
    { nome: "Buzina Burgers", tipo: "restaurantes", endereco: "Rua Padre Carvalho, 30, Pinheiros", link: "Site Oficial" },
    { nome: "Cadillac Burger", tipo: "restaurantes", endereco: "Rua Juventus, 296, Mooca", link: "Site Oficial" },
    { nome: "Cannelle Healthy Co.", tipo: "restaurantes", endereco: "Rua Doutor Sodré, 184, Vila Nova Conceição", link: "Instagram @cannelle.healthy" },
    { nome: "Choribar", tipo: "restaurantes", endereco: "Rua dos Pinheiros, (várias unidades)", link: "Instagram @choribar.br" },
    { nome: "Da Mooca Pizza Shop", tipo: "restaurantes", endereco: "Rua Fradique Coutinho, 154, Pinheiros", link: "Instagram @damoocapizzashop" },
    { nome: "Ebisu Bento", tipo: "restaurantes", endereco: "Rua Primeiro de Janeiro, 165, Vila Clementino", link: "Instagram @ebisubentosp" },
    { nome: "Futuro Refeitório", tipo: "restaurantes", endereco: "Rua Cônego Eugênio Leite, 808", link: "Site Oficial" },
    { nome: "GrindHouse", tipo: "restaurantes", endereco: "(Não encontrado. Pode ter fechado.)", link: "" },
    { nome: "Jota Hambúrgueres", tipo: "restaurantes", endereco: "Av. Paulista, (várias unidades)", link: "Instagram @jotahamburgueres" },
    { nome: "JQJO RAMEN", tipo: "restaurantes", endereco: "Rua Doutor Rafael de Barros, 262, Paraíso", link: "Instagram @jqjo_ramen" },
    { nome: "La Baguette", tipo: "restaurantes", endereco: "Av. São Luís, 187 - Galeria Metrópole, Piso 2", link: "Instagram @labaguette.oficial" },
    { nome: "La Boulange", tipo: "restaurantes", endereco: "(Muitas unidades)", link: "Site Oficial" },
    { nome: "La Braciera", tipo: "restaurantes", endereco: "Jardins: Alameda Lorena, 1040 (e outras unidades)", link: "Site Oficial" },
    { nome: "Matilda Lanches", tipo: "restaurantes", endereco: "Rua dos Pinheiros, (várias unidades)", link: "Instagram @matildalanches" },
    { nome: "Prego Único", tipo: "restaurantes", endereco: "Rua Baluarte, 538, Itaim Bibi", link: "Instagram @pregounico" },
    { nome: "Restaurante Carpaccio", tipo: "restaurantes", endereco: "Rua Jerônimo da Veiga, 382, Itaim Bibi", link: "Instagram @ilcarpacciorestaurante" },
    { nome: "Taqueria Atzi", tipo: "restaurantes", endereco: "Rua Mourato Coelho, 1233, Pinheiros", link: "Instagram @taqueria_atzi" },
    { nome: "Vitos Pizza", tipo: "restaurantes", endereco: "(Não encontrado na R. Oscar Freire)", link: "" },
    { nome: "Zingo e Ringo", tipo: "restaurantes", endereco: "Rua dos Pinheiros, (várias unidades)", link: "Instagram @zingoeringo" },

    // CAFETERIAS E DOCES (6 Itens)
    { nome: "Braserito", tipo: "cafeterias", endereco: "Rua Lisboa, 346, Pinheiros", link: "Instagram @braserito.sp" },
    { nome: "Café com Fé (Ca com Fé)", tipo: "cafeterias", endereco: "Rua Fabia, 312, Vila Romana", link: "Site Oficial" },
    { nome: "Cafeteria Coffee Jones", tipo: "cafeterias", endereco: "São Caetano do Sul", link: "Link iFood" },
    { nome: "Cafeteria Selva de Pedra", tipo: "cafeterias", endereco: "República", link: "" },
    { nome: "Gato Pingado", tipo: "cafeterias", endereco: "Pinheiros: Rua João Moura, 607 Jardins: Rua Pamplona, 1537", link: "Site Oficial" },
    { nome: "OOEY COOKIE", tipo: "cafeterias", endereco: "Rua dos Pinheiros, (várias unidades)", link: "Instagram @ooeycookie" },

    // MUSEUS E CULTURA (16 Itens)
    { nome: "Biblioteca Mário de Andrade", tipo: "cultura", endereco: "Rua da Consolação, 94, República", link: "Site Oficial" },
    { nome: "Casa Bradesco", tipo: "cultura", endereco: "Alameda Rio Claro, 190 (Cidade Matarazzo), Bela Vista", link: "Site Oficial" },
    { nome: "Casa de Boia", tipo: "cultura", endereco: "Rua Florêncio de Abreu, 123, Centro", link: "Site Oficial" },
    { nome: "Casa Ema Klabin", tipo: "cultura", endereco: "Rua Portugal, 43, Jardim Europa", link: "Site Oficial" },
    { nome: "Casa de Vidro Lina Bo Bardi", tipo: "cultura", endereco: "Rua General Almério de Moura, 200, Morumbi", link: "Site Oficial" },
    { nome: "CCBB (Centro Cultural Banco do Brasil)", tipo: "cultura", endereco: "Rua Álvares Penteado, 112, Centro Histórico", link: "Site Oficial" },
    { nome: "Cinemateca Brasileira", tipo: "cultura", endereco: "Largo Senador Raul Cardoso, 207, Vila Mariana", link: "Site Oficial" },
    { nome: "Cine Sala", tipo: "cultura", endereco: "Rua Fradique Coutinho, 361, Pinheiros", link: "Site Oficial" },
    { nome: "Museu Afro Brasil", tipo: "cultura", endereco: "Av. Pedro Álvares Cabral, s/n - Portão 10 (Parque Ibirapuera)", link: "Site Oficial" },
    { nome: "Museu Catavento", tipo: "cultura", endereco: "Av. Mercúrio, s/n - Parque Dom Pedro II, Centro", link: "Site Oficial" },
    { nome: "Museu das Favelas", tipo: "cultura", endereco: "Rua Guaianases, 1024 (Palácio dos Campos Elíseos), Campos Elíseos", link: "Site Oficial" },
    { nome: "Museu de Zoologia USP", tipo: "cultura", endereco: "Av. Nazaré, 481, Ipiranga", link: "Site Oficial" },
    { nome: "Sala São Paulo", tipo: "cultura", endereco: "Praça Júlio Prestes, 16, Campos Elíseos", link: "Site Oficial" },
    { nome: "Sebo Pura Poesia", tipo: "cultura", endereco: "Rua Costa Aguiar, 1112, Ipiranga", link: "Instagram @sebopurapoesia" },
    { nome: "Theatro São Pedro", tipo: "cultura", endereco: "Rua Barra Funda, 171, Barra Funda", link: "Site Oficial" },
    { nome: "Ziv Gallery", tipo: "cultura", endereco: "Rua Gonçalo Afonso, 119 (Beco do Batman), Vila Madalena", link: "Site Oficial" },

    // PASSEIOS E OUTROS (5 Itens)
    { nome: "Jardim Botânico SP", tipo: "passeios", endereco: "Av. Miguel Estefno, 3031, Vila Água Funda", link: "Site Oficial" },
    { nome: "Parque Estadual Jaraguá", tipo: "passeios", endereco: "(Vários acessos), Vila Chico Luisa", link: "Site Oficial" },
    { nome: "Roller Dance Liberdade", tipo: "passeios", endereco: "Rua Galvão Bueno, 351, Liberdade", link: "" },
    { nome: "SpeedLand Kart Center", tipo: "passeios", endereco: "Rua Ulisses Cruz, 275, Tatuapé", link: "Site Oficial" },
    { nome: "Viveiro Manequinho Lopes", tipo: "passeios", endereco: "Parque Ibirapuera (Av. Quarto Centenário, 1268 - Portão 7A)", link: "Site da Prefeitura" }
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