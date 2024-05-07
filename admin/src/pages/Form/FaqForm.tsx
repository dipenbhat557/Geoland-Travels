import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const FaqForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    query: '',
    answer: '',
  });

  const handleSubmit = async () => {
    const faqRef = collection(db, 'faqs');

    const docRef = await addDoc(faqRef, {
      title: formData?.title,
      query: formData?.query,
      answer: formData?.answer,
    });
    console.log(docRef.id);
    setFormData({
      title: '',
      query: '',
      answer: '',
    });
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="FAQ's" />

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
                  value={formData?.title}
                  name="title"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Title Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Queries
                </label>
                <input
                  value={formData?.query}
                  name="query"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      query: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Queries "
                  className="w-full rounded-lg border-[1.5px]    border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary disabled:cursor-default disabled:bg-whiter  dark:border-form-strokedark  dark:bg-form-input  dark:focus:border-primary dark:text-white"
                />
              </div>

              <div>
                <label className="mb-3  block text-black dark:text-white">
                  Answers
                </label>
                <input
                  type="text"
                  value={formData?.answer}
                  name="answer"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      answer: e.target.value,
                    }))
                  }
                  placeholder="Answers "
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

export default FaqForm;
