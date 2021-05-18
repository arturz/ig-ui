import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { PHONE_SCREEN_RATIO } from '../config';

function assignPhoneFrameCss({ loaded }) {
  if (loaded) {
    return `
      transform: translateY(0deg) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
      box-shadow: 0px 3px 0 #BBB, 0px 4px 0 #BBB, 0px 5px 0 #BBB, 0px 7px 0 #BBB, 0px 10px 20px #666;
    `;
  }

  return `
    transform: translateY(-10vh) rotateX(50deg) rotateY(0deg) rotateZ(-50deg);
    box-shadow: -3px 3px 0 #BBB, -6px 6px 0 #BBB, -9px 9px 0 #BBB, -12px 12px 0 #BBB, -14px 10px 20px #666;
  `;
}

const Perspective = styled(motion.div)`
  perspective: 200rem;
`;

const PhoneFrameStyled = styled(motion.div)`
  width: 10rem;
  height: calc(${PHONE_SCREEN_RATIO} * 10rem);
  @media screen and (min-width: 650px) {
    & {
      width: 14rem;
      height: calc(${PHONE_SCREEN_RATIO} * 14rem);
    }
  }

  box-sizing: content-box;
  position: relative;
  background: white;

  border-style: solid;
  border-color: #ddd;
  border-width: 55px 7px;
  border-radius: 40px;
  transition: all 1s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  ${assignPhoneFrameCss}
`;

export default function PhoneFrame({ loaded, children, ...props }) {
  return (
    <Perspective {...props}>
      <PhoneFrameStyled loaded={loaded}>{children}</PhoneFrameStyled>
    </Perspective>
  );
}
