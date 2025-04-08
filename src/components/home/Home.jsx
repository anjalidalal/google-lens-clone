import PrimaryNavbar from "../headers/PrimaryNavbar";
import SecondaryNavbar from "../headers/SecondaryNavbar";
import SearchInput from "../search/SearchInput";

const HomePage = () => {
  return (
    <>
      <PrimaryNavbar />
      <section className="pt-5 flex px-2 justify-center items-center flex-col">
        <SecondaryNavbar />
        <SearchInput />
      </section>
    </>
  );
};

export default HomePage;
