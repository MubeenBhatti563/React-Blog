import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/Navbar';
import Content from './components/Content';
import View from './components/View';
import Post from './components/Post';
import Edit from './components/Edit';

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3500/posts");
        setPosts(res.data);
        setAllPosts(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, []);

  useEffect(() => {
    if (search.trim() === '') {
      setPosts(allPosts);
    } else {
      const filtered = allPosts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
      setPosts(filtered);
    }
  }, [search, allPosts]);

  const newPost = async () => {
    const id = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const newItem = { id: id.toString(), title: title, description: desc };
    try {
      await axios.post('http://localhost:3500/posts', newItem);
      setPosts([...posts, newItem]);
      setTitle('');
      setDesc('');
    } catch (err) {
      alert("An Error occurred: ", err);
    }
    navigate('/');
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/posts/${id}`);
      setPosts(posts.filter(p => p.id !== id));
      navigate('/');
      alert("Post deleted successfully!");
    } catch (err) {
      alert("Item can't be deleted!", err);
    }
  }

  const editPost = async (id) => {
    const updatePost = { id: id, title: editTitle, description: editDesc }
    try {
      await axios.put(`http://localhost:3500/posts/${id}`, updatePost);
      setPosts(posts.map(p => (p.id === id ? updatePost : p)));
      navigate(`/post/${id}`);
    } catch (err) {
      alert(`An error occured: ${err.error}`)
    }
  }

  return (
    <div className='bg-slate-900 min-h-[100vh]'>
      <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-violet-800 to-violet-600 py-4 text-center shadow-lg tracking-wide">BlogApp</h1>
      <Navbar search={search} setSearch={setSearch} />
      <Routes >
        <Route path="/" element={<Content posts={posts} />} />
        <Route path="/post/:id"
          element={
            <View
              posts={posts}
              deletePost={deletePost}
              navigate={navigate}
            />}
        />
        <Route
          path="/post/"
          element={
            <Post
              title={title}
              setTitle={setTitle}
              desc={desc}
              setDesc={setDesc}
              newPost={newPost}
            />}
        />
        <Route
          path='/edit/:id'
          element={
            <Edit
              editTitle={editTitle}
              editDesc={editDesc}
              setEditTitle={setEditTitle}
              setEditDesc={setEditDesc}
              posts={posts}
              editPost={editPost}
            />}
        />
      </Routes>
    </div>
  )
}

export default App