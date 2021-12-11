import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBuilding,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./Dashboard.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));

const dashboardLinks = [
  { id: 1, href: "/dashboard", text: "Business", icon: faBuilding },
  { id: 2, href: "/dashboard/favorites", text: "Favorites", icon: faHeart },
  { id: 3, href: "/dashboard/profile", text: "Profile", icon: faUserCircle },
];

const Dashboard: FC = ({ children }) => {
  const router = useRouter();

  const linkStyles = (href: string) => {
    if (router.asPath === href) return `${styles.link} ${styles.active}`;

    return styles.link;
  };

  return (
    <>
      <Header />
      <div className={styles.body}>
        <PageWrapper center>
          <div className={styles.wrapper}>
            <nav className={styles.nav}>
              <ul className="list">
                {dashboardLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <a className={linkStyles(link.href)}>
                        <FontAwesomeIcon icon={link.icon} />
                        <span>{link.text}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.content}>{children}</div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default Dashboard;
