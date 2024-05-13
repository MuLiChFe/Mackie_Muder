import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className }) => {
  const { locale } = useGlobal()
  if (post?.blockMap) {
    return <div className={className}>
        <section id='announcement-wrapper' className="mb-4 p-2 overflow-auto shadow-md border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray aos-init aos-animate">
            <div><i className='mr-2 fas fa-bullhorn' />{locale.COMMON.ANNOUNCEMENT}</div>
            {post && (<div id="announcement-content">
            <NotionPage post={post} className='text-center' />
        </div>)}
        </section>
    </div>
  } else {
    return <></>
  }
}
export default Announcement
