import classes from './modal.module.css';

function Modal({isOpen,closeModal}) {

    return (
        <div className={classes.modal}>
            <form>
                <input type="text" placeholder="500"/>
                <div className={classes.btn__div}>
                    <button className={classes.btn_one}>Back</button>
                    <button className={classes.btn_two}>Change</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;