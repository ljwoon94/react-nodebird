import 'antd/dist/antd.css'
import React from 'react';
import propTypes from 'prop-types';
import { Component } from 'react';
import Head from 'next/head';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: propTypes.elementType.isRequired,
}

export default NodeBird;