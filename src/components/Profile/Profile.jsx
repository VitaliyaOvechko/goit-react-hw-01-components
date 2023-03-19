import { ProfileDescription } from "./ProfileDescription";
import { ProfileStats } from "./ProfileStats";

export const Profile = ({user}) => {
    return <div>
        <ProfileDescription user={user}/>
        <ProfileStats user={user}/>
    </div>
}
