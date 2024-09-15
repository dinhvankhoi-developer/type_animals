"use strict";

/**
 * Đối tượng chứa các giá trị url và key cho API của Animal
 * @type {{base: {url: string, key: string}}}
 */
const global = {
  base: {
    url: "https://api.api-ninjas.com/v1/animals?name=",
    key: "cvfODdaaM5aGCZNBe2ywYg==gaBGWXsYX0eQFYOy",
  },
  imgImg: {
    url: "https://api.pexels.com/",
    key: "563492ad6f91700001000001a67e069dfb06462899ac8ee8ee44cae8",
  },
};

// Lấy các phần tử HTML
// form: form
// select: select box
// btn_search: nút submit
let form = document.querySelector("form");
let select = document.querySelector("select");
const btn_search = document.querySelector("#btn_search");

/**
 * Lấy dữ liệu danh sách các động vật đã được lưu trữ
 * sau khi khởi chạy đầu tiên
 * có thể xoá @param {Array} listAnimals
 * @returns {array} Danh sách các động vật
 */
let listAnimals = [
  { id: "4fedb64c19788", name: "cat", title: "mèo" },
  { id: "a575ec94a8dbe", name: "dog", title: "chó" },
  { id: "99732ce7d606b", name: "lion", title: "sư tử" },
  { id: "47d880f7bcbd4", name: "tiger", title: "hổ" },
  { id: "09a6dbae1a31f", name: "elephant", title: "voi" },
  { id: "750d3876e6882", name: "rabbit", title: "thỏ" },
  { id: "4df28262b2bfe", name: "bear", title: "gấu" },
  { id: "cda633eab32b2", name: "wolf", title: "sói" },
  { id: "643819c8d9d0b", name: "giraffe", title: "hươu cao cổ" },
  { id: "218e3d102087c", name: "zebra", title: "ngựa vằn" },
  { id: "3c9a68f258ddf", name: "horse", title: "ngựa" },
  { id: "413b22b85ef3b", name: "cow", title: "bò" },
  { id: "de7fe547bd239", name: "sheep", title: "cừu" },
  { id: "b011c65eaa9c6", name: "goat", title: "dê" },
  { id: "b55f33b6624f6", name: "chicken", title: "gà" },
  { id: "13bbe02dea2e9", name: "duck", title: "vịt" },
  { id: "0bce375a556f6", name: "pig", title: "lợn" },
  { id: "4213eeb4cc6bf", name: "fox", title: "cáo" },
  { id: "108106b2b9f74", name: "deer", title: "nai" },
  { id: "d6173d090bf88", name: "koala", title: "gấu túi" },
  { id: "27cd49c2b622", name: "kangaroo", title: "chuột túi" },
  { id: "318f4380aa9f5", name: "panda", title: "gấu trúc" },
  { id: "222bec68d3da", name: "leopard", title: "báo" },
  { id: "cc4a35bfdd271", name: "cheetah", title: "báo gấm" },
  { id: "03f263db279a1", name: "crocodile", title: "cá sấu" },
  { id: "6c928d465579f", name: "alligator", title: "cá sấu châu Mỹ" },
  { id: "1f9034e1e1dba", name: "dolphin", title: "cá heo" },
  { id: "9b4b5fd093bfe", name: "whale", title: "cá voi" },
  { id: "9165ee2b7d8ea", name: "shark", title: "cá mập" },
  { id: "c12f639603aeb", name: "octopus", title: "bạch tuộc" },
  { id: "b62f33cccb2cc", name: "seal", title: "hải cẩu" },
  { id: "c380716900353", name: "penguin", title: "chim cánh cụt" },
  { id: "6dfd2a30a4a4e", name: "parrot", title: "vẹt" },
  { id: "cec7bec175657", name: "eagle", title: "đại bàng" },
  { id: "677145889701a", name: "hawk", title: "diều hâu" },
  { id: "6ceb978aba7", name: "owl", title: "cú" },
  { id: "7da3a8ec72fe7", name: "peacock", title: "chim công" },
  { id: "5acd32970a0a9", name: "flamingo", title: "hồng hạc" },
  { id: "8beca3590455", name: "swan", title: "thiên nga" },
  { id: "3f111ddc61c94", name: "pigeon", title: "bồ câu" },
  { id: "8897b478d4a11", name: "crow", title: "quạ" },
  { id: "79bc219c75a7b", name: "sparrow", title: "chim sẻ" },
  { id: "12ea71c783395", name: "bat", title: "dơi" },
  { id: "ba5dd9a21778a", name: "beetle", title: "bọ cánh cứng" },
  { id: "5a26e3e5223fe", name: "butterfly", title: "bướm" },
  { id: "bac7eeb57949b", name: "bee", title: "ong" },
  { id: "d0427861460ad", name: "ant", title: "kiến" },
  { id: "b91625a7270c", name: "mosquito", title: "muỗi" },
  { id: "654e7e18342eb", name: "spider", title: "nhện" },
  { id: "1c47c9803ff81", name: "scorpion", title: "bọ cạp" },
  { id: "bf305f8c73a92", name: "snail", title: "ốc sên" },
  { id: "d51482ecc68ae", name: "crab", title: "cua" },
  { id: "662a38181da0b", name: "lobster", title: "tôm hùm" },
  { id: "5a32edd2181d4", name: "shrimp", title: "tôm" },
  { id: "6b023cae35eef", name: "jellyfish", title: "sứa" },
  { id: "3ad78817ce83d", name: "starfish", title: "sao biển" },
  { id: "05b20ca8cf21e", name: "seahorse", title: "cá ngựa" },
  { id: "69a988ad98274", name: "frog", title: "ếch" },
  { id: "190604ea3b6df", name: "toad", title: "cóc" },
  { id: "5efb945ca8409", name: "lizard", title: "thằn lằn" },
  { id: "0a66009b37678", name: "snake", title: "rắn" },
  { id: "a4d78fe09462d", name: "chameleon", title: "tắc kè" },
  { id: "22959c9b78d07", name: "iguana", title: "kỳ nhông" },
  { id: "66548b65017df", name: "gecko", title: "thạch sùng" },
  { id: "bd2fd3f3ddcce", name: "tortoise", title: "rùa cạn" },
  { id: "a30f96f0e947e", name: "turtle", title: "rùa biển" },
  { id: "d6ae33911cf35", name: "hedgehog", title: "nhím" },
  { id: "33d2e28ce6fa1", name: "porcupine", title: "nhím gai" },
  { id: "a0ad508ba3e64", name: "hamster", title: "chuột hamster" },
  { id: "57b9fb898c003", name: "mouse", title: "chuột" },
  { id: "2a93bbbb0ed64", name: "rat", title: "chuột cống" },
  { id: "ace789a39bee1", name: "squirrel", title: "sóc" },
  { id: "be1ede70d55ef", name: "otter", title: "rái cá" },
  { id: "82ee3d202ec74", name: "raccoon", title: "gấu mèo" },
  { id: "01bbf47a9612e", name: "weasel", title: "chồn" },
  { id: "d7cfe0a934d0b", name: "skunk", title: "chồn hôi" },
  { id: "2acdd5f973544", name: "badger", title: "lửng" },
  { id: "0b43c5ec831c6", name: "beaver", title: "hải ly" },
  { id: "1a6ba877cb514", name: "mole", title: "chuột chũi" },
  { id: "66fc74efa823c", name: "platypus", title: "thú mỏ vịt" },
  { id: "b20b679d390aa", name: "hippopotamus", title: "hà mã" },
  { id: "d2b1080c8ce25", name: "rhinoceros", title: "tê giác" },
  { id: "25b8b48a05d6e", name: "buffalo", title: "trâu" },
  { id: "77304900731c1", name: "bison", title: "bò rừng" },
  { id: "6dd38c7eb6b15", name: "camel", title: "lạc đà" },
  { id: "0e826a28c3447", name: "llama", title: "lạc đà không bướu" },
  { id: "d0689f6672913", name: "alpaca", title: "lạc đà alpaca" },
  { id: "804d60bd4ff56", name: "donkey", title: "lừa" },
  { id: "835873a6fb489", name: "mule", title: "la" },
  { id: "223bae425d79e", name: "yak", title: "bò Tây Tạng" },
  { id: "083bf752b0f41", name: "gazelle", title: "linh dương" },
  { id: "7092f0b525794", name: "impala", title: "linh dương châu Phi" },
  { id: "15ae88da0f66e", name: "reindeer", title: "tuần lộc" },
  { id: "f757e924d747a", name: "elk", title: "nai sừng tấm" },
  { id: "8d0e12dfee04c", name: "moose", title: "nai sừng tấm châu Mỹ" },
  { id: "66b05839d33d9", name: "walrus", title: "hải mã" },
  { id: "bf2320a93a3f1", name: "armadillo", title: "con tatu" },
  { id: "9f546c8d8ef1f", name: "sloth", title: "con lười" },
  { id: "5479b8e81dc9a", name: "aardvark", title: "lợn đất" },
  { id: "69c9a345c8254", name: "meerkat", title: "chồn đất" },
  { id: "733f9c9d1f33e", name: "hyena", title: "linh cẩu" },
  { id: "c40125bdee2e", name: "baboon", title: "khỉ đầu chó" },
  { id: "0388ab696c93c", name: "gorilla", title: "khỉ đột" },
  { id: "991662bd3f1f5", name: "chimpanzee", title: "tinh tinh" },
  { id: "604ce1f5a4ca9", name: "orangutan", title: "đười ươi" },
  { id: "d4b5b65bde934", name: "lemur", title: "vượn cáo" },
  { id: "aff86e3602c7a", name: "gibbon", title: "vượn" },
  { id: "49af3a65c5bf", name: "capuchin", title: "khỉ mũ" },
  { id: "9897a6fd81032", name: "macaque", title: "khỉ đuôi dài" },
  { id: "e5d05669d1449", name: "mandrill", title: "khỉ mặt chó" },
  { id: "2aebe4af58554", name: "tarantula", title: "nhện tarantula" },
  { id: "6322755833401", name: "centipede", title: "rết" },
  { id: "a2ef33d64d0db", name: "millipede", title: "cuốn chiếu" },
  { id: "bc39b6fbe9217", name: "earthworm", title: "giun đất" },
  { id: "4b34f0abc4f58", name: "clam", title: "ngao" },
  { id: "ac8538b7100ae", name: "oyster", title: "hàu" },
  { id: "a6fe98829e46d", name: "squid", title: "mực" },
  { id: "21a09857b67ae", name: "cuttlefish", title: "mực nang" },
  { id: "fad012fb1ca31", name: "anglerfish", title: "cá cần câu" },
  { id: "53ca831174c87", name: "barracuda", title: "cá nhồng" },
  { id: "87cdbc5daef25", name: "tuna", title: "cá ngừ" },
  { id: "fc47a45081e27", name: "salmon", title: "cá hồi" },
  { id: "28be24a66802a", name: "trout", title: "cá hồi nước ngọt" },
  { id: "ef40fe777229e", name: "carp", title: "cá chép" },
  { id: "cb93b618da1e1", name: "pufferfish", title: "cá nóc" },
  { id: "3e10fa35874", name: "eel", title: "lươn" },
  { id: "d472d1f656f33", name: "catfish", title: "cá trê" },
  { id: "a759fb011de34", name: "goldfish", title: "cá vàng" },
  { id: "1abc76d32ecb3", name: "guppy", title: "cá bảy màu" },
  { id: "90e3405a0d26f", name: "betta", title: "cá betta" },
  { id: "68d00dc51efc8", name: "sardine", title: "cá mòi" },
  { id: "e03dfa301d975", name: "herring", title: "cá trích" },
  { id: "7930d7e3bac8b", name: "anchovy", title: "cá cơm" },
  { id: "d384069512cfb", name: "lobster", title: "tôm hùm" },
  { id: "0d92414e4d8aa", name: "shrimp", title: "tôm" },
  { id: "829576b906bcd", name: "krill", title: "tôm ngọn" },
  { id: "da43d0aa8941f", name: "seahorse", title: "cá ngựa" },
  { id: "f46ddd5976ae2", name: "sea lion", title: "sư tử biển" },
  { id: "5e8ae0e149f47", name: "manatee", title: "lợn biển" },
  { id: "d810eee5ef0c7", name: "otter", title: "rái cá" },
  { id: "273a7343407c7", name: "pelican", title: "bồ nông" },
  { id: "9689dad34671d", name: "heron", title: "diệc" },
  { id: "4bf917f495cd3", name: "stork", title: "cò" },
  { id: "f3cffc5d7ebfa", name: "albatross", title: "chim hải âu" },
  { id: "d6cc52ddf5caa", name: "toucan", title: "chim tu căng" },
  { id: "cfba81d5727bc", name: "woodpecker", title: "chim gõ kiến" },
  { id: "9de9f7093e511", name: "sparrow", title: "chim sẻ" },
  { id: "2cedc0fd7d3e5", name: "finch", title: "chim sẻ gai" },
  { id: "7aee7f97d421d", name: "canary", title: "chim hoàng yến" },
  { id: "cc3a493473ba8", name: "dove", title: "chim bồ câu" },
  { id: "5eba57d0dc745", name: "vulture", title: "kền kền" },
  { id: "e6bcd6e87902b", name: "falcon", title: "chim cắt" },
  { id: "a3a37c374b426", name: "eagle", title: "đại bàng" },
  { id: "8e8e19972323d", name: "hawk", title: "diều hâu" },
  { id: "fda2c5a11f6d6", name: "buzzard", title: "chim ưng" },
  { id: "afc07db9d9304", name: "kestrel", title: "chim cắt nhỏ" },
  { id: "0e5130b867437", name: "owl", title: "cú mèo" },
  { id: "d5ad30e8785a4", name: "nightingale", title: "chim họa mi" },
  { id: "3ceb21ce2e98a", name: "robin", title: "chim sẻ đỏ" },
  { id: "c08a4253984fb", name: "bluejay", title: "chim lam" },
  { id: "72d1991d6109", name: "oriole", title: "chim vàng anh" },
  { id: "4116cde69a9f3", name: "peacock", title: "chim công" },
  { id: "e6001dab8ea14", name: "pheasant", title: "chim trĩ" },
  { id: "e5bc20855546f", name: "quail", title: "chim cút" },
  { id: "b6e6396ab40b4", name: "partridge", title: "gà gô" },
  { id: "76808a4bb5744", name: "cockatoo", title: "vẹt mào" },
  { id: "d9d73e3363da7", name: "macaw", title: "vẹt đuôi dài" },
  { id: "98b5aa6fc4931", name: "tanager", title: "chim tanager" },
  { id: "a36097c404461", name: "cardinal", title: "chim hồng y" },
  { id: "00e882767b443", name: "sparrowhawk", title: "diều nhỏ" },
  { id: "fb2c88b149998", name: "kookaburra", title: "chim cười" },
  { id: "e9110e25aaf27", name: "kingfisher", title: "chim bói cá" },
  { id: "d8ea7795aff04", name: "hornbill", title: "chim mỏ sừng" },
  { id: "0951b07155a21", name: "frigatebird", title: "chim điên" },
  { id: "b3acbec42e23f", name: "pelican", title: "bồ nông" },
  { id: "38ce3d0466ddc", name: "cormorant", title: "chim cốc" },
  { id: "09a561058f4ef", name: "loon", title: "chim lặn" },
  { id: "72948c87ff906", name: "penguin", title: "chim cánh cụt" },
  { id: "d24a2f52f7fea", name: "swallow", title: "chim én" },
  { id: "fc6fe2b962226", name: "swift", title: "chim yến" },
  { id: "9b4f396ad5c75", name: "gull", title: "chim hải âu" },
  { id: "2c9d64977b19e", name: "tern", title: "chim nhạn" },
  { id: "af5f02311a085", name: "skimmer", title: "chim xẻ nước" },
  { id: "ec5014df24676", name: "sandpiper", title: "chim choi choi" },
  { id: "3f1516f834435", name: "plover", title: "chim giẽ giun" },
  { id: "3960b9d44ba4b", name: "plover", title: "chim giẽ giun" },
  { id: "73260eeaa745e", name: "lapwing", title: "chim chích chòe" },
  { id: "dfe8632b5de25", name: "oystercatcher", title: "chim bắt hàu" },
  { id: "9968006b4c77f", name: "stint", title: "chim cánh cụt nhỏ" },
  { id: "f641c36183068", name: "curlew", title: "chim mỏ cong" },
  { id: "74add4d569dc", name: "godwit", title: "chim dẽ mỏ cong" },
  { id: "1c33eca48fcbe", name: "dove", title: "chim bồ câu" },
  { id: "7b87b42633703", name: "pigeon", title: "chim bồ câu" },
  { id: "bc8a91b67df5e", name: "rock pigeon", title: "chim bồ câu đá" },
  { id: "8e8fd893053d5", name: "parakeet", title: "vẹt nhỏ" },
  { id: "1a048e5003bca", name: "lovebird", title: "vẹt uyên ương" },
  { id: "4feeedb6cbe26", name: "bee-eater", title: "chim trảu" },
  { id: "bd38bbd1a5e5a", name: "hoopoe", title: "chim đầu rìu" },
  { id: "4b18f3739db8a", name: "jacamar", title: "chim ruồi lớn" },
  { id: "4d106b7660b1a", name: "toucan", title: "chim tu căng" },
];

