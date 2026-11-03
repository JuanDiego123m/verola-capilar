// ==========================================
// VEROLA CAPILAR
// CATÁLOGO DE PRODUCTOS
// ==========================================

// ==========================================
// PRODUCTOS CLICK HAIR
// ==========================================

const productosClick = [
    //FINALIZADORES
    {
        id: 1,
        nombre: "Termoprotector Bifásico Leche y Miel",
        marca: "CLICK HAIR",
        precio: 44000,
        presentacion: "150 ml",
        categoria: "Finalizadores",
        imagen: "img/click_hair/Termoprotector_bifasico.jpeg",
        descripcion: "El termoprotector bifásico combina el poder de la leche y la miel, protegiendo el cabello del calor hasta 230 °C, dando un blindaje térmico, siendo antifrizz y antihumedad, y dejando un acabado de suavidad y brillo.",
        disponible: true,
        destacado: true
    },
    {
        id: 2,
        nombre: "Miel para Cabello con Argán",
        marca: "CLICK HAIR",
        precio: 57500,
        presentacion: "50 ml",
        categoria: "Finalizadores",
        imagen: "img/click_hair/Miel_para_cabello.jpeg",
        descripcion: "Sella las puntas y deja un brillo instantáneo, mientras ayuda a recuperar la suavidad, controlar el frizz, disminuir la porosidad y las puntas abiertas, devolviéndole la hidratación al cabello. Fórmula con miel de abeja, aceite de argán y aceite de macadamia.",
        disponible: true,
        destacado: true
    },
    {
        id: 3,
        nombre: "Miel para Cabello con Argán Mini",
        marca: "CLICK HAIR",
        precio: 27000,
        presentacion: "20 ml",
        categoria: "Finalizadores",
        imagen: "img/click_hair/Miel_para_cabello_mini.jpg",
        descripcion: "Sella las puntas y deja un brillo instantáneo, mientras ayuda a recuperar la suavidad, controlar el frizz, disminuir la porosidad y las puntas abiertas, devolviéndole la hidratación al cabello. Fórmula con miel de abeja, aceite de argán y aceite de macadamia.",
        disponible: true
    },
    {
        id: 4,
        nombre: "Tónico Capilar Anticaída de Ají",
        marca: "CLICK HAIR",
        precio: 32500,
        presentacion: "60 ml",
        categoria: "Finalizadores",
        imagen: "img/click_hair/Tonico_anticaida_ají.jpeg",
        descripcion: "El tónico capilar de ají ofrece un crecimiento de 3 meses en 1, actuando directamente sobre el cuero cabelludo para ayudar a frenar la caída, estimular el crecimiento y estimular el folículo desde la raíz, gracias a sus extractos de ají y cafeína.",
        disponible: true
    },
    {
        id: 5,
        nombre: "Suero Reconstructor Capilar",
        marca: "CLICK HAIR",
        precio: 37000,
        presentacion: "120 ml",
        categoria: "Finalizadores",
        imagen: "img/click_hair/Suero_reconstructor.jpeg",
        descripcion: "Protege el cabello frente a factores extremos, los rayos UV, la sal del mar, el sudor y las herramientas de calor hasta los 230 °C. Está formulado con aceite de coco, keratina y proteína hidrolizada.",
        disponible: true
    },

    //PERFUMES
    {
        id: 6,
        nombre: "Perfumes Capilares CLICK HAIR",
        marca: "CLICK HAIR",
        precio: 43500,
        presentacion: "120 ml",
        categoria: "Perfumes",
    
        imagenes: [
            "img/click_hair/Perfumes_capilares_click.jpeg",
            "img/click_hair/Perfume_azul.jpeg",
            "img/click_hair/Perfume_naranja.jpeg",
            "img/click_hair/Perfume_transparente.jpeg",
            "img/click_hair/Perfume_verde.jpeg",
            "img/click_hair/Perfume_rosa.jpeg",
            "img/click_hair/Perfume_morado.jpeg",
            "img/click_hair/Perfume_amarillo.jpeg"
        ],
    
        descripcion: "Perfume capilar con glitter, de larga duración y con protección térmica.",
    
        detalles: [
            "Azul — Candy Toy: aroma dulce y amaderado.",
            "Naranja — Dream on Paradise: aroma tropical y cítrico.",
            "Transparente — Vainilla Glow: vainilla, limón y caramelo.",
            "Verde — Fresh Amber: cítrico, ámbar, limón y madera.",
            "Rosa — Seduction Flower: floral, fresco y dulce.",
            "Morado — Tropical Crush: frutal, tropical y caramelo.",
            "Amarillo — Fruts: mango, granada y rosas."
        ],
    
        disponible: true
    },
    {
        id: 7,
        nombre: "Perfume Capilar de Miel",
        marca: "CLICK HAIR",
        precio: 57000,
        presentacion: "100 ml",
        categoria: "Perfumes",
        imagen: "img/click_hair/Perfume_capilar_miel.jpeg",
        descripcion: "Perfume gourmet de alta concentración con aroma a miel y postre irresistible, que envuelve el cabello con una fragancia dulce y duradera hasta por 48 h.",
        disponible: true
    },
    {
        id: 8,
        nombre: "Perfume Capilar de Miel y Pistacho",
        marca: "CLICK HAIR",
        precio: 57000,
        presentacion: "100 ml",
        categoria: "Perfumes",
        imagen: "img/click_hair/perfume_capilar_(miel_pistacho).jpeg",
        descripcion: "Perfume gourmet de alta concentración con notas de pistacho y vainilla, que envuelven el cabello con una fragancia dulce y duradera hasta por 48 h.",
        disponible: true
    },
    {
        id: 9,
        nombre: "Perfume Capilar de Miel y Masmelo",
        marca: "CLICK HAIR",
        precio: 57000,
        presentacion: "100 ml",
        categoria: "Perfumes",
        imagen: "img/click_hair/Perfume_capilar_(miel_masmelo).jpeg",
        descripcion: "Perfume gourmet de alta concentración con notas de masmelo, vainilla y crema batida, que envuelven el cabello con una fragancia dulce y duradera hasta por 48 h.",
        disponible: true
    },

    //TRATAMIENTOS
    {
        id: 10,
        nombre: "Energizante Capilar",
        marca: "CLICK HAIR",
        precio: 41000,
        presentacion: "300 ml",
        categoria: "Tratamiento",
        imagen: "img/click_hair/Energizante_capilar.jpeg",
        descripcion: "Es un tratamiento estimulante y reparador para revitalizar cabellos en emergencia sometidos a procesos químicos. Contiene una poderosa mezcla de células madre, cafeína, borojó, keratina y proteína de arroz, que mejora la resistencia, recupera la suavidad y disciplina el cabello.",
        disponible: true
    },

    //SHAMPOOS
    {
        id: 11,
        nombre: "Shampoo de Miel Brillo Intenso",
        marca: "CLICK HAIR",
        precio: 40000,
        presentacion: "300 ml",
        categoria: "Shampoo",
        imagen: "img/click_hair/Shampoo_miel.jpeg",
        descripcion: "Formulado con extracto de miel, ofrece una limpieza suave pero efectiva sin resecar, ayudando a devolver la hidratación y la luminosidad a los cabellos secos o tratados químicamente.",
        disponible: true
    },
    {
        id: 12,
        nombre: "Shampoo de Ají",
        marca: "CLICK HAIR",
        precio: 40000,
        presentacion: "400 ml",
        categoria: "Shampoo",
        imagen: "img/click_hair/Shampoo_aji.jpeg",
        descripcion: "Es una fórmula diseñada para controlar la grasa, fortalecer el cabello desde la raíz y estimular su crecimiento. Su combinación de extractos botánicos, aminoácidos y ají proporciona una limpieza efectiva, favoreciendo el crecimiento de nuevo cabello.",
        disponible: true,
        destacado: true
    },
    {
        id: 13,
        nombre: "Shampoo de Leche & Proteínas",	
        marca: "CLICK HAIR",
        precio: 47000,
        presentacion: "300 ml",
        categoria: "Shampoo",
        imagen: "img/click_hair/Shampoo_leche_proteínas.jpeg",
        descripcion: "El shampoo de leche es el primer paso de la rutina de reparación intensiva para cabello muy dañado, quebradizo y poroso. Limpia suavemente mientras regenera desde la raíz, gracias a su fórmula de leche, péptidos, aminoácidos y ceramidas.",
        disponible: true
    },

    //MASCARILLAS
    {
        id: 14,
        nombre: "Mascarilla de Miel Brillo Intenso",
        marca: "CLICK HAIR",
        precio: 46000,
        presentacion: "300 ml",
        categoria: "Mascarillas",
        imagen: "img/click_hair/Mascarilla_miel_intenso.jpeg",
        descripcion: "Tratamiento intensivo para devolver el brillo, la suavidad y la hidratación a cabellos secos y opacos. Está formulado con proteínas que devuelven la estructura y miel de abejas que potencia la luminosidad, dejando el cabello súper suave.",
        disponible: true
    },
    {
        id: 15,
        nombre: "Mascarilla de Leche & Proteínas",
        marca: "CLICK HAIR",
        precio: 59900,
        precioOferta: 54500,
        presentacion: "300 ml",
        categoria: "Mascarillas",
        imagen: "img/click_hair/Mascarilla_leche_proteínas.jpeg",
        descripcion: "Esta mascarilla es el rescate intensivo que los cabellos en emergencia necesitan. Formulada con tecnología capilar coreana, reconstruye los enlaces del cabello reduciendo su porosidad y dando una apariencia renovada. Contiene leche, proteínas, aminoácidos y ceramidas que rellenan la fibra. Está potencializada con su booster para un rescate total.",
        disponible: true,
        destacado: true
    },

    //ACONDICIONADORES
    {
        id: 16,
        nombre: "Acondicionador de Miel Brillo Intenso",
        marca: "CLICK HAIR",
        precio: 40000,
        presentacion: "300 ml",
        categoria: "Acondicionador",
        imagen: "img/click_hair/Acondicionador_miel_intenso.jpeg",
        descripcion: "Gracias a la miel, acondiciona efectivamente el cabello, dejándolo suave, sin frizz, desenredado y con la cutícula bien sellada. Es ideal para cabellos secos y opacos que buscan recuperar la suavidad y el brillo.",
        disponible: true
    },
    {
        id: 17,
        nombre: "Acondicionador de Leche & Proteínas",
        marca: "CLICK HAIR",
        precio: 47000,
        presentacion: "300 ml",
        categoria: "Acondicionador",
        imagen: "img/click_hair/Acondicionador_profesional_leche_proteinas.jpeg",
        descripcion: "El acondicionador de leche y proteínas es el último paso de la rutina de recuperación intensiva, sellando la cutícula y reteniendo los activos en la fibra capilar. Su fórmula con tecnología capilar coreana deja el cabello sin frizz, suave y fácil de peinar.",
        disponible: true
    },
    {
        id: 18,
        nombre: "Acondicionador de Ají",
        marca: "CLICK HAIR",
        precio: 40500,
        presentacion: "300 ml",
        categoria: "Acondicionador",
        imagen: "img/click_hair/Acondicionador_aji.jpeg",
        descripcion: "Gracias al arroz, la avena y un cóctel de aminoácidos, hidrata profundamente el cabello, sellando la cutícula y devolviéndole la suavidad.",
        disponible: true
    }
];

