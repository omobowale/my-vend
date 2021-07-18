import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons';
import shortid from 'shortid';

export const renderRating = (score, rating=true, size="sm") => {
    let stars = [];
    for (let i = 0; i < Math.floor(parseInt(score)); i++) {
        stars.push(
            <FontAwesomeIcon
                key={shortid.generate()}
                icon={faStar}
                size={size}
                style={{ color: '#FD8825' }}
            />
        );
    }

    if(rating){
        for (let i = 0; i < 5 - Math.floor(parseInt(score)); i++) {
            stars.push(
                <FontAwesomeIcon
                    icon={hollowStar}
                    size={size}
                    style={{ color: '#FD8825' }}
                    key={shortid.generate()}
                />
            );
        }
    }
    return stars;
};

export const reviewStats = (score, count) => {
    return <span> {`${score} (${count} Reviews)`} </span>;
};

export const renderSingleRating = (score) => {
    const scoreInt = Math.floor(parseInt(score));

    return scoreInt > 1 ? (
        <FontAwesomeIcon
            key={shortid.generate()}
            icon={faStar}
            size="sm"
            style={{ color: '#FD8825' }}
        />
    ) : (
        <FontAwesomeIcon
            icon={hollowStar}
            size="sm"
            style={{ color: '#FD8825' }}
            key={shortid.generate()}
        />
    );
};
