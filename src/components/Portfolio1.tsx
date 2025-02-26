import Link from "next/link";
import React from "react";

export default function Portforlio() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเเปลี่ยนแปลงโครงการภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  <Link
                    href="https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                    กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                </p>
                <p>
                  ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                  กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-1-66.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผล</h3>
                <p>
                  <Link
                    href="https://nmsconsulting.com/insights/effective-change-management-and-its-role-in-project-success/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การจัดการการเปลี่ยนแปลงที่มีประสิทธิผลและบทบาทในการประสบความสำเร็จของโครงการ
                  </Link>
                </p>
                <p>
                  การเปลี่ยนแปลงเป็นสิ่งที่หลีกเลี่ยงไม่ได้สำหรับโครงการใดๆ
                  ไม่ว่าจะเป็นโครงการขนาดเล็กหรือโครงการขนาดใหญ่
                  การยอมรับและจัดการการเปลี่ยนแปลงอย่างมีประสิทธิภาพสามารถสร้างหรือทำลายความสำเร็จของโครงการได้
                  ในบทความนี้
                  เราจะเจาะลึกถึงบทบาทสำคัญของการจัดการการเปลี่ยนแปลงอย่างมีประสิทธิผลต่อความสำเร็จของโครงการ
                  เราจะสำรวจกลยุทธ์ เครื่องมือ และแนวทางปฏิบัติที่ดีที่สุดต่างๆ
                  ที่สามารถช่วยให้องค์กรต่างๆ
                  ผ่านพ้นช่วงเปลี่ยนผ่านได้อย่างประสบความสำเร็จ
                  มาทำความเข้าใจกันว่าจะปรับกระบวนการเปลี่ยนแปลงให้เหมาะสมที่สุดและใช้ประโยชน์จากการเปลี่ยนแปลงนั้นเพื่อการเติบโตและความสำเร็จได้อย่างไร
                </p>
                <p>
                  การจัดการการเปลี่ยนแปลงหมายถึงแนวทางที่มีโครงสร้างในการเตรียมการและสนับสนุนบุคคล
                  ทีมงาน และองค์กรสำหรับการเปลี่ยนแปลงองค์กร
                  เป็นกระบวนการเปลี่ยนผ่านจากสถานะปัจจุบันไปสู่สถานะในอนาคตที่ต้องการโดยมีการหยุดชะงักในการดำเนินงานน้อยที่สุดการจัดการการเปลี่ยนแปลงที่มีประสิทธิภาพช่วยให้มั่นใจได้ว่าผู้คนยอมรับการเปลี่ยนแปลงอย่างเต็มใจและปรับตัวเข้ากับสภาพแวดล้อมใหม่ได้อย่างราบรื่น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-67-71.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะ
                </h3>
                <p>
                  <Link
                    href="https://aws.amazon.com/th/what-is/digital-transformation/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การเปลี่ยนผ่านสู่ระบบดิจิทัลคืออะไร
                  </Link>
                </p>
                <p>
                  การเปลี่ยนผ่านสู่ระบบดิจิทัลเป็นกระบวนการที่องค์กรนำไปใช้เพื่อรวมเทคโนโลยีดิจิทัลในทุกด้านของธุรกิจ
                  กระบวนการนี้จะเปลี่ยนแปลงวิธีการที่องค์กรส่งมอบคุณค่าให้กับลูกค้าโดยพื้นฐาน
                  บริษัทต่าง ๆ
                  นำเทคโนโลยีดิจิทัลที่เป็นนวัตกรรมมาใช้เพื่อสร้างการเปลี่ยนแปลงทางวัฒนธรรมและการดำเนินงานที่ปรับให้เข้ากับความต้องการของลูกค้าที่เปลี่ยนแปลงไปได้ดีมากยิ่งขึ้น
                  ตัวอย่างของการเปลี่ยนผ่านสู่ระบบดิจิทัล
                </p>
                <p>
                  คำว่า "การเปลี่ยนผ่านสู่ระบบดิจิทัล" อธิบายถึงการนำเทคโนโลยี
                  ความสามารถ และกระบวนการใหม่ ๆ
                  เข้ามาใช้เพื่อทำให้ยังคงสามารถแข่งขันได้ในภูมิทัศน์ทางเทคโนโลยีที่มีการเปลี่ยนแปลงอยู่ตลอดเวลา
                  หลังจากยุคการระบาดครั้งใหญ่
                  องค์กรต้องมีความสามารถที่จะปรับตัวได้อย่างรวดเร็วเพื่อให้เข้ากับการเปลี่ยนแปลงต่าง
                  ๆ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-72-75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <Link
                  href="https://www.adpt.news/2017/09/13/7-factors-affecting-major-changes-org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลง
                </Link>
                <p>
                  7
                  ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                  2000 คน
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-76-78.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <Link
                  href="https://www.psy.chula.ac.th/th/feature-articles/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                </Link>
                <p>
                  คุณพร้อมไหม? …นักจิตวิทยาพร้อมจะช่วย
                  การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                </p>
                <p>
                  ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                  การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                  และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                  และมีอารมณ์สดชื่นแจ่มใส
                  การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                  การเล่นบาส
                  ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                  ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-79-82.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <Link
                  href="https://surveysparrow.com/blog/change-management-survey-questions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  แบบสำรวจการจัดการการเปลี่ยนแปลงมากกว่า 100 ข้อ
                </Link>
                <p>
                  การสำรวจการจัดการการเปลี่ยนแปลงช่วยปรับกระบวนการเปลี่ยนแปลงของบริษัทของคุณให้มีประสิทธิภาพมากขึ้น
                  ใช้คำถามในบทความนี้เพื่อสำรวจพนักงานของคุณในระหว่างโครงการเปลี่ยนแปลง
                </p>
                <p>
                  แบบสำรวจการจัดการการเปลี่ยนแปลงแบบสนทนาได้รับอัตราการตอบสนองสูงสุด
                  สร้างแบบสำรวจได้อย่างง่ายดายด้วยเทมเพลตสำเร็จรูป
                  นี่คือแบบสำรวจข้อเสนอแนะเกี่ยวกับการจัดการการเปลี่ยนแปลงที่จะช่วยคุณในกระบวนการรวบรวมข้อเสนอแนะและดำเนินการตามนั้น
                </p>
                <a
                  className="btn btn-primary"
                  href="/images/change/change_processing-83-85.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง </h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด สำหรับบทความนี้
                  Humanica
                  จะมาเจาะลึกถึงสาเหตุและวิธีการรับมือกับสถานการณ์ที่ว่ามานี้
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง คือ
                  การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน
                  เพื่อรองรับการเติบโต หรือเพื่อความอยู่รอดขององค์กร
                  แต่มีพนักงานบางส่วนไม่ยอมรับและปฏิเสธการเปลี่ยนแปลงดังกล่าว
                  ทำให้เกิดการต่อต้านการเปลี่ยนแปลงนั่นเอง ยกตัวอย่างเช่น
                  การเปลี่ยนผู้บริหาร, การเปลี่ยนระบบการทำงาน,
                  การปรับเปลี่ยนกลยุทธ์ทางการตลาด
                  หรือการเปลี่ยนวัฒนธรรมองค์กรใหม่ เป็นต้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-86-89.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <Link
                  href="https://primeast.com/us/insights/7-strategies-for-overcoming-resistance-to-change-in-the-workplace/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  การเปลี่ยนแปลงองค์กรเป็นเรื่องยาก
                </Link>
                <p>
                  7 กลยุทธ์ในการเอาชนะการต่อต้านการเปลี่ยนแปลงในสถานที่ทำงาน
                </p>
                <p>
                  ในโลกทุกวันนี้
                  การเปลี่ยนแปลงคือสิ่งเดียวที่ไม่เปลี่ยนแปลงซึ่งรายล้อมเราอยู่
                  ในธุรกิจก็เช่นเดียวกัน สำหรับพนักงาน
                  การจัดการการเปลี่ยนแปลงอาจเป็นเรื่องยากและน่าหงุดหงิด
                  เมื่อมุ่งมั่นสู่การเปลี่ยนแปลงที่ประสบความสำเร็จ
                  เราต้องพิจารณาถึงการรับรู้ที่แตกต่างกันของผู้ที่ริเริ่มการเปลี่ยนแปลง
                  ผู้ดำเนินการเปลี่ยนแปลง
                  และผู้ได้รับผลกระทบจากการเปลี่ยนแปลงนั้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-90-92.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://lsaglobal.com/essential-components-of-a-successful-vision-for-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    องค์ประกอบที่สำคัญของวิสัยทัศน์แห่งการเปลี่ยนแปลงที่ประสบความสำเร็จ
                  </Link>
                </p>
                <p>
                  สิ่งสำคัญในการจัดการการเปลี่ยนแปลง —
                  วิสัยทัศน์เพื่อการเปลี่ยนแปลงที่ประสบความสำเร็จ
                  การเปลี่ยนแปลงองค์กรที่ประสบความสำเร็จ ไม่ว่าจะเล็กหรือใหญ่
                  จะต้องเริ่มต้นจากวิสัยทัศน์ที่ชัดเจนและน่าสนใจเกี่ยวกับสถานะที่ต้องการ
                  เพื่อจูงใจและจัดแนวผู้ที่ได้รับผลกระทบจากวิธีการใหม่ที่ต้องการ
                  ไม่ว่าการเปลี่ยนแปลงใหม่จะน่าตื่นเต้นเพียงใด
                  เราก็พบว่าไม่เพียงพอที่ CEO
                  หรือทีมผู้นำการเปลี่ยนแปลงจะต้องระบุวิสัยทัศน์เพื่อการเปลี่ยนแปลง
                </p>
                <p>
                  เหตุใดจึงเป็นเช่นนั้น เพราะระดับการมีส่วนร่วม ความมุ่งมั่น
                  และความเป็นเจ้าของของบุคลากรนั้นเกี่ยวข้องโดยตรงกับระดับการมีส่วนร่วมของพวกเขา
                  เพื่อให้เกิดการเปลี่ยนแปลงองค์กรที่ยั่งยืน
                  ผู้มีส่วนได้ส่วนเสียที่สำคัญจำนวนมากต้องมีส่วนร่วมอย่างแข็งขันในการพัฒนาและดำเนินการตามวิสัยทัศน์ร่วมกันสำหรับสถานะในอนาคตที่ต้องการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-93-98.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์</h3>
                <p>
                  <Link
                    href="https://www.interactsoftware.com/blog/7-simple-steps-defining/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    วิธีการสร้างคำชี้แจงวิสัยทัศน์
                  </Link>
                </p>
                <p>
                  วิสัยทัศน์ของบริษัทเป็นเป้าหมายระยะยาวที่สร้างแรงบันดาลใจซึ่งกำหนดทิศทางของธุรกิจ
                  คำชี้แจงวิสัยทัศน์ที่ร่างขึ้นอย่างดีสามารถเป็นเครื่องมือที่มีประสิทธิภาพในการดึงดูดและรักษาบุคลากรที่มีความสามารถสูง
                  บทความนี้จะอธิบายวิธีการกำหนดและสร้างคำชี้แจงวิสัยทัศน์ของบริษัทที่จะทำให้คุณเป็นนายจ้างที่ประสบความสำเร็จ
                </p>
                <p>
                  ทั้งสามสิ่งนี้มีความสำคัญอย่างยิ่ง นั่นคือ ภารกิจ กลยุทธ์
                  และวิสัยทัศน์ หากขาดส่วนใดส่วนหนึ่งไป
                  ธุรกิจของคุณก็จะไม่มีความสมบูรณ์ครบถ้วน ดังนั้น
                  คุณจะกำหนดวิสัยทัศน์และสื่อสารให้องค์กรทราบได้อย่างไร
                  คำตอบคือการใช้คำชี้แจงวิสัยทัศน์
                  คำชี้แจงวิสัยทัศน์อาจดูสูงส่งและอิงตามอนาคต
                  แต่ยังคงต้องมีพื้นฐานเพียงพอที่จะดำเนินการได้และเข้าใจได้โดยกลุ่มเป้าหมายจำนวนมาก
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-99-102.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การค้นหาผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href="https://www.productplan.com/glossary/stakeholder-analysis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การวิเคราะห์ผู้มีส่วนได้ส่วนเสียคืออะไร?
                  </Link>
                </p>
                <p>การวิเคราะห์ผู้มีส่วนได้ส่วนเสีย</p>
                <p>
                  เมื่อพูดถึงโครงการขององค์กรใดๆ
                  บุคลากรภายในและทีมงานทั้งหมดที่โครงการจะเกี่ยวข้องหรือส่งผลกระทบเรียกว่าผู้มีส่วนได้ส่วนเสียการวิเคราะห์ผู้มีส่วนได้ส่วนเสียเป็นกระบวนการระบุบุคคลเหล่านี้ก่อนเริ่มโครงการ
                  จัดกลุ่มตามระดับการมีส่วนร่วม ความสนใจ
                  และอิทธิพลที่มีต่อโครงการ
                  และกำหนดวิธีที่ดีที่สุดในการดึงดูดและสื่อสารกลุ่มผู้มีส่วนได้ส่วนเสียแต่ละกลุ่มเหล่านี้ตลอดโครงการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-103-106.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การโน้มน้าวผู้มีส่วนได้ส่วนเสีย</h3>
                <p>
                  <Link
                    href="https://pm-alliance.com/5-strategies-to-persuade-on-the-fence-stakeholders/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5
                    กลยุทธ์ในการโน้มน้าวใจผู้มีส่วนได้ส่วนเสียที่ยังไม่ตัดสินใจ
                  </Link>
                </p>
                <p>
                  5 กลยุทธ์ในการโน้มน้าวใจผู้มีส่วนได้ส่วนเสียที่ยังไม่ตัดสินใจ
                </p>
                <p>
                  การได้รับการสนับสนุนจากผู้ถือผลประโยชน์ที่ไม่แน่ใจหรือลังเลใจอาจเป็นหนึ่งในงานที่ท้าทายที่สุดในวงจรชีวิตของโครงการ
                  ความกังวลของพวกเขาซึ่งมักมีรากฐานมาจากการหลีกเลี่ยงความเสี่ยง
                  ประสบการณ์ในอดีต หรือลำดับความสำคัญที่ขัดแย้งกัน
                  อาจทำให้ความคืบหน้าหยุดชะงักหรือลดความกระตือรือร้นลง
                  อย่างไรก็ตาม ด้วยกลยุทธ์ที่ถูกต้อง
                  คุณสามารถจัดการกับความลังเลใจของพวกเขาและได้รับความมุ่งมั่นที่จำเป็นในการก้าวไปข้างหน้าอย่างประสบความสำเร็จ
                  ต่อไปนี้คือเทคนิคที่พิสูจน์แล้ว 5
                  ประการในการเปลี่ยนผู้ถือผลประโยชน์ที่ลังเลใจให้กลายเป็นผู้สนับสนุน
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-107-110.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://whatfix.com/blog/change-advisory-board/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    คณะกรรมการที่ปรึกษาการเปลี่ยนแปลงคืออะไร
                    แนวทางปฏิบัติที่ดีที่สุดและประโยชน์
                  </Link>
                </p>
                <p>
                  การเปลี่ยนจังหวะเพียงเล็กน้อยโดยนักแสดงคนใดคนหนึ่งหรือกลุ่มคนใดคนหนึ่งก็อาจรบกวนการแสดงทั้งหมดได้
                  หากต้องการให้วงออร์เคสตราเล่นได้ประสานกันอย่างสมบูรณ์แบบ
                  คุณต้องมีวาทยกรที่เข้าใจความซับซ้อนของเครื่องดนตรีแต่ละชิ้นและสามารถกำกับโน้ตแต่ละตัวได้
                  เพื่อให้แน่ใจว่านักแสดงทุกคนทำงานร่วมกันได้อย่างราบรื่น
                </p>
                <p>
                  ในองค์กรของคุณ
                  บทบาทนี้ได้รับการปฏิบัติโดยคณะกรรมการที่ปรึกษาการเปลี่ยนแปลง
                  (Change Advisory Board หรือ CAB) เช่นเดียวกับผู้ควบคุมวง CAB
                  ทำหน้าที่ควบคุมการเปลี่ยนแปลงภายในองค์กรของคุณ
                  เพื่อให้แน่ใจว่า โครงการ จัดการการเปลี่ยนแปลง ทุก
                  โครงการสอดคล้องกับเป้าหมายเชิงกลยุทธ์ของคุณ
                  และประสิทธิภาพโดยรวมยังคงสมบูรณ์แบบ CAB
                  ไม่ใช่แค่การอนุมัติหรือปฏิเสธการเปลี่ยนแปลงเท่านั้น
                  แต่ยังรวมถึงการประสานงานทุกการเคลื่อนไหวอย่างระมัดระวังเพื่อรักษาสมดุลและจังหวะของซิมโฟนีขององค์กรของคุณ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-111-114.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การประคับประคองการเปลี่ยนแปลง
                  และข้อควรหลีกเลี่ยงในการดำเนินการเปลี่ยนแปลง
                </h3>
                <p>
                  <Link
                    href="https://www.phyathai.com/th/article/3214-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%AD?srsltid=AfmBOoouPDhEI8NQzB95bjRHlUpAy6pnPJXjWAG20xmVnTOvtjvLyKc3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    การดูแลแบบประคับประคอง (Palliative Care)
                    สำหรับผู้ป่วยและครอบครัว
                  </Link>
                </p>
                <p>
                  การดูแลแบบประคับประคอง (Palliative Care)
                  เป็นที่รู้จักกว้างขวางในต่างประเทศ โดยเฉพาะในประเทศตะวันตก
                  และกำลังเริ่มเป็นที่รู้จักมากขึ้นในประเทศไทย
                  แต่การดูแลผู้ป่วยกลุ่มนี้โดยเฉพาะในช่วงใกล้เสียชีวิต
                  ยังจำเป็นต้องสร้างความรู้ความเข้าใจให้มากขึ้น
                  เพื่อให้ผู้ป่วยและครอบครัวไม่ตื่นตระหนก เข้าใจ
                  และรับมือกับอาการที่เกิดขึ้นได้
                </p>
                <p>
                  การดูแลแบบประคับประคอง หรือ Palliative Care คือ
                  การดูแลที่มีมุ่งเน้นการเพิ่มคุณภาพชีวิตของผู้ป่วยและครอบครัว
                  โดยลดความทุกข์ทรมานทั้งด้านร่างกาย จิตใจ สังคม และจิตวิญญาณ
                  เป็นการดูแลควบคู่กับการรักษาหลักที่มุ่งหวังกำจัดตัวโรค
                  การดูแลแบบประคับประคองจะคำนึงถึงความต้องการและความปรารถนาของผู้ป่วยและครอบครัวร่วมด้วยเสมอ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-115-119.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
