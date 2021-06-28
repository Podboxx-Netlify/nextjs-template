import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Moment from 'moment';

interface Post {
    id: number
    title?: string
    description?: string
    blog_content?: string
    publication_date?: string
    img_url?: string
}

const PostCard: React.FC<{ data: Post }> = ({data}) => {
    return (
        <>
            <div
                className="flex flex-col sm:flex-row p-2 w-auto lg:w-full sm:p-4 h-auto sm:h-56 lg:rounded-2xl red-shadow gap-5 select-none bg-gray-300 dark:bg-gray-500 dark:bg-cards-dark">
                <Image objectFit='cover' className='rounded-xl' alt={data.title + ' image'} src={data.img_url}
                       quality='60' height='h-48 sm:h-48' width='sm:w-48' unoptimized={true}/>
                <div className="flex sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-lg font-semibold dark:text-gray-300 line-clamp-3 overflow-hidden overflow-ellipsis">
                        {data.title}
                    </h1>
                    <p className="dark:text-gray-400 text-black text-sm sm:text-base">
                        {Moment.utc(data.publication_date).format('MMMM D YYYY')}
                    </p>
                    <div className="flex gap-5 mt-auto">
                        <button
                            className='ml-auto flex items-center gap-3 sm:text-lg border-2 border-red-900 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors focus:bg-gray-300 focus:outline-none focus-visible:border-gray-500'
                        >
                            <Link href={{pathname: '/post/[id]', query: {id: data.id}}}><a
                                className='dark:text-gray-300 hover:text-red-500'>View episode</a></Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
);
}
export default PostCard