// ==========================================
// PRODUCTOS ETNIKER
// ==========================================

const productosEtniker = [
    //FINALIZADORES
    {
        id: 19,
        nombre: "Gel Definidor Curl",
        marca: "ETNIKER",
        precio: 20500,
        presentacion: "300 g",
        categoria: "Finalizadores",
        imagen: "img/etniker/Gel_curl_300g.jpeg",
        descripcion: "Gel enriquecido con coco y linaza que aportan el balance perfecto entre fijación e hidratación. Es ideal para una definición controlada y con mucho movimiento.",
        disponible: true,
        destacado: true
    },
    {
        id: 20,
        nombre: "Gel Definidor Curl",
        marca: "ETNIKER",
        precio: 70000,
        precioOferta: 64000,
        presentacion: "1 kg",
        categoria: "Finalizadores",
        imagen: "img/etniker/Gel_curl_1kg.jpeg",
        descripcion: "Gel enriquecido con coco y linaza que aportan el balance perfecto entre fijación e hidratación. Es ideal para una definición controlada y con mucho movimiento.",
        disponible: true
    },
    {
        id: 21,
        nombre: "Óleo Capilar Hydroelixir",
        marca: "ETNIKER",
        precio: 31500,
        presentacion: "38 ml",
        categoria: "Finalizadores",
        imagen: "img/etniker/Oleo_capilar_hydroelixir.jpeg",
        descripcion: "Óleo de última tecnología que no engrasa (nutre), protegiendo y reparando la fibra capilar. Está formulado con aceite de coco, karité y monoi, sin sal ni parabenos, y es perfecto para romper el cast.",
        disponible: true
    },
    {
        id: 22,
        nombre: "Crema para Peinar 290g",
        marca: "ETNIKER",
        precio: 31500,
        presentacion: "290 g",
        categoria: "Finalizadores",
        imagen: "img/etniker/Crema_peinar_290g.jpeg",
        descripcion: "Crema para peinar enriquecida con coco, karité y monoi, que nutren y moldean los rizos, brindando definición y brillo, sin sal ni parabenos.",
        disponible: true
    },
    {
        id: 23,
        nombre: "Crema para Peinar 500g",
        marca: "ETNIKER",
        precio: 48500,
        presentacion: "500 g",
        categoria: "Finalizadores",
        imagen: "img/etniker/Crema_peinar_500g.jpeg",
        descripcion: "Crema para peinar enriquecida con coco, karité y monoi, que nutren y moldean los rizos, brindando definición y brillo, sin sal ni parabenos.",
        disponible: true
    },
    {
        id: 24,
        nombre: "Espuma Intensificadora de Rizos Etniker",
        marca: "ETNIKER",
        precio: 40000,
        presentacion: "150 ml",
        categoria: "Finalizadores",
        imagen: "img/etniker/Espuma_intensificadora_rizos.jpeg",
        descripcion: "Espuma intensificadora de rizos con extracto de açaí, linaza y coco, potencializada con ácido hialurónico. Otorga una definición prolongada para rizos voluminosos, ofreciendo un brillo excepcional y control del frizz.",
        disponible: true,
        destacado: true
    },

    //TRATAMIENTOS
    {
        id: 25,
        nombre: "Tratamiento Capilar Amazonía",
        marca: "ETNIKER",
        precio: 41500,
        presentacion: "1 kg",
        categoria: "Tratamiento",
        imagen: "img/etniker/Tratamiento_amazonía.jpeg",
        descripcion: "Tratamiento 4 en 1 de reparación profunda, formulado con MagNutSe, açaí, cacay, cupuaçu y proteína vegetal.",
        disponible: true
    },
    {
        id: 26,
        nombre: "Tratamiento Capilar Andino",
        marca: "ETNIKER",
        precio: 41500,
        presentacion: "1 kg",
        categoria: "Tratamiento",
        imagen: "img/etniker/Tratamiento_andino.jpeg",
        descripcion: "Tratamiento 4 en 1 de reparación profunda, formulado con ácido hialurónico, vitaminas liposomadas, MagNutSe, orquídea y girasol.",
        disponible: true
    },
    {
        id: 27,
        nombre: "Tratamiento Capilar Caribe",
        marca: "ETNIKER",
        precio: 41500,
        presentacion: "1 kg",
        categoria: "Tratamiento",
        imagen: "img/etniker/Tratamiento_caribe.jpeg",
        descripcion: "Tratamiento 4 en 1 de reparación profunda, formulado con MagNutSe, leche de coco, leche de aguacate, tamarindo, karité y proteína de lino.",
        disponible: true
    },
    {
        id: 28,
        nombre: "Tratamiento Capilar Pacífico",
        marca: "ETNIKER",
        precio: 41500,
        presentacion: "1 kg",
        categoria: "Tratamiento",
        imagen: "img/etniker/Tratamiento_Pacifico.jpeg",
        descripcion: "Tratamiento 4 en 1 de reparación profunda, formulado con MagNutSe, chontaduro, borojó, óleo de coco y keratina vegetal.",
        disponible: true
    },

    //SHAMPOOS
    {
        id: 29,
        nombre: "Shampoo Nutritivo e Hidratante de Coco y Karité",
        marca: "ETNIKER",
        precio: 31000,
        presentacion: "250 ml",
        categoria: "Shampoo",
        imagen: "img/etniker/Shampoo_coco_karite_250ml.jpeg",
        descripcion: "Shampoo nutritivo con coco y karité que limpia suavemente sin agredir los rizos. Es libre de sal, sulfatos y parabenos.",
        disponible: true
    },
    {
        id: 30,
        nombre: "Shampoo Nutritivo e Hidratante de Coco y Karité",
        marca: "ETNIKER",
        precio: 58500,
        presentacion: "500 ml",
        categoria: "Shampoo",
        imagen: "img/etniker/Shampoo_coco_karite_500ml.jpeg",
        descripcion: "Shampoo nutritivo con coco y karité que limpia suavemente sin agredir los rizos. Es libre de sal, sulfatos y parabenos.",
        disponible: true
    },
    {
        id: 31,
        nombre: "Shampoo Limpieza Profunda Etniker",
        marca: "ETNIKER",
        precio: 20000,
        presentacion: "250 ml",
        categoria: "Shampoo",
        imagen: "img/etniker/Shampoo_limpieza_profunda.jpeg",
        descripcion: "Shampoo clarificante y antirresiduos, ideal para una limpieza profunda en cabellos grasos o que tengan acumulación.",
        disponible: true
    },

    //MASCARILLAS
    {
        id: 32,
        nombre: "Mascarilla Deep Conditioner 300g",
        marca: "ETNIKER",
        precio: 31000,
        presentacion: "300 g",
        categoria: "Mascarillas",
        imagen: "img/etniker/Mascarilla_deep_300g.jpeg",
        descripcion: "Mascarilla especialmente diseñada para nutrir, suavizar y humectar profundamente la fibra capilar. Está formulada con aceite de coco, karité y monoi, sin sal ni parabenos.",
        disponible: true
    },
    {
        id: 33,
        nombre: "Mascarilla Deep Conditioner 570g",
        marca: "ETNIKER",
        precio: 55500,
        presentacion: "570 g",
        categoria: "Mascarillas",
        imagen: "img/etniker/Mascarilla_deep_570g.jpeg",
        descripcion: "Mascarilla especialmente diseñada para nutrir, suavizar y humectar profundamente la fibra capilar. Está formulada con aceite de coco, karité y monoi, sin sal ni parabenos.",
        disponible: true,
        destacado: true
    }
];

