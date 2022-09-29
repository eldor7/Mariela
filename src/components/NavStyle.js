import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 120px;
border-bottom: 1px solid #555;
    

h1{
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: #B08EAD;
    margin-right: 40px;
    border: none;
    text-decoration: none;
}
`

export const Navcon = styled.div`
margin-right: 140px;
display: flex;
align-items: center;

`

export const Link = styled(NavLink)`
margin-right: 130px;
`


export const Shopimg = styled.img`
`

export const Logo = styled.img`
margin-left: 113px;
`







