import React, { useState, useEffect } from 'react';
import SongList from '../components/songList';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    const [genre, setGenre] = useState("all");


    useEffect(() => {
        getSongs();
    }, [])



    const handleGenre = ((event) => {
        event.preventDefault();
        setGenre(event.target.genre.value)
    })



    const getSongs = () => {
        if (genre == "rock") {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } 
        else if (genre == "dance") {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))             
        } 
        else if (genre == "country") {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))             
        } 
        else {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))             
        }
    }

    useEffect(() => {
        getSongs();
    }, [genre])




    return (
        <>
        <div>
            <form onSubmit={handleGenre}>
                <label htmlFor="genre">Choose genre:</label>
                <select name="genre" id="genre">
                    <option value="all">All</option>
                    <option value="rock">Rock</option>
                    <option value="dance">Dance</option>
                    <option value="country">Country</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>

        <div className="main-container">
            <SongList songs = {songs} />
        </div>

        </>
    )
}

export default SongContainer;


