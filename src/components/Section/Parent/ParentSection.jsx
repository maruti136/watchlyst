import { useState } from "react";
import SearchResultSection from "../ChildLeft/SearchResultSection.jsx";
import UserMovieSection from "../ChildLeft/UserMovieSection.jsx";
import DetailsSection from "../ChildRight/DetailsSection.jsx";
import { Div } from "./parentSection.Styles";
import SideBar from "../../SideBar/SideBar.jsx";
import ModalForm from "../../Modal/ModalForm.jsx";

export default function ParentSection() {
  const [movieID, setMovieID] = useState(0);
  const [sectionType, setSectionType] = useState("default");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <SideBar
        setSectionType={setSectionType}
        sectionType={sectionType}
        openModal={toggleModal}
      />
      <Div>
        {sectionType === "default" ? (
          <SearchResultSection setMovieID={setMovieID} />
        ) : (
          <UserMovieSection sectionType={sectionType} setMovieID={setMovieID} />
        )}
        <DetailsSection movieID={movieID} />
      </Div>
      {modalOpen && <ModalForm closeModal={toggleModal} />}
    </>
  );
}
