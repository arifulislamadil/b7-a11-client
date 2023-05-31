import React from 'react';
import { Helmet } from 'react-helmet';

const DynamicHeader = ({title}) => {
    return (
        <Helmet>
            <title>Funedutoys | {title}</title>
        </Helmet>
    );
};

export default DynamicHeader;