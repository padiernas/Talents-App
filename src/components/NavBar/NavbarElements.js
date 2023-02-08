import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: #2d2e34;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((60vw - 1000px) / 2);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
  box-shadow: 0 0 7px 0 #ffcb05;
  font-weight: bolder;
`

export const NavLink = styled(Link)`
  color: #ffcb05;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.2rem;
  font-family: 'coogose-light';
  cursor: pointer;
  &.active {
    color: #ffffff;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  @media screen and (max-width: 768px) {
    justify-content:flex-start;
    display:${({ open }) => (open ? "flex" : "none")};
    font-size:15px;
    margin-right: 50px;
    a{
      img{
        display:none
      }
    }
  }
`
