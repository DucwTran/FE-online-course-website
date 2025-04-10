import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined
} from "@ant-design/icons";

function FooterContact() {
  return (
    <div className="border-b-1 border-solid border-gray-300">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-3 ">
          <div className="flex justify-center items-center gap-5 border-r-1 border-solid border-gray-500 h-[164px]">
            <div className="w-[60px] h-[60px] rounded-[999px] border-1 border-solid border-gray-500 flex justify-center items-center text-2xl text-white">
              <HomeOutlined />
            </div>
            <div>
              <div className="text-[15px] text-[#7768E5] leading-[32px]">
                Address:
              </div>
              <div className="text-white text-[27px] font-[600]">
                84 Mẹ Suốt
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 border-r-1 border-solid border-gray-500 h-[164px]">
            <div className="w-[60px] h-[60px] rounded-[999px] border-1 border-solid border-gray-500 flex justify-center items-center text-2xl text-white">
              <PhoneOutlined />
            </div>
            <div>
              <div className="text-[15px] text-[#7768E5] leading-[32px]">
                Phone:
              </div>
              <div className="text-white text-[27px] font-[600]">
                0395827485
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 border-solid border-gray-500 h-[164px]">
            <div className="w-[60px] h-[60px] rounded-[999px] border-1 border-solid border-gray-500 flex justify-center items-center text-2xl text-white">
              <MailOutlined />
            </div>
            <div>
              <div className="text-[15px] text-[#7768E5] leading-[32px]">
                Email:
              </div>
              <div className="text-white text-[27px] font-[600]">
                DucwTran@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
