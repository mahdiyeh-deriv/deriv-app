import React from 'react';
import { Icon, Button, Text } from '@deriv/components';
import { formatMoney, CFD_PLATFORMS, getStaticUrl } from '@deriv/shared';
import { Localize } from '@deriv/translations';
import { TPlatform } from 'Types';

type TCFDAccountManager = {
    type?: string;
    amount?: string;
    appname: string;
    loginid?: string;
    platform: TPlatform;
    currency?: string;
    onClickTopUp?: () => void;
    onClickTrade?: () => void;
    onClickGet?: () => void;
    description?: string;
    has_account: boolean;
    disabled: boolean;
};

const CFDAccountManager = ({
    type,
    amount,
    appname,
    loginid,
    currency,
    platform,
    has_account,
    description,
    disabled,
    onClickTopUp,
    onClickTrade,
    onClickGet,
}: TCFDAccountManager) => {
    const openStaticPage = () => {
        if (platform === CFD_PLATFORMS.MT5) window.open(getStaticUrl(`/dmt5`));
        else window.open(getStaticUrl(`/derivx`));
    };

    return (
        <div className='cfd-account-manager'>
            <div className='cfd-account-manager__icon'>
                {platform === CFD_PLATFORMS.MT5 &&
                    (type === 'financial' ? (
                        <Icon icon='IcAppstoreFinancial' size={64} onClick={openStaticPage} />
                    ) : (
                        <Icon icon='IcAppstoreDerived' size={64} onClick={openStaticPage} />
                    ))}
                {platform === CFD_PLATFORMS.DXTRADE && (
                    <Icon icon='IcAppstoreDerivx' size={64} onClick={openStaticPage} />
                )}
            </div>
            <div className='cfd-account-manager__details'>
                <Text
                    size='xs'
                    weight={!has_account ? 'bold' : 'normal'}
                    onClick={openStaticPage}
                    className='cfd-account-manager__details--title'
                >
                    {appname}
                </Text>
                {has_account ? (
                    <>
                        <Text size='xs' weight='bold'>{`${formatMoney(currency, amount, true)} ${currency}`}</Text>
                        <Text size='xs'>{loginid}</Text>
                    </>
                ) : (
                    <Text size='xxxs'>{description}</Text>
                )}
            </div>
            <div className='cfd-account-manager__buttons'>
                {has_account ? (
                    <>
                        <Button secondary className='cfd-account-manager__buttons-topup' onClick={onClickTopUp}>
                            <Localize i18n_default_text='Top-up' />
                        </Button>
                        <Button primary onClick={onClickTrade}>
                            <Localize i18n_default_text='Trade' />
                        </Button>
                    </>
                ) : (
                    <Button
                        primary
                        className='cfd-account-manager__buttons-get'
                        onClick={onClickGet}
                        disabled={disabled}
                    >
                        <Localize i18n_default_text='Get' />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default CFDAccountManager;
