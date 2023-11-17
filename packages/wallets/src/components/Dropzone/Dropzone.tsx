import React, {
    ComponentProps,
    DetailedHTMLProps,
    InputHTMLAttributes,
    ReactNode,
    RefObject,
    useCallback,
    useState,
} from 'react';
import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';
import CloseIcon from '../../public/images/close-icon.svg';
import DropzoneFrame from '../../public/images/dropzone-frame.svg';
import { IconButton, WalletButton, WalletText } from '../Base';
import './Dropzone.scss';

type TProps = {
    buttonText?: ReactNode;
    description?: ReactNode;
    descriptionColor?: ComponentProps<typeof WalletText>['color'];
    fileFormats?: NonNullable<Parameters<typeof useDropzone>[0]>['accept'];
    hasFrame?: boolean;
    hoverMessage?: ReactNode;
    icon: ReactNode;
    maxSize?: NonNullable<Parameters<typeof useDropzone>[0]>['maxSize'];
};

const Dropzone: React.FC<TProps> = ({
    buttonText = 'Upload',
    description,
    descriptionColor,
    fileFormats,
    hasFrame = false,
    hoverMessage = 'Drop file here',
    icon,
    maxSize,
}) => {
    const [files, setFiles] = useState<
        {
            name: string;
            preview: string;
        }[]
    >([]);
    const [showHoverMessage, setShowHoverMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { getInputProps, getRootProps, open, rootRef } = useDropzone({
        accept: fileFormats,
        maxSize,
        multiple: false,
        noClick: true,
        onDragEnter: () => setShowHoverMessage(true),
        onDragLeave: () => setShowHoverMessage(false),
        onDrop: acceptedFiles => {
            setShowHoverMessage(false);
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
        onDropAccepted() {
            setErrorMessage(null);
        },
        onDropRejected(fileRejections) {
            setErrorMessage(fileRejections?.[0]?.errors?.[0].message);
        },
    });

    const removeFile = useCallback(
        (file: { name: string; preview: string }) => () => {
            setFiles(prev => prev.filter(f => f.name !== file.name));
        },
        []
    );

    return (
        <div {...getRootProps()} className='wallets-dropzone__container' ref={rootRef as RefObject<HTMLDivElement>}>
            <input
                {...(getInputProps() as DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>)}
            />
            <div
                className={classNames(
                    'wallets-dropzone',
                    { 'wallets-dropzone--hover': showHoverMessage },
                    { 'wallets-dropzone--active': files.length > 0 }
                )}
            >
                <div className='wallets-dropzone__content'>
                    {showHoverMessage && <WalletText size='sm'>{hoverMessage}</WalletText>}
                    {!showHoverMessage && !files.length && (
                        <div className='wallets-dropzone__placeholder'>
                            <div className='wallets-dropzone__placeholder-icon'>{icon}</div>
                            <WalletText align='center' size='md'>
                                {description}
                            </WalletText>
                            <div className='wallets-dropzone__placeholder-text'>
                                <WalletButton onClick={open} text={buttonText} variant='outlined' />
                            </div>
                            {errorMessage && (
                                <WalletText align='center' color='red' size='2xs'>
                                    {errorMessage}
                                </WalletText>
                            )}
                        </div>
                    )}
                    {!showHoverMessage &&
                        files.length > 0 &&
                        files.map(file => (
                            <React.Fragment key={file.name}>
                                <div
                                    className={classNames('wallets-dropzone__thumb', {
                                        'wallets-dropzone__thumb--has-frame': hasFrame,
                                    })}
                                    style={{ backgroundImage: `url(${file.preview})` }}
                                >
                                    {hasFrame && <DropzoneFrame />}
                                    <IconButton
                                        className='wallets-dropzone__remove-file'
                                        icon={<CloseIcon width={12} />}
                                        onClick={removeFile(file)}
                                        size='sm'
                                    />
                                </div>
                                {description && (
                                    <WalletText align='center' color={descriptionColor}>
                                        {description}
                                    </WalletText>
                                )}
                            </React.Fragment>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Dropzone;
