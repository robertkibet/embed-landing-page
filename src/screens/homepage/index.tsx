import React, {useEffect} from "react";
import Image from "next/image";
import {connect} from "react-redux";
import {AnyAction, bindActionCreators, Dispatch} from "redux";

import embedWhiteLogo from "../../../public/assets/embed-white.svg";
import {
  Content,
  IntroVideo,
  Introduction,
  Summary,
  LeadTheChange,
  LeadIntroductions,
  HomepageWrapper,
  LeadTheChangeWrapper,
  EmbedToEarnModel,
  EmbedToEarnModelBox,
  EmbedToEarnModelContainer,
  EarnWithEmbed,
  EarnWithEmbedWrapper,
  EarnWithEmbedSteps,
  Steps,
  JoinTheWaitList,
  JoinTheWaitListAction,
  YourQuestionsAnsweredMobile,
  FaqWrapper,
  ContentWrapper,
} from "./styles";
import Text from "../../components/text";
import {colors} from "../../components/theme";
import Button from "../../components/button";
import montageEarnGif from "../../../public/assets/nft-montage-earn.gif";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import ActionCreators from "../../actions";

interface StepsToTake {
  title: string;
  content: string;
  icon: string;
}
interface StepsProps {
  steps: StepsToTake[];
  loading: boolean;
  error: Error;
}

const ShowStepsOrResponse = ({steps, loading, error}: StepsProps) => {
  if (steps.length > 0) {
    return (
      <>
        {steps?.map((item) => (
          <>
            <Steps key={Math.random()}>
              <Text
                color={colors.darkGrey}
                content={item.title}
                fontWeight={700}
                fontSize="24px"
              />
              <Image src={item.icon} width="54px" height="54px" />
              <div dangerouslySetInnerHTML={{__html: item.content}} />
            </Steps>
          </>
        ))}
      </>
    );
  }

  if (loading) return <div>loading steps</div>;
  return <div>Error: {error.message || "Request timed out"}</div>;
};

