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
  clientesParticipantes: 27564,
  cuponsApp: 29673,
  vendasApp: 45001,
  lojasParticipantes: 68,
  cuponsVendasCampanha: 160271,
  participacaoApp: 19,
  clientesTotalBase: 150650,
  clientesNaoParticipantes: 123086,
  clientesCompraramCampanha: 150650,
  clientesComAppInstalado: 51298,
  clientesSemAppInstalado: 99352,
  viewsCampanha: 150650,
  scanSuccess: 2117,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 2342,
  gamificacaoEscaneou: 2117,
  gamificacaoCompletou: 217,
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
  { data: '30/03', Dentro: { qtd: 3221, tickets: 1793, clientes: 1666 }, Fora: { qtd: 18226, tickets: 10297, clientes: 9823 }, Total: { qtd: 21447, tickets: 12090, clientes: 11489 } }
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
  { data: '30/03', qtd: 21447, cupons: 12090, clientes: 11489 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 9002, tickets: 5295, clientes: 5088 },
  { loja: '21. Nilo Pecanha', qtd: 8119, tickets: 4991, clientes: 4811 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 8040, tickets: 5545, clientes: 5326 },
  { loja: '22. Champagnat', qtd: 7750, tickets: 4145, clientes: 3891 },
  { loja: '52. Mafra Centro Ii', qtd: 6732, tickets: 3768, clientes: 3679 },
  { loja: '06. Pinheirinho', qtd: 6031, tickets: 4033, clientes: 3830 },
  { loja: '25. Paranagua-Raia', qtd: 5988, tickets: 3876, clientes: 3550 },
  { loja: '26. Torres', qtd: 5722, tickets: 3362, clientes: 3267 },
  { loja: '82. Condor Cic Jk', qtd: 5088, tickets: 3223, clientes: 2978 },
  { loja: '27. Novo Mundo', qtd: 5080, tickets: 3497, clientes: 3341 },
  { loja: '24. Santa Candida', qtd: 5021, tickets: 3491, clientes: 3360 },
  { loja: '37. Cajuru', qtd: 5000, tickets: 3489, clientes: 3381 },
  { loja: '23. Araucaria Br', qtd: 4926, tickets: 3299, clientes: 3205 },
  { loja: '04. Lapa', qtd: 4769, tickets: 2998, clientes: 2829 },
  { loja: '54. Francisco Derosso', qtd: 4757, tickets: 2984, clientes: 2828 },
  { loja: '91. Zonta (Franquia)', qtd: 4604, tickets: 2976, clientes: 2854 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 4472, tickets: 2735, clientes: 2566 },
  { loja: '56. Piraquara', qtd: 4418, tickets: 2965, clientes: 2829 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 4338, tickets: 2882, clientes: 2711 },
  { loja: '20. Maringa Av Parana', qtd: 4303, tickets: 3221, clientes: 2962 },
  { loja: '11. Sao Braz', qtd: 4273, tickets: 2876, clientes: 2754 },
  { loja: '45. Araucaria Costeira', qtd: 4209, tickets: 3160, clientes: 2999 },
  { loja: '49. Boa Vista', qtd: 3961, tickets: 2937, clientes: 2848 },
  { loja: '28. Cristo Rei', qtd: 3941, tickets: 2658, clientes: 2480 },
  { loja: '32. Uvaranas', qtd: 3840, tickets: 2530, clientes: 2416 },
  { loja: '30. Fazenda Rio Grande', qtd: 3802, tickets: 2525, clientes: 2375 },
  { loja: '83. Condor Merces', qtd: 3555, tickets: 2520, clientes: 2380 },
  { loja: '43. Almirante Tamandare', qtd: 3434, tickets: 2369, clientes: 2261 },
  { loja: '07. Marechal', qtd: 3403, tickets: 2221, clientes: 2077 },
  { loja: '58. Pilarzinho', qtd: 3360, tickets: 2437, clientes: 2343 },
  { loja: '50. Santa Quiteria', qtd: 3348, tickets: 1999, clientes: 1891 },
  { loja: '08. Paranagua Centro', qtd: 3303, tickets: 1793, clientes: 1488 },
  { loja: '57. Joinville - Boa Vista', qtd: 3273, tickets: 2299, clientes: 2048 },
  { loja: '41. Campo Mourao', qtd: 3222, tickets: 2087, clientes: 2021 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 3216, tickets: 2190, clientes: 2067 },
  { loja: '39. Pinhais', qtd: 3212, tickets: 2247, clientes: 2135 },
  { loja: '71. Araucaria Capela Velha', qtd: 3143, tickets: 2386, clientes: 2177 },
  { loja: '38. Colombo', qtd: 3122, tickets: 2181, clientes: 2091 },
  { loja: '13. Sitio Cercado', qtd: 3011, tickets: 2206, clientes: 2073 },
  { loja: '36. Castro', qtd: 2968, tickets: 1873, clientes: 1699 },
  { loja: '66. Barreirinha', qtd: 2904, tickets: 1522, clientes: 1421 },
  { loja: '10. Campo Comprido', qtd: 2854, tickets: 2177, clientes: 2031 },
  { loja: '47. Pinhais Av.Irai', qtd: 2768, tickets: 1904, clientes: 1802 },
  { loja: '03. Santa Felicidade', qtd: 2748, tickets: 1821, clientes: 1687 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 2732, tickets: 1719, clientes: 1608 },
  { loja: '31. Campo Largo', qtd: 2603, tickets: 1714, clientes: 1597 },
  { loja: '46. Campo Largo Sao Jose', qtd: 2599, tickets: 1788, clientes: 1701 },
  { loja: '48. Joinville Itaum', qtd: 2509, tickets: 1661, clientes: 1445 },
  { loja: '51. Joinville America', qtd: 2490, tickets: 1548, clientes: 1430 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 2483, tickets: 1620, clientes: 1539 },
  { loja: '05. Wenceslau Braz', qtd: 2469, tickets: 1497, clientes: 1392 },
  { loja: '40. Maringa Av Colombo', qtd: 2336, tickets: 1774, clientes: 1599 },
  { loja: '15. Apucarana', qtd: 2319, tickets: 1510, clientes: 1415 },
  { loja: '65. Rio Negro', qtd: 2159, tickets: 1221, clientes: 1171 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 2140, tickets: 1411, clientes: 1304 },
  { loja: '63. Maringa Av Kakogawa', qtd: 2121, tickets: 1345, clientes: 1274 },
  { loja: '09. Londrina', qtd: 2021, tickets: 1428, clientes: 1235 },
  { loja: '64. Gralha Azul', qtd: 1973, tickets: 1530, clientes: 1430 },
  { loja: '55. Jaragua Do Sul', qtd: 1970, tickets: 1205, clientes: 1072 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 1944, tickets: 1335, clientes: 1133 },
  { loja: '53. Joao Bettega', qtd: 1929, tickets: 1300, clientes: 1242 },
  { loja: '61. Jardim Das Americas', qtd: 1809, tickets: 1254, clientes: 1188 },
  { loja: '34. Brasilia', qtd: 1729, tickets: 1225, clientes: 1129 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 1579, tickets: 1130, clientes: 888 },
  { loja: '86. Condor S.J.Pinhais Rui Barbosa', qtd: 1412, tickets: 995, clientes: 927 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 1397, tickets: 984, clientes: 829 },
  { loja: '17. Ahu', qtd: 1169, tickets: 843, clientes: 802 },
  { loja: '78. Rio Negrinho', qtd: 972, tickets: 541, clientes: 450 }
];

