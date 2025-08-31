import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedCars from '@/components/FeaturedCars';
import SearchFilters from '@/components/SearchFilters';
import CarCard from '@/components/CarCard';
import Footer from '@/components/Footer';
import { Car } from '@/types/car';
import { mockCars } from '@/data/cars';
import { openWhatsAppChat } from '@/utils/whatsapp';

interface FilterState {
  search: string;
  category: string;
  priceMin: string;
  priceMax: string;
  year: string;
  status: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    priceMin: '',
    priceMax: '',
    year: '',
    status: ''
  });

  const filteredCars = useMemo(() => {
    return mockCars.filter(car => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const searchMatch = 
          car.title.toLowerCase().includes(searchLower) ||
          car.make.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!searchMatch) return false;
      }

      // Category filter
      if (filters.category && car.category !== filters.category) return false;

      // Price filter
      if (filters.priceMin && car.price < parseInt(filters.priceMin)) return false;
      if (filters.priceMax && car.price > parseInt(filters.priceMax)) return false;

      // Year filter
      if (filters.year && car.year.toString() !== filters.year) return false;

      // Status filter
      if (filters.status && car.status !== filters.status) return false;

      return true;
    });
  }, [filters]);

  const handleViewDetails = (car: Car) => {
    navigate(`/car/${car.id}`);
  };

  const handleWhatsAppInquiry = (car: Car) => {
    openWhatsAppChat(car);
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="inventory" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vehicle Inventory
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our complete selection of premium vehicles. Use the filters below to find your perfect ride.
            </p>
          </div>

          <SearchFilters onFiltersChange={handleFiltersChange} />

          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {filteredCars.length} Vehicle{filteredCars.length !== 1 ? 's' : ''} Available
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onViewDetails={handleViewDetails}
                  onWhatsAppInquiry={handleWhatsAppInquiry}
                />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No vehicles found matching your criteria. Please adjust your filters and try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <FeaturedCars 
        cars={mockCars}
        onViewDetails={handleViewDetails}
        onWhatsAppInquiry={handleWhatsAppInquiry}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
