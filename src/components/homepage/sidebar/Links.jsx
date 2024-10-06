import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // Use useLocation for detecting the current route

const Links = ({ setOpen }) => {
  const location = useLocation(); // Get the current route location

  const items = [
    { name: "Homepage", route: "/" },
    { name: "About Me", id: "#About" },
    { name: "Latest Projects", id: "#Portfolio" },
    { name: "All Projects", route: "/all-projects" },
    { name: "Contact", id: "#Contact" },
  ];

  const handleClick = (item) => {
    // If on the homepage and the homepage link is clicked, scroll to the top
    if (item.name === "Homepage" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Close the sidebar after click
    setOpen(false);
  };

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.route ? (
            <Link
              to={item.route}
              onClick={() => {
                handleClick(item); // Handle navigation and scrolling logic
              }}
            >
              {item.name}
            </Link>
          ) : (
            <a
              href={item.id}
              onClick={() => {
                handleClick(item); // Handle sidebar close on in-page scroll
              }}
            >
              {item.name}
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
