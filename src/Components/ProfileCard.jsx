import { IoHomeOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
const ProfileCards = ({ cards }) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 gap-x-2 lg:gap-x-8 px-2">
      {cards?.map((item, i) => (
        <div class="w-full h-full overflow-hidden rounded-lg shadow-lg bg-primary space-y-1 m-4">
          <div class="w-full h-56 flex items-center justify-center bg-white overflow-hidden border-b-2 border-gray-700">
            <img
              class="w-full h-full object-cover"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?w=740&t=st=1706260614~exp=1706261214~hmac=f6408311aa9816612a3992c85df4b08d984b25c16621a3a99dcd5e335d438ac7"
              alt="avatar"
            />
          </div>
          <div class="flex flex-col gap-2 py-2 normalText">
            <div class="text-center">
              <p class="block text-xl font-bold text-gray-700 px-2">
                Name: {item.name}
              </p>
              <p class="text-sm text-gray-700">{item.email}</p>
            </div>
            <div class="p-2 flex flex-col gap-1">
              {item.phone ? (
                <div class="p-2 flex gap-2">
                  <MdLocalPhone class="w-5 h-5 text-gray-700" />
                  <p class="text-sm text-gray-700 text-left">
                    Phone: {item.phone}
                  </p>
                </div>
              ) : null}
              {item.address ? (
                <div class="p-2 flex gap-2">
                  <IoHomeOutline class="w-5 h-5 text-gray-700" />
                  <p class="text-sm text-gray-700 text-left">
                    Specialisation: {item.address.street}
                  </p>
                </div>
              ) : null}
              {item.website ? (
                <div class="p-2 flex gap-2">
                  <RiGlobalLine class="w-5 h-5 text-gray-700" />
                  <p class="text-sm text-gray-700 text-left">
                    website: {item.website}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
