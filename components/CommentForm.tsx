import React, { useEffect, useState, useRef } from 'react'
import { submitComment } from '$services';


const CommentForm = ({ slug }: any) => {

    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const commentEl = useRef<any>();
    const nameEl = useRef<any>();
    const emailEl = useRef<any>();
    const storeDataEl = useRef<any>();

    useEffect(() => {
      nameEl.current.value = window.localStorage.getItem('name');
      emailEl.current.value = window.localStorage.getItem('email');
    }, [])
    

    const handleCommentSubmission = () => {
        setError(false);
        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if (!name || ! comment || !email){
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug };
        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'> Add a comment </h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea
                ref={commentEl}
                placeholder='comment'
                name='comment'
                className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
                <input 
                type="text"
                ref={nameEl}
                placeholder='name'
                name='name'
                className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                />
                <input 
                type="text"
                ref={emailEl}
                placeholder='email'
                name='email'
                className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4 ml-1'>
                <div>
                    <input ref={storeDataEl} type="checkbox" name="storeData" id="storeData" value="true" />
                    <label htmlFor="storeData" className='text-gray-500 cursor-pointer ml-2'>save my email and name</label>
                </div>
            </div>
            { error && <p className='text-xs text-red-500 ml-1'>All fields are required</p> }
            <div className='mt-8'>
                <button 
                type='button' 
                onClick={handleCommentSubmission}
                className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'>
                    Submit Comment
                </button>
                {showSuccessMessage && <span className='text-xs float-right font-semibold mt-3 text-green-500'> Comment submitted for review </span> }
            </div>
        </div>
    )
}

export default CommentForm