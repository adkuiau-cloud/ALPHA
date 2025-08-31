export interface Car {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  images: string[];
  category: 'SUV' | 'Sedan' | 'Truck' | 'Custom';
  tags: string[];
  specs: {
    engine: string;
    transmission: string;
    mileage: string;
    fuelType: string;
    drivetrain: string;
  };
  description: string;
  status: 'Available' | 'Sold';
  featured: boolean;
  videoUrl?: string;
}