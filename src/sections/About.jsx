import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { t } = useTranslation();
  const handleCopy = () => {
    navigator.clipboard.writeText("indrawanresky.tlg@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <div className='w-full flex justify-center '>
              <img
                src='/assets/grid1.png'
                alt='grid-1'
                className='w-40 items-center sm:h[276px] h-fit object-contain rounded-3xl'
              />
            </div>

            <div>
              <p className='grid-headtext'>
                {t("about.grid1.intro")}
              </p>
              <p className='grid-subtext'>
                {t("about.grid1.subIntro")}
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid2.png'
              alt='grid-2'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>
                {t("about.grid2.intro")}
              </p>
              <p className='grid-subtext'>
                {t("about.grid2.subIntro")}
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                width={326}
                height={326}
                backgroundColor='rgba(0,0,0,0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                labelsData={[
                  {
                    lat: 34,
                    lng: 133,
                    text: "I'm Here !!!",
                  },
                ]}
                labelColor={() => "white"}
                labelSize={3}
                labelDotRadius={1}
              />
            </div>
            <div>
              <p className='grid-headtext'>
                {t("about.grid3.intro")}
              </p>
              <p className='grid-subtext'>
                {t("about.grid3.subIntro")}
              </p>
              <a href='#contact'>
                <Button
                  name={t("about.grid3.button")}
                  isBeam
                  containerClass='w-full mt-10'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>
                {t("about.grid4.intro")}
              </p>
              <p className='grid-subtext'>
                {t("about.grid4.subIntro")}
              </p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='/assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>
                {t("about.grid5.intro")}
              </p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={
                    hasCopied
                      ? "/assets/tick.svg"
                      : "/assets/copy.svg"
                  }
                  alt='toggle-copy'
                  className={hasCopied ? "h-7 w-7" : "h-7 w-7"}
                />
                <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>
                  indrawanresky.tlg@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
