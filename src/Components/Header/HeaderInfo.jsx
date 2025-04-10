import {
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

function HeaderInfo() {
  return (
    <div className="bg-[#17254E] flex items-center justify-between 2xl:justify-around h-[50px] text-white">
      <div className="flex sm:gap-5 2xl:gap-7">
        <div className="flex items-center gap-3 relative after:w-[1px] after:h-[20px] after:absolute after:right-[-10px] after:bg-gray-400">
          <PhoneOutlined style={{ color: "#FFD25D" }} />
          <span className="sm:hidden 2xl:inline-block">0395827485</span>
        </div>
        <div className="flex items-center gap-3 relative after:w-[1px] after:h-[20px] after:absolute after:right-[-10px] after:bg-gray-400">
          <MailOutlined style={{ color: "#FFD25D" }} />
          <span className="sm:hidden 2xl:inline-block">trancongduc0812@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <HomeOutlined style={{ color: "#FFD25D" }} />
          <span className="sm:hidden 2xl:inline-block">Đại học Bách Khoa Đà Nẵng</span>
        </div>
      </div>
      <div className="bg-[#FFD25D] text-[#17254E] flex items-center gap-4 px-4 h-full">
        <a href="https://www.facebook.com/ducnguyen.ductran" target="_blank">
          <FacebookOutlined />
        </a>
        <a>
          <InstagramOutlined />
        </a>
        <a>
          <YoutubeOutlined />
        </a>
        <a>
          <LinkedinOutlined />
        </a>
      </div>
    </div>
  );
}

export default HeaderInfo;
