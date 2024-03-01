function page() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-3">
      <h1 className="text-2xl font-medium text-amber-600">About</h1>
      <p>
        Welcome to my movie database site! As a passionate web developer, I've
        harnessed the power of Next.js to craft an immersive movie experience
        for cinephiles and casual viewers alike. Whether you're a film
        enthusiast or just looking for your next favorite flick, this platform
        is designed to provide a seamless and enjoyable exploration of the
        cinematic world.
      </p>
      <p>
        On this website, you have the freedom to delve into the vast realm of
        movies by utilizing various search functionalities. You can easily
        search for films based on genres, titles, directors, actors, and release
        dates. This user-friendly interface aims to enhance your browsing
        experience, offering a convenient way to discover new films or find
        details about your favorites. Inspired by the functionality of IMDb,
        this site is geared towards providing a comprehensive and interactive
        movie database experience. Explore, discover, and immerse yourself in
        the magic of cinema with the diverse features available at your
        fingertips.
        <span className="block">
          {" "}
          <span className="first:text-4xl text-amber-700">By</span> Awolu
          Owolabi Samuel
        </span>
      </p>
    </div>
  );
}

export default page;
