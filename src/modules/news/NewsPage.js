import { useEffect } from "react";
import { fetchNews } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../home/components/news/components/Post";


export const NewsPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.api.news.lastNews)
    useEffect(()=>{
        console.log('готово')
        dispatch(fetchNews(''))
    },[])

    if ( posts.results || posts.id || !posts || posts.length === 0) {
        return null
    }
    return (
        <div className="news-page">
            <div className="news-content flex">
                <h1 className="h3">Новости</h1>
                {posts.map((post,key) => <Post
                    key={key}
                    header={post.header}
                    content={post.content}
                    date={post.formatted_date}
                    id={post.id}
                />)}
            </div>
        </div>
    )
}