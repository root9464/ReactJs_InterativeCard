import { motion } from "framer-motion";
import style from "./card.module.sass";
import { CardProps } from "./type";

export const Card = ({ title, text, icon, isOpen, onClick }: CardProps): JSX.Element => {

    return (
        <motion.div
            className={style.block}
            layout
            transition={{ duration: 0.3 }}
            initial={{ borderRadius: 24 }}
            data-isOpen={isOpen}
            onClick={onClick}>
            <motion.div layout>
                <motion.div layout="position" className={style.title}>
                    <img src={icon} alt="" />
                    <h3>{title}</h3>
                </motion.div>

             
                <motion.div layout className={style.text}>
                    {
                        isOpen ? (
                            <motion.p layout="position" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01]}}>{text}</motion.p>
                        ): null
                    }
                </motion.div>


            </motion.div>
        </motion.div>
    )
}