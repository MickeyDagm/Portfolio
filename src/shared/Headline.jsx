const Headline = ({ title, subtitle }) => {
  return (
    <div className="text-center mx-auto  py-10 dark:text-white">
      <h2 className="text-4xl font-bold tracking-wide mb-2">{title}</h2>
      <div className="mx-auto mb-5 bg-gradient-to-r from-blue-500 to-purple-400 h-2 w-20 rounded-full"></div>
      <p className="text-xl w-5/6 text-center mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default Headline;