console.log(listAnimals);

const saverDataListsAnimals = (data) => {
  try {
    const getAnimals =
      JSON.parse(localStorage.getItem("dataListsAnimals")) || [];
    if (getAnimals.length === 0) {
      getAnimals.push(...data);
      localStorage.setItem("dataListsAnimals", JSON.stringify(getAnimals));
      console.log(`lưu trữ thành công`);
    }
  } catch (error) {
    throw new Error(`Lỗi luu dữ liệu ${error}`);
  }
};

saverDataListsAnimals(listAnimals);

const getDataListsAnimals = () => {
  let value;
  try {
    const data = JSON.parse(localStorage.getItem("dataListsAnimals"));
    value = data;
  } catch (error) {
    throw new Error(`Truy xuất thất bại ${error}`);
  }
  return value;
};
/**
 * Thêm các option vào select box
 *
 * @throws {Error} Thêm option thất bại
 */
const addOptionForSelect = () => {
  try {
    const data = getDataListsAnimals();
    console.log(data);
    for (const { id, name, title } of data) {
      const option = document.createElement("option");
      // Thêm giá trị và nội dung cho option
      option.value = name;
      option.text = `${name} => ${title}`;
      // Thêm thuộc tính id cho option
      option.setAttribute("id", id);
      // Thêm option vào select box
      select.appendChild(option);
    }
  } catch (error) {
    // Ném ra lỗi
    throw new Error(`lỗi thêm option cho select ${error}`);
  }
};
addOptionForSelect();

