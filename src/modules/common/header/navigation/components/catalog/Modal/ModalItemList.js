// list : [ { name, link }, ... ]
import { PageLink } from "../../../../../PageLink";
import { useLocation } from "react-router-dom";


export const ModalItemList = ({ list }) => {
    let location = useLocation();
    return (
        <>
            {list.map((value, index) => {
                const params = new URLSearchParams(location.search)
                params.set('category-id', value.id)
                return (
                    <PageLink
                        key={index}
                        className="item_modal grid"
                        path={"/catalog?" + params.toString()}
                    >{value.name}
                        <div className="pointer"/>
                    </PageLink>
                )
            })}
        </>
    );
}