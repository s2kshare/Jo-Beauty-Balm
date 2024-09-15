import ServiceCard from "./ServiceCard";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Services() {
    return (
        <div className="w-full ">
            <h1 className=" font-bold text-2xl text-center mb-4">Services</h1>
            <div className="flex px-5 flex-col gap-4">
                <h1 className=" font-medium text-2xl text-center">
                    Beauty Therapy Treatment
                </h1>
                <ServiceCard
                    title={"Eye treatment"}
                    description={
                        "Includes a full face cleanse, tone & moisturize with eye area exfoliation, hyaluronic serum, collagen mask & eyecream with scalp massage."
                    }
                    price={55}
                    table={false}
                />
                <ServiceCard
                    title={"Couples treatment"}
                    description={
                        "2x 30 minute massages, while one body is being massaged the other has a relaxing wait in the vibrating massage chair with thierfeet being soaked in the warm vibrating foot spa *there is a weight restriction for use of the massage chair "
                    }
                    price={140}
                    table={false}
                />
                <ServiceCard
                    title={"Facials"}
                    description={
                        "Using natural & organic skincare tailored to every skin"
                    }
                    table={true}
                    tabledata={[
                        {
                            surplus:
                                "Beautiful facial - double cleanse, exfoliant, mask, tone, moisturiser, eye cream, lip balm & serum",
                            duration: null,
                            price: 55,
                        },
                        {
                            surplus:
                                "Tranquility facial- as above adding a decadent face, neck, shoulder & scalp massage",
                            duration: null,
                            price: 65,
                        },
                    ]}
                />
                <ServiceCard
                    title={"Tinting"}
                    table={true}
                    tabledata={[
                        {
                            surplus: "Eyelash only",
                            duration: null,
                            price: 25,
                        },
                        {
                            surplus: "Eyebrow only",
                            duration: null,
                            price: 15,
                        },
                        {
                            surplus: "Eye Trio (tints plus eyebrow shape)",
                            duration: null,
                            price: 50,
                        },
                    ]}
                />
                <ServiceCard
                    title={"Pedicure"}
                    table={false}
                    price={65}
                    description={
                        "Relax in a vibrating massage chair while your feet are soaked, scrubbed & massaged. Includes cuticle care with nail shape & polish"
                    }
                />
                <ServiceCard
                    title={"Chakra balance & cleanse"}
                    table={true}
                    description={
                        "This is a holistic method of healing, creating alignment in your bodies energy centers. using a visualization exercise, sage, sound frequency & appropriate crystals to bring your mind, body & soul into a state of balance & harmony. This technique clears stagnant & negative energies & emotional blockages, getting you back in tune with your body, restoring physical & mental health & improving overall well-being."
                    }
                    tabledata={[
                        {
                            surplus: "Add on to another treatment",
                            description: null,
                            price: 25,
                        },
                        {
                            surplus: "As sole treatment",
                            description: null,
                            price: 45,
                        },
                    ]}
                />
                <h1 className=" font-medium text-2xl text-center">
                    Massage Therapy
                </h1>
                <ServiceCard
                    title={"Relaxation or therapeutic"}
                    description={
                        "Let Jo's 'magic hands' transport your mind, body & soul into a state of bliss & tranquility, reducing stress, pain & improving sleep quality."
                    }
                    table={true}
                    tabledata={[
                        { duration: 35, price: 45 },
                        { duration: 45, price: 60 },
                        { duration: 60, price: 80 },
                    ]}
                />
                <ServiceCard
                    title={"Hot stone"}
                    description={
                        "Relax & unwind while the magic of hot stones melt away aches & pains"
                    }
                    price={"90 / $130"}
                    table={true}
                    tabledata={[
                        { duration: 45, price: 90 },
                        { duration: 65, price: 130 },
                    ]}
                />
                <ServiceCard
                    title={"Indian head massage"}
                    description={
                        "includes upper back, neck, shoulders, face & scalp. Great for reducing migraines or for those who prefer to stay clothed during treatment."
                    }
                    price={40}
                    table={true}
                    tabledata={[{ duration: 25, price: 40 }]}
                />
                <h1 className=" font-medium text-2xl text-center">
                    Package Deals
                </h1>
                <ServiceCard
                    title={"Absolute Bliss"}
                    description={
                        "Includes a combination of relaxation massage & facial tailored to suit."
                    }
                    table={true}
                    tabledata={[{ duration: 90, price: 110 }]}
                />
                <ServiceCard
                    title={"Beauty package"}
                    description={
                        "Includes an eyelash tint, eyebrow shape & tint, Tranquilityfacial & pedicure."
                    }
                    table={true}
                    tabledata={[{ duration: 120, price: 165 }]}
                />
                <ServiceCard
                    title={"Facial Waxing"}
                    description={
                        "Includes a full body relaxation massage, a Tranquilityfacial & a pedicure"
                    }
                    table={true}
                    tabledata={[{ surplus: "mins", duration: 150, price: 200 }]}
                />
                <h1 className=" font-medium text-2xl text-center">Waxing</h1>
                <ServiceCard
                    title={"Facial Waxing"}
                    table={true}
                    tabledata={[
                        {
                            surplus: "Eyebrow shape",
                            duration: null,
                            price: 20,
                        },
                        {
                            surplus: "Upper-lip only",
                            duration: null,
                            price: 16,
                        },
                        {
                            surplus: "Chin Only",
                            duration: null,
                            price: 16,
                        },
                        {
                            surplus: "Lip & Chin",
                            duration: null,
                            price: 30,
                        },
                        {
                            surplus: "Add Hair Growth Inhibitor",
                            duration: null,
                            price: 14,
                        },
                    ]}
                />
                <ServiceCard
                    title={"Brazilian"}
                    table={true}
                    tabledata={[
                        {
                            surplus: "1st time",
                            duration: null,
                            price: 65,
                        },
                        {
                            surplus: "Maintenance (4-6 weeks)",
                            duration: null,
                            price: 55,
                        },
                        {
                            surplus: "Bikini Line",
                            duration: null,
                            price: 25,
                        },
                    ]}
                />
                <ServiceCard
                    title={"Mens Waxing"}
                    table={true}
                    tabledata={[
                        {
                            surplus: "Eyebrow Shape",
                            duration: null,
                            price: 20,
                        },
                        {
                            surplus: "Back or chest only",
                            duration: null,
                            price: 40,
                        },
                        {
                            surplus: "Add Shoulders",
                            duration: null,
                            price: 10,
                        },
                        {
                            surplus: "Nose or Ear",
                            duration: null,
                            price: 25,
                        },
                        {
                            surplus: "Nose & Ear",
                            duration: null,
                            price: 40,
                        },
                    ]}
                />
            </div>
            {/* Closer Section */}
            <div className="closer mt-10 mb-10">
                <h1 className="font-regular text-2xl mb-4 text-center">
                    Want to book?{" "}
                    <Link
                        to={"/contactus"}
                        className=" font-semibold underline underline-offset-4"
                    >
                        Contact Us!
                    </Link>
                </h1>
                <div className="btns flex  items-center justify-center gap-2">
                    {/* ! Change to email address */}
                    <button className="btn btn-neutral">
                        <a to={"/services"} className="flex flex-row gap-2">
                            Email
                            <IoIosMail />
                        </a>
                    </button>
                    <button className="btn btn-outline">
                        <FaFacebook />
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;
