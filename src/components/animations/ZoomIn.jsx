"use client"
import { motion } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

const variants = () => ({
    hidden: { scale: 0 },
    visible: { scale: 1 }
});

export default function ZoomIn({ children, className, ...props }) {
    const { fmaosConfig } = useFmaosConfig();

    return (
        <motion.div
            className={className}
            variants={props.variants ?? variants(fmaosConfig.initialOffset)}
            initial={props.initial ?? "hidden"}
            whileInView={props.whileInView ?? "visible"}
            transition={props.transition ?? fmaosConfig.transition}
            viewport={props.viewport ?? fmaosConfig.viewport}
            {...props}
        >
            {children}
        </motion.div>
    );
}
