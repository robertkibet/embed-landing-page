import React from "react";
import {
  FooterWrapper,
  FooterItems,
  EmbedLogo,
  EmbedFooterInfo,
  EmbedLinks,
  MoreLinks,
} from "./styles";
import logoWhite from "../../../public/assets/logo-white.svg";
import Image from "next/image";
import Text from "../text";
import {colors} from "../theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faTelegramPlane,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItems>
        <EmbedLogo>
          <Image width="150px" height="30px" src={logoWhite} />
          <Text
            className="footer-copy"
            color={colors.white}
            content="&copy; Embed 2022"
            fontWeight={400}
            fontSize="14px"
          />
        </EmbedLogo>
        <EmbedFooterInfo>
          <Text
            color={colors.white}
            content="Embed protocol is a marketing community engine solution for brands and NFT holders that discovers, tokenizes, and activates communities in the metaverse and web3"
            fontWeight={400}
            fontSize="14px"
          />
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
            <a href="https://web.telegram.org" target="_blank" rel="noreferrer">
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
          <MoreLinks>
            <li>
              <Link passHref href="#">
                <Text
                  color={colors.white}
                  content="Legal"
                  fontWeight={400}
                  fontSize="14px"
                />
              </Link>
            </li>
            <li>
              <Link passHref href="#">
                <Text
                  color={colors.white}
                  content="Privacy"
                  fontWeight={400}
                  fontSize="14px"
                />
              </Link>
            </li>
            <li>
              <Link passHref href="#">
                <Text
                  color={colors.white}
                  content="Careers"
                  fontWeight={400}
                  fontSize="14px"
                />
              </Link>
            </li>
            <li>
              <Link passHref href="#">
                <Text
                  color={colors.white}
                  content="Contact"
                  fontWeight={400}
                  fontSize="14px"
                />
              </Link>
            </li>
          </MoreLinks>
        </EmbedFooterInfo>
        <Text
          className="footer-copy-mobile"
          color={colors.white}
          content="&copy; Embed 2022"
          fontWeight={400}
          fontSize="14px"
        />
      </FooterItems>
    </FooterWrapper>
  );
};

export default Footer;
