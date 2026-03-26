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
  clientesParticipantes: 21151,
  cuponsApp: 22778,
  vendasApp: 33387,
  lojasParticipantes: 68,
  cuponsVendasCampanha: 102927,
  participacaoApp: 22,
  clientesTotalBase: 96202,
  clientesNaoParticipantes: 75051,
  clientesCompraramCampanha: 96202,
  clientesComAppInstalado: 42761,
  clientesSemAppInstalado: 53441,
  viewsCampanha: 96202,
  scanSuccess: 960,
  gamificacaoAbriuJogo: 16752,
  gamificacaoAbriuScan: 1004,
  gamificacaoEscaneou: 960,
  gamificacaoCompletou: 96,
  overlap: 0,
  produtosCampanha: 19,
  produtosApp: 18
};

const EVOLUCAO_DIARIA_CAMPANHA = [
  {
    data: '13/03',
    Dentro: { qtd: 758, tickets: 318, clientes: 295 },
    Fora:   { qtd: 14610, tickets: 8298, clientes: 7684 },
    Total:  { qtd: 15368, tickets: 8616, clientes: 7979 }
  },
  {
    data: '14/03',
    Dentro: { qtd: 1789, tickets: 1228, clientes: 1155 },
    Fora:   { qtd: 19367, tickets: 11289, clientes: 10590 },
    Total:  { qtd: 21156, tickets: 12517, clientes: 11745 }
  },
  {
    data: '15/03',
    Dentro: { qtd: 1347, tickets: 996, clientes: 911 },
    Fora:   { qtd: 9739, tickets: 6988, clientes: 6497 },
    Total:  { qtd: 11086, tickets: 7984, clientes: 7408 }
  },
  {
    data: '16/03',
    Dentro: { qtd: 1046, tickets: 744, clientes: 687 },
    Fora:   { qtd: 5650, tickets: 4350, clientes: 4018 },
    Total:  { qtd: 6696, tickets: 5094, clientes: 4705 }
  },
  {
    data: '17/03',
    Dentro: { qtd: 1676, tickets: 1203, clientes: 1114 },
    Fora:   { qtd: 7500, tickets: 5217, clientes: 4879 },
    Total:  { qtd: 9176, tickets: 6420, clientes: 5993 }
  },
  {
    data: '18/03',
    Dentro: { qtd: 2192, tickets: 1437, clientes: 1334 },
    Fora:   { qtd: 8471, tickets: 5848, clientes: 5498 },
    Total:  { qtd: 10663, tickets: 7285, clientes: 6832 }
  },
  {
    data: '19/03',
    Dentro: { qtd: 1879, tickets: 1317, clientes: 1221 },
    Fora:   { qtd: 7967, tickets: 5736, clientes: 5362 },
    Total:  { qtd: 9846, tickets: 7053, clientes: 6583 }
  },
  {
    data: '20/03',
    Dentro: { qtd: 2363, tickets: 1591, clientes: 1477 },
    Fora:   { qtd: 9174, tickets: 6693, clientes: 6253 },
    Total:  { qtd: 11537, tickets: 8284, clientes: 7730 }
  },
  {
    data: '21/03',
    Dentro: { qtd: 5696, tickets: 3961, clientes: 3727 },
    Fora:   { qtd: 8521, tickets: 6501, clientes: 6209 },
    Total:  { qtd: 14217, tickets: 10462, clientes: 9936 }
  },
  {
    data: '22/03',
    Dentro: { qtd: 4322, tickets: 3182, clientes: 2933 },
    Fora:   { qtd: 6307, tickets: 4954, clientes: 4630 },
    Total:  { qtd: 10629, tickets: 8136, clientes: 7563 }
  },
  {
    data: '23/03',
    Dentro: { qtd: 3547, tickets: 2329, clientes: 2149 },
    Fora:   { qtd: 4480, tickets: 3272, clientes: 3059 },
    Total:  { qtd: 8027, tickets: 5601, clientes: 5208 }
  },
  {
    data: '24/03',
    Dentro: { qtd: 4495, tickets: 2990, clientes: 2763 },
    Fora:   { qtd: 6169, tickets: 4465, clientes: 4211 },
    Total:  { qtd: 10664, tickets: 7455, clientes: 6974 }
  },
  {
    data: '25/03',
    Dentro: { qtd: 2277, tickets: 1482, clientes: 1385 },
    Fora:   { qtd: 9621, tickets: 6538, clientes: 6161 },
    Total:  { qtd: 11898, tickets: 8020, clientes: 7546 }
  }
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
  { data: '25/03', qtd: 11898, cupons: 8020, clientes: 7546 }
];

