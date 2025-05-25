// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="relative w-24 h-24">
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-t-4 border-purple-700"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />
        {/* Static center with text */}
        <div className="absolute inset-3 rounded-full bg-gray-900 flex items-center justify-center">
          <span className="text-purple-700 font-semibold text-sm animate-pulse tracking-wide">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
