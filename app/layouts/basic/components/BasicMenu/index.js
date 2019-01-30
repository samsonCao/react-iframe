import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Menu } from '@alifd/next';
import './index.scss';

const { SubMenu, Item } = Menu;

class BasicMenu extends Component {
    render() {
        return (
            <Menu defaultOpenKeys='0' className='menu' openMode='single'>
                <SubMenu key='0' label='模拟目录 1'>
                    <Item key='0-0'><Link to='/counter'>Counter页面</Link></Item>
                    <Item key='0-1'>虚拟菜单 2</Item>
                    <Item key='0-2'>虚拟菜单 3</Item>
                </SubMenu>
                <SubMenu key='1' label='模拟目录 2'>
                    <Item key='1-0'>虚拟菜单 1</Item>
                    <Item key='1-1'>虚拟菜单 2</Item>
                    <Item key='1-2'>虚拟菜单 3</Item>
                </SubMenu>
                <SubMenu key='2' label='模拟目录 3'>
                    <Item key='2-0'>虚拟菜单 1</Item>
                    <Item key='2-1'>虚拟菜单 2</Item>
                    <Item key='2-2'>虚拟菜单 3</Item>
                </SubMenu>
                <SubMenu key='3' label='模拟目录 4'>
                    <Item key='3-0'>虚拟菜单 1</Item>
                    <Item key='3-1'>虚拟菜单 2</Item>
                    <Item key='3-2'>虚拟菜单 3</Item>
                </SubMenu>
            </Menu>
        );
    }
}

BasicMenu.propTypes = {};

export default BasicMenu;
