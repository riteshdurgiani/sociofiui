import ProfilePage from "@/components/ProfilePage";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSearchParams} from 'next/navigation'
const profile = () => {
    const searchParams = useSearchParams();
   
    const username = searchParams.get('username');
    const profileLink = searchParams.get('profileLink')

    return  (
        <ProfilePage
        username = {username}
        profileLink = {profileLink}
        />
    )
}

export default profile