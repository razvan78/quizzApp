import {useRouter} from 'next/router'

const Post = () => {
    const router = useRouter()
    const {comment, pid} = router.query

    return <p>Post: {pid} {comment}</p>
}

export default Post
