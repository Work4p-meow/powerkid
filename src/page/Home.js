import NavbarHome from "../component/NavbarHome";
import styled from "styled-components";

const Header = styled.div`
    font-family: 'Prompt';
`
const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    justify-content: center;
`
const BannerBg = styled.div`
    height: 760px;
    background-size: cover;
    overflow: hidden;
` 
const BannerCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
`

const MiddleCon = styled.div`
    margin-bottom:10% ;
`
const GreyBg = styled.div`
    background-color: #E8E8E8;
`
const BannerText = styled.div`
    margin-top: 100px;
    color: #fff;
    text-align: center;
    z-index: 2;

    @media screen and (max-width: 480px) {
        padding: 0 2rem;
        text-size-adjust: inherit;
    }

`

const MiddleText = styled.div`
    text-align: center;
    font-family: 'Prompt';
    h1{
        color: #2B39AF;
        top: 10vh;
    }
    margin-top: 10vh;
    margin-left:10%;
    margin-right: 10%;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 0 2rem;
        text-size-adjust: inherit;
    }

`
const BannerBtn = styled.a`
    background: #2B39AF;
    display: inline-block;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        /* border: 2px solid #fff; */
        background: #E85137;
        color: #fff;
}
`
const Row = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`

const VideoBg = styled.video`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    /* width: 100%; */
    height: inherit;
    background-size: cover;
    overflow: hidden;
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        background-color: #000;
    }
`

const ContentCon = styled.section`
    display: flex;
    justify-content: space-between;
    &:first-child{
        padding: 5rem 0;
    }
    &:last-child{
        padding: 5rem 0;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
    &:nth-child(2) {
        order: 1;
    }
  }
`

const ContentL = styled.div`
padding: 2rem ;
align-items: center;
justify-content: center;
text-align: center;
width: 85%;
    h1, h2{
        font-family: 'Prompt';
    }
img{
    width: 90%;
    border-radius: 10px;
}
`

const ContentR = styled.div`
    padding: 2rem ;
    text-align: center;
    justify-content: center;
    width: 85%;
    font-family: 'bai jamjuree';
    h1, h2{
        font-family: 'Prompt';
    }
    img{
    width: 90%;
    border-radius: 10px;
}
`
const Power = styled.h2`
    color: #2B39AF;
`
const Kid = styled.h2`
    color: #F48C06;
`
const Discript = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-family: 'Bai Jamjuree';
`
const TrialBtn = styled.a`
    font-family: 'Prompt';
    background: #E85137;
    display: inline-block;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        /* border: 2px solid #fff; */
        background: #2B39AF;
        color: #fff;
}
`
const ImgRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 15%;
        margin: 3vh;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        img{
            max-width: 50%;
        }
    }
`

const CourseCardRow = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            border: 2px solid #fff;
        }
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        img{
            max-width: 100%;
            border-radius: 10px;
        cursor: pointer;
        &:hover {
            border: 2px solid #fff;
        }
        }
    }
`

const CourseCard = styled.a`
    margin: 1vh;
`

