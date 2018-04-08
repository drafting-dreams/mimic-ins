import delay from './delay';

const arts = [
  {
    id: 'madilynbeiley#1',
    src: '../../static/img/home/madilyn.jpg',
    userName: 'madilynbeiley',
    userAvatar: '../../static/img/home/madilynAvatar.jpg',
    likeNumber: 2918,
    comments: [{user: "madilynbailey", comm: "想看更多？\n骗你的，没了！"},
      {user: "technical", comm: "My dad told me..."},
      {user: "luka", comm: "he's not your dad"},
      {user: "likalo", comm: "hahaha"}],
    aspectRatio: 1.25,
    liked: false,
    collected: true,
    OSIdate: '2018-03-29T14:09:04.000Z',
    date: '2018年3月29日'
  }
];


class ArtApi {
  static getFriendsUpdates() {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(Object.assign([], arts))
      }, delay);
    }));
  }
}


export default ArtApi;
