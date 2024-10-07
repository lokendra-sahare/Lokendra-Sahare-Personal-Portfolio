import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "MERN Chat App",
      img: "https://img.freepik.com/free-vector/hand-holding-mobile-phone-with-online-messages-flat-vector-illustration-modern-smartphone-screen-with-chat-communication-conversation-concept_74855-8211.jpg?size=626&ext=jpg&ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A MERN chat app allows users to send real-time messages with features like user authentication, chat rooms, and notifications. It uses MongoDB for data storage, Express for server logic, React for the frontend, and Node.js for the backend.",
      link: "https://chit-chat-app-cn8e.onrender.com",
      link2: "https://github.com/lokendra-sahare/mern-chat-application",
    },
    {
      id: 2,
      title: "Cooking Blog App",
      img: "https://img.freepik.com/free-vector/landing-page-happy-woman-grilling-barbecue-meat-female-chef-apron-holding-spatula-cooking-garden-flat-vector-illustration-bbq-party-summer-food-concept_74855-8407.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A MERN cooking blog and recipe search app enables users to browse, search, and share recipes. It uses MongoDB for data, Express for backend, React for frontend, and Node.js for server-side logic.",
      link: "https://foodie-friends.netlify.app/",
      link2: "https://github.com/lokendra-sahare/recipe-blog-app",
    },
    {
      id: 3,
      title: "Nike Clone",
      img: "https://image0.commarts.com/images1/0/8/9/7/798021_102_1160_MTczOTQwMDY5MTE4MzI3NTUwNzA.jpg",
      desc: "A Nike clone built with React and Tailwind CSS replicates the design and functionality of the Nike website, featuring responsive layouts, dynamic product pages, and modern UI elements for an enhanced shopping experience.",
      link: "https://nike-landing-page-68jz.onrender.com",
      link2:
        "https://github.com/lokendra-sahare/nike-landing-page-using-react-and-tailwindCSS",
    },
    {
      id: 4,
      title: "Weather And Music Integrated App",
      img: "https://img.freepik.com/premium-photo/create-modern-weather-app-interface-image_1008415-70861.jpg?size=626&ext=jpg&ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A Weather and Music Integrated App built with HTML, CSS, and JavaScript displays real-time weather updates and suggests music playlists based on current weather conditions for an enhanced experience.",
      link: "https://weathringg.netlify.app",
      link2:
        "https://drive.google.com/file/d/1H89Lb7AOJ-2_fMNrWFEZ9NwuK5CYNek9/view?usp=drive_link",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

    return (
      <motion.section ref={ref}>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer">
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y: y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <div className="buttons">
                <a href={`${item.link}`} target="_blank">
                  <button>See Demo</button>
                </a>
                <a href={`${item.link2}`} target="_blank">
                  <button>View Code</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id}></Single>;
      })}
    </div>
  );
};
