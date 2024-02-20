import "./Blog.css";
import BlogItem from "./BlogItem";
import postsImage1 from "../../assets/images/post-1.jpg";
import postsImage2 from "../../assets/images/post-2.jpg";
import postsImage3 from "../../assets/images/post-3.jpg";

function Blog() {
  let blogs = [
    {
      blogTitle: "post title 1",
      blogImage: postsImage1,
      blogInfo:
        "Lorem ipsum dour perferendis eum non proviLorem ipsum dolor sit amet consectetur perferendis eum non provi",
      blogAuthor: "React",
      blogTime: "9",
    },
    {
      blogTitle: "post title 1",
      blogImage: postsImage2,
      blogInfo:
        "Lorem ipsum dour perferendis eum non proviLorem ipsum dolor sit amet consectetur perferendis eum non provi",
      blogAuthor: "Javascript",
      blogTime: "6",
    },
    {
      blogTitle: "post title 1",
      blogImage: postsImage3,
      blogInfo:
        "Lorem ipsum dour perferendis eum non proviLorem ipsum dolor sit amet consectetur perferendis eum non provi",
      blogAuthor: "Css",
      blogTime: "3",
    },
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]}></BlogItem>
          <BlogItem {...blogs[1]}></BlogItem>
          <BlogItem {...blogs[2]}></BlogItem>
        </div>
      </div>
    </section>
  );
}

export default Blog;
