import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 79vh; /* FIXED HEIGHT - No Scrollbars */
  margin: 0.5rem;
  width: 48%;
  background-color: var(--section-bg);
  padding: 1.2rem;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: hidden;
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  align-items: ${({ centerImage }) =>
    centerImage ? "center" : "flex-start"}; /* Center Image if Needed */
  gap: 1.2rem;
`;

export const Poster = styled.img`
  width: 130px;
  height: 180px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--title);
  max-width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
  color: var(--title);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GenreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem;
  max-width: 100%;
`;

export const Badge = styled.div`
  display: inline-block;
  padding: 0.35rem 0.7rem;
  border-radius: 15px;
  background-color: var(--genre-badge-bg);
  font-size: 0.75rem;
  font-weight: bold;
  color: var(--genre-badge-color);
  flex-shrink: 0;
`;

// icr75RECCmFv5xfy

export const MetaInfo = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: #444;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const DirectorText = styled.p`
  padding: 0.6rem;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 6px;
  color: rgba(95, 95, 95, 0.87);
  background: var(--director-bg);
`;

export const DetailsBox = styled.div`
  padding: 1rem;
  background: var(--movie-plot-bg);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DirectorAndAwardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #777;
`;

export const Awards = styled.span`
  font-weight: 600;
  font-size: 0.8rem;
`;

export const PlotText = styled.p`
  font-size: 0.9rem;
  color: rgba(45, 45, 45, 0.8);
  font-weight: 600;
  line-height: 1.6;
  text-align: justify;
  margin-top: 0rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: flex-end;
`;

export const CentreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
`;

export const Message = styled.p`
  font-size: 25px;
  font-weight: 800;
  color: rgba(161, 135, 177, 0.59);
  text-align: center;
`;
