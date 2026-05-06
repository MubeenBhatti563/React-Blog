import React from 'react'

const Post = ({ title, desc, setTitle, setDesc, newPost }) => {
    return (
        <form
            onSubmit={(e) => {e.preventDefault(); newPost();}}
            className="w-[550px] max-w-[90%] mx-auto mt-8 p-6 rounded-2xl 
                       shadow-[4px_4px_12px_rgba(0,0,0,0.3)] 
                       bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600 
                       backdrop-blur-md transition-all duration-300 hover:shadow-[6px_6px_16px_rgba(0,0,0,0.4)]"
        >
            <h1 className="text-center text-2xl font-semibold mb-6 text-white tracking-wide">
                Create a New Post
            </h1>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-lg font-medium text-purple-200">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title..."
                        required
                        className="rounded-md px-3 py-2 bg-slate-900 text-white 
                                   placeholder-slate-400 outline-none border border-slate-700 
                                   focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="desc" className="text-lg font-medium text-purple-200">
                        Description
                    </label>
                    <textarea
                        id="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Write something amazing..."
                        rows={5}
                        required
                        className="resize-none rounded-md px-3 py-2 bg-slate-900 text-white 
                                   placeholder-slate-400 outline-none border border-slate-700 
                                   focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                className="mt-6 w-full py-2.5 rounded-md text-lg font-semibold text-white 
                           bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 
                           transition-all duration-300 shadow-md hover:shadow-lg"
            >
                Create
            </button>
        </form>
    )
}

export default Post