/**
 * Hàm xử lý sự kiện submit của form
 *
 * @param {Event} e Sự kiện submit
 * @throws {Error} Nếu người dùng không chọn loại
 */
const handleForSubmit = (e) => {
  e.preventDefault();

  // Lấy giá trị được chọn từ form
  const formData = new FormData(form);
  const { select } = Object.fromEntries(formData);

  // Kiểm tra xem người dùng đã chọn giá trị hay chưa
  if (select === "Danh sách lựa chọn") {
    throw new Error("Bạn chưa chọn loại");
  }

  // Gọi API và lấy dữ liệu
  fetchAPIForAnimal(select).then((data) => {
    // Hiển thị số lượng kết quả
    showTotalAnimal(data.length, select);
    // ! hàm lấy hình ảnh theo api

    // Hiển thị danh sách các động vật
    showDataListAnimals(data, select);
  });
};
// ! hàm tìm kiếm hinh ảnh theo api

const getImgForAPI = async (nameAnimal) => {
  try {
    const res = await fetch(
      `${global.imgImg.url}v1/search?query=${nameAnimal}&orientation=landscape&size=large`,
      {
        method: "GET",
        headers: {
          Authorization: global.imgImg.key, // Không cần "Bearer"
          "Content-Type": "application/json",
        },
      }
    );

    // Kiểm tra nếu kết nối không thành công
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    if (data.photos && data.photos.length > 0) {
      return {
        atl: data.photos[0].alt,
        src: data.photos[0].src.large,
      };
    }
    return null;
  } catch (error) {
    console.error(`Lỗi khi tìm nạp hình ảnh: ${error.message}`);
    throw new Error(`Lỗi khi tìm nạp hình ảnh: ${error.message}`);
  }
};

