const recetas = [
  {
    titulo: "Lentejas con verduras",
    slug: "lentejas-con-verduras",
    imagen: "img/recetas/lentejas-con-verduras.webp",
    descripcion: "Plato sencillo, nutritivo y económico, ideal para preparar varias raciones.",

    keywords: [ 
      "lentejas",
      "verduras",
      "legumbres",
      "cebolla",
      "zanahoria",
      "pimiento",
      "ajo",
      "tomate",
      "aceite",
      "laurel"
    ],
    categoria: "Legumbres",
    tipo: "Almuerzo",
    tiempo: "35 min"
  },
  {
    titulo: "Garbanzos con espinacas",
    slug: "garbanzos-con-espinacas",
    imagen: "img/recetas/garbanzos-con-espinacas.webp",
    descripcion: "Receta tradicional, sabrosa y muy apañada para comer legumbres entre semana.",
    keywords: [
      "garbanzos",
      "espinacas",
      "ajo",
      "pan",
      "pimentón",
      "comnino",
      "tomate",
      "vinagre",
      "aceite",
      "sal"
    ],
    categoria: "Legumbres",
    tipo: "Almuerzo",
    tiempo: "30 min"
  },
  {
  titulo: "Salmorejo ligero con huevo duro",
  slug: "salmorejo-ligero-con-huevo-duro",
  imagen: "img/recetas/salmorejo-ligero-con-huevo-duro.webp",
  descripcion: "Una versión más ligera del salmorejo, sin pan y con huevo duro para hacerlo más saciante sin perder frescura.",
  keywords: [
    "salmorejo",
    "tomate",
    "ajo",
    "aceite",
    "vinagre",
    "huevo",
    "sal"
  ],
  categoria: "Cremas frías",
  tipo: "Almuerzo",
  tiempo: "15 min"
  },
  {
  titulo: "Garbanzos al pesto con pollo y feta",
  slug: "garbanzos-al-pesto-con-pollo-y-feta",
  imagen: "img/recetas/garbanzos-al-pesto-con-pollo-y-feta.webp",
  descripcion: "Una receta fresca, saciante y muy sabrosa, con garbanzos, pollo, verduras y un toque cremoso de pesto y queso feta.",
  keywords: [
    "garbanzos",
    "pollo",
    "verduras",
    "pesto",
    "feta",
    "tomate",
    "pepino",
    "aceite",
    "sal",
    "pimienta",
    "pimenton"
  ],
  categoria: "Legumbres",
  tipo: "Almuerzo",
  tiempo: "20 min"
  },
  {
  titulo: "Pollo al curry cremoso en 10 minutos",
  slug: "pollo-al-curry-cremoso-en-10-minutos",
  imagen: "img/recetas/pollo-al-curry-cremoso-en-10-minutos.webp",
  descripcion: "Un plato rápido, cremoso y lleno de sabor, perfecto para preparar una comida completa en apenas 10 minutos.",
  keywords: [
    "pollo",
    "arroz",
    "curry",
    "tomate",
    "yogur",
    "coco",
    "sal",
    "pimienta"
  ],
  categoria: "Pollo",
  tipo: "Almuerzo",
  tiempo: "10 min"
},
  {
  titulo: "Ensalada cremosa de pollo y yogur",
  slug: "ensalada-cremosa-de-pollo-y-yogur",
  imagen: "img/recetas/ensalada-cremosa-de-pollo-y-yogur.webp",
  descripcion: "Una receta fresca, ligera y muy rica en proteína, perfecta para una comida o cena rápida sin caer en lo típico.",
  keywords: [
    "ensalada",
    "pollo",
    "yogur",
    "pechuga",
    "pepino",
    "cebolla",
    "ajo",
    "limón",
    "aceite",
    "sal",
    "pimienta"
  ],
  categoria: "Pollo",
  tipo: "Cena",
  tiempo: "15 min"
  },
  {
  titulo: "Ensalada de sandía, uvas y feta",
  slug: "ensalada-de-sandia-uvas-y-feta",
  imagen: "img/recetas/ensalada-de-sandia-uvas-y-feta.webp",
  descripcion: "Una ensalada fresca, crujiente y muy sabrosa, con fruta, verduras y queso feta para los días de calor.",
  keywords: [
    "ensalada",
    "sandía",
    "uvas",
    "feta",
    "pollo",
    "pechuga",
    "pepino",
    "cebolla",
    "tomate",
    "menta",
    "aceite",
    "sal",
    "pimienta"
  ],
  categoria: "Ensaladas",
  tipo: "Cena",
  tiempo: "15 min"
  },
  {
  titulo: "Ensalada malagueña",
  slug: "ensalada-malaguena",
  imagen: "img/recetas/ensalada-malaguena.webp",
  descripcion: "Una receta andaluza fresca, sencilla y llena de contraste, con patata, naranja, aceitunas, huevo y pescado.",
  keywords: [
    "ensalada",
    "patata",
    "naranja",
    "aceitunas",
    "huevo",
    "pescado",
    "atún",
    "tomate",
    "cebolla",
    "aceite",
    "vinagre",
    "sal"
  ],
  categoria: "Ensaladas",
  tipo: "Cena",
  tiempo: "20 min"
  },
  {
  titulo: "Ajoblanco cremoso sin pan",
  slug: "ajoblanco-cremoso-sin-pan",
  imagen: "img/recetas/ajoblanco-cremoso-sin-pan.webp",
  descripcion: "Una versión suave y cremosa del ajoblanco, sin pan y con fruta fresca para un plato distinto, ligero y muy veraniego.",
  keywords: [
    "ajoblanco",
    "almendras",
    "patata",
    "tomate",
    "cebolla",
    "cebolleta",
    "anacardos",
    "aceite",
    "vinagre",
    "sal",
    "aguacate",
    "paraguayo",
    "mango"
  ],
  categoria: "Cremas frías",
  tipo: "Cena",
  tiempo: "15 min"
  },
  {
  titulo: "Crema fría de espárragos y aguacate",
  slug: "crema-fria-de-esparragos-y-aguacate",
  imagen: "img/recetas/crema-fria-de-esparragos-y-aguacate.webp",
  descripcion: "Una crema fría suave, fresca y muy cremosa, perfecta para los días de calor o como cena ligera.",
  keywords: [
    "crema",
    "espárragos",
    "aguacate",
    "yogur",
    "vinagre",
    "aceite",
    "sal",
    "pimienta"
  ],
  categoria: "Cremas frías",
  tipo: "Cena",
  tiempo: "10 min"
  },
  {
  titulo: "Barquitos de berenjena al tomate",
  slug: "barquitos-de-berenjena-al-tomate",
  imagen: "img/recetas/barquitos-de-berenjena-al-tomate.webp",
  descripcion: "Una receta sencilla y muy ligera, con berenjena asada, cebolla, tomate y hierbas aromáticas.",
  keywords: [
    "berenjena",
    "cebolla",
    "tomate",
    "hierbas",
    "aceite",
    "sal",
    "orégano"
  ],
  categoria: "Verduras",
  tipo: "Cena",
  tiempo: "30 min"
  },
  {
  titulo: "Alcachofas con gambas",
  slug: "alcachofas-con-gambas",
  imagen: "img/recetas/alcachofas-con-gambas.webp",
  descripcion: "Una receta ligera y sabrosa, con alcachofas tiernas, gambas y un sofrito suave de ajo, cebolla y tomate.",
  keywords: [
    "alcachofas",
    "gambas",
    "langostinos",
    "ajo",
    "cebolla",
    "tomate",
    "aceite",
    "sal",
    "estragón"
  ],
  categoria: "Pescado y marisco",
  tipo: "Almuerzo",
  tiempo: "25 min"
  },
{
  titulo: "Mejillones a la francesa",
  slug: "mejillones-a-la-francesa",
  imagen: "img/recetas/mejillones-a-la-francesa.webp",
  descripcion: "Una receta muy simple y ligera, con mejillones cocidos con cebolla, pimienta y un toque de vinagre.",
  keywords: [
    "mejillones",
    "cebolla",
    "pimienta",
    "vinagre"
  ],
  categoria: "Pescado y marisco",
  tipo: "Cena",
  tiempo: "15 min"
  },
];