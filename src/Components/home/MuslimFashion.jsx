import React from 'react';
import "./MuslimFashion.css"
import hijab from "../../assets/hijab.png";
import logo from "../../assets/logo-muslim.png";
import khimar from "../../assets/khimar.png";
import borka from "../../assets/borka.png";
import abaya from "../../assets/abaya.png";
import scarf from "../../assets/scarf.png";

const MuslimFashion = () => {
    const categories = [
        { id: 'hijab', name: 'হিজাব', image: `${hijab}` },
        { id: 'abaya', name: 'খিমার', image: `${khimar}` },
        { id: 'khimar', name: 'বোরকা', image: `${borka}` },
        { id: 'borka', name: 'আবায়া', image: `${abaya}` },
        { id: 'scarf', name: 'স্কার্ফ', image: `${scarf}` }, 
      ];
      
    
    return (
      <div className="d-flex justify-content-center">
        <div className="muslim-fashion-section">
        
        <div className="categories">
          <div className="category-card">
          <img src={logo} alt='logo' />
          </div>
          {categories.map(category => (
            <div key={category.id} className="category-card">
              
              <a href={`https://ajkerdeal.com/category/womens-fashion-borka-hijab-scarf-${category.id}`}  target="_blank"  style={{ height: '13rem' }}>
              <img src={category.image} alt={category.name} />
              
                </a>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
};

export default MuslimFashion;