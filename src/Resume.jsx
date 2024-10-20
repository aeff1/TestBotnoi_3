// Resume.js
import React from "react";
import "./Resume.css"; // Adjust the path as needed for your CSS file

const Resume = () => {
    return (
        <div className="container">
            <div className="resume">
                <div className="header"></div>
                <div className="content">
                    <div className="left-col">
                        <div className="profile-pic">
                            <img
                                src="Aeff.jpg"
                                alt="Profile"
                            />
                        </div>

                        <div className="about-me">
                            <h2>เกี่ยวกับฉัน</h2>
                            <p>
                                กำลังหาโอกาสในการทำงานหรือฝึกงานในสายงาน dev มีความสามารถในการทำงานเป็นทีม และมีความทุ่มเทเพื่อที่จะเรียนรู้สิ่งใหม่ๆในการทำผลลัพธ์ออกมาให้ดีที่สุดในงานของผม
                            </p>
                        </div>

                        <div className="personal-info">
                            <h3>ข้อมูลส่วนตัว</h3>
                            <div className="dash"></div>
                            <ul>
                                <li>
                                    <strong>ชื่อ - สกุล</strong> : กฤษฎากร ลีลาทรัพย์เลิศ
                                </li>
                                <li>
                                    <strong>ชื่อเล่น</strong> : เอฟ
                                </li>
                                <li>
                                    <strong>อายุ</strong> : 21
                                </li>
                                <li>
                                    <strong>วันเกิด</strong> : 26 ธันวาคม 2002
                                </li>
                                <li>
                                    <strong>สัญชาติ</strong> : ไทย
                                </li>
                            </ul>

                            <h3>ช่องทางการติดต่อ</h3>
                            <div className="dash"></div>
                            <div className="contact">
                                <div className="tel">
                                    <i className="fas fa-phone"></i>
                                    <p>062-5835364</p>
                                </div>

                                <div className="email">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>kitsadakorn3113@gmail.com</p>
                                </div>

                                <div className="address">
                                    <i className="fa-solid fa-house"></i>
                                    <p>147 ซอยจรัญ 44 แขวนบางยี่ขัน เขตบางพลัด กรุงเทพ 10700</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-col">
                        <div className="header-info">
                            <h1>กฤษฎากร ลีลาทรัพย์เลิศ</h1>
                            <h2>Kitsadakorn Leelasuplert</h2>
                            <p>front-end / back-end / full-stack developer (intern)</p>
                        </div>

                        <div className="content-info">
                            <div className="education">
                                <h2>ประวัติการศึกษา</h2>
                                <div className="content-education">
                                    <div className="content-education-left">
                                        <p>2564 - ปัจจุบัน</p>
                                    </div>
                                    <div className="content-education-right">
                                        <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
                                        <p>คณะวิศวกรรมศาสตร์</p>
                                        <p>สาขาวิศวกรรมคอมพิวเตอร์</p>
                                    </div>
                                </div>
                            </div>

                            <div className="experience-work">
                                <h2>ประวัติการทำงาน</h2>
                                <p>
                                    ยังไม่มีประสบการณ์ทำงานจริง แต่พร้อมที่จะเรียนรู้และพัฒนาทักษะความรู้ใหม่ๆ
                                </p>
                            </div>

                            <div className="skill">
                                <h2>ทักษะความสามารถ</h2>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>C</li>
                                    <li>node.js</li>
                                    <li>สามารถทำงานเป็นทีมได้</li>
                                    <li>เรียนรู้สิ่งใหม่ๆอยู่เสมอ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    );
};

export default Resume;
