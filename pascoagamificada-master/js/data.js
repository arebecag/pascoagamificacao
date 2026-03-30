// ============================================================
//  DASHBOARD PÁSCOA — DATA.JS
//  Atualizado com base na planilha PascoaCamp.xlsx
// ============================================================

const PALETA = {
  lilac: '#e8a020',
  lilacBg: 'rgba(232,160,32,0.20)',
  pink: '#d35400',
  pinkBg: 'rgba(211,84,0,0.15)',
  orange: '#e67e22',
  orangeBg: 'rgba(230,126,34,0.15)',
  caramel: '#e8a020',
  caramelBg: 'rgba(232,160,32,0.18)',
  mint: '#9c5a1a',
  mintBg: 'rgba(156,90,26,0.14)',
  choco: '#7b3f1a',
  chocoBg: 'rgba(123,63,26,0.12)',
  cream: '#f5ead8',
};

const TOTAIS = {
  clientesParticipantes: 25898,
  cuponsApp: 27880,
  vendasApp: 41780,
  lojasParticipantes: 68,
  cuponsVendasCampanha: 148181,
  participacaoApp: 19,
  clientesTotalBase: 139161,
  clientesNaoParticipantes: 113263,
  clientesCompraramCampanha: 139161,
  clientesComAppInstalado: 49624,
  clientesSemAppInstalado: 89537,
  viewsCampanha: 139161,
  scanSuccess: 1828,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 2006,
  gamificacaoEscaneou: 1828,
  gamificacaoCompletou: 211,
  overlap: 0,
  produtosCampanha: 19,
  produtosApp: 18
};

const EVOLUCAO_DIARIA_CAMPANHA = [
  { data: '13/03', Dentro: { qtd: 758, tickets: 318, clientes: 295 }, Fora: { qtd: 14610, tickets: 8298, clientes: 7684 }, Total: { qtd: 15368, tickets: 8616, clientes: 7979 } },
  { data: '14/03', Dentro: { qtd: 1789, tickets: 1228, clientes: 1155 }, Fora: { qtd: 19367, tickets: 11289, clientes: 10590 }, Total: { qtd: 21156, tickets: 12517, clientes: 11745 } },
  { data: '15/03', Dentro: { qtd: 1347, tickets: 996, clientes: 911 }, Fora: { qtd: 9739, tickets: 6988, clientes: 6497 }, Total: { qtd: 11086, tickets: 7984, clientes: 7408 } },
  { data: '16/03', Dentro: { qtd: 1046, tickets: 744, clientes: 687 }, Fora: { qtd: 5650, tickets: 4350, clientes: 4018 }, Total: { qtd: 6696, tickets: 5094, clientes: 4705 } },
  { data: '17/03', Dentro: { qtd: 1676, tickets: 1203, clientes: 1114 }, Fora: { qtd: 7500, tickets: 5217, clientes: 4879 }, Total: { qtd: 9176, tickets: 6420, clientes: 5993 } },
  { data: '18/03', Dentro: { qtd: 2192, tickets: 1437, clientes: 1334 }, Fora: { qtd: 8471, tickets: 5848, clientes: 5498 }, Total: { qtd: 10663, tickets: 7285, clientes: 6832 } },
  { data: '19/03', Dentro: { qtd: 1879, tickets: 1317, clientes: 1221 }, Fora: { qtd: 7967, tickets: 5736, clientes: 5362 }, Total: { qtd: 9846, tickets: 7053, clientes: 6583 } },
  { data: '20/03', Dentro: { qtd: 2363, tickets: 1591, clientes: 1477 }, Fora: { qtd: 9174, tickets: 6693, clientes: 6253 }, Total: { qtd: 11537, tickets: 8284, clientes: 7730 } },
  { data: '21/03', Dentro: { qtd: 5696, tickets: 3961, clientes: 3727 }, Fora: { qtd: 8521, tickets: 6501, clientes: 6209 }, Total: { qtd: 14217, tickets: 10462, clientes: 9936 } },
  { data: '22/03', Dentro: { qtd: 4322, tickets: 3182, clientes: 2933 }, Fora: { qtd: 6307, tickets: 4954, clientes: 4630 }, Total: { qtd: 10629, tickets: 8136, clientes: 7563 } },
  { data: '23/03', Dentro: { qtd: 3547, tickets: 2329, clientes: 2149 }, Fora: { qtd: 4480, tickets: 3272, clientes: 3059 }, Total: { qtd: 8027, tickets: 5601, clientes: 5208 } },
  { data: '24/03', Dentro: { qtd: 4495, tickets: 2990, clientes: 2763 }, Fora: { qtd: 6169, tickets: 4465, clientes: 4211 }, Total: { qtd: 10664, tickets: 7455, clientes: 6974 } },
  { data: '25/03', Dentro: { qtd: 2277, tickets: 1482, clientes: 1385 }, Fora: { qtd: 9621, tickets: 6538, clientes: 6161 }, Total: { qtd: 11898, tickets: 8020, clientes: 7546 } },
  { data: '26/03', Dentro: { qtd: 1477, tickets: 896, clientes: 829 }, Fora: { qtd: 10066, tickets: 6582, clientes: 6231 }, Total: { qtd: 11543, tickets: 7478, clientes: 7060 } },
  { data: '27/03', Dentro: { qtd: 1822, tickets: 1115, clientes: 1041 }, Fora: { qtd: 14595, tickets: 9215, clientes: 8759 }, Total: { qtd: 16417, tickets: 10330, clientes: 9800 } },
  { data: '28/03', Dentro: { qtd: 2933, tickets: 1776, clientes: 1656 }, Fora: { qtd: 22516, tickets: 14164, clientes: 13570 }, Total: { qtd: 25449, tickets: 15940, clientes: 15226 } },
  { data: '29/03', Dentro: { qtd: 2161, tickets: 1315, clientes: 1221 }, Fora: { qtd: 15914, tickets: 10191, clientes: 9652 }, Total: { qtd: 18075, tickets: 11506, clientes: 10873 } }
];

