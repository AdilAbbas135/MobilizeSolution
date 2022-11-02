import { Spin, Tabs } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../components/navigation/Header";
import { MdPictureAsPdf } from "react-icons/md";
import { LoadingOutlined } from "@ant-design/icons";

const SingleOffering2 = () => {
  const location = useLocation();
  const [singleoffering, setsingleoffering] = useState();
  // eslint-disable-next-line
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://beta.chainraise.info/manage/api/offers/listing/${location?.state?.id}`
      )
      .then((result) => {
        console.log(result);
        setsingleoffering(result?.data?.data);
        setloading(false);
      })
      .catch((error) => {
        toast.error("Something Went Wrong! Reload the Page", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      {loading ? (
        <div className="h-screen flex items-center justify-center bg-[#F3F4F6]">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 45 }} spin />} />
          <h2 className="ml-5">Loading....</h2>
        </div>
      ) : (
        <div className="bg-[#F7F7F7]">
          <hr className="h-[50px]" />
          <div
            style={{
              boxShadow:
                "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
            }}
            className="max-w-6xl m-auto rounded-md bg-white"
          >
            <div className="relative banner w-full h-72 ">
              <img
                src={singleoffering?.banner}
                alt=""
                className="bg-cover w-full h-full rounded-md"
              />
              <div>
                <div className="flex justify-center mt-[10px]">
                  <div
                    style={{
                      boxShadow:
                        "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
                    }}
                    className="small:flex small:items-center absolute -bottom-[7rem] md:-bottom-[5rem] medium:left-8 bg-white px-10 py-5    rounded-md"
                  >
                    <img
                      src={singleoffering?.logo}
                      alt=""
                      className="bg-cover w-24 h-24 m-auto md:w-28 md:h-28 rounded-full"
                    />
                    <div className="ml-4 text-center mt-2 small:mt-0">
                      <h1 className="text-xl font-[700] capitalize">
                        {singleoffering?.name}
                      </h1>
                      <h2 className="mb-0">
                        {singleoffering?.short_description}
                      </h2>
                      <h2 className="mb-0">
                        {singleoffering?.short_description}
                      </h2>
                      <h2 className="mb-0">
                        <span className="text-[#3ab67b] text-lg">
                          ${singleoffering?.max_raise}
                        </span>{" "}
                        offering size
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    style={{
                      boxShadow:
                        "0 4px 5px -2px rgb(0 0 0 / 20%), 0 7px 10px 1px rgb(0 0 0 / 14%), 0 2px 16px 1px rgb(0 0 0 / 12%)",
                    }}
                    className="relative mt-[200px] medium:absolute medium:-bottom-[60px] medium:right-[50px] bg-white w-[285px] pt-[45px] pb-[20px] px-[16px] rounded-md "
                  >
                    <div className="h-[120px] w-[120px]  bg-[#EDEEF0] rounded-full flex items-center justify-center absolute -top-[81px] left-[75px]">
                      <div className="h-[90px] w-[90px] rounded-full bg-white flex items-center justify-center flex-col">
                        <span className="text-[#3ab67b] text-lg text-center font-bold">
                          ${singleoffering?.max_raise}
                        </span>
                        offering size
                      </div>
                    </div>
                    <button className="bg-[#636667] text-white font-bold w-[250px] h-[45px] rounded-md">
                      Sign in to learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[400px] medium:pt-[150px] small:px-20 px-10">
              <Tabs
                defaultActiveKey="1"
                type="card"
                size={"large"}
                tabBarGutter={10}
              >
                {/* TAB 1 */}
                <Tabs.TabPane key={"OfferDeatils"} tab="Offer Details">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ullam, enim recusandae impedit dicta consequatur quaerat
                  perspiciatis optio modi possimus corrupti nemo magnam numquam
                  accusantium necessitatibus error nulla autem itaque cum eaque
                  voluptates reiciendis inventore placeat dolor voluptatem. Quis
                  possimus repellendus laudantium numquam alias. Adipisci
                  dignissimos mollitia veniam quis, nam impedit magnam iste
                  nesciunt enim natus dolor assumenda iusto beatae quisquam
                  commodi eveniet laborum! Fugiat tenetur voluptatum deleniti
                  illum, consectetur temporibus eius aspernatur voluptas
                  expedita eveniet facere nesciunt iusto totam accusamus
                  necessitatibus sint corrupti officiis sapiente dicta quis
                  reiciendis. Maxime nisi at iusto obcaecati vel ex ea corrupti
                  odio, pariatur ab fuga laboriosam reiciendis et incidunt
                  voluptatem sunt temporibus dolorum officia nobis laudantium
                  animi delectus illo, fugiat sit. Debitis porro esse voluptas
                  et, repudiandae modi exercitationem recusandae pariatur
                  similique, ad earum cumque dolores dolorum, nisi inventore
                  aspernatur dignissimos doloremque maxime animi! Ullam rerum,
                  pariatur aut hic doloremque repudiandae soluta quae
                  necessitatibus, assumenda rem molestiae dolore atque, commodi
                  vero omnis? Nostrum pariatur, eaque quam soluta praesentium
                  libero. Provident consequatur odit voluptatum laboriosam ad
                  quasi commodi. Sapiente qui tenetur fugit molestias officiis,
                  cupiditate autem ea repellat accusamus necessitatibus
                  voluptates quasi deleniti! Aliquam quasi facilis
                  necessitatibus cumque deleniti nisi! Ipsam, porro! Minima
                  maxime cumque fuga ipsum molestiae, ipsam recusandae impedit
                  alias non hic iusto, optio aliquam obcaecati neque commodi
                  porro dolore aliquid ea a! Tempora minima cumque velit
                  possimus nobis accusamus dolores? Placeat quod incidunt
                  soluta, assumenda doloribus quibusdam aspernatur. Quo,
                  dignissimos ab earum autem animi consequatur! Cupiditate
                  perspiciatis, ab sed commodi nemo debitis adipisci molestias
                  ut qui nobis cumque ullam magnam hic velit dolores
                  necessitatibus voluptates deleniti, nulla officia fuga ad iure
                  rerum accusamus? Repellendus provident porro, perspiciatis
                  cupiditate ex est deleniti molestias animi excepturi similique
                  laborum vero saepe laboriosam magnam necessitatibus odit
                  molestiae tempora voluptatibus dolor. Dolor inventore labore
                  enim corrupti repellendus error veritatis. Itaque nam
                  accusantium labore aliquid distinctio dolorum aspernatur
                  laboriosam, dolores amet a incidunt voluptatum consectetur
                  laborum temporibus praesentium officia illum numquam eaque
                  quasi tempora explicabo autem iure. Quae ratione a nobis
                  quibusdam reiciendis numquam corrupti quisquam dolor expedita
                  placeat accusantium officiis, esse eligendi. Ex architecto
                  nesciunt ipsam dignissimos necessitatibus veniam consectetur,
                  qui ea doloribus quisquam dolorum magnam odit, libero
                  assumenda laudantium recusandae autem? Id nulla esse
                  cupiditate? Voluptatum aut quasi, pariatur eos ducimus fuga
                  repellendus iste. Iure nesciunt qui doloribus accusamus animi?
                  Unde asperiores cum repellat alias eos officiis a quasi
                  eveniet ab tenetur libero placeat eaque dolorem incidunt quia
                  tempore at nam reprehenderit qui autem, ut harum nulla!
                  Debitis eos quaerat maxime, ipsa laboriosam aperiam
                  consectetur dolorem sint fugit ullam at quibusdam deleniti
                  provident non repellat ea dicta officiis? Repellat voluptas
                  consequatur quos asperiores odio corrupti commodi minus! Atque
                  doloribus dolore nesciunt soluta aut molestiae accusantium
                  illo, natus assumenda, amet dolor quae accusamus numquam
                  cumque quaerat facere non, hic distinctio earum consectetur
                  quis. Quod voluptatum, explicabo voluptates, consequatur ullam
                  totam dolorum natus quas, itaque aspernatur suscipit eligendi
                  nemo optio ipsam recusandae aperiam eos ea ducimus velit!
                  Voluptatum corrupti expedita amet molestias id nam optio nisi
                  voluptas quibusdam!
                </Tabs.TabPane>

                <Tabs.TabPane key={"OfferDocuments"} tab="Offering Documents">
                  <div className="flex gap-3 pb-[50vh] ">
                    <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                      <div class="flex flex-col items-center py-10">
                        <MdPictureAsPdf size={30} className="text-[#AA0F38]" />

                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Token Grant Letter
                        </h5>
                      </div>
                    </div>

                    <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                      <div class="flex flex-col items-center py-10">
                        <MdPictureAsPdf size={30} className="text-[#AA0F38]" />

                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Token Grant Letter
                        </h5>
                      </div>
                    </div>

                    <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                      <div class="flex flex-col items-center py-10">
                        <MdPictureAsPdf size={30} className="text-[#AA0F38]" />

                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Token Grant Letter
                        </h5>
                      </div>
                    </div>

                    <div class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                      <div class="flex flex-col items-center py-10">
                        <MdPictureAsPdf size={30} className="text-[#AA0F38]" />

                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Token Grant Letter
                        </h5>
                      </div>
                    </div>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane key={"Updates"} tab="Updates">
                  <div className="h-[50vh]">
                    <h2>August 17, 2022</h2>
                    <h1 className="text-lg font-bold">Get Ready For Launch!</h1>
                    <p>
                      Techware Labs is days away from launching our offering!
                    </p>
                  </div>
                </Tabs.TabPane>

                <Tabs.TabPane key={"q&a"} tab="Q & A">
                  <div className="h-[50vh]">
                    <h1 className="text-xl font-semibold">
                      Question & Answers
                    </h1>
                    <p>There are currently no questions</p>
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleOffering2;