// ==========================================
// PRODUCTOS MILAGROS
// ==========================================

const productosMilagros = [
    // FINALIZADORES
    {
        id: 34,
        nombre: "Sérum Revitalizante",
        marca: "MILAGROS",
        precio: 32500,
        presentacion: "55 ml",
        categoria: "Finalizadores",
        imagen: "img/milagros/Serum1.jpeg",
        descripcion: "Tratamiento tipo sérum para puntas secas y cabellos maltratados.",
        disponible: true
    },
    {
        id: 35,
        nombre: "Termoprotector Desenredante",
        marca: "MILAGROS",
        precio: 33500,
        presentacion: "250 g",
        categoria: "Finalizadores",
        imagen: "img/milagros/Termoprotectores_desenredantes.jpeg",
        descripcion: "Fórmula diseñada para facilitar el desenredo y proteger el cabello de herramientas de calor hasta 230 °C.",
        disponible: true,
        destacado: true
    },
    {
        id: 36,
        nombre: "Hair Wax Stick (Cera Anti Frizz)",
        marca: "MILAGROS",
        precio: 36500,
        presentacion: "49 g",
        categoria: "Finalizadores",
        imagen: "img/milagros/hair_stick.jpg",
        descripcion: "Fórmula diseñada para facilitar el peinado y controlar el frizz y los cabellos rebeldes de forma práctica.",
        disponible: true
    },
    {
        id: 37,
        nombre: "Gotas Mágicas",
        marca: "MILAGROS",
        precio: 29000,
        presentacion: "60 ml",
        categoria: "Finalizadores",
        imagen: "img/milagros/gotas_magicas.jpg",
        descripcion: "Aportan brillo instantáneo, controlan el frizz y ayudan a sellar las puntas del cabello.",
        disponible: true
    },

    // PERFUMES
    {
        id: 38,
        nombre: "Perfumes Capilares",
        marca: "MILAGROS",
        precio: 32000,
        presentacion: "120 ml",
        categoria: "Perfumes",
        imagen: "img/milagros/Perfumes_capilares.jpeg",
        descripcion: "Dale una fragancia deliciosa y duradera a tu cabello. Elige tu aroma favorito (Bali, Gold, Martina, Sublime, Majestuosa e Irresistible).",
        disponible: true
    },
    {
        id: 39,
        nombre: "Perfumes Capilares Mini",
        marca: "MILAGROS",
        precio: 11800,
        presentacion: "30 ml",
        categoria: "Perfumes",
        imagen: "img/milagros/Perfumes_capilares_mini.jpeg",
        descripcion: "Dale una fragancia deliciosa y duradera a tu cabello. Elige tu aroma favorito en tamaño de viaje.",
        disponible: true
    },

    // TRATAMIENTOS
    {
        id: 40,
        nombre: "Bio Repolizador Capilar",
        marca: "MILAGROS",
        precio: 35500,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/milagros/Biorepolarizador.jpeg",
        descripcion: "Tratamiento reparador para cabellos procesados químicamente que necesiten recuperar brillo, hidratación, fuerza y sedosidad.",
        disponible: true
    },
    {
        id: 41,
        nombre: "Bio Repolarizador Capilar",
        marca: "MILAGROS",
        precio: 70000,
        presentacion: "1 L",
        categoria: "Tratamiento",
        imagen: "img/milagros/Biorepolarizador_1L.jpeg",
        descripcion: "Tratamiento reparador con provitamina B5, keratina y vitamina E para cabellos procesados químicamente que necesiten recuperar brillo, hidratación, fuerza y sedosidad.",
        disponible: true,
        destacado: true
    },
    {
        id: 42,
        nombre: "Tratamiento Emergencia Capilar",
        marca: "MILAGROS",
        precio: 35500,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/milagros/Tratamiento_emergencia.jpeg",
        descripcion: "Tratamiento con aminoácidos y proteínas diseñado para favorecer y fortalecer cabellos estancados, con poco volumen y dañados, devolviendo su fuerza y nutrición.",
        disponible: true
    },
    {
        id: 43,
        nombre: "Tratamiento Nutrición Rizos",
        marca: "MILAGROS",
        precio: 35500,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/milagros/Tratamiento_nutricion_rizos.jpeg",
        descripcion: "Tratamiento enriquecido con mantequilla de mango, extractos botánicos y aminoácidos para cabellos rizados que buscan crecimiento, definición y brillo.",
        disponible: true
    },
    {
        id: 44,
        nombre: "Tratamiento de Frutas",
        marca: "MILAGROS",
        precio: 35500,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/milagros/Tratamiento_de_frutas.jpeg",
        descripcion: "Tratamiento a base de frutas y complejo botánico para cabellos naturales que buscan brindar hidratación y fortalecimiento.",
        disponible: true
    },
    {
        id: 45,
        nombre: "Ampollas de Rescate",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "30 ml",
        categoria: "Tratamiento",
        imagen: "img/milagros/Ampolletas_rescate.jpeg",
        descripcion: "Mezcla de óleos y tecnología Plex, ideal para realizar un rescate instantáneo en cabellos maltratados que disponen de poco tiempo.",
        disponible: true
    },
    {
        id: 46,
        nombre: "Tratamiento Magia",
        marca: "MILAGROS",
        precio: 35500,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/milagros/tratamiento_magia.jpeg",
        descripcion: "Tratamiento sin enjuague con ácido hialurónico para cabellos secos y deshidratados que requieran suavidad instantánea.",
        disponible: true
    },

    // SHAMPOOS
    {
        id: 47,
        nombre: "Shampoo Bio Repolarizador Capilar",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_biorepolarizador.jpg",
        descripcion: "Ideal para revivir y reparar profundamente cabellos decolorados, maltratados y secos por daño químico y térmico, estimulando el crecimiento y devolviendo la nutrición y el brillo natural del cabello.",
        disponible: true
    },
    {
        id: 48,
        nombre: "Shampoo Milagro Herbal",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_herbal.jpeg",
        descripcion: "Ideal para cabellos grasos con poco volumen que busquen mayor crecimiento y un control eficaz de la grasa. Formulado con romero y jengibre 100 % naturales.",
        disponible: true
    },
    {
        id: 49,
        nombre: "Shampoo Ultra Nutritivo Premium (con aloe vera)",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_premium.jpeg",
        descripcion: "Ideal para cabellos de lavado frecuente que deseen limpieza sin resecar y brillo. Formulado con cristales de aloe vera 100 % naturales.",
        disponible: true
    },
    {
        id: 50,
        nombre: "Shampoo Emergencia Capilar (con biotina y queratina)",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_emergencia.jpeg",
        descripcion: "Ideal para cabellos estancados, dañados y debilitados en la fibra capilar, aportando a la raíz más fuerza y volumen.",
        disponible: true
    },
    {
        id: 51,
        nombre: "Shampoo Magia Capilar (con Ácido Hialurónico)",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_magia.jpeg",
        descripcion: "Ideal para cabellos secos y rizados, de lavado poco frecuente y que necesiten hidratación profunda.",
        disponible: true
    },
    {
        id: 52,
        nombre: "Shampoo Anticaspa Pro Crecimiento",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_caspa.jpeg",
        descripcion: "Ideal para cabellos con residuos o que sufren descamación y desean estimular el crecimiento.",
        disponible: true
    },
    {
        id: 53,
        nombre: "Shampoo de Arroz",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_arroz.jpeg",
        descripcion: "Ideal para cabellos secos que necesiten nutrición, fuerza y brillo. Enriquecido con agua de arroz y ácido hialurónico.",
        disponible: true
    },
    {
        id: 54,
        nombre: "Shampoo de Cebolla (con Péptidos)",
        marca: "MILAGROS",
        precio: 37500,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_cebolla.jpeg",
        descripcion: "Ideal para cabellos que deseen un crecimiento real y saludable, fortaleciendo aquellos que están débiles y limpiando sin resecar la fibra capilar. Fórmula con cebolla morada y péptidos.",
        disponible: true
    },
    {
        id: 55,
        nombre: "Shampoo Miracle Repair",
        marca: "MILAGROS",
        precio: 64000,
        presentacion: "300 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_repair.jpg",
        descripcion: "Shampoo profesional de reparación intensiva para cabello extremadamente dañado, decolorado y con procesos químicos. Posee una fórmula clínicamente comprobada que regenera la fibra capilar y reduce el quiebre.",
        disponible: true,
        destacado: true
    },
    {
        id: 56,
        nombre: "Shampoo Exfoliante Capilar",
        marca: "MILAGROS",
        precio: 32000,
        presentacion: "200 g",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_exfoliante.jpg",
        descripcion: "Ideal para realizar un detox capilar, removiendo y eliminando impurezas, residuos, exceso de grasa y células muertas.",
        disponible: true
    },
    {
        id: 57,
        nombre: "Shampoo Crecimiento con Extracto de Cebolla y Péptidos Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_cebolla_mini.jpg",
        descripcion: "Ideal para cabellos que deseen un crecimiento real y saludable, fortaleciendo aquellos que están débiles y limpiando sin resecar la fibra capilar. Fórmula con cebolla morada y péptidos.",
        disponible: true
    },
    {
        id: 58,
        nombre: "Shampoo Biorepolarizador Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_biorepolarizador_mini.jpg",
        descripcion: "Ideal para revivir y reparar profundamente cabellos decolorados, maltratados y secos por daño químico y térmico, estimulando el crecimiento y devolviendo la nutrición y el brillo natural del cabello.",
        disponible: true
    },
    {
        id: 59,
        nombre: "Shampoo Ultra Nutritivo Premium Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_premium_mini.jpg",
        descripcion: "Ideal para cabellos de lavado frecuente que deseen limpieza sin resecar y brillo. Formulado con cristales de aloe vera 100 % naturales.",
        disponible: true
    },
    {
        id: 60,
        nombre: "Shampoo Emergencia Capilar Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Shampoo",
        imagen: "img/milagros/shampoo_emergencia_mini.jpg",
        descripcion: "Ideal para cabellos estancados, dañados y debilitados en la fibra capilar, aportando a la raíz más fuerza y volumen.",
        disponible: true
    },

    // MASCARILLAS
    {
        id: 61,
        nombre: "Mascarilla Capilar Reparadora Intensiva con Extracto de Cebolla y Péptidos",
        marca: "MILAGROS",
        precio: 36000,
        presentacion: "450 ml",
        categoria: "Mascarillas",
        imagen: "img/milagros/mascarilla_reparador.jpeg",
        descripcion: "Fórmula con cebolla roja, péptidos y aminoácidos que reparan el cabello dañado, disminuyendo el frizz y devolviendo el brillo, la suavidad y la manejabilidad.",
        disponible: true
    },
    {
        id: 62,
        nombre: "Mascarilla Capilar Milagro Herbal",
        marca: "MILAGROS",
        precio: 36000,
        presentacion: "450 ml",
        categoria: "Mascarillas",
        imagen: "img/milagros/mascarilla_herbal.jpeg",
        descripcion: "Enriquecida con péptidos de avena y microesferas de vitamina E, que protegen, fortalecen y aportan hidratación y fuerza.",
        disponible: true
    },
    {
        id: 63,
        nombre: "Mascarilla Profesional Reparación Intensiva",
        marca: "MILAGROS",
        precio: 68500,
        presentacion: "450 ml",
        categoria: "Mascarillas",
        imagen: "img/milagros/mascarilla_professional.jpg",
        descripcion: "Mascarilla profesional de reparación extrema para cabellos muy dañados. Recupera hasta el 69 % de los enlaces que le dan resistencia al cabello, logra un 96 % menos de caída por quiebre y un 51 % de reparación de la cistina, maximizando el brillo y puliendo el frizz.",
        disponible: true,
        destacado: true
    },
    {
        id: 64,
        nombre: "Mascarilla Multivitamínica",
        marca: "MILAGROS",
        precio: 36000,
        presentacion: "450 ml",
        categoria: "Mascarillas",
        imagen: "img/milagros/mascarilla_multivitaminica.jpeg",
        descripcion: "Enriquecida con un cóctel de aminoácidos y vitaminas, devuelve la suavidad, la nutrición y el movimiento a cabellos opacos y resecos.",
        disponible: true
    },

    // ACONDICIONADORES
    {
        id: 65,
        nombre: "Acondicionador Antifrizz y Fortalecedor con Extracto de Cebolla y Péptidos",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_antifrizz.jpg",
        descripcion: "Fórmula con cebolla morada y péptidos que combate el frizz, desenreda al instante y previene la caída por quiebre.",
        disponible: true
    },
    {
        id: 66,
        nombre: "Acondicionador Ultra Nutritivo Premium",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_premium.jpg",
        descripcion: "Formulado con trozos de gel de aloe vera 100 % natural, acondiciona, suaviza profundamente y reduce el frizz hasta un 85 % en ambientes de alta humedad.",
        disponible: true
    },
    {
        id: 67,
        nombre: "Acondicionador Milagro Herbal",
        marca: "MILAGROS",
        precio: 34000,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_herbal.jpg",
        descripcion: "Enriquecido con arroz y romero, ayuda a disminuir la caída, reforzar el cabello y facilitar el desenredo en cabello húmedo.",
        disponible: true
    },
    {
        id: 68,
        nombre: "Acondicionador Miracle Repair",
        marca: "MILAGROS",
        precio: 66000,
        presentacion: "300 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_professional.jpg",
        descripcion: "Acondicionador profesional de reparación intensiva que aporta disciplina al cabello, revitalizando cabellos muy resecos y dañados por procesos químicos, controlando el frizz y facilitando hasta 16 veces el desenredo.",
        disponible: true
    },
    {
        id: 69,
        nombre: "Acondicionador Antifrizz y Fortalecedor con Extracto de Cebolla y Péptidos Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_mini_antifrizz.jpg",
        descripcion: "Fórmula con cebolla morada y péptidos que combate el frizz, desenreda al instante y previene la caída por quiebre.",
        disponible: true
    },
    {
        id: 70,
        nombre: "Acondicionador Ultra Nutritivo Premium Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_mini_premium.jpg",
        descripcion: "Formulado con trozos de gel de aloe vera 100 % natural, acondiciona, suaviza profundamente y reduce el frizz hasta un 85 % en ambientes de alta humedad.",
        disponible: true,
        destacado: true
    },
    {
        id: 71,
        nombre: "Acondicionador Milagro Herbal Mini",
        marca: "MILAGROS",
        precio: 12500,
        presentacion: "100 ml",
        categoria: "Acondicionador",
        imagen: "img/milagros/acondicionador_mini_herbal.jpg",
        descripcion: "Enriquecido con arroz y romero, ayuda a disminuir la caída, reforzar el cabello y facilitar el desenredo en cabello húmedo.",
        disponible: true
    }
];

