dataSetVersion = "2023-09-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Season (시즌별 필터)",
    key: "season",
    tooltip: "Check this to restrict to certain seasons/contestants. (특정 시즌/참가자로 제한하려면 이 항목을 선택하세요.)",
    checked: false,
    sub: [
	  { name: "Season 1 Finalists (시즌1 파이널리스트)", key: "S1" },
      { name: "Season 2 Finalists (시즌2 파이널리스트)", key: "S2" },
      { name: "Season 3 Finalists (시즌3 파이널리스트)", key: "S3" },
      { name: "Season 4 Finalists (시즌4 파이널리스트)", key: "S4" },
      { name: "Season 4 Non-Finalist Contestants (시즌4 참가자)", key: "S4all" }
    ]
  },
	{
    name: "Filter by Voice Type (음성 유형별 필터)",
    key: "type",
    tooltip: "Check this to restrict to singers of a certain voice type/music background. (특정 음성 유형/음악배경의 싱어로 제한하려면 이 항목을 선택하세요.)",
    checked: false,
    sub: [ 
      { name: "Classical (성악가)", key: "classical" }, 
      { name: "Musical Actor (뮤지컬배우)", key: "musical" }, 
      { name: "Sorikkun (소리꾼)", key: "gugak" }, 
      { name: "Rock/Pop (로커/팝 보컬)", key: "rockpop" }
    ]
  },
{
    name: "Filter by Vocal Range (음역별 필터)",
    key: "range",
    tooltip: "Check this to restrict to singers of a certain vocal range. (특정 음역대의 싱어로 제한하려면 이 항목을 선택하세요.)",
    checked: false,
    sub: [ 
      { name: "Bass (베이스)", key: "bass" }, 
      { name: "Bass Baritone (베이스 바리톤)", key: "bb" }, 
      { name: "Baritone (바리톤)", key: "baritone" }, 
      { name: "Tenor (테너)", key: "tenor" }, 
      { name: "Countertenor (카운터테너)", key: "counter" }
    ]
  },
{
    name: "Filter by Group (그룹별 필터)",
    key: "group",
    tooltip: "Check this to restrict to singers of a certain group. (특정 그룹 제한하려면 이 항목을 선택하세요.)",
    checked: false,
    sub: [ 
      { name: "Forte di Quattro (포르테 디 콰토로)", key: "fdq" }, 
      { name: "Ingihyunsang (인기현상)", key: "ighs" }, 
      { name: "Hpresso (흉스프레소)", key: "hp" }, 
      { name: "Forestella (포레스텔라)", key: "fore" }, 
      { name: "Miraclass (미라클라스)", key: "mira" },
      { name: "Edel Reinklang (에델 라인클랑)", key: "edel" },
      { name: "La Poem (라포엠)", key: "lapo" },
      { name: "RabidAnce (라비던스)", key: "rabi" },
      { name: "Letteamor (레떼아모르)", key: "lette" },
      { name: "Libelante (리베란테)", key: "libe" },
      { name: "Forténa (포르테나)", key: "4t" },
      { name: "CREZL (크레즐)", key: "czl" }
    ]
  },];

