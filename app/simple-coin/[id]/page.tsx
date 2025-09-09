interface ProjectPageProps {
  params: {
    id: string
  }
}

function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div>
      <h1>Project ID: {params.id}</h1>
    </div>
  )
}

// 정적으로 어떤 params를 빌드할지 정의
export async function generateStaticParams() {
  return [
    { id: 'blockchain' },
    { id: 'network' },
    { id: 'pow' },
    { id: 'transaction' },
    { id: 'wallet' },
    { id: 'mempool' },
    { id: 'spa' }
  ]
}

export default ProjectPage
