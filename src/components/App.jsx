import Profile from './Profile/Profile';
import user from 'folder/user.json';

const App = () => {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};

export default App;