// ==========================================
// PRODUCTOS BOTÁNICO
// ==========================================

const productosBotanico = [
    // PERFUMES
    {
        id: 72,
        nombre: "Perfumes Termoprotectores Desenredantes",
        marca: "BOTÁNICO",
        precio: 21000,
        presentacion: "120 ml",
        categoria: "Perfumes",
        imagen: "img/botanico/Perfumes_termoprotector_desenredantes.jpeg",
        descripcion: "Perfume capilar que facilita el desenredo, controla el frizz y protege de las herramientas de calor hasta 230 °C, dejando un aroma delicioso durante todo el día.",
        disponible: true,
        destacado: true
    },
    {
        id: 73,
        nombre: "Dúo Mini Perfumes Termoprotectores Desenredantes",
        marca: "BOTÁNICO",
        precio: 15000,
        presentacion: "30 ml",
        categoria: "Perfumes",
        imagen: "img/botanico/Perfumes_termoprotectores_mini.jpeg",
        descripcion: "Perfume capilar que facilita el desenredo, controla el frizz y protege de las herramientas de calor hasta 230 °C, dejando un aroma delicioso durante todo el día.",
        disponible: true
    },

    // TRATAMIENTOS
    {
        id: 74,
        nombre: "Tratamiento Jalea Real",
        marca: "BOTÁNICO",
        precio: 34000,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/botanico/Tratamiento_jalea_real.jpeg",
        descripcion: "El tratamiento Jalea Real es el ritual de la abeja reina, aportando nutrición, fuerza y brillo. Está enriquecido con todo el poder de la jalea real, 11 aminoácidos y provitamina B5, diseñado para transformar cabellos secos y porosos.",
        disponible: true
    },
    {
        id: 75,
        nombre: "Tratamiento Intensivo Plex",
        marca: "BOTÁNICO",
        precio: 34500,
        precioOferta: 33000,
        presentacion: "400 ml",
        categoria: "Tratamiento",
        imagen: "img/botanico/Tratamiento_intensivo_plex.jpeg",
        descripcion: "El tratamiento intensivo Plex a base de aguacate, banano y argán es un ritual ultrarreparador que devuelve la fuerza y resistencia a cabellos quebradizos, disminuye la caída y regenera la fibra capilar, devolviendo brillo y suavidad.",
        disponible: true,
        destacado: true
    },

    // SHAMPOOS
    {
        id: 76,
        nombre: "Shampoo S.O.S de Cebolla y Argán",
        marca: "BOTÁNICO",
        precio: 33000,
        presentacion: "400 ml",
        categoria: "Shampoo",
        imagen: "img/botanico/shampoo_sos.jpg",
        descripcion: "Este shampoo combina la cebolla y el argán junto a un activo especializado que ayuda a estimular el crecimiento desde la raíz, disminuir la caída y aportar hidratación, siendo ideal para todo tipo de cabellos.",
        disponible: true
    },
    {
        id: 77,
        nombre: "Shampoo Control Grasa de Romero y Eucalipto",
        marca: "BOTÁNICO",
        precio: 33000,
        presentacion: "400 ml",
        categoria: "Shampoo",
        imagen: "img/botanico/Shampoo_control_grasa_romero.jpeg",
        descripcion: "Con romero y eucalipto, ayuda a los cabellos con exceso de grasa y a su vez estimula el crecimiento, reduciendo la caída de manera natural.",
        disponible: true
    },
    {
        id: 78,
        nombre: "Shampoo Control Caspa con Menta y Ají",
        marca: "BOTÁNICO",
        precio: 33000,
        presentacion: "400 ml",
        categoria: "Shampoo",
        imagen: "img/botanico/Shampoo_anticaspa.jpeg",
        descripcion: "El shampoo control caspa con menta y ají brinda una dosis de frescura a aquellos cabellos que sufren de descamación y sobreproducción de sebo, necesitando equilibrar su cuero cabelludo mientras sus activos frenan la caída desde el interior.",
        disponible: true
    },
    {
        id: 79,
        nombre: "Shampoo Jalea Real",
        marca: "BOTÁNICO",
        precio: 35500,
        presentacion: "400 ml",
        categoria: "Shampoo",
        imagen: "img/botanico/Shampoo_jalea_real.jpeg",
        descripcion: "Con todo el poder de la jalea real, limpia suavemente mientras nutre la fibra a profundidad, ayudando a recuperar la apariencia de los cabellos secos y porosos, aportando brillo y fuerza al instante.",
        disponible: true
    },

    // MASCARILLAS
    {
        id: 80,
        nombre: "Mascarilla Jalea Real",
        marca: "BOTÁNICO",
        precio: 36500,
        presentacion: "320 ml",
        categoria: "Mascarillas",
        imagen: "img/botanico/Mascarilla_jalea_real.jpeg",
        descripcion: "Este es un ritual capilar con 87.3 % de ingredientes naturales, diseñado para nutrir intensamente, reducir considerablemente el frizz, recuperar la elasticidad y dar un brillo espejo.",
        disponible: true,
        destacado: true
    },
    {
        id: 81,
        nombre: "Mascarilla Bomba Botánica S.O.S. de Colágeno y Biotina",
        marca: "BOTÁNICO",
        precio: 34500,
        presentacion: "400 ml",
        categoria: "Mascarillas",
        imagen: "img/botanico/Mascarilla_SOS.jpeg",
        descripcion: "Mascarilla bomba con aceite de aguacate, biotina y colágeno que ayuda a reparar cabellos procesados químicamente gracias a su poderosa fórmula que penetra y recupera la apariencia saludable del cabello.",
        disponible: true
    },

    // KERATINAS
    {
        id: 82,
        nombre: "Keratina de 120 ml",
        marca: "BOTÁNICO",
        precio: 36000,
        precioOferta: 33500,
        presentacion: "120 ml",
        categoria: "Keratina",
        imagen: "img/botanico/Keratina_120ml.jpeg",
        descripcion: "Alisado botánico sin formol, enriquecido con 12 aceites naturales para aportar brillo y suavidad.",
        disponible: true
    },
    {
        id: 83,
        nombre: "Keratina de 250 ml",
        marca: "BOTÁNICO",
        precio: 61000,
        precioOferta: 56000,
        presentacion: "250 ml",
        categoria: "Keratina",
        imagen: "img/botanico/Keratina_250ml.jpeg",
        descripcion: "Alisado botánico sin formol, enriquecido con 12 aceites naturales para aportar brillo y suavidad.",
        disponible: true
    },
    {
        id: 84,
        nombre: "Keratina de 1 L",
        marca: "BOTÁNICO",
        precio: 152000,
        precioOferta: 142500,
        presentacion: "1 L",
        categoria: "Keratina",
        imagen: "img/botanico/Keratina_1L.jpeg",
        descripcion: "Alisado botánico sin formol, enriquecido con 12 aceites naturales para aportar brillo y suavidad.",
        disponible: true,
        destacado: true
    }
];

