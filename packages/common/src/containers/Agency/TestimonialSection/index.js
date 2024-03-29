import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Image from "reusecore/src/elements/Image";
import data from "../../../data/Agency";
import Container from "../../../components/UI/Container";
import GlideCarousel from "../../../components/GlideCarousel";
import GlideSlide from "../../../components/GlideCarousel/glideSlide";
import TestimonialSectionWrapper, {
  TextWrapper,
  ImageWrapper,
} from "./testimonialSection.style";

const TestimonialSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle,
}) => {
  // Glide js options
  const glideOptions = {
    type: "carousel",
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };

  return (
    <TestimonialSectionWrapper id="testimonialSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="DEPOIMENTOS" {...sectionSubTitle} />
          <Heading
            content="Confira a opinião dos clientes:"
            {...sectionTitle}
          />
        </Box>
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={btnWrapperStyle}
          nextButton={
            <Button
              icon={<i className="flaticon-next" />}
              variant="textButton"
              {...btnStyle}
            />
          }
          prevButton={
            <Button
              icon={<i className="flaticon-left-arrow" />}
              variant="textButton"
              {...btnStyle}
            />
          }
        >
          <Fragment>
            {data.testimonial.map((item, index) => (
              <GlideSlide key={index}>
                <Fragment>
                  <TextWrapper>
                    <i className="flaticon-quotes" />
                    <Text content={item.comment} {...commentStyle} />
                    <Heading content={item.name} {...nameStyle} />
                    <Heading content={item.designation} {...designationStyle} />
                  </TextWrapper>
                  {/*<ImageWrapper>
                    <Image src={item.avatar_url} alt="Client Image" />
                  </ImageWrapper>*/}
                </Fragment>
              </GlideSlide>
            ))}
          </Fragment>
        </GlideCarousel>
      </Container>
    </TestimonialSectionWrapper>
  );
};

// TestimonialSection style props
TestimonialSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  btnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  commentStyle: PropTypes.object,
  designationStyle: PropTypes.object,
};

// TestimonialSection default style
TestimonialSection.defaultProps = {
  // section header default style
  sectionHeader: {
    pt: "30px",
    mb: "56px",
  },
  // sub section default style
  sectionSubTitle: {
    textAlign: "center",
    fontSize: "18px",
    letterSpacing: "0.08em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // client comment style
  commentStyle: {
    color: "#343d48",
    fontWeight: "300",
    fontSize: ["20px", "24px"],
    lineHeight: "1.67",
    mb: "47px",
  },
  // client name style
  nameStyle: {
    as: "h3",
    color: "#343d48",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "30px",
    mb: 0,
  },
  // client designation style
  designationStyle: {
    as: "h5",
    color: "rgba(52, 61, 72, 0.8)",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    mb: 0,
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: "absolute",
    bottom: "62px",
    left: "12px",
  },
  // next / prev btn style
  btnStyle: {
    minWidth: "auto",
    minHeight: "auto",
    mr: "13px",
    fontSize: "16px",
    color: "#343d484d",
  },
};

export default TestimonialSection;
