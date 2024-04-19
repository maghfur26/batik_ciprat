import AreaCard from "../Element/card";

const Top_saller = () => {
  return (
    <>
      <h2 className="top_saller text-4xl text-center my-12 uppercase font-bold underline underline-offset-4">Top Saller</h2>
      <div className="list_top_saller flex flex-wrap justify-center gap-3 md:gap-8">
        <AreaCard image={"https://source.unsplash.com/random/?shoes"} />
        <AreaCard image={"https://source.unsplash.com/random/?t-shirt"} />
        <AreaCard image={"https://source.unsplash.com/random/?jacket"} />
        <AreaCard image={"https://source.unsplash.com/random/?heat"} />
      </div>
    </>
  );
};

export default Top_saller;
