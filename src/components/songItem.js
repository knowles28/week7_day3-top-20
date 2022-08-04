const SongItem = ({song}) => {

    return (
    <li className="track">
        <h4>{song.title.label} </h4>
        <img src={song["im:image"][2].label}/>
        <audio controls>
             <source key={song.title.label} src={song.link[1].attributes.href} type="audio/mp3" />
        </audio>
    </li>
    )

}

export default SongItem;