const RANKING_LOJAS_DENTRO = [
  { loja: '29. Agua Verde', qtd: 6351, tickets: 3713, clientes: 3555 },
  { loja: '22. Champagnat', qtd: 5870, tickets: 3060, clientes: 2855 },
  { loja: '33. Sao Jose-Rua Joinville', qtd: 5210, tickets: 3741, clientes: 3579 },
  { loja: '21. Nilo Pecanha', qtd: 4917, tickets: 3280, clientes: 3131 },
  { loja: '26. Torres', qtd: 4014, tickets: 2326, clientes: 2255 },
  { loja: '52. Mafra Centro Ii', qtd: 3519, tickets: 2019, clientes: 1956 },
  { loja: '25. Paranagua-Raia', qtd: 3452, tickets: 2322, clientes: 2066 },
  { loja: '06. Pinheirinho', qtd: 3435, tickets: 2404, clientes: 2274 },
  { loja: '82. Condor Cic Jk', qtd: 3197, tickets: 2089, clientes: 1917 },
  { loja: '27. Novo Mundo', qtd: 3172, tickets: 2400, clientes: 2288 },
  { loja: '20. Maringa Av Parana', qtd: 3014, tickets: 2289, clientes: 2105 },
  { loja: '23. Araucaria Br', qtd: 2946, tickets: 2074, clientes: 2014 },
  { loja: '24. Santa Candida', qtd: 2933, tickets: 2177, clientes: 2097 },
  { loja: '37. Cajuru', qtd: 2860, tickets: 2201, clientes: 2127 },
  { loja: '04. Lapa', qtd: 2855, tickets: 1898, clientes: 1786 },
  { loja: '14. Sao Jose Dos Pinhais', qtd: 2803, tickets: 1958, clientes: 1837 },
  { loja: '45. Araucaria Costeira', qtd: 2688, tickets: 2112, clientes: 1997 },
  { loja: '49. Boa Vista', qtd: 2586, tickets: 2013, clientes: 1952 },
  { loja: '19. Ponta Grossa Nova Russia', qtd: 2528, tickets: 1633, clientes: 1513 },
  { loja: '50. Santa Quiteria', qtd: 2502, tickets: 1392, clientes: 1314 },
  { loja: '56. Piraquara', qtd: 2498, tickets: 1800, clientes: 1699 },
  { loja: '11. Sao Braz', qtd: 2458, tickets: 1805, clientes: 1724 },
  { loja: '28. Cristo Rei', qtd: 2442, tickets: 1820, clientes: 1695 },
  { loja: '91. Zonta (Franquia)', qtd: 2427, tickets: 1736, clientes: 1651 },
  { loja: '32. Uvaranas', qtd: 2420, tickets: 1586, clientes: 1503 },
  { loja: '83. Condor Merces', qtd: 2413, tickets: 1751, clientes: 1648 },
  { loja: '08. Paranagua Centro', qtd: 2408, tickets: 1182, clientes: 944 },
  { loja: '54. Francisco Derosso', qtd: 2365, tickets: 1691, clientes: 1604 },
  { loja: '30. Fazenda Rio Grande', qtd: 2253, tickets: 1587, clientes: 1480 },
  { loja: '39. Pinhais', qtd: 2194, tickets: 1554, clientes: 1476 },
  { loja: '58. Pilarzinho', qtd: 2136, tickets: 1645, clientes: 1584 },
  { loja: '71. Araucaria Capela Velha', qtd: 2128, tickets: 1642, clientes: 1497 },
  { loja: '43. Almirante Tamandare', qtd: 2098, tickets: 1512, clientes: 1446 },
  { loja: '07. Marechal', qtd: 2063, tickets: 1345, clientes: 1251 },
  { loja: '57. Joinville - Boa Vista', qtd: 2028, tickets: 1465, clientes: 1289 },
  { loja: '66. Barreirinha', qtd: 1973, tickets: 1026, clientes: 942 },
  { loja: '47. Pinhais Av.Irai', qtd: 1843, tickets: 1242, clientes: 1172 },
  { loja: '05. Wenceslau Braz', qtd: 1808, tickets: 1047, clientes: 969 },
  { loja: '36. Castro', qtd: 1793, tickets: 1138, clientes: 1017 },
  { loja: '41. Campo Mourao', qtd: 1755, tickets: 1237, clientes: 1189 },
  { loja: '38. Colombo', qtd: 1742, tickets: 1288, clientes: 1237 },
  { loja: '13. Sitio Cercado', qtd: 1717, tickets: 1354, clientes: 1266 },
  { loja: '44. Ponta Grossa - Oficinas', qtd: 1705, tickets: 1282, clientes: 1212 },
  { loja: '10. Campo Comprido', qtd: 1703, tickets: 1384, clientes: 1278 },
  { loja: '51. Joinville America', qtd: 1619, tickets: 1017, clientes: 930 },
  { loja: '67. Ponta Grossa - Ernesto Vilela', qtd: 1601, tickets: 1072, clientes: 996 },
  { loja: '31. Campo Largo', qtd: 1570, tickets: 1070, clientes: 992 },
  { loja: '03. Santa Felicidade', qtd: 1563, tickets: 1132, clientes: 1046 },
  { loja: '40. Maringa Av Colombo', qtd: 1503, tickets: 1225, clientes: 1088 },
  { loja: '48. Joinville Itaum', qtd: 1484, tickets: 1020, clientes: 877 },
  { loja: '46. Campo Largo Sao Jose', qtd: 1425, tickets: 1093, clientes: 1027 },
  { loja: '63. Maringa Av Kakogawa', qtd: 1419, tickets: 871, clientes: 819 },
  { loja: '60. Maringa Av Dr Luiz Teixeira', qtd: 1413, tickets: 975, clientes: 896 },
  { loja: '55. Jaragua Do Sul', qtd: 1399, tickets: 811, clientes: 721 },
  { loja: '42. Ponta Grossa - Jardim Carvalho', qtd: 1354, tickets: 983, clientes: 927 },
  { loja: '15. Apucarana', qtd: 1350, tickets: 906, clientes: 840 },
  { loja: '65. Rio Negro', qtd: 1257, tickets: 744, clientes: 703 },
  { loja: '79. Sao Bento Do Sul Centro', qtd: 1256, tickets: 875, clientes: 756 },
  { loja: '61. Jardim Das Americas', qtd: 1241, tickets: 861, clientes: 814 },
  { loja: '64. Gralha Azul', qtd: 1228, tickets: 999, clientes: 926 },
  { loja: '09. Londrina', qtd: 1175, tickets: 904, clientes: 775 },
  { loja: '34. Brasilia', qtd: 1110, tickets: 834, clientes: 764 },
  { loja: '53. Joao Bettega', qtd: 1053, tickets: 726, clientes: 685 },
  { loja: '80. Sao Bento Do Sul - Serra', qtd: 900, tickets: 659, clientes: 558 },
  { loja: '18. Ponta Grossa(Centro)', qtd: 866, tickets: 658, clientes: 518 },
  { loja: '17. Ahu', qtd: 804, tickets: 589, clientes: 560 },
  { loja: '78. Rio Negrinho', qtd: 695, tickets: 372, clientes: 304 },
  { loja: '86. Condor S.J.Pinhais Rui Barbosa', qtd: 456, tickets: 311, clientes: 289 }
];

