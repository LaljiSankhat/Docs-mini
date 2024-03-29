import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        className="w-60 flex-shrink-0 relative h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full   left-0">
          <div className="flex justify-between items-center py-3 px-8 mb-3">
            <h4>{data.filesize}</h4>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
