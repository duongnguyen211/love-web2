import { Heart, Star, Music, Camera, Book } from 'lucide-react';

//import images to timeline
import firstmess from "F:/LoveWeb/src/assets/images/firstmess.jpg";
import firstdate from "F:/LoveWeb/src/assets/images/firstdate.png";
import firstpic from "F:/LoveWeb/src/assets/images/firstpic.jpg";
import offical from "F:/LoveWeb/src/assets/images/offical.jpg";
import firstphotobooth from "F:/LoveWeb/src/assets/images/firstphotobooth.jpg";
import onemonth from "F:/LoveWeb/src/assets/images/1month.jpg";
import firsttrip from "F:/LoveWeb/src/assets/images/firsttrip.jpg";
import camcon from "F:/LoveWeb/src/assets/images/camcon.jpg";
import totnghiep from "F:/LoveWeb/src/assets/images/totnghiep.jpg";
import hamlon from "F:/LoveWeb/src/assets/images/hamlon.jpg";
import birthday from "F:/LoveWeb/src/assets/images/25.jpg";
import tuyenquang from "F:/LoveWeb/src/assets/images/tuyenquang.jpg";
import valentine from "F:/LoveWeb/src/assets/images/valentine.jpg";
import tet from "F:/LoveWeb/src/assets/images/tet.jpg";
import noel from "F:/LoveWeb/src/assets/images/noel.jpg";
import ourlovestory from "F:/LoveWeb/src/assets/images/ourlovestory.png";
import firstalbum from "F:/LoveWeb/src/assets/images/firstalbum.jpg";

//import images to gallery

export const CONFIG = {
  coupleNames: "Dương Nguyễn & Lự Linh",
  startDate: "2025-08-19", // YYYY-MM-DD
  musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Placeholder
  password: "love", // Simple password for demo
};

export const INITIAL_TIMELINE = [ 
  {
    id: 1,
    date: "2024-09-06",
    title: "Tin nhắn đầu tiên",
    description: "Bạn nhỏ tầng dưới mượn máy tính và sau đó là lịch sử. Bạn lớn tầng trên lạnh lùng vcc :)))",
    image: firstmess
  },
  {
    id: 2,
    date: "2025-08-06",
    title: "First Date: Nét Huế Thái Hà",
    description: "Đừng thắc mắc gần một năm làm gì mà chưa yêu nhau, trap nhau chứ làm gì, hì hì",
    image: firstdate
  },
  { 
    id: 3,
    date: "2025-08-16",
    title: "Tấm ảnh đầu tiên anh chụp cho em",
    description: "Chúng mình đi chơi cùng nhau lần đầu tiên ở Thủy Cung, anh chụp ảnh không đẹp, nhưng em đẹp :>",
    image: firstpic
  },
  { 
    id: 4,
    date: "2025-08-19",
    title: "Chính thức yêu nhauuuu",
    description: "Anh muốn tương lai của anh có em <cái trong ảnh là món quà đầu tiên tặng em nhưng... mất ùi nhớ>",
    image: offical
  },
  { 
    id: 5,
    date: "2025-08-28",
    title: "First Photobooth",
    description: "Em đến và tô vẽ thêm cho cuộc sống vốn hơi tẻ nhạt một chút xíu của anh",
    image: firstphotobooth
  },
  { 
    id: 6,
    date: "2025-09-19",
    title: "1 Month",
    description: "Một tháng bên nhau, mỗi ngày yêu em thêm một chút",
    image: onemonth
  },
  { 
    id: 7,
    date: "2025-10-04",
    title: "Thủ đô kháng chiến chào đón em",
    description: "Lần đầu em về quê anh",
    image: tuyenquang
  },
  { 
    id: 8,
    date: "2025-10-20",
    title: "25+",
    description: "Đón sinh nhật cùng em, già ùi, chả biết bao giờ mới lấy được vợ, hẹ hẹ",
    image: birthday
  },
  { 
    id: 9,
    date: "2025-11-15",
    title: "Hàm Lợn Mao từn",
    description: "Hôm sau em ốm luôn, thương em, em đã rất cố gắng vì sở thích của anh",
    image: hamlon
  },
  { 
    id: 10,
    date: "2025-11-22",
    title: "Bảo vệ khóa luật",
    description: "Cô luật sư nhỏ của tôi đã bảo vệ xong khóa luận",
    image: totnghiep
  },
  { 
    id: 11,
    date: "2025-11-30",
    title: "First Trip: Tam Đảo",
    description: "Chuyến du lịch đầu tiên của 2 đứa: bị lừa 1 củ khoai :>",
    image: firsttrip
  },
  { 
    id: 12,
    date: "2025-12-25",
    title: "Noel đầu tiên: Xa nhau",
    description: "Em bé phải về quê vì bà bị ốm",
    image: noel
  },
  { 
    id: 13,
    date: "2026-01-01",
    title: "Cam Cọn chào đón anh",
    description: "Lần đầu tiên anh về quê em",
    image: camcon
  },
  { 
    id: 14,
    date: "2026-01-18",
    title: "Album đầu tiên",
    description: "Chúng mình chụp ảnh Tết",
    image: firstalbum
  },
  { 
    id: 15,
    date: "2026-02-14",
    title: "Valentine đầu tiên: Xa nhau",
    description: "Em bé về quê ăn Tết còn anh thì tiếp tục chiến đấu",
    image: valentine
  },
  { 
    id: 16,
    date: "2026-02-17",
    title: "Tết đầu tiên bên nhau",
    description: "Anh sẽ cố gắng hơn mỗi ngày để có thể nhanh chóng được đón Tết cùng em",
    image: tet
  },
  { 
    id: 17,
    date: "2026-02-19",
    title: "6 tháng bên nhau: Ngày web được thành lập",
    description: "Anh làm trang web được 3 ngày ùi, anh không đi ngủ sớm đâu, hì hì, mỗi ngày anh làm một xíu lúc bé đi ngủ nên buổi sáng anh mới dậy muộn, may mắn là nó đã hoàn thành ạ, yêu em nhiều lắm ạ",
    image: ourlovestory
  },
];

