import React from 'react';

const categories = [
  { name: 'Men', image: 'https://source.unsplash.com/300x200/?men,clothing' },
  { name: 'Women', image: 'https://source.unsplash.com/300x200/?women,dress' },
  { name: 'Accessories', image: 'https://source.unsplash.com/300x200/?accessories,bags' },
];

const Categories = () => (
  <div className="category-grid">
    {categories.map((cat, index) => (
      <div className="category-card" key={index}>
        <img src={cat.image} alt={cat.name} />
        <p>{cat.name}</p>
      </div>
    ))}
  </div>
);

export default Categories;
