import React, { useState, useEffect } from 'react';
import {
    PublicationsContainer,
    SectionTitle,
    PublicationsList,
    PublicationItem,
    PublicationTitle,
    PublicationAuthors,
    PublicationJournal,
  } from './styles';

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch('/publications.json')
      .then((res) => res.json())
      .then((data) => setPublications(data))
      .catch((err) => console.error("Error fetching publications:", err));
  }, []);

  return (
    <PublicationsContainer>
      <SectionTitle>Publications</SectionTitle>
      <PublicationsList>
        {publications.map((pub, index) => (
          <PublicationItem key={index}>
            <PublicationTitle>{pub.title}</PublicationTitle>
            <PublicationAuthors>{pub.authors}</PublicationAuthors>
            <PublicationJournal>
              {pub.journal}, {pub.year}
            </PublicationJournal>
          </PublicationItem>
        ))}
      </PublicationsList>
    </PublicationsContainer>
  );
};

export default Publications;