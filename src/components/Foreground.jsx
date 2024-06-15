import React, { useRef, useState } from 'react'

import Card from './Card'
const Foreground = () => {

    const ref = useRef(null)
    const data = [
        {
            desc : "My name is Himangshu Nayak",
            filesize : "0.9 mb",
            close : true,
            tagDetails : {
                isOpen : true,
                tagTitle : "Download now",
                tagColor : "green"
            },
        },
        {
            desc : "My name is Himangshu Nayak",
            filesize : "0.9 mb",
            close : true,
            tagDetails : {
                isOpen : true,
                tagTitle : "Download now",
                tagColor : "pink"
            },
        },
        {
            desc : "My name is Himangshu Nayak",
            filesize : "0.9 mb",
            close : true,
            tagDetails : {
                isOpen : true,
                tagTitle : "Download now",
                tagColor : "green"
            },
        },
    ]
    useState()
    return (
        <>
            <div ref = {ref} className='fixed flex gap-10 flex-wrap p-5 top-0 left-0 z-[3] w-full h-full'>
                {data.map((item, index) => (
                    <Card  reference = {ref} data = {item}/>
                ))}
            </div>
        </>
    )
}

export default Foreground