import { useState } from 'react';
import { Car } from '@/types/car';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';

interface FeaturedCarsProps {
  cars: Car[];
  onViewDetails: (car: Car) => void;
  onWhatsAppInquiry: (car: Car) => void;
}

const FeaturedCars = ({ cars, onViewDetails, onWhatsAppInquiry }: FeaturedCarsProps) => {
  const featuredCars = cars.filter(car => car.featured);

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium vehicles from our exclusive inventory. Each one inspected, 
            serviced, and ready for your next adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onViewDetails={onViewDetails}
              onWhatsAppInquiry={onWhatsAppInquiry}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="automotive" size="lg" className="text-lg px-8">
            View All Inventory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;