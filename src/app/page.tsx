export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">我的个人网站</h1>
      <p className="text-xl text-gray-700 mb-8">
        这是用 Next.js + Vercel 搭建的免费网站！
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <p>🎉 恭喜，网站已经成功运行！</p>
      </div>
    </main>
  );
}
