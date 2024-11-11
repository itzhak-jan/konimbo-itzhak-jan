import './Loading.css';

export const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-text">Loading</div>
            <div className="loading-spinner">
                <svg viewBox="0 0 50 50">
                    <circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};