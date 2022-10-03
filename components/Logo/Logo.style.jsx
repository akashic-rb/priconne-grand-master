import styled from "styled-components";

export const Wrapper = styled.h1`
    transition: opacity 0;
    @media (min-width: 768px) {
        width: 23.1rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
    }
`

export const StyledImage = styled.img`
    width: 100%;
`

export const ScrollLogoWrapper = styled.div`
    .fadeIn {
        transition: all .3s ease;
        animation: fadeIn .3s;
    }
    .fadeOut {
        transition: all .3s ease;
        animation: fadeOut .3s;
    }
    @keyframes fadeIn {
        0% {
            transform: translateY(0);

        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(2rem);
            opacity: 0;
        }
    }
`