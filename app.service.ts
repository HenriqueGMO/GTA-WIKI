import { Get, Injectable, Query } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GTA WIKI';
  }


getVc(): object {
  return {
    lancamento: 2002,
    titulo: "Grand Theft Auto Vice City",
    plataformas: "Windows, PlayStation, Xbox",
    mobile: true
  }
}

getG3(): object {
  return {
    lancamento: 2001,
    titulo: "Grand Thef Auto III",
    plataformas: "Windows, PlayStation, Xbox",
    mobile: true
  }
}

getSa(): object {
  return {
    lancamento: 2004,
    titulo: "Grand Thef Auto San Andreas",
    plataformas: "Windows, PlayStation, Xbox",
    mobile: true
  }
}

getG4(): object {
  return {
    lancamento: 2008,
    titulo: "Grand Thef Auto IV",
    plataformas: "Windows, PlayStation, Xbox",
    mobile: false
  }
}

getG5(): object {
  return {
    lancamento: 2013,
    titulo: "Grand Thef Auto V",
    plataformas: "Windows, PlayStation, Xbox",
    mobile: false
  }
}

getRsG3(): object {
  return {
    resumo: "Grand Theft Auto III é um jogo eletrônico de tiro em terceira pessoa de mundo aberto desenvolvido pela DMA Design e publicado pela Rockstar Games. Foi lançado em 22 de outubro de 2001 para PlayStation 2, em 20 de maio de 2002 para Microsoft Windows e em 31 de outubro de 2003 para Xbox. Uma versão remasterizada foi lançada nas plataformas móveis em 2011, em virtude ao aniversário de dez anos do jogo, enquanto que uma versão aprimorada, sob o subtítulo The Definitive Edition, foi lançada no vigésimo aniversário do jogo, em 2021. É o quinto título da série Grand Theft Auto, e o primeiro título principal desde Grand Theft Auto 2 de 1999. Ambientado na cidade fictícia de Liberty City, vagamente baseada em Nova Iorque,[4] o jogador controla Claude que, após ter sido deixado para morrer, fica enredado no mundo de gangues, crime e corrupção."
  }
}

getRsVc(): object {
  return {
    resumo: "Grand Theft Auto: Vice City é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o quarto título principal da série Grand Theft Auto e foi lançado em outubro de 2002 para PlayStation 2, em maio de 2003 para Microsoft Windows e em outubro de 2003 para Xbox. Versões para plataformas móveis foram lançadas em 2012, em virtude ao aniversário de dez anos do jogo, enquanto que uma versão aprimorada, sob o subtítulo The Definitive Edition, foi lançada em 2021. O jogo se passa na cidade ficcional de Vice City na década de 1980, com a história seguindo o mafioso Tommy Vercetti na construção de seu império criminal e confrontos com outras organizações criminais da cidade. O mundo aberto permite que os jogadores naveguem livremente pelas ilhas que formam a cidade."
  }
}

getRsSa(): object {
  return {
    resumo: "Grand Theft Auto: San Andreas é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o quinto título principal da série Grand Theft Auto e foi lançado em outubro de 2004 para PlayStation 2 e em junho de 2005 para Xbox e Microsoft Windows. Versões para plataformas móveis foram lançadas inicialmente em 2013, enquanto que uma versão aprimorada, sob o subtítulo The Definitive Edition, foi lançada em 2021. O jogo se passa no estado ficcional de San Andreas, com a história seguindo Carl 'CJ' Johnson em sua luta para lidar com guerras de gangues, confrontos com policiais e as relações com sua família e amigos. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas."
  }
}

getRsG4(): object {
  return {
    resumo: "Grand Theft Auto IV é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sexto título principal da série Grand Theft Auto e foi lançado em 29 de abril de 2008 para PlayStation 3 e Xbox 360 e depois em 2 de dezembro para Microsoft Windows. O jogo se passa na cidade ficcional de Liberty City, com a história um jogador seguindo o imigrante Niko Bellic e suas tentativas de fugir do passado apesar da pressão de agiotas e criminosos. O mundo aberto permite que os jogadores naveguem livremente pelas três ilhas que formam a cidade."
  }
}

getRsG5(): object {
  return {
    resumo: "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sétimo título principal da série Grand Theft Auto e foi lançado originalmente em 17 de setembro de 2013 para PlayStation 3 e Xbox 360, com remasterizações lançadas em 2014 para PlayStation 4 e Xbox One, em 2015 para Microsoft Windows e em 2022 para PlayStation 5 e Xbox Series X/S. O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas."
  }
}
}
