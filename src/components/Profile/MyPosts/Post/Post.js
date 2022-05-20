import s from "./Post.module.css";

const Post = (props) => {
    return(
        <div  className={s.item}>
            <img src="https://img-9gag-fun.9cache.com/photo/aV0bR1n_460s.jpg" alt=""/>
            {props.massage}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post