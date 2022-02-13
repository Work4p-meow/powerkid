import styled from "styled-components"
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-end; */
`;

const NavLink = styled(Link)`
  color: #2B39AF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
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

const NavBtn = styled.nav`
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

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #E85137;
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

const Logo = styled.img`
  width: 25%;
`;

const Navbar = () => {
    return (
        <div className='my-5'>
            <Nav>
            <NavLink to="/">
                    <Logo src="/assets/Logo Powerkid.png" />
              </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        หน้าหลัก
                    </NavLink>
                    <NavLink to="/course" activeStyle>
                        หลักสูตรของเรา
                    </NavLink>
                    <NavLink to="/cost" activeStyle>
                        ราคา
                    </NavLink>
                    <NavLink to="/enroll" activeStyle>
                        สมัครเรียน
                    </NavLink>
                  <NavBtn>
                      <NavBtnLink to="/trial">ทดลองเรียนฟรี</NavBtnLink>
                  </NavBtn>
                </NavMenu>
            </Nav>
            <div>

            </div>
        </div>
    )
}

export default Navbar