import React from 'react'
import Star from '../images/star.svg'
import { NavLink } from 'react-router-dom'


const PaginataionPathB = () => {

    return(
        <div className="paginationPathA">
            <NavLink to="/paginationB1"><>1</></NavLink>
            <NavLink to="/paginationB2"><>2</></NavLink>
            <NavLink to="/paginationB3"><>3</></NavLink>
            <NavLink to="/paginationB4"><>4</></NavLink>
            <NavLink to="/paginationB5"><>5</></NavLink>
            <NavLink to="/paginationB6"><>6</></NavLink>
            <NavLink to="/paginationB7"><><img src={Star} alt="Star Img"/></></NavLink>
        </div>
    )
}

export default PaginataionPathB