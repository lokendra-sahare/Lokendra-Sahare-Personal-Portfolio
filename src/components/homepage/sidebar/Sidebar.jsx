import "./Sidebar.scss";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const [open, setOpen] = useState(false); // Sidebar open state

  const getClipPath = () => {
    return "circle(30px at 42px 45px)";
  };

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: getClipPath(), // Adjust clipPath based on screen width
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      initial={false} // Don't animate on first render
      animate={open ? "open" : "closed"} // Sidebar open/close animation
      style={{ backgroundColor: open ? "white" : "#00ff99" }} // Background color change based on state
    >
      <motion.div className="bg" variants={variants}>
        {/* Pass setOpen to Links to allow closing the sidebar */}
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />{" "}
      {/* Toggle button to open/close sidebar */}
    </motion.div>
  );
};
