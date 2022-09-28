/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import { 
  GameLogo, 
  ServiceInfo, 
  StoreList,
  Stores, 
  MovieList,
  StyledListItem, 
  TopSection, 
  BgMovie,
  StorySection,
  StoryInnerWrapper,
  StoryContent,
  LeaderSection
} from '../styles/index.style'
import serviceInfo from "../assets/badge_top_text_end.png"
import gameLogo from "../assets/fot_logo.png"
import appStore from "../assets/badge_app.png"
import googlePlay from "../assets/badge_google.png"
import btnPlayOff from "../assets/btn_play_kv_off.png"
import btnPlayOn from "../assets/btn_play_kv_on.png"
import gameplayText from "../assets/gameplay_text.jpg"
import movieThumb from "../assets/movie_thumb.png"
import useAutoplayVideo from '../hooks/useAutoplayVideo'
import storyTitle from "../assets/Story/story_title.png"
import text1 from "../assets/Story/story_text_01.png"
import text2 from "../assets/Story/story_text_02.png"
import text3 from "../assets/Story/story_text_03.png"
import FadeInComponent from '../components/FadeInComponent/FadeInComponent'
import Carousel from '../components/Carousel/Carousel'


export default function Home() {
  const refVideo = useRef()
  const playBtn = useRef()
  const { hideVideo, playVideo } = useAutoplayVideo(refVideo, playBtn)

  return (
    <div>
      <Head>
        <title>プリコネ！グランドマスターズ公式サイト | プリンセスコネクト！Re:Dive (プリコネR) | Cygames</title>
        <meta name="description" content="プリコネ！グランドマスターズ 完全無料アプリ！期間限定で公開！" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TopSection id="top">
        <Logo></Logo>
        {/* Bg Movie */}
        <BgMovie>
          <video ref={refVideo} onEnded={hideVideo} muted playsInline>
            <source src={"/videos/top_movie.mp4"}/>
          </video>
        </BgMovie>
        {/* Service info */}
        <ServiceInfo>
          <img src={serviceInfo.src} alt="公開期間が終了しました プレイしていただき誠にありがとうございました 引き続きプリンセスコネクト！Re:Diveをよろしくお願いします" />
        </ServiceInfo>
        <StoreList>
          <GameLogo>
            <img src={gameLogo.src} alt="" />
          </GameLogo>
          <Stores>
            <li className="apple">
              <img src={appStore.src} alt="App Storeからダウンロード" />
            </li>
            <li className="google">
              <img src={googlePlay.src} alt="Gogle Playで手に入れよう" />
            </li>
          </Stores>
        </StoreList>
        <MovieList>
          <StyledListItem className="movie1">
            <a ref={playBtn} className="change" onClick={playVideo}>
              <img src={btnPlayOff.src} alt="Play" />
              <img src={btnPlayOn.src} alt="Play" />
            </a>
          </StyledListItem>
          <StyledListItem className="movie2">
            <img src={gameplayText.src} alt="ゲームプレイPV"/>
            <a>
              <img src={movieThumb.src} alt="ゲームプレイ" />
            </a>
          </StyledListItem>
        </MovieList>
      </TopSection>
      {/* Story Section */}
      <StorySection id="story">
        <StoryInnerWrapper>
          <StoryContent>
            <FadeInComponent>
              <h2 className="story-title">
                <picture>
                  <source srcSet={storyTitle.src}/>
                  <img src={storyTitle.src} alt="Story" />
                </picture>
              </h2>
            </FadeInComponent>
            <FadeInComponent>
              <p className="text-1">
                <picture>
                  <source srcSet={text1.src}/>
                  <img src={text1.src} alt="美しき大地アストライア大陸の王都『ランドソル』……ギルド【美食殿】のメンバーとして暮らしていたあなたがある時目を覚ましたのは、はじめて見る建物の中だった。" />
                </picture>
              </p>
            </FadeInComponent>
            <FadeInComponent>
              <p className="text-2">
                <picture>
                  <source srcSet={text2.src}/>
                  <img src={text2.src} alt="先に気がついていた小さなガイド役の少女同じギルドの仲間でもあるコッコロとともにあなたは元いた世界へ戻る方法と、仲間たちを探そうと決意する。"/>
                </picture>
              </p>
            </FadeInComponent>
            <FadeInComponent>
              <p className="text-3">
                <picture>
                  <source srcSet={text3.src}/>
                  <img src={text3.src} alt="本来の戦い方が通用しない不思議な世界を巡りながらあなたは記憶をなくした仲間たちを見つけ出していく。仲間たちの記憶を取り戻すには、「バトル」が鍵となるようで……？"/>
                </picture>
              </p>
            </FadeInComponent>
          </StoryContent>
        </StoryInnerWrapper>
      </StorySection>

      {/* Leader Section */}
      <LeaderSection>
        <Carousel></Carousel>
      </LeaderSection>
    </div>
  )
}
