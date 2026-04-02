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
  clientesParticipantes: 59258,
  cuponsApp: 30178,
  vendasApp: 45897,
  lojasParticipantes: 68,
  cuponsVendasCampanha: 215614,
  participacaoApp: 14,
  clientesTotalBase: 203606,
  clientesNaoParticipantes: 144348,
  clientesCompraramCampanha: 203606,
  clientesComAppInstalado: 59258,
  clientesSemAppInstalado: 144348,
  viewsCampanha: 203606,
  scanSuccess: 2751,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 3118,
  gamificacaoEscaneou: 2751,
  gamificacaoCompletou: 279,
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
  { data: '29/03', Dentro: { qtd: 2161, tickets: 1315, clientes: 1221 }, Fora: { qtd: 15914, tickets: 10191, clientes: 9652 }, Total: { qtd: 18075, tickets: 11506, clientes: 10873 } },
  { data: '30/03', Dentro: { qtd: 3221, tickets: 1793, clientes: 1666 }, Fora: { qtd: 18226, tickets: 10297, clientes: 9823 }, Total: { qtd: 21447, tickets: 12090, clientes: 11489 } },
  { data: '31/03', Dentro: { qtd: 341, tickets: 213, clientes: 20 }, Fora: { qtd: 37293, tickets: 21582, clientes: 20866 }, Total: { qtd: 37634, tickets: 21795, clientes: 20886 } },
  { data: '01/04', Dentro: { qtd: 555, tickets: 292, clientes: 21 }, Fora: { qtd: 56880, tickets: 33256, clientes: 32049 }, Total: { qtd: 57435, tickets: 33548, clientes: 32070 } }
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
  { data: '29/03', qtd: 18075, cupons: 11506, clientes: 10873 },
  { data: '30/03', qtd: 21447, cupons: 12090, clientes: 11489 },
  { data: '31/03', qtd: 37634, cupons: 21795, clientes: 20886 },
  { data: '01/04', qtd: 57435, cupons: 33548, clientes: 32070 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '33. Sao Jose-Rua Joinville', qtd: 11330, tickets: 7392, clientes: 7129 },
  { loja: '21. Nilo Pecanha', qtd: 11009, tickets: 6589, clientes: 6367 },
  { loja: '29. Agua Verde', qtd: 10888, tickets: 6314, clientes: 6068 },
  { loja: '52. Mafra Centro Ii', qtd: 9844, tickets: 5286, clientes: 5169 },
  { loja: '22. Champagnat', qtd: 9360, tickets: 5137, clientes: 4847 },
  { loja: '25. Paranagua-Raia', qtd: 8507, tickets: 5358, clientes: 4971 },
  { loja: '06. Pinheirinho', qtd: 8480, tickets: 5492, clientes: 5244 },
  { loja: '26. Torres', qtd: 7517, tickets: 4326, clientes: 4213 },
  { loja: '24. Santa Candida', qtd: 7336, tickets: 4861, clientes: 4687 },
  { loja: '54. Francisco Derosso', qtd: 7194, tickets: 4357, clientes: 4163 },
  { loja: '27. Novo Mundo', qtd: 7088, tickets: 4675, clientes: 4485 },
  { loja: '56. Piraquara', qtd: 6833, tickets: 4377, clientes: 4175 },
  { loja: '82. Condor Cic Jk', qtd: 6796, tickets: 4209, clientes: 3887 },
  { loja: '37. Cajuru', qtd: 6772, tickets: 4408, clientes: 4290 },
  { loja: '23. Araucaria Br', qtd: 6734, tickets: 4395, clientes: 4267 },
  { loja: '91. Zonta (Franquia)', qtd: 6514, tickets: 4100, clientes: 3942 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 6494, tickets: 3921, clientes: 3712 },
  { loja: '32. Uvaranas', qtd: 6441, tickets: 4014, clientes: 3874 },
  { loja: '04. Lapa', qtd: 6247, tickets: 3861, clientes: 3656 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 5951, tickets: 3862, clientes: 3665 },
  { loja: '45. Araucaria Costeira', qtd: 5729, tickets: 4124, clientes: 3934 },
  { loja: '11. Sao Braz', qtd: 5712, tickets: 3631, clientes: 3490 },
  { loja: '30. Fazenda Rio Grande', qtd: 5624, tickets: 3633, clientes: 3429 },
  { loja: '20. Maringa Av Parana', qtd: 5471, tickets: 3913, clientes: 3631 },
  { loja: '49. Boa Vista', qtd: 5122, tickets: 3622, clientes: 3512 },
  { loja: '07. Marechal', qtd: 5118, tickets: 3225, clientes: 3032 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 5076, tickets: 3243, clientes: 3072 },
  { loja: '28. Cristo Rei', qtd: 4847, tickets: 3222, clientes: 3024 },
  { loja: '41. Campo Mourao', qtd: 4817, tickets: 2997, clientes: 2908 },
  { loja: '38. Colombo', qtd: 4760, tickets: 3148, clientes: 3013 },
  { loja: '43. Almirante Tamandare', qtd: 4643, tickets: 3131, clientes: 2995 },
  { loja: '83. Condor Merces', qtd: 4630, tickets: 3166, clientes: 2992 },
  { loja: '57. Joinville - Boa Vista', qtd: 4598, tickets: 3116, clientes: 2810 },
  { loja: '08. Paranagua Centro', qtd: 4560, tickets: 2582, clientes: 2203 },
  { loja: '39. Pinhais', qtd: 4557, tickets: 3060, clientes: 2926 },
  { loja: '58. Pilarzinho', qtd: 4526, tickets: 3167, clientes: 3054 },
  { loja: '13. Sitio Cercado', qtd: 4498, tickets: 3144, clientes: 2975 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 4339, tickets: 2559, clientes: 2406 },
  { loja: '36. Castro', qtd: 4290, tickets: 2632, clientes: 2416 },
  { loja: '50. Santa Quiteria', qtd: 4196, tickets: 2480, clientes: 2358 },
  { loja: '10. Campo Comprido', qtd: 4061, tickets: 2909, clientes: 2730 },
  { loja: '71. Araucaria Capela Velha', qtd: 4051, tickets: 2996, clientes: 2747 },
  { loja: '47. Pinhais Av.Irai', qtd: 3953, tickets: 2609, clientes: 2480 },
  { loja: '31. Campo Largo', qtd: 3906, tickets: 2448, clientes: 2288 },
  { loja: '48. Joinville Itaum', qtd: 3874, tickets: 2440, clientes: 2140 },
  { loja: '03. Santa Felicidade', qtd: 3745, tickets: 2436, clientes: 2275 },
  { loja: '66. Barreirinha', qtd: 3711, tickets: 2013, clientes: 1897 },
  { loja: '46. Campo Largo Sao Jose', qtd: 3647, tickets: 2408, clientes: 2278 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 3510, tickets: 2243, clientes: 2137 },
  { loja: '51. Joinvile America', qtd: 3409, tickets: 2040, clientes: 1890 },
  { loja: '40. Maringa Av Colombo', qtd: 3295, tickets: 2304, clientes: 2092 },
  { loja: '05. Wenceslau Braz', qtd: 3144, tickets: 1882, clientes: 1755 },
  { loja: '53. Joao Bettega', qtd: 3136, tickets: 2016, clientes: 1927 },
  { loja: '15. Apucarana', qtd: 3048, tickets: 1985, clientes: 1870 },
  { loja: '65. Rio Negro', qtd: 3005, tickets: 1685, clientes: 1627 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 2920, tickets: 1865, clientes: 1730 },
  { loja: '64. Gralha Azul', qtd: 2888, tickets: 2079, clientes: 1959 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 2763, tickets: 1780, clientes: 1439 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 2735, tickets: 1776, clientes: 1518 },
  { loja: '63. Maringa Av Kakogawa', qtd: 2726, tickets: 1721, clientes: 1642 },
  { loja: '09. Londrina', qtd: 2691, tickets: 1871, clientes: 1616 },
  { loja: '34. Brasilia', qtd: 2479, tickets: 1655, clientes: 1534 },
  { loja: '61. Jardim Das Americas', qtd: 2463, tickets: 1586, clientes: 1513 },
  { loja: '86. Condor S.J.Pinhais Rui Barbosa', qtd: 2460, tickets: 1630, clientes: 1521 },
  { loja: '55. Jaragua Do Sul', qtd: 2413, tickets: 1521, clientes: 1357 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 1680, tickets: 1178, clientes: 1000 },
  { loja: '17. Ahu', qtd: 1523, tickets: 1076, clientes: 1027 },
  { loja: '78. Rio Negrinho', qtd: 1279, tickets: 733, clientes: 626 },
];

