import uuid from 'uuid';

const Events = [
  {
    id: uuid.v4(),
    header: "Hello World",
    date: new Date(2017, 6, 15),
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: uuid.v4(),
    header: "Another Event",
    date: new Date(),
    description: "Another description"
  },
];

export default Events;
