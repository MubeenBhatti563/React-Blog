import React from 'react'
import { Link } from 'react-router-dom'

const Content = ({ posts }) => {
    const hasPosts = posts && posts.length > 0

    return (
        <section className="w-[90%] mx-auto mt-10 p-4">
            <h3
                className={`text-3xl font-semibold text-center mb-8 tracking-wide ${hasPosts ? 'text-purple-700' : 'text-red-500'
                    }`}
            >
                {hasPosts ? 'Latest Posts' : 'No Posts Yet'}
            </h3>

            {hasPosts && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-700 
                                       border border-purple-500/20 rounded-2xl p-6 flex flex-col justify-between
                                       shadow-[4px_4px_12px_rgba(0,0,0,0.3)] 
                                       hover:shadow-[6px_6px_18px_rgba(128,90,213,0.4)] 
                                       transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">{post.title}</h3>
                                <p className="text-purple-200 leading-relaxed">
                                    {post.description.slice(0, 120)}...
                                </p>
                            </div>

                            <div className="flex items-center justify-end mt-6">
                                <Link
                                    to={`/post/${post.id}`}
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 
                                               hover:from-indigo-400 hover:to-purple-500
                                               text-white py-1.5 px-4 rounded-md text-sm font-medium
                                               shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Content