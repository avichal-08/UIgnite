import { motion } from "motion/react"
export default function HorizontalTranslation1(){
    const loaderStyle=(x)=>{
        return(`-translate-x-${x} shadow-md bg-gradient-to-b from-neutral-400 to-neutral-200 rounded-full w-7 h-7`)
    }
    const loaderTransition=()=>{
        return{
                duration:2,
                repeat:Infinity,
                repeatType:"loop",
                
        }
    }
    return(
        <div className=" w-screen h-screen relative">
            <div className="flex gap-2 mt-[20%] ml-[47%] absolute">
                <motion.div className={loaderStyle(0)}
                initial={{
                    x:0
                }}
                animate={{
                    x:[0,-5,0,10]
                }}
                transition={loaderTransition()} ></motion.div>
                <motion.div className={loaderStyle(5)}
                initial={{
                    x:0
                }}
                animate={{
                    x:[0,15,0,-20]
                }}
                transition={loaderTransition()} ></motion.div>
                <motion.div className={loaderStyle(10)}
                initial={{
                    x:0
                }}
                animate={{
                    x:[0,30,0,-40]
                }}
                transition={loaderTransition()} ></motion.div>
            </div>
        </div>
    )
}