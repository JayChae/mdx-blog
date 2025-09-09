import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ProjectPageProps {
  params: {
    id: string
  }
}

// 아티클 목록을 순서대로 정의
const articleOrder = [
  'blockchain',
  'network',
  'pow',
  'transaction',
  'wallet',
  'mempool',
  'spa',
]

const articleComponents: Record<string, ComponentType> = {
  blockchain: dynamic(() => import('../_articles/blockchain.mdx')),
  network: dynamic(() => import('../_articles/network.mdx')),
  pow: dynamic(() => import('../_articles/pow.mdx')),
  transaction: dynamic(() => import('../_articles/transaction.mdx')),
  wallet: dynamic(() => import('../_articles/wallet.mdx')),
  mempool: dynamic(() => import('../_articles/mempool.mdx')),
  spa: dynamic(() => import('../_articles/spa.mdx')),
}

function ProjectPage({ params }: ProjectPageProps) {
  const Article = articleComponents[params.id]

  if (!Article) {
    return notFound()
  }

  return <ArticleWithNavigation params={params} Article={Article} />
}

function ArticleWithNavigation({
  params,
  Article,
}: {
  params: { id: string }
  Article: ComponentType
}) {
  const currentIndex = articleOrder.indexOf(params.id)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < articleOrder.length - 1
  const prevSlug = hasPrev ? articleOrder[currentIndex - 1] : null
  const nextSlug = hasNext ? articleOrder[currentIndex + 1] : null

  return (
    <div className="mx-auto max-w-6xl p-8">
      <article className="prose !max-w-full">
        <Article />
      </article>

      {/* Navigation Links */}
      <div className="mt-12 flex items-center justify-between border-t pt-8">
        {hasPrev && prevSlug ? (
          <Link
            href={`/simple-coin/${prevSlug}`}
            className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ChevronLeft className="size-4" />
            이전 아티클
          </Link>
        ) : (
          <div className="w-32" /> // Spacer for alignment
        )}

        <div className="text-sm text-gray-500">
          {currentIndex + 1} / {articleOrder.length}
        </div>

        {hasNext && nextSlug ? (
          <Link
            href={`/simple-coin/${nextSlug}`}
            className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            다음 아티클
            <ChevronRight className="size-4" />
          </Link>
        ) : (
          <div className="w-32" /> // Spacer for alignment
        )}
      </div>
    </div>
  )
}

// 정적으로 어떤 params를 빌드할지 정의
// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return [
    { id: 'blockchain' },
    { id: 'network' },
    { id: 'pow' },
    { id: 'transaction' },
    { id: 'wallet' },
    { id: 'mempool' },
    { id: 'spa' },
  ]
}

export default ProjectPage
