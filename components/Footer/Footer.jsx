/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { 
    AboutApp,
    AppDetails,
    BannerList,
    Footer, 
    InnerWrapper,
    StyledList,
    StyledListItem
} from "./Footer.style";
import appIcon from "../../assets/Footer/app_icon.png"
import appTextPc from "../../assets/Footer/app_text_pc.png"
import fotLogo from "../../assets/Footer/fot_logo.png"
import fotBanner1 from "../../assets/Footer/fot_banner_1.png"
import fotBanner2 from "../../assets/Footer/fot_banner_2.png"

const PageFooter = () => {

    return (
        <Footer>
            <AboutApp>
                <InnerWrapper>
                    <figure>
                        <img src={appIcon.src} decoding="async" loading="lazy" alt=""/>
                    </figure>
                    <AppDetails>
                        <p>
                            <picture>
                                <source srcSet={appTextPc.src}/>
                                <img src={appTextPc.src} alt="4月8日16：59で公開は終了しました！" decoding="async" loading="lazy"/>
                            </picture>
                        </p>
                        <div className="app-column">
                            <StyledList>
                                <StyledListItem>
                                    <p>名称：プリコネ！グランドマスターズ　<br className="is-mb"/>ジャンル：ストラテジー</p>
                                    <p>対応機種：iOS/Android　<br className="is-mb"/>価格：無料</p>
                                </StyledListItem>
                            </StyledList>
                        </div>
                    </AppDetails>
                </InnerWrapper>
            </AboutApp>
            <StyledList className="menu-list">
                <StyledListItem>
                    <Link href={"/"}>
                        <a>
                            <p>このサイトについて</p>
                        </a>
                    </Link>
                </StyledListItem>
                <StyledListItem>
                    <Link href={"/"}>
                        <a>
                            <p>プライバシーポリシー</p>
                        </a>
                    </Link>
                </StyledListItem>
                <StyledListItem>
                    <Link href={"/"}>
                        <a>
                            <p>利用規約</p>
                        </a>
                    </Link>
                </StyledListItem>
                <StyledListItem>
                    <Link href={"/"}>
                        <a>
                            <p>推奨端末一覧</p>
                        </a>
                    </Link>
                </StyledListItem>
            </StyledList>
            <BannerList>
                <dt>
                    <img src={fotLogo.src} alt="princess connect redive" />
                </dt>
                <dd>
                    <ul>
                        <li>
                            <img src={fotBanner1.src} alt="Official Priconne site" />
                        </li>
                        <li>
                            <img src={fotBanner2.src} alt="Princess Connect redive official anime tv" />
                        </li>
                    </ul>
                </dd>
            </BannerList>
        </Footer>
    );
}
 
export default PageFooter;