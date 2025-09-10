import Link from 'next/link'

export default function SimpleCoinPage() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-4xl font-bold">🚀 Simple Coin 구현 가이드</h1>

      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-xl text-gray-700">
          블록체인과 암호화폐의 기본 원리를 이해하기 위한 간단한 암호화폐 구현
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-green-800">
              📋 목차
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/simple-coin/blockchain"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 블록체인 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/network"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 블록체인 네트워크 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/pow"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 Proof-of-Work 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/transaction"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 트랜잭션 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/wallet"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 지갑 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/mempool"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 mempool 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/spa"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  간단한 SPA 웹페이지 구현
                </Link>
              </li>
              <li>
                <Link
                  href="/simple-coin/docker"
                  className="text-gray-600 transition-colors hover:text-gray-800"
                >
                  도커로 node 3개 띄워서 테스트
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              🛠️ 기술 스택
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>TypeScript / JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>WebSocket: ws</li>
              <li>Crypto: crypto-js & elliptic</li>
              <li>Tailwindcss</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