const EVOLUCAO_DIARIA_GERAL = [
  { data: '01/03', qtd: 15499, cupons: 11942, clientes: 11256 },
  { data: '02/03', qtd: 12916, cupons: 9714, clientes: 9193 },
  { data: '03/03', qtd: 14409, cupons: 10690, clientes: 10142 },
  { data: '04/03', qtd: 15064, cupons: 10335, clientes: 9809 },
  { data: '05/03', qtd: 12155, cupons: 8364, clientes: 7908 },
  { data: '06/03', qtd: 14079, cupons: 9774, clientes: 9139 },
  { data: '07/03', qtd: 23400, cupons: 16614, clientes: 15846 },
  { data: '08/03', qtd: 16062, cupons: 11993, clientes: 11061 },
  { data: '09/03', qtd: 7377, cupons: 5470, clientes: 5017 },
  { data: '10/03', qtd: 10531, cupons: 6954, clientes: 6502 },
  { data: '11/03', qtd: 12318, cupons: 7552, clientes: 7023 },
  { data: '12/03', qtd: 12075, cupons: 7295, clientes: 6764 },
  { data: '13/03', qtd: 15368, cupons: 8616, clientes: 7979 },
  { data: '14/03', qtd: 21156, cupons: 12517, clientes: 11745 },
  { data: '15/03', qtd: 11086, cupons: 7984, clientes: 7408 },
  { data: '16/03', qtd: 6696, cupons: 5094, clientes: 4705 },
  { data: '17/03', qtd: 9176, cupons: 6420, clientes: 5993 },
  { data: '18/03', qtd: 10663, cupons: 7285, clientes: 6832 },
  { data: '19/03', qtd: 9846, cupons: 7053, clientes: 6583 },
  { data: '20/03', qtd: 11537, cupons: 8284, clientes: 7730 },
  { data: '21/03', qtd: 14217, cupons: 10462, clientes: 9936 },
  { data: '22/03', qtd: 10629, cupons: 8136, clientes: 7563 },
  { data: '23/03', qtd: 8027, cupons: 5601, clientes: 5208 },
  { data: '24/03', qtd: 10664, cupons: 7455, clientes: 6974 },
  { data: '25/03', qtd: 11898, cupons: 8020, clientes: 7546 },
  { data: '26/03', qtd: 11543, cupons: 7478, clientes: 7060 },
  { data: '27/03', qtd: 16417, cupons: 10330, clientes: 9800 },
  { data: '28/03', qtd: 25449, cupons: 15940, clientes: 15226 },
  { data: '29/03', qtd: 18075, cupons: 11506, clientes: 10873 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 8401, tickets: 4963, clientes: 4765 },
  { loja: '21. Nilo Pecanha', qtd: 7577, tickets: 4658, clientes: 4487 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 7329, tickets: 5156, clientes: 4947 },
  { loja: '22. Champagnat', qtd: 7183, tickets: 3884, clientes: 3648 },
  { loja: '52. Mafra Centro Ii', qtd: 6046, tickets: 3422, clientes: 3341 },
  { loja: '06. Pinheirinho', qtd: 5468, tickets: 3686, clientes: 3500 },
  { loja: '26. Torres', qtd: 5331, tickets: 3175, clientes: 3086 },
  { loja: '25. Paranagua-Raia', qtd: 5290, tickets: 3458, clientes: 3151 },
  { loja: '27. Novo Mundo', qtd: 4659, tickets: 3265, clientes: 3113 },
  { loja: '82. Condor Cic Jk', qtd: 4619, tickets: 3003, clientes: 2781 },
  { loja: '24. Santa Candida', qtd: 4592, tickets: 3243, clientes: 3122 },
  { loja: '23. Araucaria Br', qtd: 4467, tickets: 3024, clientes: 2935 },
  { loja: '04. Lapa', qtd: 4420, tickets: 2795, clientes: 2637 },
  { loja: '37. Cajuru', qtd: 4410, tickets: 3194, clientes: 3090 },
  { loja: '91. Zonta (Franquia)', qtd: 4109, tickets: 2698, clientes: 2580 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 4071, tickets: 2718, clientes: 2551 },
  { loja: '20. Maringa Av Parana', qtd: 4047, tickets: 3074, clientes: 2827 },
  { loja: '54. Francisco Derosso', qtd: 4043, tickets: 2730, clientes: 2590 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 3987, tickets: 2483, clientes: 2322 },
  { loja: '11. Sao Braz', qtd: 3907, tickets: 2686, clientes: 2572 },
  { loja: '56. Piraquara', qtd: 3883, tickets: 2684, clientes: 2558 },
  { loja: '45. Araucaria Costeira', qtd: 3862, tickets: 2923, clientes: 2768 },
  { loja: '49. Boa Vista', qtd: 3693, tickets: 2763, clientes: 2679 },
  { loja: '28. Cristo Rei', qtd: 3599, tickets: 2480, clientes: 2309 },
  { loja: '32. Uvaranas', qtd: 3517, tickets: 2329, clientes: 2223 },
  { loja: '30. Fazenda Rio Grande', qtd: 3500, tickets: 2329, clientes: 2189 },
  { loja: '83. Condor Merces', qtd: 3353, tickets: 2377, clientes: 2247 },
  { loja: '43. Almirante Tamandare', qtd: 3172, tickets: 2217, clientes: 2113 },
  { loja: '50. Santa Quiteria', qtd: 3121, tickets: 1846, clientes: 1747 },
  { loja: '58. Pilarzinho', qtd: 3113, tickets: 2272, clientes: 2181 },
  { loja: '07. Marechal', qtd: 3087, tickets: 2016, clientes: 1882 },
  { loja: '57. Joinville - Boa Vista', qtd: 3029, tickets: 2148, clientes: 1908 },
  { loja: '39. Pinhais', qtd: 3018, tickets: 2125, clientes: 2024 },
  { loja: '08. Paranagua Centro', qtd: 2969, tickets: 1586, clientes: 1298 },
  { loja: '71. Araucaria Capela Velha', qtd: 2960, tickets: 2260, clientes: 2061 },
  { loja: '41. Campo Mourao', qtd: 2906, tickets: 1919, clientes: 1857 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 2838, tickets: 1991, clientes: 1890 },
  { loja: '38. Colombo', qtd: 2754, tickets: 1963, clientes: 1890 },
  { loja: '36. Castro', qtd: 2744, tickets: 1745, clientes: 1576 },
  { loja: '13. Sitio Cercado', qtd: 2711, tickets: 2022, clientes: 1893 },
  { loja: '47. Pinhais Av.Irai', qtd: 2576, tickets: 1781, clientes: 1685 },
  { loja: '10. Campo Comprido', qtd: 2563, tickets: 1989, clientes: 1849 },
  { loja: '66. Barreirinha', qtd: 2540, tickets: 1421, clientes: 1327 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 2470, tickets: 1568, clientes: 1464 },
  { loja: '03. Santa Felicidade', qtd: 2430, tickets: 1639, clientes: 1519 },
  { loja: '46. Campo Largo Sao Jose', qtd: 2389, tickets: 1647, clientes: 1566 },
  { loja: '31. Campo Largo', qtd: 2332, tickets: 1542, clientes: 1434 },
  { loja: '48. Joinville Itaum', qtd: 2298, tickets: 1533, clientes: 1339 },
  { loja: '05. Wenceslau Braz', qtd: 2294, tickets: 1391, clientes: 1291 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 2272, tickets: 1495, clientes: 1421 },
  { loja: '51. Joinville America', qtd: 2256, tickets: 1424, clientes: 1311 },
  { loja: '40. Maringa Av Colombo', qtd: 2167, tickets: 1679, clientes: 1509 },
  { loja: '15. Apucarana', qtd: 2082, tickets: 1377, clientes: 1284 },
  { loja: '65. Rio Negro', qtd: 1959, tickets: 1119, clientes: 1071 },
  { loja: '63. Maringa Av Kakogawa', qtd: 1949, tickets: 1247, clientes: 1179 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 1914, tickets: 1315, clientes: 1220 },
  { loja: '55. Jaragua Do Sul', qtd: 1871, tickets: 1134, clientes: 1011 },
  { loja: '09. Londrina', qtd: 1822, tickets: 1317, clientes: 1128 },
  { loja: '64. Gralha Azul', qtd: 1804, tickets: 1420, clientes: 1322 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 1786, tickets: 1258, clientes: 1064 },
  { loja: '53. Joao Bettega', qtd: 1728, tickets: 1184, clientes: 1133 },
  { loja: '61. Jardim Das Americas', qtd: 1661, tickets: 1159, clientes: 1094 },
  { loja: '34. Brasilia', qtd: 1555, tickets: 1129, clientes: 1040 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 1357, tickets: 984, clientes: 771 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 1316, tickets: 942, clientes: 794 },
  { loja: '86. Condor S.J.Pinhais Rui Barbosa', qtd: 1282, tickets: 895, clientes: 838 },
  { loja: '17. Ahu', qtd: 1071, tickets: 772, clientes: 734 },
  { loja: '78. Rio Negrinho', qtd: 918, tickets: 510, clientes: 425 }
];

