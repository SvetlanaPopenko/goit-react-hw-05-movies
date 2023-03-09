import styled from 'styled-components';

export const CastGalleryItemWrp = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CastImage = styled.img`
  width: 360px;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 2px 3px 5px #c7fc07, -1px -3px 5px #0f70de;
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;
export const CastDesc = styled.p`
  font-size: 24px;
  padding: 10px;
  color: #614c02;
  text-align: center;
`;
export const CastTitle = styled.h2`
  font-size: 26px;
  padding: 10px;
  color: #cb861e;
  text-align: center;
`;
