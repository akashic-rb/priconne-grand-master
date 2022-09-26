import { 
    ClosedSign,
    Header,
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
import leader from "../../assets/Menu/hed_leader_off.png"
import leaderOn from "../../assets/Menu/hed_leader_on.png"
import game from "../../assets/Menu/hed_game_off.png"
import gameOn from "../../assets/Menu/hed_game_on.png"
import end from "../../assets/Menu/hed_icon_end.png"

const PageHeader = () => {
    return (
        <Header>
            <HeaderWrapper>
                <InnerHeader>
                    <Nav>
                        <StyledList>
                            <StyledListItem>
                                <StyledLink href={"/"}>
                                    <StyledImage src={story.src} alt="Not Found"></StyledImage>
                                    <StyledImage src={storyOn.src} alt="Not Found"></StyledImage>
                                </StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink href={"/"}>
                                    <StyledImage src={leader.src} alt="Not Found"></StyledImage>
                                    <StyledImage src={leaderOn.src} alt="Not Found"></StyledImage>
                                </StyledLink>
                            </StyledListItem>
                            <StyledListItem>
                                <StyledLink href={"/"}>
                                    <StyledImage src={game.src} alt="Not Found"></StyledImage>
                                    <StyledImage src={gameOn.src} alt="Not Found"></StyledImage>
                                </StyledLink>
                            </StyledListItem>
                        </StyledList>
                    </Nav>
                    <ClosedSign>
                        <StyledImage src={end.src} alt="Closed"></StyledImage>
                    </ClosedSign>
                </InnerHeader>
            </HeaderWrapper>
        </Header>
    );
}
 
export default PageHeader;