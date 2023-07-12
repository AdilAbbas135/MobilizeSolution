import React from "react";
import Footer from "../../components/navigation/Footer/Footer";
import Header from "../../components/navigation/Header";
import { FiChevronRight } from "react-icons/fi";
import FeaturedProblems from "../../components/FeatruredProblems/FeaturedProblems";

const Home = () => {
  // const navigate = useNavigate();
  // const [allofferings, setallofferings] = useState([]);
  // const [loading, setloading] = useState(true);
  // useEffect(() => {
  //   document.title = "";
  //   axios
  //     .get("http://localhost:5000/api/offerings")
  //     .then((result) => {
  //       console.log(result?.data?.offerings);
  //       setallofferings(result?.data?.offerings);
  //       setloading(false);
  //     })
  //     .catch((err) => {
  //       toast.error("Something Went Wrong! Reload the Page", {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: false,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     });
  // }, []);

  const perks = [
    {
      name: "Post Your Problem",
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg",
      description:
        "Its very simple.just sign up and you are ready to post your problem",
    },
    {
      name: "Vote for a Problem",
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
      description:
        "The more Vote Your Problem Gets.The more Chances are to solve the problem",
    },
    {
      name: "Solve Your Problem",
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
      description: "Admin Will Solve Your Problem and will give Feedback",
    },
  ];
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="mx-auto flex max-w-7xl flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            {/* <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            /> */}
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:grid lg:grid-cols-1">
                {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2"> */}
                <div className="mx-auto pt-24 pb-12 lg:max-w-none">
                  <div className="px-2">
                    <div className="flex w-full justify-center">
                      {/* eslint-disable-next-line */}
                      <div className="mx-auto inline-flex items-center rounded-full border border-gray-700 bg-transparent p-1 pr-2 sm:text-base lg:text-sm xl:text-base">
                        <span className="rounded-full bg-cr-primary px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                          Need Help?
                        </span>
                        <span className="ml-4 text-sm text-stone-900">
                          Post Your Problem! Get it Solved
                        </span>
                        <FiChevronRight
                          className="ml-2 h-5 w-5 text-cr-primary font-bold"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <h1 className="my-4 text-center text-4xl tracking-tight sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                      <span className="font-bold text-cr-primary">
                        Mobilize: Enhancing Life
                      </span>{" "}
                      {/* <span className="bg-gradient-to-r from-cr-secondary to-cr-primary bg-clip-text pb-3 font-extrabold text-transparent">
                        Memorable Moments
                      </span> */}
                    </h1>
                    {/* <p className="mt-3 text-center text-base text-stone-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Join Mobilize Solutions now and Share your problems with
                      us and we will solve them for you
                    </p> */}
                  </div>
                </div>
              </div>
              {/* 
              <div className="h-48 p-2 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGl2ZXJzaXR5JTIwYnVzaW5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="hidden h-full rounded-md object-cover object-center"
                />
              </div> */}
            </div>
          </div>
        </div>

        <FeaturedProblems />

        <section
          aria-labelledby="perks-heading"
          className="border-t border-gray-200 bg-gray-50 mt-10"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 py-10 lg:px-8">
            <h1 className="font-bold text-cr-primary text-3xl text-center uppercase">
              Our Simple Process Includes
            </h1>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 mx-auto h-24 w-auto"
                        src={perk.imageUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-stone-900">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
