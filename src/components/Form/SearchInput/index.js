import React from 'react'
import "./styles.scss"

const SearchForm = ({label, ...otherProps}) => {
    return (
        <div className="SearchForm">
            <label className="SearchForm-label">{label}</label>
            <div className="SearchForm-input">
                <input {...otherProps} autoComplete="off" placeholder="Type here..." />
            </div>
        </div>
    )
}

export default SearchForm
