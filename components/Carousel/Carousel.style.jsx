import styled from "styled-components";
import { NextSvg, PrevSvg } from "../../components/Icon/Icon"

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const LeaderTitle = styled.h2`
    width: 33.1rem;
    position: absolute;
    top: 21.8rem;
    right: 6.8rem;
    z-index: 1000;
    margin: 0;
    img {
        width: 32.2rem;
    }
    @media(min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        top: 5.10714vw;
        right: 0;
        left: 0;
    }
`

const ControllerBtn = styled.div`
    width: 5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    :hover {
        opacity: .7;
    }
`

export const NextBtn = styled(ControllerBtn)`
    background-image: url(${NextSvg});
    right: 0;
    display: relative;
    z-index: 999;
`

export const PrevBtn = styled(ControllerBtn)`
    background-image: url(${PrevSvg});
    left: 0;
    display: relative;
    z-index: 999;
`

export const Paginator = styled.div`
    width: 100%;
    height: 10.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    bottom: 8rem;
    left: 0;
    right: 0;
    @media(min-width: 768px) {
        bottom: 2.5vw;
    }
`

export const PagiItem = styled.div`
    width: 10.5rem;
    height: 10.5rem;
    position: relative;
    cursor: pointer;
    span {
        background-image: url(${(attr) => attr.imgOff});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        :after {
            content: '';
            opacity: 0;
            background-image: url(${(attr) => attr.imgOn});
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            width: 100%;
            height: 100%;
            transition: opacity .5s ease;
        }
    }
    :hover span:after {
        opacity: 1;
        transition: opacity .5s ease;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

// Content
export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const CarouselItem = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const LeaderBg = styled.div`
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    img {
        width: 100%;
    }
`

export const LeaderStats = styled.div`
    width: 71.1rem; 
    position: absolute;
    top: 35.5rem;
    right: 0;
    img {
        width: 100%;
    }
    @media(min-width: 768px) {
        font-size: 0;
        width: 50.64286vw;
        top: 3.67857vw;
        right: 1.64286vw;
        transform: translateZ(0);
    }
`