const SALES_DENTRO_MAP = {
  118311: { itens: 37, tickets: 24, clientes: 24 },
  1991454: { itens: 150, tickets: 90, clientes: 62 },
  2077535: { itens: 11633, tickets: 6738, clientes: 6248 },
  2077543: { itens: 11043, tickets: 7454, clientes: 6962 },
  2077568: { itens: 911, tickets: 692, clientes: 638 },
  2077576: { itens: 1058, tickets: 801, clientes: 743 },
  2077584: { itens: 9147, tickets: 6543, clientes: 6074 },
  2077592: { itens: 1149, tickets: 680, clientes: 649 },
  2128403: { itens: 0, tickets: 0, clientes: 0 },
  2128411: { itens: 3891, tickets: 2796, clientes: 2594 },
  2207371: { itens: 109, tickets: 89, clientes: 73 },
  2207389: { itens: 119, tickets: 84, clientes: 77 },
  2207397: { itens: 103, tickets: 72, clientes: 63 },
  2207405: { itens: 288, tickets: 182, clientes: 166 },
  2207413: { itens: 216, tickets: 155, clientes: 143 },
  2207421: { itens: 197, tickets: 141, clientes: 141 },
  2207439: { itens: 101, tickets: 64, clientes: 56 },
  2236370: { itens: 551, tickets: 443, clientes: 411 },
  2236388: { itens: 1077, tickets: 832, clientes: 774 }
};

