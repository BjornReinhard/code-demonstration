import React from 'react';
import styles from "./HomePage.module.css";
import {motion} from "framer-motion";
import {TransitionDefinition} from "framer-motion/types/types";
import {PageHeader} from "./components";

const mainTransition = {
    type: "spring",
    ease: "easeOut",
    duration: 1,
    delay: 0.85,
    bounce: 0.25
} as TransitionDefinition;

export function HomePage() {
    return <motion.main initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={mainTransition}
                        className={styles.main} role="main">
        <PageHeader/>
    </motion.main>
}
