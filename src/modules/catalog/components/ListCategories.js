import { ListBrends } from "./ListBrends";
import { PageLink } from "../../common";
import React from "react";


const ListCategories = ({ categories, subcategories, handleCategoryClick, shouldShowBrends }) => {
    return (
        <div className="items_navigations grid">
            {
                categories.map((value, index) => (
                    <React.Fragment key={index}>
                        <PageLink
                                  className="item_navigation"
                                  path={"/catalog?category-id=" + value.id}
                                  onClick={() => handleCategoryClick(value)}>{value.name}</PageLink>
                        {
                            shouldShowBrends(value) ? <ListBrends subcategories={subcategories}/> : null
                        }
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default ListCategories