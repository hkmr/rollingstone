import React from 'react'

export default function albumCard({name, type, artist, artist_url, markets, image, release_date, total_tracks, url}) {
    return (
        <div className="card card-equal-height" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <a href={url} target="_blank" rel="noreferrer">
                        <img src={image} alt={name} width="200" className="cover" />
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title h4">{name}</div>
                        <div className="card-text"><small className="text-muted">Artist : <a href={artist_url}>{artist}</a></small></div>
                        <div className="card-text"><small className="text-muted">Type : {type}</small></div>
                        <div className="card-text"><small className="text-muted">Total tracks : {total_tracks}</small></div>
                        <div className="card-text"><small className="text-muted">Release Date : {release_date}</small></div>
                        <div className="card-text"><small className="text-muted">Total Markets : {markets.length}</small></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
