import BlogCardHorizontal from "./BlogCardHorizontal"

function BlogList({posts}){
    return(
        <div className="overflow-hidden shadow sm:rounded-md">
            <ul className="">
                {posts&&posts.map(post=>{
                    <BlogCardHorizontal data={post}/>
                })}
            </ul>
        </div>
    )
}
export default BlogList