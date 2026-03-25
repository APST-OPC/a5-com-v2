import FullLogo from "@/assets/FullLogo.webp";
const LandingFooter = () => {
  return (
    <footer className="flex w-full h-15 justify-center items-center gap-2 bottom-0">
      <img src={FullLogo} alt="full-logo" className="w-[60%]" />
    </footer>
  );
};

export { LandingFooter };
