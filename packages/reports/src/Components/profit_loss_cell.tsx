import React from 'react';
import { getProfitOrLoss } from '../Helpers/profit-loss';

type TProfitLossCell = {
    value: string;
};

const ProfitLossCell = ({ value, children }: React.PropsWithChildren<TProfitLossCell>) => {
    const status = getProfitOrLoss(value);

    return <span className={`amount--${status}`}>{children}</span>;
};

export default ProfitLossCell;
