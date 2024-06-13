import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TextSpan = ({ children }) => {
    const controls = useAnimation();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand = () => {
        controls.start({
            scale: [1, 1.4, 0.75, 1.25, 0.9, 1],
            transition: {
                times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
                duration: 1.5 // Adjust the duration as needed
            }
        }).then(() => {
            setIsPlaying(false);
        });
        setIsPlaying(true);
    };

    return (
        <motion.span
            animate={controls}
            onMouseOver={() => {
                if (!isPlaying) {
                    rubberBand();
                }
            }}
        >
            {children}
        </motion.span>
    );
};

export default TextSpan;


