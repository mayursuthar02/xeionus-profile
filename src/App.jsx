import React, {useState, useRef } from "react";

const App = () => {
  const [inputText, setInputText] = useState(window.location.href)
  const [showbtn, setShowbtn] = useState("")

  const showModelHandler = () => {
    setShowbtn(showbtn === '' ? 'show' : '');
  }

  const inputRef = useRef(null);
  
  const handleCopy = () => {
    // Select the input's content
    inputRef.current.select();
    // Copy the selected text
    document.execCommand('copy');
  };


  return (
    <>
    <main>
      <div className="profile-section">

        <div className="share-btn" onClick={showModelHandler}>
          <img src="/public/share-alt-solid-24.png" alt="" title="Share" />
        </div>
      
        <div className="profile-img">
          <div className="img-wrapper">
            <img src="/public/35.jpg" alt="" />
          </div>
        </div>

        <div className="content">
          <h1 className="title">Xeionus</h1>
          <p className="subtitle">@xeionus</p>
          <p className="desc">Hello! I'm Xeionus. I am a Digital Artist.</p>

          <ul className="social-links">
            <li>
              <a
                href="https://www.instagram.com/xeionus/"
                target="_blank"
                title="Instagram"
              >
                <img src="/public/instagram-logo-24.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/xeionus"
                target="_blank"
                title="Twitter"
              >
                <img src="/public/twitter-logo-24.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="StoreLink-section">
        <h1 className="title">Store</h1>

        <ul className="store-links">
          <li>
            <a href="https://www.frameo.store/collections/xeionus" target="_blank">
              <h2>FrameoStore</h2>
              <h2 className="label">India</h2>
            </a>
          </li>

          <li>
            <a href="https://www.artplate.in/shop?Artists=Xeionus+Art&Category=Xeionus+Art" target="_blank">
              <h2>Artplate</h2>
              <h2 className="label">India</h2>
            </a>
          </li>
          
          <li>
            <a href="https://metaleks.com/collections/xeionus" target="_blank">
              <h2>Metaleks</h2>
              <h2 className="label">Global</h2>
            </a>
          </li>

          <li>
            <a href="https://www.redbubble.com/people/Xeionus/shop?asc=u" target="_blank">
              <h2>Redbubble</h2>
              <h2 className="label">Global</h2>
            </a>
          </li>
        </ul>
      </div>


    </main>
      <div className={`link-copy-box ${showbtn}`}>
          <input type="text"  ref={inputRef} value={inputText} readOnly/>
          <button className="btn" onClick={handleCopy}>Copy</button>
      </div>
      <div className={`overlay ${showbtn}`} onClick={showModelHandler}></div>
    </>
  );
};

export default App; 
