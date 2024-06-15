import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data , reference}) => {
    return (
        <>
            <motion.div 
            drag dragConstraints={reference} 
            whileDrag={{scale:1.2}} 
            className=' overflow-hidden flex-shrink-0 relative w-60 h-80 bg-zinc-300 text-zinc-800 font-semibold py-10 px-5 rounded-[45px]'>
                <FaRegFileLines />
                <p className='text-sm mt-5 leading-tight'>{data.desc}</p>
                <footer className='absolute bottom-0 w-full  left-0'>
                    <div className='flex items-center justify-between  px-8 py-3 mb-3'>
                        <h1>{data.filesize}</h1>
                        <span className='h-6 w-6 bg-sky-800 rounded-full flex items-center justify-center'>
                            {
                                data.close ? <IoClose color='white' /> : <MdOutlineFileDownload size='.9em' color='white' />
                            }

                        </span>

                    </div>
                    {
                        data.tagDetails.isOpen && (
                            <div className={`w-full py-4 ${data.tagDetails.tagColor === "green" ? "bg-green-300" : "bg-blue-300"} flex items-center justify-center`}>
                                <h3 className='text-md '>{data.tagDetails.tagTitle}</h3>
                            </div>
                        )
                    }

                </footer>
            </motion.div>
        </>
    )
}

export default Card