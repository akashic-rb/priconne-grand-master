import { useEffect, useMemo, useState } from "react";
import { 
    CarouselItem,
    CarouselWrapper, 
    ContentWrapper, 
    LeaderBg, 
    LeaderStats, 
    LeaderTitle, 
    NextBtn, 
    PagiItem, 
    Paginator, 
    PrevBtn
} from "./Carousel.style";
import leaderTitle from "../../assets/Leader/leader_title.png"
import mbLeaderTitle from "../../assets/Mobile/leader_title.png"
import chara01 from "../../assets/Leader/chara_01.png"
import mbChara01 from "../../assets/Mobile/chara_01.png"
import mbBg01 from "../../assets/Mobile/chara_bg_01.jpg"
import leaderIcon01Off from "../../assets/Leader/leader_icon_01_off.png"
import leaderIcon01On from "../../assets/Leader/leader_icon_01_on.png"
import chara02 from "../../assets/Leader/chara_02.png"
import mbChara02 from "../../assets/Mobile/chara_02.png"
import mbBg02 from "../../assets/Mobile/chara_bg_02.jpg"
import leaderIcon02Off from "../../assets/Leader/leader_icon_02_off.png"
import leaderIcon02On from "../../assets/Leader/leader_icon_02_on.png"
import chara03 from "../../assets/Leader/chara_03.png"
import mbChara03 from "../../assets/Mobile/chara_03.png"
import mbBg03 from "../../assets/Mobile/chara_bg_03.jpg"
import leaderIcon03Off from "../../assets/Leader/leader_icon_03_off.png"
import leaderIcon03On from "../../assets/Leader/leader_icon_03_on.png"
import chara04 from "../../assets/Leader/chara_04.png"
import mbChara04 from "../../assets/Mobile/chara_04.png"
import mbBg04 from "../../assets/Mobile/chara_bg_04.jpg"
import leaderIcon04Off from "../../assets/Leader/leader_icon_04_off.png"
import leaderIcon04On from "../../assets/Leader/leader_icon_04_on.png"
import chara05 from "../../assets/Leader/chara_05.png"
import mbChara05 from "../../assets/Mobile/chara_05.png"
import mbBg05 from "../../assets/Mobile/chara_bg_05.jpg"
import leaderIcon05Off from "../../assets/Leader/leader_icon_05_off.png"
import leaderIcon05On from "../../assets/Leader/leader_icon_05_on.png"
import chara06 from "../../assets/Leader/chara_06.png"
import mbChara06 from "../../assets/Mobile/chara_06.png"
import mbBg06 from "../../assets/Mobile/chara_bg_06.jpg"
import leaderIcon06Off from "../../assets/Leader/leader_icon_06_off.png"
import leaderIcon06On from "../../assets/Leader/leader_icon_06_on.png"


const Carousel = () => {
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
            },
            mobile: {
                stats: mbChara01.src,
                background: mbBg01.src
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
            },
            mobile: {
                stats: mbChara02.src,
                background: mbBg02.src
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
            },
            mobile: {
                stats: mbChara03.src,
                background: mbBg03.src
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
            },
            mobile: {
                stats: mbChara04.src,
                background: mbBg04.src
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
            },
            mobile: {
                stats: mbChara05.src,
                background: mbBg05.src
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
            },
            mobile: {
                stats: mbChara06.src,
                background: mbBg06.src
            }
        }
    ], [])
    
    return (
        <CarouselWrapper>
            {/* Title */}
            <LeaderTitle>
                <picture>
                    <source media="(max-width: 767px)" srcSet={mbLeaderTitle.src}/>
                    <img src={leaderTitle.src} alt="リーダー"/>
                </picture>
            </LeaderTitle>

            {/* Controllers */}
            <NextBtn></NextBtn>
            <PrevBtn></PrevBtn>

            {/* Content */}
            <ContentWrapper>
                <CarouselItem>
                    <LeaderBg>
                        <picture>
                            <source media="(max-width: 767px)" srcSet={mbBg01.src}/>
                            <img src={mbBg01.src} alt="" />
                        </picture>
                    </LeaderBg>
                    <LeaderStats>
                        <picture>
                            <img src={mbChara01.src} alt="" />
                        </picture>
                    </LeaderStats>
                </CarouselItem>
            </ContentWrapper>

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