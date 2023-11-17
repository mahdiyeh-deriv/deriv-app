import React from 'react';
import { InlineMessage, WalletText, WalletTextField } from '../../../../../../components';
import SideNote from '../../../../../../public/images/accounts/side-note-example-image.svg';
import './IDVDocumentUploadDetails.scss';

const IDVDocumentUploadDetails = () => {
    return (
        <div className='wallets-idv-document-details'>
            <InlineMessage>
                <WalletText size='sm'>
                    To avoid delays, enter your <strong>name</strong> and <strong>date of birth</strong> exactly as it
                    appears on your identity document.
                </WalletText>
            </InlineMessage>
            <div className='wallets-idv-document-details__body'>
                <div className='wallets-idv-document-details__content'>
                    {/* TODO: Update account details using implemented Formik */}
                    <WalletTextField
                        helperMessage='Your first name as in your identity document'
                        label='First name*'
                        maxWidth='35.9rem'
                        showMessage
                    />
                    <WalletTextField
                        helperMessage='Your last name as in your identity document'
                        label='Last name*'
                        maxWidth='35.9rem'
                        showMessage
                    />
                    {/* TODO: Replace with DatePicker component*/}
                    <WalletTextField
                        helperMessage='Your date of birth as in your identity document'
                        label='Date of birth*'
                        maxWidth='35.9rem'
                        showMessage
                        type='date'
                    />
                </div>
                <div className='wallets-idv-document-details__sidenote'>
                    <WalletText size='xs' weight='bold'>
                        Example
                    </WalletText>
                    <SideNote />
                </div>
            </div>
        </div>
    );
};

export default IDVDocumentUploadDetails;
