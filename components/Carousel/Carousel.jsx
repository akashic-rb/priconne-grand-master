import { 
    CarouselWrapper, 
    LeaderTitle, 
    NextBtn, 
    PagiItem, 
    Paginator, 
    PrevBtn
} from "./Carousel.style";
import leaderTitle from "../../assets/Leader/leader_title.png"
import chara01 from "../../assets/Leader/chara_01.png"
import leaderIcon01Off from "../../assets/Leader/leader_icon_01_off.png"
import leaderIcon01On from "../../assets/Leader/leader_icon_01_on.png"
import chara02 from "../../assets/Leader/chara_02.png"
import leaderIcon02Off from "../../assets/Leader/leader_icon_02_off.png"
import leaderIcon02On from "../../assets/Leader/leader_icon_02_on.png"
import chara03 from "../../assets/Leader/chara_03.png"
import leaderIcon03Off from "../../assets/Leader/leader_icon_03_off.png"
import leaderIcon03On from "../../assets/Leader/leader_icon_03_on.png"
import chara04 from "../../assets/Leader/chara_04.png"
import leaderIcon04Off from "../../assets/Leader/leader_icon_04_off.png"
import leaderIcon04On from "../../assets/Leader/leader_icon_04_on.png"
import chara05 from "../../assets/Leader/chara_05.png"
import leaderIcon05Off from "../../assets/Leader/leader_icon_05_off.png"
import leaderIcon05On from "../../assets/Leader/leader_icon_05_on.png"
import chara06 from "../../assets/Leader/chara_06.png"
import leaderIcon06Off from "../../assets/Leader/leader_icon_06_off.png"
import leaderIcon06On from "../../assets/Leader/leader_icon_06_on.png"
import { useEffect, useMemo, useState } from "react";


const Carousel = ({ infiniteLoop, show }) => {
    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
    const leaders = useMemo(() => [
        {
            stats: chara01.src,
            icon: {
                on: leaderIcon01On.src,
                off: leaderIcon01Off.src,
            },
            videos: {
                webm: "./videos/Leaders/leader1.webm",
                mp4: "./videos/Leaders/leader1.mp4",
            }
        },
        {
            stats: chara02.src,
            icon: {
                on: leaderIcon02On.src,
                off: leaderIcon02Off.src,
            },
            videos: {
                webm: "./videos/Leaders/leader2.webm",
                mp4: "./videos/Leaders/leader2.mp4",
            }
        },
        {
            stats: chara03.src,
            icon: {
                on: leaderIcon03On.src,
                off: leaderIcon03Off.src,
            },
            videos: {
                webm: "./videos/Leaders/leader3.webm",
                mp4: "./videos/Leaders/leader3.mp4",
            }
        },
        {
            stats: chara04.src,
            icon: {
                on: leaderIcon04On.src,
                off: leaderIcon04Off.src,
            },
            videos: {
                webm: "./videos/Leaders/leader4.webm",
                mp4: "./videos/Leaders/leader4.mp4",
            }
        },
        {
            stats: chara05.src,
            icon: {
                on: leaderIcon05On.src,
                off: leaderIcon05Off.src,
            },
            videos: {
                webm: "./videos/Leaders/leader5.webm",
                mp4: "./videos/Leaders/leader5.mp4",
            }
        },
        {
            stats: chara06.src,
            icon: {
                on: leaderIcon06On.src,
                off: leaderIcon06Off.src,
            },
            videos: {
                webm: "./videos/Leaders/leader6.webm",
                mp4: "./videos/Leaders/leader6.mp4",
            }
        }
    ], [])
    const [length, setLength] = useState(leaders.length)
    
    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const [touchPosition, setTouchPosition] = useState(null)
    

    // Set the length to match current children from props
    useEffect(() => {
        setLength(leaders.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [leaders, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    return (
        <CarouselWrapper>
            {/* Title */}
            <LeaderTitle>
                <picture>
                    <source srcSet={leaderTitle.src}/>
                    <img src={leaderTitle.src} alt="リーダー"/>
                </picture>
            </LeaderTitle>

            {/* Controllers */}
            <NextBtn></NextBtn>
            <PrevBtn></PrevBtn>

            {/* Content */}
            <div
                className="carousel-content-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div
                    className={`carousel-content show-${show}`}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / show)}%)`,
                        transition: !transitionEnabled ? 'none' : undefined,
                    }}
                    onTransitionEnd={() => handleTransitionEnd()}
                >
                    {
                        (length > show && isRepeating) &&
                        renderExtraPrev()
                    }
                    {}
                    {
                        (length > show && isRepeating) &&
                        renderExtraNext()
                    }
                </div>
            </div>
            {/* Paginator */}
            <Paginator>
                { leaders.map((leader, index) => 
                    <PagiItem key={index} imgOn={leader.icon.on} imgOff={leader.icon.off}>
                        <span ></span>
                    </PagiItem>
                )}
            </Paginator>
        </CarouselWrapper>
    );
}
 
export default Carousel;