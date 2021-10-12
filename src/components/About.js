import React from 'react';
import { Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <Row className="justify-content-center about" id="about">
            <Col xs={12} sm={12} md={12} lg={5} className="me m-3 p-3"></Col>
            <Col xs={12} sm={12} md={12} lg={6} className="bg-dark">
                <h1 className="text-light"> @About Me</h1>
                <p className="comment">About /&gt;</p>
                <div data-line-nr="01" className="code-l">
                    <div className="methods">className</div>
                    <span className="propname">Gamze Umac</span>""</div>
                <div data-line-nr="02" className="code-l">
                    <div className="dot">··</div>
                    <div className="comment">// I'm a high-spirited, avid learner,</div>
                </div>
                <div data-line-nr="03" className="code-l">
                    <div className="dot">··</div>
                    <div className="comment"> // thrilled to be part of the tech community!</div>
                </div>
                <div data-line-nr="04" className="code-l">
                    <div className="dot">··</div>
                    <div className="methods">constructor</div>"()</div>
                <div data-line-nr="05" className="code-l">
                    <div className="dot">····</div>
                    <span className="scope">this</span>.<span className="prop2">name</span>
                    <span className="scope">=</span>
                    <span className="string">'Gamze Umac'</span>
                </div>
                <div data-line-nr="06" className="code-l">
                    <div className="dot">····</div>
                    <span className="scope">this</span>.<span className="prop2"
                    >dateOfBirth</span
                    >
                    <span className="scope">=</span> <span className="string">'1 May'</span>
                </div>
                <div data-line-nr="07" className="code-l">
                    <div className="dot">····</div>
                    <span className="scope">this</span>.<span className="prop2"
                    >residence</span
                    >
                    <span className="scope">=</span>
                    <span className="string">'Borken, Germany'</span>
                </div>

                <div data-line-nr="09" className="code-l">
                    <div className="dot">··</div>

                </div>

                <div data-line-nr="10" className="code-l">
                    <div className="dot">··</div>
                    <span className="propname">education</span>()</div>
                <div data-line-nr="11" className="code-l">
                    <div className="dot">····</div>
                    <div className="methods">return</div>[
                  </div>
                <div data-line-nr="12" className="code-l">
                    <div className="dot">······</div>
                    <span className="string">'2021-2022'</span>:<span className="string">
                        'Digital Career Institute -- one-year intensive MERN-Stack web
                             development course'</span
                    >
                    ,
                  </div>
                <div data-line-nr="13" className="code-l">
                    <div className="dot">······</div>
                    <span className="string">'2008-2012'</span>:<span className="string">
                        'Türkei -- Bachelor\'s Degree '</span
                    >
                    ,
                   </div>
                <div data-line-nr="14" className="code-l">
                    <div className="dot">····</div>
                    ]
                  </div>
                <div data-line-nr="15" className="code-l">
                    <div className="dot">··</div>

                </div>
                <div data-line-nr="16" className="code-l">
                    <div className="dot">··</div>
                    <span className="propname">skills</span>()
                  </div>
                <div data-line-nr="17" className="code-l">
                    <div className="dot">····</div>
                    <div className="methods">return</div>
                    [
                    <span className="string"
                    >'HTML5/CSS/JS', 'React.js', 'React Native', 'jQuery',
                        'Node.js', 'Bootstrap', 'Webpack', 'SASS', 'npm', 'SPA',
                        'Git/GitHub', 'Wordpress', 'Drupal' 'Photoshop', 'Illustrator',
                        'Adobe Premiere Pro', 'After Effects', 'UX/UI',
                     </span>
                    <span className="blinker"></span>
                  ]
                  </div>




            </Col>
        </Row>

    )
}

export default About;