import styled, { keyframes, css } from "styled-components";
import orange from "./assets/orange.svg";
import sportAf from "./assets/sportAf.svg";
import unicloud from "./assets/unicloud.svg";
import affp from "./assets/affp.svg";

const SecondCarousel = () => {
  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={orange}
                alt="orange"
                className=" h-[32px] w-full md:w-auto"
              />
            </div>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={sportAf}
                alt="Sport Africa"
                className=" h-[32px] w-full md:w-auto"
              />
            </div>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={unicloud}
                alt="Unicloud Africa"
                className=" h-[32px] w-full md:w-auto"
              />
            </div>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={affp}
                alt="AFFP"
                className=" h-[24px] w-full md:w-auto"
              />
            </div>
          </MarqueeGroup>
          <MarqueeGroup>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={orange}
                alt="orange"
                className=" h-[32px] w-full md:w-auto"
              />
            </div>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={sportAf}
                alt="Sport Africa"
                className=" h-[32px] w-full md:w-auto"
              />
            </div>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={unicloud}
                alt="Unicloud Africa"
                className=" h-[32px] w-full md:w-auto"
              />
            </div>
            <div className=" bg-[#F8F9FB] rounded-[5px] w-full py-3 flex items-center h-[48px] md:h-[54px] px-5 md:px-0 justify-center">
              <img
                src={affp}
                alt="AFFP"
                className=" h-[24px] w-full md:w-auto"
              />
            </div>
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default SecondCarousel;

const AppContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  gap: 16px;
`;

const scrollX = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
  gap: 16px; // Adjust the value to control spacing
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
