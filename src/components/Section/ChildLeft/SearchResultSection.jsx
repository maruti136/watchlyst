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
import useFetchMovieList from "../../../Hooks/useFetchMovieList.js";
import { RiMovie2Line } from "react-icons/ri";
import Pagination from "../../Pagination/Pagination.jsx";
// --------------------------------------------------------------------------------------------

export default function SearchResultSection({ setMovieID }) {
  const [pageNo, setPageNo] = useState(1);
  const [query, setQuery] = useState("");
  // starts fetching only if there is a query
  const { data, isLoading } = useFetchMovieList(query);
  // sets query state after a delay of 500ms enhancing performance
  const debouncedQuery = debounce((value) => setQuery(value), 500);
  console.log(data);
  return (
    <Section>
      <Div name="search-input">
        <Input
          onChange={(e) => debouncedQuery(e.target.value)}
          placeholder="Search for movies..."
        />
      </Div>
      {isLoading && query && (
        <CentreWrapper>
          <PuffLoader />
        </CentreWrapper>
      )}
      {!isLoading && !query && (
        <CentreWrapper>
          <Message>Search result will appear here</Message>
          <RiMovie2Line size={90} color="rgba(165, 127, 188, 0.71)" />
        </CentreWrapper>
      )}
      {data?.Error && !isLoading && query && (
        <CentreWrapper>
          <Message>Movie not found!</Message>
        </CentreWrapper>
      )}
      {!data?.Error && !isLoading && query && (
        <Div name="search-result">
          {data.Search?.slice(3 * (pageNo - 1), 3 * pageNo).map((item) => (
            <Div name="result-item" key={item.imdbID}>
              <Img src={item.Poster} />
              <Div
                name="result-item-info"
                onClick={() => setMovieID(item.imdbID)}
              >
                <H3>{`${item.Title.slice(0, 16)}${
                  item.Title.length > 16 ? "..." : ""
                }`}</H3>
                <P>
                  <i>released in {item.Year} </i>
                  <Badge name={item.Type}>{item.Type}</Badge>
                </P>
              </Div>
            </Div>
          ))}
        </Div>
      )}
      {!data?.Error && !isLoading && query && (
        <Pagination
          pageNo={pageNo}
          totalPages={Math.ceil(data.Search.length / 3)}
          setPageNo={setPageNo}
        />
      )}
    </Section>
  );
}
