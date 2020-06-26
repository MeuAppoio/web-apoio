import styled from "styled-components";
import { themeGet } from "styled-system";

const TestimonialSectionWrapper = styled.section`
  margin: 80px 0 0;
  text-align: center;
  background-color: #f6f7fb;
  background: linear-gradient(transparent 50%, #f6f7fb);
  overflow: hidden;
  @media (max-width: 990px) {
    margin: 0px 0 0;
  }
  .glide {
    .glide__slides {
    }
    max-width: 999px;
    .glide__controls {
      .reusecore__button {
        &:hover {
          color: ${themeGet("colors.quoteText", "#343d48")};
        }
      }
    }
  }

  .glide__controls {
    @media (max-width: 767px) {
      width: 100%;
      left: 0;
      text-align: center;
    }
  }
`;

const TextWrapper = styled.div`
  max-width: 100%;
  margin-right: auto;
  align-self: flex-end;
  margin-bottom: 120px;
  position: center;
  padding-left: 120px;
  @media (max-width: 767px) {
    text-align: center;
  }

  i {
    color: rgba(52, 61, 72, 0.07);
    font-size: 70px;
    position: absolute;
    top: -40px;
    left: 0;
    z-index: -1;
  }
`;

const ImageWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export { TextWrapper, ImageWrapper };

export default TestimonialSectionWrapper;