let bannerData = {
    title1: "????????????????????????????????????????????????????????????????????????????????????????????????????????????",
    title2: "???????????????????????????????????????????????????????????? ????????????????????????????????? PowerKid",
}
function Home(){
    return(
        <div>
        <NavbarHome />
            <Header>
                <BannerBg>
                <VideoBg autoPlay="autoplay" loop="loop" muted>
                                <source src="/assets/production ID_4709300.mp4" type="video/mp4" />
                </VideoBg>
                <Container>
                    <BannerCon>
                        <BannerText>
                            <h1>{bannerData.title1}</h1>
                            <h1>{bannerData.title2}</h1>
                            <Row>
                                <BannerBtn href="/TechCourse">???????????????????????????????????????????????????</BannerBtn>
                                <BannerBtn href="/FinanceCourse">????????????????????????????????????????????????</BannerBtn>
                                <BannerBtn href="/EnterpCourse">?????????????????????????????????????????????????????????????????????????????????</BannerBtn>
                            </Row>
                        </BannerText>
                    </BannerCon>
                </Container>
                </BannerBg>
            </Header>
            <Container>
                <MiddleCon>
                    <MiddleText>
                                <Row>
                                    <Power>Power</Power><Kid>Kid</Kid><h2> ?????????????????????</h2>
                                </Row>
                                    <Discript>
    ?????????????????????????????????????????????????????????????????????????????????????????? 21 ???????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????? "?????????????????????????????????????????????"
    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  ?????????????????????????????????????????? Powerkid ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    ??????????????? (?????????????????????)??????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????? 8 -15 ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                    </Discript>
                    </MiddleText>
                </MiddleCon>
            </Container>
                <GreyBg>
                    <Container>
                        <ContentCon>
                            <ContentR>
                                <Row>
                                    <Power>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</Power>
                                </Row>
                            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    ????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
    ???????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    ??????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????
    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
    ?????????????????? ??????????????????????????? ,??????????????????????????????????????????????????????
    ??????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????
                            </ContentR>
                            <ContentL>
                                <img src="/assets/??????????????????????????????????????????????????????????????? (8).png" alt=""/>
                            </ContentL>
                        </ContentCon>
                    </Container>
                </GreyBg>
                <Container>
                <MiddleCon>
                    <MiddleText>
                                <Row>
                                    <h2>??????????????????????????????????????????<br />Our course</h2>
                                </Row>
                                <CourseCardRow>
                                    <CourseCard href="/TechCourse">
                                    <img src="/assets/??????????????????????????? ????????????/1.png" />
                                    </CourseCard>
                                    <CourseCard href="/TechCourse">
                                    <img src="/assets/??????????????????????????? ????????????/2.png" />
                                    </CourseCard>
                                    <CourseCard href="/TechCourse">
                                    <img src="/assets/??????????????????????????? ????????????/3.png" />
                                    </CourseCard>
                                    {/* <CourseCard href="/FinanceCourse">
                                        <img src="/assets/??????????????????????????? ????????????/2.png" />
                                    </CourseCard>
                                    <CourseCard href="/EnterpCourse">
                                        <img src="/assets/??????????????????????????? ????????????/3.png" />
                                    </CourseCard> */}
                                </CourseCardRow>
                    </MiddleText>
                </MiddleCon>
                <MiddleCon>
                    <MiddleText>
                                <Row>
                                    <h2>????????????????????????</h2><Power>Power</Power><Kid>Kid</Kid>
                                </Row>
                                    <Discript>
                                        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? PowerKid
                                    </Discript>
                    </MiddleText>
                </MiddleCon>
                <ContentCon>
                    <ContentR>
                                    <Power>???????????????????????????????????????????????????????????????</Power><Kid>??????????????????????????????????????????</Kid><Power>????????????3????????????</Power>
                        <p>
                        ???????????????????????????????????? ??????????????????????????? 3 ???????????? ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????? ???????????? ??????????????????????????? 
?????????????????? Start Up ??????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????? framework ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
?????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Start Up ?????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????
                        </p>
                    </ContentR>
                    <ContentL>
                        <img src="/assets/1.png" alt=""/>
                    </ContentL>
                </ContentCon>
                <ContentCon>
                    <ContentL>
                        <img src="/assets/Group 3.png" alt=""/>
                    </ContentL>
                    <ContentR>
                            <Row>
                                <Power>??????????????????</Power><Kid>????????????????????????????????????</Kid>
                            </Row>
                        <p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
 ?????????????????????????????????????????????????????????????????????????????? passion ?????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????????????????????????????????????????????????? </p>
                    </ContentR>
                </ContentCon>
                <ContentCon>
                    <ContentL>
                        <img src="/assets/Group 4.png" alt=""/>
                    </ContentL>
                    <ContentR>
                            <Row>
                                <Power>???????????????????????????</Power><Kid>????????????????????????????????????</Kid>
                            </Row>
                        <p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
???????????? ??? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? </p>
                    </ContentR>
                </ContentCon>
                <ContentCon>
                    <ContentR>
                                    <Kid>Learning By Doing</Kid><Power>???????????????????????????????????????????????????????????????????????????</Power>
                        <p>
                        ????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????
??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??? ???????????????
?????????????????????????????????????????????????????????????????????????????? Project ???????????? Project Based Learning
                        </p>
                    </ContentR>
                    <ContentL>
                        <img src="/assets/??????????????????????????????????????????????????????????????? (11).png" alt=""/>
                    </ContentL>
                </ContentCon>
                <ContentCon>
                    <ContentL>
                        <img src="/assets/??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????! (2).png" className="width:30%" alt="" />
                    </ContentL>
                    <ContentR>
                            <Power>??????????????????????????????????????????????????????????????????</Power><Kid>?????????????????????????????????(?????????????????????) ??????????????????????????????????????????????????????????????????</Kid>
                              <p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ??? ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? </p>
                    </ContentR>
                </ContentCon>
        <MiddleText>
                    <TrialBtn href="/Trial">???????????????????????????????????????</TrialBtn>
                </MiddleText>
        <ContentCon>
                    <ContentL>
                        <img src="/assets/5224588.jpg" alt="" />
                    </ContentL>
                    <ContentR>
                            <h1>????????????????????????????????????????????????????????????????????????????</h1>
                            <BannerBtn>??????????????????????????????</BannerBtn>
                            <p>(?????????????????????????????????????????????) </p>
                    </ContentR>
                </ContentCon>
                <MiddleCon>
                    <MiddleText>
                                <Row>
                                    <h2>?????????????????????????????????????????????????????????????????????????????????</h2>
                                </Row>
                                <ImgRow>
                                    <img src="/assets/???????????????????????????????????????/62b396b6-6c71-4e0f-b8d9-4ae528ef3cc0..jpg" />
                                    <img src="/assets/???????????????????????????????????????/depa-logo.png" />
                                    <img src="/assets/???????????????????????????????????????/Emblem_of_the_Ministry_of_Digital_Economy_and_Society_of_Thailand.png" />
                                    <img src="/assets/???????????????????????????????????????/kris-logo.png" />
                                    <img src="/assets/???????????????????????????????????????/LOGO_NIA.jpeg" />
                                    <img src="/assets/???????????????????????????????????????/StartupThailand logo????????????.png" />
                                    <img src="/assets/???????????????????????????????????????/sysi.jpeg" />
                                    <img src="/assets/???????????????????????????????????????/?????????.png" />
                                </ImgRow>
                    </MiddleText>
                </MiddleCon>
        </Container>

        </div>
    )
}

export default Home;