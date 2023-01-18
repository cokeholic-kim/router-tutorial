import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <h2>홈</h2>
          <p>가장 먼저 보여지는 페이지입니다.</p> 
          {/* <Link to="/product/aaaa(파라미터의 value가된다.)">제품페이지가기</Link>  */}
        </div>
    );
};

export default Home;