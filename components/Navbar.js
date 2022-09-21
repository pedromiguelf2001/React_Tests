import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
    font-size: 20px;
    padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>TEST</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/cart' passHref>
          <StyledLink><AiOutlineShoppingCart /></StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;