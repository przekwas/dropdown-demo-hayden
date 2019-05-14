import React, { useState, useEffect } from 'react';

const AlbumCard = ({ id }) => {

    const [album, setAlbum] = useState({});
    const [loading, setLoading] = useState(true);
    const getAlbum = async () => {
        let r = await fetch(`https://student-fun-api.herokuapp.com/api/hiphop/${id}`);
        let album = await r.json();
        setAlbum(album);
        setLoading(false);
    };
    useEffect(() => {
        getAlbum();
    }, [id]);

    if (loading) {
        return (
            <article className="col-md-8 offset-md-2">
                <div className="progress mt-5">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary shadow" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
                </div>
            </article>
        );
    } else {
        return (
            <article className="col-md-8 offset-md-2">
                <div className="card p-1 shadow-lg text-center">
                    <div className="d-flex justify-content-around mt-3">
                        <img className="w-25 h-25 shadow border rounded-circle" src={album.image} alt="album image" />
                        <img className="w-25 h-25 shadow border rounded-circle" src={album.thumbnail_image} alt="artist image" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{album.title}</h4>
                        <p className="card-text">by: {album.artist}</p>
                        <a href={album.url} className="btn btn-success mx-auto btn-block shadow w-75" target="_blank">Buy on Amazon</a>
                    </div>
                </div>
            </article>
        );
    }
}

export default AlbumCard;