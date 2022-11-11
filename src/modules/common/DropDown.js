import { useRef } from "react";
import { useOutsideAlerter } from "hooks/useOutsideClick";


const defaultStyle = {
    marginLeft: -3,
    marginTop: 28,
    padding: "5px 7px 7px 5px",
}
export const DropDown = ({ isOpen, onRequestClose, children }) => {
    const dropDownRef = useRef()
    useOutsideAlerter(dropDownRef, ()=>{
        onRequestClose()
    })


    return (
        <div ref={dropDownRef} className="drop-down" style={{
            ...defaultStyle,
            visibility: isOpen?'visible':'hidden'
        }}>
            {children}
        </div>
    )
}