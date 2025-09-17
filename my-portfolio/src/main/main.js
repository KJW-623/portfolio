import { useEffect, useMemo, useState } from "react";
import "./main.css";

/* ====== 항목 데이터(원하는 만큼 추가) ====== */
const COLLECTIONS = [
    {
        key: "projects",
        label: "Projects",
        items: [
            {
                id: "p1",
                title: "커뮤니티 기반 크라우드 펀딩 웹사이트 개발",
                period: "25.05.28 – 25.06.13",
                tags: ["Front-end", "HTML", "CSS", "JS", "React", "Visual Studio Code"],
                summary:
                    "실시간 커뮤니티 서비스를 동반한 펀딩 사이트",
                cover: "https://i.imgur.com/AvQ7t7f.png",
                media: { type: "youtube", id: "JzIyspXKFQo" },
                content: [
                    "- 개발 파트: 메인 및 인기 페이지, 결제, 관심/알림, 마이페이지와 프로젝트, 헬프센터 패이지 개발.",
                    "- 담당 역할: 문서 작업 및 기획, 결과 도출, 커뮤니티 및 기타 기능 개발, 서류 정리.",
                    <br/>,
                    "- 기존 크라우드 펀딩 사이트를 기반한 직관적인 UI/UX 적용.",
                    "- 실시간 채팅을 기반으로 원활한 정보 공유가 가능하여 펀딩 참여 흐름을 설계.",
                ],
                links: [
                    { label: "GitHub", href: "https://github.com/KJW-623/First-teamProject.git" },
                    { label: "문서", href: "https://drive.google.com/drive/folders/1YG6E3xj5lkgn-EuxgXrW-evyPIU8kWp1?usp=sharing" },
                ],
            },
            {
                id: "p2",
                title: "공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스",
                period: "25.07.28 – 25.08.14",
                tags: ["Back-end", "HTML", "CSS", "JS", "JAVA", "API", "MyBatis", "Spring", "Tomcat", "OracleDB", "Eclipse"],
                summary:
                    "API를 활용한 실시간 정보 기반 여행지 정보 공유 사이트",
                cover: "https://i.imgur.com/vk6TOlR.png",
                media: { type: "youtube", id: "cG7USoPdRxU" },
                content: [
                    "- 개발 파트: 오디오 해설, FAQ 및 실시간 채팅 상담 페이지, 테마 페이지, 커뮤니티 페이지",
                    "- 담당 역할: 문서 작업 및 기획, 결과 정리 및 발표, 페이지 개발, 서류 정리.",
                    <br/>,
                    "- 날씨 API를 이용한 실시간 날씨 확인 및 여행지 장소 탐색 기능.",
                    "- 사이트 자체 커뮤니티 페이지로 실시간 반응 및 정보 공유 흐름 설계.",
                ],
                links: [
                    { label: "GitHub", href: "https://github.com/KJW-623/Second-teamProject.git" },
                    { label: "문서", href: "https://drive.google.com/drive/folders/1Ol_hNjkkIAW-jCM6RImHmDhn2rWQXo9f?usp=sharing" },
                ],
            },
            {
                id: "p3",
                title: "괴담 분위기 지침서 사이트",
                period: "25.08.11 – 25.08.13",
                tags: ["Front-end", "HTML", "CSS", "JS", "React", "Visual Studio Code"],
                summary:
                    "나폴리탄 괴담을 기반으로 한 지침서 확인 사이트",
                cover: "https://i.imgur.com/ujFYBxc.png",
                media: { type: "youtube", id: "OAKXZqCyrPU" },
                content: [
                    "- 요청받아 제작한 1인 개발.",
                    "- 게임 참여자 탐색 내용을 기반으로 한 매뉴얼 사이트.",
                    "- 화면 연출 효과와 사이트 자체 이스터에그를 통한 활발한 참여 유도.",
                ],
                links: [
                    { label: "GitHub", href: "https://github.com/KJW-623/YOURCAST.git" },
                    { label: "사이트", href: "https://kjw-623.github.io/YOURCAST/" },
                ],
            },
            {
                id: "p4",
                title: "지역 음식점 공유 및 리뷰 서비스 시스템",
                period: "25.08.21 – 2025.09.12",
                tags: ["Front + Back", "HTML", "CSS", "JS", "JAVA", "React", "MyBatis", "Spring", "Tomcat", "OracleDB", "Visual Studio Code", "Eclipse"],
                summary:
                    "1인가구와 아동급식카드 청소년을 위한 음식점 추천 사이트",
                cover: "https://i.imgur.com/jSa5RTI.png",
                media: { type: "youtube", id: "XIZwazog7xI" },
                content: [
                    "- 개발 파트: 관리자 페이지(로그인, 메인, 사용자, 식당, 컨텐츠 관리, 분석 대시보드.",
                    "- 담당 역할: 문서 작업 및 기획, 관리자 페이지 개발, 서류 정리.",
                    <br/>,
                    "- 검색/필터, 장소 상세, 리뷰, 북마크, 알림까지 유기적으로 연결.",
                    "- 관리자 대시보드로 식당 및 사용자 관리, 신고/블라인드, 태그 관리 등 기능 제공.",
                ],
                links: [
                    { label: "GitHub", href: "https://github.com/KJW-623/Third-teamProject.git" },
                    { label: "문서", href: "https://drive.google.com/drive/folders/1PvTiW5yNt20CV5qL0a431WjFbQvZq8Za?usp=sharing" },
                ],
            },
        ],
    },
    {
        key: "Completion",
        label: "Completion",
        items: [
            {
                id: "c1",
                title: "자바(JAVA)활용 데이터 플랫폼 구축 풀스택 개발자 과정",
                period: "2025.03.31-2025.09.19",
                tags: ["JAVA", "풀스택", "교육", "국비교육"],
                summary: "풀스택 개발자 양성을 위한 국비교육 KDT과정",
                cover: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
                media: { type: "image", src: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg" },
                content: [
                    "Web-Service Project - 커뮤니티 기반 크라우드 펀딩 웹사이트 개발 :: 84 시간.",
                    "Web-Solution Project - 공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스 :: 108 시간",
                    "Final Project - 지역 음식점 정보 공유 및 리뷰 서비스 시스템 :: 172 시간",
                    "프로그램 기초 문법 - 1. JAVA개발환경 구축 2. 자바 기본문법 :: 80 시간",
                    "프론트 엔드 개발 - 1. HTML5 2. CSS 3. JavaScript 4. jQuery :: 80 시간",
                    "반응형 UI - 1. React 개발 환경 갖추기 2. 스타일링 3. 애니메이션 4. 내비게이션 5. 서버와 API 통신 6. 리덕스 이해하기 ::80 시간",
                    "백 엔드 개발Ⅰ - 1. 객체지향 프로그래밍 2. 예외처리 3. 자바 주요 클래스 4. 스레드/입출력/네트워킹 :: 80 시간",
                    "백 엔드 개발Ⅱ - 1. Oracle 개발환경 구축 2. 데이터베이스 구성객체 3. SQL문장/함수",
                    "ㅤㅤㅤㅤㅤㅤㅤㅤ4. Join과 SubQuery 5. 엔터티 및 속성 6. 정규화, 반정규화, 통합, 관계 7. 개념, 논리, 물리 모델링 :: 100 시간",
                    "공공데이터 활용 - 1. 공공데이터API 이해하기 2. 공공데이터API 분석하기 3. 공공데이터API 적용하기 :: 24 시간",
                    "클라우드 서버 - 1. 리눅스(우분투) 환경 구축 2. 도커(Docker) 이해하기 3. 도커 컨테이너 기술 활용 4. 네트워킹/데이터 연동 :: 24 시간",
                    "백 엔드 개발Ⅲ - 1. 서버프로그램 구현 2. 프레임워크(Spring)활용 3. Git 활용 :: 120 시간",
                ],
            },
            {
                id: "c2",
                title: "정보처리산업기사",
                period: "2025.05.",
                tags: ["정보처리산업기사", "자격증"],
                summary: "한국산업인력공단",
                cover: "https://plan4u.shinhan.com/52week/sub/10week/img/sub_career01_img01.jpg",
                media: { type: "image", src: "https://plan4u.shinhan.com/52week/sub/10week/img/sub_career01_img01.jpg" },
                content: [
                    "필기합격 상태",
                ],
            },
        ],
    },
];

/* ====== 상단 메타 ====== */
function MetaBar() {
    return (
        <div className="main-meta">
            <div className="main-meta-left">JIWOO'S PORTFOLIO</div>
            <div className="main-meta-center"></div>
        </div>
    );
}

/* ====== 히어로 ====== */
function Hero({ offset }) {
    return (
        <section className="main-hero">
            <div className="main-watermark" aria-hidden>PORTFOLIO</div>

            {/* 왼쪽 정렬 + 하단에서 살짝 띄움 */}
            <div className="main-copy" style={{ transform: `translateY(${offset * -0.03}px)` }}>
                <h1>
                    I Design With Empathy,<br />
                    And Engineer For <span className="main-grad">Reliability.</span>
                </h1>
                <p className="main-lead">
                    From pixels to pipelines, I build reliable, user-first software.
                </p>
            </div>

            {/* 중앙 정렬 스크롤 안내 */}
            <div className="main-bottombar">
                <a className="main-scroll" href="#works">Scroll to explore ⌄</a>
            </div>

            <div className="main-grain" aria-hidden />
        </section>
    );
}

/* ====== 카드 ====== */
function Card({ item, onOpen }) {
    return (
        <article
            className="main-card"
            role="button"
            tabIndex={0}
            onClick={() => onOpen(item)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(item)}
        >
            <div className="main-card-media">
                {item.cover ? <img src={item.cover} alt="" loading="lazy" /> : <div className="main-card-skel" />}
            </div>
            <div className="main-card-body">
                <h3 className="main-card-title">{item.title}</h3>
                <p className="main-card-period">{item.period}</p>
                <p className="main-card-summary">{item.summary}</p>
                <div className="main-tags">
                    {item.tags?.map((t) => <span className="main-tag" key={t}>{t}</span>)}
                </div>
                <div className="main-card-foot"><span className="main-linklike">자세히 보기 →</span></div>
            </div>
        </article>
    );
}

/* ====== 모달 ====== */
function Modal({ item, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    if (!item) return null;

    return (
        <div className="main-modal" role="dialog" aria-modal="true" onClick={onClose}>
            <div className="main-dialog" onClick={(e) => e.stopPropagation()}>
                <button className="main-close" onClick={onClose} aria-label="닫기">✕</button>

                <header className="main-dialog-head">
                    <div>
                        <h3>{item.title}</h3>
                        {item.period && <p className="main-dialog-period">{item.period}</p>}
                    </div>
                    <div className="main-tags">
                        {item.tags?.map((t) => <span className="main-tag" key={t}>{t}</span>)}
                    </div>
                </header>

                {item.media?.type === "youtube" && (
                    <div className="main-media-embed">
                        <iframe
                            src={`https://www.youtube.com/embed/${item.media.id}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                )}
                {item.media?.type === "image" && (
                    <div className="main-media-embed">
                        <img src={item.media.src} alt={item.media.alt || item.title} />
                    </div>
                )}
                {item.media?.type === "video" && (
                    <div className="main-media-embed">
                        <video src={item.media.src} poster={item.media.poster || ""} controls />
                    </div>
                )}

                <section className="main-dialog-body">
                    {item.content?.map((p, i) => <p key={i}>{p}</p>)}
                </section>

                {item.links?.length ? (
                    <footer className="main-dialog-foot">
                        {item.links.map((l) => (
                            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="main-btn-link">
                                {l.label} ↗
                            </a>
                        ))}
                    </footer>
                ) : null}
            </div>
        </div>
    );
}

/* ====== 그리드 + 탭 ====== */
function Works({ onOpen }) {
    const [tab, setTab] = useState(COLLECTIONS[0].key);
    const items = useMemo(
        () => COLLECTIONS.find((c) => c.key === tab)?.items || [],
        [tab]
    );

    return (
        <section id="works" className="main-works">
            <div className="main-works-head">
                <h2>My Projects</h2>
                <p className="main-muted">이런 과정을 거쳐 포트폴리오를 완성했어요.</p>
            </div>

            <div className="main-tabs" role="tablist" aria-label="컬렉션">
                {COLLECTIONS.map((c) => (
                    <button
                        key={c.key}
                        role="tab"
                        aria-selected={tab === c.key}
                        className={`main-tab ${tab === c.key ? "is-active" : ""}`}
                        onClick={() => setTab(c.key)}
                    >
                        {c.label}
                    </button>
                ))}
            </div>

            <div className="main-grid">
                {items.map((it) => <Card key={it.id} item={it} onOpen={onOpen} />)}
            </div>
        </section>
    );
}

/* 페이지 */
export default function Main() {
    const [offset, setOffset] = useState(0);
    const [current, setCurrent] = useState(null);

    // 패럴랙스
    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 포인터 라이트
    useEffect(() => {
        const onMove = (e) => {
            document.documentElement.style.setProperty("--mx", e.clientX + "px");
            document.documentElement.style.setProperty("--my", e.clientY + "px");
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div className={`main ${current ? "is-modal-open" : ""}`}>
            <MetaBar />
            <Hero offset={offset} />
            <Works onOpen={setCurrent} />
            <footer className="main-foot">© {new Date().getFullYear()} Kim Jiwoo Portfolio.</footer>
            <Modal item={current} onClose={() => setCurrent(null)} />
        </div>
    );
}