/**
 * Gọi API và lấy dữ liệu các động vật
 *
 * @param {string} select Loại động vật
 * @returns {Promise<object[]>} Danh sách các động vật
 * @throws {Error} Lỗi kết nối api
 */
const fetchAPIForAnimal = async (select) => {
  try {
    // Gọi api và lấy dữ liệu
    const res = await fetch(`${global.base.url}${select}`, {
      method: "GET",
      headers: {
        "X-Api-Key": global.base.key,
      },
    });

    // Chuyển đổi dữ liệu từ json sang object
    const data = await res.json();

    // Trả về dữ liệu
    return data;
  } catch (error) {
    // Ném ra lỗi
    throw new Error(`Lỗi kết nối api ${error}`);
  }
};

/**
 * Hiển thị số lượng kết quả
 *
 * @param {number} total Số lượng kết quả
 * @param {string} name Tên loại động vật
 * @returns {void}
 */
const showTotalAnimal = (total, name) => {
  if (form.click()) {
    result.innerHTML = "";
  }

  // Xoa nội dung hiện tại
  let result = document.querySelector("#result");
  result.innerHTML = "";

  // Tạo các nút DOM
  let h5 = document.createElement("h5");
  h5.className = "text-danger";

  let spanTotal = document.createElement("span");
  spanTotal.className = "total text-secondary fw-bold fs-5";
  spanTotal.textContent = total;

  let spanValue = document.createElement("span");
  spanValue.className = "value text-warning";
  spanValue.textContent = `[${name.charAt(0).toUpperCase() + name.slice(1)}]`;

  // Tạo nội dung cho h5
  let textNode = document.createTextNode("Có tổng tất cả là : ");
  h5.appendChild(textNode);
  h5.appendChild(spanTotal);
  h5.appendChild(document.createTextNode(" kết quả từ khoá "));
  h5.appendChild(spanValue);

  // Append h5 vào phần tử #result
  result.appendChild(h5);
};