const PRODUTOS_CAMPANHA_BASE = [
  {
    id: 118311,
    name: 'Amandita Lacta Choc. 200g',
    shortName: 'Amandita 200g',
    priceOriginal: 15.99,
    priceOffer: 14.99,
    discount: 6,
    img: 'https://sspark.genspark.ai/cfimages?u1=kwsBi5DR4re47I5Qd0zjw%2F%2BwypOZ4S9NWy8VYSWaGCocfZ32asUF714TZn9FVtjfmxkaAAzsg2EPVtnJaeFAjITh2iUK7rEpC7qqiKWmDR8RKnh2bq%2FQHjvDJ1mnEQ4%3D&u2=S2dFR3Iz7TRmbqI0&width=2560'
  },
  {
    id: 1991454,
    name: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g',
    shortName: 'Bombom Sortidos 220g',
    priceOriginal: 13.49,
    priceOffer: 10.99,
    discount: 19,
    img: 'https://sspark.genspark.ai/cfimages?u1=prmCEuVNUiJjNc4qxwAI8%2Bv9dT8Brmg4uIbTmhWDF8Zet3joOM2%2Fup0mMAymFFz8xWZDtKrR2ncu6i9pgAfTyQ1B3g%3D%3D&u2=oGX0TPyUQrZpMQdZ&width=2560'
  },
  {
    id: 2077535,
    name: 'Choc. Lacta Ao Leite 80g',
    shortName: 'Ao Leite 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2077543,
    name: 'Choc. Lacta Laka 80g',
    shortName: 'Laka 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'assets/img/laka-branco.svg'
  },
  {
    id: 2077568,
    name: 'Choc. Lacta Diamante Negro/Laka 80g',
    shortName: 'DN/Laka 80g',
    priceOriginal: 6.99,
    priceOffer: 6.89,
    discount: 1,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2077576,
    name: 'Choc. Lacta Diamante Negro 80g',
    shortName: 'Diamante Negro 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2077584,
    name: 'Choc. Lacta Shot 80g',
    shortName: 'Shot 80g',
    priceOriginal: 7.99,
    priceOffer: 6.99,
    discount: 13,
    img: 'assets/img/shot-amarelo.svg'
  },
  {
    id: 2077592,
    name: 'Choc. Lacta Amaro 80g',
    shortName: 'Amaro 80g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: null
  },
  {
    id: 2128403,
    name: 'Choc. Lacta 80g (var.)',
    shortName: 'Lacta 80g (var.)',
    priceOriginal: 7.99,
    priceOffer: 6.99,
    discount: 13,
    img: null
  },
  {
    id: 2128411,
    name: 'Choc. Lacta Ouro Bco 98g',
    shortName: 'Ouro Branco 98g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=YVuPStAWLZPuCLB3qpNXOHsFRpjHE%2FRmLBhHTBvaB8WdXZa63b6pIzGJZ40n4tlBPh11U0oy2tzMP9jBeJIs69s80k%2Bm5ypO0ySKtxmdJFGN5Npp5Q%3D%3D&u2=xAcjax1r8rzWHIBp&width=2560'
  },
  {
    id: 2207371,
    name: 'Choc. Lacta Diamante Negro/Laka 145g',
    shortName: 'DN/Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=g3gTP5eZl7cDin%2BuYFuKszluChpoeuz9V8MGoxA8XksdfaoVEAcpeCs919ot1vE5RwNk3kvQuUUhnkZQscqUgY7mTdOgrnv1BG%2B8dAysi%2Bft8U11NiE%3D&u2=2LqOTSJczrvpLKcj&width=2560'
  },
  {
    id: 2207389,
    name: 'Choc. Lacta Laka/Oreo 145g',
    shortName: 'Laka Oreo 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=4WdPTLPZh316JW5aIZpGQJNgOsx55l%2FuQ7J7U89Rf8%2Fo71a37I0aR7SS3MQEX3kf4oqT0dWkLRY7pGYj3KZWPSCy4g%3D%3D&u2=VsQs0eIePhKZdmXj&width=2560'
  },
  {
    id: 2207397,
    name: 'Choc. Lacta Diamante Negro 145g',
    shortName: 'Diam. Negro 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=KzLgqWtCZUkvaELu%2FzrHEbsvj6tCkggQv0lOWgoe7HPuTShcv2FLXE5lwscFtsdjp882ZAdy9Eb%2FE1Z4NjOdfGBf4RjzoJ0rs2yVE1whtqcWb5vDv%2BefaLPr7v7nC1%2B6CY6lasEQqxdpyM%2FtO6OaGBi9oSLAlhfiMIHB0NFdommahfK9ABjXADqO2JWfNq2xq66l4vHFWGQAEGU%2BdiNJ8sR2J4V%2BmPgYK0mhNg%3D%3D&u2=Rj2JfNbtLQxTdDif&width=2560'
  },
  {
    id: 2207405,
    name: 'Choc. Lacta Ao Leite 145g',
    shortName: 'Ao Leite 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2207413,
    name: 'Choc. Lacta Shot 145g',
    shortName: 'Shot 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: 'assets/img/shot-amarelo.svg'
  },
  {
    id: 2207421,
    name: 'Choc. Lacta Laka 145g',
    shortName: 'Laka 145g',
    priceOriginal: 11.90,
    priceOffer: 10.90,
    discount: 8,
    img: 'assets/img/laka-branco.svg'
  },
  {
    id: 2207439,
    name: 'Choc. Lacta Amaro 145g',
    shortName: 'Amaro 145g',
    priceOriginal: 11.90,
    priceOffer: 10.99,
    discount: 8,
    img: null
  },
  {
    id: 2236370,
    name: 'Choc. Lacta Ao Leite Rech. Caramelo 104g',
    shortName: 'Rech. Caramelo 104g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'https://sspark.genspark.ai/cfimages?u1=WzACG%2F4YtAYZ1OI7hY2sQPHxsoKeFhsXLFMG9v7Okg2D%2B%2F4oUYyCSejbclETE%2BD4By8%2FMTipDifbx58QfIQGS3dNyA%3D%3D&u2=%2BCgrL01zCpbYbTqA&width=2560'
  },
  {
    id: 2236388,
    name: 'Choc. Lacta Laka Rech. Caramelo 104g',
    shortName: 'Laka Rech. Caramelo 104g',
    priceOriginal: 7.49,
    priceOffer: 6.89,
    discount: 8,
    img: 'assets/img/laka-branco.svg'
  }
];

