const LinksWrapper = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.link}>{link.title}</a>
        </li>
      ))}
    </>
  );
};

export default LinksWrapper;
