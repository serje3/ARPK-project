import { useEffect, useRef } from "react";
import { PageLink } from "../../common";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";
import { useSelector } from "react-redux";


function setActiveBrend(index, brends) {
    console.log(brends.current.children, index)
    if (brends.current !== undefined && index !== null && index !== undefined && !isNaN(index)){
        for (const element of brends.current.children) {
            element.classList.remove('active')
        }
        brends.current.children[index].classList.add('active')
    }
}
export const ListBrends = ({ subcategories }) => {
    const brendRef = useRef()
    const query = useQuery()
    let location = useLocation();
    useEffect(()=>{
        const subcategoryId = parseInt(query.get("subcategory-id"))
        if (!isNaN(subcategoryId))
            setActiveBrend(subcategories.findIndex(value => value.id === subcategoryId), brendRef)
    }, [query])
    
    if (subcategories.length === 0) {
        return null
    }
    return (
        <div className="brends_item grid" ref={brendRef}>
            {subcategories.map((value, index) => {
                const params = new URLSearchParams(location.search)
                params.set('subcategory-id', value.id)
                return (
                <PageLink
                     key={index + 'b'}
                     path={location.pathname + "?" + params.toString()}
                     className="brend_item"
                >{value.name}</PageLink>
            )
            })}
        </div>
    )
}