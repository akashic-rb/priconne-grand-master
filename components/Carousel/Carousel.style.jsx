import styled from "styled-components";
import { NextSvg, PrevSvg } from "../../components/Icon/Icon"

export const CarouselWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const LeaderTitle = styled.h2`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 3.2rem;
    left: 0;
    right: 0;
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
`

export const PrevBtn = styled(ControllerBtn)`
    background-image: url(${PrevSvg});
    left: 0;
`

export const Paginator = styled.div`
    width: 100%;
    height: 10.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
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