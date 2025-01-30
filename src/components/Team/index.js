import React, { useState, useEffect } from 'react';
import {
  TeamContainer,
  SectionTitle,
  TeamMembers,
  TeamMember,
  MemberImage,
  MemberName,
  MemberTitle,
  MemberDetails,
} from './styles';

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch('/team.json')
      .then((res) => res.json())
      .then((data) => setTeamData(data))
      .catch((err) => console.error('Error fetching team data:', err));
  }, []);

  return (
    <TeamContainer>
      <SectionTitle>Meet the Team</SectionTitle>
      <TeamMembers>
        {teamData.map((member) => (
          <TeamMember key={member.email}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberTitle>{member.title}</MemberTitle>
            <MemberDetails>
              <p>Website: <a href={member.website}>{member.website}</a></p>
              <p>Specializes in: {member.specialization}</p>
              {/* <p>Email: {member.email}</p> */}
            </MemberDetails>
          </TeamMember>
        ))}
      </TeamMembers>
    </TeamContainer>
  );
};

export default Team;