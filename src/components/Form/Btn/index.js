import React from 'react'
import './styles.scss'

const Btn = ({children, ...otherPros}) => {
    return (
        <button 
        className="Btn"
        {...otherPros}>
            {children}
        </button>
    )
}

export default Btn
