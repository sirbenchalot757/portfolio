import React from 'react';

const PdfViewerLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {

    const containerStyle = {
        backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)',
        backgroundSize: '16px 16px', // [background-size:16px_16px]
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '12in', width: '100%' }}>
            <div style={{ borderRadius: '0.5rem', backgroundColor: 'white', border: '1px solid #ccc', padding: '0.5in', width: '8.5in', minHeight: '11in', color: 'rgb(39, 39, 42)' }}>
                {children}
            </div>
        </div>

    );
};

export default PdfViewerLayout;
