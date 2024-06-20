
/*
Massa de dados usada para alimentar a aplicação, assim como interfaces para a construção de objetos de maneira adequada.
A massa de dados aqui foi instanciada manualmente, porém poderia receber um objeto processado em um back-end, a fim de
evitar processamento extensivo no front-end, o que poderia causar lentidão para o usuário. Os objetos foram pensados
de maneira a reduzir a complexidade de tempo de sua iteração para evitar tempos de O(n²).
*/
export interface IndicesFIEC {
    indiceFIECInovacao: number;
    indiceCapacidades: number;
    investimentoPublicoCT: number;
    capitalHumanoGraduacao: number;
    capitalHumanoPosGraduacao: number;
    insercaoMestresDoutores: number;
    instituicoes: number;
    infraestrutura: number;
    cooperacao: number;
    indiceResultados: number;
    competitividadeGlobal: number;
    intensidadeTecnologica: number;
    propriedadeIntelectual: number;
    producaoCientifica: number;
    empreendedorismo: number;
}


export enum IndicesFIECEnum {
    indiceFIECInovacao = 'Índice FIEC de Inovação',
    indiceCapacidades = 'Índice de Capacidades',
    investimentoPublicoCT = 'Investimento Público em CT',
    capitalHumanoGraduacao = 'Capital Humano Graduação',
    capitalHumanoPosGraduacao = 'Capital Humano Pós-Graduação',
    insercaoMestresDoutores = 'Inserção de Mestres e Doutores',
    instituicoes = 'Instituições',
    infraestrutura = 'Infraestrutura',
    cooperacao = 'Cooperação',
    indiceResultados = 'Índice de Resultados',
    competitividadeGlobal = 'Competitividade Global',
    intensidadeTecnologica = 'Intensidade Tecnológica',
    propriedadeIntelectual = 'Propriedade Intelectual',
    producaoCientifica = 'Produção Científica',
    empreendedorismo = 'Empreendedorismo'
}

export interface Index {
    value: string;
    label: string;
}

export const indexes: Index[] = [
    {
        value: 'indiceFIECInovacao',
        label: 'Índice FIEC de Inovação'
    },
    {
        value: 'indiceCapacidades',
        label: 'Índice de Capacidades'
    },
    {
        value: 'investimentoPublicoCT',
        label: 'Investimento Público em CT'
    },
    {
        value: 'capitalHumanoGraduacao',
        label: 'Capital Humano Graduação'
    },
    {
        value: 'capitalHumanoPosGraduacao',
        label: 'Capital Humano Pós-Graduação'
    },
    {
        value: 'insercaoMestresDoutores',
        label: 'Inserção de Mestres e Doutores'
    },
    {
        value: 'instituicoes',
        label: 'Instituições'
    },
    {
        value: 'infraestrutura',
        label: 'Infraestrutura'
    },
    {
        value: 'cooperacao',
        label: 'Cooperação'
    },
    {
        value: 'indiceResultados',
        label: 'Índice de Resultados'
    },
    {
        value: 'competitividadeGlobal',
        label: 'Competitividade Global'
    },
    {
        value: 'intensidadeTecnologica',
        label: 'Intensidade Tecnológica'
    },
    {
        value: 'propriedadeIntelectual',
        label: 'Propriedade Intelectual'
    },
    {
        value: 'producaoCientifica',
        label: 'Produção Científica'
    },
    {
        value: 'empreendedorismo',
        label: 'Empreendedorismo'
    }
]

export interface Estado {
    nome: string;
    sigla: string;
    dados: IndicesFIEC;
}

export interface Regiao {
    nome: string;
    estados: Estado[];
    dados: IndicesFIEC;
}

