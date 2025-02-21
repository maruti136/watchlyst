import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import {
  Flex,
  ButtonFlex,
  ResultSet,
  ManouverButton,
} from "./pagination.styles.js";

export default function Pagination({ pageNo, totalPages, setPageNo }) {
  return (
    <Flex>
      <ResultSet>
        <i>
          Page {pageNo} of {totalPages}
        </i>
      </ResultSet>
      <ButtonFlex>
        <ManouverButton
          onClick={() => setPageNo(pageNo - 1)}
          disabled={pageNo - 1 < 1}
        >
          <GrFormPreviousLink size={20} />
        </ManouverButton>
        <ManouverButton
          onClick={() => setPageNo(pageNo + 1)}
          disabled={pageNo + 1 > totalPages}
        >
          <GrFormNextLink size={20} />
        </ManouverButton>
      </ButtonFlex>
    </Flex>
  );
}
