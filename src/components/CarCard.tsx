import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, MessageCircle } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
  onWhatsAppInquiry: (car: Car) => void;
}

const CarCard = ({ car, onViewDetails, onWhatsAppInquiry }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-automotive)] transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={car.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {car.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-automotive-dark/80 text-white border-0">
              {tag}
            </Badge>
          ))}
        </div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          car.status === 'Available' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {car.status}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {car.title}
          </h3>
          <p className="text-muted-foreground">
            {car.year} • {car.specs.mileage} • {car.specs.fuelType}
          </p>
        </div>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-accent">{formatPrice(car.price)}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
          <div><strong>Engine:</strong> {car.specs.engine}</div>
          <div><strong>Drive:</strong> {car.specs.drivetrain}</div>
          <div><strong>Trans:</strong> {car.specs.transmission}</div>
          <div><strong>Category:</strong> {car.category}</div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="automotive" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails(car)}
          >
            <Eye className="w-4 h-4" />
            View Details
          </Button>
          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={() => onWhatsAppInquiry(car)}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;