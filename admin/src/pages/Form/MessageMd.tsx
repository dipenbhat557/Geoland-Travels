import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

const MessageMd = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    message: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    img: null as File | null,
  });

  const handleSubmit = async () => {
    if (formData.img) {
      const storageRef = ref(storage, 'some-child/' + formData.img.name);
      try {
        const snapshot = await uploadBytes(storageRef, formData.img);

        const downloadURL = await getDownloadURL(storageRef);

        console.log('Download URL:', downloadURL);

        const messageRef = collection(db, 'messages');
        const docRef = await addDoc(messageRef, {
          title: formData?.title,
          name: formData?.name,
          message: formData?.message,
          facebook: formData?.facebook,
          instagram: formData?.instagram,
          linkedin: formData?.linkedin,
          img: downloadURL,
        });
        console.log(docRef?.id);
        setFormData({
          title: '',
          name: '',
          message: '',
          facebook: '',
          instagram: '',
          linkedin: '',
          img: null as File | null,
        });
      } catch (error: any) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        img: file,
      }));
    }
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Message From Md " />

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
                  Attach Image
                </label>

                <input
                  onChange={handleFileChange}
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Message
                </label>
                <textarea
                  value={formData?.message}
                  name="message"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      message: e.target.value,
                    }))
                  }
                  rows={3}
                  placeholder="Message content"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Name
                </label>
                <input
                  value={formData?.name}
                  name="name"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      name: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Name "
                  className="w-full rounded-lg border-[1.5px]    border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary disabled:cursor-default disabled:bg-whiter  dark:border-form-strokedark  dark:bg-form-input  dark:focus:border-primary dark:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Facebook Link
                </label>
                <input
                  type="text"
                  value={formData?.facebook}
                  name="facebook"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      facebook: e.target.value,
                    }))
                  }
                  placeholder="Facebook Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Instagram Link
                </label>
                <input
                  value={formData?.instagram}
                  name="instagram"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      instagram: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Instagram Link"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Linkedin Link
                </label>
                <input
                  type="text"
                  value={formData?.linkedin}
                  name="linkedin"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      linkedin: e.target.value,
                    }))
                  }
                  placeholder="Linkedin Link"
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

export default MessageMd;
