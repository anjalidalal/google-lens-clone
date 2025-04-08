import logoTitle from "./../images/googlelogo_title.png";

const SecondaryNavbar = () => {
  return (
    <>
      <div
        className="text-center mt-9 mb-[18px] mx-auto w-[160px] leading-none"
        id="hplogoo"
      >
        <img
          className="border-none my-2"
          height={56}
          width={160}
          src={logoTitle}
          alt="Google"
          id="hplogo"
          data-csiid="xNjzZ_nkL6rO2roPosjP6Q8_2"
          data-atf="1"
        />
      </div>
    </>
  );
};

export default SecondaryNavbar;
