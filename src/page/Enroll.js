import Navbar from "../component/Navbar"
import Footer from "../component/Footer";
import styled from "styled-components"
// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
// import { logDOM } from "@testing-library/react";

const Text = styled.div`
  font-family: 'Prompt', sans-serif;
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
        <div >

          สมัครเรียนกับ PowerKid
          <div>เริ่มง่ายๆ แค่ 3 ขั้นตอน</div>
          <Image src='assets/เลือกรูปแบบการเรียน.png'></Image>
        </div>
      </Text>

    </>
  )
}

export default Enroll