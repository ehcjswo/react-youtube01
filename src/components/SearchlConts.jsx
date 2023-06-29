import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import Loader from './Loader';
import Category from './Category';

const SearchlConts = () => {
    const [videos, setvideos] = useState(null);
    const { searchTerm } = useParams();
    const [selectCategory, setSelectCategory] = useState('뉴진스');

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => {
                setvideos(result.items);
            })
            .catch(error => console.log(error));
    }, [searchTerm]);

    if (!videos) return <Loader />;

    return (
        <main id="main">
            <aside id="aside">
                <Category
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
                />
            </aside>
            <section id="contents">
                <h2>검색어 : {searchTerm}</h2>
                <Videos videos={videos} />
            </section>
        </main>
    );
};

export default SearchlConts;
