import { useState } from "react";
import { PuffLoader } from "react-spinners";
import debounce from "lodash.debounce";
import {
  Section,
  Div,
  Img,
  H3,
  P,
  Input,
  Badge,
  CentreWrapper,
  Message,
} from "./leftSection.styles.js";
import useCheckAuthorised from "../../../Hooks/useCheckAuthorised.js";
import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase/supabaseClientAPI.js";
import fetchUserMoviesAPI from "../../../supabase/supabaseFetchAPI.js";

export default function UserMovieSection({ sectionType, setMovieID }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = debounce((value) => setQuery(value), 500);
  const { data: user } = useCheckAuthorised();

  // Load movies for loading state
  const { data, isLoading } = useQuery({
    queryKey: ["userMovieList", sectionType],
    queryFn: async function ({ queryKey }) {
      const [, sectionName] = queryKey;
      const data = await fetchUserMoviesAPI("*", {
        columnOne: ["userID", user.id],
        columnTwo: [sectionName, true],
      });

      return data;
    },
  });

  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Section>
      <Div name="search-input">
        <Input
          onChange={(e) => debouncedQuery(e.target.value)}
          placeholder="Search for movies..."
        />
      </Div>

      {isLoading && (
        <CentreWrapper>
          <PuffLoader />
        </CentreWrapper>
      )}

      {data?.Error && !isLoading && (
        <CentreWrapper>
          <Message>No movies found!</Message>
        </CentreWrapper>
      )}

      {filteredData && !isLoading && (
        <Div name="search-result">
          {filteredData.slice(0, 3).map((item) => (
            <Div name="result-item" key={item.movie_id}>
              <Img src={item.poster} />
              <Div
                name="result-item-info"
                onClick={() => setMovieID(item.movie_id)}
              >
                <H3>{`${item.title.slice(0, 16)}${
                  item.title.length > 16 ? "..." : ""
                }`}</H3>
                <P>
                  <i>released in {item.year} </i>
                  <Badge name={item.type}>{item.type}</Badge>
                </P>
              </Div>
            </Div>
          ))}
        </Div>
      )}
    </Section>
  );
}
