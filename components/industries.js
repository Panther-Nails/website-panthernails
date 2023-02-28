import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Industries = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="industries"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Serving Industries
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Several happy customers hailing from major industry sectors in India
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-6 py-8 lg:py-6 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-2 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/industries/glue-bottle.png"
                    width={145}
                    height={165}
                    alt="Adhesives"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Adhesives &amp; Speciality Chemicals
                </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-2 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/industries/oil-can.png"
                    width={145}
                    height={165}
                    alt="Oils & Lubricants"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Engine Oils &amp; Lubricants
                </p>
              </motion.div>
            </ScrollAnimationWrapper>


            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/pipe.png"
                  width={145}
                  height={165}
                  alt="Pipes"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Pipes 
              </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/materials-for-construction.png"
                  width={145}
                  height={165}
                  alt="materials-for-construction"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Construction Materials
              </p>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/tiles.png"
                  width={145}
                  height={165}
                  alt="tiles"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Tiles
              </p>
              </motion.div>
            </ScrollAnimationWrapper>


          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-6 py-8 lg:py-6 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/industries/cosmetics-kit.png"
                    width={145}
                    height={165}
                    alt="cosmetics-kit"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Cosmetics
                </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/paint-bucket.png"
                  width={145}
                  height={165}
                  alt="paints"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Paints 
              </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/wood-cutting.png"
                  width={145}
                  height={165}
                  alt="Plywood & Laminates"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Plywood &amp; Laminates
              </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/metal-roofing-sheet.png"
                  width={145}
                  height={165}
                  alt="metal-roofing-sheet"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Roofing sheets
              </p>
              </motion.div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-2 px-3 lg:px-5 xl:px-5"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/industries/piston.png"
                  width={145}
                  height={165}
                  alt="Automobile Spare Parts"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Spare Parts
              </p>
              </motion.div>
            </ScrollAnimationWrapper>


          </div>
          <div className="grid grid-flow-row" >
          <ScrollAnimationWrapper>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              and many more...
            </motion.p>
          </ScrollAnimationWrapper>
          </div>
        </div>

        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Huge Global Network of Fast VPN{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Industries;
