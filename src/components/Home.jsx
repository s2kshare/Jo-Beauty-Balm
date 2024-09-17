import ReviewCard from "./ReviewCard";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
    return (
        <div className="w-full">
            <div className="h-[40rem] relative w-full overflow-hidden">
                <div
                    className="bg-para w-full"
                    style={{
                        backgroundImage: "url('./background-1-pixelcut.png')",
                        minHeight: "40rem",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        animation: "change 10s infinite ease-in-out",
                    }}
                ></div>
                <div className=" absolute w-full h-60 bottom-0 font-bold text-center text-3xl">
                    <div className=" bg-gradient-to-t from-white to-transparent h-full w-full">
                        <h1 className="absolute bottom-0 left-[50%] translate-x-[-50%]">
                            Welcome to Jo's Beauty Balm!
                        </h1>
                    </div>
                </div>
            </div>

            <div className="page-content ">
                {/* Welcome Section */}
                <div className="splash flex flex-col gap-5 mx-5 my-3 mb-10">
                    <p className=" md:mx-24 mx-4 my-4 text-lg">
                        My passion for the beauty industry started when I was 19
                        & received my first facial treatment. I thought 'wow
                        this is how I want to make people feel' and I have now
                        been a fully qualified Beauty Therapist & working in the
                        beauty industry for over 17 years. I love making people
                        look & feel amazing. I love my job & consider myself a
                        natural at what I do. My most common compliments are
                        'best facial/massage ever', and my favorite massage
                        compliment is 'incredible' & love it when clients
                        describe my hands as 'magical' I absolutely love when
                        people leave their eyebrows in my hands so I can work my
                        magic as a brow artist, confident to work with both Male
                        & female. I'm all for affordable treatments to all, so I
                        am very pleased to be able to offer my treatments at
                        home salon prices. I take the natural approach to
                        skincare using only natural & organic products that give
                        the best results and can be tailored to suit any skin
                        type, perfect for those sensitive skin ranges. I have
                        put my all into making my Beauty space as comfortable &
                        peaceful & possible & can't wait to share with you the
                        Tranquil experience that awaits you at{" "}
                        <span className=" font-bold">Jo's Beauty BALM</span>
                    </p>
                </div>

                {/* Review Section */}
                <div className="reviews h-full mx-1 overflow-x-hidden flex flex-col gap-0">
                    <h1 className="font-bold text-3xl text-center">
                        Hear from my customers!
                    </h1>
                    <div className="md:gap-4 gap-0 ml-0 md:px-40 px-0 md:inline-flex md:overflow-hidden sm:overflow-scroll rounded-box w-full snap-none">
                        <div className="flex-1 h-full w-full">
                            <ReviewCard
                                user={"Taniora"}
                                rating={1}
                                description={
                                    "I would like to express my heartfelt gratitude for the exceptional back massage therapy session Jo provided. Recently, I had been experiencing considerable discomfort due to a persistent back injury. Her skilled and attentive approach not only alleviated my pain but also contributed significantly to my overall well-being.\nHer professionalism and expertise were evident throughout the session, and I am truly impressed by the immediate relief I felt. Her ability to identify and effectively target the sources of my discomfort is commendable, and I deeply appreciate the care and dedication she demonstrated.\nThank you once again for your excellent service. I look forward to future sessions and will certainly recommend your services to anyone seeking relief from back pain.\nKind regards \nTaniora"
                                }
                            />
                        </div>
                        <div className="flex-1 h-full w-full">
                            <ReviewCard
                                user={"Tina"}
                                rating={4}
                                description={"You do have magic hands 🙌"}
                            />
                        </div>
                        <div className="flex-1 h-full w-full">
                            <ReviewCard
                                user={"Urshula"}
                                rating={5}
                                description={
                                    "Highly recommend this beautiful lady I got the most amazing massage and waxing done she is the beautiful person and has the most relaxing space clean professional and amazing prices I went away feeling on top of the world 🙏✨💖💜"
                                }
                            />
                        </div>
                    </div>
                </div>

                {/* Closer Section */}
                <div className="closer mb-10">
                    <h1 className="font-semibold text-2xl mb-4 text-center">
                        Want to know more?
                    </h1>
                    <div className="btns flex  items-center justify-center gap-2">
                        <button className="btn btn-neutral">
                            <BiMoneyWithdraw />
                            <Link to={"/Jo-Beauty-Balm/services"}>
                                Services
                            </Link>
                        </button>
                        <button className="btn btn-outline">
                            <Link to={"/Jo-Beauty-Balm/contactus"}></Link>
                            Contact <IoIosSearch />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
