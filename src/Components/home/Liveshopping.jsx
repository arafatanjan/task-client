import React from "react";
import "./Liveshopping.css";

const videoCards = [
  {
    id: 1,
    title: "ফাল্গুন মেলা",
    imgUrl:
      "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18013/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c",
  },
  {
    id: 2,
    title: "গোলাপ সোনা",
    imgUrl:
      "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18021/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c",
  },
  {
    id: 3,
    title: "পার্টির পোশাক",
    imgUrl:
      "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18011/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c",
  },
  {
    id: 4,
    title: "নিউ স্টক",
    imgUrl:
      "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18008/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c",
  },
  {
    id: 5,
    title: "ওয়েস্টার্ন কালেকশন",
    imgUrl:
      "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18025/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c",
  },
  {
    id: 6,
    title: "নতুন ড্রেস এ ছার!",
    imgUrl:
      "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18024/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c",
  },
];

const Liveshopping = () => {
  return (
    <>
      <div className="responsiveContainer">
        <div
          style={{
           
          }}
        >
          <span>
            <img
              src="https://static.ajkerdeal.com/images/livevideode/logo.svg"
              alt="Logo"
              style={{ width: "90%" }}
            />
          </span>
        </div>
      </div>

      <div className="liveShoppingVideoForAjkerDeal">
        
          <div className="row liveShoppingcard" style={{ height: "100%", overflow: "hidden" }}>
            {videoCards.map((card) => (
              
              <div
                key={card.id}
                id="livenew"
                className="col-lg-2 col-md-3 col-sm-6 col-6 "
                style={{
                  marginBottom: 30,
                  position: "relative",
                  height: "100%", // Make the height fill the parent row
                  overflow: "hidden", 
                   width: '150px',
                   
                }}
              >

                <div className="label_live">
                  <img
                    src="https://static.ajkerdeal.com/images/new2021/reply.svg"
                    alt=""
                  />
                </div>

                <span className="span-Live-Shoppng">
                  <img
                    src="https://static.ajkerdeal.com/images/new2021/eyel.svg"
                    alt=""
                  />
                  <p style={{ color: "white", marginLeft: -3 }}>333</p>
                </span>

                <a href={card.videoUrl} style={{ height: "100%" }}>

                  <span className="playn">
                    <img
                      src="https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png"
                      alt=""
                      style={{ width: "42%", border: "none" }}
                    />
                  </span>
                  
                  <img
                    src={card.imgUrl}
                    alt="image"
                    style={{
                      border: "2px solid #000000",
                      height: "200px", // Make the image fill the column height
                      width: "100%",
                      objectFit: "cover", // Maintain aspect ratio and crop
                    }}
                  />
                  <p
                    style={{
                      background: "rgb(3 4 4)",
                      opacity: 0.6,
                      position: "absolute",
                      textAlign: "center",
                      fontWeight: 900,
                      color: "white",
                      fontSize: 11,
                      marginTop: -34,
                      width: "85%",
                      height: 24,
                    }}
                  >
                    {card.title}
                  </p>
                </a>

              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default Liveshopping;
