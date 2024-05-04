import { ReactTyped } from "react-typed";

export default function Kelebihan() {
  return (
    <>
      <div className="container-kelebihan bg-gradient-to-r from-orange-400 via-orange-200 to-orange-100 min-w-full w-full bg-cover h-fit my-40 shadow-md shadow-slate-500 rounded-sm">
        <div className="uppercase pt-10 pb-5 px-8 font-Bebas tracking-[2px] text-3xl md:text-5xl md:px-10 opacity-65">
          <ReactTyped
            strings={["Batik ciprat", "Indonesia"]}
            typeSpeed={200}
            backSpeed={100}
            loop
          />
        </div>
        <p className="px-8 pb-20 md:text-xl md:max-w-screen-md md:mx-auto font-sans">
          &quot; Batik ciprat adalah salah satu teknik pembuatan batik yang unik
          dan kreatif, di mana proses pembuatannya melibatkan percikan atau
          semprotan tinta secara bebas ke permukaan kain. Teknik ini
          memungkinkan seniman untuk menciptakan pola dan motif yang tidak
          terbatas, menciptakan batik dengan tampilan yang eksperimental dan
          artistik. Dengan menggunakan alat semprot atau sikat, tinta batik
          diberikan ke kain dengan berbagai intensitas, menciptakan efek visual
          yang dinamis dan beragam. Batik ciprat sering kali memberikan kesan
          yang spontan dan abstrak, memungkinkan para seniman untuk
          mengekspresikan kreativitas mereka dengan kebebasan dan keunikan yang
          besar.&quot;
        </p>
      </div>
    </>
  );
}
