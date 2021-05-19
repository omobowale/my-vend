import React from 'react';
import Category from './category';

import art from '../../../assets/img/icons/art.svg';
import audio from '../../../assets/img/icons/audio.svg';
import business from '../../../assets/img/icons/business.svg';
import event from '../../../assets/img/icons/event.svg';
import lifestyle from '../../../assets/img/icons/lifestyle.svg';
import tech from '../../../assets/img/icons/tech.svg';
import video from '../../../assets/img/icons/video.svg';
import web from '../../../assets/img/icons/web.svg';
import write from '../../../assets/img/icons/write.svg';

export const categories = [
  {
    id: 1,
    name: 'Art & Designs',
    icon: art,
    url: '/category/art-and-creative-designs',
  },
  {
    id: 9,
    name: 'Audio Services',
    icon: audio,
    url: '/category/audio-services',
  },
  {
    id: 8,
    name: 'Business',
    icon: business,
    url: '/category/business-consulting-and-professional-services',
  },
  {
    id: 3,
    name: 'Events',
    icon: event,
    url: '/category/events-planning-and-vendors',
  },
  {
    id: 10,
    name: 'Fashion & Lifestyle',
    icon: lifestyle,
    url: '/category/fashion-and-lifestyle',
  },
  {
    id: 6,
    name: 'Programming & Tech',
    icon: tech,
    url: '/category/technology-and-programming',
  },
  {
    id: 2,
    name: 'Video & Animation',
    icon: video,
    url: '/category/video-and-animation',
  },
  {
    id: 7,
    name: 'Web Dev & Digital Mktg',
    icon: web,
    url: '/category/web-design-and-digital-marketing',
  },
  {
    id: 5,
    name: 'Writing & Communication',
    icon: write,
    url: '/category/writing-and-communications',
  },
];

function Categories() {
  const lastItem = categories[8];

  return (
    <ul className="services_list">
      {categories.map((category) => {
        return <Category key={category.id} data={category} />;
      })}
      <li className="services_list--item">
        <a href={lastItem.url}>
          <img src={lastItem.icon} alt={lastItem.name} className="icon" />
          <p className="services_list--item--name">{lastItem.name}</p>
        </a>
      </li>
    </ul>
  );
}

export default Categories;
