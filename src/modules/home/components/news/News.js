import { Post } from "./components/Post";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../../../redux/actions";
import { useCallback } from "react";
import { settings } from "../../../../settings";


const getOnlySearchParams = (url) => new URL(url).search

export const News = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.api.news.lastNews)
    const previous = useCallback(() => dispatch(fetchNews(getOnlySearchParams(posts.previous))),
        [posts.previous])
    const next = useCallback(() => {
        dispatch(fetchNews(getOnlySearchParams(posts.next)))
    }, [posts.next])
    if (!posts.results || posts.results.length === 0) {
        return null
    }
    const post = posts.results[0]
    return (
        <div className="news-content">
            <h2>Новости</h2>
            <hr/>
            <Post
                header={post.header}
                content={post.content}
                date={post.formatted_date}
                id={post.id}
            />
            <hr/>
            <div className="btn_change_post flex">
                <div className="a_show_all_news"><Link to={settings.routes.News} className='flex'>Просмотреть все</Link></div>
                <button onClick={previous} disabled={posts.previous === null}>{'<'}</button>
                <button onClick={next} disabled={posts.next === null}>{'>'}</button>
            </div>

        </div>
    )
}