'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Kumar",
      text: "Won ₹300 on my first try! Super fun game.",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20man%20happy%20testimonial%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20satisfied%20customer%2C%20modern%20portrait%20photography&width=60&height=60&seq=testimonial1&orientation=squarish"
    },
    {
      name: "Deepika Shah",
      text: "Love the daily challenges. Easy to play!",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20woman%20satisfied%20testimonial%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20happy%20customer%2C%20modern%20portrait%20photography&width=60&height=60&seq=testimonial2&orientation=squarish"
    },
    {
      name: "Vikram Joshi",
      text: "Quick payouts and fair gameplay. Recommended!",
      rating: 5,
      avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20man%20positive%20testimonial%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20satisfied%20customer%2C%20modern%20portrait%20photography&width=60&height=60&seq=testimonial3&orientation=squarish"
    }
  ];
  
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            What Players Say
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9/5 (2,341 reviews)</span>
          </div>
        </div>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-800">{testimonial.name}</span>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}