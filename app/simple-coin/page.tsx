import Link from 'next/link'

export default function SimpleCoinPage() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-6">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          ← 홈으로 돌아가기
        </Link>
      </div>

      <h1 className="mb-6 text-4xl font-bold">🚀 Simple Coin 구현 가이드</h1>

      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-xl text-gray-700">
          블록체인과 암호화폐의 기본 개념을 이해하기 위해 직접 간단한 암호화폐를
          구현해보는 실습입니다.
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-green-800">
              📋 학습 목표
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• 블록체인의 기본 구조 이해</li>
              <li>• 해시 함수의 역할 학습</li>
              <li>• Proof-of-Work 개념 실습</li>
              <li>• 트랜잭션 검증 메커니즘</li>
              <li>• 블록 연결 및 체인 생성</li>
            </ul>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              🛠️ 기술 스택
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• TypeScript/Node.js</li>
              <li>• Crypto 모듈 (해시 함수)</li>
              <li>• 간단한 HTTP 서버</li>
              <li>• JSON 데이터 구조</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
