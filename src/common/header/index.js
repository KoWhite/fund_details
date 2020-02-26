import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import {
    HeaderWrapper
} from './style';

class Header extends Component {
    render () {
        const { test, handleChangeTest} = this.props;
        return (
            <HeaderWrapper>
                <div>{test}</div>
                <button onClick={handleChangeTest}>改变</button>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.getIn(['header', 'test'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeTest () {
            dispatch(actionCreators.changeTest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);