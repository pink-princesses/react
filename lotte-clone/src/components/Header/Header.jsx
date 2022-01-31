import styles from "../../styles/Header.module.css"
import LinkListElement from "./LinkListElement"
import GnbElement from "./GnbElement"
import classNames from "classnames/bind"

const cx = classNames.bind(styles);

export default function Header () {
	const linkListDatas = [
		{title: "서비스", inData: ["APP소개", "롯데상품권", "L.POINT", "스마트픽", "서비스 제도", "배송조회", "법인/단체 구매",]},
		{title: "우수고객라운지", inData: ["우수고객혜택", "나의 등급 조회"]},
		{title: "롯데갤러리", inData: null},
		{title: "롯데웨딩", inData: null},
		{title: "문화센터", inData: null},
		{title: "온라인상담실", inData: null},
	]
	const gnbListDatas = [
		{title: "롯데백화점"},
		{title: "에비뉴엘"},
		{title: "영플라자"},
		{title: "프리미엄아울렛"},
		{title: "아울렛"},
		{title: "롯데몰"},
		{title: "엘큐브"},
	]

	return (
		<div className={cx("header")}>
			<div className="inner">
				<div className={cx("box_top")}>
					<div className={cx("util_wrap")}>
						<ul className={cx("link_list")}>
							{linkListDatas.map((data) => {
								return (
									<LinkListElement data={data} key={data.title}></LinkListElement>
								)
							})}
						</ul>
						<ul className={cx("etc_list")}>
							<li>
								<a href="#" className={cx("btn_search")}></a>
							</li>
						</ul>
					</div>
				</div>
				<div className={cx("gnb_wrap")}>
					<div className={cx("gnb")}>
						<h1>
							<a href="#"></a>
						</h1>
						<ul className={cx("gnb_list")}>
							{gnbListDatas.map((data) => {
									return (
										<GnbElement data={data} key={data.title}></GnbElement>
									)
								})}
						</ul>
					</div>
					<a href="#" className={cx("link")}>
						<img src="https://minfo.lotteshopping.com/mobweb/resources/layout/images/common/gnb_location.png" alt="" />
						지점/매장안내
					</a>
				</div>
			</div>
		</div>
	)
}