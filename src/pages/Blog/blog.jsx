import "./blog.css";

const Blog = () => {
    return (
        <>
        <section className="blog">
            <h1>Blog</h1>
            <span></span>
            <div className="blog__cards">
                <div className="blog__card">
                    <img src="/blog1.jpg" alt="" />
                    <h5>It Park | Aug 28, 2025 </h5>
                    <h2>Get Certifiticate by It Park</h2>
                    <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
                </div>
                <div className="blog__card">
                    <img src="/blog2.jpg" alt="" />
                    <h5>Meta | May 31, 2025 </h5>
                    <h2>Get Certifiticate by Meta</h2>
                    <p>This day i get my meta frontend programming certificate. This is a great achievement for me.</p>
                </div>
                <div className="blog__card">
                    <img src="/scrimba.jpg" alt="" />
                    <h5>Scrimba | Jan 23, 2026 </h5>
                    <h2>Get Certifiticate by Scrimba</h2>
                    <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
                </div>
                <div className="blog__card">
                    <img src="/soon.jpg" alt="" />
                    <h5>It Park | May 31, 2025 </h5>
                    <h2>Get Certifiticate by It</h2>
                    <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
                </div>
                <div className="blog__card">
                    <img src="/soon.jpg" alt="" />
                    <h5>It Park | May 31, 2025 </h5>
                    <h2>Get Certifiticate by It</h2>
                    <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
                </div>
                <div className="blog__card">
                    <img src="/soon.jpg" alt="" />
                    <h5>It Park | May 31, 2025 </h5>
                    <h2>Get Certifiticate by It</h2>
                    <p>This day i get my frontend programming certificate. This is a great achievement for me.</p>
                </div>
            </div>
        </section>
    </>
    );
}
export default Blog;