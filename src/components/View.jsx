import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const View = ({ posts, deletePost, navigate }) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        if (posts.length > 0) {
            const found = posts.find(p => p.id === id)
            setPost(found)
        }
    }, [id, posts])

    if (posts.length === 0) {
        return <p className="text-center text-purple-400 mt-10 text-lg">Loading posts...</p>
    }

    if (!post) {
        return <p className="text-center text-red-400 mt-10 text-lg">Post not found 😢</p>
    }

    const handleDelete = async () => {
        await deletePost(post.id);
        setShowConfirm(false);
        navigate('/');
    }

    return (
        <section className="w-[90%] sm:w-[70%] md:w-[60%] mx-auto mt-12 p-6">
            <div className="bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-700 
                            border border-purple-500/20 rounded-2xl p-8 shadow-[4px_4px_16px_rgba(0,0,0,0.3)] 
                            hover:shadow-[6px_6px_20px_rgba(128,90,213,0.4)] transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                <p className="text-purple-200 leading-relaxed mb-8 text-lg">{post.description}</p>

                <div className="flex items-center justify-between">
                    <Link to={`/edit/${post.id}`} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 
                                       text-white py-2 px-5 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg">
                        Edit
                    </Link>
                    <button onClick={() => setShowConfirm(true)} className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 
                                       text-white py-2 px-5 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg">
                        Delete
                    </button>
                </div>
            </div>

            <div className="text-center mt-6">
                <Link
                    to="/"
                    className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-all"
                >
                    ← Back to Posts
                </Link>
            </div>

            {showConfirm && (
                <div className='absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
                    <div className='bg-white rounded-lg p-6 w-[90%] sm:w-[400px] text-center shadow-lg'>
                        <h2 className='text-xl font-semibold mb-3 text-gray-800'>Confirm Delete</h2>
                        <p className='text-gray-600 mb-6'>
                            Do you really want to delete <span className='font-bold'>{post.title}</span>?
                        </p>
                        <div className='flex justify-center gap-4'>
                            <button
                                onClick={handleDelete}
                                className='bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md'
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setShowConfirm(false)}
                                className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default View