import classes from './modal.module.css';

function Modal({isOpen,closeModal}) {

    return (
        <div className={classes.modal}>
            <form>
                <button onClick={() => closeModal(!isOpen)} className={classes.close_btn}>X</button>
                <h4>Settings</h4>
                <div className={classes.input__box}>
                    <input type="text" placeholder='Min. Deposit' />
                    <input type="text" placeholder='Max. views Per User' />
                </div>
                <div className={classes.input__box}>
                    <input type="text" placeholder='Cost per Impression' />
                    <input type="text" placeholder='Min. views Per User' />
                </div>
                <div className={classes.mini__form}>
                    <div className={classes.input__box__two}>
                        <div className={classes.label_div}>
                            <label>Recommended Image Size (pixels)</label>
                        </div>
                        <div className={classes.input__box__mini}>
                            <input type="text" placeholder='Cost per Impression' />
                            <input type="text" placeholder='Min. views Per User' />
                        </div>
                    </div>
                    <div className={classes.input__box__two}>
                        <div className={classes.label_div}>
                            <label>Fallback Image</label>
                        </div>
                        <div className={classes.input__box__mini}>
                            <input type="file" />
                        </div>
                    </div>
                </div>
                <div className={classes.selected__item}>
                    <div className={classes.selected__item__one}>
                        <h4>Ad Display (Website)</h4>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_1">Checkbox</label>
                        </div>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_2" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_2">Checkbox</label>
                        </div>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_3" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_3">Checkbox</label>
                        </div>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_4" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_4">Checkbox</label>
                        </div>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_5" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_5">Checkbox</label>
                        </div>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_6" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_6">Checkbox</label>
                        </div>
                        <div className={classes.selected__item__box}>
                            <input className={classes.styled_checkbox} id="styled_checkbox_7" type="checkbox" value="value1"></input>
                            <label htmlFor="styled_checkbox_7">Checkbox</label>
                        </div>
                    </div>
                    <div className={classes.selected__item__two}>
                        <h4>Ad Display (Mobile App)</h4>
                        <div className={classes.selected__item__box__upper}>
                            <div className={classes.selected__item__box}>
                                <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                                <label htmlFor="styled_checkbox_1">Checkbox</label>
                            </div>
                            <div>
                                <select>
                                    <option value="" key="">dummy</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.selected__item__box__upper}>
                            <div className={classes.selected__item__box}>
                                <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                                <label htmlFor="styled_checkbox_1">Checkbox</label>
                            </div>
                            <div>
                                <select>
                                    <option value="" key="">dummy</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.selected__item__box__upper}>
                            <div className={classes.selected__item__box}>
                                <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                                <label htmlFor="styled_checkbox_1">Checkbox</label>
                            </div>
                            <div>
                                <select>
                                    <option value="" key="">dummy</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.selected__item__box__upper}>
                            <div className={classes.selected__item__box}>
                                <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                                <label htmlFor="styled_checkbox_1">Checkbox</label>
                            </div>
                            <div>
                                <select>
                                    <option value="" key="">dummy</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.selected__item__box__upper}>
                            <div className={classes.selected__item__box}>
                                <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                                <label htmlFor="styled_checkbox_1">Checkbox</label>
                            </div>
                            <div>
                                <select>
                                    <option value="" key="">dummy</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.selected__item__box__upper}>
                            <div className={classes.selected__item__box}>
                                <input className={classes.styled_checkbox} id="styled_checkbox_1" type="checkbox" value="value1"></input>
                                <label htmlFor="styled_checkbox_1">Checkbox</label>
                            </div>
                            <div>
                                <select>
                                    <option value="" key="">dummy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <button>submit</button>
            </form>
        </div>
    );
}

export default Modal;