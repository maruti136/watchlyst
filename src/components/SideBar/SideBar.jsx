import { Aside, Div, Avatar, Button } from "./sideBar.styles.js";
import useCheckAuthorised from "../../Hooks/useCheckAuthorised.js";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { IoBookmark, IoNavigate } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

export default function SideBar({ sectionType, setSectionType, openModal }) {
  const { data: user } = useCheckAuthorised();
  return (
    <Aside>
      <Div type="profile">
        <Avatar
          className="avatar"
          src={user.user_metadata.avatar}
          alt="Profile Avatar"
        />
        <h3>{user.user_metadata.fullName.split(" ")[0]}</h3>
        <FaRegEdit size={20} onClick={openModal} color="rgb(161, 130, 211)" />
      </Div>
      <Div type="links">
        <Button
          active={sectionType === "default"}
          onClick={() => setSectionType("default")}
        >
          <IoNavigate color="#393939" size={20} />
          <span>Explore</span>
        </Button>
        <Button
          active={sectionType === "watched"}
          onClick={() => {
            console.log("set correctly");
            setSectionType("watched");
          }}
        >
          <IoIosCheckmarkCircle color="#393939" size={20} />
          <span> Watched</span>
        </Button>
        <Button
          active={sectionType === "bookmarked"}
          onClick={() => setSectionType("bookmarked")}
        >
          <IoBookmark color="#393939" size={20} />
          <span>Bookmarked</span>
        </Button>
        <Button
          active={sectionType === "favourite"}
          onClick={() => setSectionType("favourite")}
        >
          <MdFavorite color="#393939" size={20} />
          Favourites
          <span></span>
        </Button>
      </Div>
    </Aside>
  );
}
