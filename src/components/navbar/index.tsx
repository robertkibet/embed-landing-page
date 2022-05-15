import React from "react";
import {MenuItems, NavWrapper, Container} from "./styles";
import logoDefault from "../../../public/assets/logo-default.svg";
import Image from "next/image";
import Text from "../text";
import {breakPoints, colors} from "../theme";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = () => {
  const matches = useMediaQuery(breakPoints.md);

  return (
    <NavWrapper>
      <Container>
        <Image width="150px" height="30px" src={logoDefault} />
        {matches ? (
          <MobileSidebar />
        ) : (
          <MenuItems>
            <Link passHref href="#">
              <Text
                color={colors.purple}
                content="Home"
                fontWeight={600}
                fontSize="16px"
              />
            </Link>
            <Link passHref href="#earn">
              <Text
                color={colors.purple}
                content="Earn"
                fontWeight={600}
                fontSize="16px"
              />
            </Link>
            <Link passHref href="#promote">
              <Text
                color={colors.purple}
                content="Promote"
                fontWeight={600}
                fontSize="16px"
              />
            </Link>
            <Link passHref href="#join-waitlist">
              <Text
                color={colors.purple}
                content="Join Waitlist"
                fontWeight={600}
                fontSize="16px"
              />
            </Link>
          </MenuItems>
        )}
      </Container>
    </NavWrapper>
  );
};

export default Navbar;
