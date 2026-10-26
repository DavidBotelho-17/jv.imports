const WHATSAPP_NUMBER = "5548996721558";

/** Define a categoria pelo intervalo do ID */
function categoryForId(id) {
  if (id <= 150) return "Perfumes Árabes";
  if (id <= 300) return "Body Splash";
  if (id <= 450) return "Cremes";
  return "Perfumes Árabes";
}

const BENEFITS = {
  "Perfumes Árabes": ["Fixação de 12h+", "Original Importado", "Sillage marcante", "Frasco premium"],
  "Body Splash":     ["Refrescância imediata", "Hidratação prolongada", "Fragrância delicada", "Original Importado"],
  "Cremes":          ["Fórmula exclusiva", "Acabamento aveludado", "Combo curado", "Original Importado"],
};

// Lista de produtos com IDs categorizados 
const PRODUCTS = [

  /* =========================================================
     PERFUMES ÁRABES (IDs: 1 - 150)
     ========================================================= */

  {
    id: 1,
    name: "Hawas Eclat",
    category: "Perfumes Árabes",
    image: "imagens/hawaseclat.webp",
    shortDescription: "Floral sofisticado, elegante e moderno.",
    longDescription: "Hawas Eclat é uma fragrância floral sofisticada, moderna e marcante, ideal para quem busca elegância e presença em qualquer ocasião.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 2,
    name: "Maktub Gold",
    category: "Perfumes Árabes",
    image: "imagens/bidaya.jpeg",
    shortDescription: "Fragrância cítrica, frutada e especiada.",
    longDescription: "Abre com notas vibrantes de cítricos (laranja, limão e bergamota) combinadas com gengibre. No corpo, traz uma pera suculenta envolvida por toques quentes de canela e especiarias.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 3,
    name: "Dahliya",
    category: "Perfumes Árabes",
    image: "imagens/dahliya_perfumesarabes.webp",
    shortDescription: "Floral adocicado e delicado.",
    longDescription: "Dahliya combina notas florais adocicadas com toque cremoso, trazendo extrema delicadeza, feminilidade e uma aura de romance.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 4,
    name: "Eclaire",
    category: "Perfumes Árabes",
    image: "imagens/eclaire_perfumesarabes.webp",
    shortDescription: "Doce, cremoso e envolvente.",
    longDescription: "Eclaire possui um aroma gourmet irresistível com notas doces de baunilha e caramelo, perfeito para quem ama fragrâncias marcantes e acolhedoras.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 5,
    name: "Sabah Garden of Eden",
    category: "Perfumes Árabes",
    image: "imagens/sabahgardenofeden_perfumesarabes.webp",
    shortDescription: "Floral fresco e refinado.",
    longDescription: "Uma fragrância elegante e sofisticada inspirada na delicadeza dos jardins floridos do Oriente, perfeita para o uso diário ou eventos especiais.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 6,
    name: "Sabah Delilah",
    category: "Perfumes Árabes",
    image: "imagens/sabahdelilah_perfumesarabes.webp",
    shortDescription: "Floral intenso e marcante.",
    longDescription: "Sabah Delilah traz uma combinação exótica de rosas e especiarias refinadas, transmitindo feminilidade, sofisticação e presença por onde passa.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 7,
    name: "Ameeri",
    category: "Perfumes Árabes",
    image: "imagens/ameeri_perfumesarabes.webp",
    shortDescription: "Luxuoso e elegante.",
    longDescription: "Ameeri combina acordes amadeirados e notas orientais aveludadas, resultando em uma fragrância de alto padrão e extremo bom gosto.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 8,
    name: "Ameerat",
    category: "Perfumes Árabes",
    image: "imagens/ameerat_perfumesarabes.webp",
    shortDescription: "Feminino e delicado.",
    longDescription: "Uma fragrância refinada com acordes florais suaves e um fundo levemente adocicado, ideal para realçar a elegância no dia a dia.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 9,
    name: "Aisha Queen",
    category: "Perfumes Árabes",
    image: "imagens/aishaqueen_perfumesarabes.webp",
    shortDescription: "Floral doce e marcante.",
    longDescription: "Aisha Queen une a doçura das frutas maduras com a imponência do jasmim e da baunilha em uma fragrância memorável e sedutora.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 10,
    name: "Club de Nuit Woman",
    category: "Perfumes Árabes",
    image: "imagens/clubdenuitwoman_perfumesarabes.webp",
    shortDescription: "Elegante e sofisticado.",
    longDescription: "Fragrância amadeirada floral premiada internacionalmente, conhecida por sua excelente projeção, sofisticação e fixação impecável.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 11,
    name: "Shagaf",
    category: "Perfumes Árabes",
    image: "imagens/shagaf_perfumesarabes.webp",
    shortDescription: "Doce oriental intenso.",
    longDescription: "Shagaf entrega personalidade marcante através de notas de gourmand, âmbar e especiarias quentes que deixam um rastro inesquecível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 12,
    name: "Yara Moi",
    category: "Perfumes Árabes",
    image: "imagens/yaramoi_perfumesarabes.webp",
    shortDescription: "Cremoso e envolvente.",
    longDescription: "Yara Moi destaca-se por suas notas de pêssego, caramelo e sândalo, criando um aroma cremoso, caloroso e muito aconchegante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 13,
    name: "Yara Candy",
    category: "Perfumes Árabes",
    image: "imagens/yaracandy_perfumesarabes.webp",
    shortDescription: "Frutado doce e divertido.",
    longDescription: "Yara Candy possui um aroma moderno e jovial repleto de notas frutadas e um toque de confeitaria que encanta no primeiro borrifo.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 14,
    name: "Durrat Love",
    category: "Perfumes Árabes",
    image: "imagens/durratlove_perfumesarabes.webp",
    shortDescription: "Romântico e delicado.",
    longDescription: "Uma fragrância feminina apaixonante com notas florais suaves e um toque frutado equilibrado, perfeita para encontros e momentos especiais.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 15,
    name: "Club de Nuit Maleka",
    category: "Perfumes Árabes",
    image: "imagens/clubdenuitmaleka_perfumesarabes.webp",
    shortDescription: "Sofisticado e poderoso.",
    longDescription: "Fragrância luxuosa inspirada na realeza oriental, combinando frutas exóticas, florais brancos e um fundo amadeirado marcante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 16,
    name: "Delilah",
    category: "Perfumes Árabes",
    image: "imagens/delilah_perfumesarabes.webp",
    shortDescription: "Floral moderno e elegante.",
    longDescription: "Delilah é inspirado na perfumaria de nicho francesa com toque árabe: ruibarbo, lichia e rosa turca se misturam com perfeição.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 17,
    name: "Marshmallow Blush",
    category: "Perfumes Árabes",
    image: "imagens/marshmallowblush_perfumesarabes.webp",
    shortDescription: "Doce e aconchegante.",
    longDescription: "Uma fragrância extremamente aconchegante com acordes de marshmallow, baunilha e notas florais atalcadas super sutis.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 18,
    name: "Pharaoh",
    category: "Perfumes Árabes",
    image: "imagens/pharaoh_perfumesarabes.webp",
    shortDescription: "Amadeirado intenso.",
    longDescription: "Perfume masculino imponente com notas de couro, madeira nobre e especiarias, traduzindo força, mistério e liderança.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 19,
    name: "Regent Collection",
    category: "Perfumes Árabes",
    image: "imagens/regentcollection_perfumesarabes.webp",
    shortDescription: "Elegante e sofisticado.",
    longDescription: "Fragrância masculina refinada criada para homens que valorizan o luxo discreto, a sobriedade e um aroma duradouro.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 20,
    name: "Ameer",
    category: "Perfumes Árabes",
    image: "imagens/ameer_perfumesarabes.webp",
    shortDescription: "Oriental luxuoso.",
    longDescription: "Ameer combina tradição e sofisticação em uma fragrância rica em oud, âmbar e notas especiadas de altíssima qualidade.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 21,
    name: "Mawj",
    category: "Perfumes Árabes",
    image: "imagens/mawj_perfumesarabes.webp",
    shortDescription: "Fresco e moderno.",
    longDescription: "Fragrância refrescante equilibrada por um fundo limpo e levemente amadeirado, excelente para dias quentes e uso diário.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 22,
    name: "Rayhaan Terra",
    category: "Perfumes Árabes",
    image: "imagens/rayhaanterra_perfumesarabes.webp",
    shortDescription: "Amadeirado terroso.",
    longDescription: "Elegância e personalidade em uma fragrância marcante com notas de vetiver, patchouli e um toque cítrico refinado.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 23,
    name: "Odyssen Homme",
    category: "Perfumes Árabes",
    image: "imagens/odyssenhomme_perfumesarabes.webp",
    shortDescription: "Masculino refinado.",
    longDescription: "Uma fragrância moderna, aromática e sofisticada para o homem contemporâneo que busca um aroma versátil e elegante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 24,
    name: "Hawas Kobra",
    category: "Perfumes Árabes",
    image: "imagens/hawaskobra_perfumesarabes.webp",
    shortDescription: "Forte e marcante.",
    longDescription: "Com presença ostensiva, Hawas Kobra traz notas especiadas, amadeiradas e um fundo levemente adocicado e provocante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 25,
    name: "Hawas Black",
    category: "Perfumes Árabes",
    image: "imagens/hawasblack_perfumesarabes.webp",
    shortDescription: "Intenso e sedutor.",
    longDescription: "Uma fragrância noturna poderosa, com acordes amadeirados escuros, baunilha negra e couro refinado.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 26,
    name: "Pacific Rayhaan",
    category: "Perfumes Árabes",
    image: "imagens/pacificrayhaan_perfumesarabes.webp",
    shortDescription: "Fresco oceânico.",
    longDescription: "Aroma refrescante e revigorante que remete à brisa marinha com notas aquáticas e cítricos cristalinos.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 27,
    name: "Sultan",
    category: "Perfumes Árabes",
    image: "imagens/sultan_perfumesarabes.webp",
    shortDescription: "Poderoso e elegante.",
    longDescription: "Fragrância verdadeiramente real com misturas nobres de resinas, sândalo e toques sutis de especiarias do oriente.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 28,
    name: "Sama",
    category: "Perfumes Árabes",
    image: "imagens/sama_perfumesarabes.webp",
    shortDescription: "Refrescante e equilibrado.",
    longDescription: "Leve, moderno e limpo. Perfeito para quem prefere fragrâncias discretas mas surpreendentemente marcantes.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 29,
    name: "Asad Elixir",
    category: "Perfumes Árabes",
    image: "imagens/asadelixir_perfumesarabes.webp",
    shortDescription: "Oriental premium.",
    longDescription: "Versão ainda mais concentrada e potente do consagrado Asad, recheada de pimenta preta, âmbar e baunilha escura.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 30,
    name: "Club de Nuit Extrait",
    category: "Perfumes Árabes",
    image: "imagens/clubdenuitextrait_perfumesarabes.webp",
    shortDescription: "Luxo e alta performance.",
    longDescription: "Extrato puro de perfumaria com altíssima fixação e projeção arrebatadora de abacaxi, bergamota e notas amadeiradas.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 31,
    name: "Asad Bourbon",
    category: "Perfumes Árabes",
    image: "imagens/asadbourbon_perfumesarabes.webp",
    shortDescription: "Amadeirado adocicado.",
    longDescription: "Uma interpretação quente e sedutora com acordes de baunilha bourbon, café e madeiras nobres.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 32,
    name: "Faris",
    category: "Perfumes Árabes",
    image: "imagens/faris_perfumesarabes.webp",
    shortDescription: "Elegante e versátil.",
    longDescription: "Combinação perfeita de notas florais e amadeiradas masculinas, excelente para qualquer clima e ocasião.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 33,
    name: "Habibi King",
    category: "Perfumes Árabes",
    image: "imagens/habibiking_perfumesarabes.webp",
    shortDescription: "Sofisticado e intenso.",
    longDescription: "Uma fragrância masculina imponente com notas quentes, especiadas e uma presença inconfundível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 34,
    name: "9PM Rebel",
    category: "Perfumes Árabes",
    image: "imagens/9pmrebel_perfumesarabes.webp",
    shortDescription: "Noturno e moderno.",
    longDescription: "Jovial, doce e rebelde. Excelente escolha para festas e eventos noturnos onde marcar presença é essencial.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 35,
    name: "Liquid Brun",
    category: "Perfumes Árabes",
    image: "imagens/liquidbrun_perfumesarabes.webp",
    shortDescription: "Amadeirado sofisticado.",
    longDescription: "Elegante e refinado com toques de canela, flor de laranjeira e baunilha aveludada.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 36,
    name: "Maktub la Vive",
    category: "Perfumes Árabes",
    image: "imagens/Maktub_la_vive.jpeg",
    shortDescription: "Fragrância marcante e equilibrada.",
    longDescription: "Maktub la Vive celebra o destino com uma mistura envolvente de florais refinados e um fundo adocicado acolhedor.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 37,
    name: "Sabah al Ward Perfume",
    category: "Perfumes Árabes",
    image: "imagens/Sabah_al_Ward.jpeg",
    shortDescription: "Intenso e sedutor.",
    longDescription: "Fragrância oriental misteriosa com rosas árabes, pimenta rosa e baunilha quente. Um clássico da perfumaria oriental.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 38,
    name: "Sabah Valentine Perfume",
    category: "Perfumes Árabes",
    image: "imagens/sabah_valentine_perfume.jpeg",
    shortDescription: "Romântico e apaixonante.",
    longDescription: "Elaborado para momentos românticos, traz florais brancos apaixonantes envolvidos por frutas doces e almíscar suave.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 39,
    name: "Yara Tous Perfume",
    category: "Perfumes Árabes",
    image: "imagens/Yara_tours.jpeg",
    shortDescription: "Alegre e tropical.",
    longDescription: "Uma explosão tropical de manga, maracujá e flor de laranjeira com base cremosa de coco e baunilha.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 40,
    name: "Khamrah Lattafa",
    category: "Perfumes Árabes",
    image: "imagens/khamrah.jpeg",
    shortDescription: "Gourmand luxuoso e especiado.",
    longDescription: "Famoso no mundo todo por suas notas quentes de canela, noz-moscada, pralinê e tâmara sobre uma base oriental riquíssima.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 41,
    name: "Khamrah Dukhan",
    category: "Perfumes Árabes",
    image: "imagens/khamrah_dukhan.jpeg",
    shortDescription: "Amadeirado defumado e quente.",
    longDescription: "Uma variação ainda mais misteriosa de Khamrah, adicionando toques defumados, resinosos e amadeirados à doce baunilha.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 42,
    name: "Atheeri Lattafa",
    category: "Perfumes Árabes",
    image: "imagens/atheeri.jpeg",
    shortDescription: "Mel, floral e sofisticado.",
    longDescription: "Uma fragrância dourada e radiante rica em mel, florais refinados e um toque amadeirado de puro luxo oriental.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 43,
    name: "Chants Tenderina",
    category: "Perfumes Árabes",
    image: "imagens/chants_tenderina.jpeg",
    shortDescription: "Floral frutado delicado.",
    longDescription: "Inspirado na alta perfumaria internacional, une toranja, marmeleiro e jasmim com um almíscar suave e encantador.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 44,
    name: "Bidaya Vanilla P*rn",
    category: "Perfumes Árabes",
    image: "imagens/bidaya_vanilla_prn.jpeg",
    shortDescription: "Baunilha intensa e viciante.",
    longDescription: "Uma overdose de baunilha oriental combinada com especiarias sutis e notas amadeiradas aconchegantes.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 45,
    name: "Bidaya Gris",
    category: "Perfumes Árabes",
    image: "imagens/bidaya_gris.jpeg",
    shortDescription: "Ambarado elegante e atemporal.",
    longDescription: "Fragrância sofisticada e moderna com acordes cinzentos, rosas nobres, patchouli e um fundo ambarado inconfundível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 46,
    name: "Panther Pour Homme",
    category: "Perfumes Árabes",
    image: "imagens/panther_pour_homme.jpeg",
    shortDescription: "Fresco, amadeirado e marcante.",
    longDescription: "Um perfume masculino limpo, elegante e moderno que combina notas cítricas, lavanda refinada e base amadeirada.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 47,
    name: "Alpine Homme Sport",
    category: "Perfumes Árabes",
    image: "imagens/alpine_homme_sport.jpeg",
    shortDescription: "Refrescante, esportivo e dinâmico.",
    longDescription: "Perfeito para homens ativos, une tangerina fresca, hortelã, pimenta e fava tonka com excelente fixação.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 48,
    name: "Basir",
    category: "Perfumes Árabes",
    image: "imagens/basir_perf.jpeg",
    shortDescription: "Luxo e mistério oriental.",
    longDescription: "Fragrância marcante e sofisticada, ideal para quem busca presença única com toques orientais inesquecíveis.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 49,
    name: "Fada Gold",
    category: "Perfumes Árabes",
    image: "imagens/fadagold_perf.jpeg",
    shortDescription: "Elegância dourada e marcante.",
    longDescription: "Perfume opulento e envolvente, perfeito para destacar sua personalidade em ocasiões muito especiais.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 50,
    name: "Sex on the Rocks",
    category: "Perfumes Árabes",
    image: "imagens/sexon_perf.jpeg",
    shortDescription: "Ousadia, frescor e sedução.",
    longDescription: "Fragrância vibrante e sensual, criada para quem deseja se destacar com aroma moderno e envolvente.",
    benefits: BENEFITS["Perfumes Árabes"],
  },

  // Novos Perfumes Árabes adicionados (IDs 51 a 67)
  {
    id: 51,
    name: "Miniatura Asad Black",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaAsadBlack.jpeg",
    shortDescription: "Exótico, picante e imponente.",
    longDescription: "Fragrância masculina marcante com notas quentes de pimenta preta, tabaco e abacaxi, envoltas por um fundo rico em baunilha e âmbar.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 52,
    name: "Miniatura Yara Tradicional",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaTradYara.jpeg",
    shortDescription: "Cremoso, floral e delicadamente doce.",
    longDescription: "Perfume cativante com notas de topo frutadas, um coração cremoso de orquídea e marshmallows, finalizado com um fundo suave de baunilha e almíscar.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 53,
    name: "Miniatura Yara Moi",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaYaraMoi.jpeg",
    shortDescription: "Frutado, tropical e exótico.",
    longDescription: "Uma explosão suculenta de manga vibrante combinada com notas tropicais e um fundo cremoso, trazendo alegria e frescor para a pele.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 54,
    name: "Miniatura Yara Tous",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaYaraTous.jpeg",
    shortDescription: "Elegante, ambarado e sedutor.",
    longDescription: "Combinação sofisticada de jasmim, caramelo e notas de âmbar, criando uma aura cálida, aveludada e de extremo bom gosto.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 55,
    name: "Miniatura Royal Rouge",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaRoyalRougeAmbar.jpeg",
    shortDescription: "Quente, envolvente e luxuoso.",
    longDescription: "Fragrância rica em acordes ambarados e especiados quentes, que proporcionam um rastro sofisticado, misterioso e marcante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 56,
    name: "Miniatura Club De Nuit Intense Man",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaRoyalRouge.jpeg",
    shortDescription: "Poderoso, fresco e sofisticado.",
    longDescription: "Clássico moderno com notas de topo cítricas e frutadas de limão e abacaxi, evoluindo para um coração floral esfumaçado e um fundo amadeirado intenso.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 57,
    name: "Miniatura Tharwah",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaTharwah.jpeg",
    shortDescription: "Radiante, marcante e precioso.",
    longDescription: "Composição deslumbrante que mistura notas luminosas e especiadas a um fundo quente e amadeirado, evocando exclusividade e sofisticação.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 58,
    name: "Miniatura Sabah Al Ward",
    category: "Perfumes Árabes",
    image: "imagens/MiniaturaSabahAlWard.jpeg",
    shortDescription: "Luxuoso, exótico e marcante.",
    longDescription: "Fragrância rica com opulentos acordes orientais e florais, combinados a um fundo quente e envolvente que transmite sofisticação pura.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 59,
    name: "Lattafa Fahad",
    category: "Perfumes Árabes",
    image: "imagens/Fahad.jpeg",
    shortDescription: "Imponente, amadeirado e magnético.",
    longDescription: "Perfume marcante com notas quentes e especiadas, desenvolvido para exalar poder, elegância e uma presença inesquecível.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 60,
    name: "Musamam Black Intense",
    category: "Perfumes Árabes",
    image: "imagens/MusamanBlackIntense.jpeg",
    shortDescription: "Misterioso, ousado e profundo.",
    longDescription: "Uma elattafamusamamblackintensexperiência olfativa intensa que une notas especiadas escuras, couro e madeiras nobres, ideal para ocasiões de muita personalidade.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 61,
    name: "Armaf Club de Nuit Iconic",
    category: "Perfumes Árabes",
    image: "imagens/ClubDeNuitIconic.jpeg",
    shortDescription: "Vibrante, moderno e revigorante.",
    longDescription: "Composição dinâmica com acordes cítricos frescos, toque aromático e fundo amadeirado intenso que traduz modernidade e sofisticação masculina.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 62,
    name: "Lattafa Opulent Dubai",
    category: "Perfumes Árabes",
    image: "imagens/OpulentDubai.jpeg",
    shortDescription: "Radiante, oriental e luxuoso.",
    longDescription: "Fragrância exuberante que mistura notas florais exóticas a um fundo cremoso de âmbar e especiarias, inspirada na riqueza e opulência.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 63,
    name: "Lattafa Fakhar Gold",
    category: "Perfumes Árabes",
    image: "imagens/FakharGold.jpeg",
    shortDescription: "Elegante, floral e luminoso.",
    longDescription: "Perfume sofisticado que harmoniza flores brancas opulentas com notas frutadas suaves e um fundo refinado de baunilha e almíscar.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 64,
    name: "Rayhaan Amazonica",
    category: "Perfumes Árabes",
    image: "imagens/Amazonica.jpeg",
    shortDescription: "Fresco, verde e vibrante.",
    longDescription: "Inspirado na exuberância da natureza, combina notas verdes revigorantes com um coração frutado e um fundo amadeirado leve e marcante.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 65,
    name: "Zuhoor",
    category: "Perfumes Árabes",
    image: "imagens/Zuhoor.jpeg",
    shortDescription: "Floral, envolvente e sofisticado.",
    longDescription: "Uma celebração de flores nobres e acordes orientais suaves, criando uma aura de extrema elegância, delicadeza e charme.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 66,
    name: "Arabiyat Cotton Blush",
    category: "Perfumes Árabes",
    image: "imagens/CottonBlush.jpeg",
    shortDescription: "Doce, divertido e aconchegante.",
    longDescription: "Fragrância gourmand lúdica que traz notas de algodão-doce, acordes açucarados e um toque cremoso suave que desperta nostalgia e carisma.",
    benefits: BENEFITS["Perfumes Árabes"],
  },
  {
    id: 67,
    name: "Delilah Viola",
    category: "Perfumes Árabes",
    image: "imagens/DelilahViola.jpeg",
    shortDescription: "Sensual, floral e cativante.",
    longDescription: "Bouquet floral intenso e sofisticado com nuances frutadas e um fundo almiscarado aconchegante, ideal para expressar feminilidade e elegância.",
    benefits: BENEFITS["Perfumes Árabes"],
  },

  /* =========================================================
     BODY SPLASH (IDs: 151 - 300)
     ========================================================= */

  {
    id: 151,
    name: "Asad Bourbon Body Splash",
    category: "Body Splash",
    image: "imagens/asadbourbon_bodysplash.webp",
    shortDescription: "Masculino intenso e prático.",
    longDescription: "Refrescância imediata e perfumação marcante com as notas icônicas de baunilha bourbon e especiarias para o corpo todo.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 152,
    name: "Vulcan Feu Body Splash",
    category: "Body Splash",
    image: "imagens/vulcanfeu_bodysplash.webp",
    shortDescription: "Amadeirado marcante e leve.",
    longDescription: "Refrescância intensa para o dia a dia, trazendo uma perfumação masculina envolvente em uma bruma leve.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 153,
    name: "Sabah Valentine Body Splash",
    category: "Body Splash",
    image: "imagens/sabahvalentine_bodysplashs.jpeg",
    shortDescription: "Floral romântico e vibrante.",
    longDescription: "Leve, romântico e delicado. Um spray corporal perfeito para prolongar a sensação de banho tomado o dia todo.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 154,
    name: "Sabah al Ward Body Splash",
    category: "Body Splash",
    image: "imagens/sabahalward_bodysplash.webp",
    shortDescription: "Floral delicado e versátil.",
    longDescription: "Bruma perfumada suave que combina florais orientais e um toque de doçura para um dia a dia mais perfumado.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 155,
    name: "Club de Nuit Woman Body Splash",
    category: "Body Splash",
    image: "imagens/clubdenuitwoman_bodysplash.webp",
    shortDescription: "Elegante e refrescante.",
    longDescription: "A sofisticação do consagrado Club de Nuit Woman agora em uma versão splash leve e refrescante para aplicar generosamente.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 156,
    name: "Eclaire Aromatizador de Ar",
    category: "Body Splash",
    image: "imagens/eclaire_splash.jpeg",
    shortDescription: "Doce cremoso e envolvente.",
    longDescription: "Uma névoa perfumada deliciosa recheada de notas gourmet de caramelo e baunilha para deixar um rastro encantador.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 157,
    name: "Atheeri Aromatizador de Ar",
    category: "Body Splash",
    image: "imagens/atheeri_splash.jpeg",
    shortDescription: "Mel e toques dourados refrescantes.",
    longDescription: "Uma bruma suave e iluminada com deliciosos acordes de mel e florais radiantes para perfumação prática diária.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 158,
    name: "Asad Lattafa Aromatizador de Ar",
    category: "Body Splash",
    image: "imagens/asad_splash.jpeg",
    shortDescription: "Masculino marcante e refrescante.",
    longDescription: "A fragrância icônica e imponente de Asad em formato de névoa perfumada, ideal para uso diário e refrescância prolongada.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 159,
    name: "Victoria’s Secret Vanilla",
    category: "Body Splash",
    image: "imagens/victoriasecr_body.jpeg",
    shortDescription: "Achechego e baunilha marcante.",
    longDescription: "Spray corporal leve e adocicado, perfeito para perfumar a pele com o conforto suave da baunilha.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 160,
    name: "Victoria’s Secret Pure Seduction",
    category: "Body Splash",
    image: "imagens/victoriapure_body.jpeg",
    shortDescription: "Frutado, alegre e sedutor.",
    longDescription: "SFragrância radiante com notas frutadas marcantes, ideal para refrescar e perfumar seu dia a dia.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 161,
    name: "Victoria’s Secret Velvet Petals",
    category: "Body Splash",
    image: "imagens/victoriavelvet_body.jpeg",
    shortDescription: "Floral aveludado e suave.",
    longDescription: "Névoa leve com toque floral e gourmand, garantindo frescor elegante durante todo o dia.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 162,
    name: "ICANDY Fragrance Mist Passion Fruit 28",
    category: "Body Splash",
    image: "imagens/BodyIcandyMaracuja.jpeg",
    shortDescription: "Tropical, vibrante e marcante.",
    longDescription: "Uma explosão frutada com notas intensas de maracujá e toques tropicais envolventes, ideal para destacar a pele e os cabelos com frescor e energia.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 163,
    name: "ICANDY Fragrance Mist Pineapple Coconut 84",
    category: "Body Splash",
    image: "imagens/BodyIcandyAbacaxiComCoco.jpeg",
    shortDescription: "Ensolarado, cremoso e refrescante.",
    longDescription: "Combinação perfeita e exótica de abacaxi suculento com a doçura cremosa do coco, criando uma aura praiana, leve e relaxante para o corpo e cabelo.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 164,
    name: "ICANDY Fragrance Mist Vanilla 21",
    category: "Body Splash",
    image: "imagens/BodyIcandyVanilla.jpeg",
    shortDescription: "Doce, aconchegante e irresistível.",
    longDescription: "Fragrância gourmand clássica sob uma perspectiva moderna, combinando baunilha aveludada, toques levemente ambarados e uma sensação de aconchego duradoura.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 165,
    name: "Victoria's Secret Aqua Kiss",
    category: "Body Splash",
    image: "imagens/VictoriaSecretAquaKiss.jpeg",
    shortDescription: "Fresco, aquático e revitalizante.",
    longDescription: "Fragrância leve e refrescante com acordes de águas cristalinas, margaridas brancas e notas florais suaves, ideal para um toque de frescor diário.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 166,
    name: "Victoria's Secret Amber Romance",
    category: "Body Splash",
    image: "imagens/VictoriaSecretAmberRomance.jpeg",
    shortDescription: "Quente, sedutor e ambarado.",
    longDescription: "Mistura envolvente e sensual de âmbar profundo com creme anglaise e toques doces, perfeita para momentos marcantes e sofisticados.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 167,
    name: "Victoria's Secret Love Spell Shimmer",
    category: "Body Splash",
    image: "imagens/VictoriasecretLoveSpell.jpeg",
    shortDescription: "Frutado, vibrante e iluminado.",
    longDescription: "Combinação encantadora de flor de cerejeira e pêssego suculento, potencializada com partículas de brilho (shimmer) que iluminam e perfumam a pele.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 168,
    name: "Isabelle La Belle Marshmallow Blush",
    category: "Body Splash",
    image: "imagens/BodyMarshmallowBlush.jpeg",
    shortDescription: "Delicado, doce e romântico.",
    longDescription: "Sinfonia delicada e gourmand que combina a suavidade do marshmallow com acordes florais rosados, trazendo uma sensação leve e aveludada.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 169,
    name: "Isabelle La Belle Club De Nuit Overdose",
    category: "Body Splash",
    image: "imagens/BodyClubDeNuitOverdose.jpeg",
    shortDescription: "Misterioso, elegante e noturno.",
    longDescription: "Fragrância marcante e envolvente com notas florais intensas, fundo amadeirado e toques especiados, perfeita para destacar presença à noite.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 170,
    name: "Isabelle La Belle Éclat",
    category: "Body Splash",
    image: "imagens/BodyEclaire.jpeg",
    shortDescription: "Luminoso, sofisticado e oriental.",
    longDescription: "Combinação refinada de notas orientais e cremosas com um toque ambarado elegante, transmitindo luxo, calor e luminosidade única.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 171,
    name: "Isabelle La Belle Club de Nuit Iconic",
    category: "Body Splash",
    image: "imagens/BodyClubDeNuitIConic.jpeg",
    shortDescription: "Intenso, moderno e magnético.",
    longDescription: "Perfume marcante com acordes cítricos vibrantes, coração amadeirado e fundo sensual, ideal para quem busca uma assinatura olfativa forte e inesquecível.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 172,
    name: "Isabelle La Belle Secret of Love",
    category: "Body Splash",
    image: "imagens/BodyKhamrahWaha.jpeg",
    shortDescription: "Romântico, delicado e cativante.",
    longDescription: "Fragrância suave e envolvente com acordes florais frescos e um toque sutilmente adocicado, ideal para transmitir romance e leveza no dia a dia.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 173,
    name: "Isabelle La Belle Le Nuit Intenso",
    category: "Body Splash",
    image: "imagens/BodyClubDeNuitIntenseMan.jpeg",
    shortDescription: "Marcante, sofisticado e misterioso.",
    longDescription: "Composição profunda e elegante, unindo notas amadeiradas e especiadas intensas que exalam poder e presença em ocasiões noturnas.",
    benefits: BENEFITS["Body Splash"],
  },
  {
    id: 174,
    name: "Isabelle La Belle Le Nuit Maleka",
    category: "Body Splash",
    image: "imagens/BodyClubDeNuitMaleka.jpeg",
    shortDescription: "Magnético, ousado e inesquecível.",
    longDescription: "Uma versão de alto impacto que combina acordes densos, sedutores e de alta fixação, perfeita para quem deseja deixar uma marca inegável.",
    benefits: BENEFITS["Body Splash"],
  },

  /* =========================================================
     CREMES (IDs: 301 - 450)
     ========================================================= */

  {
    id: 301,
    name: "Yara Tradicional Creme",
    category: "Cremes",
    image: "imagens/yaratradicional_cremes.webp",
    shortDescription: "Hidratação perfumada aveludada.",
    longDescription: "Creme hidratante corporal com a fragrância inconfundível do Yara rosa. Nutre a pele deixando toque aveludado e aroma duradouro.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 302,
    name: "Dalila Creme",
    category: "Cremes",
    image: "imagens/dalila_cremes.webp",
    shortDescription: "Cremoso, nutritivo e delicado.",
    longDescription: "Hidratação profunda com absorção rápida. Deixa a pele macia, sedosa e delicadamente perfumada com notas florais.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 303,
    name: "Vulcan Feu Creme",
    category: "Cremes",
    image: "imagens/vulcanfeu_cremes.webp",
    shortDescription: "Masculino intenso e hidratante.",
    longDescription: "Creme hidratante masculino de textura leve e rápida absorção, ideal para proteger a pele e manter uma perfumação elegante.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 304,
    name: "Club de Nuit Creme",
    category: "Cremes",
    image: "imagens/clubdenuit_cremes.webp",
    shortDescription: "Elegante e sofisticado.",
    longDescription: "Hidratação premium com toque seco e perfumação marcante. Potencializa a fixação do seu perfume favorito.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 305,
    name: "Asad Bourbon Creme",
    category: "Cremes",
    image: "imagens/asadbourbon_cremes.webp",
    shortDescription: "Amadeirado premium e nutritivo.",
    longDescription: "Formulado para hidratar profundamente e perfumar a pele masculina com as ricas notas de baunilha e amadeirados nobres.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 306,
    name: "Asad Black Creme",
    category: "Cremes",
    image: "imagens/asadblack_cremes.webp",
    shortDescription: "Intenso, moderno e marcante.",
    longDescription: "Proporciona toque macio e proteção contra o ressecamento da pele, acompanhado de uma fragrância masculina marcante.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 307,
    name: "Creme Victoria’s Secret Velvet Petals",
    category: "Cremes",
    image: "imagens/pureseduction_creme.jpeg",
    shortDescription: "Hidratação macia e floral.",
    longDescription: "Creme hidratante de rápida absorção que deixa a pele aveludada, nutrida e delicadamente perfumada.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 308,
    name: "Creme Victoria’s Secret Pure Seduction",
    category: "Cremes",
    image: "imagens/victoriasecret_creme.jpeg",
    shortDescription: "Pele macia e perfumada.",
    longDescription: "Hidratante corporal envolvente que combina nutrição intensa com um aroma frutado e sedutor duradouro.",
    benefits: BENEFITS["Cremes"],
  },
  {
    id: 309,
    name: "Creme Victoria’s Secret Vanilla",
    category: "Cremes",
    image: "imagens/vanillasecret_creme.jpeg",
    shortDescription: "Toque aveludado de baunilha.",
    longDescription: "Creme enriquecido para hidratar profundamente, envolvendo o corpo em uma fragrância aconchegante de baunilha.",
    benefits: BENEFITS["Cremes"],
  },
];

