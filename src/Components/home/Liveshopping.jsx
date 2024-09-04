import React from "react";
import "./Liveshopping.css";

const videoCards = [
  {
    id: 1,
    title: "ফাল্গুন মেলা",
    imgUrl: "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18013/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c"
  },
  {
    id: 2,
    title: "গোলাপ সোনা",
    imgUrl: "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18021/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c"
  },
  {
    id: 3,
    title: "পার্টির পোশাক",
    imgUrl: "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18011/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c"
  },
  {
    id: 4,
    title: "নিউ স্টক",
    imgUrl: "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18008/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c"
  },
  {
    id: 5,
    title: "ওয়েস্টার্ন কালেকশন",
    imgUrl: "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18025/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c"
  },
  {
    id: 6,
    title: "নতুন ড্রেস এ ছার!",
    imgUrl: "https://static.ajkerdeal.com/LiveVideoImage/LiveVideoCoverPhoto/18024/livecoverphoto.jpg",
    videoUrl: "https://www.youtube.com/watch?v=M1PKm4jXa1c"
  }
];

const Liveshopping = () => {
  return (
    <>
    <div
      // style={{
      //   maxWidth: '1200px',
      //   //marginLeft: 'auto', 
      //   marginLeft:'16rem',
      //   marginRight: 'auto',
      //   padding: '0 1rem', 
      // }}
      className="responsiveContainer"
    >
      <div
        className=""
        style={{
          marginLeft: '0px',
          width: '15%',
          marginTop: 0,
          display: 'inline-block',
        }}
      >
        <span className="" style={{ height: '65px' }}>
          <img
            src="https://static.ajkerdeal.com/images/livevideode/logo.svg"
            alt="Logo"
            style={{ width: '100%' }} // Ensure the image scales with its container
          />
        </span>
      </div>
    </div>

      

      <div className="liveShoppingVideoForAjkerDeal">
  
        <div
          className="col-lg-2 col-md-3 col-sm-4 col-6"
          style={{ width: "70%", paddingTop: "1rem" }}
        >
          <div className="row">
            {videoCards.map((card) => (
              <div
                key={card.id}
                id="livenew"
                 className="col-lg-2 col-md-3 col-sm-4 col-6"
                style={{
                  marginBottom: 30,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div className="label_live">
                  <img
                    src="https://static.ajkerdeal.com/images/new2021/reply.svg"
                    alt=""
                    // style={{ width: '120', height: '26' }}
                  />
                </div>
                <span className="span-Live-Shoppng">
                  <img
                    src="https://static.ajkerdeal.com/images/new2021/eyel.svg"
                    // style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                    alt=""
                  />
                  <p style={{ color: "white", marginLeft: -3 }}>333</p>
                </span>
                <a href={card.videoUrl} style={{ height: "13rem" }}>
                  <span className="playn">
                    <img
                      src="https://static.ajkerdeal.com/images/videoshopping/play/blackplay.png"
                      alt=""
                      style={{ width: "42%", border: "none" }}
                    />
                  </span>
                  <img
                    src={card.imgUrl}
                    alt=""
                    style={{
                      border: "2px solid #000000",
                      height: "18rem",
                      width: "-webkit-fill-available",
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
                      width: "10.2rem",
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
     
    </div>
    </>
  );
};

export default Liveshopping;
