import "./resume.css";

const Resume = () => {
    return (
        <section className="resume">
            <div className="resume-header">
                <h1>Resume</h1>
                <span />
            </div>

            <div className="resume-columns">
                <div className="resume-block">
                    <div className="section-header">
                        <span className="section-icon">📖</span>
                        <h2>Education</h2>
                    </div>
                    <div className="timeline">
                        <article className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <h3>High School</h3>
                                <p className="date">2017 ➡️ 2028</p>
                                <p>Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus</p>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <h3>Frontend with It Park</h3>
                                <p className="date">2024 ➡️ 2025</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate, quia voluptas mag odit aut fugit</p>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <h3>The Intelectuals</h3>
                                <p className="date">2025 ➡️ 2027</p>
                                <p>Nemo enim ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti</p>
                            </div>
                        </article>
                    </div>
                </div>

                {/* <div className="resume-block">
                    <div className="section-header">
                        <span className="section-icon">📘</span>
                        <h2>Experience</h2>
                    </div>
                    <div className="timeline">
                        <article className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <h3>Creative Director</h3>
                                <p className="date">2015 1 Present</p>
                                <p>Nemo enim ipsam voluptatem blanditiis praesentium voluptatum delenit atque corrupti</p>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <h3>Art Director</h3>
                                <p className="date">2013 1 2015</p>
                                <p>Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti</p>
                            </div>
                        </article>
                        <article className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <h3>Web Designer</h3>
                                <p className="date">2010 1 2013</p>
                                <p>Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti</p>
                            </div>
                        </article>
                    </div>
                </div> */}
            </div>

            <div className="skills">
                <h1>My Skills</h1>
                <div className="skill__content">
                    <div className="html">
                        <h3>HTML</h3>
                        <div className="uno">
                            <span></span>
                            <p>95%</p>
                        </div>
                    </div>
                    <div className="css">
                        <h3>CSS</h3>
                        <div className="uno">
                            <span></span>
                            <p>75%</p>
                        </div>
                    </div>
                    <div className="js">    
                        <h3>JavaScript</h3>
                        <div className="uno">
                            <span></span>
                            <p>60%</p>
                        </div>
                    </div>
                    <div className="react">
                        <h3>React</h3>
                        <div className="uno">
                            <span></span>
                            <p>50%</p>
                        </div>
                    </div>
                    <div className="figma">
                        <h3>Figma</h3>
                        <div className="uno">
                            <span></span>
                            <p>65%</p>
                        </div>
                    </div>
                    <div className="typescript">
                        <h3>TypeScript</h3>
                        <div className="uno">
                            <span></span>
                            <p>35%</p>
                        </div>
                    </div>
                   
                    <div className="bootstrap">
                        <h3>Bootstrap</h3>
                        <div className="uno">
                            <span></span>
                            <p>65%</p>
                        </div>
                    </div>
                    
                    <div className="github">
                        <h3>GitHub</h3>
                        <div className="uno">
                            <span></span>
                            <p>75%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default Resume;
