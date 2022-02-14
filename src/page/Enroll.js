import Navbar from "../component/Navbar"
import Footer from "../component/Footer";
import styled from "styled-components"
import "./Enroll.css"

const Text = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size:46px;
  display: flex;
  width: 120%;
  /* align-items: center; */
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  `;


const Image = styled.img`
  
  width: 75%;
`;

function Enroll() {
  //สมัครเรียน
  return (
    <>
      <Navbar />
      <Text>
        <div className="container"  >
          <div class="padding">

            <div className='center'>สมัครเรียนกับ PowerKid</div>

            <div className='center'>เริ่มง่ายๆ แค่ 3 ขั้นตอน</div>
          </div>
          <Image src='assets/เลือกรูปแบบการเรียน.png' className='center'></Image>
          <div className='center'><iframe src='https://forms.gle/m6bdfCY275fPKRrNA' width="800"
            height="720"></iframe></div>

        </div>

      </Text>

    </>
  )
}

export default Enroll