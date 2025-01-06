import "../css/announcement.css";

export default function Announcement({ msg }) {
  return (
    <div className="announceContainer">
      <div className="announceIcon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9018/9018879.png"
          alt="announce"
        />
      </div>
      {/* <p className='anounceText'>{msg}</p> */}
      <marquee behavior="" direction="" className="anounceText">
        {msg}
      </marquee>
    </div>
  );
}
