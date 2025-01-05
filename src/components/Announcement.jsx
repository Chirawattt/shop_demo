import '../css/announcement.css';

export default function Announcement({msg}) {
    return(
        <div className='announceContainer'>
            <div className='announceIcon'>icon</div>
            {/* <p className='anounceText'>{msg}</p> */}
            <marquee behavior="" direction="" className="anounceText">{msg}</marquee>
        </div>
    )
}