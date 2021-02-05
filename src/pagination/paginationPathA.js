import React from 'react'
import Star from '../images/star.svg'
import { NavLink } from 'react-router-dom'


const PaginataionPathA = () => {

    return(
        <div className="paginationPathA">
            <NavLink to="/paginationA1"><>1</></NavLink>
            <NavLink to="/paginationA2"><>2</></NavLink>
            <NavLink to="d"><>3</></NavLink>
            <NavLink to="d"><>4</></NavLink>
            <NavLink to="d"><><img src={Star} alt="Star Img"/></></NavLink>
        </div>
    )
}

export default PaginataionPathA