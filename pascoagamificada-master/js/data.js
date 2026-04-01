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
  clientesParticipantes: 27584,
  cuponsApp: 29886,
  vendasApp: 45342,
  lojasParticipantes: 68,
  cuponsVendasCampanha: 182066,
  participacaoApp: 16,
  clientesTotalBase: 171536,
  clientesNaoParticipantes: 143952,
  clientesCompraramCampanha: 171536,
  clientesComAppInstalado: 54487,
  clientesSemAppInstalado: 117049,
  viewsCampanha: 171536,
  scanSuccess: 2411,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 2695,
  gamificacaoEscaneou: 2411,
  gamificacaoCompletou: 244,
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
  { data: '31/03', Dentro: { qtd: 341, tickets: 213, clientes: 20 }, Fora: { qtd: 37293, tickets: 21582, clientes: 20866 }, Total: { qtd: 37634, tickets: 21795, clientes: 20886 } }
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
  { data: '31/03', qtd: 37634, cupons: 21795, clientes: 20886 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 9950, tickets: 5806, clientes: 5581 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 9201, tickets: 6216, clientes: 5972 },
  { loja: '21. Nilo Pecanha', qtd: 9136, tickets: 5608, clientes: 5416 },
  { loja: '22. Champagnat', qtd: 8419, tickets: 4562, clientes: 4298 },
  { loja: '52. Mafra Centro Ii', qtd: 7997, tickets: 4388, clientes: 4286 },
  { loja: '06. Pinheirinho', qtd: 6996, tickets: 4604, clientes: 4387 },
  { loja: '25. Paranagua-Raia', qtd: 7110, tickets: 4503, clientes: 4148 },
  { loja: '26. Torres', qtd: 6341, tickets: 3720, clientes: 3619 },
  { loja: '37. Cajuru', qtd: 6015, tickets: 3937, clientes: 3824 },
  { loja: '27. Novo Mundo', qtd: 5951, tickets: 3964, clientes: 3798 },
  { loja: '54. Francisco Derosso', qtd: 5821, tickets: 3523, clientes: 3353 },
  { loja: '24. Santa Candida', qtd: 5752, tickets: 3960, clientes: 3813 },
  { loja: '23. Araucaria Br', qtd: 5709, tickets: 3782, clientes: 3676 },
  { loja: '82. Condor Cic Jk', qtd: 5690, tickets: 3577, clientes: 3305 },
  { loja: '91. Zonta (Franquia)', qtd: 5392, tickets: 3426, clientes: 3283 },
  { loja: '56. Piraquara', qtd: 5310, tickets: 3495, clientes: 3342 },
  { loja: '04. Lapa', qtd: 5268, tickets: 3306, clientes: 3129 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 5267, tickets: 3220, clientes: 3041 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 4963, tickets: 3251, clientes: 3069 },
  { loja: '45. Araucaria Costeira', qtd: 4841, tickets: 3563, clientes: 3386 },
  { loja: '11. Sao Braz', qtd: 4822, tickets: 3148, clientes: 3019 },
  { loja: '32. Uvaranas', qtd: 4755, tickets: 3070, clientes: 2944 },
  { loja: '20. Maringa Av Parana', qtd: 4720, tickets: 3473, clientes: 3204 },
  { loja: '49. Boa Vista', qtd: 4452, tickets: 3242, clientes: 3148 },
  { loja: '30. Fazenda Rio Grande', qtd: 4406, tickets: 2901, clientes: 2735 },
  { loja: '28. Cristo Rei', qtd: 4358, tickets: 2921, clientes: 2733 },
  { loja: '07. Marechal', qtd: 4068, tickets: 2614, clientes: 2455 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 4062, tickets: 2676, clientes: 2534 },
  { loja: '83. Condor Merces', qtd: 4013, tickets: 2784, clientes: 2630 },
  { loja: '41. Campo Mourao', qtd: 4013, tickets: 2499, clientes: 2424 },
  { loja: '43. Almirante Tamandare', qtd: 3860, tickets: 2652, clientes: 2536 },
  { loja: '57. Joinville - Boa Vista', qtd: 3767, tickets: 2617, clientes: 2344 },
  { loja: '50. Santa Quiteria', qtd: 3761, tickets: 2217, clientes: 2104 },
  { loja: '58. Pilarzinho', qtd: 3759, tickets: 2678, clientes: 2574 },
  { loja: '38. Colombo', qtd: 3725, tickets: 2532, clientes: 2425 },
  { loja: '39. Pinhais', qtd: 3724, tickets: 2546, clientes: 2429 },
  { loja: '08. Paranagua Centro', qtd: 3718, tickets: 2065, clientes: 1732 },
  { loja: '13. Sitio Cercado', qtd: 3573, tickets: 2585, clientes: 2437 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 3497, tickets: 2084, clientes: 1948 },
  { loja: '36. Castro', qtd: 3494, tickets: 2185, clientes: 1992 },
  { loja: '71. Araucaria Capela Velha', qtd: 3489, tickets: 2628, clientes: 2399 },
  { loja: '10. Campo Comprido', qtd: 3353, tickets: 2469, clientes: 2305 },
  { loja: '47. Pinhais Av.Irai', qtd: 3280, tickets: 2209, clientes: 2094 },
  { loja: '66. Barreirinha', qtd: 3269, tickets: 1733, clientes: 1627 },
  { loja: '03. Santa Felicidade', qtd: 3119, tickets: 2065, clientes: 1920 },
  { loja: '31. Campo Largo', qtd: 3087, tickets: 1980, clientes: 1851 },
  { loja: '48. Joinville Itaum', qtd: 3060, tickets: 1960, clientes: 1720 },
  { loja: '46. Campo Largo Sao Jose', qtd: 2969, tickets: 2109, clientes: 1926 },
  { loja: '51. Joinville America', qtd: 2877, tickets: 1736, clientes: 1607 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 2847, tickets: 1846, clientes: 1753 },
  { loja: '05. Wenceslau Braz', qtd: 2752, tickets: 1659, clientes: 1542 },
  { loja: '40. Maringa Av Colombo', qtd: 2697, tickets: 1967, clientes: 1783 },
  { loja: '15. Apucarana', qtd: 2634, tickets: 1707, clientes: 1605 },
  { loja: '53. Joao Bettega', qtd: 2399, tickets: 1591, clientes: 1527 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 2391, tickets: 1546, clientes: 1427 },
  { loja: '65. Rio Negro', qtd: 2368, tickets: 1356, clientes: 1301 },
  { loja: '63. Maringa Av Kakogawa', qtd: 2363, tickets: 1497, clientes: 1421 },
  { loja: '64. Gralha Azul', qtd: 2344, tickets: 1756, clientes: 1648 },
  { loja: '09. Londrina', qtd: 2300, tickets: 1615, clientes: 1395 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 2195, tickets: 1494, clientes: 1277 },
  { loja: '55. Jaragua Do Sul', qtd: 2113, tickets: 1321, clientes: 1180 },
  { loja: '61. Jardim Das Americas', qtd: 2106, tickets: 1385, clientes: 1316 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 2053, tickets: 1387, clientes: 1094 },
  { loja: '34. Brasilia', qtd: 2039, tickets: 1389, clientes: 1287 },
  { loja: '86. Condor S.J.Pinhais Rui Barbosa', qtd: 1870, tickets: 1249, clientes: 1159 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 1520, tickets: 1071, clientes: 906 },
  { loja: '17. Ahu', qtd: 1309, tickets: 937, clientes: 894 },
  { loja: '78. Rio Negrinho', qtd: 1049, tickets: 594, clientes: 499 }
];

const SALES_DENTRO_MAP = {
  118311: { itens: 40, tickets: 27, clientes: 27 },
  1991454: { itens: 169, tickets: 103, clientes: 62 },
  2077535: { itens: 12839, tickets: 7309, clientes: 6732 },
  2077543: { itens: 12082, tickets: 8061, clientes: 7473 },
  2077568: { itens: 1000, tickets: 730, clientes: 670 },
  2077576: { itens: 1119, tickets: 838, clientes: 774 },
  2077584: { itens: 9941, tickets: 7071, clientes: 6529 },
  2077592: { itens: 1170, tickets: 694, clientes: 662 },
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

const TOTAL_GERAL_GAMIFICACAO = 942;

const RANKING_PRODUTOS_GAMIFICACAO_RAW = `65 - Rio Negro	68
Amandita Lacta Choc.200g	57
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	2
Choc.Lacta Laka 80g	1
52 - Mafra - Centro	79
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
Total Geral	942`;


