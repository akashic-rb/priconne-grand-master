import Link from "next/link";
import styled from "styled-components";
import headerBg from "../../assets/head_bg.png";
import mobileHeaderBg from "../../assets/Mobile/hed_bg.png"
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
    @media(max-width: 767px) {
        height: 100vh;
    }
`

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    @media(max-width: 767px) {
        background-image: url(${mobileHeaderBg.src});
        background-size: 100% 100%;
        background-repeat: no-repeat; 
        overflow-y: auto;
        opacity: 1;
    }
`

export const InnerHeader = styled.div`
    position: relative;
    @media(max-width: 767px) {
        width: 65rem;
        height: 100%;
        padding: 12.9rem 0;
        margin: 0 auto;
        z-index: 10001;
    }
    @media(min-width: 768px) {
        height: 100%;
        width: 100%;
        background-image: url(${headerBg.src});
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: right;
    }
`

export const Nav = styled.nav`
    position: relative;
    margin: 0 12rem;
    top: 0;
    right: 0;
`

export const HeaderCloseBtn = styled.button`
    width: 5.2rem;
    background: none;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    img {
        width: 100%;
    }
    @media(min-width: 768px) {
        display: none;
    }
`

export const StyledList = styled(List)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    @media (min-width: 768px) {
        position: absolute;
        flex-direction: row;
        height: 5.2rem;
        width: 51.7rem;
        top: 0.5rem;
        right: 26.9rem;
        line-height: 1;
    }
`

export const StyledListItem = styled(ListItem)`
    display: flex;
    align-items: center;
    height: 19.9rem;
    text-align: center;
    position: relative;
    a img {
        display: none;
        @media(min-width: 768px) {
            display: block;
        }
    }
    a .is-mb {
        display: block;
        width: 100%;
        @media(min-width: 768px) {
            display: none;
        }
    }
    @media(min-width: 768px) {
        justify-content: center;
        height: 100%;
        a {
            display: inline-block;
            position: relative;
            img {
                transition: opacity .5s ease 0s;
                width: 100%;
                :first-child {
                    opacity: 1;
                }
                :nth-child(2) {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
            :hover {
                img {
                    :first-child {
                        opacity: 0;
                    }
                    :nth-child(2) {
                        opacity: 1;
                        position: absolute;
                        top: 0;
                        left: 0;
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
    }
`

export const StyledLink = ({href, children}) => (
    <Link href={href} passHref>
        <a>{ children }</a>
    </Link>
)

export const StyledImage = styled.img`
    width: 100%;
`

export const ClosedSign = styled.p`
    display: none;
    position: absolute;
    width: 19.1rem;
    top: 1.3rem;
    right: 3.6rem;
    padding: 0;
    margin: 0;
    img {
        width: 100%;
    }
    @media(min-width: 768px) {
        display: block;
    }
`