import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('Admin@2022'),
      isAdmin: true,
    },
    {
      name: 'Ecomm User',
      email: 'ecomm@example.com',
      password: bcrypt.hashSync('Ecomm@2022'),
      isAdmin: false,
    },
  ],
  products: [
    //Uncomment and fill sample data below to get seed data populated
    // {
    //   name: '',
    //   slug: 'samsung-led-tv-43inch',
    //   category: '',
    //   image: '', //store images for seed data at client --> public/images/image.jpg
    //   countInStock: 10,
    //   brand: '',
    //   rating: 4.5,
    //   numReviews: 0,
    //   description: '',
    // },
  ],
};
export default data;
