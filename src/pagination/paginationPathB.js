import React from 'react'
import Star from '../images/star.svg'
import { NavLink } from 'react-router-dom'


const PaginataionPathB = () => {

    return(
        <div className="paginationPathA">
            <NavLink to="/paginationB1"><>1</></NavLink>
            <NavLink to="/paginationB2"><>2</></NavLink>
            <NavLink to="d"><>3</></NavLink>
            <NavLink to="d"><>4</></NavLink>
            <NavLink to="d"><>5</></NavLink>
            <NavLink to="d"><>6</></NavLink>
            <NavLink to="d"><><img src={Star} alt="Star Img"/></></NavLink>
        </div>
    )
}

export default PaginataionPathB