dataSet[dataSetVersion].characterData = [
  {
    name: "고훈정 | Ko Hoonjeong",
    img: "kohoonjeong.png",
    opts: {
      season: ["S1"],
      type: ["classical", "musical"],
      range: ["baritone"],
      group: ["fdq"]    
    }
  },
  {
    name: "김현수 | Kim Hyunsoo",
    img: "kimhyunsoo.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"],
      group: ["fdq"]    
    }
  },
  {
    name: "손태진 | Son Taejin",
    img: "sontaejin.png",
    opts: {
     season: ["S1"],
      type: ["classical"],
      range: ["bb"],
      group: ["fdq"]    
}
  },
  {
    name: "이벼리 | Lee Byeori",
    img: "leebyeori.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"],
      group: ["fdq"]    
},
  },
	{
    name: "백인태 | Paek Intae",
    img: "paekintae.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"],    
      group: ["ighs"]    
}
  },
  {
    name: "유슬기 | Yoo Seulgi",
    img: "yooseulgi.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"],    
      group: ["ighs"]    
    }
  },
  {
    name: "곽동현 | Kwak Donghyun",
    img: "kwakdonghyun.png",
    opts: {
      season: ["S1"],
      type: ["rockpop"],
      range: ["tenor"],    
      group: ["ighs"]    
    }
  },
  {
    name: "박상돈 | Park Sangdon",
    img: "parksangdon.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["baritone"],      
      group: ["ighs"]        
    }
  },
	{
    name: "권서겅 | Kwon Seokyoung",
    img: "kwonseokyoung.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["bb"],    
      group: ["hp"]    
    }
  },
  {
    name: "이동신 | Lee Dongshin",
    img: "leedongshin.png",
    opts: {
      season: ["S1"],
      type: ["classical"],
      range: ["tenor"], 
      group: ["hp"]    
    }
  },
  {
    name: "백형훈 | Baek Hyeonghun",
    img: "baekhyeonghun.png",
    opts: {
      season: ["S1"],
      type: ["musical"],
      range: ["tenor"],   
      group: ["hp"]    
    }
  },
  {
    name: "고은성 | Ko Eunsung",
    img: "koeunsung.png",
    opts: {
      season: ["S1"],
      type: ["musical"],
      range: ["tenor"],   
      group: ["hp"]    
},
  },
	{
    name: "조민규 | Cho Mingyu",
    img: "chomingyu.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["fore"]    
    }
  },
  {
    name: "배두훈 | Bae Doohoon",
    img: "baedoohoon.png",
    opts: {
      season: ["S2"],
      type: ["musical"],
      range: ["tenor"],     
      group: ["fore"]       
    }
  },
  {
    name: "강형호 | Kang Hyungho",
    img: "kanghyungho.png",
    opts: {
      season: ["S2"],
      type: ["rockpop"],
      range: ["tenor", "counter"],     
      group: ["fore"]       
    }
  },
  {
    name: "고우림 | Ko Woorim",
    img: "kowoorim.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["bass"],     
      group: ["fore"]         
    },
  },
	{
    name: "김주택 | Kim Jootaek",
    img: "kimjootaek.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["baritone"],     
      group: ["mira"]        
    }
  },
  {
    name: "정필립 | Jeong Phillip",
    img: "jeongphillip.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["mira"]            
    }
  },
  {
    name: "박강현 | Park Kanghyun",
    img: "parkkanghyun.png",
    opts: {
      season: ["S2"],
      type: ["musical"],
      range: ["tenor"],     
      group: ["mira"]            
    }
  },
  {
    name: "한태인 | Han Taein",
    img: "hantaein.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["bass"],     
      group: ["mira"]            
    },
  },
	{
    name: "조형균 | Zo Hyunggyun",
    img: "zohyunggyun.png",
    opts: {
      season: ["S2"],
      type: ["musical"],
      range: ["baritone"],     
      group: ["edel"]            
    }
  },
  {
    name: "이충주 | Lee Choongjoo",
    img: "leechoongjoo.png",
    opts: {
      season: ["S2"],
      type: ["classical", "musical"],
      range: ["baritone"],     
      group: ["edel"]        
    }
  },
  {
    name: "김동현 | Kim Donghyun",
    img: "kimdonghyun.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["bb"],     
      group: ["edel"]        
    }
  },
  {
    name: "안세권 | Ahn Sekwon",
    img: "ahnsekwon.png",
    opts: {
      season: ["S2"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["edel"]        
    },
  },
	{
    name: "유채훈 | You Chaehoon",
    img: "youchaehoon.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["lapo"]          
    }
  },
  {
    name: "최성훈 | Choi Sunghoon",
    img: "choisunghoon.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["counter"],     
      group: ["lapo"]        
    }
  },
  {
    name: "정민성 | Jeong Minseong",
    img: "jeongminseong.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["baritone"],     
      group: ["lapo"]        
    }
  },
  {
    name: "박기훈 | Park Kihun",
    img: "parkkihun.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["lapo"]        
    },
  },
	{
    name: "김바울 | Kim Paul",
    img: "kimpaul.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["bass"],     
      group: ["rabi"]        
    }
  },
  {
    name: "존노 | John Noh",
    img: "johnnoh.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["rabi"]     
    }
  },
  {
    name: "고영열 | Ko Yeongyeol",
    img: "koyeongyeol.png",
    opts: {
      season: ["S3"],
      type: ["gugak"],
      range: ["tenor"],     
      group: ["rabi"]     
    }
  },
  {
    name: "황건하 | Hwang Gunha",
    img: "hwanggunha.png",
    opts: {
      season: ["S3"],
      type: ["musical"],
      range: ["baritone"],     
      group: ["rabi"]     
    },
  },
	{
    name: "길병민 | Gil Byeongmin",
    img: "gilbyeongmin.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["bb"],     
      group: ["lette"]     
    }
  },
  {
    name: "김성식 | Kim Sungsik",
    img: "kimsungsik.png",
    opts: {
      season: ["S3"],
      type: ["musical"],
      range: ["baritone"],     
      group: ["lette"]     
    }
  },
  {
    name: "김민석 | Kim Minseok",
    img: "kimminseok.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["lette"]     
    }
  },
  {
    name: "박현수 | Park Hyunsoo",
    img: "parkhyunsoo.png",
    opts: {
      season: ["S3"],
      type: ["classical"],
      range: ["baritone"],     
      group: ["lette"]     
    },
  },
	{
    name: "김지훈 | Kim Jihoon",
    img: "kimjihoon.png",
    opts: {
      season: ["S4"],
      type: ["classical", "musical"],
      range: ["baritone"],     
      group: ["libe"]     
    }
  },
  {
    name: "진원 | Jin Won",
    img: "jinwon.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["libe"]     
    }
  },
  {
    name: "정승원 | Jung Seungwon",
    img: "jungseungwon.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["libe"]     
    }
  },
  {
    name: "노현우 | Roh Hyunwoo",
    img: "rohhyunwoo.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["baritone"],     
      group: ["libe"]     
    },
  },
	{
    name: "오스틴킴 | Austin Kim",
    img: "austinkim.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["counter"],     
      group: ["4t"]     
    }
  },
  {
    name: "이동규 | Lee Dongqyu",
    img: "leedongqyu.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["counter"],     
      group: ["4t"]         
    }
  },
  {
    name: "서영택 | Seo Yeongtaek",
    img: "seoyeongtaek.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["4t"]         
    }
  },
  {
    name: "김성현 | Kim Seonghyeon",
    img: "kimseonghyeon.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["tenor"],     
      group: ["4t"]         
    },
  },
	{
    name: "임규형 | Lim Kyuhyung",
    img: "limkyuhyung.png",
    opts: {
      season: ["S4"],
      type: ["musical"],
      range: ["tenor"],     
      group: ["czl"]         
    }
  },
  {
    name: "조진호 | Jo Jinho",
    img: "jojinho.png",
    opts: {
      season: ["S4"],
      type: ["rockpop"],
      range: ["tenor"],     
      group: ["czl"]      
    }
  },
  {
    name: "김수인 | Kim Suin",
    img: "kimsuin.png",
    opts: {
      season: ["S4"],
      type: ["gugak"],
      range: ["tenor"],     
      group: ["czl"]      
    }
  },
  {
    name: "이승민 | Lee Seungmin",
    img: "leeseungmin.png",
    opts: {
      season: ["S4"],
      type: ["classical"],
      range: ["baritone"],     
      group: ["czl"]      
    },
  },
	{
    name: "박준범 | Park Junbeom",
    img: "parkjunbeom.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "김우성 | Kim Wooseong",
    img: "kimwooseong.png",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["baritone"]    
    }
  },
  {
    name: "이해준 | Lee Haejun",
    img: "leehaejun.png",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "이기현 | Lee Kihyun",
    img: "leekihyun.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["bass"]    
    },
  },
	{
    name: "김광진 | Kim Kwangjin",
    img: "kimkwangjin.png",
    opts: {
      season: ["S4all"],
      type: ["rockpop"],
      range: ["tenor"]    
    }
  },
  {
    name: "림팍 | Rim Park",
    img: "rimpark.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "신은총 | Shin Eunchong",
    img: "shineunchong.png",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "안민수 | Ahn Minsoo",
    img: "ahnminsoo.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["bb"]    
    },
  },
	{
    name: "이한범 | Lee Hanbeom",
    img: "leehanbeom.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "안혜찬 | Ahn Hyechan",
    img: "ahnhyechan.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "김모세 | Kim Mose",
    img: "kimmose.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["tenor"]    
    }
  },
  {
    name: "홍준기 | Hong Jungi",
    img: "hongjungi.png",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    },
  },
	{
    name: "이홍석 | Lee Hongseok",
    img: "leehongseok.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["baritone"]    
    }
  },
  {
    name: "이세헌 | Lee Seheon",
    img: "leeseheon.png",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "윤현선 | Yun Hyunseon",
    img: "yunhyunseon.png",
    opts: {
      season: ["S4all"],
      type: ["musical"],
      range: ["tenor"]    
    }
  },
  {
    name: "임현준 | Lim Hyunjoon",
    img: "limhyunjoon.png",
    opts: {
      season: ["S4all"],
      type: ["classical"],
      range: ["bass"]    
    },
  },

];
