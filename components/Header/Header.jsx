import { 
    ClosedSign,
    Header,
    HeaderCloseBtn,
    HeaderWrapper, 
    InnerHeader,
    Nav,
    StyledImage,
    StyledLink,
    StyledList,
    StyledListItem
} from "./Header.style";
import story from "../../assets/Menu/hed_story_off.png"
import storyOn from "../../assets/Menu/hed_story_on.png"
import mobileStory from "../../assets/Mobile/hed_story.png"
import leader from "../../assets/Menu/hed_leader_off.png"
import leaderOn from "../../assets/Menu/hed_leader_on.png"
import mobileLeader from "../../assets/Mobile/hed_leader.png"
import game from "../../assets/Menu/hed_game_off.png"
import gameOn from "../../assets/Menu/hed_game_on.png"
import mobileGame from "../../assets/Mobile/hed_game.png"
import end from "../../assets/Menu/hed_icon_end.png"
import closeBtn from "../../assets/Mobile/hed_btn_close.png"
import { LogoOnScroll } from "../Logo/Logo";
import { useMobileHeaderContext } from "../../context/MobileHeaderContext";
import useWindowSize from "../../hooks/useWindowSize";

const PageHeader = () => {
    const { isOpenHeader, setOpenHeader } = useMobileHeaderContext()
    const { width } = useWindowSize()
    console.log(width);
    return (
        <>
        { (isOpenHeader) &&
        <Header>
            <HeaderWrapper>
                <InnerHeader>
                    <Nav>
                        <HeaderCloseBtn onClick={() => setOpenHeader(false)}>
                            <StyledImage src={closeBtn.src} alt="閉じる" className="is-mb"></StyledImage>
                        </HeaderCloseBtn>
                        <StyledList>
                            <StyledListItem>
                                <StyledLink href={"/#story"}>
                                    <StyledImage src={story.src} alt="ストーリー"></StyledImage>
                                    <StyledImage src={storyOn.src} alt="ストーリー"></StyledImage>
                                    <StyledImage src={mobileStory.src} alt="ストーリー" className="is-mb"></StyledImage>
                                </StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink href={"/#leaders"}>
                                    <StyledImage src={leader.src} alt="リーダー"></StyledImage>
                                    <StyledImage src={leaderOn.src} alt="リーダー"></StyledImage>
                                    <StyledImage src={mobileLeader.src} alt="リーダー" className="is-mb"></StyledImage>
                                </StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink href={"/#game-system"}>
                                    <StyledImage src={game.src} alt="ゲームシステム"></StyledImage>
                                    <StyledImage src={gameOn.src} alt="ゲームシステム"></StyledImage>
                                    <StyledImage src={mobileGame.src} alt="ゲームシステム" className="is-mb"></StyledImage>
                                </StyledLink>
                            </StyledListItem>
                        </StyledList>
                    </Nav>
                    <ClosedSign>
                        <StyledImage src={end.src} alt="Closed"></StyledImage>
                    </ClosedSign>
                </InnerHeader>
            </HeaderWrapper>
            <LogoOnScroll></LogoOnScroll>
        </Header>
        }
        </>
    );
}
 
export default PageHeader;