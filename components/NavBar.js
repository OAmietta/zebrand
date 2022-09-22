import Image from "next/image";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand me-2" href="https://zebrands.mx/">
                    <Image
                        src="https://zebrands.mx/wp-content/uploads/2021/07/WEB-ZEB-05-1-127x36.png"
                        height={30}
                        width={150}
                        objectFit='contain'
                        alt="Logo"
                        loading="lazy"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                    <div className="d-flex align-items-center">
                        {
                            router.pathname.includes("repositorie") && (
                                <>
                                    <button onClick={() => router.push("/userSearch")} type="button" className="btn btn-primary me-3">
                                        Search users
                                    </button>
                                </>
                            )
                        }
                        {
                            router.pathname.includes("user") && (
                                <>
                                    <button onClick={() => router.push("/repositorieSearch")} type="button" className="btn btn-primary me-3">
                                        Search repositories
                                    </button>
                                </>
                            )
                        }
                        <a
                            className="btn btn-dark px-3"
                            href="https://github.com/"
                            role="button"
                            target={"_blank"} rel="noreferrer"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}