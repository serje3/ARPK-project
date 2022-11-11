import { PrivacyLink } from "./PrivacyLink";
import React from "react";


export const PrivacyFormInput = () => {
    return (
        <div className="input-privacy-div">
            <input id="input-privacy" type="checkbox" name="privacy" required/>
            <label htmlFor="input-privacy">Отправляя форму, я соглашаюсь с <PrivacyLink/></label>
        </div>
    )
}