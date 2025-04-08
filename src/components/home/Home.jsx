import React, { useState } from "react";
import PrimaryNavbar from "../headers/PrimaryNavbar";
import SecondaryNavbar from "../headers/SecondaryNavbar";
import SearchInput from "../search/SearchInput";
import { GoogleAccountMenuModal } from "../modal/GoogleAccountMenuModal";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <main>
        <PrimaryNavbar setOpen={setOpenModal} />
        <section className="pt-5 flex px-2 justify-center items-center flex-col">
          <SecondaryNavbar />
          <SearchInput />
        </section>
        {openModal && (
          <GoogleAccountMenuModal setOpen={setOpenModal} open={openModal} />
        )}
      </main>
    </>
  );
};

export default HomePage;
