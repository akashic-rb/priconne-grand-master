/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
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
  StoryContent,
  LeaderSection,
  GameSystemSection,
  GameTitle,
  SystemList,
  SystemItem,
  GoodsSection,
  InnerWrapper,
  StoryInnerWrapper,
  GoodsContentWrapper,
  GoodsTitle,
  GoodsText,
  KkrText,
  Texts,
  GoodsLeftContent,
  GoodsInnerWrapper,
  Wrapper
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
import gameTitle from "../assets/GameSystem/game_title.png"
import gameBtn1Off from "../assets/GameSystem/game_btn_1_off.png"
import gameBtn1On from "../assets/GameSystem/game_btn_1_on.png"
import gameBtn2Off from "../assets/GameSystem/game_btn_2_off.png"
import gameBtn2On from "../assets/GameSystem/game_btn_2_on.png"
import gameBtn3Off from "../assets/GameSystem/game_btn_3_off.png"
import gameBtn3On from "../assets/GameSystem/game_btn_3_on.png"
import gameBtn4Off from "../assets/GameSystem/game_btn_4_off.png"
import gameBtn4On from "../assets/GameSystem/game_btn_4_on.png"
import goodsTitle from "../assets/Goods/goods_title.png"
import goodsText from "../assets/Goods/goods_text.png"
import goodsKokkoro from "../assets/Goods/goods_kokkoro.png"
import goods1 from "../assets/Goods/goods_1_off.png"
import goods2 from "../assets/Goods/goods_2_off.png"
import goods3 from "../assets/Goods/goods_3_off.png"

export default function Home() {
  const refVideo = useRef()
  const playBtn = useRef()
  const { hideVideo, playVideo } = useAutoplayVideo(refVideo, playBtn)

  return (
    <Wrapper>
      <Head>
        <title>プリコネ！グランドマスターズ公式サイト | プリンセスコネクト！Re:Dive (プリコネR) | Cygames</title>
        <meta name="description" content="プリコネ！グランドマスターズ 完全無料アプリ！期間限定で公開！" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TopSection id="top">
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
      <LeaderSection id="leaders">
        <Carousel></Carousel>
      </LeaderSection>

      {/* Game System Section */}
      <GameSystemSection id="game-system">
        <div className="bg"></div>
        <InnerWrapper>
          <FadeInComponent>
            <GameTitle>
              <picture>
                <source srcSet={gameTitle.src}/>
                <img src={gameTitle.src} alt="ゲームシステム" />
              </picture>
            </GameTitle>
          </FadeInComponent>

          <SystemList>
            <SystemItem>
              <FadeInComponent>
                <Link href={"/"}>
                  <a>
                    <img src={gameBtn1Off.src} alt="ゲームルール 基本的な遊び方 開始から終了までの流れ" />
                    <img src={gameBtn1On.src} alt="ゲームルール 基本的な遊び方 開始から終了までの流れ" />
                  </a>
                </Link>
              </FadeInComponent>
            </SystemItem>
            <SystemItem>
              <FadeInComponent>
                <Link href={"/"}>
                  <a>
                    <img src={gameBtn2Off.src} alt="シナジーについて ユニットを揃えることで発動するシナジー効果" />
                    <img src={gameBtn2On.src} alt="シナジーについて ユニットを揃えることで発動するシナジー効果" />
                  </a>
                </Link>
              </FadeInComponent>
            </SystemItem>
            <SystemItem>
              <FadeInComponent>
                <Link href={"/"}>
                  <a>
                    <img src={gameBtn3Off.src} alt="装備一覧 モンスター討伐で入手できる装備の一覧、その効果" />
                    <img src={gameBtn3On.src} alt="装備一覧 モンスター討伐で入手できる装備の一覧、その効果" />
                  </a>
                </Link>
              </FadeInComponent>
            </SystemItem>
            <SystemItem>
              <FadeInComponent>
                <Link href={"/"}>
                  <a>
                    <img src={gameBtn4Off.src} alt="ヘルプ 用語の説明など詳細はこちら" />
                    <img src={gameBtn4On.src} alt="ヘルプ 用語の説明など詳細はこちら" />
                  </a>
                </Link>
              </FadeInComponent>
            </SystemItem>
          </SystemList>
        </InnerWrapper>
      </GameSystemSection>
      
      {/* Goods Section */}
      <GoodsSection id="goods">
        <GoodsInnerWrapper>
          <GoodsContentWrapper>
            <GoodsLeftContent>
              <FadeInComponent>
                <GoodsTitle>
                  <picture>
                    <source srcSet={goodsTitle.src}/>
                    <img src={goodsTitle.src} alt="グッズ" />
                  </picture>
                </GoodsTitle>
              </FadeInComponent>
              <FadeInComponent>
                <GoodsText>
                  <picture>
                    <source srcSet={goodsText.src}/>
                    <img src={goodsText.src} alt="おしゃべりチエルちゃん、猛訓打撃道！プリコネR野球盤、エリザベスパークの特大顔出しパネルがプリコネ！グランドマスターズにも登場！ゲーム内のどこにいるか探してみてね！" />
                  </picture>
                </GoodsText>
              </FadeInComponent>
              <FadeInComponent>
                <KkrText>
                  <picture>
                    <source srcSet={goodsKokkoro.src}/>
                    <img src={goodsKokkoro.src} alt="販売は終了しました！" />
                  </picture>
                </KkrText>
              </FadeInComponent>
            </GoodsLeftContent>
            <Texts>
              <FadeInComponent>
                <p>
                  <picture>
                    <source srcSet={goods1.src}/>
                    <img src={goods1.src} alt="おしゃべりチエルちゃん 新規で録り下ろされた音声内蔵のぬいぐるみ！" />
                  </picture>
                </p>
              </FadeInComponent>
              <FadeInComponent>
                <p>
                  <picture>
                    <source srcSet={goods2.src}/>
                    <img src={goods2.src} alt="猛訓打撃道！プリコネR野球盤 エポック社の全面協力により、あの野球盤がプリコネバージョンに！" />
                  </picture>
                </p>
              </FadeInComponent>
              <FadeInComponent>
                <p>
                  <picture>
                    <source srcSet={goods3.src}/>
                    <img src={goods3.src} alt="エリザベスパークの特大顔出しパネル エリザベスパークに設置されていた顔出しパネルを実寸で商品化！" />
                  </picture>
                </p>
              </FadeInComponent>
            </Texts>
          </GoodsContentWrapper>
        </GoodsInnerWrapper>
      </GoodsSection>
    </Wrapper>
  )
}
