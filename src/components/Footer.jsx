const Footer = () => {
  const footerLinks = [
    {
      text: "© 2021 MovieApp. All rights reserved.",
    },
    {
      text: "Made by ",
      link: {
        url: "https://www.twitter.com/dejixice",
        label: "Mato",
      },
    },
    {
      text: "Images from ",
      link: {
        url: "https://www.themoviedb.org/",
        label: "TMDB",
        external: true,
      },
    },
  ];

  return (
    <footer className="relative bottom-0 bg flex items-center justify-around w-full px-24">
      {footerLinks.map((item, index) => (
        <div key={index}>
          <p className="text-white text-center py-4">
            {item.text}
            {item.link && (
              <a
                href={item.link.url}
                className="text-blue-500"
                {...(item.link.external && {
                  target: "_blank",
                  rel: "noreferrer",
                })}
              >
                {item.link.label}
              </a>
            )}
          </p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
