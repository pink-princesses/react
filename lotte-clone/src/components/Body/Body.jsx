import "../../styles/Body.css"
import CommonBtn from "../common/CommonBtn"
import MainCard from "./MainCard"
import Card from "./Card"
import Aos from "./Aos"


export default function Body () {
	const magazinDatas = [
		{
			url: "https://minfo.lotteshopping.com/content/mazin/20220105/MAM00000000000001769/20220105154024194_7.jpeg",
			title: "흑호랑이 기운가득! 임인년 한정판 뷰티 컬렉션",
		},
		{
			url: "https://minfo.lotteshopping.com/content/mazin/20211228/MAM00000000000001768/20211228093217517_0.jpeg",
			title: "현실과 몽환 사이, 그 경계의 풍경을 그리는 작가!",
		},
		{
			url: "https://minfo.lotteshopping.com/content/mazin/20211223/MAM00000000000001749/20211223150243740_0.jpeg",
			title: "요린이도 칭찬받는 연말 홈파티 메뉴",
		},
	]
	const brandDatas = [
		{
			url: "https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_01.jpg",
			title: "엘리든",
		},
		{
			url: "https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_02.jpg",
			title: "롯데탑스",
		},
		{
			url: "https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_03.jpg",
			title: "남파고택",
		},
		{
			url: "https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/brand_img_04.jpg",
			title: "시시호시",
		},
	]
	return (
		<div id="main_content">
			<div className="main_visual">
				<a href="#">
					<img src="https://minfo.lotteshopping.com/content/bnr/202201/C00110C00111C07902C080011/20220117133753673_1.jpg" alt="" />
				</a>
				<div className="inner">
					<div className="visual_event">
						<div className="btn_wrap">
							<a href="" className="link black">
								휴점일 안내
								<i className="arr"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="main_group">
				<div className="inner">
					<MainCard 
						titleUrl={"url(https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/move_tit_culture.jpg)"}
						txt01={"롯데백화점 문화센터"}
						txt02={"당신의 라이프스타일 연구소"}
						txt03={"다채롭고 수준 높은 클래스를 통한 고품격 고감성의 복합 문화공간을 즐겨보세요"}
						btn={"문화센터 바로가기"}
					></MainCard>
					<div className="inner_right">
						<div className="img_wrap">
							<img src="https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/culture.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="gallery">
				<div className="inner">
					<div className="inner_left">
						<div className="img_wrap">
							<img src="https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/gallery.jpg" alt="" />
						</div>
					</div>
					<MainCard 
						titleUrl={"url(https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/move_tit_gallery.jpg)"}
						txt01={"롯데갤러리"}
						txt02={"백화점의 중심에서 문화의 중심으로"}
						txt03={"가장 가까운 곳에서 최고 수준의 각 분야 전문가들과 함께하는 고품격 라이프 스타일을 만들어 보세요"}
						btn={"문화센터 바로가기"}
					></MainCard>
				</div>
			</div>
			<div className="main_magazine">
				<div className="inner">
					<Aos
						url={"url(https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/move_tit_maga.png) 0% 0% no-repeat"}
						txt01={"일상을 빛낼 트렌드 가이드"}
						txt02={"패션, 문화, 라이프 스타일의 최신 트렌드를 쉽고 빠르게 확인해 보세요"}></Aos>
					<div className="card_wrap">
						<ul>
							{magazinDatas.map(data => {
								return(
									<Card 
										data={data}
										child={<CommonBtn>매거진 보기</CommonBtn>}
									>
									</Card>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
			<div className="main_brand">
				<div className="inner">
					<Aos
						url={"url(https://minfo.lotteshopping.com/mobweb/resources/layout/images/lotte/main/move_tit_maga.png) 0% 0% no-repeat"}
						txt01={"롯데에서만 만날 수 있는 브랜드"}
						txt02={"엘리든, 롯데탑스, 남파고택, 시시호시 등 롯데백화점에서만 만날 수 있는 특별한 브랜드를 소개합니다"}></Aos>
					<CommonBtn style={{ left: "89.4%" }}>전체보기</CommonBtn>
					<div className="card_wrap">
						<ul>
						{brandDatas.map(data => {
							return(
								<Card 
									data={data}
								>
								</Card>
							)
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}



