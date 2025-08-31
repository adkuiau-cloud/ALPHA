import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Car } from '@/types/car';
import { mockCars } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { openWhatsAppChat } from '@/utils/whatsapp';
import { 
  ArrowLeft, 
  MessageCircle, 
  Car as CarIcon, 
  Gauge, 
  Fuel, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [car, setCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundCar = mockCars.find(c => c.id === id);
    if (foundCar) {
      setCar(foundCar);
    }
  }, [id]);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
          <Button onClick={() => navigate('/')}>Return to Home</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppInquiry = () => {
    openWhatsAppChat(car);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Inventory
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-automotive)]">
                <img
                  src={car.images[currentImageIndex] || car.image}
                  alt={car.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {car.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-automotive-dark/80 text-white border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-full font-semibold ${
                  car.status === 'Available' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {car.status}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              {car.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden ${
                        currentImageIndex === index ? 'border-accent' : 'border-border'
                      }`}
                    >
                      <img src={image} alt={`${car.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vehicle Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{car.title}</h1>
                <p className="text-xl text-muted-foreground">{car.year} • {car.make} {car.model}</p>
              </div>

              <div className="text-4xl font-bold text-accent">{formatPrice(car.price)}</div>

              <p className="text-foreground leading-relaxed">{car.description}</p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gauge className="w-5 h-5" />
                  <span>{car.specs.mileage}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Fuel className="w-5 h-5" />
                  <span>{car.specs.fuelType}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5" />
                  <span>{car.year}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CarIcon className="w-5 h-5" />
                  <span>{car.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleWhatsAppInquiry}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Inquiry
                </Button>
                <Button variant="automotive" size="lg" className="flex-1">
                  <Phone className="w-5 h-5" />
                  Call Dealer
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <strong className="text-foreground">Engine:</strong>
                    <p className="text-muted-foreground">{car.specs.engine}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Transmission:</strong>
                    <p className="text-muted-foreground">{car.specs.transmission}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Drivetrain:</strong>
                    <p className="text-muted-foreground">{car.specs.drivetrain}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Fuel Type:</strong>
                    <p className="text-muted-foreground">{car.specs.fuelType}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Mileage:</strong>
                    <p className="text-muted-foreground">{car.specs.mileage}</p>
                  </div>
                  <div>
                    <strong className="text-foreground">Category:</strong>
                    <p className="text-muted-foreground">{car.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Dealer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">GARAN MOTORS</p>
                    <p className="text-muted-foreground">123 Bush Road, Motor City</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <p className="text-muted-foreground">info@garanmotors.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarDetails;