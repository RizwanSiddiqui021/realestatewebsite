const Projects = () => {
  return (
    <div
      className="container mx-auto px-6 py-4 pt-20 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      {/* section-title */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
    </div>
  );
};

export default Projects;
