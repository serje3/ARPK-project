import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions";
import { endpoints } from "../../api/endpoints";
import { Post } from "../home/components/news/components/Post";
import { ImageSlider } from "../common/ImageSlider";


export const PostPage = () => {
    let { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('опа')
        dispatch(fetchNews(endpoints.getOnlyPostWithId(id), true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const news = useSelector(state => state.api.news)
    const post = news.lastNews
    if (!post || post.results || post.length !== undefined)
        return null
    return (
        <div className="post-page flex">
            <div className="news-content">
                <Post header={post.header}
                      content={post.content}
                      date={post.formatted_date}
                      showLink={false}
                >
                    <ImageSlider images={news.images}/>
                </Post>
            </div>
        </div>
    )
}