import Link from 'next/link'

function HomePage() {
  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-4xl font-bold">안녕하세요!</h1>
      <p className="mb-4 text-lg text-gray-700">
        웹 개발과 블록체인 기술에 관심 있는 개발자입니다.
      </p>
      <p className="mb-4 text-gray-600">
        이 블로그에서는 개발 경험, 기술 학습, 그리고 창작 활동에 대한 이야기를
        공유하고 있습니다.
      </p>
      <p className="mb-6 text-gray-600">
        함께 성장하며 새로운 아이디어를 탐구하는 여정을 함께해요! 🚀
      </p>
      <ul className="mt-6 flex">
        <li>
          ⛓
          <Link
            href="/simple-coin"
            className="text-blue-600 underline hover:text-blue-800"
          >
            블록체인 & 암호화폐 원리와 simple coin 구현 가이드 -&gt;
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
