import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Posts} from "./pages/posts/Posts";
import {PostsDetail} from "./pages/posts/PostsDetail";
import {Notfound} from "./pages/Notfound";
import {NewPosts} from "./pages/posts/NewPosts";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Posts/>}/>
                <Route path="/posts/:postId" element={<PostsDetail/>}/>
                <Route path="/posts/new" element={<NewPosts/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Route>
        </Routes>
    );
}


export default App;