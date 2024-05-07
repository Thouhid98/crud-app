import React from 'react';

const EditTopicForm = ({id}) => {

    const removeTopic = async () => {

        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`)
            
    }

    return (
        <div>
            <form className='flex flex-col gap-3'>
                <input type="text" placeholder='Topic Title' className='border border-slate-400 px-8 py-3' />

                <input type="text" placeholder='Topic Description' className='border border-slate-400 px-8 py-3' />

                <button className='font-bold text-white bg-green-800 px-6 py-3 w-fit'>Update Topic</button>
            </form>
        </div>
    );
};

export default EditTopicForm; <h2>Edit form</h2>