// ==========================================
// PRODUCTOS POCIÓN
// ==========================================

const productosPocion = [
    // FINALIZADORES
    {
        id: 85,
        nombre: "Dutonic",
        marca: "POCIÓN",
        precio: 53500,
        presentacion: "60 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Dutonic.jpeg",
        descripcion: "Dutonic es un dúo de tónicos capilares diseñados para frenar la caída del cabello y estimular su crecimiento desde la raíz. Se compone de EnergyTonic (noche) y OxyTonic (día) con nanotecnología que revive el folículo.",
        disponible: true
    },
    {
        id: 86,
        nombre: "Dual Crema para Peinar de Reparación",
        marca: "POCIÓN",
        precio: 35000,
        presentacion: "450 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Crema_dual.jpeg",
        descripcion: "Crema para peinar multifuncional diseñada para aportar hidratación, suavidad y controlar el cabello durante el día. Su fórmula ligera es apta para todo tipo de cabello.",
        disponible: true
    },
    {
        id: 87,
        nombre: "Crema para Peinar Leave On (Tongolé)",
        marca: "POCIÓN",
        precio: 35000,
        presentacion: "450 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Crema_peinar_tongole.jpeg",
        descripcion: "Crema para peinar formulada para cabellos rizados, diseñada para definir, proteger y controlar el frizz. Su fórmula liviana es ideal para cabellos delgados sin apelmazar.",
        disponible: true
    },
    {
        id: 88,
        nombre: "Tónico Control Caspa",
        marca: "POCIÓN",
        precio: 37000,
        presentacion: "70 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Tonico_control_caspa.jpeg",
        descripcion: "Tónico diseñado para controlar la descamación, equilibrar la grasa y mantener el cuero cabelludo en calma.",
        disponible: true
    },
    {
        id: 89,
        nombre: "BB Óleo Capilar Multifuncional",
        marca: "POCIÓN",
        precio: 42500,
        presentacion: "30 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/oleo_capilar.jpeg",
        descripcion: "Óleo capilar multifuncional diseñado para reparar, nutrir y sellar tu cabello, dándole un brillo extraordinario sin dejar sensación grasosa.",
        disponible: true
    },
    {
        id: 90,
        nombre: "BB Termoprotector",
        marca: "POCIÓN",
        precio: 43000,
        presentacion: "175 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Termoprotector.jpeg",
        descripcion: "Termoprotector capilar con activos amazónicos diseñados para proteger el cabello de herramientas de calor hasta 230 °C, neutralizando cargas eléctricas y aportando brillo.",
        disponible: true
    },
    {
        id: 91,
        nombre: "Gel Definidor de Rizos Tongolé",
        marca: "POCIÓN",
        precio: 39500,
        presentacion: "500 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Gel_rizos_tongole.jpeg",
        descripcion: "Define y mantiene el rizo evitando el encrespamiento por humedad, blindándolo del frizz y dando un acabado flexible y natural. Tipo de cabello: 2A a 3C.",
        disponible: true
    },
    {
        id: 92,
        nombre: "Spray Reestructurante Plex",
        marca: "POCIÓN",
        precio: 57000,
        presentacion: "100 ml",
        categoria: "Finalizadores",
        imagen: "img/pocion/Spray_restructurante_plex.jpeg",
        descripcion: "Tratamiento tipo spray que reconstruye de manera artificial los puentes de disulfuro, devolviendo fuerza, estructura y elasticidad a cabellos ultraprocesados, actuando a nivel molecular gracias a sus polímeros bioactivos y aminoácidos.",
        disponible: true
    },

    // PERFUMES
    {
        id: 93,
        nombre: "Perfume Boreal",
        marca: "POCIÓN",
        precio: 37000,
        presentacion: "100 ml",
        categoria: "Perfumes",
        imagen: "img/pocion/Perfume_boreal.jpeg",
        descripcion: "Perfume con aroma fresco, cítrico y dulce con notas frutales.",
        disponible: true
    },
    {
        id: 94,
        nombre: "Perfume Praia",
        marca: "POCIÓN",
        precio: 37000,
        presentacion: "100 ml",
        categoria: "Perfumes",
        imagen: "img/pocion/Perfume_prahia.jpeg",
        descripcion: "Perfume con aroma dulce con matices tropicales y cítricos.",
        disponible: true
    },

    // SHAMPOOS
    {
        id: 95,
        nombre: "Shampoo Control Caspa",
        marca: "POCIÓN",
        precio: 38000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/pocion/Shampoo_anticaspa.jpeg",
        descripcion: "Shampoo diseñado para controlar la caspa visible, equilibrar el cuero cabelludo y reducir la picazón, actuando sobre las causas más comunes de la descamación.",
        disponible: true
    },
    {
        id: 96,
        nombre: "Shampoo Control Grasa",
        marca: "POCIÓN",
        precio: 36000,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/pocion/Shampoo_control_grasa.jpeg",
        descripcion: "Shampoo para cueros cabelludos grasos, formulado con bicarbonato de sodio y bioactivos marinos que regulan el exceso de sebo, calman irritaciones y brindan una limpieza profunda.",
        disponible: true
    },
    {
        id: 97,
        nombre: "Shampoo para Rizos Tongolé",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/pocion/Shampoo_rizos_tongole.jpeg",
        descripcion: "Shampoo hidratante sin sulfatos, diseñado para cabellos ondulados o rizados, limpiando suavemente sin resecar el cuero cabelludo.",
        disponible: true
    },
    {
        id: 98,
        nombre: "Shampoo Crecimiento y Control de Caída",
        marca: "POCIÓN",
        precio: 42500,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/pocion/Shampoo_crecimiento.jpeg",
        descripcion: "Shampoo estimulante con tecnología bioactiva que actúa directamente sobre el cuero cabelludo para reactivar los folículos, detener la caída en un 81 % y promover un crecimiento constante.",
        disponible: true
    },
    {
        id: 99,
        nombre: "Shampoo Hidratante Dual",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "450 ml",
        categoria: "Shampoo",
        imagen: "img/pocion/Shampoo_hidratante_dual.jpeg",
        descripcion: "Shampoo hidratante de uso diario para limpiar eficazmente sin resecar, enriquecido con ingredientes como aloe vera y argán, que ayudan a los cabellos secos y porosos.",
        disponible: true,
        destacado: true
    },

    // MASCARILLAS
    {
        id: 100,
        nombre: "Ancestral Mascarilla de Reparación",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "350 ml",
        categoria: "Mascarillas",
        imagen: "img/pocion/Mascarilla_ancestral.jpeg",
        descripcion: "Poderosa mascarilla capilar con una potente fórmula de vitaminas A, B1, B2, B6, B12 y C, que renuevan, reparan y fortalecen intensamente la fibra capilar, mejorando la elasticidad y devolviendo la vitalidad a cabellos dañados.",
        disponible: true,
        destacado: true
    },
    {
        id: 101,
        nombre: "Mascarilla Fortalecedora Anticaída",
        marca: "POCIÓN",
        precio: 41500,
        precioOferta: 39500,
        presentacion: "350 ml",
        categoria: "Mascarillas",
        imagen: "img/pocion/Mascarilla_fortalecedora_anticaida.jpeg",
        descripcion: "Mascarilla fortalecedora que refuerza y ayuda al crecimiento, actuando sobre la hebra para disminuir un 69 % la caída por quiebre y aportar tres veces más fuerza.",
        disponible: true,
        destacado: true
    },
    {
        id: 102,
        nombre: "Mascarilla para Rizos Tongolé",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "350 ml",
        categoria: "Mascarillas",
        imagen: "img/pocion/Mascarilla_rizos_tongole.jpeg",
        descripcion: "Mascarilla hidratante para rizos con extractos 100 % naturales, que ayuda a mantener la elasticidad y la humedad naturales del cabello, dejando los rizos suaves y manejables.",
        disponible: true
    },
    {
        id: 103,
        nombre: "Suplemento Capilar de Banano (Bite me)",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "250 ml",
        categoria: "Mascarillas",
        imagen: "img/pocion/Bite_me.jpeg",
        descripcion: "Suplemento capilar que funciona como preshampoo, acondicionador y mascarilla. Formulado con ingredientes naturales como el banano y el aceite de coco, brinda protección a los lípidos y proteínas que se pierden con el tiempo.",
        disponible: true,
        destacado: true
    },
    {
        id: 104,
        nombre: "Sport - Tratamiento de Ultraprotección",
        marca: "POCIÓN",
        precio: 40000,
        presentacion: "250 ml",
        categoria: "Mascarillas",
        imagen: "img/pocion/Tratamiento_Sport.jpeg",
        descripcion: "Tratamiento capilar sin enjuague para deportistas, diseñado para proteger el cabello del sudor, el sol, el cloro, el agua de mar y otros factores ambientales. Su fórmula actúa como una barrera protectora que mantiene el cabello fuerte e hidratado durante la actividad física.",
        disponible: true
    },

    // BOOSTER
    {
        id: 105,
        nombre: "Booster - Tratamiento Capilar Reparador",
        marca: "POCIÓN",
        precio: 35000,
        presentacion: "50 ml",
        categoria: "Mascarillas",
        imagen: "img/pocion/Booster_reparador.jpeg",
        descripcion: "Tratamiento sin enjuague que repara e hidrata el cabello desde el primer uso, con tecnología avanzada de lípidos y ácidos. Es ideal para todo tipo de cabello y para potencializar los resultados al mezclarse con mascarillas y otros tratamientos capilares.",
        disponible: true
    },

    // ACONDICIONADORES
    {
        id: 106,
        nombre: "Acondicionador Dual",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/pocion/Acondicionador_dual.jpeg",
        descripcion: "Tratamiento acondicionador 2 en 1 que combina acondicionamiento y reparación exprés. Su fórmula ligera ayuda a desenredar, suavizar y aportar brillo al cabello sin dejar sensación pesada. Es ideal para mejorar la manejabilidad y devolverle una apariencia saludable.",
        disponible: true
    },
    {
        id: 107,
        nombre: "Acondicionador para Rizos Tongolé",
        marca: "POCIÓN",
        precio: 35500,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/pocion/Acondicionador_rizos_tongole.jpeg",
        descripcion: "Tratamiento acondicionador especialmente formulado para cabellos rizados, crespos y afro. Enriquecido con activos de algodón, manteca de karité, macadamia y extracto de coco, ayuda a hidratar, fortalecer y suavizar la fibra capilar, facilitando el desenredo, mejorando la manejabilidad de los rizos y aportando brillo, control y efecto antifrizz.",
        disponible: true
    },
    {
        id: 108,
        nombre: "Acondicionador Control Caspa",
        marca: "POCIÓN",
        precio: 40000,
        precioOferta: 38500,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/pocion/Acondicionador_control_caspa.jpeg",
        descripcion: "Acondicionador diseñado para complementar la rutina control caspa POCIÓN+. Ayuda a desenredar, suavizar y mejorar la manejabilidad del cabello sin dejar sensación pesada. Además, contribuye a mantener el equilibrio del cuero cabelludo, proporcionando frescura y confort mientras ayuda a reducir la sensación de picazón.",
        disponible: true
    },
    {
        id: 109,
        nombre: "Acondicionador Crecimiento y Caída",
        marca: "POCIÓN",
        precio: 37000,
        presentacion: "450 ml",
        categoria: "Acondicionador",
        imagen: "img/pocion/Acondicionador_crecimiento_caida.jpeg",
        descripcion: "Tratamiento acondicionador anticaída que sella, repara y protege la fibra capilar sin dejar sensación pesada. Su fórmula combina proteínas, péptidos marinos y aceite de semilla de uva para fortalecer el cabello, mejorar su elasticidad y aportar hidratación, suavidad y brillo, facilitando el desenredo y ayudando a reducir la caída asociada al quiebre.",
        disponible: true
    }
];