const SALES_DENTRO_MAP = {
  118311: { itens: 3, tickets: 3, clientes: 3 },
  1991454: { itens: 96, tickets: 56, clientes: 56 },
  2077535: { itens: 8900, tickets: 5244, clientes: 4863 },
  2077543: { itens: 8396, tickets: 5785, clientes: 5387 },
  2077568: { itens: 872, tickets: 663, clientes: 614 },
  2077576: { itens: 2, tickets: 2, clientes: 2 },
  2077584: { itens: 6886, tickets: 5093, clientes: 4724 },
  2077592: { itens: 1, tickets: 1, clientes: 1 },
  2128403: { itens: 0, tickets: 0, clientes: 0 },
  2128411: { itens: 3654, tickets: 2644, clientes: 2456 },
  2207371: { itens: 78, tickets: 67, clientes: 51 },
  2207389: { itens: 89, tickets: 65, clientes: 58 },
  2207397: { itens: 87, tickets: 62, clientes: 53 },
  2207405: { itens: 230, tickets: 155, clientes: 139 },
  2207413: { itens: 179, tickets: 123, clientes: 111 },
  2207421: { itens: 109, tickets: 84, clientes: 84 },
  2207439: { itens: 80, tickets: 57, clientes: 49 },
  2236370: { itens: 537, tickets: 432, clientes: 402 },
  2236388: { itens: 1047, tickets: 809, clientes: 751 }
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
  { produto: 'Amandita Lacta Choc.200g', qtd: 81 },
  { produto: 'Bombom Lacta Ouro Bco/Sonho Valsa 220g', qtd: 42 },
  { produto: 'Choc.Lacta Ao Leite 145g', qtd: 33 },
  { produto: 'Choc.Lacta Laka 80g', qtd: 31 },
  { produto: 'Choc.Lacta Shot 145g', qtd: 30 },
  { produto: 'Choc.Lacta Ouro Bco 98g', qtd: 28 },
  { produto: 'Choc.Lacta Ao Leite Rech.Caramelo 104g', qtd: 26 },
  { produto: 'Choc.Lacta Laka Rech.Caramelo 104g', qtd: 25 },
  { produto: 'Choc.Lacta Laka 145g', qtd: 15 },
  { produto: 'Choc.Lacta Shot 80g', qtd: 15 },
  { produto: 'Choc.Lacta Laka/Oreo 145g', qtd: 11 },
  { produto: 'Choc.Lacta Diamante Negro 145g', qtd: 11 },
  { produto: 'Choc.Lacta Ao Leite 80g', qtd: 11 },
  { produto: 'Choc.Lacta Amaro 145g', qtd: 9 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 80g', qtd: 6 },
  { produto: 'Choc.Lacta Diamante Negro/Laka 145g', qtd: 6 },
  { produto: 'Choc.Lacta Diamante Negro 80g', qtd: 2 },
  { produto: 'Choc.Lacta Amaro 80g', qtd: 1 }
];

const TOTAL_GERAL_GAMIFICACAO = 383;

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
32 - Ponta Grossa - Uvaranas	27
Amandita Lacta Choc.200g	3
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Diamante Negro/Laka 80g	4
Choc.Lacta Laka 80g	4
Choc.Lacta Laka Rech.Caramelo 104g	10
Choc.Lacta Ouro Bco 98g	3
Choc.Lacta Shot 80g	1
6 - Pinheirinho	27
Amandita Lacta Choc.200g	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	3
Choc.Lacta Amaro 145g	1
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Laka 145g	1
Choc.Lacta Laka 80g	1
Choc.Lacta Laka Rech.Caramelo 104g	4
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ouro Bco 98g	4
Choc.Lacta Shot 145g	2
Choc.Lacta Shot 80g	6
21 - Nilo Pecanha	14
Amandita Lacta Choc.200g	4
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
Choc.Lacta Amaro 145g	1
Choc.Lacta Ao Leite 80g	2
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Ouro Bco 98g	2
Choc.Lacta Shot 80g	2
25 - Paranagua - Raia	13
Bombom Lacta Ouro Bco/Sonho Valsa 220g	4
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Diamante Negro/Laka 80g	1
Choc.Lacta Laka 145g	1
Choc.Lacta Laka 80g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ouro Bco 98g	1
8 - Paranagua - Centro	13
Bombom Lacta Ouro Bco/Sonho Valsa 220g	4
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Laka 80g	1
Choc.Lacta Shot 145g	6
48 - Joinville - Itaum	12
Amandita Lacta Choc.200g	3
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
Choc.Lacta Amaro 145g	1
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Ouro Bco 98g	3
56 - Piraquara	11
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Diamante Negro/Laka 80g	1
Choc.Lacta Laka 80g	1
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Laka/Oreo 145g	1
Choc.Lacta Shot 145g	2
Choc.Lacta Shot 80g	1
42 - Ponta Grossa - Jardim Carvalho	10
Amandita Lacta Choc.200g	1
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Laka 80g	5
Choc.Lacta Laka/Oreo 145g	3
83 - Condor Merces	9
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Shot 145g	3
Choc.Lacta Shot 80g	1
43 - Almirante Tamandare	9
Choc.Lacta Ao Leite Rech.Caramelo 104g	4
Choc.Lacta Laka Rech.Caramelo 104g	2
Choc.Lacta Shot 145g	3
33 - Sao Jose - Rua Joinville	8
Bombom Lacta Ouro Bco/Sonho Valsa 220g	3
Choc.Lacta Ao Leite 145g	2
Choc.Lacta Laka 145g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Shot 145g	1
82 - Condor Cic Jk	8
Amandita Lacta Choc.200g	1
Choc.Lacta Diamante Negro 145g	6
Choc.Lacta Laka 80g	1
63 - Maringa - Av Kakogawa	7
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite 80g	2
Choc.Lacta Ao Leite Rech.Caramelo 104g	4
30 - Fazenda Rio Grande	6
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Laka/Oreo 145g	1
20 - Maringa - Av Parana	6
Choc.Lacta Ao Leite 145g	4
Choc.Lacta Laka Rech.Caramelo 104g	1
Choc.Lacta Shot 145g	1
27 - Novo Mundo	6
Choc.Lacta Amaro 145g	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Laka 145g	3
Choc.Lacta Shot 80g	1
19 - Ponta Grossa - Nova Russia	5
Choc.Lacta Ouro Bco 98g	5
29 - Agua Verde	4
Choc.Lacta Ao Leite 80g	2
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Choc.Lacta Laka 80g	1
7 - Marechal	4
Choc.Lacta Amaro 80g	1
Choc.Lacta Ao Leite 145g	2
Choc.Lacta Shot 145g	1
24 - Santa Candida	4
Amandita Lacta Choc.200g	1
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Laka 80g	2
64 - Gralha Azul	4
Choc.Lacta Ao Leite 145g	1
Choc.Lacta Diamante Negro 80g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Shot 80g	1
4 - Lapa	4
Choc.Lacta Ao Leite Rech.Caramelo 104g	3
Choc.Lacta Shot 145g	1
23 - Araucaria BR	3
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
Choc.Lacta Diamante Negro 145g	1
Choc.Lacta Laka 145g	1
67-Ponta Grossa - Ernesto Viléla	3
Choc.Lacta Laka 80g	1
Choc.Lacta Ouro Bco 98g	1
Choc.Lacta Shot 80g	1
41 - Campo Mourao	3
Choc.Lacta Ao Leite 80g	1
Choc.Lacta Diamante Negro 80g	1
Choc.Lacta Ouro Bco 98g	1
37 - Cajuru	2
Choc.Lacta Diamante Negro/Laka 145g	1
Choc.Lacta Ouro Bco 98g	1
28 - Cristo Rei	2
Bombom Lacta Ouro Bco/Sonho Valsa 220g	2
14 - Sao Jose Dos Pinhais	2
Choc.Lacta Laka 80g	2
22 - Champagnat	2
Choc.Lacta Laka 80g	2
13 - Sitio Cercado	1
Choc.Lacta Laka Rech.Caramelo 104g	1
71 - Araucaria Capela Velha	1
Choc.Lacta Shot 80g	1
17 - Ahu	1
Amandita Lacta Choc.200g	1
54 - Francisco Derosso	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
11 - Sao Braz	1
Choc.Lacta Ao Leite 145g	1
10 - Campo Comprido	1
Choc.Lacta Ao Leite 145g	1
60 - Maringa - Av Dr Luiz Teixeira	1
Bombom Lacta Ouro Bco/Sonho Valsa 220g	1
45 - Araucaria Costeira	1
Choc.Lacta Ouro Bco 98g	1
66 - Barreirinha	1
Choc.Lacta Ao Leite Rech.Caramelo 104g	1
Total Geral	383`;

