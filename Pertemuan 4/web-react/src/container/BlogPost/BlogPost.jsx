import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {
    render() {
        return(
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
            </div>
        )
    }
}

export default BlogPost;