const SALES_DENTRO_MAP = {
  118311: { itens: 40, tickets: 27, clientes: 27 },
  1991454: { itens: 169, tickets: 103, clientes: 62 },
  2077535: { itens: 12727, tickets: 7245, clientes: 6726 },
  2077543: { itens: 11984, tickets: 7994, clientes: 7465 },
  2077568: { itens: 995, tickets: 727, clientes: 670 },
  2077576: { itens: 1116, tickets: 835, clientes: 774 },
  2077584: { itens: 9855, tickets: 7019, clientes: 6524 },
  2077592: { itens: 1169, tickets: 693, clientes: 662 },
  2128403: { itens: 0, tickets: 0, clientes: 0 },
  2128411: { itens: 4135, tickets: 2926, clientes: 2709 },
  2207371: { itens: 112, tickets: 91, clientes: 75 },
  2207389: { itens: 125, tickets: 87, clientes: 80 },
  2207397: { itens: 104, tickets: 73, clientes: 64 },
  2207405: { itens: 291, tickets: 185, clientes: 169 },
  2207413: { itens: 218, tickets: 157, clientes: 145 },
  2207421: { itens: 197, tickets: 141, clientes: 141 },
  2207439: { itens: 104, tickets: 66, clientes: 58 },
  2236370: { itens: 564, tickets: 455, clientes: 422 },
  2236388: { itens: 1096, tickets: 849, clientes: 791 }
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
  { produto: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 148 },
  { produto: 'Amandita Lacta Choc.200g', qtd: 101 },
  { produto: 'Choc.Lacta Ao Leite 145g', qtd: 87 },
  { produto: 'Choc.Lacta Shot 145g', qtd: 74 },
  { produto: 'Choc.Lacta Ouro Bco 98g', qtd: 49 },
  { produto: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 44 },
  { produto: 'Choc.Lacta Ao Leite 80g', qtd: 44 },
  { produto: 'Choc.Lacta Laka/Oreo 145g', qtd: 41 },
  { produto: 'Choc.Lacta Laka 80g', qtd: 39 },
  { produto: 'Choc.Lacta Laka 145g', qtd: 39 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 30 },
  { produto: 'Choc.Lacta Amaro 145g', qtd: 24 },
  { produto: 'Choc.Lacta Diamante Negro 145g', qtd: 22 },
  { produto: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 22 },
  { produto: 'Choc.Lacta Shot 80g', qtd: 20 },
  { produto: 'Choc.Lacta Diamante Negro 80g', qtd: 15 },
  { produto: 'Choc.Lacta Amaro 80g', qtd: 12 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 11 }
];

const TOTAL_GERAL_GAMIFICACAO = 822;

const RANKING_PRODUTOS_GAMIFICACAO_RAW = `65 - Rio Negro	64
Amandita Lacta Choc.200g	57
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	2
Choc.Lacta Laka 80g	1
52 - Mafra - Centro	73
Amandita Lacta Choc.200g	3
Bombom Lacta Ouro Bco/Sonho Valsa 220g	8
Choc.Lacta Amaro 145g	5
Choc.Lacta Ao Leite 145g	2
Choc.Lacta Ao Leite Rech.Caramelo 104g	9
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Laka 145g	3
Choc.Lacta Laka 80g	2
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ouro Bco 98g	2
Choc.Lacta Shot 145g	10
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
Total Geral	822`;


