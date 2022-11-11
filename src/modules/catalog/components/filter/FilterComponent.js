import React from "react";
import { TypeFilter } from "./components/TypeFilter";
import { CoastFilter } from "./components/CoastFilter";
import { BrendFilter } from "./components/BrendFilter";


export class FilterComponent extends React.Component{

    render() {
        return (
            <div className="manipulation_products">
                <div className="head_manipulation flex">Фильтр</div>
                <div className="manipulations_manipulation grid">
                    <TypeFilter/>
                    <CoastFilter/>
                    <BrendFilter/>
                </div>
            </div>
        )
    }
}