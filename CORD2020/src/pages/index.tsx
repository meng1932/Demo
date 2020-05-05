import React from 'react';
import './index.less';
import { Input } from 'antd';
import { history } from 'umi';

import titleCover from '../assets/title-cover.png';

const { Search } = Input;

export default () => {
  return (
    <div className="empty-search-bar-page">
      <div className="title-cover-box">
        <img className="title-cover" src={titleCover} alt="title cover" />
      </div>
      <div className="title-box">
        <h1>COVID-19 Open Research Dataset Challenge (CORD-19)</h1>
        <h2>
          An AI challenge with AI2, CZI, MSR, Georgetown, NIH &amp; The White
          House
        </h2>
        <Search
          placeholder="Ask your question here!"
          enterButton="Search"
          size="large"
          onSearch={(value: any) =>
            history.push(`/answer?q=${value.replace(' ', '%')}&s=0&e=4`)
          }
        />
      </div>
    </div>
  );
};
