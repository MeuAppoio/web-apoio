import styled from "styled-components";

const TeamSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 60px 0;
  }

  .team__member {
    height: 2 50px;
    .icon__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 12px;
  > button {
    margin: 3px;
    cursor: pointer;
    width: 30px;
    height: 24px;
    line-height: 20px;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid rgba(15, 33, 55, 0.26);
    color: #0f2137;
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: none;
      &.flaticon-facebook-logo {
        color: #ffffff;
        border-color: #3c5a99;
        background-color: #3c5a99;
      }
      &.flaticon-twitter-logo-silhouette {
        color: #ffffff;
        border-color: #1da1f2;
        background-color: #1da1f2;
      }
      &.flaticon-instagram {
        color: #ffffff;
        border-color: #fb3958;
        background-color: #fb3958;
      }
      &.flaticon-dribble-logo {
        color: #ffffff;
        border-color: #ea4c89;
        background-color: #ea4c89;
      }
    }
  }
`;

export { SocialLinks };
export default TeamSectionWrapper;
