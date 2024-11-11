import React, { useState } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH_TERM } from '../../redux/actions';
import { AppState } from '../../redux/types';

export const Header: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state: AppState) => state.searchTerm) || '';
    const hasValue = searchTerm?.length > 0;

    const onSearchClicked = (searchText: string): void => {
        dispatch({ type: SET_SEARCH_TERM, payload: searchText }); 
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="search-wrapper">
                    <input
                        type="text"
                        className="search-input"
                        onChange={(e) => onSearchClicked(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <label className={`search-label ${(isFocused || hasValue) ? 'active' : ''}`}>
                        חיפוש מוצרים
                    </label>
                </div>
            </div>
        </header>
    );
};
