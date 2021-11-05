import React from 'react';
import { IState as IProps } from '../App';

// const List = ({ people }: IProps) => {
//   return <div>List</div>;
// };

// Typechecking on parent
const List: React.FC<IProps> = ({ people }) => {
  return <div>List</div>;
};

export default List;
