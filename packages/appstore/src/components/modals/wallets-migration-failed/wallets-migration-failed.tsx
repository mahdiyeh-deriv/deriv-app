import React from 'react';
import { Text, Modal, Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import { useStore, observer } from '@deriv/stores';
import './wallets-migration-failed.scss';

const WalletsMigrationFailed = observer(() => {
    const { traders_hub, ui } = useStore();
    const { is_wallet_migration_failed, setWalletsMigrationFailedPopup } = traders_hub;
    const { is_mobile } = ui;

    const handleClose = () => {
        setWalletsMigrationFailedPopup(false);
    };

    const handLiveChatButtonClick = () => {
        window.LC_API?.open_chat_window();
        setWalletsMigrationFailedPopup(false);
    };

    return (
        <Modal is_open={is_wallet_migration_failed} toggleModal={handleClose} width={is_mobile ? '32.3rem' : '44rem'}>
            <div>
                <Modal.Body className='wallets-migration-failed'>
                    <Text
                        as='h1'
                        size={is_mobile ? 'xs' : 's'}
                        color='prominent'
                        weight='bold'
                        className='wallets-migration-failed__title'
                    >
                        {localize('Sorry for the interruption')}
                    </Text>
                    <Text size={is_mobile ? 'xxs' : 'xs'}>
                        {localize(
                            "We're unable to complete with the Wallet upgrade. Please try again later or contact us via live chat."
                        )}
                    </Text>
                </Modal.Body>
                <Modal.Footer className='wallets-migration-failed__footer'>
                    <Button secondary large onClick={handLiveChatButtonClick}>
                        {localize('Go to live chat')}
                    </Button>
                    <Button primary large onClick={handleClose} classNameSpan='wallets-migration-failed__text'>
                        {localize('Back to Trader’s Hub')}
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
});

export default WalletsMigrationFailed;
