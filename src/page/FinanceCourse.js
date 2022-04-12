import Navbar from "../component/Navbar"
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
    color: #2B39AF;
    z-index: 2;
    .bg-white{
        background-color: #fff;
        font-size: larger;
    }
    p{
        text-align: center;
        color: black;
    }

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
    .space-btw{
        margin: 2vh;
    }
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`

const ImgBg = styled.img`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: inherit;
    background-size: cover;
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
const List = styled.div`
text-align: start;
justify-content: start;
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

const TeamCon = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 480px) {
        flex-direction: column;
    &:nth-child(2) {
        order: 1;
    }
  }
`

const TeamConR = styled.div`
    h1, h2{
        font-family: 'Prompt';
    }
    p{
        font-family: 'bai jamjuree';
    }
`

const TeamConL = styled.div`
    justify-content: center;
    text-align: end;
    padding: 2rem ;
    width: 60%;
    img{
    width: 70%;
    border-radius: 10px;
}
`

function FinanceCourse() {
    return(
        <>
        <Navbar />
        <div>
            <Header>
                <BannerBg>
                <ImgBg src="/assets/พื้นหลังคอร์ส/glass-jar-full-money-front-decreasing-stacked-coins-against-white-background.jpg">
                </ImgBg>
                <Container>
                    <BannerCon>
                        <BannerText>
                            <div className="bg-white">
                                <h1>ยินดีต้อนรับสู่</h1>
                                <h1>โลกแห่งการเงินการลงทุน</h1>
                            </div>
                            <p>เลือกรูปแบบที่คุณต้องการ</p>
                            <Row>
                                <div className="space-btw">
                                    <BannerBtn href="/FinanceCourse">เรียนสด(ออนไลน์)</BannerBtn>
                                </div>
                                <div className="space-btw">
                                    <BannerBtn href="/EnterpCourse">เรียนจากคลิปวีดีโอ</BannerBtn>
                                </div>
                            </Row>
                        </BannerText>
                    </BannerCon>
                </Container>
                </BannerBg>
            </Header>
            <Container>
                <MiddleText>
                            <Row>
                                <Power>ทีมการออกแบบการสอนและผู้สอน</Power>
                            </Row>
                </MiddleText>
                        <TeamCon>
                            <TeamConL>
                            <img src="/assets/ผู้สอน/การเงิน 1 .png" alt=""/>
                            </TeamConL>
                            <TeamConR>
                                    <h2>ฉัตรธนัตถ์ สิริรัตนภัทร์</h2>
                                    <p>
                                      การเงินเป็นสิ่งที่อยู่รอบตัวเรา ไม่ว่าเราจะทำอะไรก็ตามนั้นล้วนเกี่ยวข้องกับการเงิน ไม่ว่าทางตรงหรือทางอ้อมnดังนั้นเราควรเตรียมตัวไว้และปูพื้นฐานไว้ตั้งแต่เนิ่นๆ
เพื่อเตรียมรับมือ ในการวางแผนการเงินในอนาคต
                                    </p>
                            </TeamConR>
                        </TeamCon>
                        <TeamCon>
                            <TeamConL>
                            <img src="/assets/ผู้สอน/การเงิน 2.png" alt=""/>
                            </TeamConL>
                            <TeamConR>
                                    <h2>ชเนศร์ ศรินนภากร</h2>
                                    <p>
ที่ปรึกษาการเงินที่ได้การรับรองจากสมาคมนักวางแผนการเงินไทย AFPT, 
Associate Financial Planner Thailand, 
Investment Planner License, 
Insurance Agent License และ
Insurance Broker License
                                    </p>
                            </TeamConR>
                        </TeamCon>
                    </Container>
                <Container>
                <MiddleCon>
                    <MiddleText>
                                <Row>
                                    <h2>หลักสูตรของเรา<br />Our course</h2>
                                </Row>
                                <CourseCardRow>
                                    <CourseCard href="/TechCourse">
                                    <img src="/assets/ชื่อคอร์ส ราคา/1.png" />
                                    </CourseCard>
                                    <CourseCard href="/TechCourse">
                                    <img src="/assets/ชื่อคอร์ส ราคา/2.png" />
                                    </CourseCard>
                                    <CourseCard href="/TechCourse">
                                    <img src="/assets/ชื่อคอร์ส ราคา/3.png" />
                                    </CourseCard>
                                </CourseCardRow>
                    </MiddleText>
                </MiddleCon>
                </Container>
                <GreyBg>
                <Container>
                    <MiddleText>
                                <Row>
                                   <Power>Live Class</Power>
                                </Row>
                                    <Discript>
                                    รูปแบบการเรียนการสอนแบบ Live Class คือการสอนสดเเบบออนไลน์ผ่าน Video Conference
ซึ่งเน้นการเรียนรู้ผ่านการลงมือทำ เเละใช้ Worksheet ที่ทางทีมงานส่งไปให้ที่บ้าน
โดยใช้โปรแกรมเช่น Zoom, Google Meet เป็นต้น  *เหมือนการ Video Call บน Line
เเต่ใช้บนโปรแกรม Zoom , Google Meet แทน เรียนได้ง่ายๆจากที่บ้าน ด้วยอุปกรณ์ที่เหมาะสม
เช่น คอมพิวเตอร์ โน็ตบุค ไอแพ็ด แท็บเล็ต เป็นต้น
                                    </Discript>
                    </MiddleText>
                <ContentCon>
                    <ContentR>
                        <Power>ทำไมต้อง Live Class</Power>
                        <List>
                            <p>การเรียนรู้แบบ Live มีข้อดี คือ</p>
                            <p>1. สอบถามได้ทันทีเมื่อน้อง ๆ เกิดคำถาม</p>
                            <p>2. กระบวนการเรียนการสอนที่ต่อเนื่องเเละคุณครูผู้สอน สามารถปรับการเรียนการสอนให้เข้ากับเด็กเเต่ละคน</p>
                            <p>3. ได้เเลกเปลี่ยนความรู้ความคิดเห็นกับคุณครูเเละเพื่อนร่วมคลาส   *ในกรณีเรียนแบบกลุ่ม ซึ่งเป็นการส่งเสริมกระบวนการเรียนรู้ที่มีประสิทธิภาพ                    </p>
                            <p>4. เรียนการผ่านการลงมือทำด้วย Worksheet ที่ทางทีมงานส่งไปให้น้องๆที่บ้าน</p>
                        </List>
                    </ContentR>
                    <ContentL>
                        <img src="/assets/งานออกแบบที่ไม่มีชื่อ (9).png" alt=""/>
                    </ContentL>
                </ContentCon>
                </Container>
                </GreyBg>
                <Container>
                <MiddleText>
                        <Row>
                           <Power>เรียนจากคลิปวีดีโอย้อนหลัง</Power>
                        </Row>
                        <Discript>
                            สำหรับน้องๆ ที่ไม่สะดวกเรียนเเบบ Live Class สามารถเรียนจากคลิปวีดีโอที่ผ่านการออกแบบ
เพื่อเน้นการเรียนรู้ผ่านการลงมือทำ เรียนรู้จากคลิปการเรียนรู้ที่สนุกสนานและไม่น่าเบื่อ
โดยสามารถดูคลิปตัวอย่างการเรียนการสอนได้ ที่นี่
                        </Discript>
                    </MiddleText>
                <ContentCon>
                    <ContentL>
                        <img src="/assets/ติดตามเราเพื่อรับเเนวทางการสอนทักษะเเห่งอนาคต ฟรี! (2).png" className="width:30%" alt="" />
                    </ContentL>
                    <ContentR>
                            <Power>ทำไมถึงต้องเรียนจากคลิปวิดีโอย้อนหลัง</Power>
                            <List>
                                <p>ข้อดีของการเรียนเเบบวีดีโอ</p>
                                <p>1. เรียนได้ตามเวลาที่สะดวกตามที่ต้องการ กับบทเรียนมากกว่า200 บทเรียน/คอร์ส</p>
                                <p>2. เรียนย้อนหลังได้ตลอดทุกที่ทุกเวลา คลิปดูย้อนหลังได้ตลอด 1 ปีเต็ม นับจากวันที่เข้าเรียนครั้งเเรก</p>
                                <p>3. สนุกสนานเพลิดเพลินไปกับภาพการ์ตูนที่ทำให้น้องๆเข้าใจง่าย</p>
                                <p>4. ผสมผสานการเรียนการสอนจากคลิปวีดีโอเเละ Worksheet ที่จะส่งไปให้น้องๆ ที่บ้าน</p>
                            </List>
                    </ContentR>
                </ContentCon>
            </Container>
        </div>
        </>
    )
}

export default FinanceCourse;