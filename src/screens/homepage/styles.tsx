import styled from "@emotion/styled";
import {breakPoints, colors} from "../../components/theme";

export const Summary = styled.div`
  padding-top: 20px;
`;
export const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${breakPoints.md}) {
    #faq-mobile {
      display: none;
    }
  }
`;
export const YourQuestionsAnsweredMobile = styled.div`
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 1220px;
  justify-content: start;
  align-items: center;
  padding-top: 62px;
  margin-bottom: -30px;
`;
export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 60px;
  width: 325px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  z-index: 1;
  width: 100%;
  @media (max-width: ${breakPoints.md}) {
    text-align: center;
    width: 80%;
    #embed-app-intro-title {
      font-size: 40px;
    }
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;
export const Introduction = styled.div`
  width: 100%;
  min-height: 840px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const IntroVideo = styled.video`
  left: 50%;
  min-height: 100%;
  object-fit: fill;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const LeadTheChangeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 132px;
  padding-bottom: 37px;

  @media (max-width: ${breakPoints.md}) {
    padding-top: 82px;
    padding-bottom: 118px;
    .trademark-statement {
      display: none;
    }
  }
`;
export const LeadTheChange = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakPoints.md}) {
    gap: 30px;
    flex-direction: column-reverse;
  }
`;
export const EmbedToEarnModel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 82px;
  min-height: 852px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #f059fc -0.05%, #16bbfd 94.34%);

  @media (max-width: ${breakPoints.md}) {
    padding-top: 84px;
    padding-bottom: 84px;
    text-align: center;
  }
`;
export const EmbedToEarnModelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${breakPoints.md}) {
    flex-direction: column;
    .next-step {
      transform: rotate(90deg);
    }
  }
`;
interface EmbedToEarnModelBoxProps {
  backgroundColor: string;
}
export const EmbedToEarnModelBox = styled.div<EmbedToEarnModelBoxProps>`
  width: 283px;
  height: 247px;
  background-color: ${({backgroundColor}) =>
    backgroundColor || colors.sweetBlue};
  mix-blend-mode: normal;
  border: 2px solid #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 11px;

  display: flex;
  flex-direction: column;
  gap: 29px;
  justify-content: start;
  padding-top: 32px;
  text-align: center;
  align-items: center;
`;
export const LeadIntroductions = styled.div`
  max-width: 476px;
  width: 100%;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`;

export const EarnWithEmbed = styled.div`
  min-height: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding-top: 72px;
  padding-bottom: 72px;
`;
export const EarnWithEmbedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 60px;
`;
export const EarnWithEmbedSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 60px;
  @media (max-width: ${breakPoints.md}) {
    justify-content: center;
  }
`;
export const Steps = styled(EarnWithEmbedSteps)`
  width: 306px;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  ol {
    border-top: 1px solid ${colors.lightGray};
    padding-top: 20px;
    margin: 0;
  }
`;

export const JoinTheWaitListAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${breakPoints.md}) {
    p {
      font-size: 83px;
    }
  }
`;
export const JoinTheWaitList = styled.div`
  background-image: url("/assets/neon-nightclub.jpg");
  height: 868px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  padding-bottom: 92px;
`;
