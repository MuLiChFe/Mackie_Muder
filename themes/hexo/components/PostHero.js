import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'
import TagItemMini from './TagItemMini'

/**
 * 文章详情页的Hero块
 */
export default function PostHero({ post, siteInfo }) {
  const { locale, fullWidth } = useGlobal()

  if (!post) {
    return <></>
  }

  // 文章全屏隐藏标头
  if (fullWidth) {
    return <div className='my-8' />
  }

  const headerImage = post?.pageCover ? post.pageCover : siteInfo?.pageCover

  return (
    <div id='header' className='w-full h-96 relative md:flex-shrink-0 z-10'>
      <LazyImage
        priority={true}
        src={headerImage}
        className='w-full h-full object-cover object-center absolute top-0'
      />

      <header
        id='article-header-cover'
        className='bg-black bg-opacity-70 absolute top-0 w-full h-96 py-10 flex justify-center items-center '>
        <div className='mt-10'>
          <div className='mb-3 flex justify-center'>
            {post.category && (
              <>
                <Link
                  href={`/category/${post.category}`}
                  passHref
                  legacyBehavior>
                  <div className='cursor-pointer px-2 py-1 mb-2 border rounded-sm dark:border-white text-sm font-medium hover:underline duration-200 shadow-text-md text-white'>
                    {post.category}
                  </div>
                </Link>
              </>
            )}
          </div>

          {/* 文章Title */}
          <div className='leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md flex justify-center text-center text-white'>
            {siteConfig('POST_TITLE_ICON') && (
              <NotionIcon icon={post.pageIcon} className='text-4xl mx-1' />
            )}
            {post.title}
          </div>
        </div>
      </header>
    </div>
  )
}
