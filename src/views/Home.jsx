import React, { useState, useEffect } from 'react';
import AlbumCard from '../components/AlbumCard';

const Home = props => {

    const [id, setId] = useState("0");
    const [albums, setAlbums] = useState([]);
    const getAlbums = async () => {
        let r = await fetch('https://student-fun-api.herokuapp.com/api/hiphop');
        let albums = await r.json();
        setAlbums(albums);
    };
    useEffect(() => {
        getAlbums();
    }, []);

    const alert = <div className="col-md-6 offset-md-3 alert alert-dark shadow">Select an ID Above to render an Album's Details!</div>;

    return (
        <>
            {/* FORM ROW */}
            <section className="row mt-3">
                <article className="col-md-6 offset-md-3">
                    <form className="form-group p-3 border border-dark shadow">
                        <label>Select an Album Bruv:</label>
                        <select
                            className="form-control"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        >
                            <option value="0">Select an album to load ... </option>
                            {albums.map(album => (
                                <option key={album.id} value={album.id}>{album.title}</option>
                            ))}
                        </select>
                        <button className="btn btn-primary mt-3 mb-1 mx-auto btn-block w-50">Select It Fam</button>
                    </form>
                </article>
            </section>
            {/* CARD ROW */}
            <section className="row mt-3">
                {id === '0' ? alert : <AlbumCard id={id} />}
            </section>
        </>
    );
}

export default Home;