import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <section className='stories'>
      {hits.map((story) => {
        const {
          objectID,
          title,
          num_comments,
          url,
          points,
          author,
          created_at,
        } = story;

        const date = new Date(created_at).toLocaleDateString('sr-Rs', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });

        return (
          <article className='story' key={objectID}>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span>
              {num_comments} comments | {date}
            </p>
            <div>
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='read-link'
              >
                read more
              </a>
              <button
                onClick={removeStory.bind(this, objectID)}
                className='remove-btn'
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
