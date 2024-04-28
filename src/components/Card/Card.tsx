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
                {
                    isOpen? (
                        <motion.div layout className={style.text}>
                            <motion.p layout="preserve-aspect">{text}</motion.p>
                        </motion.div>
                    ) : null
                }
            </motion.div>
        </motion.div>
    )
}