// ==========================================
// PRODUCTOS OLÉ
// ==========================================

const productosOle = [
    //FINALIZADORES
    {
        id: 110,
        nombre: "Termoprotector Capilar de Aceite de Açaí",
        marca: "OLÉ",
        precio: 39000,
        presentacion: "250 ml",
        categoria: "Finalizador",
        imagen: "img/ole/Termoprotector_aceite_acai.jpeg",
        descripcion: "Termoprotector desenredante que protege el cabello hasta los 230 °F y de los rayos UV. Hidrata, suaviza y ayuda a preservar el color, mientras desenreda el cabello sin esfuerzo y lo deja manejable.",
        disponible: true
    },
    {
        id: 111,
        nombre: "Óleo Capilar de Uchuva",
        marca: "OLÉ",
        precio: 30000,
        presentacion: "55 ml",
        categoria: "Finalizador",
        imagen: "img/ole/Oleo_capilar_uchuva.jpeg",
        descripcion: "Óleo bifásico hidratante formulado con una mezcla nutritiva de aceites esenciales y extracto de uchuva 100 % natural. Hidrata, sella y controla el frizz sin dejar sensación grasosa.",
        disponible: true
    },

    //TRATAMIENTOS
    {
        id: 112,
        nombre: "Tratamiento Capilar Cóctel de Frutas",
        marca: "OLÉ",
        precio: 35500,
        presentacion: "300 ml",
        categoria: "Tratamiento",
        imagen: "img/ole/Tratamiento_coctel_frutas.jpeg",
        descripcion: "Tratamiento capilar enriquecido con vitaminas y antioxidantes provenientes de las frutas, aportando nutrición y fuerza al cabello, y protegiéndolo del daño diario.",
        disponible: true
    },
    {
        id: 113,
        nombre: "Tratamiento Capilar de Proteína de Arroz y Aminoácidos",
        marca: "OLÉ",
        precio: 36000,
        presentacion: "300 ml",
        categoria: "Tratamiento",
        imagen: "img/ole/Tratamiento_proteina_arroz_aminoacidos.jpeg",
        descripcion: "Tratamiento intensivo repolarizador formulado con proteína de arroz y aminoácidos que reparan profundamente la fibra capilar, reduciendo daños visibles, duplicando la suavidad y aportando una textura de terciopelo.",
        disponible: true
    },
    {
        id: 114,
        nombre: "Tratamiento Capilar de Pulpa de Coco",
        marca: "OLÉ",
        precio: 36000,
        presentacion: "300 ml",
        categoria: "Tratamiento",
        imagen: "img/ole/Tratamiento_pulpa_coco.jpeg",
        descripcion: "Tratamiento de hidratación y nutrición intensa que le devuelve el brillo y la suavidad al cabello seco y maltratado gracias a su extracto de coco, eliminando el frizz.",
        disponible: true
    },

    //SHAMPOOS
    {
        id: 115,
        nombre: "Shampoo Capilar Control de Grasa de Cebolla y Jengibre",
        marca: "OLÉ",
        precio: 37000,
        precioOferta: 34700,
        presentacion: "500 ml",
        categoria: "Shampoo",
        imagen: "img/ole/Shampoo_jengibre_cebolla.jpeg",
        descripcion: "Shampoo antigrasa formulado con ingredientes naturales que purifican y equilibran el cuero cabelludo, dando una sensación de frescura y dejándolo limpio por más tiempo.",
        disponible: true
    },
    {
        id: 116,
        nombre: "Shampoo Fortalecedor Capilar de Arroz, Avena y Linaza",
        marca: "OLÉ",
        precio: 34700,
        presentacion: "500 ml",
        categoria: "Shampoo",
        imagen: "img/ole/Shampoo_fortalecedor_arroz_linaza.jpeg",
        descripcion: "Shampoo revitalizante formulado con arroz, avena y linaza que estimula el crecimiento, refuerza el folículo y limpia suavemente mientras hidrata.",
        disponible: true
    },
    {
        id: 117,
        nombre: "Shampoo Capilar de Coco, Canela y Miel",
        marca: "OLÉ",
        precio: 34700,
        presentacion: "500 ml",
        categoria: "Shampoo",
        imagen: "img/ole/Shampoo_nutritivo_coco_miel.jpeg",
        descripcion: "Shampoo de hidratación profunda que limpia con eficacia pero sin resecar, dejando el cabello suave y brillante, mientras sus activos restauran el cabello seco.",
        disponible: true
    },
    {
        id: 118,
        nombre: "Shampoo Capilar Mix de Frutas",
        marca: "OLÉ",
        precio: 34700,
        presentacion: "500 ml",
        categoria: "Shampoo",
        imagen: "img/ole/Shampoo_mix_frutas.jpeg",
        descripcion: "Shampoo reparador y antioxidante enriquecido con una mezcla de frutas que protege el color y resguarda la fibra capilar de su oxidación.",
        disponible: true
    },
    {
        id: 119,
        nombre: "Shampoo Capilar Vinagre de Manzana",
        marca: "OLÉ",
        precio: 34700,
        presentacion: "500 ml",
        categoria: "Shampoo",
        imagen: "img/ole/Shampoo_vinagre_manzana.jpeg",
        descripcion: "Shampoo 2 en 1 que limpia y acondiciona, ayudando a controlar el frizz desde el primer lavado. Su fórmula con vinagre de manzana equilibra el pH, elimina residuos y sella la cutícula.",
        disponible: true
    },

    //ACONDICIONADORES
    {
        id: 120,
        nombre: "Acondicionador Capilar Proteína de Arroz Crecimiento",
        marca: "OLÉ",
        precio: 34000,
        presentacion: "500 ml",
        categoria: "Acondicionador",
        imagen: "img/ole/Acondicionador_crecimiento_proteina_arroz.jpeg",
        descripcion: "Acondicionador diseñado para hidratar, desenredar y fortalecer el cabello. Formulado con proteína de arroz hidrolizada, aloe vera y extracto de avena, ayuda a aportar extra suavidad, reducir el frizz y disciplinar la hebra sin dejar el cabello pesado.",
        disponible: true
    },
    {
        id: 121,
        nombre: "Acondicionador Capilar Algodón y Coco Hidratante",
        marca: "OLÉ",
        precio: 34000,
        presentacion: "500 ml",
        categoria: "Acondicionador",
        imagen: "img/ole/Acondicionador_hidratante_algodon_coco.jpeg",
        descripcion: "Acondicionador de textura ligera que hidrata intensamente sin aportar peso. Es ideal para cabellos delgados que busquen suavidad y brillo.",
        disponible: true
    },
    {
        id: 122,
        nombre: "Acondicionador Capilar Jarabe de Mango",
        marca: "OLÉ",
        precio: 34000,
        presentacion: "500 ml",
        categoria: "Acondicionador",
        imagen: "img/ole/Acondicionador_jarabe_mango.jpeg",
        descripcion: "Acondicionador que fortalece y protege el largo evadiendo la caída por quiebre, brindando hidratación y protegiendo el color de los cabellos tinturados.",
        disponible: true
    }
];

