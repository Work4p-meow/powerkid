import Navbar from "../component/Navbar"
import Footer from "../component/Footer";
import styled from "styled-components"
// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
// import { logDOM } from "@testing-library/react";

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
const Textsmall = styled.div`
  font-family: 'Prompt', sans-serif;
  font-size:
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
  width: 35%;
`;




function Cost() {
  return (
    <>
      <Navbar />
      <div >
        <Text>
          <div className='container' >
            <div className='padding'>
              <div className='center'>เริ่มต้นเรียนทักษะแห่งอนาคต</div>
              <div className='center'>กับ PowerKid ตั้งแต่วันนี้</div>
            </div>




            <Textsmall>  <Btn><BtnLink to='/cost'>เรียนสด (ออนไลน์)</BtnLink></Btn>
              <Btn><BtnLink to='/cost'>เรียนจากคลิปวีดีโอ</BtnLink></Btn>
              <Image src='assets/medium-shot-kid-taking-notes.jpg' />
              <Image src='assets/little-girls-doing-online-school-together-home.jpg' /></Textsmall>

          </div>

        </Text>
      </div>
      <Footer />
    </>
  )
  //ราคา
}

export default Cost