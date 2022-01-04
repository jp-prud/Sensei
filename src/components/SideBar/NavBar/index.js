import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

import Home from '../../../assets/images/icons/sidebar/Home.svg';
import Post from '../../../assets/images/icons/sidebar/Document.svg';
import Folder from '../../../assets/images/icons/sidebar/Folder.svg';
import Image from '../../../assets/images/icons/sidebar/Image.svg';
import Paper from '../../../assets/images/icons/sidebar/Paper.svg';
import Message from '../../../assets/images/icons/sidebar/Message.svg';
import Edit from '../../../assets/images/icons/sidebar/Edit.svg';
import Extension from '../../../assets/images/icons/sidebar/Extension.svg';
import Peoples from '../../../assets/images/icons/sidebar/Peoples.svg';
import Setting from '../../../assets/images/icons/sidebar/Setting.svg';

export default function Navbar() {
  return (
    <Container>
      <Link to="/">
        <img src={Home} alt="Home Page" />
        <span>Dashboard</span>
      </Link>
      <Link to="/posts">
        <img src={Post} alt="Post Page" />
        <span>Post</span>
      </Link>
      <Link to="/categories">
        <img src={Folder} alt="Category Page" />
        <span>Categories</span>
      </Link>
      <Link to="/media">
        <img src={Image} alt="Media Page" />
        <span>Media</span>
      </Link>
      <Link to="/pages">
        <img src={Paper} alt="Pages" />
        <span>Pages</span>
      </Link>
      <Link to="/comments">
        <img src={Message} alt="Comments Page" />
        <span>Comments</span>
      </Link>

      <span className="section-title"> System </span>

      <Link to="/apparance">
        <img src={Edit} alt="Edit Page" />
        <span>Apparance</span>
      </Link>
      <Link to="/extensions">
        <img src={Extension} alt="Extension Page" />
        <span>Extensões</span>
      </Link>
      <Link to="/users">
        <img src={Peoples} alt="Peoples Page" />
        <span>Usuários</span>
      </Link>
      <Link to="/settings">
        <img src={Setting} alt="Setting Page" />
        <span>Settings</span>
      </Link>
    </Container>
  );
}
