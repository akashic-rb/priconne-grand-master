import styled from "styled-components";

export const Wrapper = styled.h1`
    transition: opacity 0;
    @media (min-width: 768px) {
        position: absolute;
        width: 30rem;
        top: 0;
        left: 0;
        margin: 0;
    }
    @media(max-width: 767px) {
        width: 50rem;
        margin: 0;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const StyledImage = styled.img`
    width: 100%;
`

export const ScrollLogoWrapper = styled.div`
    display: none;
    @media(min-width: 768px) {
        display: block;
    }
    .fadeIn {
        transition: all .3s ease;
        animation: fadeIn .3s;
        opacity: 1;
    }
    .fadeOut {
        transition: all .3s ease;
        animation: fadeOut .3s;
        opacity: 0;
    }
    @keyframes fadeIn {
        0% {
            transform: translateY(2rem);
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes fadeOut {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(2rem);
        }
    }
`