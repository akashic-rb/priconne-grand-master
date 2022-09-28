import styled from "styled-components"
import topBg from "../assets/kv.jpg"
import headline from "../assets/Story/story_bg_story.png"
import storyBg from "../assets/Story/story_bg.jpg"
import { List, ListItem } from "./global.style"

// TOP CONTENT
export const TopSection = styled.section`
    background-image: url(${topBg.src});
    background-size: cover;
    width: 100%;
    height: 57.78571vw;
    position: relative;
    .visible {
        display: block;
    }
    .hidden {
        display: none;
    }
`

export const BgMovie = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    position: relative;
    overflow: hidden;
    video {
        width: auto;
        height: 100%;
        object-fit: contain;
    }
`

export const ServiceInfo = styled.p`
    @media(min-width: 768px) {
        width: 30.8vw;
        position: absolute;
        bottom: 5.5vw;
        right: 1.65vw;
        margin: 0;
    }
    img {
        width: 100%
    }
`

export const StoreList = styled.dl`
    width: 30.8vw;
    position: absolute;
    bottom: 2.5vw;
    right: 1.65vw;
    padding: 0 1.21vw 0 1vw;
    display: flex;
    justify-content: space-between;
`

export const GameLogo = styled.dt`
    width: 10.21vw;
    cursor: pointer;
    img {
        width: 100%;
    }
    :hover {
        img {
            opacity: .5;
        }
    }
`

export const Stores = styled(List)`
    display: flex;
    justify-content: space-between;
    li {
        list-style-type: none;
    }
    .apple {
        width: 7.65vw;
        margin: 0 .57vw;
        cursor: pointer;
        img {
            width: 100%;
        }
        :hover {
            img {
                opacity: .5;
            }
        }
    }
    .google {
        width: 9.5vw;
        cursor: pointer;
        img {
            width: 100%;
        }
        :hover {
            opacity: .5;
        }
    }
`

export const MovieList = styled(List)`
    li {
        position: absolute;
    }
`

export const StyledListItem = styled(ListItem)`
    :first-child {
        width: 15vw;
        bottom: 6.78vw;
        left: 50%;
        translate: -50% 0;
        cursor: pointer;
        .change {
            position: relative;
            img {
                width: 100%;
                :fisrt-child {
                    opacity: 1;
                    transition: opacity .5s ease-in-out;
                }
                :nth-child(2) {
                    opacity: 0;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transition: opacity .5s ease-in-out;
                }
            }
            :hover {
                img {
                    :fisrt-child {
                        opacity: 0;
                        transition: opacity .5s ease-in-out;
                    }
                    :nth-child(2) {
                        opacity: 1;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        transition: opacity .5s ease-in-out;
                    }
                }
            }
        }
    }
    :nth-child(2) {
        width: 18vw;
        position: absolute;
        bottom: 2.42vw;
        left: 2.78vw;
        a {
            margin-top: 0.24vw;
            cursor: pointer;
            :hover {
                img {
                    opacity: .5;
                    transition: opacity .5s ease;
                }
            }
        }
        img {
            width: 100%;
            transition: opacity .5s ease;
        }
    }
`

// END TOP CONTENT

// STORY SECTION
export const StorySection = styled.section`
    width: 100%;
    max-width: 1400px;
    position: relative;
    background-image: url(${storyBg.src});
    background-size: cover;
    background-position: center;
    font-size: 0;
    @media (min-width: 768px) {
        height: 99.7rem;
    }
    :after {
        content: "";
        width: 100%;
        display: block;
        background-image: url(${headline.src});
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
    }
`

export const StoryInnerWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    position: relative;
    margin: 0 auto;
`

export const StoryContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    position: absolute;
    right: 5rem;
    .story-title {
        margin-left: 22.5rem; 
    }
    .text-1 {
        margin-left: 5rem;
    }
    .text-2 {
        margin-right: 2.5rem;
    }
    .text-3 {
        margin-right: 4.2rem;
    }
`

// END STORY SECTION

// LEADER SECTION
export const LeaderSection = styled.section`
    width: 100%;
    @media(min-width: 768px) {
        height: 100vh;
    }
`
// END LEADER SECTION