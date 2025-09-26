export const CardLinkSosmed = ({ link, title, address }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <div className="bg-white text-black font-semibold rounded-lg mt-4 shadow p-4 gap-1 flex items-center justify-center hover:bg-gray-300 duration-200 transition-all ease-in-out">
          <p className="text-sm">{title}</p>
          <span>|</span>
          <p className="text-sm">{address}</p>
        </div>
      </a>
    </>
  );
};
