import React, { ComponentProps, FC } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { spacing } from '../shared/styles';

const List = styled.ul`
  min-width: 180px;
  border-radius: ${spacing.borderRadius.small}px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TooltipLinkList: FC<Props> = ({ links, LinkWrapper, ...rest }) => {
  return (
    <List {...rest}>
      {links.map((data, index) => (
        <ListItem
          /* eslint-disable react/no-array-index-key */
          key={index}
          LinkWrapper={LinkWrapper}
          {...data}
        />
      ))}
    </List>
  );
};

interface Props {
  links: Omit<ComponentProps<typeof ListItem>, 'LinkWrapper'>[];
  LinkWrapper?: Function;
}
