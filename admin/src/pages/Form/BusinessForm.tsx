import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';


const BusinessForm = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Our Info" />



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

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Number of Destinations
                                </label>
                                <input
                                    type="number"
                                    placeholder="No of Destination "
                                    className="w-full rounded-lg border-[1.5px]    border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary disabled:cursor-default disabled:bg-whiter  dark:border-form-strokedark  dark:bg-form-input  dark:focus:border-primary dark:text-white"
                                />
                            </div>


                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Happy Customers
                                </label>
                                <input
                                    type="number"
                                    placeholder="No of Happy Customers "
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Amazing Tours
                                </label>
                                <input
                                    type="number"
                                    placeholder="Amazing Tours Input"
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

export default BusinessForm;
