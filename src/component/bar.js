import React, {  useEffect, useState  } from "react";
import { Link } from "react-router-dom";

function Bar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  const [openLogin, setLogin] = useState(false);
  const [openbar, setBar] = useState(false);
  

  useEffect(() => {
    const handleExternalClick = (e) => {
      const bar = document.querySelector(".body-bar");
      const barmenu = document.querySelector('.logo-barshow');
      
      if (barmenu && !barmenu.contains(e.target)) {
        setBar(true);
        console.log("ปิดเมนู");
        if(!openbar){
          console.log("สวัสดี")
          barmenu.classList.remove('logo-barshow');
          setBar(false);
        }
      }

      if (bar && !bar.contains(e.target)) {
        setIsOpen(false);
        setIsOpenShop(false);
        console.log("ปิดเมนู2");
        
      }
    };

    if (isOpen || isOpenShop || openbar) {
      window.addEventListener("click", handleExternalClick);
    } else {
      window.removeEventListener("click", handleExternalClick);
    }

    return () => {
      window.removeEventListener("click", handleExternalClick);
    };
  }, [isOpen, isOpenShop, openbar]);

  const toggleOpenlogin = () => {
    setLogin(!openLogin);
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsOpenShop(false);
  };

  const toggleshopdown = () => {
    setIsOpenShop(!isOpenShop);
    setIsOpen(false);
  };

  const toggleOpenmenubar = () => {
    const barmenu = document.querySelector('.logo-bar');
    if (barmenu) {
      if (!openbar) {
        setBar(true);
        barmenu.classList.remove('logo-barshow');
      } else {
        setBar(false);
        barmenu.classList.add('logo-barshow');
      }
    }
  };

  // const toggleOpenmenubar = () => {
  //   const bar = document.querySelector('.logo-bar');
  //   if (bar) {
  //     if (!openbar) {
  //       setBar(true);
  //       if (bar.classList.contains('logo-barshow')) {
  //         console.log("ลบ");
  //         bar.classList.remove('logo-barshow');
  //       }
  //     } else {
  //       setBar(false);
  //       bar.classList.add('logo-barshow');
  //     }
  //   }
  // }
  


  return (
    <div className="body-bar">
      <div className="container-bar">
        <i className="fa-solid fa-bars" style={{ color: "#7a7a7a" }} onClick={toggleOpenmenubar}></i>
        <div className="logo-bar">
          <div className="bar-logo">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/03/Insider-Logo.png"
              alt="Insider Logo"
            />
            <i className="fa-solid fa-bars" style={{ color: "#7a7a7a" }} onClick={toggleOpenmenubar}></i>
          </div>
          <p>
            <Link to="/" style={{ textDecoration: "none", color: "#000000" }}>
              NEW ARRIVAL
            </Link>
          </p>
          <p>
            <Link to="/Home" style={{ textDecoration: "none", color: "#000000" }}>
              HOME
            </Link>
          </p>
          <p>
            <Link to="/Shop" style={{ textDecoration: "none", color: "#000000" }}>
              SHOP
            </Link>
          </p>
          <p>
            <Link to="/FOOTWEAR" style={{ textDecoration: "none", color: "#000000" }}>
              FOOTWEAR
            </Link>
          </p>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>BLOG</p>
          <p>SALE</p>
        </div>
        <div className="user-logo">
          <i className="fa-solid fa-magnifying-glass" style={{ color: "#7d7d7d" }}></i>
          <i className="fa-regular fa-user" style={{ color: "#7d7d7d" }} onClick={toggleDropdown}></i>
          {isOpen && (
            <div className="dropdown-content">
              <p onClick={toggleOpenlogin}>เข้าสู่ระบบ</p>
              <p>สมัครสมาชิก</p>
            </div>
          )}
          <i className="fas fa-cart-shopping" style={{ color: "#7d7d7d" }} onClick={toggleshopdown}></i>
          {isOpenShop && (
            <div className="dropdown-content">
              <p>ตะกร้าสินค้า</p>
            </div>
          )}
        </div>
        {openLogin && <Login openLogin={openLogin} setLogin={setLogin} />}
      </div>
    </div>
  );
}
export default Bar;

function Login({ openLogin, setLogin }) {
  const [isopenregister, setRegister] = useState(false);
  const toggleOpenlogin = () => {
    setRegister(!isopenregister);
  };
  return (
    <div className="containerlogin">
      <div
        className="close"
        onClick={() => {
          setLogin(!openLogin);
          setRegister(!isopenregister);
        }}
      ></div>

      <div className="card-login">
        <div className="img-wall">
          <img
            src="https://wallpapers.com/images/hd/ellen-ripley-alien-movie-srtz5jjdu58tb9xo.jpg"
            alt="wall"
          ></img>
        </div>
        {!isopenregister && (
          <div className="input-login">
            <h2>InSIDER</h2>
            <input className="input-login1" type="text" placeholder="username" />
            <input className="input-login1" type="password" placeholder="password" />
            <button className="btn-login">Login</button>
            <div className="ck-btn">
              <div className="ck-btnl">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="confirmation"
                  value="yes"
                />
                <p>จดจำข้อมูลของฉัน</p>
              </div>
              <div className="ck-btnr">
                <p>หากต้องการความช่วยเหลื่อ</p>
              </div>
            </div>
            <div className="footer-login">
              <p>หากยังไม่คุ้นกับ InSIDER</p>
              <p className="btn-regiset" onClick={toggleOpenlogin}>
                สมัครลงทะเบียนตอนนี้
              </p>
            </div>
          </div>
        )}
        {isopenregister && (
          <div className="input-login">
            <h2>InSIDER-Register</h2>
            <input className="input-login1" type="email" placeholder="Email" />

            <input className="input-login1" type="text" placeholder="username" />
            <input className="input-login1" type="password" placeholder="password" />
            <input className="input-login1" type="password" placeholder="re-password" />
            <button  className="btn-login">Register</button>
            <div className="footer-login">
              <p>InSIDER การบริการที่เป็นเริศทางด้านภาพยนต์</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
