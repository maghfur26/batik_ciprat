import AreaCard from "../Element/card";

const Top_saller = () => {
  return (
    <>
      <h2 className="top_saller text-orange-400 text-4xl text-center my-12 uppercase font-bold  underline-offset-4">
        Top Saller
      </h2>
      <div className="top_saller w-full mx-auto md:w-2/3">
        <div className="slide gap-5">
          <AreaCard image={"https://source.unsplash.com/random/?shoes"} />
          <AreaCard image={"https://source.unsplash.com/random/?t-shirt"} />
          <AreaCard image={"https://source.unsplash.com/random/?jacket"} />
          <AreaCard image={"https://source.unsplash.com/random/?jeans"} />
          <AreaCard image={"https://source.unsplash.com/random/?watch"} />
          <AreaCard image={"https://source.unsplash.com/random/?bag"} />
          <AreaCard image={"https://source.unsplash.com/random/?man-bag"} />
        </div>
        <div className="slide gap-5">
          <AreaCard image={"https://source.unsplash.com/random/?shoes"} />
          <AreaCard image={"https://source.unsplash.com/random/?t-shirt"} />
          <AreaCard image={"https://source.unsplash.com/random/?jacket"} />
          <AreaCard image={"https://source.unsplash.com/random/?jeans"} />
          <AreaCard image={"https://source.unsplash.com/random/?watch"} />
          <AreaCard image={"https://source.unsplash.com/random/?bag"} />
          <AreaCard image={"https://source.unsplash.com/random/?man-bag"} />
        </div>
      </div>
    </>
  );
};

export default Top_saller;
