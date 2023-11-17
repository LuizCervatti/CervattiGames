import logo from '../../assets/logo.png';

import diamantes from '../../assets/moedas/diamantes-ff.png';
import vbucks from '../../assets/moedas/vbucks-fornite.png';
import vpoints from '../../assets/moedas/v-points.png';
import csgocoin from '../../assets/moedas/csgo-coin.png';
import robux from '../../assets/moedas/robux.png';

const cesta = {
  topo: {
    titulo: "Detalhe da compra",
  },
  detalhes: {
    nome: "Compras de moedas",
    logoLoja: logo,
    nomeLoja: "Cervatti Games",
    descricao: "Uma loja de moeadas para games variados"
  },
  itens: {
    titulo: "Itens da compra",
    lista: [
      {
        nome: "300 Diamantes - Free Fire",
        imagem: diamantes,
        preco: "R$ 13,99",
        botao: "Adicionar a compra"
      },
      {
        nome: "140 V Bucks - Fortnite",
        imagem: vbucks,
        preco: "R$ 134,90",
        botao: "Adicionar a compra"
      },
      {
        nome: "475 V Points - Valorant",
        imagem: vpoints,
        preco: "R$ 16,90",
        botao: "Adicionar a compra"
      },
      {
        nome: "100 CS GO Coins - Counter Strike",
        imagem: csgocoin,
        preco: "R$ 49,80 ",
        botao: "Adicionar a compra"
      },
      {
        nome: "400 Robux - Roblox",
        imagem: robux,
        preco: "R$ 27,90",
        botao: "Adicionar a compra"
      }
    ]
  }
}

export default cesta;