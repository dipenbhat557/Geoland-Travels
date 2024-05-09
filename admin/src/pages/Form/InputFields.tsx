import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

const InputFieldList = ({
  noOfInputs,
  setNoOfInputs,
  handleValueChange,
  inputFields,
  setInputFields,
  title,
}: {
  noOfInputs: number;
  setNoOfInputs: any;
  handleValueChange: any;
  inputFields: string[];
  setInputFields: any;
  title: string;
}) => {
  return (
    <>
      {Array.from({ length: noOfInputs }, (_, index) => (
        <div
          className="input-container flex items-center justify-around py-3"
          key={index}
        >
          <input
            type="text"
            placeholder={`${title} ${index + 1}`}
            value={inputFields[index] || ''}
            onChange={(e) => handleValueChange(index, e)}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          <button
            className="delete-btn pl-2"
            onClick={() => {
              setNoOfInputs((prevVal: number) => Math.max(prevVal - 1, 1));
              setInputFields((prevFields: any[]) => {
                const updatedFields = [...prevFields];
                updatedFields.splice(index, 1);
                return updatedFields;
              });
            }}
          >
            <IoIosRemoveCircle />
          </button>
          <button
            onClick={() => {
              setNoOfInputs((prevVal: number) => prevVal + 1);
              setInputFields([...inputFields, '']);
            }}
            className=" bg-transparent  text-blue-700 font-semibold hover:text-white py-2 px-1   "
          >
            <IoIosAddCircle />
          </button>
        </div>
      ))}
    </>
  );
};

export default InputFieldList;
