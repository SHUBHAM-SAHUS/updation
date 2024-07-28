import React from 'react';
import style from './style.module.scss';
import { FaArrowLeftLong } from 'react-icons/fa6';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className={style.termsPageContainer}>
        <h1>
          {' '}
          <span>
            <FaArrowLeftLong />
          </span>{' '}
          Privacy Policy
        </h1>
        <div className={style.pageContent}>
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </h4>

          <ul>
            <li>
              {' '}
              It has leap into electronic survived not only five centuries
            </li>
            <li>
              {' '}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It has
              survived not only five leap into electronic centuries
            </li>
            <li>
              {' '}
              It has survived not only It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged. leap into electronic five centuries
            </li>
            <li>
              Lorem Ipsum passages, It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. and leap into electronic more recently with desktop
            </li>
            <li>
              Lorem leap into electronic It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. Ipsum passages, and more recently
              with desktop
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