export const INITIAL_LETTERS = [
  {
    id: 1,
    date: "2026-02-19",
    title: "Gửi em bé của anh",
    content: "Vậy là mình đã đi cùng nhau 6 tháng rồi. Cảm ơn em vì đã đến, vì đã kiên nhẫn, vì đã luôn dịu dàng với anh – ngay cả những lúc anh chưa đủ tinh tế. Nửa năm qua không phải lúc nào cũng hoàn hảo, nhưng vì có em, mọi thứ đều trở nên đáng nhớ. Anh mong những tháng sau, những năm sau, mình vẫn nắm tay nhau như thế này – bình yên và chân thành."
  }
];

// export const INITIAL_GALLERY = [
//   "https://images.unsplash.com/photo-1750870799067-3ff68f7468b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBhc3RlbHxlbnwwfHx8fDE3NzE0MjU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1770389356351-3406c6d7f629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwyfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBhc3RlbHxlbnwwfHx8fDE3NzE0MjU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1770389356151-eccbc38e3dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwzfHxyb21hbnRpYyUyMGNvdXBsZSUyMHBhc3RlbHxlbnwwfHx8fDE3NzE0MjU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1696527018075-6c285722256d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHw0fHxyb21hbnRpYyUyMGNvdXBsZSUyMHBhc3RlbHxlbnwwfHx8fDE3NzE0MjU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1758874089420-ef03b31e595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHw1fHxyb21hbnRpYyUyMGNvdXBsZSUyMHBhc3RlbHxlbnwwfHx8fDE3NzE0MjU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1696527018048-2f58d46d9717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHw2fHxyb21hbnRpYyUyMGNvdXBsZSUyMHBhc3RlbHxlbnwwfHx8fDE3NzE0MjU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1765959063139-4ebbf0b071ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB0cmF2ZWwlMjBjb3VwbGV8ZW58MHx8fHwxNzcxNDI1NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1762216443989-37cea3427b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwyfHxzY2VuaWMlMjB0cmF2ZWwlMjBjb3VwbGV8ZW58MHx8fHwxNzcxNDI1NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
//   "https://images.unsplash.com/photo-1768860321868-d5b2120d2269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwzfHxzY2VuaWMlMjB0cmF2ZWwlMjBjb3VwbGV8ZW58MHx8fHwxNzcxNDI1NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
// ];

// Auto import toàn bộ ảnh trong folder gallery
const images = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default'
});


export const INITIAL_GALLERY = Object.values(images);

