import { motion } from "motion/react"
export default function FullCircle(){
    return(
        <div className=" w-screen h-screen relative">
            <div className=" mt-[20%] ml-[47%] absolute">
                    <motion.svg  
                    xmlns="http://www.w3.org/2000/svg"  
                    width="40"  
                    height="40"  
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="currentColor"  
                    stroke-width="1.5"  
                    stroke-linecap="round"  
                    stroke-linejoin="round"  
                    class="icon icon-tabler icons-tabler-outline icon-tabler-circle">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <motion.path 
                    initial={{pathLength:0}}
                    animate={{pathLength:1}}
                    transition={{
                            duration:1,
                            repeat:Infinity,
                            repeatType:"loop",
                            // repeatType:"reverse" <=Give it a try
                            }}
                    d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></motion.svg>
            </div>
        </div>
    )
}