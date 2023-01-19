import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { isOpen, isValidToSell, hasContractEntered } from '@deriv/shared';
import Button from '../../button';

const ContractCardSell = ({ contract_info, getCardLabels, is_sell_requested, onClickSell }) => {
    const is_valid_to_sell = isValidToSell(contract_info);
    const should_show_sell = hasContractEntered(contract_info) && isOpen(contract_info);

    const onClick = ev => {
        onClickSell(contract_info.contract_id);
        ev.stopPropagation();
        ev.preventDefault();
    };

    if (!should_show_sell) return <React.Fragment />;
    if (!is_valid_to_sell)
        return <div className='dc-contract-card__no-resale-msg'>{getCardLabels().RESALE_NOT_OFFERED}</div>;
    return (
        <Button
            className={classNames('dc-btn--sell', {
                'dc-btn--loading': is_sell_requested,
            })}
            is_disabled={is_sell_requested}
            text={getCardLabels().SELL}
            onClick={onClick}
            secondary
        />
    );
};

ContractCardSell.propTypes = {
    contract_info: PropTypes.object,
    getCardLabels: PropTypes.func,
    is_sell_requested: PropTypes.any,
    onClickSell: PropTypes.func,
};

export default ContractCardSell;
