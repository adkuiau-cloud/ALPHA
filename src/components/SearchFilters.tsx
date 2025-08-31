import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter } from 'lucide-react';

interface FilterState {
  search: string;
  category: string;
  priceMin: string;
  priceMax: string;
  year: string;
  status: string;
}

interface SearchFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
}

const SearchFilters = ({ onFiltersChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    priceMin: '',
    priceMax: '',
    year: '',
    status: ''
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    const resetState = {
      search: '',
      category: '',
      priceMin: '',
      priceMax: '',
      year: '',
      status: ''
    };
    setFilters(resetState);
    onFiltersChange(resetState);
  };

  return (
    <Card className="bg-gradient-to-r from-card to-secondary border-0 shadow-[var(--shadow-card)]">
      <CardContent className="p-6">
        {/* Main Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search by make, model, or keyword..."
            className="pl-10 h-12 text-lg border-2 focus:border-accent"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        {/* Quick Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['All', 'SUV', 'Sedan', 'Truck', 'Custom'].map((category) => (
            <Button
              key={category}
              variant={filters.category === (category === 'All' ? '' : category) ? 'hero' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('category', category === 'All' ? '' : category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Advanced Filters Toggle */}
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-accent hover:text-accent"
          >
            <Filter className="w-4 h-4 mr-2" />
            {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
          </Button>
          {Object.values(filters).some(val => val !== '') && (
            <Button variant="ghost" onClick={resetFilters} className="text-muted-foreground">
              Clear All
            </Button>
          )}
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Price Range</label>
              <div className="flex gap-2">
                <Input
                  placeholder="Min"
                  type="number"
                  value={filters.priceMin}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                />
                <Input
                  placeholder="Max"
                  type="number"
                  value={filters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Year</label>
              <Select value={filters.year} onValueChange={(value) => handleFilterChange('year', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Year</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Status</label>
              <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Status</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button variant="automotive" className="w-full">
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchFilters;