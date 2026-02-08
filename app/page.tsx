export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to BowTie360</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your business with our comprehensive solutions designed for modern professionals.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg">
          Learn More
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-8 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-4">Professional</h3>
          <p className="text-gray-600">High-quality solutions tailored to your needs.</p>
        </div>
        <div className="p-8 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-4">Reliable</h3>
          <p className="text-gray-600">24/7 support to keep your business running smoothly.</p>
        </div>
        <div className="p-8 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-2xl font-bold mb-4">Scalable</h3>
          <p className="text-gray-600">Grow your business without limitations.</p>
        </div>
      </section>
    </div>
  );
}