import React from "react";
import { PageLink } from "./PageLink";

export const Breadcrumb = ({ usePageManager = () => [] }) => {
    const path = usePageManager()
    return (
        <div className="breadcrumb flex">
            {path.map((value, index) => (
                <React.Fragment key={index}>
                <PageLink path={value.link || 0} className={value.className}>{value.page}</PageLink>
                {(index + 1 !== path.length)?<div>/</div>: null}
                </React.Fragment>
            ))}
        </div>
    )
}