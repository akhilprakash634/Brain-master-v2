'use client';

export default function HowItWorks() {
  const steps = [
    {
      icon: "ri-coin-fill",
      title: "Join for ₹1",
      description: "Pay just ₹1 to enter today's challenge",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: "ri-movie-2-fill",
      title: "Guess Movie",
      description: "Watch the clip and guess the movie name",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: "ri-trophy-fill",
      title: "Win Prize",
      description: "Get instant payout if you guess correctly",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        
        <div className="space-y-8 max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color} flex-shrink-0`}>
                <i className={`${step.icon} text-2xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
            Start Playing Now!
          </button>
        </div>
      </div>
    </section>
  );
}