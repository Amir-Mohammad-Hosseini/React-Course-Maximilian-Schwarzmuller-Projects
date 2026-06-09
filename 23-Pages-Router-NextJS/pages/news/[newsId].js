import { useRouter } from "next/router"

const NewsDetailPage = () => {
    const router = useRouter()

    const newsId = router.query.newsId
  return (
    <div>
      Our News {newsId} Page
    </div>
  )
}

export default NewsDetailPage
