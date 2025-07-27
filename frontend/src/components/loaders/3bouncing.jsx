import { motion } from "motion/react"
export default function BouncingLoader(){
    const ballStyle=()=>{
        return ("bg-gradient-to-b from-orange-600 to-orange-400 border border-orange-600 rounded-full h-5 w-5")
    }
    const transition=(x)=>{
        return {
                duration:1,
                repeat:Infinity,
                repeatType:"loop",
                delay:x
            }
    }
    return(
        <div className=" w-screen h-screen relative">
        <div className="flex gap-2 mt-[20%] ml-[47%] absolute">
            <motion.div 
            initial={{
                y:0,
            }}
            animate={{
                y:[0,20,0],
            }}
            transition={transition(0)} 
            className={ballStyle()}></motion.div>
            <motion.div
            initial={{
                y:0
            }}
            animate={{
                y:[0,20,0]
            }}
            transition={transition(0.2)}
            className={ballStyle()}></motion.div>
            <motion.div
            initial={{
                y:0
            }}
            animate={{
                y:[0,20,0]
            }}
            transition={transition(0.4)} 
            className={ballStyle()}></motion.div>
        </div>
        </div>
    )
}