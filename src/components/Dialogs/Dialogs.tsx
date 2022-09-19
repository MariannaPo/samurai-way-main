import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        Dimych
                    </div>
                    <div className={s.dialog}>
                        Andrey
                    </div>
                    <div className={s.dialog}>
                        Sveta
                    </div>
                    <div className={s.dialog}>
                        Sasha
                    </div>
                    <div className={s.dialog}>
                        Viktor
                    </div>
                    <div className={s.dialog}>
                        Valera
                    </div>
                </div>
            </div>
            <div>
                <div className={s.messages}>
                    <div className={s.dialog}>Hi</div>
                    <div className={s.dialog}>How is your it-kamasutra?</div>
                    <div className={s.dialog}>Yo</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;