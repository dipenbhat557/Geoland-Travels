import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const BusinessForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    noOfDestinations: '',
    happyCustomers: '',
    amazingTours: '',
  });

  const handleSubmit = async () => {
    const infoRef = collection(db, 'ourInfo');

    const docRef = await addDoc(infoRef, {
      title: formData?.title,
      noOfDestinations: formData?.noOfDestinations,
      happyCustomers: formData?.happyCustomers,
      amazingTours: formData?.amazingTours,
    });
    setFormData({
      title: '',
      noOfDestinations: '',
      happyCustomers: '',
      amazingTours: '',
    });
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Business Section" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
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
                  value={formData?.title}
                  name="title"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                  placeholder="Title Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Number of Destinations
                </label>
                <input
                  name="noOfDestinations"
                  value={formData?.noOfDestinations}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      noOfDestinations: e.target.value,
                    }))
                  }
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
                  name="happyCustomers"
                  value={formData?.happyCustomers}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      happyCustomers: e.target.value,
                    }))
                  }
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
                  name="amazingTours"
                  value={formData?.amazingTours}
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      amazingTours: e.target.value,
                    }))
                  }
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
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 tracking-wide text-white font-bold py-2 px-9 rounded opacity-80  shadow-1"
                >
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
