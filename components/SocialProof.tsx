"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { STATS } from "@/constants";

const SocialProof = memo(function SocialProof() {
  return (
    <section id="testimonials" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="card-hover rounded-2xl p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
});

SocialProof.displayName = "SocialProof";

export default SocialProof;
