import { siteConfig } from '@/lib/config'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationNumber from './PaginationNumber'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
  const totalPage = Math.ceil(
    postCount / parseInt(siteConfig('POSTS_PER_PAGE'))
  )
  const showPagination = postCount >= parseInt(siteConfig('POSTS_PER_PAGE'))
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div className='w-full'>
        <div></div>
        {/* 文章列表 */}
        <div className='flex flex-wrap pb-12'>
          {posts?.map((post, index) => (
            <div key={post.id} className='xl:w-1/3 md:w-1/3 w-full p-4'>
              {' '}
              <BlogPostCard index={index} post={post} siteInfo={siteInfo} />
            </div>
          ))}
        </div>
        {showPagination && <PaginationNumber page={page} totalPage={totalPage} />}
      </div>
    )
  }
}

export default BlogPostListPage
