import "./PageNav.css";

const normalize = (path: string) => path.replace(/\/$/, "") || "/";

const LINKS = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
];

export function PageNav({ pathname }: { pathname: string }) {
    const current = normalize(pathname);
    const page = current === "/" ? "home" : current.slice(1);
    const ariaCurrent = (href: string) =>
        current === normalize(href) ? "page" : undefined;

    return (
        <nav className="page-nav" data-page={page}>
            <div className="links">
                <a href="/" aria-current={ariaCurrent("/")}>
                    <img src="/invader.svg" height="20" alt="Home" />
                </a>
                {LINKS.map(({ href, label }) => (
                    <a key={href} href={href} aria-current={ariaCurrent(href)}>
                        {label}
                    </a>
                ))}
                <div className="active-bar">
                    <div className="active-thumb" />
                </div>
            </div>
        </nav>
    );
}