function buildWhatsAppLink(productName) {
  const msg = `Olá, vim pelo site da JV Imports e gostaria de saber o valor e a disponibilidade do ${productName}!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* =========================================================
   PÁGINA INICIAL (index.html)
   ========================================================= */
function initCatalogPage() {
  const grid        = document.getElementById("productGrid");
  const emptyState  = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const filterBtns  = document.querySelectorAll(".filter-btn");
  
  if (!grid) return; // não estamos na página principal

  let activeFilter = "Todos";
  let searchQuery  = "";

  function render() {
    const q = searchQuery.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      const matchCat    = activeFilter === "Todos" || p.category === activeFilter;
      const matchSearch = !q || p.name.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    grid.innerHTML = list.map(cardTemplate).join("");
    if (emptyState) {
      emptyState.hidden = list.length > 0;
    }
  }

  function cardTemplate(p) {
    return `
      <a class="card" href="produto.html?id=${p.id}" aria-label="Ver detalhes de ${p.name}">
        <div class="card-media">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'" />
          <span class="card-watermark">JV</span>
          <span class="card-badge">${p.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.name}</h3>
          <p class="card-desc">${p.shortDescription}</p>
          <div class="card-action">
            <span>Ver detalhes</span>
            <span class="arrow">→</span>
          </div>
        </div>
      </a>
    `;
  }

  // Filtros por Categoria
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  // Busca em tempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  // Renderização inicial dos produtos
  render();
}

/* =========================================================
   PÁGINA DE PRODUTO (produto.html)
   ========================================================= */
function initProductPage() {
  const titleEl = document.getElementById("productName");
  if (!titleEl) return; // não estamos na página de produto

  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get("id"), 10);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    titleEl.textContent = "Produto não encontrado";
    const descEl = document.getElementById("productDescription");
    if (descEl) {
      descEl.textContent = "O produto solicitado não está disponível. Volte ao catálogo para escolher outra fragrância.";
    }
    return;
  }

  // Preenche dados com checagens de segurança
  document.title = `${product.name} — JV Imports`;
  titleEl.textContent = product.name;

  const descEl = document.getElementById("productDescription");
  if (descEl) descEl.textContent = product.longDescription;

  const badgeEl = document.getElementById("productBadge");
  if (badgeEl) badgeEl.textContent = product.category;

  const imgEl = document.getElementById("productImage");
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }

  // Benefícios
  const benefitsList = document.getElementById("benefitsList");
  if (benefitsList && product.benefits) {
    benefitsList.innerHTML = product.benefits.map((b) => `<li>${b}</li>`).join("");
  }

  // Link do WhatsApp (desktop + mobile)
  const waLink = buildWhatsAppLink(product.name);
  const btnDesktop = document.getElementById("whatsappBtn");
  const btnMobile  = document.getElementById("whatsappBtnMobile");

  if (btnDesktop) btnDesktop.href = waLink;
  if (btnMobile)  btnMobile.href  = waLink;
}

/* =========================================================
   Bootstrap
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Ano no footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initCatalogPage();
  initProductPage();
});