import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constans";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 768, minWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section
      className='min-h-screen w-full flex flex-col relative'
      id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, I am Resky Indrawan{" "}
          <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient '>
          Building Products & Brands
        </p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            {/* <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={[1.9, -7, -3.7]}
                rotation={[0.2, -3.2, 0]}
              />
            </HeroCamera> */}

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight
              position={[10, 10, 10]}
              intensity={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-0 left-0 right-0 w-full z-10 c-space'>
        <a href='#contact' className='fit'>
          <Button
            name="Let's work together"
            isBeam
            containerClass='sm:w-fit w-[250px] sm:min-w-96'
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
