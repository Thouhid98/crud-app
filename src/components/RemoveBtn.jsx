"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn =  ({ id }) => {
    const router = useRouter()
    const removeTopic = async () => {
        const confirmed = confirm("Are You Sure?")
        if (confirmed) {
           const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
               method:"DELETE" 
            })
            if(res.ok){
                router.refresh()
            }
        }
    }
    return (
        <div>
            <button onClick={removeTopic} className='text-red-500'><HiOutlineTrash size={24} /></button>
        </div>
    );
};

export default RemoveBtn;