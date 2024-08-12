import { motion } from "framer-motion";

function Heart() {
  return (
    <div >
      <motion.div
        className="heart"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        
      >
        <span className="heart-text">.NET</span>
        </motion.div>
    </div>
  );
}

export default Heart;
