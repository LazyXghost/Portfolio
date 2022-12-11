import React from "react";
export default function FourthPage() {
  return (
    <div className="page fullPage" id="gallery">
      <div className="label galleryLabel">Gallery</div>
      <div className="row" id="galleryContent">
        <img src="images/AlbumImages/4.jpg" className="portrait" alt="" style={{ left: "20px", top: "20px", zIndex: "100" }} />
        <img src="images/AlbumImages/15.jpg" className="portrait" alt="" style={{ left: "240px", top: "150px", zIndex: "100" }} />
        <img src="images/AlbumImages/8.jpg" className="portrait" alt="" style={{ left: "550px", top: "45px", zIndex: "100" }} />
        <img src="images/AlbumImages/17.jpg" className="portrait" alt="" style={{ left: "1000px", top: "30px", zIndex: "100" }} />
        <img src="images/AlbumImages/10.jpg" className="portrait" alt="" style={{ left: "1450px", top: "10px", zIndex: "100" }} />
        <img src="images/AlbumImages/2.jpg" className="portrait" alt="" style={{ left: "930px", top: "420px", zIndex: "100" }} />
        <img src="images/AlbumImages/13.jpg" className="portrait landscape" alt="" style={{ left: "1330px", top: "390px", zIndex: "100" }} />
        <img src="images/AlbumImages/3.jpg" className="force-portrait" alt="" style={{ left: "0px", top: "540px", zIndex: "100" }} />
        <img src="images/AlbumImages/1.jpg" className="landscape" alt="" style={{ left: "370px", top: "660px", zIndex: "100" }} />
        <img src="images/AlbumImages/6.jpg" className="landscape" alt="" style={{ left: "1050px", top: "800px", zIndex: "100" }} />
        <img src="images/AlbumImages/11.jpg" className="portrait" alt="" style={{ left: "1420px", top: "700px", zIndex: "100" }} />
      </div>
    </div>
  )
}