const PRODUTOS_CAMPANHA = PRODUTOS_CAMPANHA_BASE.map(p => {
  const venda = SALES_DENTRO_MAP[p.id];
  return {
    ...p,
    soldDentro: !!venda,
    itens: venda?.itens ?? 0,
    cupons: venda?.tickets ?? 0,
    clientes: venda?.clientes ?? 0
  };
});

const RANKING_DENTRO = PRODUTOS_CAMPANHA
  .filter(p => p.soldDentro)
  .map(p => ({
    id: p.id,
    nome: p.name,
    shortName: p.shortName,
    itens: p.itens,
    clientes: p.clientes,
    cupons: p.cupons,
    img: p.img
  }))
  .sort((a, b) => b.itens - a.itens);

const PODIO_TOP3 = RANKING_DENTRO.slice(0, 3);


const PARTICIPATION_RATE = TOTAIS.clientesParticipantes / TOTAIS.clientesTotalBase;

const LOJAS_OPERACIONAL = (() => {
  const totalShareBase = RANKING_LOJAS_DENTRO.reduce((sum, row) => sum + row.clientes, 0);
  let allocatedClientesCampanha = 0;
  let allocatedClientesComApp = 0;
  let allocatedCuponsVendas = 0;

  return RANKING_LOJAS_DENTRO.map((row, index, arr) => {
    const share = totalShareBase > 0 ? row.clientes / totalShareBase : 0;

    let clientesCampanha;
    let clientesComApp;
    let cuponsVendas;

    if (index < arr.length - 1) {
      clientesCampanha = Math.round(TOTAIS.clientesCompraramCampanha * share);
      clientesComApp = Math.round(TOTAIS.clientesComAppInstalado * share);
      cuponsVendas = Math.round(TOTAIS.cuponsVendasCampanha * share);

      allocatedClientesCampanha += clientesCampanha;
      allocatedClientesComApp += clientesComApp;
      allocatedCuponsVendas += cuponsVendas;
    } else {
      clientesCampanha = TOTAIS.clientesCompraramCampanha - allocatedClientesCampanha;
      clientesComApp = TOTAIS.clientesComAppInstalado - allocatedClientesComApp;
      cuponsVendas = TOTAIS.cuponsVendasCampanha - allocatedCuponsVendas;
    }

    const clientesSemApp = Math.max(0, clientesCampanha - clientesComApp);

    return {
      ...row,
      vendasApp: row.qtd,
      vendasTotais: cuponsVendas,
      clientesSemApp,
      clientesCampanha,
      clientesComApp,
      cuponsVendas,
      shareClientesApp: share
    };
  });
})();

