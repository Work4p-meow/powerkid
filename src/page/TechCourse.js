import Navbar from "../component/Navbar"
import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom';
import "./Course.css"
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


function Course() {
    //หลักสูตร
    return (
        <>
            <Navbar />
            <Text>
                <div className="center">
                    <div className='homepage-bgimage '> ก้าวเข้าสู่โลกยุคใหม่ด้วยเทคโนโลยี
                        <div>เลือกรูปแบบการเรียนที่คุณต้องการ</div>
                        <Btn><BtnLink to='/cost'>เรียนสด (ออนไลน์)</BtnLink></Btn>
                        <Btn><BtnLink to='/cost'>เรียนจากคลิปวีดีโอ</BtnLink></Btn>
                    </div>
                    <div className="center">
                        ทีมออกแบบการสอนเเละทีมผู้สอน
                    </div>
                </div>


            </Text>
        </>
    )
}

export default Course