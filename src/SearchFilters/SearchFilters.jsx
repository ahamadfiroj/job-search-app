import React, { useState } from "react";
import Select from 'react-select'
import { FILTERS_FORMS } from "./SearchFilters.constant";

const SearchFilters = ({jobList})=>{
    const [selectedFiltersObj, setSelectedFiltersObj] = useState({})
    const onChangeHandler = (selectedValue, name)=>{
        setSelectedFiltersObj({
            ...selectedFiltersObj,
            [name]:selectedValue,
        })
    }
    return <div className="filters-wrapper">{Object.values(FILTERS_FORMS).map((item)=>{
        return <Select 
        {...item}
        onChange={(selectedValue)=>onChangeHandler(selectedValue, item.name)}
        value={selectedFiltersObj[item.name]}
        key={item.name}
        />
    })}</div>
}

export default SearchFilters;