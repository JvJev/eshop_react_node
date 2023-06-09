import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jev',
      email: 'jevgenij.voronov@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Mr.Martynas',
      email: 'celiulioze@gmail.com',
      password: bcrypt.hashSync('121'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike slim shirt',
      slug: 'nike slim shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Nikeshs slim shirt',
      slug: 'nike sghsslim shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '3',
      name: 'Nikge slim shirt',
      slug: 'nikfge slim shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '4',
      name: 'Nikefgh slim shirt',
      slug: 'nike sfdghslim shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};

export default data;
