const digitCategoriesMap: string[] = ['even_odd', 'match_diff', 'over_under'];
const digitTypesMap: string[] = ['DIGITDIFF', 'DIGITMATCH', 'DIGITOVER', 'DIGITUNDER', 'DIGITEVEN', 'DIGITODD'];

export const isDigitTradeType = (trade_type: string): boolean => digitCategoriesMap.includes(trade_type);
export const isDigitContractType = (contract_type: string): boolean => digitTypesMap.includes(contract_type);
