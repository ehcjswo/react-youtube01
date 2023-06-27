import React, { useState, useEffect } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
    const [selectCategory, setSelectCategory] = useState('코딩애플');
    const [videos, setYoutubes] = useState([]);

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%89%B4%EC%A7%84%EC%8A%A4&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => {
                setYoutubes(result.items);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <main id="main">
            <aside id="aside">
                <Category
                    selectCategory={selectCategory} //카테고리를 보냄
                    setSelectCategory={setSelectCategory} //카테고리를 받아옴
                />
            </aside>
            <section id="contents">
                <h2>{selectCategory} 유튜버</h2>
                <Videos videos={videos} />
            </section>
        </main>
    );
};

export default MainConts;
