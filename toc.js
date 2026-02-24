// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="series-7138.html"><strong aria-hidden="true">1.</strong> 應該是 Profilling 吧？</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="7138-01.html"><strong aria-hidden="true">1.1.</strong> Day 01 D1 遙測信號在軟體系統中的協同應用</a></li><li class="chapter-item expanded "><a href="7138-02.html"><strong aria-hidden="true">1.2.</strong> Day 02 D2 簡介系統性能工程</a></li><li class="chapter-item expanded "><a href="7138-03.html"><strong aria-hidden="true">1.3.</strong> Day 03 D3 性能測試成熟度模型與實踐指南</a></li><li class="chapter-item expanded "><a href="7138-04.html"><strong aria-hidden="true">1.4.</strong> Day 04 D4 系統性能工程充滿著挑戰</a></li><li class="chapter-item expanded "><a href="7138-05.html"><strong aria-hidden="true">1.5.</strong> Day 05 D5 全面掌握系統性能：工具選擇、最佳實踐與常見錯誤</a></li><li class="chapter-item expanded "><a href="7138-06.html"><strong aria-hidden="true">1.6.</strong> Day 06 D6 性能工程基本定律 - 80/20 法則</a></li><li class="chapter-item expanded "><a href="7138-07.html"><strong aria-hidden="true">1.7.</strong> Day 07 D7 性能工程基本定律 - Amdahl&#39;s Law</a></li><li class="chapter-item expanded "><a href="7138-08.html"><strong aria-hidden="true">1.8.</strong> Day 08 D8 性能工程基本定律 - 排隊理論</a></li><li class="chapter-item expanded "><a href="7138-09.html"><strong aria-hidden="true">1.9.</strong> Day 09 D9 性能的外部指標</a></li><li class="chapter-item expanded "><a href="7138-10.html"><strong aria-hidden="true">1.10.</strong> Day 10 D10 深入探討 RPS、QPS 和 TPS 的概念與應用</a></li><li class="chapter-item expanded "><a href="7138-11.html"><strong aria-hidden="true">1.11.</strong> Day 11 D11 高併發系統設計中的實踐與挑戰</a></li><li class="chapter-item expanded "><a href="7138-12.html"><strong aria-hidden="true">1.12.</strong> Day 12 D12 閒聊如何量測系統的容量與 Baseline？</a></li><li class="chapter-item expanded "><a href="7138-13.html"><strong aria-hidden="true">1.13.</strong> Day 13 D13 閒聊I/O密集型任務與 Context Switch</a></li><li class="chapter-item expanded "><a href="7138-14.html"><strong aria-hidden="true">1.14.</strong> Day 14 D14 CPU 觀測工具 vmstat 與 pidstat</a></li><li class="chapter-item expanded "><a href="7138-15.html"><strong aria-hidden="true">1.15.</strong> Day 15 D15 淺談 Go Tool Trace - 1</a></li><li class="chapter-item expanded "><a href="7138-16.html"><strong aria-hidden="true">1.16.</strong> Day 16 D16 淺談 Go Tool Trace - 2 Go Trace 與使用者自訂追蹤分析</a></li><li class="chapter-item expanded "><a href="7138-17.html"><strong aria-hidden="true">1.17.</strong> Day 17 D17 淺談 Go Tool Trace - 3 實際分析 Goroutine Analysis</a></li><li class="chapter-item expanded "><a href="7138-18.html"><strong aria-hidden="true">1.18.</strong> Day 18 D18 Go Tool Trace - 4 從 分析到實戰：最佳化 Goroutine 數量</a></li><li class="chapter-item expanded "><a href="7138-19.html"><strong aria-hidden="true">1.19.</strong> Day 19 D19 讓系統數據看得見（可觀測性驅動開發 ODD）</a></li><li class="chapter-item expanded "><a href="7138-20.html"><strong aria-hidden="true">1.20.</strong> Day 20 D20 淺談回饋導向優化 PGO</a></li><li class="chapter-item expanded "><a href="7138-21.html"><strong aria-hidden="true">1.21.</strong> Day 21 D21 淺談 Go GC 機制</a></li><li class="chapter-item expanded "><a href="7138-22.html"><strong aria-hidden="true">1.22.</strong> Day 22 D22 看見 GC</a></li><li class="chapter-item expanded "><a href="7138-23.html"><strong aria-hidden="true">1.23.</strong> Day 23 D23 整合 OpenTelemetry Metrics</a></li><li class="chapter-item expanded "><a href="7138-24.html"><strong aria-hidden="true">1.24.</strong> Day 24 D24 簡介 Flame Graph</a></li><li class="chapter-item expanded "><a href="7138-25.html"><strong aria-hidden="true">1.25.</strong> Day 25 D25 Pyroscope 與 Profiling</a></li><li class="chapter-item expanded "><a href="7138-26.html"><strong aria-hidden="true">1.26.</strong> Day 26 D26 關聯 Profile 與 Trace</a></li><li class="chapter-item expanded "><a href="7138-27.html"><strong aria-hidden="true">1.27.</strong> Day 27 D27 將四種遙測訊號編織在一起</a></li><li class="chapter-item expanded "><a href="7138-28.html"><strong aria-hidden="true">1.28.</strong> Day 28 D28 透過 Grafana Pyroscope 察覺 Memory Leak 並解決</a></li><li class="chapter-item expanded "><a href="7138-29.html"><strong aria-hidden="true">1.29.</strong> Day 29 D29 閒聊可觀測性&quot;驅動&quot;開發</a></li><li class="chapter-item expanded "><a href="7138-30.html"><strong aria-hidden="true">1.30.</strong> Day 30 D30 結尾，推薦讀物</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
