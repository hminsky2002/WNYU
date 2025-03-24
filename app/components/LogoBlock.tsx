'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoBlock() {
  return (
    <div className="hidden md:flex">
      <motion.div
        className="size-7"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
          delay: 3,
        }}
      >
        <Image
          src="/wnyuLogo.png"
          width={250}
          height={250}
          alt="logo"
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
