export const getProfitOrLoss = (value: string): 'profit' | 'loss' =>
    +value.replace(/,/g, '') >= 0 ? 'profit' : 'loss';
