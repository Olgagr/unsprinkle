import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const [imageSrc, setImageSrc] = useState({});

  useEffect(() => {
    setImageSrc({
      fallback: `${src}.jpg`,
      avif: `${src}@3x.avif 3x, ${src}@2x.avif 2x, ${src}.avif 1x`,
      jpg: `${src}@3x.jpg 3x, ${src}@2x.jpg 2x, ${src}.jpg 1x`,
    });
  }, [src]);

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        {src ? (
          <picture>
            <source type="image/avif" srcSet={imageSrc.avif} />
            <source type="image/jpg" srcSet={imageSrc.jpg} />
            <Image src={imageSrc.fallback} alt={alt} />
          </picture>
        ) : (
          <p>Loading</p>
        )}
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
