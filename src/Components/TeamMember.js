import React from 'react';

const TeamMember = ({ image, name, designation }) => {
    return (
        <div className="team-member">
            <img src={image} alt={name} className="team-member-image" />
            <div className="team-member-details">
                <h3>{name}</h3>
                <p>{designation}</p>
            </div>
        </div>
    );
}

export default TeamMember;
