import {
    VideoIcon,
    AppleIcon,
    SearchIcon,
    BellIcon,
    UserIcon,
    Camera,
    Video,
    ZapIcon,
    LayersIcon,
    ShieldIcon,
    BoltIcon,
    ServerIcon,
    LockIcon,
    UsersIcon,
    CloudIcon,
    DatabaseIcon,
    RefreshCwIcon,
    SettingsIcon,
    TrendingUpIcon
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const IndexPage = () => {
    const { scrollYProgress } = useScroll();
    const blueToGreen = useTransform(scrollYProgress, [0, 0.3], ["#3B82F6", "#10B981"]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            <HeroSection blueToGreen={blueToGreen} />
            <LandingSection />
            <FeaturesSection />
        </div>
    );
};

const HeroSection = ({ blueToGreen }) => {
    return (
        <div
            className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col relative overflow-hidden" >
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to bottom, ${color}, transparent)`) }}
                    className="absolute top-0 left-1/4 w-0.5 h-full opacity-20" ></motion.div>
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to bottom, ${color}, transparent)`) }}
                    className="absolute top-0 right-1/4 w-0.5 h-full opacity-20" ></motion.div>
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to right, transparent, ${color}, transparent)`) }}
                    className="absolute top-1/4 left-0 w-full h-0.5 opacity-20" ></motion.div>
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to right, transparent, ${color}, transparent)`) }}
                    className="absolute bottom-1/4 left-0 w-full h-0.5 opacity-20" ></motion.div>
            </div>
  
            <header
                className="flex justify-between items-center p-4 md:p-6 fixed top-4 left-0 right-0 z-50" >
                <div className="text-2xl font-bold">
                    LoopSync
                </div>
                <nav
                    className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full px-8 py-4 shadow-lg flex items-center space-x-8" >
                    <a
                        href="/"
                        className="hover:text-gray-300 transition duration-300" >
                        About Us
                    </a>
                    <a
                        href="/"
                        className="hover:text-gray-300 transition duration-300" >
                        Terms Of Service
                    </a>
                    <a
                        href="/"
                        className="hover:text-gray-300 transition duration-300" >
                        Help Center
                    </a>
                    <SearchIcon
                        className="text-gray-400 hover:text-white cursor-pointer transition duration-300"
                        size={20} />
                    <BellIcon
                        className="text-gray-400 hover:text-white cursor-pointer transition duration-300"
                        size={20} />
                    <UserIcon
                        className="text-gray-400 hover:text-white cursor-pointer transition duration-300"
                        size={20} />
                </nav>
                <button
                    className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center" >
                    <span className="mr-2">
                        Download For
                    </span>
                    <AppleIcon size={20} />
                </button>
            </header>
  
            <main
                className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-24 relative z-30" >
                <div className="max-w-4xl mx-auto mt-12">
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-8" >
                        Turn{" "}
                        <motion.span style={{ color: blueToGreen }}>
                            <VideoIcon
                                className="inline-block mx-2"
                                size={64} />
                        </motion.span>{" "}
                        Meetings
                        <br />
                        Into Action
                    </h1>
                    <p className="text-xl md:text-2xl mb-12">
                        Automate Summaries And Track Tasks Effortlessly With AI-Powered
                        Meeting Intelligence
                    </p>
                    <Link to="/register">
                        <motion.button
                            style={{ backgroundColor: blueToGreen }}
                            className="text-white text-xl px-8 py-4 rounded-full hover:opacity-90 transition duration-300" >
                            Try Free &rarr;
                        </motion.button>
                    </Link>
                </div>
            </main>
  
            <div
                className="absolute inset-0 pointer-events-none z-20" >
                <div
                    className="h-full w-full flex items-center justify-center" >
                    <div
                        className="border border-gray-700 w-3/4 h-3/4 rounded-3xl mt-12 bg-gradient-to-b from-gray-800 to-transparent opacity-30" ></div>
                </div>
            </div>
  
            <div className="absolute inset-0 z-10">
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to bottom, ${color}, transparent)`) }}
                    className="absolute top-0 left-1/3 w-1 h-1/2 opacity-30" ></motion.div>
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to bottom, ${color}, transparent)`) }}
                    className="absolute top-0 right-1/3 w-1 h-1/2 opacity-30" ></motion.div>
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to top, ${color}, transparent)`) }}
                    className="absolute bottom-0 left-1/4 w-1 h-1/2 opacity-30" ></motion.div>
                <motion.div
                    style={{ background: useTransform(blueToGreen, (color) => `linear-gradient(to top, ${color}, transparent)`) }}
                    className="absolute bottom-0 right-1/4 w-1 h-1/2 opacity-30" ></motion.div>
            </div>
        </div>
    );
};

const LandingSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section
            ref={ref}
            className="w-full max-w-full min-h-[66vh] flex flex-col justify-center items-center overflow-hidden relative bg-gradient-to-b from-black to-gray-900"
        >
            {/* Inverted Background lines */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren" } },
                }}
            >
                <motion.div 
                    className="absolute top-0 left-1/4 w-0.5 bg-gradient-to-t from-green-500 to-transparent opacity-20"
                    variants={{
                        hidden: { height: 0 },
                        visible: { height: '100%', transition: { duration: 1.5, ease: "easeInOut" } },
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute top-0 right-1/4 w-0.5 bg-gradient-to-t from-green-500 to-transparent opacity-20"
                    variants={{
                        hidden: { height: 0 },
                        visible: { height: '100%', transition: { duration: 1.5, ease: "easeInOut", delay: 0.1 } },
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute top-1/4 left-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20"
                    variants={{
                        hidden: { width: 0 },
                        visible: { width: '100%', transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 } },
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute bottom-1/4 left-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20"
                    variants={{
                        hidden: { width: 0 },
                        visible: { width: '100%', transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } },
                    }}
                ></motion.div>
            </motion.div>

            {/* Content remains the same */}
            <motion.div 
                className="absolute top-8 left-8"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
                }}
            >
                <Camera className="text-gray-600" size={36} />
            </motion.div>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } },
                }}
                className="text-center mb-6 z-10"
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                    Spend your time
                </h1>
            </motion.div>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.6 } },
                }}
                className="text-center z-10"
            >
                <motion.h2
                    className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
                    animate={isInView ? {
                        scale: [1, 1.05, 1],
                        rotate: [0, 3, -3, 0],
                        textShadow: [
                            "0px 0px 6px rgba(0, 255, 0, 0.7)",
                            "0px 0px 12px rgba(0, 255, 0, 0.8)",
                            "0px 0px 6px rgba(0, 255, 0, 0.7)",
                        ],
                    } : {}}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                >
                    EFFICIENTLY
                </motion.h2>
            </motion.div>

            <motion.div 
                className="absolute bottom-8 right-8"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.7 } },
                }}
            >
                <Video className="text-gray-600" size={36} />
            </motion.div>

            {/* Inverted Additional decorative elements */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.8, when: "beforeChildren" } },
                }}
            >
                <motion.div 
                    className="absolute bottom-0 left-1/3 w-1 bg-gradient-to-t from-green-500 to-transparent opacity-30"
                    variants={{
                        hidden: { height: 0 },
                        visible: { height: '50%', transition: { duration: 1.5, ease: "easeInOut" } },
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute bottom-0 right-1/3 w-1 bg-gradient-to-t from-green-500 to-transparent opacity-30"
                    variants={{
                        hidden: { height: 0 },
                        visible: { height: '50%', transition: { duration: 1.5, ease: "easeInOut", delay: 0.1 } },
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute top-0 left-1/4 w-1 bg-gradient-to-b from-green-500 to-transparent opacity-30"
                    variants={{
                        hidden: { height: 0 },
                        visible: { height: '50%', transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 } },
                    }}
                ></motion.div>
                <motion.div 
                    className="absolute top-0 right-1/4 w-1 bg-gradient-to-b from-green-500 to-transparent opacity-30"
                    variants={{
                        hidden: { height: 0 },
                        visible: { height: '50%', transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } },
                    }}
                ></motion.div>
            </motion.div>
        </section>
    );
};

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const contentRefs = useRef([]);
  const features = [
    {
      icon: <ZapIcon size={64} />,
      title: "Lightning Fast",
      miniFeatures: [
        { icon: <BoltIcon size={48} />, description: "Quick Load" },
        { icon: <ServerIcon size={48} />, description: "Optimized Backend" },
        { icon: <CloudIcon size={48} />, description: "Cloud Acceleration" },
        { icon: <DatabaseIcon size={48} />, description: "Efficient Caching" },
      ],
    },
    {
      icon: <LayersIcon size={64} />,
      title: "Scalable",
      miniFeatures: [
        { icon: <ServerIcon size={48} />, description: "Elastic Infrastructure" },
        { icon: <UsersIcon size={48} />, description: "Multi-tenant Support" },
        { icon: <SettingsIcon size={48} />, description: "Easy Configuration" },
        { icon: <TrendingUpIcon size={48} />, description: "Growth Ready" },
      ],
    },
    {
      icon: <ShieldIcon size={64} />,
      title: "Secure",
      miniFeatures: [
        { icon: <LockIcon size={48} />, description: "End-to-end Encryption" },
        { icon: <ShieldIcon size={48} />, description: "Advanced Firewall" },
        { icon: <UsersIcon size={48} />, description: "User Authentication" },
        { icon: <RefreshCwIcon size={48} />, description: "Regular Updates" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const relativeScrollPosition = scrollPosition - sectionTop;

      let newActiveFeature = 0;
      cardRefs.current.forEach((card, index) => {
        if (card && relativeScrollPosition >= card.offsetTop) {
          newActiveFeature = index;
        }
      });

      setActiveFeature(newActiveFeature);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="w-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center">
        {features.map((feature, index) => (
          <div key={index} className="w-full flex flex-col lg:flex-row items-start justify-center mb-24 last:mb-0">
            <motion.div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`w-full lg:w-1/3 flex flex-col items-center p-4 rounded-lg transition-colors border-2 ${
                activeFeature === index
                  ? "bg-gray-900 border-green-500"
                  : "bg-black border-gray-700"
              } sticky top-24`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: activeFeature === index ? 1 : 0.5, 
                y: 0,
                scale: activeFeature === index ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-green-500">
                {feature.icon}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
            <motion.div
              ref={(el) => (contentRefs.current[index] = el)}
              className="w-full lg:w-2/3 p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden flex flex-col justify-center shadow-lg mt-8 lg:mt-0 lg:ml-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: activeFeature === index ? 1 : 0, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xl font-medium text-center text-gray-200 mb-8">
                <div className="flex justify-center mb-4 text-green-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-12">
                {feature.miniFeatures.map((miniFeature, miniIndex) => (
                  <motion.div
                    key={miniIndex}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: miniIndex * 0.1 }}
                  >
                    <div className="text-green-500 mb-4">{miniFeature.icon}</div>
                    <p className="text-sm text-gray-400 text-center">{miniFeature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;