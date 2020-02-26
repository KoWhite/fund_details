import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch
} from './style';

class Header extends Component {
    render () {
        const {focused, list, handleInputBlur, handleInputFocused} = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>业绩排行</NavItem>
                    <NavItem className='left'>定投排行</NavItem>
                    <NavItem className='left'>估值排行</NavItem>
                    <NavItem className='right'>注册</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={()=> {handleInputFocused(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {/* {this.getListArea()} */}
                    </SearchWrapper>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocused(list) {

        },
        handleInputBlur () {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);