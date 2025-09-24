import React from 'react';
import profilePhoto from '@/assets/perfil.jpeg';

interface ProfileSectionProps {
  name: string;
  bio: string;
  profileImage?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ 
  name, 
  bio, 
  profileImage = profilePhoto 
}) => {
  console.log('ProfileSection rendering with:', { name, bio, profileImage });
  return (
    <div className="profile-container">
      <img
        src={profileImage}
        alt={`${name} - Foto de perfil`}
        className="profile-image"
      />
      <div>
        <h1 className="profile-name">{name}</h1>
        <p className="profile-bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileSection;