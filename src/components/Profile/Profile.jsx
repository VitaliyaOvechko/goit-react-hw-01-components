import { UserProfile } from './Profile.styled';
import { ProfileDescription } from './ProfileDescription';
import { ProfileStats } from './ProfileStats';

export const Profile = ({ user }) => {
  return (
    <UserProfile>
      <ProfileDescription user={user} />
      <ProfileStats user={user} />
    </UserProfile>
  );
};
