import chevronDownImg from "../../../../assets/img/svg/chevron-down.svg"


export const ItemFilter = (props) => (
    <div className="flex" onClick={props.onClick}>{props.children} <img src={chevronDownImg} alt="chevron down" width={18} height={18}/></div>
)