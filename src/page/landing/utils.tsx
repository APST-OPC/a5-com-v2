import type { RedirectBtn, USDTLine } from "./type";
import Telegram from "@/assets/svg/ic_svg_telegram.svg";
import VipLaurel from "@/assets/svg/ic_svg_vip_laurel.svg";

export const usdtLine: USDTLine[] = [
  {
    contents: {
      title: "USDT专线1",
      link: "5a615.com",
    },
  },
  {
    contents: {
      title: "USDT专线2",
      link: "5a195.com",
    },
  },
];

export const redirectInfo: RedirectBtn[] = [
  // {
  //   items: {
  //     title: "6F.VIP润豐H5",
  //     subTitle: "6F.VIP Runfeng H5 Web Version",
  //     image: "ic_svg_h5",
  //   },
  // },

  {
    items: {
      title: "6F.VIP润豐频道",
      subTitle: "6F.VIP Runfeng Official Telegram Channel",
      image: Telegram,
    },
  },
  {
    items: {
      title: "益德金融频道",
      subTitle: "Exclusive On-site VIP Lounge Service",
      image: VipLaurel,
    },
  },

  // {
  //   items: {
  //     title: "益德金融频道",
  //     subTitle: "Yide Financial Channel",
  //     image: "ic_svg_wallet",
  //   },
  // },
];
