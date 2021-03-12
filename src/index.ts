import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('change no 1');
});
user.on('change', () => {
  console.log('Change no 2');
});
user.on('save', () => {
  console.log('save was triggered');
});

user.trigger('change');
user.trigger('dsafdsa');
