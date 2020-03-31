export interface user {
  id: string,
  username: string,
  messageIds: number[],
}

export interface message {
  id: string,
  text: string,
  userId: string,
}

const users: {[key: string]: user} = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
    messageIds: [1],
  },
  2: {
    id: '2',
    username: 'Dave Davids',
    messageIds: [2],
  },
};

const messages: {[key: string]: message} = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

export default {
  users,
  messages,
};
