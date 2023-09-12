import {ReactNode} from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: ReactNode;
};

const Modal = ({isOpen, onClose, title, content}: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={onClose}>Fermer</button>
                        <h2>{title}</h2>
                        {content}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;