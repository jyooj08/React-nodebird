import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href='/'><a>NodeBird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/signup'><a>Signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLogin ? <UserProfile setLogin={setLogin} /> : <LoginForm setLogin={setLogin}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href='https://jyooj08.github.io/Portfolio/' target='_blank' rel='norefferrer noopener'>Made by Yujin😆</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout;