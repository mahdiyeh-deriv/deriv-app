import React, { useCallback, useRef } from 'react';
import { Formik } from 'formik';
import { Loader, WalletButton } from '../../../../../../components';
import useDevice from '../../../../../../hooks/useDevice';
import { useTransfer } from '../../provider';
import type { TInitialTransferFormValues } from '../../types';
import { TransferFormDropdown } from '../TransferFormDropdown';
import { TransferFormInputField } from '../TransferFormInputField';
import './TransferForm.scss';

const TransferForm = () => {
    const { isMobile } = useDevice();
    const { activeWallet, isLoading, mutate } = useTransfer();
    const mobileAccountsListRef = useRef<HTMLDivElement | null>(null);

    const initialValues: TInitialTransferFormValues = {
        amountReceive: 0,
        amountSend: 0,
        fromAccount: activeWallet,
        toAccount: undefined,
    };

    const onSubmit = useCallback(
        (values: TInitialTransferFormValues) => {
            mutate({
                account_from: values.fromAccount?.loginid,
                account_to: values.toAccount?.loginid,
                amount: Number(values.amountSend),
                currency: values.fromAccount?.currency,
            });
        },
        [mutate]
    );

    if (isLoading) return <Loader />;

    return (
        <div className='wallets-transfer'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit, values }) => (
                    <form className='wallets-transfer__form' onSubmit={handleSubmit}>
                        <div className='wallets-transfer__fields'>
                            <div className='wallets-transfer__fields-section'>
                                <TransferFormInputField
                                    defaultValue={values.amountSend}
                                    fieldName='amountSend'
                                    fractionDigits={values.fromAccount?.currencyConfig?.fractional_digits}
                                    label='Amount you send'
                                />
                                <TransferFormDropdown
                                    fieldName='fromAccount'
                                    label='Transfer from'
                                    mobileAccountsListRef={mobileAccountsListRef}
                                />
                            </div>
                            <div style={{ height: '20px' }} />
                            <div className='wallets-transfer__fields-section'>
                                <TransferFormInputField
                                    defaultValue={values.amountReceive}
                                    fieldName='amountReceive'
                                    fractionDigits={values.toAccount?.currencyConfig?.fractional_digits}
                                    label='Estimated amount'
                                />
                                <TransferFormDropdown
                                    fieldName='toAccount'
                                    label='Transfer to'
                                    mobileAccountsListRef={mobileAccountsListRef}
                                />
                            </div>
                        </div>
                        <WalletButton size={isMobile ? 'md' : 'lg'} text='Transfer' variant='contained' />
                    </form>
                )}
            </Formik>
            {/* Portal for accounts list in mobile view */}
            <div className='wallets-transfer__mobile-accounts-list' ref={mobileAccountsListRef} />
        </div>
    );
};

export default TransferForm;
