import { Car } from '@/types/car';
import featuredSuv from '@/assets/featured-suv.jpg';
import featuredSedan from '@/assets/featured-sedan.jpg';
import featuredTruck from '@/assets/featured-truck.jpg';

export const mockCars: Car[] = [
  {
    id: '1',
    title: 'Toyota Land Cruiser Prado',
    make: 'Toyota',
    model: 'Land Cruiser Prado',
    year: 2023,
    price: 85000,
    image: featuredSuv,
    images: [featuredSuv],
    category: 'SUV',
    tags: ['4WD', 'Luxury', 'Off-Road Ready', 'Low Mileage'],
    specs: {
      engine: '4.0L V6',
      transmission: 'Automatic',
      mileage: '15,000 km',
      fuelType: 'Petrol',
      drivetrain: '4WD'
    },
    description: 'Premium off-road SUV perfect for both city driving and bush adventures. Features advanced 4WD system and luxury interior.',
    status: 'Available',
    featured: true
  },
  {
    id: '2',
    title: 'BMW 5 Series Executive',
    make: 'BMW',
    model: '5 Series',
    year: 2022,
    price: 65000,
    image: featuredSedan,
    images: [featuredSedan],
    category: 'Sedan',
    tags: ['Luxury', 'Executive', 'Premium', 'Low Mileage'],
    specs: {
      engine: '2.0L Turbo',
      transmission: 'Automatic',
      mileage: '25,000 km',
      fuelType: 'Petrol',
      drivetrain: 'RWD'
    },
    description: 'Executive luxury sedan with premium features and exceptional performance. Perfect for business and comfort.',
    status: 'Available',
    featured: true
  },
  {
    id: '3',
    title: 'Ford Ranger Wildtrak',
    make: 'Ford',
    model: 'Ranger Wildtrak',
    year: 2023,
    price: 55000,
    image: featuredTruck,
    images: [featuredTruck],
    category: 'Truck',
    tags: ['4x4', 'Workhorse', 'Off-Road', 'Turbo'],
    specs: {
      engine: '3.2L Turbo Diesel',
      transmission: '6-Speed Manual',
      mileage: '12,000 km',
      fuelType: 'Diesel',
      drivetrain: '4x4'
    },
    description: 'Rugged pickup truck built for work and adventure. Exceptional off-road capability with powerful diesel engine.',
    status: 'Available',
    featured: true
  },
  {
    id: '4',
    title: 'Custom Jeep Wrangler Build',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2021,
    price: 72000,
    image: featuredSuv,
    images: [featuredSuv],
    category: 'Custom',
    tags: ['Custom Build', 'Modified', '4x4', 'Off-Road Beast'],
    specs: {
      engine: '3.6L V6 Modified',
      transmission: 'Manual',
      mileage: '35,000 km',
      fuelType: 'Petrol',
      drivetrain: '4x4'
    },
    description: 'Fully customized Jeep Wrangler with lift kit, custom wheels, and performance modifications for extreme off-road adventures.',
    status: 'Available',
    featured: false
  }
];