/**
 * @function concatResultHandlerForJoin
 * @description Takes an object with name and order properties and returns a
 *              concatenated string in the format of "animal_<name>_type_<order>"
 * @param {object} obj - An object with name and order properties
 * @returns {string} A concatenated string
 */
const concatResultHandlerForJoin = ({ name, order }) => {
  // Split the name and order strings into individual words
  const nameWords = name.split(" ");
  const orderWords = order.split(" ");

  // Uppercase the first letter of each word
  const upperNameWords = nameWords.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const upperOrderWords = orderWords.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the words back together with an underscore
  const joinName = upperNameWords.join("");
  const joinOrder = upperOrderWords.join("");
  return `animal_${joinName}_type_${joinOrder}`;
};

/**
 * @function showDataListAnimals
 * @description Render a list of animals to the UI
 * @param {array} data - An array of animal objects
 * @param {string} nameAnimal - The name of the animal
 * @returns {void}
 */

const showDataListAnimals = (data, nameAnimal) => {
  let ul = document.querySelector("ul");
  ul.innerHTML = "";

  nameAnimal = nameAnimal.charAt(0).toUpperCase() + nameAnimal.slice(1);
  let hr = document.createElement("hr");
  ul.appendChild(hr);
  let concacResult;

  try {
    for (let {
      name,
      characteristics,
      taxonomy,
      locations,
      taxonomy: { order },
    } of data) {
      concacResult = concatResultHandlerForJoin({ name, order });
      name = name.charAt(0).toUpperCase() + name.slice(1);

      let li = document.createElement("li");
      li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "shadow-lg"
      );

      let nameText = document.createTextNode(name);
      li.appendChild(nameText);

      let button = document.createElement("button");
      button.type = "button";
      button.classList.add("btn", "btn-info");
      button.setAttribute("data-bs-toggle", "modal");
      button.setAttribute("data-bs-target", `#${concacResult}`);
      button.textContent = "Xem chi tiết";
      li.appendChild(button);

      let modalDiv = document.createElement("div");
      modalDiv.classList.add("modal", "fade");
      modalDiv.id = concacResult;
      modalDiv.setAttribute("tabindex", "-1");
      modalDiv.setAttribute("aria-labelledby", `${concacResult}Label`);
      modalDiv.setAttribute("aria-hidden", "true");

      let modalDialog = document.createElement("div");
      modalDialog.classList.add("modal-dialog", "modal-lg");

      let modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      let modalHeader = document.createElement("div");
      modalHeader.classList.add("modal-header");

      let modalTitle = document.createElement("h5");
      modalTitle.classList.add("modal-title");
      modalTitle.id = `${concacResult}Label`;
      modalTitle.innerHTML = `Thông tin mô tả về loài động vật <span class="text-capitalize text-danger">[${name}]</span>`;

      let closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.classList.add("btn-close");
      closeButton.setAttribute("data-bs-dismiss", "modal");
      closeButton.setAttribute("aria-label", "Close");

      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(closeButton);
      modalContent.appendChild(modalHeader);

      let modalBody = document.createElement("div");
      modalBody.classList.add("modal-body");
      modalBody.style.backgroundImage = `url(${getImgForAPI(name)})`;
      modalBody.style.backgroundSize = "cover";
      modalBody.style.backgroundRepeat = "no-repeat";
      modalBody.style.backgroundPosition = "center";
      modalBody.style.backgroundAttachment = "fixed";

      let table = document.createElement("table");
      table.classList.add(
        "table",
        "table-striped",
        "table-hover",
        "table-bordered",
        "table-primary",
        "align-middle"
      );

      let tbody = document.createElement("tbody");
      tbody.classList.add("table-group-divider");

      Object.entries(characteristics).forEach(([key, value]) => {
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.scope = "row";
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);

        let td = document.createElement("td");
        td.textContent = value;

        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      modalBody.appendChild(table);

      let taxonomyTable = document.createElement("table");
      taxonomyTable.classList.add(
        "table",
        "table-striped",
        "table-hover",
        "table-bordered",
        "table-danger",
        "align-middle"
      );

      let taxonomyTbody = document.createElement("tbody");
      taxonomyTbody.classList.add("table-group-divider");

      Object.entries(taxonomy).forEach(([key, value]) => {
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.scope = "row";
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);

        let td = document.createElement("td");
        td.textContent = value;

        tr.appendChild(th);
        tr.appendChild(td);
        taxonomyTbody.appendChild(tr);
      });

      taxonomyTable.appendChild(taxonomyTbody);
      modalBody.appendChild(taxonomyTable);

      if (locations && locations.length > 0) {
        const locationContainer = document.createElement("div");
        locationContainer.classList.add("container-xxl");

        const row = document.createElement("div");
        row.classList.add("row");
        locationContainer.appendChild(row);

        const col = document.createElement("div");
        col.classList.add("col-sm-12", "d-block", "mx-auto");
        row.appendChild(col);

        const animalNameDiv = document.createElement("div");
        animalNameDiv.classList.add("name_animal");
        col.appendChild(animalNameDiv);

        const animalNameParagraph = document.createElement("p");
        animalNameParagraph.classList.add("text-muted", "text-center", "fs-3");
        animalNameParagraph.textContent = "Loài động vật ";

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        nameSpan.textContent = `[${name}]`;

        animalNameParagraph.appendChild(nameSpan);
        animalNameDiv.appendChild(animalNameParagraph);

        const br = document.createElement("br");
        animalNameDiv.appendChild(br);

        const locationTitle = document.createElement("p");
        locationTitle.classList.add("fw-bold", "text-center", "text-uppercase");
        locationTitle.textContent = "Chủ yếu khu vực:";
        animalNameDiv.appendChild(locationTitle);

        const hr = document.createElement("hr");
        animalNameDiv.appendChild(hr);

        const ulLocations = document.createElement("ul");
        ulLocations.classList.add("list-group", "list-group-flush");

        locations.forEach((location) => {
          const li = document.createElement("li");
          li.classList.add("list-group-item");
          li.textContent = location;
          ulLocations.appendChild(li);
        });

        animalNameDiv.appendChild(ulLocations);
        modalBody.appendChild(locationContainer);

        // Display image
        const containerImg = document.createElement("div");
        containerImg.classList.add("container-xxl");

        const rowImg = document.createElement("div");
        rowImg.classList.add("row");

        const colImg = document.createElement("div");
        colImg.classList.add("col-sm-12", "d-block", "mx-auto");

        const imgAnimal = document.createElement("div");
        imgAnimal.classList.add("img_animal");

        // Load the image asynchronously
        getImgForAPI(name).then((data) => {
          let { alt, src } = data;
          const img = document.createElement("img");
          img.src = src; // Assign the correct source from API data
          img.alt = alt; // Assign the correct alt text from API data
          img.classList.add("img-fluid");

          imgAnimal.appendChild(img);
        });

        colImg.appendChild(imgAnimal);
        rowImg.appendChild(colImg);
        containerImg.appendChild(rowImg);
        modalBody.appendChild(containerImg);
      } else {
        console.warn("No locations found for animal:", name);
      }

      modalContent.appendChild(modalBody);

      let modalFooter = document.createElement("div");
      modalFooter.classList.add("modal-footer");

      let closeModalButton = document.createElement("button");
      closeModalButton.type = "button";
      closeModalButton.classList.add("btn", "btn-secondary");
      closeModalButton.setAttribute("data-bs-dismiss", "modal");
      closeModalButton.textContent = "Close";

      modalFooter.appendChild(closeModalButton);
      modalContent.appendChild(modalFooter);

      modalDialog.appendChild(modalContent);
      modalDiv.appendChild(modalDialog);

      li.appendChild(modalDiv);
      ul.appendChild(li);
    }
  } catch (error) {
    throw new Error(`Lỗi trong quá trình render ra danh sách ${error}`);
  }
};

form.addEventListener("submit", handleForSubmit);
