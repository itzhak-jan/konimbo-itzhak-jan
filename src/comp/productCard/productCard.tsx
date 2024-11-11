import { SimpleProductModel } from "../../models/SimpleProductModel";
import { useNavigate } from 'react-router-dom';
import './productCard.css';

interface ProductProps {
  item: SimpleProductModel;
}

export const ProductCard: React.FC<ProductProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="product" 
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <img src={item.imageUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p className="description">{item.description}</p>
      <div className="price">{item.price} ₪</div>
    </div>
  );
};