// ==========================================
// PRODUCTOS OTROS
// ==========================================

const productosOtros = [
    {
        id: 123,
        nombre: "Óleo Extraordinario Elvive",
        precio: 38000,
        presentacion: "100 ml",
        categoria: "Finalizador",
        imagen: "img/otros/Oleo_extraordinario_elvive.jpeg",
        descripcion: "Tratamiento tipo aceite formulado con 6 óleos de flores preciosas que brindan nutrición intensa, brillo extraordinario, control del frizz y protección térmica.",
        disponible: true,
        destacado: true
    },
    {
        id: 124,
        nombre: "Mascarilla Karsell Colágeno",
        precio: 68000,
        presentacion: "500 g",
        categoria: "Mascarillas",
        imagen: "img/otros/Mascarilla_Karsell_colageno.jpeg",
        descripcion: "Mascarilla enriquecida con colágeno concentrado, keratina y aceite de argán que rescata cabellos procesados y ultrasecos en 10 min, nutriendo y controlando el frizz de manera definitiva.",
        disponible: true,
        destacado: true
    }
];

// ==========================================
// UNIFICACIÓN DE PRODUCTOS
// ==========================================

const productos = [
    ...productosBotanico,
    ...productosClick,
    ...productosEtniker,
    ...productosMilagros,
    ...productosPocion,
    ...productosOle,
    ...productosOtros
].map((producto, indice) => ({
    ...producto,
    id: indice + 1
}));

window.productos = productos;