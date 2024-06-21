/*
Helper usado pra converter as chaves para a exibição das labels formatadas nos gráficos.
*/ 

enum CATEGORY_NAMES {
    indiceFIECInovacao = 'Índice FIEC de Inovação',
    indiceCapacidades = 'Índice de Capacidades',
    investimentoPublicoCT = 'Investimento Público em C&T',
    capitalHumanoGraduacao = 'Capital Humano - Graduação',
    capitalHumanoPosGraduacao = 'Capital Humano - Graduação',
    insercaoMestresDoutores = 'Inserção de Mestres e Doutores',
    instituicoes = 'Instituições',
    infraestrutura = 'Infraestrutura',
    cooperacao = 'Cooperação',
    indiceResultados = 'Índice de Resultados',
    competitividadeGlobal = 'Competitividade Global',
    intensidadeTecnologica = 'Intensidade Tecnológica',
    propriedadeIntelectual = 'Propriedade Intelectual',
    producaoCientifica = 'Produção Científica',
    empreendedorismo = 'Empreendedorismo',
}
export function categoryNameAdapter(dados: string[]) {
    return dados.map(categoria => CATEGORY_NAMES[categoria])
}