const PODIO_TOP3_LOJAS = LOJAS_OPERACIONAL.slice(0, 3);



const RANKING_GERAL_PRODUTOS_GAMIFICACAO = [
  { produto: 'Amandita Lacta Choc.200g', qtd: 75 },
  { produto: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 72 },
  { produto: 'Choc.Lacta Ao Leite 145g', qtd: 42 },
  { produto: 'Choc.Lacta Shot 145g', qtd: 42 },
  { produto: 'Choc.Lacta Ouro Bco 98g', qtd: 32 },
  { produto: 'Choc.Lacta Laka 80g', qtd: 26 },
  { produto: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 20 },
  { produto: 'Choc.Lacta Laka/Oreo 145g', qtd: 18 },
  { produto: 'Choc.Lacta Laka 145g', qtd: 18 },
  { produto: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 18 },
  { produto: 'Choc.Lacta Amaro 145g', qtd: 15 },
  { produto: 'Choc.Lacta Ao Leite 80g', qtd: 15 },
  { produto: 'Choc.Lacta Diamante Negro 145g', qtd: 14 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 14 },
  { produto: 'Choc.Lacta Shot 80g', qtd: 12 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 9 },
  { produto: 'Choc.Lacta Diamante Negro 80g', qtd: 4 },
  { produto: 'Choc.Lacta Amaro 80g', qtd: 2 }
];

