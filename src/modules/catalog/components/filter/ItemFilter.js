import chevronDownImg from "../../../../assets/img/svg/chevron-down.svg"


export const ItemFilter = (props) => (
    <div className="flex">{props.children} <img src={chevronDownImg} alt=""/></div>
)