// list : [ { name, link }, ... ]
import { PageLink } from "../../../../../PageLink";
import { useLocation } from "react-router-dom";


export const OverlayItemList = ({ list, onClick }) => {
    let location = useLocation();
    return (
        <>
            {list.map((value, index) => {
                const params = new URLSearchParams(location.search)
                params.set('category-id', value.id)
                return (
                    <PageLink
                        key={index}
                        className="item_catalog_overlay grid"
                        path={"/catalog?" + params.toString()}
                        onClick={onClick}
                    >{value.name}
                        <div className="pointer"/>
                    </PageLink>
                )
            })}
        </>
    );
}