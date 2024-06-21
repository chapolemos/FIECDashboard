import React from 'react';
import { colorTheme } from '../theme';

/*
Tabela de dados para exibir os índices da página de Compare.
*/

const TableComponent = ({data1, data2, mode}) => {
    const { colors } = colorTheme;
    return (
        <table className='w-full my-16 text-center' style={{ borderCollapse: 'collapse' }}>
            <thead style={{
                backgroundColor: colors.MidnightBlue,
                color: colors.White
            }}>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <th colSpan={3}>
                        {mode == 'Capacidades' ? 'Dimensão de Capacidades' : 'Dimensão de Resultados' }
                    </th>
                    <th style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }} colSpan={2}>Capacidade</th>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <th colSpan={3}>Indicador</th>
                    <th style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                    {data1.sigla? data1.sigla : data1.nome}
                    </th>
                    <th>
                    {data2.sigla? data2.sigla : data2.nome}
                    </th>
                </tr>
            </thead>
            <tbody style={{ backgroundColor: colors.White, color: colors.Black }}>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades'? 'Investimento Público em C&T' : 'Competitividade Global'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data1.dados.investimentoPublicoCT : data1.dados.competitividadeGlobal}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.investimentoPublicoCT: data2.dados.investimentoPublicoCT}
                    </td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades' ? 'Capital Humano - Graduação' : 'Intensidade Tecnológica'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data1.dados.capitalHumanoGraduacao : data1.dados.intensidadeTecnologica}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.capitalHumanoGraduacao: data2.dados.intensidadeTecnologica}
                    </td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades' ? 'Capital Humano - Pós-graduação' : 'Propriedade Intelectual'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data1.dados.capitalHumanoPosGraduacao : data1.dados.propriedadeIntelectual}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.capitalHumanoPosGraduacao: data2.dados.propriedadeIntelectual}  
                    </td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades' ? 'Inserção de Mestres e Doutores' : 'Produção Científica'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data1.dados.insercaoMestresDoutores : data1.dados.producaoCientifica}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.insercaoMestresDoutores: data2.dados.producaoCientifica}
                    </td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades' ? 'Instituições' : 'Empreendedorismo'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data1.dados.instituicoes : data1.dados.empreendedorismo}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.instituicoes: data2.dados.empreendedorismo}
                    </td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades' ? 'Infraestutura' : '-'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data2.dados.infraestrutura : '-'}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.infraestrutura : '-'}
                    </td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${colors.DarkGray}` }}>
                    <td colSpan={3}>
                        {mode == 'Capacidades' ? 'Cooperação' : '-'}
                    </td>
                    <td style={{ borderRight: `1px solid ${colors.DarkGray}`,borderLeft: `1px solid ${colors.DarkGray}` }}>
                        {mode == 'Capacidades' ? data2.dados.cooperacao : '-'}
                    </td>
                    <td>
                        {mode == 'Capacidades' ? data2.dados.cooperacao : '-'}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableComponent;