const SALES_DENTRO_MAP = {
  118311: { itens: 40, tickets: 27, clientes: 27 },
  1991454: { itens: 169, tickets: 103, clientes: 62 },
  2077535: { itens: 13075, tickets: 7405, clientes: 6732 },
  2077543: { itens: 12252, tickets: 8173, clientes: 7473 },
  2077568: { itens: 1004, tickets: 731, clientes: 670 },
  2077576: { itens: 1119, tickets: 838, clientes: 774 },
  2077584: { itens: 10084, tickets: 7153, clientes: 6529 },
  2077592: { itens: 1172, tickets: 695, clientes: 662 },
  2128403: { itens: 0, tickets: 0, clientes: 0 },
  2128411: { itens: 4161, tickets: 2946, clientes: 2709 },
  2207371: { itens: 112, tickets: 91, clientes: 75 },
  2207389: { itens: 125, tickets: 87, clientes: 80 },
  2207397: { itens: 104, tickets: 73, clientes: 64 },
  2207405: { itens: 291, tickets: 185, clientes: 169 },
  2207413: { itens: 218, tickets: 157, clientes: 145 },
  2207421: { itens: 197, tickets: 141, clientes: 141 },
  2207439: { itens: 104, tickets: 66, clientes: 58 },
  2236370: { itens: 564, tickets: 455, clientes: 422 },
  2236388: { itens: 1106, tickets: 852, clientes: 792 }
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
  { produto: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 182 },
  { produto: 'Amandita Lacta Choc.200g', qtd: 120 },
  { produto: 'Choc.Lacta Ao Leite 145g', qtd: 110 },
  { produto: 'Choc.Lacta Shot 145g', qtd: 89 },
  { produto: 'Choc.Lacta Ouro Bco 98g', qtd: 70 },
  { produto: 'Choc.Lacta Laka/Oreo 145g', qtd: 69 },
  { produto: 'Choc.Lacta Laka 145g', qtd: 63 },
  { produto: 'Choc.Lacta Laka 80g', qtd: 59 },
  { produto: 'Choc.Lacta Ao Leite 80g', qtd: 59 },
  { produto: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 53 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 43 },
  { produto: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 29 },
  { produto: 'Choc.Lacta Shot 80g', qtd: 29 },
  { produto: 'Choc.Lacta Diamante Negro 145g', qtd: 28 },
  { produto: 'Choc.Lacta Amaro 145g', qtd: 28 },
  { produto: 'Choc.Lacta Diamante Negro 80g', qtd: 20 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 18 },
  { produto: 'Choc.Lacta Amaro 80g', qtd: 15 }
];

