import Navbar from "../component/Navbar"
import Footer from "../component/Footer";
import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { logDOM } from "@testing-library/react";

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
const Btn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BtnLink = styled(Link)`
  border-radius: 4px;
  background: #2B39AF;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
const Image = styled.img`
  width: 50%;
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
      <Footer />
    </>
  )
}

export default Enroll