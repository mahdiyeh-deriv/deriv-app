import React from 'react';
import { getProfitOrLoss } from '../Helpers/profit-loss';

const AmountCell = (value: string) => {
    const status = getProfitOrLoss(value);

    return <span className={`amount--${status}`}>{value}</span>;
};

export default AmountCell;
