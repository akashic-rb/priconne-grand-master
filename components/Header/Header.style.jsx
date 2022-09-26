import Link from "next/link";
import styled from "styled-components";
import headerBg from "../../assets/head_bg.png";
import { List, ListItem } from "../../styles/global.style";

export const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    @media (min-width: 768px) {
        height: 10.2rem;
    }
`

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const InnerHeader = styled.div`
    background-image: url(${headerBg.src});
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    position: relative;
`

export const Nav = styled.nav`
    position: relative;
    top: 0;
    right: 0;
`

export const StyledList = styled(List)`
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    @media (min-width: 768px) {
        height: 5.2rem;
        width: 51.7rem;
        top: 0.5rem;
        right: 26.9rem;
        line-height: 1;
    }
`

export const StyledListItem = styled(ListItem)`
    height: 100%;
    text-align: center;
    position: relative;
    a {
        display: inline-block;
        img {
            :first-child {
                display: block;
            }
            :nth-child(2) {
                display: none;
            }
        }
        :hover {
            img {
                :first-child {
                    display: none;
                }
                :nth-child(2) {
                    display: block;
                }
            }
        }
    }
    :nth-child(1) {
        width: 16.4rem;
        a {
            width: 12.6rem;
        } 
    }
    :nth-child(2) {
        width: 15.2rem;
        position: relative;
        :before, :after {
            content: '';
            background-color: rgb(65, 70, 74);
            display: block;
            width: .1rem;
            height: 4rem;
            position: absolute;
            bottom: -.1rem;
        }
        :before {
            left: 0;
        }
        :after {
            right: 0;
        }
        a {
            width: 10.6rem;
        }
    }
    :nth-child(3) {
        width: 20.1rem;
        a {
            width: 16.3rem;
        }
    }
`

export const StyledLink = ({href, children}) => (
    <Link prefetch href={href} passHref>
        <a>{ children }</a>
    </Link>
)

export const StyledImage = styled.img`
    width: 100%;
`

export const ClosedSign = styled.p`
    position: absolute;
    width: 19.1rem;
    top: 1.3rem;
    right: 3.6rem;
    padding: 0;
    margin: 0;
    img {
        width: 100%;
    }
`