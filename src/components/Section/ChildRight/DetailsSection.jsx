import { useEffect, useState } from "react";
import {
  Section,
  MovieDetailsWrapper,
  Poster,
  Title,
  InfoContainer,
  GenreWrapper,
  Badge,
  MetaInfo,
  DirectorText,
  DetailsBox,
  DirectorAndAwardsWrapper,
  Awards,
  PlotText,
  ButtonWrapper,
  CentreWrapper,
  Message,
} from "./detailsSection.styles.js";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { PuffLoader } from "react-spinners";
import useFetchUserMovie from "../../../Hooks/useFetchUserMovie.js";
import useUpdateMovieStatus from "../../../Hooks/useUpdateMovieStatus.js";
import { useQueryClient } from "@tanstack/react-query";
import useCheckAuthorised from "../../../Hooks/useCheckAuthorised.js";
import generateNewStatus from "../../../utils/generateNewStatus.js";
import parseAwards from "../../../utils/parseAwards.js";

export default function DetailsSection({ movieID }) {
  const [movieStatus, setMovieStatus] = useState({});
  const queryClient = useQueryClient();
  const { data: user } = useCheckAuthorised();
  const { movieAndStatus, isLoading } = useFetchUserMovie(user.id, movieID);
  const { updateMovieStatus } = useUpdateMovieStatus();

  useEffect(() => {
    setMovieStatus({ ...movieAndStatus?.status });
  }, [movieAndStatus]);

  const handleClick = function (columnName) {
    const newStatusValues = generateNewStatus(
      columnName,
      movieStatus[columnName]
    );
    queryClient.setQueryData(["movieDetail", movieID], (oldData) => {
      return {
        ...oldData,
        status: {
          ...oldData?.status,
          [columnName]: newStatusValues[columnName],
        },
      };
    });
    updateMovieStatus({
      userId: user.id,
      movieId: movieAndStatus.movieData.imdbID,
      title: movieAndStatus.movieData.Title,
      poster: movieAndStatus.movieData.Poster,
      type: movieAndStatus.movieData.Type,
      year: movieAndStatus.movieData.Year,
      column: columnName,
    });
  };

  if (isLoading) {
    return (
      <Section>
        <CentreWrapper>
          <PuffLoader size={80} />
        </CentreWrapper>
      </Section>
    );
  }

  const isTitleLong = movieAndStatus?.movieData.Title.length > 20;
  const isGenreWrapped = movieAndStatus?.movieData.Genre.split(",").length > 3;
  const centerImage = isTitleLong && isGenreWrapped;

  const genres = movieAndStatus?.movieData.Genre.split(",");
  const displayedGenres = genres?.slice(0, 3);
  const remainingGenres =
    genres?.length > 3 ? `+${genres.length - 3} more` : "";

  return (
    <Section>
      {movieAndStatus ? (
        <>
          <MovieDetailsWrapper centerImage={centerImage}>
            <Poster
              src={movieAndStatus.movieData.Poster}
              alt={movieAndStatus.movieData.Title}
            />
            <InfoContainer>
              <Title>
                {movieAndStatus.movieData.Title} |{" "}
                {movieAndStatus.movieData.imdbRating} ⭐
              </Title>

              <MetaInfo>
                <i>
                  Released on {movieAndStatus.movieData.Released} |{" "}
                  {movieAndStatus.movieData.Runtime} |{" "}
                  {movieAndStatus.movieData.Language}
                </i>
              </MetaInfo>

              <GenreWrapper>
                {displayedGenres.map((genre) => (
                  <Badge key={movieAndStatus.movieData.imdbID + genre}>
                    {genre}
                  </Badge>
                ))}
                {remainingGenres && (
                  <Badge color="#bbb">{remainingGenres}</Badge>
                )}
              </GenreWrapper>
            </InfoContainer>
          </MovieDetailsWrapper>

          <DetailsBox>
            <DirectorAndAwardsWrapper>
              <DirectorText>
                {movieAndStatus.movieData.Director.toUpperCase()}
              </DirectorText>
              {movieAndStatus.movieData.Awards && (
                <Awards>
                  {parseAwards(movieAndStatus.movieData.Awards).join(" | ")}
                </Awards>
              )}
            </DirectorAndAwardsWrapper>

            <PlotText>
              <i>{movieAndStatus.movieData.Plot}</i>
            </PlotText>

            <ButtonWrapper>
              {movieStatus.watched ? (
                <IoIosCheckmarkCircle
                  size={25}
                  onClick={() => handleClick("watched")}
                />
              ) : (
                <IoIosCheckmarkCircleOutline
                  size={25}
                  onClick={() => handleClick("watched")}
                />
              )}

              {movieStatus.bookmarked ? (
                <IoBookmark
                  size={25}
                  onClick={() => handleClick("bookmarked")}
                />
              ) : (
                <IoBookmarkOutline
                  size={25}
                  onClick={() => handleClick("bookmarked")}
                />
              )}
              {movieStatus.favourite ? (
                <MdFavorite
                  size={25}
                  onClick={() => handleClick("favourite")}
                />
              ) : (
                <MdFavoriteBorder
                  size={25}
                  onClick={() => handleClick("favourite")}
                />
              )}
            </ButtonWrapper>
          </DetailsBox>
        </>
      ) : (
        <CentreWrapper>
          <Message>Movie details will appear here</Message>
        </CentreWrapper>
      )}
    </Section>
  );
}