export const regioes: Regiao[] = [
    {
        nome: "Norte",
        dados: {
            indiceFIECInovacao: 0.097,
            indiceCapacidades: 0.111,
            investimentoPublicoCT: 0.018,
            capitalHumanoGraduacao: 0.045,
            capitalHumanoPosGraduacao: 0.000,
            insercaoMestresDoutores: 0.000,
            instituicoes: 0.357,
            infraestrutura: 0.333,
            cooperacao: 0.056,
            indiceResultados: 0.083,
            competitividadeGlobal: 0.240,
            intensidadeTecnologica: 0.233,
            propriedadeIntelectual: 0.000,
            producaoCientifica: 0.000,
            empreendedorismo: 0.000,
        },
        estados: [
            {
                nome: "Acre",
                sigla: "AC",
                dados: {
                    indiceFIECInovacao: 0.112,
                    indiceCapacidades: 0.168,
                    investimentoPublicoCT: 0.048,
                    capitalHumanoGraduacao: 0.034,
                    capitalHumanoPosGraduacao: 0.109,
                    insercaoMestresDoutores: 0.013,
                    instituicoes: 0.444,
                    infraestrutura: 0.541,
                    cooperacao: 0.013,
                    indiceResultados: 0.056,
                    competitividadeGlobal: 0.346,
                    intensidadeTecnologica: 0.017,
                    propriedadeIntelectual: 0.001,
                    producaoCientifica: 0.000,
                    empreendedorismo: 0.002,
                },
            },
            {
                nome: "Amapá",
                sigla: "AP",
                dados: {
                    indiceFIECInovacao: 0.089,
                    indiceCapacidades: 0.166,
                    investimentoPublicoCT: 0.001,
                    capitalHumanoGraduacao: 0.107,
                    capitalHumanoPosGraduacao: 0.000,
                    insercaoMestresDoutores: 0.004,
                    instituicoes: 0.611,
                    infraestrutura: 0.502,
                    cooperacao: 0.002,
                    indiceResultados: 0.013,
                    competitividadeGlobal: 0.073,
                    intensidadeTecnologica: 0.007,
                    propriedadeIntelectual: 0.000,
                    producaoCientifica: 0.001,
                    empreendedorismo: 0.001,
                },
            },
            {
                nome: "Amazonas",
                sigla: "AM",
                dados: {
                    indiceFIECInovacao: 0.253,
                    indiceCapacidades: 0.184,
                    investimentoPublicoCT: 0.035,
                    capitalHumanoGraduacao: 0.299,
                    capitalHumanoPosGraduacao: 0.173,
                    insercaoMestresDoutores: 0.025,
                    instituicoes: 0.468,
                    infraestrutura: 0.318,
                    cooperacao: 0.059,
                    indiceResultados: 0.322,
                    competitividadeGlobal: 0.774,
                    intensidadeTecnologica: 1.000,
                    propriedadeIntelectual: 0.003,
                    producaoCientifica: 0.021,
                    empreendedorismo: 0.005,
                },
            },
            {
                nome: "Pará",
                sigla: "PA",
                dados: {
                    indiceFIECInovacao: 0.138,
                    indiceCapacidades: 0.194,
                    investimentoPublicoCT: 0.049,
                    capitalHumanoGraduacao: 0.241,
                    capitalHumanoPosGraduacao: 0.249,
                    insercaoMestresDoutores: 0.009,
                    instituicoes: 0.466,
                    infraestrutura: 0.403,
                    cooperacao: 0.025,
                    indiceResultados: 0.081,
                    competitividadeGlobal: 0.008,
                    intensidadeTecnologica: 0.076,
                    propriedadeIntelectual: 0.004,
                    producaoCientifica: 0.316,
                    empreendedorismo: 0.001,
                },
            },
            {
                nome: "Rondônia",
                sigla: "RO",
                dados: {
                    indiceFIECInovacao: 0.150,
                    indiceCapacidades: 0.231,
                    investimentoPublicoCT: 0.002,
                    capitalHumanoGraduacao: 0.273,
                    capitalHumanoPosGraduacao: 0.106,
                    insercaoMestresDoutores: 0.001,
                    instituicoes: 0.756,
                    infraestrutura: 0.518,
                    cooperacao: 0.084,
                    indiceResultados: 0.070,
                    competitividadeGlobal: 0.411,
                    intensidadeTecnologica: 0.036,
                    propriedadeIntelectual: 0.002,
                    producaoCientifica: 0.000,
                    empreendedorismo: 0.002,
                },
            },
            {
                nome: "Roraima",
                sigla: "RR",
                dados: {
                    indiceFIECInovacao: 0.119,
                    indiceCapacidades: 0.189,
                    investimentoPublicoCT: 0.000,
                    capitalHumanoGraduacao: 0.012,
                    capitalHumanoPosGraduacao: 0.046,
                    insercaoMestresDoutores: 0.001,
                    instituicoes: 0.333,
                    infraestrutura: 0.594,
                    cooperacao: 0.411,
                    indiceResultados: 0.049,
                    competitividadeGlobal: 0.325,
                    intensidadeTecnologica: 0.000,
                    propriedadeIntelectual: 0.000,
                    producaoCientifica: 0.000,
                    empreendedorismo: 0.000,
                },
            },
            {
                nome: "Tocantins",
                sigla: "TO",
                dados: {
                    indiceFIECInovacao: 0.068,
                    indiceCapacidades: 0.105,
                    investimentoPublicoCT: 0.000,
                    capitalHumanoGraduacao: 0.065,
                    capitalHumanoPosGraduacao: 0.080,
                    insercaoMestresDoutores: 0.000,
                    instituicoes: 0.332,
                    infraestrutura: 0.277,
                    cooperacao: 0.030,
                    indiceResultados: 0.030,
                    competitividadeGlobal: 0.157,
                    intensidadeTecnologica: 0.027,
                    propriedadeIntelectual: 0.003,
                    producaoCientifica: 0.001,
                    empreendedorismo: 0.003,
                },
            },
        ],
    },
    {
        nome: "Nordeste",
        dados: {
            indiceFIECInovacao: 0.126,
            indiceCapacidades: 0.155,
            investimentoPublicoCT: 0.041,
            capitalHumanoGraduacao: 0.070,
            capitalHumanoPosGraduacao: 0.258,
            insercaoMestresDoutores: 0.054,
            instituicoes: 0.526,
            infraestrutura: 0.155,
            cooperacao: 0.070,
            indiceResultados: 0.097,
            competitividadeGlobal: 0.031,
            intensidadeTecnologica: 0.000,
            propriedadeIntelectual: 0.063,
            producaoCientifica: 0.339,
            empreendedorismo: 0.044,
        },
        estados: [
            {
                nome: "Alagoas",
                sigla: "AL",
                dados: {
                    indiceFIECInovacao: 0.104,
                    indiceCapacidades: 0.171,
                    investimentoPublicoCT: 0.041,
                    capitalHumanoGraduacao: 0.114,
                    capitalHumanoPosGraduacao: 0.089,
                    insercaoMestresDoutores: 0.004,
                    instituicoes: 0.554,
                    infraestrutura: 0.448,
                    cooperacao: 0.002,
                    indiceResultados: 0.037,
                    competitividadeGlobal: 0.146,
                    intensidadeTecnologica: 0.063,
                    propriedadeIntelectual: 0.007,
                    producaoCientifica: 0.002,
                    empreendedorismo: 0.003,
                },
            },
            {
                nome: "Bahia",
                sigla: "BA",
                dados: {
                    indiceFIECInovacao: 0.210,
                    indiceCapacidades: 0.242,
                    investimentoPublicoCT: 0.013,
                    capitalHumanoGraduacao: 0.275,
                    capitalHumanoPosGraduacao: 0.274,
                    insercaoMestresDoutores: 0.014,
                    instituicoes: 0.544,
                    infraestrutura: 0.658,
                    cooperacao: 0.014,
                    indiceResultados: 0.179,
                    competitividadeGlobal: 0.409,
                    intensidadeTecnologica: 0.165,
                    propriedadeIntelectual: 0.022,
                    producaoCientifica: 0.381,
                    empreendedorismo: 0.015,
                },
            },
            {
                nome: "Ceará",
                sigla: "CE",
                dados: {
                    indiceFIECInovacao: 0.228,
                    indiceCapacidades: 0.265,
                    investimentoPublicoCT: 0.026,
                    capitalHumanoGraduacao: 0.287,
                    capitalHumanoPosGraduacao: 0.349,
                    insercaoMestresDoutores: 0.021,
                    instituicoes: 0.711,
                    infraestrutura: 0.566,
                    cooperacao: 0.030,
                    indiceResultados: 0.191,
                    competitividadeGlobal: 0.259,
                    intensidadeTecnologica: 0.341,
                    propriedadeIntelectual: 0.017,
                    producaoCientifica: 0.386,
                    empreendedorismo: 0.014,
                },
            },
            {
                nome: "Maranhão",
                sigla: "MA",
                dados: {
                    indiceFIECInovacao: 0.119,
                    indiceCapacidades: 0.175,
                    investimentoPublicoCT: 0.008,
                    capitalHumanoGraduacao: 0.097,
                    capitalHumanoPosGraduacao: 0.137,
                    insercaoMestresDoutores: 0.000,
                    instituicoes: 0.603,
                    infraestrutura: 0.455,
                    cooperacao: 0.003,
                    indiceResultados: 0.063,
                    competitividadeGlobal: 0.303,
                    intensidadeTecnologica: 0.079,
                    propriedadeIntelectual: 0.003,
                    producaoCientifica: 0.004,
                    empreendedorismo: 0.002,
                },
            },
            {
                nome: "Paraíba",
                sigla: "PB",
                dados: {
                    indiceFIECInovacao: 0.175,
                    indiceCapacidades: 0.221,
                    investimentoPublicoCT: 0.001,
                    capitalHumanoGraduacao: 0.278,
                    capitalHumanoPosGraduacao: 0.263,
                    insercaoMestresDoutores: 0.008,
                    instituicoes: 0.764,
                    infraestrutura: 0.354,
                    cooperacao: 0.026,
                    indiceResultados: 0.129,
                    competitividadeGlobal: 0.160,
                    intensidadeTecnologica: 0.066,
                    propriedadeIntelectual: 0.021,
                    producaoCientifica: 0.423,
                    empreendedorismo: 0.008,
                },
            },
            {
                nome: "Pernambuco",
                sigla: "PE",
                dados: {
                    indiceFIECInovacao: 0.255,
                    indiceCapacidades: 0.245,
                    investimentoPublicoCT: 0.024,
                    capitalHumanoGraduacao: 0.173,
                    capitalHumanoPosGraduacao: 0.401,
                    insercaoMestresDoutores: 0.043,
                    instituicoes: 0.668,
                    infraestrutura: 0.429,
                    cooperacao: 0.117,
                    indiceResultados: 0.265,
                    competitividadeGlobal: 0.832,
                    intensidadeTecnologica: 0.248,
                    propriedadeIntelectual: 0.022,
                    producaoCientifica: 0.411,
                    empreendedorismo: 0.014,
                },
            },
            {
                nome: "Piauí",
                sigla: "PI",
                dados: {
                    indiceFIECInovacao: 0.104,
                    indiceCapacidades: 0.147,
                    investimentoPublicoCT: 0.069,
                    capitalHumanoGraduacao: 0.004,
                    capitalHumanoPosGraduacao: 0.157,
                    insercaoMestresDoutores: 0.004,
                    instituicoes: 0.487,
                    infraestrutura: 0.342,
                    cooperacao: 0.002,
                    indiceResultados: 0.061,
                    competitividadeGlobal: 0.320,
                    intensidadeTecnologica: 0.053,
                    propriedadeIntelectual: 0.002,
                    producaoCientifica: 0.003,
                    empreendedorismo: 0.006,
                },
            },
            {
                nome: "Rio Grande do Norte",
                sigla: "RN",
                dados: {
                    indiceFIECInovacao: 0.191,
                    indiceCapacidades: 0.200,
                    investimentoPublicoCT: 0.000,
                    capitalHumanoGraduacao: 0.258,
                    capitalHumanoPosGraduacao: 0.285,
                    insercaoMestresDoutores: 0.005,
                    instituicoes: 0.281,
                    infraestrutura: 0.397,
                    cooperacao: 0.293,
                    indiceResultados: 0.182,
                    competitividadeGlobal: 0.442,
                    intensidadeTecnologica: 0.057,
                    propriedadeIntelectual: 0.008,
                    producaoCientifica: 0.503,
                    empreendedorismo: 0.008,
                },
            },
            {
                nome: "Sergipe",
                sigla: "SE",
                dados: {
                    indiceFIECInovacao: 0.191,
                    indiceCapacidades: 0.192,
                    investimentoPublicoCT: 0.006,
                    capitalHumanoGraduacao: 0.349,
                    capitalHumanoPosGraduacao: 0.191,
                    insercaoMestresDoutores: 0.008,
                    instituicoes: 0.514,
                    infraestrutura: 0.370,
                    cooperacao: 0.015,
                    indiceResultados: 0.190,
                    competitividadeGlobal: 0.540,
                    intensidadeTecnologica: 0.169,
                    propriedadeIntelectual: 0.007,
                    producaoCientifica: 0.368,
                    empreendedorismo: 0.001,
                },
            },
        ],
    },
    {
        nome: "Centro-Oeste",
        dados: {
            indiceFIECInovacao: 0.162,
            indiceCapacidades: 0.206,
            investimentoPublicoCT: 0.007,
            capitalHumanoGraduacao: 0.033,
            capitalHumanoPosGraduacao: 0.262,
            insercaoMestresDoutores: 0.051,
            instituicoes: 0.668,
            infraestrutura: 0.494,
            cooperacao: 0.024,
            indiceResultados: 0.117,
            competitividadeGlobal: 0.265,
            intensidadeTecnologica: 0.046,
            propriedadeIntelectual: 0.079,
            producaoCientifica: 0.194,
            empreendedorismo: 0.047,
        },
        estados: [
            {
                nome: "Distrito Federal",
                sigla: "DF",
                dados: {
                    indiceFIECInovacao: 0.283,
                    indiceCapacidades: 0.343,
                    investimentoPublicoCT: 0.058,
                    capitalHumanoGraduacao: 0.145,
                    capitalHumanoPosGraduacao: 0.464,
                    insercaoMestresDoutores: 0.271,
                    instituicoes: 0.625,
                    infraestrutura: 0.831,
                    cooperacao: 0.093,
                    indiceResultados: 0.224,
                    competitividadeGlobal: 0.442,
                    intensidadeTecnologica: 0.221,
                    propriedadeIntelectual: 0.048,
                    producaoCientifica: 0.461,
                    empreendedorismo: 0.046,
                },
            },
            {
                nome: "Goiás",
                sigla: "GO",
                dados: {
                    indiceFIECInovacao: 0.204,
                    indiceCapacidades: 0.205,
                    investimentoPublicoCT: 0.012,
                    capitalHumanoGraduacao: 0.225,
                    capitalHumanoPosGraduacao: 0.237,
                    insercaoMestresDoutores: 0.008,
                    instituicoes: 0.542,
                    infraestrutura: 0.481,
                    cooperacao: 0.031,
                    indiceResultados: 0.202,
                    competitividadeGlobal: 0.452,
                    intensidadeTecnologica: 0.261,
                    propriedadeIntelectual: 0.044,
                    producaoCientifica: 0.341,
                    empreendedorismo: 0.016,
                },
            },
            {
                nome: "Mato Grosso",
                sigla: "MT",
                dados: {
                    indiceFIECInovacao: 0.153,
                    indiceCapacidades: 0.235,
                    investimentoPublicoCT: 0.025,
                    capitalHumanoGraduacao: 0.192,
                    capitalHumanoPosGraduacao: 0.152,
                    insercaoMestresDoutores: 0.001,
                    instituicoes: 0.700,
                    infraestrutura: 0.647,
                    cooperacao: 0.021,
                    indiceResultados: 0.071,
                    competitividadeGlobal: 0.281,
                    intensidadeTecnologica: 0.105,
                    propriedadeIntelectual: 0.019,
                    producaoCientifica: 0.004,
                    empreendedorismo: 0.012,
                },
            },
            {
                nome: "Mato Grosso do Sul",
                sigla: "MS",
                dados: {
                    indiceFIECInovacao: 0.165,
                    indiceCapacidades: 0.240,
                    investimentoPublicoCT: 0.004,
                    capitalHumanoGraduacao: 0.256,
                    capitalHumanoPosGraduacao: 0.229,
                    insercaoMestresDoutores: 0.006,
                    instituicoes: 0.607,
                    infraestrutura: 0.548,
                    cooperacao: 0.159,
                    indiceResultados: 0.091,
                    competitividadeGlobal: 0.412,
                    intensidadeTecnologica: 0.107,
                    propriedadeIntelectual: 0.014,
                    producaoCientifica: 0.010,
                    empreendedorismo: 0.009,
                },
            },
        ],
    },
    {
        nome: "Sudeste",
        dados: {
            indiceFIECInovacao: 0.911,
            indiceCapacidades: 0.851,
            investimentoPublicoCT: 1.000,
            capitalHumanoGraduacao: 1.000,
            capitalHumanoPosGraduacao: 1.000,
            insercaoMestresDoutores: 1.000,
            instituicoes: 0.706,
            infraestrutura: 0.579,
            cooperacao: 0.609,
            indiceResultados: 0.971,
            competitividadeGlobal: 1.000,
            intensidadeTecnologica: 0.885,
            propriedadeIntelectual: 1.000,
            producaoCientifica: 0.971,
            empreendedorismo: 1.000,
        },
        estados: [
            {
                nome: "Espírito Santo",
                sigla: "ES",
                dados: {
                    indiceFIECInovacao: 0.254,
                    indiceCapacidades: 0.297,
                    investimentoPublicoCT: 0.089,
                    capitalHumanoGraduacao: 0.515,
                    capitalHumanoPosGraduacao: 0.267,
                    insercaoMestresDoutores: 0.026,
                    instituicoes: 0.708,
                    infraestrutura: 0.544,
                    cooperacao: 0.061,
                    indiceResultados: 0.212,
                    competitividadeGlobal: 0.430,
                    intensidadeTecnologica: 0.169,
                    propriedadeIntelectual: 0.035,
                    producaoCientifica: 0.509,
                    empreendedorismo: 0.016,
                },
            },
            {
                nome: "Minas Gerais",
                sigla: "MG",
                dados: {
                    indiceFIECInovacao: 0.354,
                    indiceCapacidades: 0.366,
                    investimentoPublicoCT: 0.028,
                    capitalHumanoGraduacao: 0.583,
                    capitalHumanoPosGraduacao: 0.598,
                    insercaoMestresDoutores: 0.069,
                    instituicoes: 0.665,
                    infraestrutura: 0.577,
                    cooperacao: 0.257,
                    indiceResultados: 0.343,
                    competitividadeGlobal: 0.565,
                    intensidadeTecnologica: 0.352,
                    propriedadeIntelectual: 0.207,
                    producaoCientifica: 0.480,
                    empreendedorismo: 0.199,
                },
            },
            {
                nome: "São Paulo",
                sigla: "SP",
                dados: {
                    indiceFIECInovacao: 0.859,
                    indiceCapacidades: 0.803,
                    investimentoPublicoCT: 1.000,
                    capitalHumanoGraduacao: 0.915,
                    capitalHumanoPosGraduacao: 1.000,
                    insercaoMestresDoutores: 0.590,
                    instituicoes: 0.863,
                    infraestrutura: 0.783,
                    cooperacao: 0.396,
                    indiceResultados: 0.915,
                    competitividadeGlobal: 1.000,
                    intensidadeTecnologica: 0.667,
                    propriedadeIntelectual: 1.000,
                    producaoCientifica: 0.910,
                    empreendedorismo: 1.000,
                },
            },
            {
                nome: "Rio de Janeiro",
                sigla: "RJ",
                dados: {
                    indiceFIECInovacao: 0.469,
                    indiceCapacidades: 0.602,
                    investimentoPublicoCT: 0.547,
                    capitalHumanoGraduacao: 0.406,
                    capitalHumanoPosGraduacao: 0.790,
                    insercaoMestresDoutores: 1.000,
                    instituicoes: 0.489,
                    infraestrutura: 0.726,
                    cooperacao: 0.188,
                    indiceResultados: 0.336,
                    competitividadeGlobal: 0.561,
                    intensidadeTecnologica: 0.232,
                    propriedadeIntelectual: 0.164,
                    producaoCientifica: 0.698,
                    empreendedorismo: 0.124,
                },
            },
        ],
    },
    {
        nome: "Sul",
        dados: {
            indiceFIECInovacao: 0.559,
            indiceCapacidades: 0.467,
            investimentoPublicoCT: 0.000,
            capitalHumanoGraduacao: 0.538,
            capitalHumanoPosGraduacao: 0.701,
            insercaoMestresDoutores: 0.141,
            instituicoes: 0.529,
            infraestrutura: 0.667,
            cooperacao: 1.000,
            indiceResultados: 0.650,
            competitividadeGlobal: 0.558,
            intensidadeTecnologica: 1.000,
            propriedadeIntelectual: 0.584,
            producaoCientifica: 0.665,
            empreendedorismo: 0.439,
        },
        estados: [
            {
                nome: "Paraná",
                sigla: "PR",
                dados: {
                    indiceFIECInovacao: 0.395,
                    indiceCapacidades: 0.402,
                    investimentoPublicoCT: 0.043,
                    capitalHumanoGraduacao: 0.383,
                    capitalHumanoPosGraduacao: 0.497,
                    insercaoMestresDoutores: 0.098,
                    instituicoes: 0.716,
                    infraestrutura: 0.741,
                    cooperacao: 0.547,
                    indiceResultados: 0.389,
                    competitividadeGlobal: 0.653,
                    intensidadeTecnologica: 0.478,
                    propriedadeIntelectual: 0.270,
                    producaoCientifica: 0.514,
                    empreendedorismo: 0.123,
                },
            },
            {
                nome: "Rio Grande do Sul",
                sigla: "RS",
                dados: {
                    indiceFIECInovacao: 0.451,
                    indiceCapacidades: 0.459,
                    investimentoPublicoCT: 0.036,
                    capitalHumanoGraduacao: 0.491,
                    capitalHumanoPosGraduacao: 0.700,
                    insercaoMestresDoutores: 0.084,
                    instituicoes: 0.480,
                    infraestrutura: 0.705,
                    cooperacao: 1.000,
                    indiceResultados: 0.442,
                    competitividadeGlobal: 0.665,
                    intensidadeTecnologica: 0.584,
                    propriedadeIntelectual: 0.247,
                    producaoCientifica: 0.595,
                    empreendedorismo: 0.224,
                },
            },
            {
                nome: "Santa Catarina",
                sigla: "SC",
                dados: {
                    indiceFIECInovacao: 0.438,
                    indiceCapacidades: 0.411,
                    investimentoPublicoCT: 0.003,
                    capitalHumanoGraduacao: 0.536,
                    capitalHumanoPosGraduacao: 0.454,
                    insercaoMestresDoutores: 0.037,
                    instituicoes: 0.677,
                    infraestrutura: 0.827,
                    cooperacao: 0.579,
                    indiceResultados: 0.465,
                    competitividadeGlobal: 0.766,
                    intensidadeTecnologica: 0.611,
                    propriedadeIntelectual: 0.310,
                    producaoCientifica: 0.513,
                    empreendedorismo: 0.241,
                },
            },
        ],
    },
];

