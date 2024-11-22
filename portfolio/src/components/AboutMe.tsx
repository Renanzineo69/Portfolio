import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Sobre Mim</h1>
      <p className="mt-4">
        Sou um desenvolvedor apaixonado por criar experiências web incríveis!
      </p>
    </motion.div>
  );
}