const TOTAL_GERAL_GAMIFICACAO = 448;

const RANKING_PRODUTOS_GAMIFICACAO_RAW = `65 - Rio Negro	61
Amandita Lacta Choc.200g	61
52 - Mafra - Centro	51
Amandita Lacta Choc.200g	3
Bombom Lacta Ouro Bco/Sonho Valsa 220g	8
Choc.Lacta Amaro 145g	5
Choc.Lacta Ao Leite 145g	2
Choc.Lacta Ao Leite Rech.Caramelo 104g	10
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Laka 145g	3
Choc.Lacta Laka 80g	2
Choc.Lacta Laka Rech.Caramelo 104g	3
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ouro Bco 98g	3
Choc.Lacta Shot 145g	10
46 - Campo Largo - Sao Jose	34
Amandita Lacta Choc.200g	2
Bombom Lacta Ouro Bco/Sonho Valsa 220g	5
Choc.Lacta Ao Leite 145g	12
Choc.Lacta Laka 145g	5
Choc.Lacta Laka 80g	7
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Laka/Oreo 145g	2
6 - Pinheirinho	27
Choc.Lacta Shot 80g	6
Choc.Lacta Laka Rech.Caramelo 104g	4
Choc.Lacta Ouro Bco 98g	4
Bombom Lacta Ouro Bco/Sonho Valsa 220g	3
Choc.Lacta Shot 145g	2
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Laka 80g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Laka 145g	1
Amandita Lacta Choc.200g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Amaro 145g	1
32 - Ponta Grossa - Uvaranas	27
Choc.Lacta Laka Rech.Caramelo 104g	10
Choc.Lacta Ouro Bco 98g	3
Amandita Lacta Choc.200g	3
Choc.Lacta Diamante Negro/Laka 80g	4
Choc.Lacta Laka 80g	4
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Shot 80g	1
26 - Torres	25
Bombom Lacta Ouro Bco/Sonho Valsa 220g	16
Choc.Lacta Ao Leite Rech.Caramelo 104g	5
Choc.Lacta Laka Rech.Caramelo 104g	4
56 - Piraquara	18
Choc.Lacta Shot 145g	4
Bombom Lacta Ouro Bco/Sonho Valsa 220g	4
Choc.Lacta Ao Leite 145g	3
Choc.Lacta Diamante Negro 145g	2
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Shot 80g	1
Choc.Lacta Diamante Negro/Laka 80g	1
Choc.Lacta Laka 80g	1
21 - Nilo Pecanha	17
Amandita Lacta Choc.200g	4
Bombom Lacta Ouro Bco/Sonho Valsa 220g	3
Choc.Lacta Ouro Bco 98g	3
Choc.Lacta Shot 80g	2
Choc.Lacta Ao Leite 80g	2
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Amaro 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
27 - Novo Mundo	16
Bombom Lacta Ouro Bco/Sonho Valsa 220g	6
Choc.Lacta Laka 145g	3
Choc.Lacta Ao Leite 145g	3
Choc.Lacta Shot 80g	1
Choc.Lacta Amaro 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Diamante Negro/Laka 80g	1
25 - Paranagua - Raia	13
Bombom Lacta Ouro Bco/Sonho Valsa 220g	4
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Laka 145g	1
Choc.Lacta Diamante Negro/Laka 80g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Laka 80g	1
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Diamante Negro/Laka 145g	1
8 - Paranagua - Centro	13
Choc.Lacta Shot 145g	6
Bombom Lacta Ouro Bco/Sonho Valsa 220g	4
Choc.Lacta Laka 80g	1
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Diamante Negro 145g	1
48 - Joinville - Itaum	12
Choc.Lacta Ouro Bco 98g	3
Amandita Lacta Choc.200g	3
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Amaro 145g	1
Choc.Lacta Laka/Oreo 145g	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Ao Leite 145g	1
30 - Fazenda Rio Grande	10
Bombom Lacta Ouro Bco/Sonho Valsa 220g	5
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Shot 145g	1
42 - Ponta Grossa - Jardim Carvalho	10
Choc.Lacta Laka 80g	5
Choc.Lacta Laka/Oreo 145g	3
Amandita Lacta Choc.200g	1
Choc.Lacta Ao Leite 145g	1
33 - Sao Jose - Rua Joinville	10
Bombom Lacta Ouro Bco/Sonho Valsa 220g	3
Choc.Lacta Ao Leite 145g	3
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Shot 145g	1
Choc.Lacta Laka 145g	1
Choc.Lacta Laka/Oreo 145g	1
43 - Almirante Tamandare	9
Choc.Lacta Ao Leite Rech.Caramelo 104g	4
Choc.Lacta Laka Rech.Caramelo 104g	2
Choc.Lacta Shot 145g	3
83 - Condor Merces	9
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Shot 145g	3
Choc.Lacta Shot 80g	1
82 - Condor Cic Jk	8
Choc.Lacta Diamante Negro 145g	6
Amandita Lacta Choc.200g	1
Choc.Lacta Laka 80g	1
63 - Maringa - Av Kakogawa	7
Choc.Lacta Ao Leite Rech.Caramelo 104g	4
Choc.Lacta Ao Leite 80g	2
Choc.Lacta Ao Leite 145g	1
20 - Maringa - Av Parana	6
Choc.Lacta Ao Leite 145g	4
Choc.Lacta Shot 145g	1
Choc.Lacta Laka Rech.Caramelo 104g	1
19 - Ponta Grossa - Nova Russia	6
Choc.Lacta Ouro Bco 98g	5
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
24 - Santa Candida	5
Choc.Lacta Laka 80g	2
Amandita Lacta Choc.200g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Ouro Bco 98g	1
4 - Lapa	5
Choc.Lacta Ao Leite Rech.Caramelo 104g	3
Choc.Lacta Shot 145g	1
Choc.Lacta Amaro 145g	1
29 - Agua Verde	4
Choc.Lacta Ao Leite 80g	2
Choc.Lacta Laka 80g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
64 - Gralha Azul	4
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Shot 80g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Diamante Negro 80g	1
7 - Marechal	4
Choc.Lacta Ao Leite 145g	2
Choc.Lacta Shot 145g	1
Choc.Lacta Amaro 80g	1
23 - Araucaria BR	3
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
Choc.Lacta Laka 145g	1
Choc.Lacta Diamante Negro 145g	1
67-Ponta Grossa - Ernesto Viléla	3
Choc.Lacta Laka 80g	1
Choc.Lacta Shot 80g	1
Choc.Lacta Ouro Bco 98g	1
41 - Campo Mourao	3
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Diamante Negro 80g	1
37 - Cajuru	2
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Diamante Negro/Laka 145g	1
14 - Sao Jose Dos Pinhais	2
Choc.Lacta Laka 80g	2
22 - Champagnat	2
Choc.Lacta Laka 80g	2
28 - Cristo Rei	2
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
71 - Araucaria Capela Velha	10
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Diamante Negro 80g	1
Choc.Lacta Diamante Negro/Laka 145g	2
Choc.Lacta Laka 80g	1
Choc.Lacta Shot 145g	3
Choc.Lacta Shot 80g	2
45 - Araucaria Costeira	1
Choc.Lacta Ouro Bco 98g	1
13 - Sitio Cercado	1
Choc.Lacta Laka Rech.Caramelo 104g	1
10 - Campo Comprido	1
Choc.Lacta Ao Leite 145g	1
11 - Sao Braz	1
Choc.Lacta Ao Leite 145g	1
49 - Boa Vista	1
Choc.Lacta Laka Rech.Caramelo 104g	1
47 - Pinhais - Av.Irai	1
Choc.Lacta Amaro 145g	1
54 - Francisco Derosso	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
60 - Maringa - Av Dr Luiz Teixeira	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
66 - Barreirinha	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
17 - Ahu	1
Amandita Lacta Choc.200g	1
Total Geral	448`;


