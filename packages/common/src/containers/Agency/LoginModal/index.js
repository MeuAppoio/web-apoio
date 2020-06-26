import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Input from "reusecore/src/elements/Input";
import CheckBox from "reusecore/src/elements/Checkbox/index";
import Button from "reusecore/src/elements/Button";
import Image from "reusecore/src/elements/Image";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import LogoImage from "../../../assets/image/agency/logo.png";
import LoginImage from "../../../assets/image/agency/login-bg.jpg";
import GoogleLogo from "../../../assets/image/agency/google-icon.jpg";

const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
}) => {
  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="ENTRAR" {...btnStyle} />
      <Button
        title="Esqueci minha senha"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="default" title="REGISTRAR" {...btnStyle} />
    </Fragment>
  );
  const PerfilButtonGroup = () => (
    <Fragment>
      <Button className="default" title="PERFIL" {...btnStyle} />
    </Fragment>
  );
  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image className="patternImage" src={LoginImage} alt="Login Banner" />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image src={LogoImage} {...logoStyle} alt="Logo" />
            <Tabs
              defaultActiveKey="loginForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="LOGIN" key="loginForm">
                <Heading content="Bem Vindo!" {...titleStyle} />
                <Text
                  content="Insira seus dados pessoais para entrar."
                  {...descriptionStyle}
                />

                {/*<Button
                  icon={<Image src={GoogleLogo} alt="Google Icon" />}
                  title="Login com o Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />*/}
                <Input
                  inputType="email"
                  isMaterial
                  label="Endereço de E-mail"
                />
                <Input inputType="password" isMaterial label="Senha" />
                <CheckBox
                  id="remember"
                  htmlFor="remember"
                  labelText="Lembrar login"
                />
                <div>
                  <LoginButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="REGISTRO" key="registerForm">
                <Heading content="Bem Vindo!" {...titleStyle} />
                <Text
                  content="Insira seus dados pessoais para se cadastrar"
                  {...descriptionStyle}
                />
                {/*<Button
                  icon={<Image src={GoogleLogo} alt="Google Icon" />}
                  title="Registrar-se com o Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />*/}
                <Input isMaterial label="Nome completo" />
                <Input
                  inputType="email"
                  isMaterial
                  label="Endereço de E-mail"
                />
                <Input inputType="password" isMaterial label="Senha" />
                <div>
                  <SignupButtonGroup />
                </div>
              </TabPane>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: "200px",
    height: "auto",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mt: "35px",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"],
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
  },
};

export default LoginModal;
