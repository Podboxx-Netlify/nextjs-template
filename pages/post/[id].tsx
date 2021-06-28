import {GetServerSideProps} from 'next'
import React from "react";
import {useRouter} from "next/router";

interface Data {
    title: string
    blog_content?: string
    description?: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${process.env.station_id}/podcast/${context.query.id}`)
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/${context.query.id}`)
    if (res.status !== 200) {
        const data = {}
        return {
            props: {
                data,
            },
        }
    } else {
        const data: Data = await res.json()
        return {
            props: {
                data,
            },
        }
    }
}

const Post: React.FC<{ data: Data }> = ({data}) => {
    const router = useRouter()
    return (
        <>
            <div
                className="w-full md:rounded-2xl shadow-lg flex flex-col sm:flex-col select-none gap-4"
                style={{backgroundColor: '#292d35'}}>
                <button
                    className="text-left p-5 w-28 font-bold text-gray-300 text-lg hover:text-red-500 focus:outline-none"
                    onClick={() => router.back()}>Go Back
                </button>
                <article className="prose prose-sm sm:prose lg:prose-lg  mx-auto ">
                    <h1 className='text-center capitalize'>{data.title || 'Error loading the episode'}</h1>
                    {data.blog_content !== null &&
                    <div
                        dangerouslySetInnerHTML={{__html: data.blog_content}}/>
                    }
                </article>
                <br/>
                {data.title &&
                <iframe className='sm:m-4' height='300'
                        src={"https://player.podboxx.com/" + router.query.id}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                }
            </div>
        </>
    )
}


export default Post