import styled from 'styled-components';
import logoPic from '../../statics/logo.jpg';

export const HeaderWrapper = styled.div`
    z-index: 1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    display: block;
    height: 56px;
    width: 56px;
    top: 0;
    left: 20px;
    background: url(${logoPic}) no-repeat;
    background-size: contain;
`;

export const Nav = styled.div`
    width: 1000px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
`;

export const NavItem = styled.div`
    margin-left: 50px;
    line-height: 56px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ff4900;
    }
    :hover {
        color: #ff4900;
    }
`;

export const SearchWrapper = styled.div`
    float: right;
    position: relative;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 40px;
    border: 1px solid hsla(0,0%,59.2%,.2);
    background-color: rgba(227,231,236,.2);
    box-sizing: border-box;
    color: #666;
    &::placeholder {
        color: #999;
    }
`;