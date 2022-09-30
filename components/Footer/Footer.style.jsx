import styled from "styled-components";
import { List, ListItem } from "../../styles/global.style";

export const Footer = styled.footer`
    width: 100%;
    background: #fff;
    .menu-list {
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem;
        line-height: 1.66667;
        color: #083b5a;
        @media(min-width:768px) {
            width: 49.5rem;
            margin: 5.5rem auto;
        }
        p {
            margin: 0;
            text-decoration: underline;
        }
    }
`

export const AboutApp = styled.div`
    background: rgba(6, 49, 76, 1);
    color: rgba(244, 242, 238, 1);
    @media(min-width: 768px) {
        padding: 6.2rem 0;
    }
`

export const InnerWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    @media(min-width: 768px) {
        width: 52.6rem;
    }
    figure {
        margin-right: 2rem;
        @media(min-width: 768px) {
            width: 9rem;
        }
        img {
            display: block;
            width: 100%;
        }
    }
`

export const AppDetails = styled.div`
    @media(min-width: 768px) {
        width: 42.8rem;
    }
    p {
        img {
            width: 100%;
        }
    }
`

export const StyledList = styled(List)`

`

export const StyledListItem = styled(ListItem)`
    .is-mb {
        display: block;
    }
    @media(min-width: 768px) {
        font-size: 1.2rem;
        line-height: 1.66667;
        a {
            text-decoration-color: rgba(211, 206, 198, 1);
        }
        .is-mb {
            display: none;
        }
    }
`

export const BannerList = styled.dl`
    width: 68.1rem;
    margin: 0 auto;
    display: flex;
    dt {
        margin-bottom: 4rem;
        @media(min-width: 768px) {
            width: 22.3rem;
            text-align: left;
            padding-top: 1.3rem;
        }
        img {
            @media(min-width: 768px) {
                width: 14.2rem;
            }
            width: 100%;
        }
    }
    dd {
        padding: 0;
        margin: 0;
        @media(min-width: 768px) {
            width: 45.8rem;
        }
        ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            padding: 0;
            margin: 0;
            li {
                :first-child {
                    @media(min-width: 768px) {
                        width: 22rem;
                    }
                }
                :nth-child(2) {
                    @media(min-width: 768px) {
                        width: 21.7rem;
                    }
                }
                img {
                    width: 100%;
                }
            }
        }
    }
`

export const CopyrightList = styled(List)`
    width: 100%;
    font-weight: 700;
    @media(min-width: 768px) {
        padding-bottom: 5rem;
    }
    .remaker-disclaim {
        margin: 5rem 0 0 0;
        p {
            text-align: center;
            color: #083b5a;
            font-size: 1.2rem;
            line-height: 1.66667;
            a {
                color: blue;
            }
        }
    }
`

export const PublisherLogo = styled(ListItem)`
    display: flex;
    justify-content: center;
    margin: 4.3rem auto;
    img {
        @media(min-width: 768px) {
            width: 10.9rem;
        }
    }
`

export const CopyrightNotes = styled(ListItem)`
    p {
        text-align: center;
        color: #083b5a;
        font-size: 1.2rem;
        line-height: 1.66667;
    }
`