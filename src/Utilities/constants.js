import React from 'react';
import {BsJournals} from 'react-icons/bs';
import {BiTask} from 'react-icons/bi';
import {IoCreateOutline} from 'react-icons/io5';

export const links = [
    {
        id:1,
        name: 'Home',
        link: '/'
    },
    {
        id:2,
        name: 'Products',
        link: '/products'
    },
    {
        id:3,
        name: 'About',
        link: '/about'
    }
]




export const themes = [
  {
    id: 1,
    title: "Light",
    name: "light-theme",
    color: "#FFFFFF",
  },
  {
    id: 2,
    title: "Dark",
    name: "dark-theme",
    color: "#161616",
  },
  {
    id: 3,
    title: "Girls",
    name: "girl-theme",
    color: "#2C1320",
  },
];

export const services = [
  {
    id: 1,
    name: "Mission",
    description:
      "Velit sunt consequat fugiat Lorem qui laborum et proident sunt Lorem cillum fugiat reprehenderit.",
    icon: <BiTask className='icon'/>
  },
  {
    id: 2,
    name: "Vision",
    description:
      "Velit sunt consequat fugiat sunt Lorem cillum fugiat reprehenderit.",
    icon: <IoCreateOutline className='icon'/>
  },
  {
    id: 1,
    name: "History",
    description:
      "Eprehenderit. Voluptate enim qui nostrud mollit Lorem commodo veniam magna. ",
    icon: <BsJournals className='icon'/>
  },
];

export const products_url = 'https://course-api.com/react-store-products';
export const single_product_url = 'https://course-api.com/react-store-single-product?id=';
