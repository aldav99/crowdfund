import ReactDOM from 'react-dom';
import React from 'react';

import styles from "./../../shared/styles/style.module.css"

export class SubscribeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <React.Fragment>
                <a onClick={() => this.toggle()}>Условия подписки</a>
                {this.state.isOpen && ReactDOM.createPortal(
                    <div className={styles.overlay}>
                        <div className={styles.body}>
                            В зависимости от суммы перевода, поощряем подписчиков личной подписью автора, мерчендайзом (футболками, кружками), упоминанием в благодарностях.
                    <button onClick={() => this.toggle()}>Закрыть
                                </button>
                        </div>
                    </div>,
                    document.getElementById('modal-root')
                )}
            </React.Fragment>
        );
    }
}
