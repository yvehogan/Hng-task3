import React from 'react';
import Footer from '../commons/Footer';

function PageWrapper({ children }) {
    return (
        <div className="m-0 w-full">

            <div className="w-full overflow-auto">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;