const TOTAL_GERAL_GAMIFICACAO = 1084;

const RANKING_PRODUTOS_GAMIFICACAO_RAW = `65 - Rio Negro	71
Amandita Lacta Choc.200g	60
Bombom Lacta Ouro Bco/Sonho Valsa 220g	0
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	2
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Laka 145g	1
Choc.Lacta Laka 80g	4
Choc.Lacta Shot 145g	1
52 - Mafra - Centro	79
Amandita Lacta Choc.200g	5
Bombom Lacta Ouro Bco/Sonho Valsa 220g	21
Choc.Lacta Amaro 145g	5
Choc.Lacta Ao Leite 145g	2
Choc.Lacta Ao Leite 80g	7
Choc.Lacta Ao Leite Rech.Caramelo 104g	9
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Diamante Negro 80g	4
Choc.Lacta Laka 145g	5
Choc.Lacta Laka 80g	3
Choc.Lacta Laka Rech.Caramelo 104g	2
Choc.Lacta Laka/Oreo 145g	2
Choc.Lacta Ouro Bco 98g	2
Choc.Lacta Shot 145g	11
46 - Campo Largo - Sao Jose	15
Amandita Lacta Choc.200g	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	5
Choc.Lacta Ao Leite 145g	5
Choc.Lacta Laka 145g	3
Choc.Lacta Laka/Oreo 145g	1
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
Total Geral	1084`;
