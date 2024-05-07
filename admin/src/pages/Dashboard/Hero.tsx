import React from 'react';


import DefaultLayout from '../../layout/DefaultLayout';
import { Package } from '../../types/package';

interface Dashboard {
  fieldname: string,
  datetime: string,
  location: string,
  title: string,
  updatedby: string
}
const dashboardData: Dashboard[] = [
  {
    fieldname: "Tour",
    datetime: "2022-03-3",
    location: "lamahi dang",
    title: "maldives tour",
    updatedby: "Content writer"
  },
  {
    fieldname: "Tour",
    datetime: "2022-03-3",
    location: "lamahi dang",
    title: "maldives tour",
    updatedby: "Content writer"
  },
  {
    fieldname: "Tour",
    datetime: "2022-03-3",
    location: "lamahi dang",
    title: "maldives tour",
    updatedby: "Content writer"
  },
  {
    fieldname: "Tour",
    datetime: "2022-03-3",
    location: "lamahi dang",
    title: "maldives tour",
    updatedby: "Content writer"
  },

];



const Hero: React.FC = () => {
  return (
    <DefaultLayout>



      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Field Name
                  {/*This is Field name from sidebar options*/}
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Date & Time
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Location
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Title
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Updated By
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.fieldname}
                    </h5>

                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.datetime}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.location}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <p className="text-black dark:text-white">
                        {packageItem.title}
                      </p>


                    </div>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.updatedby}
                    </h5>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    </DefaultLayout>
  );
};

export default Hero;
