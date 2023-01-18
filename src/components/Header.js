import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({sitename}) => {
    const navigate = useNavigate();
    const goback = ()=>{
        //이전페이지 이동
        navigate(-1)
    }
    const goSubpage = ()=>{
        //이전페이지 이동
        navigate('/subpages')
    }
    return (
        <div>
            <h1>{sitename}</h1>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/about?name=green&age=30'>About</Link></li>
                <li><Link to='/product/item1'>iphone</Link></li>
                <li><Link to='/product/item2'>galaxy</Link></li>
                <li><Link to='/subpages'>서브페이지</Link></li>
            </ul>
            <div>
                <button onClick={goback}>뒤로가기</button>
                <button onClick={goSubpage}>subpage가기</button>
            </div>
        </div>
    );
};

export default Header;