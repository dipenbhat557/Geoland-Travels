import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';


const CoustomerReviewForm = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Customers Reviews " />




            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- Input Fields --> */}


                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Input Fields
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="Title Input"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>
                            < div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Attach Image
                                </label>

                                <input
                                    type="file"
                                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />



                            </div>


                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Title for Review
                                </label>
                                <input
                                    type="text"
                                    placeholder="Review Input"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Review Content
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Review content"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                ></textarea>
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Name of Reviewer
                                </label>
                                <input
                                    type="text"
                                    placeholder="No of Destination "
                                    className="w-full rounded-lg border-[1.5px]    border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary disabled:cursor-default disabled:bg-whiter  dark:border-form-strokedark  dark:bg-form-input  dark:focus:border-primary dark:text-white"
                                />
                            </div>


                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>




                        </div>
                    </div>



                </div>

                <div className="flex flex-col gap-9">


                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                        <div className="flex flex-col gap-5.5 p-40  items-center justify-evenly">


                            <div>
                                <button className="bg-[#323D4E]  bg-opacity-80 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Save as Draft
                                </button>

                            </div>


                            <div>
                                <button className="bg-blue-500 tracking-wide text-white font-bold py-2 px-9 rounded opacity-80  shadow-1">
                                    <span className="tracking-wider px-3">Post</span>
                                </button>
                            </div>




                        </div>
                    </div>




                </div>

            </div>
        </DefaultLayout>
    );
};

export default CoustomerReviewForm;
