import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import InputFieldList from './InputFields';

const TourForm = () => {
  const [img, setImg] = useState(null as File | null);

  const [noOfHighlightInputs, setNoOfHighlightInputs] = useState(1);
  const [noOfWhatsIncludedInputs, setNoOfWhatsIncludedInputs] = useState(1);
  const [noOfWhatsNotIncludedInputs, setNoOfWhatsNotIncludedInputs] =
    useState(1);
  const [noOfItineraryInputs, setNoOfItineraryInputs] = useState(1);

  const [highlightInputFields, setHighlightInputFields] = useState([
    { value: '' },
  ]);
  const [whatsIncludedInputFields, setWhatsIncludedInputFields] = useState([
    { value: '' },
  ]);
  const [whatsNotIncludedInputFields, setWhatsNotIncludedInputFields] =
    useState([{ value: '' }]);
  const [itineraryInputFields, setItineraryInputFields] = useState([
    { value: '' },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    tourTitle: '',
    img: '',
    location: '',
    overview: '',
    highlights: [],
    inclusion: [],
    exclusion: [],
    itinerary: [],
    price: 0,
    type: 'inbound',
    trending: false,
  });

  // Function to update the value of an input field
  const handleHighlightsValueChange = (index: any, event: any) => {
    const values = [...highlightInputFields];
    values[index].value = event.target.value;
    setHighlightInputFields(values);
  };

  const handleWhatsIncludedValueChange = (index: any, event: any) => {
    const values = [...whatsIncludedInputFields];
    values[index].value = event.target.value;
    setWhatsIncludedInputFields(values);
  };

  const handleWhatsNotIncludedValueChange = (index: any, event: any) => {
    const values = [...whatsNotIncludedInputFields];
    values[index].value = event.target.value;
    setWhatsNotIncludedInputFields(values);
  };

  // Function to update the value of an input field
  const handleItineraryValueChange = (index: any, event: any) => {
    const values = [...itineraryInputFields];
    values[index].value = event.target.value;
    setItineraryInputFields(values);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImg(file);
    }
    console.log('file is selected');
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {};

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tour Form" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div>
          {/* <!-- Input Fields --> */}

          <div className="rounded-sm flex flex-col gap-6 border border-stroke  bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
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
                  onChange={(e) => handleChange(e)}
                  placeholder="Title Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Tour Title
                </label>
                <input
                  type="text"
                  value={formData?.tourTitle}
                  name="tourTitle"
                  onChange={(e) => handleChange(e)}
                  placeholder="Tour Title"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach Image
                </label>

                <input
                  type="file"
                  onChange={(e) => handleFileChange(e)}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Location
                </label>
                <input
                  type="text"
                  value={formData?.location}
                  name="location"
                  onChange={(e) => handleChange(e)}
                  placeholder="Location"
                  className="w-full rounded-lg border-[1.5px]    border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary disabled:cursor-default disabled:bg-whiter  dark:border-form-strokedark  dark:bg-form-input  dark:focus:border-primary dark:text-white"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Tour Overview
                </label>
                <textarea
                  rows={6}
                  value={formData?.overview}
                  name="overview"
                  onChange={(e) => handleChange(e)}
                  placeholder="Give a brief introduction to the tour"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="">
                <label className="mb-3 block text-black dark:text-white">
                  Tour Highlights
                </label>
                <InputFieldList
                  noOfInputs={noOfHighlightInputs}
                  setNoOfInputs={setNoOfHighlightInputs}
                  handleValueChange={handleHighlightsValueChange}
                  inputFields={highlightInputFields}
                  setInputFields={setHighlightInputFields}
                  title="Tour Highlights "
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Whats Included
                </label>
                <InputFieldList
                  noOfInputs={noOfWhatsIncludedInputs}
                  setNoOfInputs={setNoOfWhatsIncludedInputs}
                  handleValueChange={handleWhatsIncludedValueChange}
                  inputFields={whatsIncludedInputFields}
                  setInputFields={setWhatsIncludedInputFields}
                  title="Whats Included "
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Whats Not Included
                </label>
                <InputFieldList
                  noOfInputs={noOfWhatsNotIncludedInputs}
                  setNoOfInputs={setNoOfWhatsNotIncludedInputs}
                  handleValueChange={handleWhatsNotIncludedValueChange}
                  inputFields={whatsNotIncludedInputFields}
                  setInputFields={setWhatsNotIncludedInputFields}
                  title="Whats Not Included "
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Itinerary
                </label>

                <InputFieldList
                  noOfInputs={noOfItineraryInputs}
                  setNoOfInputs={setNoOfItineraryInputs}
                  handleValueChange={handleItineraryValueChange}
                  inputFields={itineraryInputFields}
                  setInputFields={setItineraryInputFields}
                  title="Itinerary"
                />
              </div>
            </div>
            <div className="px-5 mb-3">
              <label className="mb-3 block text-black dark:text-white">
                Price
              </label>
              <input
                type="number"
                value={formData?.price}
                name="price"
                onChange={(e) => handleChange(e)}
                placeholder="Enter price in NPR"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-5">
              <p className="mb-3 px-5 block text-black dark:text-white">
                Type of Tour
              </p>
              <div className="px-5 mb-3 flex  justify-start">
                <div className="flex items-center mr-4 px-5 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="inbound-radio"
                    type="radio"
                    value="inbound"
                    checked={formData?.type === 'inbound'}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        type: 'inbound',
                      }))
                    }
                    className=" cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-1"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    In Bound
                  </label>
                </div>

                <div className="flex items-center px-5 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="inbound-radio"
                    type="radio"
                    value="outbound"
                    checked={formData?.type === 'outbound'}
                    onChange={() =>
                      setFormData((prevState) => ({
                        ...prevState,
                        type: 'outbound',
                      }))
                    }
                    className="w-4 cursor-pointer h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-2"
                    className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Out Bound
                  </label>
                </div>
              </div>
            </div>
            <div className="px-3">
              <div className="flex items-center mb-4 ">
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 font-bold text-gray-900 pr-5 dark:text-gray-300 text-xl"
                >
                  Trending
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  checked={formData?.trending}
                  onChange={() =>
                    setFormData((prevState) => ({
                      ...prevState,
                      trending: !formData?.trending,
                    }))
                  }
                  className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9 fixed right-15">
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

export default TourForm;
