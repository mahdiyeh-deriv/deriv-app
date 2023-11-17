import React from 'react';
import { useActiveWalletAccount } from '@deriv/api';
import { WalletButton, WalletPasswordField, WalletText } from '../../../../components/Base';
import useDevice from '../../../../hooks/useDevice';
import { TMarketTypes, TPlatforms } from '../../../../types';
import { PlatformDetails } from '../../constants';
import './EnterPassword.scss';

// TODO: Refactor the unnecessary props out once FlowProvider is integrated
type TProps = {
    isLoading?: boolean;
    marketType: TMarketTypes.CreateOtherCFDAccount;
    onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    password: string;
    platform: TPlatforms.All;
};

const EnterPassword: React.FC<TProps> = ({
    isLoading,
    marketType,
    onPasswordChange,
    onPrimaryClick,
    onSecondaryClick,
    password,
    platform,
}) => {
    const { isDesktop } = useDevice();
    const title = PlatformDetails[platform].title;
    const { data } = useActiveWalletAccount();
    const accountType = data?.is_virtual ? 'Demo' : 'Real';
    const marketTypeTitle = platform === 'dxtrade' ? accountType : marketType;

    return (
        <div className='wallets-enter-password'>
            <div className='wallets-enter-password__container'>
                <WalletText lineHeight='xl' weight='bold'>
                    Enter your {title} password
                </WalletText>
                <WalletText size='sm'>
                    Enter your {title} password to add a {title} {marketTypeTitle} account.
                </WalletText>
                <WalletPasswordField label={`${title} password`} onChange={onPasswordChange} password={password} />
            </div>
            {isDesktop && (
                <div className='wallets-enter-password__buttons'>
                    <WalletButton onClick={onSecondaryClick} size='lg' text='Forgot password?' variant='outlined' />
                    <WalletButton
                        disabled={!password || isLoading}
                        isLoading={isLoading}
                        onClick={onPrimaryClick}
                        size='lg'
                        text='Add account'
                    />
                </div>
            )}
        </div>
    );
};

export default EnterPassword;