function makeRankings(regioes: Regiao[]) {
    const estadoRankings: Map<string, Map<string, number>> = new Map();
    const regiaoRankings: Map<string, Map<string, number>> = new Map();

    // Carregar e pré-calcular os rankings
    const todosEstados: Estado[] = [];
    for (const regiao of regioes) {
        todosEstados.push(...regiao.estados);
    }

    // Calcular rankings dos estados
    const indicesEstados = new Set<string>();
    todosEstados.forEach(estado => {
        Object.keys(estado.dados).forEach(indice => indicesEstados.add(indice));
    });

    indicesEstados.forEach(indice => {
        const estadosOrdenados = todosEstados.slice().sort((a, b) => b.dados[indice] - a.dados[indice]);

        const rankingMap = new Map<string, number>();
        estadosOrdenados.forEach((estado, rank) => {
            rankingMap.set(estado.nome, rank + 1);
        });

        estadoRankings.set(indice, rankingMap);
    });

    // Calcular rankings das regiões
    const indicesRegioes = new Set<string>();
    regioes.forEach(regiao => {
        Object.keys(regiao.dados).forEach(indice => indicesRegioes.add(indice));
    });

    indicesRegioes.forEach(indice => {
        const regioesOrdenadas = regioes.slice().sort((a, b) => b.dados[indice] - a.dados[indice]);

        const rankingMap = new Map<string, number>();
        regioesOrdenadas.forEach((regiao, rank) => {
            rankingMap.set(regiao.nome, rank + 1);
        });

        regiaoRankings.set(indice, rankingMap);
    });

    return {
        getEstadoRanking(estadoNome: string, indice: string): number | null {
            const rankingMap = estadoRankings.get(indice);
            if (rankingMap && rankingMap.has(estadoNome)) {
                return rankingMap.get(estadoNome) || null;
            }
            return null;
        },
        getRegiaoRanking(regiaoNome: string, indice: string): number | null {
            const rankingMap = regiaoRankings.get(indice);
            if (rankingMap && rankingMap.has(regiaoNome)) {
                return rankingMap.get(regiaoNome) || null;
            }
            return null;
        }
    };
}

function filterRegions(regions: Regiao[], regionFilter: string[], dataToBeAnalyzed: string) {
    const regionsFiltered = regions.filter((regiao) => regionFilter.includes(regiao.nome));
    const states = regionsFiltered.reduce<Estado[]>((acc, regiao) => {
        acc.push(...regiao.estados);


        return acc;
    }, []);
    const data = states?.map((estado) => {
        return {
            sigla: estado.sigla,
            indice: estado.dados[dataToBeAnalyzed]
        };
    });
    return data;
}