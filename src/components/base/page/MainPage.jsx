import React from 'react';

import styles from './MainPage.module.css';

import Content from '../content/Content';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const MainPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
