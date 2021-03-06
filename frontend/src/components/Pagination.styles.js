// Moved styles here to de-clutter the component file
import styled from 'styled-components';

const border = '2px solid #6123ff';

export const PageMenu = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 20px;
  font-size: 2rem;
  display: table;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;

  li.active {
    background-color: rgba(127, 127, 127, 0.33);
  }

  li {
    display: inline-block;
    padding: 20px;
    border-top: ${border};
    border-bottom: ${border};

    @media (min-width: 1024px) {
      font-size: 1rem;
      padding: 10px;
    }
    :hover {
      cursor: pointer;
    }

    :first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      border-left: ${border};
    }
    :last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-right: ${border};
    }

    :nth-child(even) {
      border-left: ${border};
      border-right: ${border};
    }
  }
`;
