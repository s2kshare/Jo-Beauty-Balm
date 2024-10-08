import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="mx-10 md:mx-96 my-10">
            <h1 className="  font-semibold text-center text-2xl mb-4">
                Contact Us!
            </h1>
            <div className="flex w-full flex-col border-opacity-50">
                <div className=" flex flex-col gap-4">
                    {/* <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Name"
                        />
                    </label>
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder="Message"
                        maxLength={"500px"}
                    ></textarea>
                    <button className="btn btn-neutral">
                        Submit <IoIosMail />
                    </button> */}
                    <h1 className="text-center text-2xl mb-4 font-semibold">
                        Email Us!
                    </h1>
                    <button className="btn btn-neutral">
                        <Link
                            className="flex gap-2"
                            to={"mailto:josbeautybalm@gmail.com"}
                        >
                            <IoIosMail /> Message us here!
                        </Link>
                    </button>
                </div>
                <div className="divider text-sm divider-neutral mx-6">OR</div>
                <h1 className="text-center text-2xl mb-4 font-semibold">
                    Text us on Facebook!
                </h1>
                <button className="btn btn-neutral">
                    <Link
                        className="flex gap-2"
                        to={"https://www.facebook.com/JosBeautyBalm"}
                    >
                        <FaFacebook /> Message us here!
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Contact;
