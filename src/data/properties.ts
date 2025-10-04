export interface Property {
  id: number;
  title: string;
  location: string;
  description: string;
  fullDescription: string;
  images: string[];
  price: number;
  rating: number;
  bedrooms: number;
  bathrooms: number;
  wifi: boolean;
  parking: boolean;
  airConditioning: boolean;
  amenities: string[];
}
export const propertiesData: Property[] = [{
  id: 1,
  title: 'Modern Downtown Loft',
  location: 'Downtown, Cityville',
  description: 'Stylish loft apartment in the heart of downtown, walking distance to restaurants and attractions.',
  fullDescription: "Experience urban living at its finest in this contemporary loft apartment. With soaring ceilings, expansive windows, and an open floor plan, this stylish space offers the perfect blend of comfort and sophistication. Located in the vibrant heart of downtown, you'll be steps away from award-winning restaurants, shopping, and cultural attractions.",
  images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80', 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
  price: 125,
  rating: 4.9,
  bedrooms: 1,
  bathrooms: 1,
  wifi: true,
  parking: true,
  airConditioning: true,
  amenities: ['Smart TV', 'Full Kitchen', 'Washer/Dryer', 'High-Speed Internet', 'Gym Access', 'Rooftop Terrace']
}, {
  id: 2,
  title: 'Luxury Beachfront Villa',
  location: 'Coastal Drive, Beachtown',
  description: 'Stunning beachfront property with panoramic ocean views and private access to the beach.',
  fullDescription: 'Indulge in luxury with this breathtaking beachfront villa offering unobstructed panoramic ocean views. Fall asleep to the sound of waves and wake up to spectacular sunrises over the water. This spacious property features high-end finishes throughout, floor-to-ceiling windows, and a private path leading directly to the pristine sandy beach.',
  images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
  price: 350,
  rating: 5.0,
  bedrooms: 3,
  bathrooms: 2.5,
  wifi: true,
  parking: true,
  airConditioning: true,
  amenities: ['Private Pool', 'Beach Access', 'Outdoor Kitchen', 'Fire Pit', 'Smart Home System', 'Gourmet Kitchen']
}, {
  id: 3,
  title: 'Cozy Mountain Retreat',
  location: 'Pine Ridge, Mountain View',
  description: 'Charming cabin surrounded by nature with breathtaking mountain views and hiking trails nearby.',
  fullDescription: 'Escape to this charming mountain cabin nestled among towering pines with breathtaking views of the surrounding peaks. This cozy retreat combines rustic charm with modern comforts, featuring a stone fireplace, exposed wooden beams, and a wraparound deck perfect for enjoying morning coffee or evening stargazing. Numerous hiking trails start right from your doorstep.',
  images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80', 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
  price: 200,
  rating: 4.8,
  bedrooms: 2,
  bathrooms: 1,
  wifi: true,
  parking: true,
  airConditioning: false,
  amenities: ['Fireplace', 'Hot Tub', 'Hiking Trails', 'BBQ Grill', 'Mountain Views', 'Board Games']
}, {
  id: 4,
  title: 'Urban Studio Apartment',
  location: 'Arts District, Metropolis',
  description: 'Compact and stylish studio in the vibrant arts district, perfect for solo travelers or couples.',
  fullDescription: "This thoughtfully designed studio apartment makes the most of its space with clever storage solutions and multi-functional furniture. Located in the trendy Arts District, you'll be surrounded by galleries, cafes, and boutiques. The large industrial windows flood the space with natural light and provide excellent views of the city skyline.",
  images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
  price: 90,
  rating: 4.6,
  bedrooms: 0,
  bathrooms: 1,
  wifi: true,
  parking: false,
  airConditioning: true,
  amenities: ['Smart TV', 'Kitchenette', 'Bike Storage', 'Roof Access', 'Laundry Facilities']
}, {
  id: 5,
  title: 'Lakeside Family Cottage',
  location: 'Lake Serenity, Woodland County',
  description: 'Spacious cottage on the shores of Lake Serenity, ideal for family gatherings and water activities.',
  fullDescription: 'Create lasting family memories in this spacious lakeside cottage with direct water access. The open concept living area features large windows overlooking the lake, while the expansive deck is perfect for outdoor dining and watching spectacular sunsets. Spend your days swimming, fishing, or kayaking on the pristine waters of Lake Serenity.',
  images: ['https://images.unsplash.com/photo-1475087542963-13ab5e611954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
  price: 275,
  rating: 4.9,
  bedrooms: 4,
  bathrooms: 2,
  wifi: true,
  parking: true,
  airConditioning: true,
  amenities: ['Private Dock', 'Kayaks', 'Fire Pit', 'Game Room', 'Fishing Equipment', 'Outdoor Shower']
}, {
  id: 6,
  title: 'Historic Townhouse',
  location: 'Heritage District, Old Town',
  description: 'Beautifully restored 19th-century townhouse with modern amenities in the historic district.',
  fullDescription: "Step back in time in this meticulously restored 19th-century townhouse that blends historic charm with modern comforts. Original features like hardwood floors, crown moldings, and a brick fireplace are complemented by updated kitchen and bathrooms. Located in the heart of the Heritage District, you'll be surrounded by historic sites, boutique shops, and fine dining.",
  images: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1600047509807-f8261a1f6378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'],
  price: 180,
  rating: 4.7,
  bedrooms: 2,
  bathrooms: 1.5,
  wifi: true,
  parking: false,
  airConditioning: true,
  amenities: ['Fireplace', 'Courtyard Garden', 'Gourmet Kitchen', 'Claw-foot Tub', 'Wine Cellar']
}];