const Homepage = (props: any) => {
  const {steps, loading, error, getSteps} = props;

  useEffect(() => getSteps(), []);

  return (
    <HomepageWrapper>
      <Introduction id="home">
        <IntroVideo autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/sensen-ventures.appspot.com/nft-collectors.mp4"
            type="video/mp4"
          />
        </IntroVideo>
        <ContentWrapper>
          <Content>
            <Image width="95px" height="75px" src={embedWhiteLogo} />
            <Text
              color={colors.white}
              id="embed-app-intro-title"
              content={
                <>
                  Embed empowers you to
                  <br />
                  <span>monetize your portfolio</span>
                </>
              }
              fontWeight={700}
              fontSize="64px"
            />
            <Summary>
              <Text
                color={colors.white}
                content={
                  <>
                    We enable NFT holders to become influencers, build their
                    audience through a turn-
                    <br />
                    key solution developed to monetize and transform their
                    portfolio into a yielding
                    <br />
                    asset. We create passion-based communities.
                  </>
                }
                fontWeight={400}
                fontSize="18px"
              />
            </Summary>
            <Button variant="primary" text="Join waitlist" onClick={() => {}} />
          </Content>
        </ContentWrapper>
      </Introduction>
      <LeadTheChangeWrapper>
        <LeadTheChange>
          <LeadIntroductions>
            <Text
              color={colors.darkGrey}
              content="Lead the change"
              fontWeight={700}
              fontSize="48px"
            />
            <Text
              color={colors.darkGrey}
              content={
                <>
                  In a decentralised world, you power{" "}
                  <strong>the brand.</strong>
                  <br />
                  Influence the way brands will look in the metaverse
                  <br /> and <strong>build a community</strong> around those you
                  love. <br />
                  <br />
                  <br />
                  <strong>
                    Be a part of the change and join Embed’s decentralized
                    protocol today
                  </strong>
                </>
              }
              lineHeight="160%"
              fontWeight={400}
              fontSize="16px"
            />
            <Button variant="primary" text="Join waitlist" onClick={() => {}} />
          </LeadIntroductions>
          <Image src={montageEarnGif} width="800px" height="627.57px" />
        </LeadTheChange>
        <Text
          fontWeight={400}
          fontSize="11px"
          lineHeight="160%"
          color={colors.darkGrey}
          textAlign="center"
          marginTop="50px"
          className="trademark-statement"
          content={
            <>
              The trademarks, logos and brand names that appear on this website
              are used for informational or editorial purposes and are the
              property of their respective owners. Use of <br /> these
              trademarks, logos and brand names does not imply any affiliation
              with or endorsement by their owners.
            </>
          }
        />
      </LeadTheChangeWrapper>
      <EmbedToEarnModel id="earn">
        <Text
          fontWeight={700}
          fontSize="48px"
          color={colors.white}
          content="The Embed-to-Earn Model"
        />
        <EmbedToEarnModelContainer>
          <EmbedToEarnModelBox backgroundColor={colors.sweetPink}>
            <Text
              fontWeight={400}
              fontSize="30px"
              color={colors.white}
              content="#1 Match"
            />
            <Text
              fontWeight={400}
              fontSize="24px"
              color={colors.white}
              lineHeight="126%"
              content={
                <>
                  Join Embed and
                  <br /> match with your <br />
                  favourite brands
                </>
              }
            />
          </EmbedToEarnModelBox>
          <FontAwesomeIcon
            className="next-step"
            icon={faArrowRightLong}
            width="50px"
            height="50px"
            color={colors.white}
          />
          <EmbedToEarnModelBox backgroundColor={colors.sweetPurple}>
            <Text
              fontWeight={400}
              fontSize="30px"
              color={colors.white}
              content="#2 Influence"
              textAlign="center"
              lineHeight="126%"
            />
            <Text
              fontWeight={400}
              fontSize="24px"
              color={colors.white}
              textAlign="center"
              lineHeight="126%"
              content={
                <>
                  Impact your <br />
                  favorite brand and
                  <br /> build a community
                  <br /> around it
                </>
              }
            />
          </EmbedToEarnModelBox>
          <FontAwesomeIcon
            className="next-step"
            icon={faArrowRightLong}
            width="50px"
            height="50px"
            color={colors.white}
          />
          <EmbedToEarnModelBox backgroundColor={colors.sweetTeal}>
            <Text
              fontWeight={400}
              fontSize="30px"
              textAlign="center"
              color={colors.white}
              content="#3 Earn"
            />
            <Text
              fontWeight={400}
              fontSize="24px"
              color={colors.white}
              content={
                <>
                  Grow your
                  <br /> audience and earn
                  <br /> rewards
                </>
              }
            />
          </EmbedToEarnModelBox>
        </EmbedToEarnModelContainer>
      </EmbedToEarnModel>
      <EarnWithEmbed id="promote">
        <EarnWithEmbedWrapper>
          <Text
            color={colors.darkGrey}
            content="How to earn with Embed"
            fontWeight={700}
            fontSize="48px"
          />
          <Text
            color={colors.darkGrey}
            content="Three simple steps to get you started."
            fontWeight={400}
            fontSize="18px"
          />
        </EarnWithEmbedWrapper>
        <EarnWithEmbedSteps>
          <ShowStepsOrResponse steps={steps} loading={loading} error={error} />
        </EarnWithEmbedSteps>
        <Text
          color={colors.darkGrey}
          content="Be part of the alpha launch"
          fontWeight={700}
          fontSize="24px"
        />

        <Button variant="primary" text="Join waitlist" onClick={() => {}} />
      </EarnWithEmbed>

      <YourQuestionsAnsweredMobile id="faq-mobile">
        <Text
          color={colors.white}
          content="Your questions answered"
          fontWeight={700}
          fontSize="32px"
        />
        <FaqWrapper>
          {[
            {
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            },
            {
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            },
            {
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            },
            {
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            },
          ].map((item) => (
            <div key={Math.random()}>
              <Text
                color={colors.white}
                content={item.title}
                fontWeight={700}
                fontSize="18px"
              />
              <Text
                color={colors.white}
                content={item.content}
                fontWeight={400}
                fontSize="18px"
              />
            </div>
          ))}
        </FaqWrapper>
      </YourQuestionsAnsweredMobile>

      <JoinTheWaitList id="waitlist">
        <JoinTheWaitListAction>
          <Text
            color={colors.white}
            content="Join the waitlist"
            fontWeight={700}
            fontSize="32px"
          />

          <Button
            background={colors.darkGrey}
            variant="clear"
            text="Join waitlist"
            onClick={() => {}}
          />
        </JoinTheWaitListAction>
      </JoinTheWaitList>
    </HomepageWrapper>
  );
};

const mapStateToProps = ({GetStepsReducer}: any) => ({
  // GetStepsReducer Reducers
  type: GetStepsReducer?.type || "",
  loading: GetStepsReducer?.loading || false,
  error: GetStepsReducer?.error || {},
  steps: GetStepsReducer?.steps || [],
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
