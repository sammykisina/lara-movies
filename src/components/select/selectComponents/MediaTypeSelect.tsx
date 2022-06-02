import { Menu } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { mediaTypeState } from "../../../atoms/Atoms";
import { defaultMediaType } from "../../../constants/mediaType";

const MediaTypeSelect = () => {
  const [mediaType, setMediaType] = useRecoilState(mediaTypeState);
  // const [selectedMediaType, setSelectedMediaType] = useState(mediaType);

  return (
    <div>
      <Menu.Items className="bg-[#333] rounded-md">
        <div className="px-1 py-1  space-y-2">
          {defaultMediaType.map((singleMediaType, singleMediaTypeIndex) => (
            <Menu.Item key={singleMediaTypeIndex}>
              <button
                className={`group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:bg-gray-800 uppercase mt-1 ${
                  singleMediaType.mediaTypeName === mediaType && "bg-gray-800"
                } `}
                onClick={() => {
                  setMediaType(singleMediaType.mediaTypeName);
                }}
              >
                {singleMediaType.mediaTypeName}
              </button>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </div>
  );
};

export default MediaTypeSelect;
