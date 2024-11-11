import { useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import { ProductCard } from '../productCard/productCard';
import './MainPage.css'
import { Loading } from '../loading/Loading';

export const MainPage: React.FC = () => {

    const productsList = useSelector((state: AppState) => state.products) || [];
    const textSearch = useSelector((state: AppState) => state.searchTerm) || '';
    const productsFilter = productsList.filter(i => i.title.toLowerCase().includes(textSearch.toLowerCase()));

    return (
        <div className="mainPage">
            {productsList.length > 0 ? productsList.length > 0 && productsFilter.length > 0 ?
                <div className="products-grid">
                    {productsFilter.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))
                    }
                </div>
                : <p className='no-result'>לא נמצאו תוצאות...</p> : <Loading />}
        </div>
    );
};