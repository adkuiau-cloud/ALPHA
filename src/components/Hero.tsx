import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dealership.jpg';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">GARAN MOTORS</span>
          <span className="text-accent text-3xl md:text-4xl font-normal">Bush Motors Excellence</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Specializing in premium 4x4s, rugged trucks, luxury sedans, and custom builds. 
          Your adventure starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Explore Our Inventory
          </Button>
          <Button variant="automotive" size="lg" className="text-lg px-8 py-4">
            Contact Dealer
          </Button>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
            <div className="text-sm md:text-base opacity-90">Vehicles Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
            <div className="text-sm md:text-base opacity-90">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
            <div className="text-sm md:text-base opacity-90">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
            <div className="text-sm md:text-base opacity-90">Service Support</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;