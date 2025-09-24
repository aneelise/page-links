import React from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

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