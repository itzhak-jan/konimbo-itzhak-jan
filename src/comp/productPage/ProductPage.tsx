
// components/product/ProductPage.tsx
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import './ProductPage.css';

export const ProductPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = useSelector((state: AppState) =>
        state.products?.find(p => p.id.toString() == id)
    );

    if (!product) return (
        <div className='product-page no-product'>
            <p className='no-product'>מוצר לא נמצא </p>
            <button className="back-button" onClick={() => navigate('/')}>
                חזרה לדף הבית
            </button>
        </div>);

    return (
        <div className="product-page">
            <button className="back-button" onClick={() => navigate('/')}>
                חזרה לדף הבית
            </button>
            <div className="product-details">
                <img src={product.imageUrl} alt={product.title} />
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className="price">{product.price} ₪</div>
                </div>
            </div>
        </div>
    );
};