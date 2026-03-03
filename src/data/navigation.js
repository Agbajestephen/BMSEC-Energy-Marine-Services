export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Products',
    path: '/products',
    submenu: [
      {
        category: 'Oil & Lubricants',
        path: '/products/oil-lubricants',
        description: 'Premium engine oils, transmission fluids & industrial lubricants',
        items: ['Engine Oil', 'Transmission Fluid', 'Industrial Lubricants', 'Gear Oil'],
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
      },
      {
        category: 'Tires',
        path: '/products/tires',
        description: 'Top-brand tires for cars, trucks, SUVs & motorcycles',
        items: ['Car Tires', 'Truck Tires', 'SUV Tires', 'Performance Tires'],
        image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400&q=80',
      },
      {
        category: 'Batteries',
        path: '/products/batteries',
        description: 'Reliable power for every vehicle type & industrial use',
        items: ['Car Batteries', 'Truck Batteries', 'Marine Batteries', 'Industrial'],
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80',
      },
      {
        category: 'Petrol & Fuel',
        path: '/products/petrol-fuel',
        description: 'High-quality fuels for optimal performance & efficiency',
        items: ['Premium 95', 'Regular 93', 'Diesel', 'Racing Fuel'],
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&q=80',
      },
    ],
  },
  { name: 'Services', path: '/services' },
  { name: 'Stations', path: '/stations' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]