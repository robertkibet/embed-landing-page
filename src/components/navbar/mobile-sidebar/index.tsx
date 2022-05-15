import {faClose, faSignal, faSignal5} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mobileNav from "../../../../public/assets/mobile-nav.svg";
import Text from "../../text";
import {colors} from "../../theme";
import {Container, Sidebar, SidebarContent, SidebarHeader} from "./styles";
import logoDefault from "../../../../public/assets/logo-coloured.svg";
import {EmbedLinks} from "../../footer/styles";
import {
  faLinkedin,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

interface MobileSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}
const MobileSidebar = ({}: MobileSidebarProps) => {
  const [sidebarOpen, setSiderbarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSiderbarOpen(!sidebarOpen);
  };
  return (
    <div>
      <Image
        onClick={toggleSidebar}
        width="40px"
        height="40px"
        src={mobileNav}
      />
      {sidebarOpen && (
        <Sidebar>
          <Container>
            <SidebarHeader>
              <Image src={logoDefault} width="50px" height="50px" />
              <FontAwesomeIcon
                id="close-sidebar"
                icon={faClose}
                width="30px"
                height="30px"
                color={colors.white}
                onClick={toggleSidebar}
              />
            </SidebarHeader>
            <SidebarContent>
              {[
                {
                  title: "Home",
                  link: "#",
                },
                {
                  title: "Earn",
                  link: "#",
                },
                {
                  title: "Promote",
                  link: "#",
                },
                {
                  title: "Join Waitlist",
                  link: "#",
                },
              ].map((item) => (
                <Link key={item.title} passHref href={item.link}>
                  <Text
                    fontSize="16px"
                    fontWeight={600}
                    color={colors.white}
                    content={item.title}
                  />
                </Link>
              ))}
              <EmbedLinks>
                <a
                  href="https://www.linkedin.com/company/embed-solutions/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    width={42}
                    height={42}
                    icon={faLinkedin}
                    color={colors.white}
                  />
                </a>
                <a
                  href="https://web.telegram.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    width={42}
                    height={42}
                    icon={faTelegramPlane}
                    color={colors.white}
                  />
                </a>
                <a
                  href="https://twitter.com/embedprotocol"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    width={42}
                    height={42}
                    icon={faTwitter}
                    color={colors.white}
                  />
                </a>
              </EmbedLinks>
            </SidebarContent>
          </Container>
        </Sidebar>
      )}
    </div>
  );
};

export default MobileSidebar;
